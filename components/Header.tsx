'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isAbout = pathname === '/about'
  const isContact = pathname === '/contact'

  return (
    <header className={`site-header on-light${mobileOpen ? ' nav-mobile-open' : ''}`}>
      <div className="wrap nav">
        <Link className="brand" href="/">
          velvet local<span className="dot">.</span>
        </Link>
        <nav className="nav-links">
          <Link href="/#services">What We Do</Link>
          <Link href="/#how-it-works">How It Works</Link>
          <Link href="/#results">Results</Link>
          <Link href="/about" className={isAbout ? 'active' : ''}>About</Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/contact" className="nav-mobile-cta">Book a conversation</Link>
        </nav>
        <div className="nav-cta">
          <Link className="btn btn-primary nav-book" href="/contact">Book a conversation</Link>
          <button
            className="nav-toggle btn btn-ghost-light"
            aria-label="Menu"
            onClick={() => setMobileOpen(v => !v)}
          >
            Menu
          </button>
        </div>
      </div>
    </header>
  )
}
