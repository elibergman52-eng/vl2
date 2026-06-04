import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Accordion from '@/components/Accordion'
import Carousel from '@/components/Carousel'

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
    answer: 'It depends on your market, your starting point, and what we focus on. We\'ve seen practices go from invisible to top three on Google Maps within 30 days; others see steady growth over 60–90 days. We set clear expectations in the first conversation and track against them.',
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
    answer: 'Solo and small-team aesthetic practices are our entire focus. Everything we do is specific to this industry — not borrowed from a general playbook.',
  },
  {
    question: 'Founded by an esthetician',
    answer: 'Most agencies learn your world from the outside. We\'ve lived inside it — which changes what we prioritize and what we\'ll never try to sell you.',
  },
  {
    question: 'Everything custom, nothing templated',
    answer: 'We discuss your goals, your market, and what\'s actually missing before recommending anything. You\'ll never pay for something your practice doesn\'t need.',
  },
]

export default function HomePage() {
  return (
    <>
      <Header />

      {/* ========================= HERO ========================= */}
      <section className="band band-light" style={{ paddingTop: 56, paddingBottom: 64 }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'var(--space-5xl)', alignItems: 'center' }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--body)', marginBottom: 'var(--space-2xl)' }}>Med spa marketing · by an esthetician</div>
            <h1 className="headline" style={{ fontSize: 60, lineHeight: 1.02, letterSpacing: '-1.8px' }}>
              Med spa marketing built by an esthetician, <span className="grad-text">for estheticians.</span>
            </h1>
            <p className="lead" style={{ margin: 'var(--space-2xl) 0 0', maxWidth: 480 }}>
              Local presence, patient reviews, and AI-powered automations that bring new patients in.
              Everything custom — nothing templated.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-md)', marginTop: 'var(--space-3xl)', flexWrap: 'wrap' }}>
              <Link className="btn btn-primary" href="/contact">
                Book a conversation
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
              <a className="btn btn-ghost-light" href="#results">See client results</a>
            </div>
            <div className="eyebrow" style={{ color: 'var(--body)', marginTop: 'var(--space-4xl)', display: 'flex', gap: 18, flexWrap: 'wrap' }}>
              <span>Real reviews</span>
              <span style={{ color: 'var(--accent-magenta)' }}>·</span>
              <span>Real rankings</span>
              <span style={{ color: 'var(--accent-magenta)' }}>·</span>
              <span>Real patients</span>
            </div>
          </div>

          {/* Hero visual: composed local-listing card */}
          <div className="hero-vis">
            <span className="glow glow-a" />
            <span className="glow glow-b" />
            <span className="grain" />
            <div className="hv-chip" style={{ top: 18, left: 18 }}>
              <span style={{ color: '#7fd9a0' }}>▲</span>
              <span>#14 → #1 · 30 days</span>
            </div>
            <div className="hv-chip" style={{ bottom: 18, right: 18 }}>
              <span className="dotrow">
                <i style={{ background: '#c0392b' }}/>
                <i style={{ background: '#e67e22' }}/>
                <i style={{ background: '#f1c40f' }}/>
                <i style={{ background: '#7fb800' }}/>
                <i style={{ background: '#2e9e4f' }}/>
              </span>
              <span>Buried → top 3</span>
            </div>
            <div className="hv-card">
              <div className="hv-row">
                <div className="hv-avatar">L</div>
                <div>
                  <div className="hv-name">Lumière Skin &amp; Laser</div>
                  <div className="hv-sub">Med spa · Open now · 0.4 mi</div>
                </div>
                <div className="hv-rank">▲ #1 on Maps</div>
              </div>
              <div className="hv-row" style={{ marginTop: 14, gap: 8 }}>
                <span className="hv-stars">★★★★★</span>
                <span className="hv-rating">4.9</span>
                <span className="hv-muted">· 312 reviews</span>
              </div>
              <div className="hv-divider" />
              <div className="hv-sub" style={{ marginBottom: 13 }}>Recent reviews</div>
              <div className="hv-review" style={{ marginBottom: 12 }}>
                <span className="hv-ini" style={{ background: 'var(--accent-peach)' }}>DR</span>
                <span className="hv-rating" style={{ fontSize: 13 }}>Dana R.</span>
                <span className="hv-revstars">★★★★★</span>
                <span className="hv-when">Today</span>
              </div>
              <div className="hv-review">
                <span className="hv-ini" style={{ background: 'var(--accent-mint)' }}>PM</span>
                <span className="hv-rating" style={{ fontSize: 13 }}>Priya M.</span>
                <span className="hv-revstars">★★★★★</span>
                <span className="hv-when">2 days ago</span>
              </div>
            </div>
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-2xl)' }}>
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-2xl)' }}>
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
            <article className="card-dark" style={{ borderColor: 'transparent', background: 'var(--brand-gradient)' }}>
              <div className="eyebrow" style={{ color: 'rgba(0,0,0,.65)' }}>Signal 03 · the one that&apos;s missed</div>
              <h3 className="card-title" style={{ color: 'var(--ink)', marginTop: 12 }}>Recency</h3>
              <p className="card-body" style={{ color: 'rgba(0,0,0,.72)' }}>A wave of fresh, recent reviews signals an active, trusted practice — and it&apos;s heavily weighted in who makes the top three.</p>
            </article>
          </div>

          {/* Free offer */}
          <div style={{ marginTop: 'var(--space-5xl)', border: '1px solid var(--hairline-dark)', borderRadius: 'var(--rounded-sm)', padding: 'var(--space-4xl)', display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: 'var(--space-4xl)', alignItems: 'center' }}>
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
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 'var(--space-5xl)', alignItems: 'center' }}>
          <div className="ph ph-grad" style={{ aspectRatio: '4/5' }} />
          <div>
            <div className="sec-head" style={{ marginBottom: 'var(--space-2xl)' }}>
              <span className="sec-no">003 / The Difference</span>
            </div>
            <h2 className="headline" style={{ fontSize: 40, lineHeight: 1.08, maxWidth: 520 }}>
              Built by someone who actually knows this world.
            </h2>
            <p className="lead" style={{ margin: 'var(--space-2xl) 0 var(--space-3xl)', maxWidth: 520 }}>
              Michelle Bergman is an esthetician. She built Velvet Local because she&apos;s worked inside aesthetic
              practices and knows exactly what moves the needle — and what doesn&apos;t.
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-2xl)', marginBottom: 'var(--space-4xl)' }}>
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
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 'var(--space-5xl)', alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: 100 }}>
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
          <h2 className="headline grad-text" style={{ fontSize: 56, lineHeight: 1.02, letterSpacing: '-1.6px', maxWidth: 820, margin: '0 auto' }}>
            The practice people search for first.
          </h2>
          <p className="lead" style={{ margin: 'var(--space-2xl) auto 0', maxWidth: 520 }}>It starts with your Google presence. Let&apos;s build it.</p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', marginTop: 'var(--space-3xl)', flexWrap: 'wrap' }}>
            <Link className="btn btn-light" href="/contact">
              Book a conversation
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
            <a className="btn btn-ghost-dark" href="mailto:michelle@velvetlocal.com">Email michelle@velvetlocal.com</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
