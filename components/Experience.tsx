'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    title: 'Premium Cigar Selection',
    description: 'Hand-picked cigars from the world\'s finest manufacturers, curated for every palate.',
    icon: '🎯',
  },
  {
    title: 'Luxury Lounge Seating',
    description: 'Comfortable, elegant seating arrangements that create the perfect atmosphere.',
    icon: '🛋️',
  },
  {
    title: 'Professional Service',
    description: 'Trained staff providing white-glove service throughout your event.',
    icon: '⭐',
  },
  {
    title: 'Custom Atmosphere',
    description: 'Lighting, music, and ambiance tailored to match your event\'s theme.',
    icon: '✨',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-vivid/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-widest text-sm font-medium">The Experience</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
            What Sets Us <span className="text-gradient">Apart</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Every detail is crafted to deliver an unforgettable experience that elevates 
            your event beyond the ordinary.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="flex gap-5 p-6 card-gradient gold-border rounded-2xl hover:glow-gold transition-all duration-300"
            >
              <div className="text-4xl">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-serif font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-deep via-purple-vivid to-purple-deep opacity-90" />
          <div className="relative z-10 py-16 px-8 md:px-16 text-center">
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Ready to Elevate Your Event?
            </h3>
            <p className="text-white/80 max-w-xl mx-auto mb-8">
              Let Purple Haze Mobile Cigar Lounge bring sophistication and memorable 
              moments to your next gathering.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-purple-deep font-semibold rounded-full hover:bg-gold hover:text-dark transition-all duration-300"
              >
                Book Your Experience
              </a>
              <a
                href="tel:+14434066816"
                className="px-8 py-4 border border-white/30 rounded-full text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (443) 406-6816
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-serif font-semibold mb-8">Trusted By</h3>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-50">
            {['Corporate Events', 'Private Clubs', 'Wedding Planners', 'Golf Courses', 'Event Venues'].map((name) => (
              <div key={name} className="text-lg font-serif text-white/60 hover:text-gold transition-colors cursor-default">
                {name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
