import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Velvet Local',
  description: 'Book a free 15-minute call with Velvet Local. No pressure, no pitch deck — just a conversation about your practice.',
}

export default function ContactPage() {
  return (
    <>
      <Header />

      {/* ========================= CONTACT ========================= */}
      <section className="band band-light" id="start" style={{ paddingTop: 64 }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: 'var(--space-5xl)', alignItems: 'start' }}>

          {/* Left: pitch + details */}
          <div>
            <div className="eyebrow" style={{ color: 'var(--body)', marginBottom: 'var(--space-2xl)' }}>Let&apos;s talk</div>
            <h1 className="headline" style={{ fontSize: 50, lineHeight: 1.04, letterSpacing: '-1.5px', maxWidth: 460 }}>
              Ready to see what this looks like for <span className="grad-text">your practice?</span>
            </h1>
            <p className="lead" style={{ margin: 'var(--space-2xl) 0 0', maxWidth: 440 }}>
              Book a 15-minute call. No pressure, no pitch deck. Just a conversation about where your practice
              stands and what it would take to rank first.
            </p>

            <div style={{ marginTop: 'var(--space-4xl)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              <a
                className="card"
                href="https://calendly.com/eli-velvetlocal/30min"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, textDecoration: 'none' }}
              >
                <span>
                  <span className="eyebrow" style={{ color: 'var(--body)' }}>Fastest</span>
                  <span className="card-title" style={{ display: 'block', marginTop: 6 }}>Book a 15-minute call</span>
                </span>
                <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </a>
              <a
                className="card"
                href="mailto:michelle@velvetlocal.com"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, textDecoration: 'none' }}
              >
                <span>
                  <span className="eyebrow" style={{ color: 'var(--body)' }}>Email</span>
                  <span className="card-title" style={{ display: 'block', marginTop: 6 }}>michelle@velvetlocal.com</span>
                </span>
                <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16v12H4z"/><path d="M4 7l8 6 8-6"/></svg>
              </a>
            </div>

            <div style={{ marginTop: 'var(--space-3xl)', borderTop: '1px solid var(--hairline)', paddingTop: 'var(--space-2xl)' }}>
              <p className="lead" style={{ fontSize: 16, maxWidth: 400 }}>
                We typically reply within <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>4 business hours.</strong>{' '}
                Not the right fit? No hard feelings. Just say so.
              </p>
            </div>
          </div>

          {/* Right: form card */}
          <div className="card" style={{ padding: 'var(--space-4xl)' }}>
            <span className="tag" style={{ background: 'var(--accent-mint)', color: 'var(--ink)' }}>Free offer included</span>
            <h2 className="headline" style={{ fontSize: 26, margin: 'var(--space-lg) 0 4px', letterSpacing: '-0.5px' }}>
              Tell us about your practice.
            </h2>
            <p className="form-note" style={{ margin: '0 0 var(--space-2xl)' }}>Mention the free review revival and we&apos;ll start there.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ========================= REASSURANCE STRIP (DARK) ========================= */}
      <section className="band band-dark on-dark" style={{ padding: 'var(--space-5xl) 0' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-2xl)' }}>
          <div>
            <div className="eyebrow" style={{ color: '#8a8aa0' }}>No pressure</div>
            <p className="lead" style={{ marginTop: 10, maxWidth: 300 }}>It&apos;s a conversation, not a sales pitch. You&apos;ll leave knowing where you stand either way.</p>
          </div>
          <div>
            <div className="eyebrow" style={{ color: '#8a8aa0' }}>Built for solo owners</div>
            <p className="lead" style={{ marginTop: 10, maxWidth: 300 }}>Solo and small-team aesthetic practices are our entire focus — your scale is the point.</p>
          </div>
          <div>
            <div className="eyebrow" style={{ color: '#8a8aa0' }}>Start free</div>
            <p className="lead" style={{ marginTop: 10, maxWidth: 300 }}>Every engagement can start with a free review revival, so you feel the effect before anything else.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
