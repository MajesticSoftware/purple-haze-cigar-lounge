'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-24 md:py-32 bg-dark-lighter/30 relative">
      <div className="absolute inset-0 bg-purple-glow opacity-20" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-widest text-sm font-medium">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
            Book Your <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Ready to elevate your next event? Contact us to discuss how Purple Haze 
            Mobile Cigar Lounge can create an unforgettable experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="card-gradient gold-border rounded-2xl p-8 h-full">
              <h3 className="text-xl font-serif font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <a href="mailto:phazecigars2024@protonmail.com" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-purple-vivid/20 flex items-center justify-center text-purple-light group-hover:bg-purple-vivid/40 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white/50 text-sm">Email Us</div>
                    <div className="text-white group-hover:text-gold transition-colors">phazecigars2024@protonmail.com</div>
                  </div>
                </a>

                <a href="tel:+14434066816" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-purple-vivid/20 flex items-center justify-center text-purple-light group-hover:bg-purple-vivid/40 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white/50 text-sm">Call Us</div>
                    <div className="text-white group-hover:text-gold transition-colors">(443) 406-6816</div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-vivid/20 flex items-center justify-center text-purple-light">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white/50 text-sm">Service Area</div>
                    <div className="text-white">Mobile - We Come To You!</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="card-gradient purple-border rounded-2xl p-8 h-full">
              <h3 className="text-xl font-serif font-semibold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                {[
                  'Fully mobile setup - we bring the lounge to you',
                  'Premium, hand-selected cigar collection',
                  'Professional, experienced staff',
                  'Customizable packages for any event size',
                  'Elegant atmosphere that elevates any gathering',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/70">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
