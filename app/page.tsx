'use client'

import dynamic from 'next/dynamic'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Pricing from '@/components/Pricing'
import Gallery from '@/components/Gallery'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const Scene3D = dynamic(() => import('@/components/Scene3D'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 -z-10 bg-dark" />
  ),
})

export default function Home() {
  return (
    <main className="relative">
      <Scene3D />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Gallery />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
