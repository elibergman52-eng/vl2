'use client'

import { useState } from 'react'

interface Slide {
  quote: string
  meta: string
  stat: string
}

const slides: Slide[] = [
  { quote: '"From invisible to booked out."', meta: 'Solo wellness practice · Southwest US', stat: '2,600%+ ranking lift' },
  { quote: '"The profile became a real patient acquisition channel."', meta: 'Anonymous practice · month two', stat: '2,700+ profile actions · one month' },
  { quote: '"First page for every search that matters in our city."', meta: 'Practice in a competitive mid-size market', stat: 'Top-3 Maps for every target keyword · 3.5 months' },
]

export default function Carousel() {
  const [idx, setIdx] = useState(0)
  const go = (n: number) => setIdx((n + slides.length) % slides.length)

  return (
    <div style={{ borderTop: '1px solid var(--hairline)', paddingTop: 'var(--space-4xl)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--space-3xl)' }}>
        <div className="tcar-viewport" style={{ flex: 1 }}>
          <div className="tcar-track" style={{ transform: `translateX(${-100 * idx}%)` }}>
            {slides.map((s, i) => (
              <div className="tcar-slide" key={i}>
                <p className="tquote" style={{ maxWidth: 760 }}>{s.quote}</p>
                <div className="tmeta">{s.meta}</div>
                <div className="tstat">{s.stat}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button className="tcar-btn" onClick={() => go(idx - 1)} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button className="tcar-btn" onClick={() => go(idx + 1)} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 8, marginTop: 'var(--space-3xl)' }}>
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => go(i)}
            style={{ width: 28, height: 4, borderRadius: 9999, background: i === idx ? 'var(--accent-magenta)' : 'var(--hairline)', cursor: 'pointer' }}
          />
        ))}
      </div>
      <p className="form-note">Individual client results. Numbers verified by Google Business Profile and Maps screenshots, available on request.</p>
    </div>
  )
}
