'use client'
import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import SectionHeader from '@/components/SectionHeader'
import { portfolioCategories, portfolioItems } from '@/data/portfolio'

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const filtered = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter((p) => p.category === activeCategory)

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }, [])

  const slides = filtered.map((item) => ({
    src: item.image,
    alt: item.alt,
    width: item.width,
    height: item.height,
  }))

  return (
    <section id="portfolio" className="section-pad bg-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Work"
          title="Photography"
          titleGold="Portfolio"
          subtitle="Browse our gallery of captured moments — each image tells a unique story of love, joy, and celebration."
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {portfolioCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gold text-primary shadow-lg shadow-gold/30'
                  : 'glass text-white/70 hover:text-gold hover:border-gold/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div ref={ref} className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          <AnimatePresence mode="wait">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="break-inside-avoid cursor-pointer group relative rounded-2xl overflow-hidden img-zoom-container"
                onClick={() => openLightbox(i)}
              >
                <div className="relative" style={{ paddingBottom: `${(item.height / item.width) * 100}%` }}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-600 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold/90 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                    </div>
                  </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-medium">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-white/40">
            <p className="text-lg">No photos in this category yet.</p>
            <p className="text-sm mt-2">Check back soon — we're always adding new work!</p>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <a
            href="https://wa.me/919711384088?text=Hi,%20I%20visited%20your%20website%20and%20have%20a%20photoshoot%20requirement."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold/60 text-sm hover:text-gold transition-colors duration-300"
          >
            Want to see more work? <span className="underline underline-offset-2">Contact us on WhatsApp</span> →
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
        plugins={[Zoom, Fullscreen, Slideshow, Thumbnails]}
        styles={{ container: { backgroundColor: 'rgba(0,0,0,0.97)' } }}
      />
    </section>
  )
}
