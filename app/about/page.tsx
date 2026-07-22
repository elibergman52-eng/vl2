import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Velvet Local | Med Spa Marketing by an Esthetician',
  description: 'Velvet Local is a boutique marketing studio for aesthetic practices founded by an esthetician. Custom local search, reviews, and AI automations for solo and small-team practices.',
  alternates: { canonical: 'https://velvetlocal.com/about' },
  openGraph: {
    url: 'https://velvetlocal.com/about',
    title: 'About Velvet Local | Med Spa Marketing by an Esthetician',
    description: 'Velvet Local is a boutique marketing studio for aesthetic practices founded by an esthetician. Custom local search, reviews, and AI automations.',
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Michelle Bergman',
  jobTitle: 'Founder & Esthetician',
  worksFor: {
    '@type': 'ProfessionalService',
    name: 'Velvet Local',
    url: 'https://velvetlocal.com',
  },
  description: 'Michelle Bergman is an esthetician and founder of Velvet Local, a boutique marketing agency for aesthetic practices.',
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Header />

      {/* ========================= HERO ========================= */}
      <section className="band band-light" style={{ paddingTop: 56, paddingBottom: 56 }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'var(--space-5xl)', alignItems: 'center' }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--body)', marginBottom: 'var(--space-2xl)' }}>About · Velvet Local</div>
            <h1 className="headline" style={{ fontSize: 54, lineHeight: 1.04, letterSpacing: '-1.6px', maxWidth: 560 }}>
              Built by someone who actually <span className="grad-text">knows this world.</span>
            </h1>
            <p className="lead" style={{ margin: 'var(--space-2xl) 0 0', maxWidth: 500 }}>
              Velvet Local is a boutique marketing studio for aesthetic practices, founded by an esthetician.
              We focus entirely on solo and small-team practices, and we build around the one thing that makes them grow.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-md)', marginTop: 'var(--space-3xl)', flexWrap: 'wrap' }}>
              <a className="btn btn-primary" href="https://calendly.com/eli-velvetlocal/30min" target="_blank" rel="noopener noreferrer">
                Book a conversation
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </a>
              <Link className="btn btn-ghost-light" href="/#results">See client results</Link>
            </div>
          </div>
          <div
            className="ph"
            style={{ aspectRatio: '5/4.6', background: 'var(--canvas-dark)', borderColor: 'var(--hairline-dark)', padding: 0 }}
          >
            <svg className="ribbon" viewBox="0 0 520 440" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <defs>
                <linearGradient id="ag1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#fc4c02"/>
                  <stop offset="52%" stopColor="#ef2cc1"/>
                  <stop offset="100%" stopColor="#bdbbff"/>
                </linearGradient>
                <linearGradient id="ag2" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fc4c02"/>
                  <stop offset="52%" stopColor="#ef2cc1"/>
                  <stop offset="100%" stopColor="#bdbbff"/>
                </linearGradient>
              </defs>
              <path d="M30 300 C 150 120, 360 360, 500 140 L 500 230 C 360 440, 150 220, 30 390 Z" fill="url(#ag1)" opacity="0.95"/>
              <path d="M20 220 C 160 60, 340 300, 500 70 L 500 150 C 340 380, 160 140, 20 310 Z" fill="url(#ag2)" opacity="0.55"/>
              <path d="M40 360 C 170 200, 350 420, 500 230 L 500 300 C 350 470, 170 280, 40 430 Z" fill="url(#ag1)" opacity="0.35"/>
            </svg>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ========================= THE FOUNDER ========================= */}
      <section className="band band-light">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 'var(--space-5xl)', alignItems: 'center' }}>
          <div className="ph" style={{ aspectRatio: '4/5' }}>
            <Image
              src="/founder-michelle.webp"
              alt="Michelle Bergman, founder and esthetician at Velvet Local"
              width={850}
              height={1062}
              priority
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div>
            <span className="sec-no">001 / The Founder</span>
            <h2 className="headline" style={{ fontSize: 38, lineHeight: 1.08, marginTop: 'var(--space-lg)', maxWidth: 520 }}>
              Michelle Bergman, founder &amp; esthetician.
            </h2>
            <p className="lead" style={{ margin: 'var(--space-2xl) 0 0', maxWidth: 540 }}>
              Michelle is an esthetician. She built Velvet Local because she&apos;s worked inside aesthetic practices and
              knows exactly what moves the needle for them.
            </p>
            <p className="lead" style={{ margin: 'var(--space-lg) 0 0', maxWidth: 540 }}>
              That context changes everything. It&apos;s the difference between an agency that learns your world from the
              outside and a partner who has lived in it. Someone who knows how patients choose, how a strong Google
              profile fills your calendar, and which marketing genuinely earns a practice like yours more bookings.
            </p>
            <blockquote style={{ margin: 'var(--space-3xl) 0 0', paddingLeft: 'var(--space-2xl)', borderLeft: '2px solid var(--accent-magenta)' }}>
              <p className="headline" style={{ fontSize: 24, lineHeight: 1.25, letterSpacing: '-0.4px', maxWidth: 520 }}>
                &quot;Solo owners deserve a partner who actually understands their scale and their goals.&quot;
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ========================= WHAT WE BELIEVE (DARK) ========================= */}
      <section className="band band-dark on-dark">
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: 'var(--space-4xl)' }}>
            <span className="sec-no" style={{ color: '#8a8aa0' }}>002 / What We Believe</span>
            <h2 className="headline" style={{ fontSize: 38, lineHeight: 1.08, color: 'var(--on-dark)', maxWidth: 640 }}>
              A few convictions that shape everything we do.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-2xl)' }}>
            <article className="card-dark">
              <div className="card-idx">01</div>
              <h3 className="card-title" style={{ color: 'var(--on-dark)', marginTop: 12 }}>Only aesthetic practices</h3>
              <p className="card-body" style={{ color: '#b9b9c9' }}>We don&apos;t dabble in restaurants and law firms on the side. This industry is our entire focus, so our playbook is sharp instead of generic.</p>
            </article>
            <article className="card-dark">
              <div className="card-idx">02</div>
              <h3 className="card-title" style={{ color: 'var(--on-dark)', marginTop: 12 }}>Recency over vanity</h3>
              <p className="card-body" style={{ color: '#b9b9c9' }}>A wave of fresh, recent reviews moves rankings more than a big old number that&apos;s gone quiet. We build the signals Google actually rewards.</p>
            </article>
            <article className="card-dark">
              <div className="card-idx">03</div>
              <h3 className="card-title" style={{ color: 'var(--on-dark)', marginTop: 12 }}>Custom, never templated</h3>
              <p className="card-body" style={{ color: '#b9b9c9' }}>We discuss your goals, market, and what&apos;s actually missing before recommending anything. You&apos;ll never pay for something your practice doesn&apos;t need.</p>
            </article>
            <article className="card-dark">
              <div className="card-idx">04</div>
              <h3 className="card-title" style={{ color: 'var(--on-dark)', marginTop: 12 }}>You run the chair</h3>
              <p className="card-body" style={{ color: '#b9b9c9' }}>We handle execution and keep you visible on results. Your job is your patients; the marketing is ours. Minimal day-to-day from you.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ========================= HOW WE WORK ========================= */}
      <section className="band band-light">
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: 'var(--space-4xl)' }}>
            <span className="sec-no">003 / How We Work</span>
            <h2 className="headline" style={{ fontSize: 38, lineHeight: 1.08 }}>From first call to top of the map.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-2xl)' }}>
            {[
              { step: 'Step 01', title: 'A conversation', body: 'A 15-minute call about where your practice stands and what it would take to rank first. No pitch deck.' },
              { step: 'Step 02', title: 'Free review revival', body: 'We reach back out to your past patients and bring in a wave of fresh reviews at no cost, so you feel the effect first.' },
              { step: 'Step 03', title: 'Build the presence', body: 'A custom plan for local search, reviews, and AI automations, sized to your market and your goals.' },
              { step: 'Step 04', title: 'Track what matters', body: 'Clear expectations set up front, tracked against rankings, profile actions, and bookings as results come in.' },
            ].map(({ step, title, body }) => (
              <div key={step} style={{ borderTop: '1px solid var(--hairline)', paddingTop: 'var(--space-lg)' }}>
                <div className="card-idx">{step}</div>
                <h3 className="card-title" style={{ marginTop: 'var(--space-md)' }}>{title}</h3>
                <p className="card-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ========================= STATS ========================= */}
      <section className="band band-light">
        <div className="wrap">
          <span className="sec-no">004 / By The Numbers</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-2xl)', marginTop: 'var(--space-2xl)' }}>
            <div className="stat-tile tile-peach">
              <div className="stat-num">2,600%+</div>
              <div className="stat-label">Ranking lift for one practice in its first 30 days</div>
            </div>
            <div className="stat-tile tile-mint">
              <div className="stat-num">2,700+</div>
              <div className="stat-label">Profile actions for one practice in a single month</div>
            </div>
            <div className="stat-tile tile-peri">
              <div className="stat-num">Top 3</div>
              <div className="stat-label">On Maps for every target keyword in a competitive market</div>
            </div>
          </div>
          <p className="form-note">Individual client results. Numbers verified by Google Business Profile and Maps screenshots, available on request.</p>
        </div>
      </section>

      {/* ========================= FINAL CTA (DARK) ========================= */}
      <section className="band band-dark on-dark">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 className="headline grad-text" style={{ fontSize: 52, lineHeight: 1.04, letterSpacing: '-1.5px', maxWidth: 780, margin: '0 auto' }}>
            Let&apos;s talk about your practice.
          </h2>
          <p className="lead" style={{ margin: 'var(--space-2xl) auto 0', maxWidth: 480 }}>
            Book a 15-minute call. No pressure, no pitch deck, just a conversation.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', marginTop: 'var(--space-3xl)', flexWrap: 'wrap' }}>
            <a className="btn btn-light" href="https://calendly.com/eli-velvetlocal/30min" target="_blank" rel="noopener noreferrer">
              Book a conversation
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a className="btn btn-ghost-dark" href="mailto:michelle@velvetlocal.com">Email michelle@velvetlocal.com</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
