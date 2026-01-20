import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import StructuredData from '@/components/StructuredData'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://purplehazecigars.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Purple Haze Mobile Cigar Lounge | Premium Mobile Cigar Experience in Maryland',
    template: '%s | Purple Haze Mobile Cigar Lounge',
  },
  description: 'Purple Haze Mobile Cigar Lounge delivers a first-class mobile cigar experience in Maryland, DC & Virginia. Premium cigars, luxury lounge setup for corporate events, weddings, private parties, golf tournaments & more. Call (443) 406-6816.',
  keywords: [
    'mobile cigar lounge',
    'mobile cigar bar',
    'cigar catering',
    'wedding cigar bar',
    'corporate event cigar service',
    'luxury cigar experience',
    'premium cigars Maryland',
    'cigar lounge rental',
    'private party cigar service',
    'golf tournament cigar bar',
    'Baltimore cigar service',
    'DC mobile cigar lounge',
    'Virginia cigar catering',
    'event cigar bar',
    'cigar roller for events',
  ],
  authors: [{ name: 'Purple Haze Mobile Cigar Lounge' }],
  creator: 'Purple Haze Mobile Cigar Lounge',
  publisher: 'Purple Haze Mobile Cigar Lounge',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Purple Haze Mobile Cigar Lounge | Premium Mobile Cigar Experience',
    description: 'Luxury mobile cigar lounge service for corporate events, weddings, private parties & more in Maryland, DC & Virginia. Premium cigars & professional service.',
    url: siteUrl,
    siteName: 'Purple Haze Mobile Cigar Lounge',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/PurpleHazeLogo.jpeg',
        width: 1200,
        height: 1200,
        alt: 'Purple Haze Mobile Cigar Lounge Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Purple Haze Mobile Cigar Lounge | Premium Mobile Cigar Experience',
    description: 'Luxury mobile cigar lounge for corporate events, weddings & private parties. Premium cigars & professional service in MD, DC & VA.',
    images: ['/PurpleHazeLogo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  category: 'Event Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <StructuredData />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
