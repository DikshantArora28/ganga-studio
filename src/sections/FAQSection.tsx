'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiPlus, FiMinus } from 'react-icons/fi'
import SectionHeader from '@/components/SectionHeader'
import { faqs } from '@/data/faqs'

function FAQItem({ faq, isOpen, onToggle, index }: {
  faq: { q: string; a: string }
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.05 }}
      className={`rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen ? 'glass border-gold/30 shadow-lg shadow-gold/5' : 'glass'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-4 p-5 sm:p-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className={`mt-0.5 w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
          isOpen ? 'bg-gold text-primary' : 'bg-white/5 text-white/50 group-hover:bg-gold/10 group-hover:text-gold'
        }`}>
          {isOpen ? <FiMinus size={14} /> : <FiPlus size={14} />}
        </span>
        <span className={`font-semibold text-sm sm:text-base transition-colors duration-300 ${
          isOpen ? 'text-gold' : 'text-white group-hover:text-gold'
        }`}>
          {faq.q}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 ml-11 text-white/60 text-sm leading-relaxed">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-pad bg-primary relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FAQs"
          title="Frequently Asked"
          titleGold="Questions"
          subtitle="Everything you need to know about our photography and cyber cafe services."
        />

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
