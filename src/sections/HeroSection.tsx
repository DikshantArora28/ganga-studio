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
    image: '/photos/9.jpg',
    imagePosition: '60% center',   // smoke bombs couple — shift right, text left stays clear
    headline: 'Capturing Moments.',
    subheadline: 'Creating Memories Forever.',
    tag: 'Pre-Wedding Photography',
  },
  {
    id: 2,
    image: '/photos/16.jpg',
    imagePosition: '72% center',   // Hindu mandap couple — push couple to right so faces show beside text
    headline: 'Every Ritual,',
    subheadline: 'Beautifully Preserved.',
    tag: 'Wedding Ceremonies',
  },
  {
    id: 3,
    image: '/photos/6.jpg',
    imagePosition: '65% center',   // Sikh lakeside — couple shifts right of text
    headline: 'Love Stories',
    subheadline: 'Told Through Our Lens.',
    tag: 'Bridal Photography',
  },
  {
    id: 4,
    image: '/photos/7.jpg',
    imagePosition: 'center center', // sky lanterns proposal — wide scene, center fine
    headline: 'Magical Moments',
    subheadline: 'Beautifully Framed.',
    tag: 'Engagement Photography',
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
            style={{ objectPosition: slide.imagePosition }}
            sizes="100vw"
            quality={90}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Gradient Overlay — stronger on left so text stays readable, right shows the couple */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />

      {/* Content — pt-24 on outer container pushes everything well below the fixed navbar */}
      <div className="relative z-10 h-full flex flex-col justify-center pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Tag Badge */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id + '-tag'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="mb-5"
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
              <h1 className="font-playfair font-bold text-white leading-tight max-w-2xl">
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  {slide.headline}
                </span>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl shimmer-text mt-1">
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
            className="mt-5 text-white/70 text-sm sm:text-base max-w-md leading-relaxed"
          >
            Professional photography studio & cyber cafe — where artistry meets precision.
            Led by <strong className="text-gold font-semibold">Sanjeev Arora</strong>.
          </motion.p>

          {/* Service Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-4 flex flex-wrap gap-2"
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
            className="mt-6 flex flex-col sm:flex-row gap-4"
          >
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gold text-primary font-bold px-8 py-3.5 rounded-full hover:bg-gold-light hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-1 transition-all duration-300 text-base"
            >
              <FaWhatsapp size={20} />
              Book Your Shoot
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white font-semibold px-8 py-3.5 rounded-full hover:border-gold hover:text-gold backdrop-blur-sm transition-all duration-300 text-base"
            >
              <FaPlay size={14} />
              View Portfolio
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar — dots centered, scroll on right — no overlap */}
      <div className="absolute bottom-6 left-0 right-0 z-10 flex items-center justify-center px-8">
        {/* Slide Dots — centered */}
        <div className="flex gap-2">
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
      </div>

      {/* Scroll Down — right side, no conflict with dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-5 right-8 z-10 flex flex-col items-center gap-1 text-white/40 hover:text-gold transition-colors cursor-pointer hidden sm:flex"
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
