'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

const stats = [
  { value: 1000, suffix: '+', label: 'Happy Customers', desc: 'Families who trust us' },
  { value: 15, suffix: '+', label: 'Years Experience', desc: 'Decades of excellence' },
  { value: 5000, suffix: '+', label: 'Photos Delivered', desc: 'Memories preserved' },
  { value: 100, suffix: '%', label: 'Satisfaction Rate', desc: 'Every client delighted' },
]

const reasons = [
  { icon: '⚡', title: 'Fast Delivery', desc: 'Edited photos delivered within 7-15 days' },
  { icon: '🎨', title: 'Professional Editing', desc: 'Color grading & retouching by experts' },
  { icon: '💰', title: 'Affordable Pricing', desc: 'Premium quality at fair prices' },
  { icon: '📸', title: 'Modern Equipment', desc: 'Latest cameras, lenses & lighting' },
  { icon: '🌟', title: 'Creative Vision', desc: 'Unique artistic perspective every time' },
  { icon: '🤝', title: 'Personalized Service', desc: 'We listen, we understand, we deliver' },
]

export default function StatsSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className="section-pad bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.05)_0%,transparent_70%)]" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center glass rounded-2xl p-6 sm:p-8 hover:border-gold/30 transition-all duration-300 group"
            >
              <div className="font-playfair font-bold text-4xl sm:text-5xl lg:text-6xl text-gold group-hover:scale-110 transition-transform duration-300">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} delay={i * 0.2} suffix={stat.suffix} />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <div className="text-white font-semibold text-sm sm:text-base mt-2">{stat.label}</div>
              <div className="text-white/40 text-xs mt-1">{stat.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 text-gold text-xs font-semibold tracking-[0.2em] uppercase rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white">
            The <span className="shimmer-text">Ganga Studio</span> Difference
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-2xl glass hover:border-gold/20 transition-all duration-300 group"
            >
              <span className="text-2xl group-hover:scale-125 transition-transform duration-300 flex-shrink-0">
                {r.icon}
              </span>
              <div>
                <h3 className="text-white font-semibold text-base mb-1">{r.title}</h3>
                <p className="text-white/50 text-sm">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
