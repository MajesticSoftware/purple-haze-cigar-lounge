'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

type EventFlyer = {
  src: string
  width: number
  height: number
  title: string
  date: string
  alt: string
}

const newEvents: EventFlyer[] = [
  {
    src: '/events/new/lincoln-homecoming.jpeg',
    width: 1024,
    height: 1536,
    title: 'Lincoln University Homecoming',
    date: 'October 24, 2026',
    alt: 'Flyer for Lincoln University Homecoming 100 Year Centennial Celebration on October 24 with Purple Haze Mobile Cigar Lounge',
  },
  {
    src: '/events/new/summer-wine-down.jpeg',
    width: 1060,
    height: 1484,
    title: 'Summer Wine Down',
    date: 'September 6, 2026',
    alt: 'Flyer for the Summer Wine Down featuring Eric Roberson and DJ Hi-Def in Westminster, Maryland with Purple Haze Mobile Cigar Lounge',
  },
]

const pastEvents: EventFlyer[] = [
  {
    src: '/events/past/denim-and-bling-bash.jpeg',
    width: 1103,
    height: 1426,
    title: 'Denim and Bling Bash',
    date: 'September 18-20, 2026',
    alt: 'Flyer for the Buffalo Soldiers Aberdeen Chapter Denim and Bling Bash in Aberdeen, Maryland with Purple Haze Mobile Cigar Lounge',
  },
  {
    src: '/events/past/arts-wine-jazz-soul-festival.jpeg',
    width: 1290,
    height: 640,
    title: 'Arts, Wine, Jazz & Soul Festival',
    date: 'August 8, 2026',
    alt: 'Flyer for the Arts, Wine, Jazz and Soul Festival fundraiser at Concord Point Lighthouse in Havre de Grace with Purple Haze Mobile Cigar Lounge',
  },
  {
    src: '/events/past/first-fridays-august.jpeg',
    width: 1024,
    height: 1536,
    title: 'First Fridays',
    date: 'August 7, 2026',
    alt: 'Flyer for First Fridays in downtown Havre de Grace on August 7 with Purple Haze Mobile Cigar Lounge',
  },
  {
    src: '/events/past/bourbon-and-brims.jpeg',
    width: 1322,
    height: 1190,
    title: 'Bourbon & Brims',
    date: 'July 19, 2026',
    alt: 'Flyer for Bourbon and Brims, the cigar pairing festival in Edgewood, Maryland presented by Pretty Tipsy and Purple Haze',
  },
  {
    src: '/events/past/bourbon-and-brims-vendors.jpeg',
    width: 1024,
    height: 1536,
    title: 'Bourbon & Brims Vendor Call',
    date: 'July 19, 2026',
    alt: 'Vendors wanted flyer for Bourbon and Brims, the cigar pairing festival presented by Pretty Tipsy and Purple Haze',
  },
  {
    src: '/events/past/cigars-and-sundresses.jpeg',
    width: 1080,
    height: 1080,
    title: 'Cigars & Sundresses',
    date: 'June 20, 2026',
    alt: 'Save the date flyer for Cigars and Sundresses at Back Creek Country Club in Middletown, Delaware with Purple Haze Mobile Cigar Lounge',
  },
  {
    src: '/events/past/preakness-affair.jpeg',
    width: 1350,
    height: 1800,
    title: 'The Preakness Affair',
    date: 'May 16, 2026',
    alt: 'Flyer for The Preakness Affair at The Minker Banquet Hall in Perryville, Maryland with Purple Haze Mobile Cigar Lounge onsite',
  },
  {
    src: '/events/past/first-fridays-may.jpeg',
    width: 1024,
    height: 1536,
    title: 'First Fridays',
    date: 'May 1, 2026',
    alt: 'Flyer for First Fridays in downtown Havre de Grace on May 1 with Purple Haze Mobile Cigar Lounge',
  },
]

const groups = { new: newEvents, past: pastEvents }

type Group = keyof typeof groups

export default function Events() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selected, setSelected] = useState<{ group: Group; index: number } | null>(null)

  const list = selected ? groups[selected.group] : null

  useEffect(() => {
    if (!selected) return
    const count = groups[selected.group].length
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null)
      if (e.key === 'ArrowLeft') setSelected({ ...selected, index: (selected.index - 1 + count) % count })
      if (e.key === 'ArrowRight') setSelected({ ...selected, index: (selected.index + 1) % count })
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [selected])

  const renderCard = (event: EventFlyer, group: Group, index: number) => (
    <motion.button
      key={event.src}
      type="button"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      onClick={() => setSelected({ group, index })}
      aria-label={`View ${event.title} flyer`}
      className={`group block w-full text-left rounded-2xl overflow-hidden card-gradient transition-all duration-500 hover:-translate-y-2 ${
        group === 'new' ? 'gold-border glow-gold' : 'purple-border hover:glow-purple'
      }`}
    >
      <Image
        src={event.src}
        alt={event.alt}
        width={event.width}
        height={event.height}
        className="w-full h-auto"
        sizes={
          group === 'new'
            ? '(max-width: 640px) 100vw, 400px'
            : '(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
        }
      />
      <div className="px-4 py-3">
        <p className={`font-serif font-semibold ${group === 'new' ? 'text-gold' : 'text-white'}`}>{event.title}</p>
        <p className="text-white/50 text-sm">{event.date}</p>
      </div>
    </motion.button>
  )

  return (
    <section id="events" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter/30 to-dark pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold uppercase tracking-widest text-sm font-medium">Events</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6">
            Find Us <span className="text-gradient">Out &amp; About</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            See where Purple Haze Mobile Cigar Lounge has been and where we&apos;re headed next.
            Tap a flyer to take a closer look.
          </p>
        </motion.div>

        <h3 className="text-2xl md:text-3xl font-serif font-bold text-center mb-8">
          New <span className="text-gradient">Events</span>
        </h3>
        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto mb-20">
          {newEvents.map((event, i) => renderCard(event, 'new', i))}
        </div>

        <h3 className="text-2xl md:text-3xl font-serif font-bold text-center mb-8">
          Past <span className="text-gradient">Events</span>
        </h3>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [&>button]:mb-4 [&>button]:break-inside-avoid">
          {pastEvents.map((event, i) => renderCard(event, 'past', i))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-gold/50 rounded-full text-gold font-medium hover:bg-gold/10 transition-all duration-300"
          >
            Book Us For Your Event
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selected && list && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark/95 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={list[selected.index].title}
        >
          <button
            aria-label="Close"
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setSelected(null)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            aria-label="Previous flyer"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation()
              setSelected({ ...selected, index: (selected.index - 1 + list.length) % list.length })
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            aria-label="Next flyer"
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation()
              setSelected({ ...selected, index: (selected.index + 1) % list.length })
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <motion.div
            key={`${selected.group}-${selected.index}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-3xl h-[75vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={list[selected.index].src}
              alt={list[selected.index].alt}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 768px"
              priority
            />
          </motion.div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center w-full px-20">
            <p className="text-white font-medium">
              {list[selected.index].title} <span className="text-white/50">· {list[selected.index].date}</span>
            </p>
            <p className="text-white/50 text-sm mt-1">{selected.index + 1} / {list.length}</p>
          </div>
        </motion.div>
      )}
    </section>
  )
}
