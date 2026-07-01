'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import SectionHeader from '@/components/SectionHeader'
import { siteConfig } from '@/data/config'

const highlights = [
  'Professional DSLR & Mirrorless Equipment',
  'Creative Artistic Direction',
  'Quick Delivery of Edited Photos',
  'Affordable Packages for Every Budget',
  'Experienced & Skilled Photographers',
  '100% Customer Satisfaction Guarantee',
]

export default function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="about" className="section-pad bg-secondary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-lg mx-auto lg:mx-0">
              <Image
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80"
                alt="Ganga Studio — Professional Photography"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-4 sm:right-4 lg:-right-8 glass-dark rounded-2xl px-6 py-4 border border-gold/20"
            >
              <div className="text-center">
                <div className="font-playfair text-4xl font-bold text-gold">15+</div>
                <div className="text-white/60 text-xs mt-1 tracking-wide">Years of Excellence</div>
              </div>
            </motion.div>

            {/* Second floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -top-4 -left-4 sm:left-0 lg:-left-6 glass-dark rounded-2xl px-5 py-3 border border-gold/20"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-white text-xs font-medium">Booking Open</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SectionHeader
              badge="Our Story"
              title="Crafting Visual"
              titleGold="Masterpieces"
              subtitle=""
              center={false}
            />

            <p className="text-white/60 leading-relaxed text-sm sm:text-base mt-4">
              Welcome to <strong className="text-gold">Ganga Studio & Cyber Cafe</strong> — where every photograph
              is more than just an image. Founded by <strong className="text-white">Sanjeev Arora</strong>, we have
              been transforming life's most precious moments into timeless visual stories for over 15 years.
            </p>
            <p className="text-white/60 leading-relaxed text-sm sm:text-base mt-4">
              From the grandeur of wedding ceremonies to the tender first moments of a newborn, our team combines
              artistic vision with professional precision. We don't just take photographs — we craft heirlooms that
              will be cherished across generations.
            </p>

            {/* Highlights */}
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <motion.li
                  key={h}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-start gap-3 text-sm text-white/70"
                >
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <FiCheck size={11} className="text-gold" />
                  </span>
                  {h}
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-gold text-primary font-bold px-8 py-4 rounded-full hover:bg-gold-light hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-1 transition-all duration-300"
              >
                <FaWhatsapp size={18} />
                Get a Quote
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:border-gold hover:text-gold transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
