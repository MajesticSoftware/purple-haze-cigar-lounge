'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '500+', label: 'Events Hosted' },
  { value: '10K+', label: 'Cigars Enjoyed' },
  { value: '100%', label: 'Satisfaction' },
  { value: '5★', label: 'Rating' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-purple-glow opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold uppercase tracking-widest text-sm font-medium">About Us</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
              Elevating Events with{' '}
              <span className="text-gradient">Sophistication</span>
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                Purple Haze Mobile Cigar Lounge is a premium mobile cigar experience designed 
                to bring sophistication, comfort, and culture directly to your event.
              </p>
              <p>
                We specialize in creating an upscale lounge atmosphere where guests can relax, 
                connect, and enjoy fine cigars in a refined yet welcoming setting.
              </p>
              <p>
                Our mission is to deliver a first-class mobile cigar experience that blends 
                luxury, relaxation, and community. We are committed to providing exceptional 
                service, curated cigar selections, and a distinguished atmosphere where 
                meaningful conversations and memorable moments are created—one cigar at a time.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gold">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white/80">Premium Cigars</span>
              </div>
              <div className="flex items-center gap-2 text-gold">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white/80">Professional Setup</span>
              </div>
              <div className="flex items-center gap-2 text-gold">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white/80">Luxury Seating</span>
              </div>
              <div className="flex items-center gap-2 text-gold">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white/80">Expert Service</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="card-gradient gold-border rounded-2xl p-6 text-center hover:glow-gold transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 card-gradient purple-border rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-center">
            Our <span className="text-gradient">Target Audience</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Professionals & Executives', desc: 'Business leaders seeking refined networking experiences' },
              { title: 'Cigar Enthusiasts', desc: 'Aficionados who appreciate premium selections and expert curation' },
              { title: 'Event Hosts', desc: 'Those seeking a unique, luxury addition to their special occasions' },
            ].map((item, i) => (
              <div key={i} className="text-center p-4">
                <div className="w-12 h-12 rounded-full bg-purple-vivid/20 flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-vivid to-gold" />
                </div>
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
