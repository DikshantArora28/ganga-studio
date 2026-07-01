'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhone, FiArrowUp } from 'react-icons/fi'
import { siteConfig } from '@/data/config'

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3">
      {/* Scroll to Top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full glass-dark border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-primary transition-all duration-300 shadow-lg"
            aria-label="Scroll to top"
          >
            <FiArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Call Button */}
      <motion.a
        href={`tel:${siteConfig.phone}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        className="w-13 h-13 w-[52px] h-[52px] rounded-full bg-secondary border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-primary transition-all duration-300 shadow-lg hover:shadow-gold/30 hover:-translate-y-1"
        aria-label="Call us"
      >
        <FiPhone size={20} />
      </motion.a>

      {/* WhatsApp Button (main) */}
      <motion.a
        href={siteConfig.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 }}
        className="w-[60px] h-[60px] rounded-full bg-success flex items-center justify-center text-white shadow-xl shadow-success/30 hover:shadow-success/50 hover:-translate-y-1 transition-all duration-300 animate-pulse-gold"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={30} />
      </motion.a>
    </div>
  )
}
