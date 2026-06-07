import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-display',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

const BASE_URL = 'https://velvetlocal.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Med Spa Marketing Agency | Velvet Local',
    template: '%s | Velvet Local',
  },
  description: 'Velvet Local fills aesthetic practice books with local search rankings, patient reviews, and AI automations. Built by an esthetician for solo and small-team practices.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Velvet Local',
    title: 'Med Spa Marketing Agency | Velvet Local',
    description: 'Velvet Local fills aesthetic practice books with local search rankings, patient reviews, and AI automations. Built by an esthetician for solo and small-team practices.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Med Spa Marketing Agency | Velvet Local',
    description: 'Velvet Local fills aesthetic practice books with local search rankings, patient reviews, and AI automations.',
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${BASE_URL}/#organization`,
      name: 'Velvet Local',
      url: BASE_URL,
      email: 'michelle@velvetlocal.com',
      description: 'Med spa marketing agency built by an esthetician — local search rankings, patient reviews, and AI automations for solo and small-team aesthetic practices.',
      founder: { '@type': 'Person', name: 'Michelle Bergman' },
      knowsAbout: ['Med spa marketing', 'Local SEO', 'Google Business Profile optimization', 'Patient review generation', 'Aesthetic practice marketing'],
      serviceArea: { '@type': 'Country', name: 'United States' },
      priceRange: '$$',
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Velvet Local',
      publisher: { '@id': `${BASE_URL}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${mono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {children}
      </body>
    </html>
  )
}
