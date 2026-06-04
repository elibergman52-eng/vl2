import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Velvet Local — Med spa marketing built by an esthetician, for estheticians',
  description: 'Velvet Local builds the Google presence that fills your books — rankings, recent reviews, and AI-powered automations. Med spa marketing built by an esthetician.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
