'use client'

import { useState, FormEvent } from 'react'

// Submissions POST to an n8n webhook that emails Michelle the lead.
// Override with NEXT_PUBLIC_CONTACT_WEBHOOK_URL; the production URL is the fallback
// so it works on Vercel without env setup (.env.local is gitignored).
const WEBHOOK_URL =
  process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_URL ||
  'https://elib.app.n8n.cloud/webhook/velvet-local-contact'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errors, setErrors] = useState<{ name?: boolean; email?: boolean }>({})

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value.trim(),
      practice: (form.elements.namedItem('practice') as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem('email') as HTMLInputElement).value.trim(),
      city: (form.elements.namedItem('city') as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim(),
    }
    const errs: typeof errors = {}
    if (!data.name) errs.name = true
    if (!data.email) errs.email = true
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setStatus('sending')

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        form.reset()
        setStatus('sent')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-lg)' }}>
        <div className="field">
          <label htmlFor="f-name">Your name</label>
          <input
            id="f-name" name="name" type="text" placeholder="First & last" required
            style={errors.name ? { borderColor: 'var(--accent-orange)' } : {}}
          />
        </div>
        <div className="field">
          <label htmlFor="f-practice">Practice name</label>
          <input id="f-practice" name="practice" type="text" placeholder="Your med spa" />
        </div>
      </div>
      <div className="field" style={{ marginTop: 'var(--space-lg)' }}>
        <label htmlFor="f-email">Email</label>
        <input
          id="f-email" name="email" type="email" placeholder="you@yourpractice.com" required
          style={errors.email ? { borderColor: 'var(--accent-orange)' } : {}}
        />
      </div>
      <div className="field" style={{ marginTop: 'var(--space-lg)' }}>
        <label htmlFor="f-city">City / market</label>
        <input id="f-city" name="city" type="text" placeholder="Where do you compete for patients?" />
      </div>
      <div className="field" style={{ marginTop: 'var(--space-lg)' }}>
        <label htmlFor="f-message">What&apos;s on your mind?</label>
        <textarea id="f-message" name="message" placeholder="Where your practice stands today, and what you'd love to fix." />
      </div>
      <button
        className="btn btn-primary"
        type="submit"
        disabled={status === 'sending' || status === 'sent'}
        style={{ width: '100%', justifyContent: 'center', marginTop: 'var(--space-2xl)' }}
      >
        {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent ✓' : 'Send message'}
        {status === 'idle' && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6"/>
          </svg>
        )}
      </button>
      <p className="form-note" style={{ textAlign: 'center' }}>Goes straight to Michelle. No spam, ever.</p>
      {status === 'sent' && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 'var(--space-lg)', padding: 'var(--space-lg)', background: 'var(--accent-mint)', borderRadius: 'var(--rounded-sm)' }}>
          <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 14 }}>
            Got it — Michelle will be in touch within one business day.
          </span>
        </div>
      )}
      {status === 'error' && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 'var(--space-lg)', padding: 'var(--space-lg)', background: 'var(--accent-peach)', borderRadius: 'var(--rounded-sm)' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 14 }}>
            Something went wrong. Email michelle@velvetlocal.com directly.
          </span>
        </div>
      )}
    </form>
  )
}
