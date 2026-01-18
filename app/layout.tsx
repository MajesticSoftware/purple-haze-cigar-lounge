import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Purple Haze Mobile Cigar Lounge | Premium Mobile Cigar Experience',
  description: 'Purple Haze Mobile Cigar Lounge delivers a first-class mobile cigar experience that blends luxury, relaxation, and community. Available for corporate events, weddings, private parties, and more.',
  keywords: 'mobile cigar lounge, cigar experience, luxury events, corporate events, wedding cigar bar, premium cigars',
  openGraph: {
    title: 'Purple Haze Mobile Cigar Lounge',
    description: 'Premium mobile cigar experience for your special events',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
