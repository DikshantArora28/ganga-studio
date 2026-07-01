'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FaWhatsapp, FaPlay } from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi'
import { siteConfig } from '@/data/config'

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80',
    headline: 'Capturing Moments.',
    subheadline: 'Creating Memories Forever.',
    tag: 'Wedding Photography',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=1920&q=80',
    headline: 'Every Smile,',
    subheadline: 'A Story Worth Telling.',
    tag: 'Baby & Family',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=1920&q=80',
    headline: 'Love Framed',
    subheadline: 'In Pure Perfection.',
    tag: 'Pre-Wedding Shoot',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1920&q=80',
    headline: 'Glowing Moments',
    subheadline: 'Beautifully Preserved.',
    tag: 'Maternity Photography',
  },
]

const services = [
  'Wedding Photography', 'Pre-Wedding', 'Baby Shoot', 'Maternity',
  'Events', 'Passport Photos', 'Studio Photography', 'Cinematography',
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const intervalRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setPrev(current)
      setCurrent((c) => (c + 1) % slides.length)
    }, 5000)
    return () => clearInterval(intervalRef.current)
  }, [current])

  const slide = slides[current]

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Images */}
      <AnimatePresence>
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.tag}
            fill
            priority={current === 0}
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          {/* Tag Badge */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id + '-tag'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-1.5 bg-gold/20 border border-gold/40 text-gold text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase rounded-full backdrop-blur-sm">
                {slide.tag}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Main Headline */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id + '-text'}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="font-playfair font-bold text-white leading-tight">
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                  {slide.headline}
                </span>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl shimmer-text mt-2">
                  {slide.subheadline}
                </span>
              </h1>
            </motion.div>
          </AnimatePresence>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-6 text-white/70 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed"
          >
            Professional photography studio & cyber cafe — where artistry meets precision.
            Led by <strong className="text-gold font-semibold">Sanjeev Arora</strong>.
          </motion.p>

          {/* Service Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {services.slice(0, 5).map((s) => (
              <span
                key={s}
                className="px-3 py-1 text-xs text-white/70 border border-white/10 rounded-full backdrop-blur-sm hover:border-gold/40 hover:text-gold transition-all duration-300 cursor-default"
              >
                {s}
              </span>
            ))}
            <span className="px-3 py-1 text-xs text-gold/80 border border-gold/20 rounded-full backdrop-blur-sm">
              +{services.length - 5} more
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gold text-primary font-bold px-8 py-4 rounded-full hover:bg-gold-light hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-1 transition-all duration-300 text-base"
            >
              <FaWhatsapp size={20} />
              Book Your Shoot
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:border-gold hover:text-gold backdrop-blur-sm transition-all duration-300 text-base"
            >
              <FaPlay size={14} />
              View Portfolio
            </a>
          </motion.div>
        </div>
      </div>

      {/* Slide Dots */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setPrev(current); setCurrent(i) }}
            className={`transition-all duration-300 rounded-full ${
              i === current ? 'w-8 h-2 bg-gold' : 'w-2 h-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/40 hover:text-gold transition-colors cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <FiChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
