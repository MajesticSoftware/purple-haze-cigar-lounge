'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Corporate Events',
    description: 'Elevate your networking mixers, team celebrations, and executive gatherings with our premium mobile lounge experience.',
    features: ['Custom branding options', 'Professional staff', 'Premium cigar selection'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Weddings & Celebrations',
    description: 'Make your special day unforgettable with a sophisticated cigar lounge for your wedding, bachelor party, or anniversary.',
    features: ['Elegant setup', 'Photo-worthy moments', 'Guest-friendly service'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
    ),
    title: 'Private Parties',
    description: 'Birthday celebrations, milestone events, and exclusive gatherings deserve the distinguished touch of Purple Haze.',
    features: ['Intimate atmosphere', 'Personalized experience', 'Flexible packages'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Golf Tournaments',
    description: 'Add luxury to your golf event with our mobile lounge, perfect for the 19th hole or course-side relaxation.',
    features: ['Course-side service', 'Tournament packages', 'VIP experience'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: 'Festivals & Pop-ups',
    description: 'Stand out at festivals and branded activations with our eye-catching mobile lounge setup.',
    features: ['Brand integration', 'High-traffic ready', 'Memorable experience'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Charity Events',
    description: 'Support your cause with style. Our mobile lounge adds prestige to charity galas and fundraising events.',
    features: ['Cause marketing', 'Premium positioning', 'Donation integration'],
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-24 md:py-32 bg-dark-lighter/50 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-widest text-sm font-medium">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
            Events We <span className="text-gradient">Elevate</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Each project is customized to fit the event&apos;s theme and guest profile, featuring 
            premium cigars, professional setup, comfortable lounge seating, and an elevated 
            vibe that leaves a lasting impression.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group card-gradient purple-border rounded-2xl p-6 hover:glow-purple transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-vivid/30 to-purple-deep/30 flex items-center justify-center text-purple-light mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-white/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-gold-light rounded-full text-dark font-semibold hover:shadow-xl hover:shadow-gold/30 transition-all duration-300"
          >
            Request a Quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
