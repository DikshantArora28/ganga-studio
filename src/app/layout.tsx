import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import FloatingButtons from '@/components/FloatingButtons'
import { siteConfig } from '@/data/config'

export const metadata: Metadata = {
  metadataBase: new URL('https://gangastudio.in'),
  title: {
    default: 'Ganga Studio & Cyber Cafe | Professional Photography Studio',
    template: '%s | Ganga Studio & Cyber Cafe',
  },
  description: 'Ganga Studio & Cyber Cafe — Professional photography studio offering wedding, pre-wedding, baby shoot, maternity, passport photos, and cyber cafe services. Book your session today.',
  keywords: ['Ganga Studio', 'photography studio', 'wedding photography', 'pre-wedding shoot', 'baby shoot', 'passport photos', 'cyber cafe', 'photo printing'],
  authors: [{ name: 'Ganga Studio & Cyber Cafe' }],
  creator: 'Ganga Studio & Cyber Cafe',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://gangastudio.in',
    siteName: 'Ganga Studio & Cyber Cafe',
    title: 'Ganga Studio & Cyber Cafe | Professional Photography Studio',
    description: 'Premium photography studio & cyber cafe services. Book your shoot today!',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ganga Studio & Cyber Cafe',
    description: 'Premium photography studio & cyber cafe services.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  verification: { google: 'YOUR_GOOGLE_VERIFICATION_CODE' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://gangastudio.in",
              "name": "Ganga Studio & Cyber Cafe",
              "description": "Professional photography studio and cyber cafe offering wedding, pre-wedding, baby, maternity photography and cyber services.",
              "url": "https://gangastudio.in",
              "telephone": "+919711384088",
              "priceRange": "₹₹",
              "image": "https://gangastudio.in/og-image.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "openingHours": "Mo-Su 09:00-20:00",
              "sameAs": [],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Photography Services",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wedding Photography" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pre-Wedding Shoot" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Baby Shoot" } }
                ]
              }
            })
          }}
        />
      </head>
      <body className="bg-primary text-white font-poppins antialiased">
        <Navbar />
        <main>{children}</main>
        <FloatingButtons />
      </body>
    </html>
  )
}
