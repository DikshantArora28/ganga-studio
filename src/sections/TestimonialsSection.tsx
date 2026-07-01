'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import SectionHeader from '@/components/SectionHeader'
import { testimonials } from '@/data/testimonials'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} size={12} className={i < rating ? 'text-gold' : 'text-white/20'} />
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial, isActive }: { testimonial: typeof testimonials[0]; isActive: boolean }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      className={`glass rounded-3xl p-6 sm:p-8 transition-all duration-500 ${
        isActive ? 'border-gold/30 shadow-xl shadow-gold/10' : 'border-white/5'
      }`}
    >
      <FaQuoteLeft size={24} className="text-gold/40 mb-4" />
      <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 italic">
        "{testimonial.text}"
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold font-playfair font-bold text-lg">
            {testimonial.name[0]}
          </div>
          <div>
            <div className="text-white font-semibold text-sm">{testimonial.name}</div>
            <div className="text-white/40 text-xs">{testimonial.role}</div>
          </div>
        </div>
        <div className="text-right">
          <StarRating rating={testimonial.rating} />
          <div className="text-white/30 text-[10px] mt-1">{testimonial.date}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  // Show 3 at a time on desktop, 1 on mobile
  const visibleDesktop = [0, 1, 2].map((offset) => testimonials[(current + offset) % testimonials.length])

  return (
    <section id="testimonials" className="section-pad bg-secondary relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Client Love"
          title="What Our Clients"
          titleGold="Say About Us"
          subtitle="Real stories from real families who trusted us with their most precious moments."
        />

        <div ref={ref} className="relative">
          {/* Desktop: 3 cards */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {visibleDesktop.map((t, i) => (
              <TestimonialCard key={t.id + '-' + i} testimonial={t} isActive={i === 1} />
            ))}
          </div>

          {/* Mobile: 1 card */}
          <div className="lg:hidden">
            <AnimatePresence mode="wait">
              <TestimonialCard key={testimonials[current].id} testimonial={testimonials[current]} isActive />
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-all duration-300"
              aria-label="Previous"
            >
              <FiChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === current ? 'w-6 h-2 bg-gold' : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-all duration-300"
              aria-label="Next"
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Google Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 p-6 glass rounded-2xl max-w-md mx-auto"
        >
          <div className="text-center sm:text-left">
            <div className="font-playfair text-5xl font-bold text-gold">5.0</div>
            <div className="flex gap-1 mt-1 justify-center sm:justify-start">
              {[...Array(5)].map((_, i) => <FaStar key={i} size={14} className="text-gold" />)}
            </div>
            <div className="text-white/40 text-xs mt-1">Based on customer reviews</div>
          </div>
          <div className="w-px h-16 bg-white/10 hidden sm:block" />
          <div className="text-center sm:text-left">
            <div className="text-white font-semibold text-sm">100% Recommended</div>
            <div className="text-white/50 text-xs mt-1">All clients would refer us</div>
            <div className="text-gold text-xs mt-2 font-medium">★ Google Verified Reviews</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
