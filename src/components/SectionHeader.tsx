'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface SectionHeaderProps {
  badge?: string
  title: string
  titleGold?: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

export default function SectionHeader({ badge, title, titleGold, subtitle, center = true, light = false }: SectionHeaderProps) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className={`mb-12 ${center ? 'text-center' : ''}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 text-gold text-xs font-semibold tracking-[0.2em] uppercase rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2 className={`font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${light ? 'text-white' : 'text-white'}`}>
        {title}{' '}
        {titleGold && <span className="shimmer-text">{titleGold}</span>}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-white/60' : 'text-white/60'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-5 flex items-center gap-2 ${center ? 'justify-center' : ''}`}>
        <div className="h-px w-12 bg-gold/40" />
        <div className="w-2 h-2 rounded-full bg-gold" />
        <div className="h-px w-12 bg-gold/40" />
      </div>
    </motion.div>
  )
}
