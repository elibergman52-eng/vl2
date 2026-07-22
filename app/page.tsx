import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Accordion from '@/components/Accordion'
import Carousel from '@/components/Carousel'

export const metadata: Metadata = {
  title: 'Med Spa Marketing Agency | Velvet Local',
  description: 'Velvet Local fills aesthetic practice books with local search rankings, patient reviews, and AI automations. Built by an esthetician for solo and small-team practices. Free review revival included.',
  alternates: { canonical: 'https://velvetlocal.com' },
  openGraph: {
    url: 'https://velvetlocal.com',
    title: 'Med Spa Marketing Agency | Velvet Local',
    description: 'Velvet Local fills aesthetic practice books with local search rankings, patient reviews, and AI automations. Built by an esthetician.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a med-spa marketing agency actually do?',
      acceptedAnswer: { '@type': 'Answer', text: 'We build and manage the digital presence that brings patients to you — local search rankings, patient reviews, AI-powered automations, and the online infrastructure that turns searches into bookings. We work exclusively with aesthetic practices, so everything is specific to this industry.' },
    },
    {
      '@type': 'Question',
      name: 'How is Velvet Local different from a general agency?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most agencies learn your industry from the outside. Velvet Local was founded by an esthetician who has worked inside aesthetic practices. That context changes everything — from what we prioritize to what we don\'t sell you.' },
    },
    {
      '@type': 'Question',
      name: 'Why do recent reviews matter so much for ranking?',
      acceptedAnswer: { '@type': 'Answer', text: 'Reviews are a primary signal Google uses to rank local practices — and recency is weighted heavily, not just total count and star rating. A steady stream of fresh reviews signals an active, trusted practice and helps you hold a top-three Maps position.' },
    },
    {
      '@type': 'Question',
      name: 'What results can a med spa realistically expect?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most practices reach the top three on Google Maps within 60 to 90 days — some faster, some closer to four months. We set clear expectations in the first conversation and track against them.' },
    },
    {
      '@type': 'Question',
      name: 'Is this a fixed package or customized?',
      acceptedAnswer: { '@type': 'Answer', text: 'Every engagement is custom. We discuss your goals, your market, your current online presence, and what\'s actually missing before recommending anything. You\'ll never pay for something your practice doesn\'t need.' },
    },
    {
      '@type': 'Question',
      name: 'I\'m a solo injector with a small practice. Is this for me?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — Velvet Local was built for practices like yours. Solo and small-team aesthetic practices are our focus. Solo owners deserve a partner who understands their scale and their goals.' },
    },
  ],
}

const faqItems = [
  {
    question: 'What does a med-spa marketing agency actually do?',
    answer: 'We build and manage the digital presence that brings patients to you — local search rankings, patient reviews, AI-powered automations, and the online infrastructure that turns searches into bookings. We work exclusively with aesthetic practices, so everything is specific to this industry.',
  },
  {
    question: 'How is Velvet Local different from a general agency?',
    answer: 'Most agencies learn your industry from the outside. Velvet Local was founded by an esthetician who has worked inside aesthetic practices. That context changes everything — from what we prioritize to what we don\'t sell you.',
  },
  {
    question: 'Why do recent reviews matter so much for ranking?',
    answer: 'Reviews are a primary signal Google uses to rank local practices — and recency is weighted heavily, not just total count and star rating. A steady stream of fresh reviews signals an active, trusted practice and helps you hold a top-three Maps position. It also influences how many of the people who find you actually book.',
  },
  {
    question: 'What results can a med spa realistically expect?',
    answer: 'It depends on your market, your starting point, and what we focus on. Most practices reach the top three on Google Maps within 60 to 90 days — some faster, some closer to four months. We set clear expectations in the first conversation and track against them.',
  },
  {
    question: 'Is this a fixed package or customized?',
    answer: 'Every engagement is custom. We discuss your goals, your market, your current online presence, and what\'s actually missing before recommending anything. You\'ll never pay for something your practice doesn\'t need.',
  },
  {
    question: 'I\'m a solo injector with a small practice. Is this for me?',
    answer: 'Yes — Velvet Local was built for practices like yours. Solo and small-team aesthetic practices are our focus. Larger multi-location groups have enterprise agencies; solo owners deserve a partner who understands their scale and their goals.',
  },
]

