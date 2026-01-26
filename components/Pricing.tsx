'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const packages = [
  {
    name: 'Purple Package',
    price: '$975',
    deposit: '$400 Deposit',
    duration: '4 Hours',
    color: 'purple',
    features: [
      'Mobile Cigar Lounge',
      '20 Premium Hand-Rolled Cigars',
      'Seating for up to 12 People',
      '2- 65" TV\'s with Bluetooth Sound System',
      'Cigar Cutting and Lighting Service',
    ],
  },
  {
    name: 'Gold Package',
    price: '$1,350',
    deposit: '$650 Deposit',
    duration: '4 Hours 30 Minutes',
    color: 'gold',
    featured: true,
    features: [
      'Mobile Cigar Lounge',
      '30 Premium Hand-Rolled Cigars',
      'Seating for up to 18 People',
      '2- 65" TV\'s with Bluetooth Sound System',
      'Cigar Cutting and Lighting Service',
    ],
  },
]

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="pricing" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter/30 to-dark pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-widest text-sm font-medium">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
            Our <span className="text-gradient">Packages</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Choose the perfect package for your event. Both packages include our premium mobile 
            cigar lounge experience with professional service and top-quality cigars.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 * i }}
              className={`relative group rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                pkg.featured 
                  ? 'card-gradient gold-border glow-gold' 
                  : 'card-gradient purple-border hover:glow-purple'
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-gold to-gold-light text-dark text-xs font-semibold uppercase tracking-wider rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-serif font-bold mb-2 ${
                  pkg.color === 'gold' ? 'text-gold' : 'text-purple-light'
                }`}>
                  {pkg.name}
                </h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-white">{pkg.price}</span>
                </div>
                <p className="text-white/50 mt-2">{pkg.deposit}</p>
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                  <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-white/60 text-sm">{pkg.duration}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      pkg.color === 'gold' ? 'text-gold' : 'text-purple-light'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/70">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full py-4 rounded-full font-semibold text-center transition-all duration-300 ${
                  pkg.featured
                    ? 'bg-gradient-to-r from-gold to-gold-light text-dark hover:shadow-xl hover:shadow-gold/30'
                    : 'bg-gradient-to-r from-purple-vivid to-purple-deep text-white hover:shadow-xl hover:shadow-purple-vivid/30'
                }`}
              >
                Book This Package
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-white/40 text-sm mt-12"
        >
          Custom packages available upon request. Contact us for special event pricing.
        </motion.p>
      </div>
    </section>
  )
}
