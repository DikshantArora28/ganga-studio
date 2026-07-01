'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheck } from 'react-icons/fi'
import SectionHeader from '@/components/SectionHeader'
import { siteConfig } from '@/data/config'

type FormData = {
  name: string
  phone: string
  service: string
  eventDate: string
  message: string
}

const photographyServices = [
  'Wedding Photography', 'Pre-Wedding Shoot', 'Engagement', 'Baby Shoot',
  'Maternity', 'Birthday', 'Family Shoot', 'Passport Photos', 'Candid Photography',
  'Cinematography', 'Drone Photography', 'Corporate Photography', 'Event Photography',
  'Photo Printing', 'Photo Editing', 'Photo Restoration', 'Canvas Printing',
  'Album Making', 'Cyber Cafe Services', 'Other',
]

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    const msg = `Hi, I visited your website and have a photoshoot requirement.%0A%0AName: ${encodeURIComponent(data.name)}%0APhone: ${encodeURIComponent(data.phone)}%0AService: ${encodeURIComponent(data.service)}%0AEvent Date: ${encodeURIComponent(data.eventDate || 'Not specified')}%0AMessage: ${encodeURIComponent(data.message || 'Please contact me.')}`
    window.open(`https://wa.me/919711384088?text=${msg}`, '_blank')
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="section-pad bg-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Get In Touch"
          title="Contact"
          titleGold="Ganga Studio"
          subtitle="Ready to capture your special moments? Reach out and let's create something beautiful together."
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 mt-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* WhatsApp CTA */}
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 glass rounded-2xl border border-success/20 hover:border-success/50 hover:bg-success/5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-success/10 flex items-center justify-center group-hover:bg-success/20 transition-colors flex-shrink-0">
                <FaWhatsapp size={28} className="text-success" />
              </div>
              <div>
                <div className="text-white font-semibold text-base">WhatsApp Us</div>
                <div className="text-white/50 text-sm">Fastest way to reach us</div>
                <div className="text-success text-xs mt-1 font-medium">Usually responds in minutes</div>
              </div>
            </a>

            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-4 p-5 glass rounded-2xl hover:border-gold/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors flex-shrink-0">
                <FiPhone size={24} className="text-gold" />
              </div>
              <div>
                <div className="text-white font-semibold">Phone</div>
                <div className="text-gold text-sm font-medium">{siteConfig.phoneDisplay}</div>
                <div className="text-white/40 text-xs">Call Sanjeev Arora directly</div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 glass rounded-2xl">
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <FiClock size={24} className="text-gold" />
              </div>
              <div>
                <div className="text-white font-semibold">Business Hours</div>
                <div className="text-white/60 text-sm">{siteConfig.hours}</div>
                <div className="text-gold text-xs mt-1">Open all 7 days</div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 glass rounded-2xl">
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <FiMapPin size={24} className="text-gold" />
              </div>
              <div>
                <div className="text-white font-semibold">Address</div>
                <div className="text-white/60 text-sm leading-relaxed">{siteConfig.address}</div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden h-56 border border-gold/10">
              <iframe
                src={siteConfig.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ganga Studio & Cyber Cafe Location"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass rounded-3xl p-6 sm:p-8 border border-white/5">
              <h3 className="font-playfair text-2xl font-bold text-white mb-6">
                Send an <span className="shimmer-text">Inquiry</span>
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-success/10 border border-success/30 flex items-center justify-center">
                    <FiCheck size={28} className="text-success" />
                  </div>
                  <p className="text-white text-lg font-semibold">WhatsApp Opened!</p>
                  <p className="text-white/50 text-sm text-center">Your message has been pre-filled.<br />Just hit Send!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/60 text-xs font-medium block mb-1.5">Full Name *</label>
                      <input
                        {...register('name', { required: 'Name is required' })}
                        type="text"
                        placeholder="Your name"
                        className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="text-white/60 text-xs font-medium block mb-1.5">Phone Number *</label>
                      <input
                        {...register('phone', { required: 'Phone is required' })}
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                      />
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="text-white/60 text-xs font-medium block mb-1.5">Service Required *</label>
                    <select
                      {...register('service', { required: 'Please select a service' })}
                      className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold/50 transition-colors appearance-none"
                    >
                      <option value="" className="bg-primary">Select a service...</option>
                      {photographyServices.map((s) => (
                        <option key={s} value={s} className="bg-primary">{s}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>}
                  </div>

                  <div>
                    <label className="text-white/60 text-xs font-medium block mb-1.5">Event Date (Optional)</label>
                    <input
                      {...register('eventDate')}
                      type="date"
                      className="w-full bg-white/5 border border-white/10 text-white/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-white/60 text-xs font-medium block mb-1.5">Message</label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      placeholder="Tell us about your requirements..."
                      className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold/50 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 bg-gold text-primary font-bold py-4 rounded-xl hover:bg-gold-light hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 disabled:opacity-70"
                  >
                    <FaWhatsapp size={20} />
                    Send via WhatsApp
                    <FiSend size={15} />
                  </button>

                  <p className="text-white/30 text-xs text-center">
                    This will open WhatsApp with your message pre-filled
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
