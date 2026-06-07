import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot-grid">
        <div>
          <div className="brand" style={{ fontSize: 22 }}>velvet local<span className="dot">.</span></div>
          <p className="lead" style={{ fontSize: 16, margin: 'var(--space-lg) 0 var(--space-2xl)', maxWidth: 300 }}>
            Marketing for the aesthetic practices people actually talk about.
          </p>
          <Link className="btn btn-primary" href="/contact">Book a 15-min call</Link>
        </div>
        <div>
          <div className="foot-h">Velvet Local</div>
          <div className="foot-links">
            <Link href="/#services">What We Do</Link>
            <Link href="/#how-it-works">How It Works</Link>
            <Link href="/#results">Results</Link>
            <Link href="/about">About</Link>
          </div>
        </div>
        <div>
          <div className="foot-h">Talk to us</div>
          <div className="foot-links">
            <a href="mailto:michelle@velvetlocal.com">michelle@velvetlocal.com</a>
            <Link href="/contact">Book a conversation</Link>
            <Link href="/#faq">FAQ</Link>
          </div>
        </div>
        <div>
          <div className="foot-h">The fine print</div>
          <div className="foot-links">
            <a href="mailto:michelle@velvetlocal.com?subject=Privacy%20Policy">Privacy policy</a>
            <a href="mailto:michelle@velvetlocal.com?subject=Terms%20of%20Service">Terms of service</a>
            <a href="mailto:michelle@velvetlocal.com?subject=Unsubscribe">Unsubscribe</a>
          </div>
        </div>
      </div>
      <div className="wrap" style={{ paddingBottom: 'var(--space-3xl)', display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span className="form-note">© 2026 Velvet Local. Aesthetic practice marketing, made boutique.</span>
        <span className="form-note">We typically reply within one business day.</span>
      </div>
      <div className="wordmark-banner"><span>velvet local</span></div>
    </footer>
  )
}