const differenceItems = [
  {
    question: 'We only work with aesthetic practices',
    answer: 'Solo and small-team aesthetic practices are our entire focus. Everything we do is built specifically for this industry, shaped by how aesthetic patients actually choose.',
  },
  {
    question: 'Founded by an esthetician',
    answer: 'We\'ve worked inside aesthetic practices ourselves. That lived experience shapes what we prioritize and how we guide your marketing toward the patients you want.',
  },
  {
    question: 'Everything custom, nothing templated',
    answer: 'We start with your goals, your market, and what would move your practice forward, then build around exactly that. You only ever invest in what helps you grow.',
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />

      {/* ========================= HERO ========================= */}
      <section className="band band-dark on-dark" style={{ paddingTop: 112, paddingBottom: 120, position: 'relative', overflow: 'hidden' }}>
        <span className="hero-glow hero-glow-a" />
        <span className="hero-glow hero-glow-b" />
        <span className="hero-grain" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
          <Link className="eyebrow" href="/#how-it-works" style={{ color: '#8a8aa0', marginBottom: 'var(--space-2xl)', textDecoration: 'none', display: 'inline-block' }}>Get a Free Revival Review</Link>
          <h1 className="headline hero-hl">
            Med spa marketing built by an esthetician,<br /><span className="grad-text">for estheticians.</span>
          </h1>
          <p className="lead" style={{ margin: 'var(--space-2xl) auto 0', maxWidth: 560 }}>
            Local presence, patient reviews, and AI-powered automations that bring new patients in.
            Everything custom — nothing templated.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', marginTop: 'var(--space-3xl)', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a className="btn btn-light" href="https://calendly.com/eli-velvetlocal/30min" target="_blank" rel="noopener noreferrer">
              Book a conversation
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a className="btn btn-ghost-dark" href="#results">See client results</a>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ========================= 001 · THE WORK ========================= */}
      <section className="band band-light" id="services">
        <div className="wrap">
          <div className="work-top">
            <div>
              <span className="sec-no">001 / The Work</span>
              <h2 className="headline" style={{ fontSize: 40, lineHeight: 1.08, maxWidth: 520, marginTop: 'var(--space-lg)' }}>
                We handle the marketing. You run the chair.
              </h2>
              <p className="lead" style={{ maxWidth: 480, margin: 'var(--space-2xl) 0 0' }}>
                The digital presence that brings patients to you — built specifically for aesthetic practices.
                We keep you active everywhere your patients look: Google, Facebook, and Instagram.
              </p>
            </div>
            <div className="work-img">
              <Image
                src="/proof/social-clean.png"
                alt="Velvet Local keeps your Google Business Profile, Facebook, and Instagram active"
                width={600}
                height={480}
                loading="lazy"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>

          <div className="grid-3col">
            <article className="card">
              <div className="card-idx">01</div>
              <h3 className="card-title" style={{ marginTop: 14 }}>Local search presence</h3>
              <p className="card-body">We build and manage the Google Business Profile and local SEO that put your practice in the top three when patients search.</p>
            </article>
            <article className="card">
              <div className="card-idx">02</div>
              <h3 className="card-title" style={{ marginTop: 14 }}>Patient reviews</h3>
              <p className="card-body">A steady stream of real, recent reviews — the single highest-leverage signal for both how you rank and how many searchers actually book.</p>
            </article>
            <article className="card">
              <div className="card-idx">03</div>
              <h3 className="card-title" style={{ marginTop: 14 }}>AI-powered automations</h3>
              <p className="card-body">Smart follow-up, review-request timing, and patient reactivation that keep your presence active without eating your time.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ========================= 002 · HOW IT WORKS (DARK) ========================= */}
      <section className="band band-dark on-dark" id="how-it-works">
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: 'var(--space-3xl)' }}>
            <span className="sec-no" style={{ color: '#8a8aa0' }}>002 / How It Works</span>
            <h2 className="headline" style={{ fontSize: 40, lineHeight: 1.08, maxWidth: 720, color: 'var(--on-dark)' }}>
              Google doesn't just count reviews. It counts <span className="grad-text">when</span> they happened.
            </h2>
          </div>
          <p className="lead" style={{ maxWidth: 600, margin: '0 0 var(--space-4xl)' }}>
            To choose which practices land in the top three on Maps, Google weighs three things together.
            Most owners obsess over the first two and miss the one that actually moves rankings.
          </p>

          <div className="grid-3col">
            <article className="card-dark">
              <div className="eyebrow" style={{ color: '#8a8aa0' }}>Signal 01</div>
              <h3 className="card-title" style={{ color: 'var(--on-dark)', marginTop: 12 }}>Volume</h3>
              <p className="card-body" style={{ color: '#b9b9c9' }}>How many reviews you have. Important — but plenty of practices with hundreds of reviews still sit on page two.</p>
            </article>
            <article className="card-dark">
              <div className="eyebrow" style={{ color: '#8a8aa0' }}>Signal 02</div>
              <h3 className="card-title" style={{ color: 'var(--on-dark)', marginTop: 12 }}>Rating</h3>
              <p className="card-body" style={{ color: '#b9b9c9' }}>Your average star rating. It shapes whether searchers trust you — but on its own it won't lift your position.</p>
            </article>
            <article className="card-dark" style={{ borderColor: 'rgba(0,0,0,0.16)', background: 'var(--brand-gradient)', overflow: 'hidden' }}>
              <div className="eyebrow" style={{ color: 'rgba(0,0,0,.65)' }}>Signal 03 · the one that&apos;s missed</div>
              <h3 className="card-title" style={{ color: 'var(--ink)', marginTop: 12 }}>Recency</h3>
              <p className="card-body" style={{ color: 'rgba(0,0,0,.72)' }}>A wave of fresh, recent reviews signals an active, trusted practice — and it&apos;s heavily weighted in who makes the top three.</p>
            </article>
          </div>

          {/* Free offer */}
          <div className="free-offer">
            <div>
              <span className="tag tag-dark" style={{ background: 'var(--accent-mint)', color: 'var(--ink)' }}>Free offer</span>
              <h3 className="headline" style={{ fontSize: 30, color: 'var(--on-dark)', margin: 'var(--space-lg) 0 0', lineHeight: 1.12 }}>
                Start with a free review revival.
              </h3>
              <p className="lead" style={{ margin: 'var(--space-lg) 0 0', maxWidth: 520 }}>
                We reach back out to your past patients and bring in a wave of fresh, recent reviews — at no cost, so you can see
                exactly how we work before you commit to anything.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', alignItems: 'flex-start' }}>
              <Link className="btn btn-mint" href="/contact">
                Claim the free offer
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
              <span className="form-note" style={{ color: '#8a8aa0' }}>No contract. No pitch deck. Just a wave of reviews.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= 003 · THE DIFFERENCE ========================= */}
      <section className="band band-light">
        <div className="wrap diff-grid">
          <div
            className="diff-photo ph-grad"
            style={{
              borderRadius: 'var(--rounded-sm)',
              padding: 'var(--space-4xl)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              color: '#ffffff',
            }}
          >
            <span className="eyebrow" style={{ color: '#ffffff' }}>
              Founder &amp; Esthetician
            </span>
            <blockquote style={{ margin: 0, paddingLeft: 'var(--space-2xl)', borderLeft: '2px solid rgba(255,255,255,0.7)' }}>
              <p className="headline" style={{ fontSize: 26, lineHeight: 1.25, letterSpacing: '-0.5px', color: '#ffffff' }}>
                &quot;I&apos;ve worked inside aesthetic practices. I know exactly what makes a patient choose you.&quot;
              </p>
            </blockquote>
            <div>
              <div className="card-title" style={{ color: '#ffffff' }}>Michelle Bergman</div>
              <div className="sec-no" style={{ marginTop: 'var(--space-xs)', color: 'rgba(255,255,255,0.8)' }}>Founder, Velvet Local</div>
            </div>
          </div>
          <div>
            <div className="sec-head" style={{ marginBottom: 'var(--space-2xl)' }}>
              <span className="sec-no">003 / The Difference</span>
            </div>
            <h2 className="headline" style={{ fontSize: 40, lineHeight: 1.08, maxWidth: 520 }}>
              Built by someone who actually knows this world.
            </h2>
            <p className="lead" style={{ margin: 'var(--space-2xl) 0 var(--space-3xl)', maxWidth: 520 }}>
              Michelle Bergman is an esthetician. She built Velvet Local because she&apos;s worked inside aesthetic
              practices and knows exactly what moves the needle for them.
            </p>
            <Accordion items={differenceItems} defaultOpen={0} />
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ========================= 004 · RESULTS ========================= */}
      <section className="band band-light" id="results">
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: 'var(--space-4xl)' }}>
            <span className="sec-no">004 / Results</span>
            <h2 className="headline" style={{ fontSize: 40, lineHeight: 1.08 }}>Real outcomes for real practices.</h2>
          </div>

          <div className="stats-grid">
            <div className="stat-tile tile-peach">
              <div className="stat-num">2,600%+</div>
              <div className="stat-label">Ranking lift across one practice&apos;s target keywords</div>
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

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16, flexWrap: 'wrap', marginBottom: 'var(--space-3xl)' }}>
            <p className="lead" style={{ maxWidth: 560, margin: 0 }}>
              Local rank tracking across the map, search term by search term. Each dot is a spot on Google Maps —{' '}
              <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>red is buried past the top 20, green is top three.</strong>{' '}
              Same practice, a few months apart.
            </p>
            <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
              <span className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--body)' }}>
                <span style={{ width: 12, height: 12, borderRadius: 9999, background: '#c0392b', display: 'inline-block' }}/>Buried
              </span>
              <span className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--body)' }}>
                <span style={{ width: 12, height: 12, borderRadius: 9999, background: '#2e9e4f', display: 'inline-block' }}/>Top 3
              </span>
            </div>
          </div>

          <div className="proof-grid" style={{ marginBottom: 'var(--space-5xl)' }}>
            <figure>
              <Image src="/proof/grid-prp.png" alt="PRP treatment near me — Google Maps ranking grid, before and after" width={600} height={500} loading="lazy" style={{ width: '100%', height: 'auto' }} />
              <div className="proof-cap"><span>&quot;PRP treatment near me&quot;</span><span style={{ color: 'var(--accent-magenta)' }}>Buried → top 3</span></div>
            </figure>
            <figure>
              <Image src="/proof/grid-tattoo.png" alt="Tattoo removal — Google Maps ranking grid, before and after" width={600} height={500} loading="lazy" style={{ width: '100%', height: 'auto' }} />
              <div className="proof-cap"><span>&quot;Tattoo removal&quot;</span><span style={{ color: 'var(--accent-magenta)' }}>5 months later</span></div>
            </figure>
            <figure>
              <Image src="/proof/grid-dermaplane.png" alt="Dermaplane — Google Maps ranking grid, before and after" width={600} height={500} loading="lazy" style={{ width: '100%', height: 'auto' }} />
              <div className="proof-cap"><span>&quot;Dermaplane&quot;</span><span style={{ color: 'var(--accent-magenta)' }}>4 months later</span></div>
            </figure>
            <figure>
              <Image src="/proof/grid-microdermabrasion.png" alt="Microdermabrasion — Google Maps ranking grid, before and after" width={600} height={500} loading="lazy" style={{ width: '100%', height: 'auto' }} />
              <div className="proof-cap"><span>&quot;Microdermabrasion&quot;</span><span style={{ color: 'var(--accent-magenta)' }}>4 months later</span></div>
            </figure>
          </div>

          <Carousel />
        </div>
      </section>

      {/* ========================= FAQ ========================= */}
      <section className="band band-light" id="faq">
        <div className="wrap faq-grid">
          <div className="faq-sticky">
            <span className="sec-no">005 / Common questions</span>
            <h2 className="headline" style={{ fontSize: 36, lineHeight: 1.1, marginTop: 'var(--space-lg)', maxWidth: 360 }}>
              What med spa owners ask about marketing.
            </h2>
            <Link className="btn btn-ghost-light" href="/contact" style={{ marginTop: 'var(--space-2xl)' }}>Ask us anything</Link>
          </div>
          <Accordion items={faqItems} defaultOpen={0} />
        </div>
      </section>

      {/* ========================= FINAL CTA (DARK) ========================= */}
      <section className="band band-dark on-dark">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 className="headline grad-text final-cta-hl">
            The practice people search for first.
          </h2>
          <p className="lead" style={{ margin: 'var(--space-2xl) auto 0', maxWidth: 520 }}>It starts with your Google presence. Let&apos;s build it.</p>
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
