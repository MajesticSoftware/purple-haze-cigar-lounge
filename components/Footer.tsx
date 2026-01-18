'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <Image
              src="/PurpleHazeLogo.jpeg"
              alt="Purple Haze Cigars Mobile Lounge"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div className="font-serif text-lg font-semibold">Purple Haze</div>
              <div className="text-white/50 text-sm">Mobile Cigar Lounge</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm"
          >
            <a href="#home" className="text-white/50 hover:text-gold transition-colors">Home</a>
            <a href="#about" className="text-white/50 hover:text-gold transition-colors">About</a>
            <a href="#services" className="text-white/50 hover:text-gold transition-colors">Services</a>
            <a href="#experience" className="text-white/50 hover:text-gold transition-colors">Experience</a>
            <a href="#contact" className="text-white/50 hover:text-gold transition-colors">Contact</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <a
              href="mailto:phazecigars2024@protonmail.com"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-purple-vivid hover:text-white transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a
              href="tel:+14434066816"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-purple-vivid hover:text-white transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-white/30 text-sm">
            © {currentYear} Purple Haze Mobile Cigar Lounge. All rights reserved.
          </p>
          <p className="text-white/20 text-xs mt-2">
            Creating memorable moments, one cigar at a time.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
