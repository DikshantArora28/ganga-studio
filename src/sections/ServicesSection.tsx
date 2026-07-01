'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  MdFavorite, MdCameraAlt, MdDiamond, MdCelebration, MdChildCare, MdSelfImprovement,
  MdPeople, MdAutoAwesome, MdFlashOn, MdVideocam, MdFlightTakeoff, MdMenuBook,
  MdCropFree, MdBadge, MdPrint, MdAutoFixHigh, MdTune, MdLayers, MdWallpaper,
  MdCreditCard, MdEvent, MdBusiness, MdSchool, MdShoppingBag, MdMovie, MdPhotoAlbum,
} from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import SectionHeader from '@/components/SectionHeader'
import { siteConfig } from '@/data/config'

const iconMap: Record<string, React.ElementType> = {
  MdFavorite, MdCameraAlt, MdDiamond, MdCelebration, MdChildCare, MdSelfImprovement,
  MdPeople, MdAutoAwesome, MdFlashOn, MdVideocam, MdFlightTakeoff, MdMenuBook,
  MdCropFree, MdBadge, MdPrint, MdAutoFixHigh, MdTune, MdLayers, MdWallpaper,
  MdCreditCard, MdEvent, MdBusiness, MdSchool, MdShoppingBag, MdMovieEdit: MdMovie, MdPhotoAlbum,
}

const services = [
  { id: 'wedding', icon: 'MdFavorite', title: 'Wedding Photography', desc: 'Timeless wedding memories captured with artistic precision and emotion.' },
  { id: 'pre-wedding', icon: 'MdCameraAlt', title: 'Pre-Wedding Shoot', desc: 'Romantic pre-wedding sessions that tell your unique love story.' },
  { id: 'engagement', icon: 'MdDiamond', title: 'Engagement Photography', desc: 'Celebrate your engagement with beautiful, candid photographs.' },
  { id: 'birthday', icon: 'MdCelebration', title: 'Birthday Photography', desc: 'Capture every smile and joyful moment of your special celebration.' },
  { id: 'baby', icon: 'MdChildCare', title: 'Baby Shoot', desc: 'Precious newborn and baby portraits you will treasure forever.' },
  { id: 'maternity', icon: 'MdSelfImprovement', title: 'Maternity Shoot', desc: 'Beautiful maternity sessions celebrating the glow of motherhood.' },
  { id: 'family', icon: 'MdPeople', title: 'Family Shoot', desc: 'Create lasting family portraits that capture bonds and love.' },
  { id: 'traditional', icon: 'MdAutoAwesome', title: 'Traditional Photography', desc: 'Classic photography with a premium, timeless aesthetic.' },
  { id: 'candid', icon: 'MdFlashOn', title: 'Candid Photography', desc: 'Natural, unposed moments captured in their purest form.' },
  { id: 'cinematography', icon: 'MdVideocam', title: 'Cinematography', desc: 'Cinematic wedding films and video productions of stunning quality.' },
  { id: 'drone', icon: 'MdFlightTakeoff', title: 'Drone Photography', desc: 'Spectacular aerial shots adding a dramatic dimension to your photos.' },
  { id: 'albums', icon: 'MdMenuBook', title: 'Premium Albums', desc: 'Handcrafted luxury photo albums that preserve your memories beautifully.' },
  { id: 'frames', icon: 'MdCropFree', title: 'Photo Frames', desc: 'Elegant custom frames to display your most cherished photographs.' },
  { id: 'passport', icon: 'MdBadge', title: 'Passport Size Photos', desc: 'Professional passport, visa, and ID photos with instant printing.' },
  { id: 'printing', icon: 'MdPrint', title: 'Instant Photo Printing', desc: 'High-quality photo prints in any size delivered on the spot.' },
  { id: 'restoration', icon: 'MdAutoFixHigh', title: 'Photo Restoration', desc: 'Restore and digitize old, damaged photographs to their original glory.' },
  { id: 'editing', icon: 'MdTune', title: 'Photo Editing', desc: 'Professional retouching and editing that makes every image shine.' },
  { id: 'lamination', icon: 'MdLayers', title: 'Photo Lamination', desc: 'Protective lamination services for photos, ID cards, and documents.' },
  { id: 'canvas', icon: 'MdWallpaper', title: 'Canvas Printing', desc: 'Stunning large-format canvas prints for walls and interiors.' },
  { id: 'id-card', icon: 'MdCreditCard', title: 'ID Card Photos', desc: 'Instant ID card photos for office, school, and government use.' },
  { id: 'event', icon: 'MdEvent', title: 'Event Photography', desc: 'Complete coverage of corporate events, concerts, and functions.' },
  { id: 'corporate', icon: 'MdBusiness', title: 'Corporate Photography', desc: 'Professional headshots, team photos, and corporate event coverage.' },
  { id: 'school', icon: 'MdSchool', title: 'School Photography', desc: 'Annual school portraits and event coverage done professionally.' },
  { id: 'product', icon: 'MdShoppingBag', title: 'Product Photography', desc: 'E-commerce and commercial product photography that sells.' },
  { id: 'video-editing', icon: 'MdMovieEdit', title: 'Video Editing', desc: 'Professional video editing with cinematic color grading and effects.' },
  { id: 'digital-album', icon: 'MdPhotoAlbum', title: 'Digital Album', desc: 'Beautiful digital albums and online galleries for easy sharing.' },
]

export default function ServicesSection() {
  const [showAll, setShowAll] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const displayed = showAll ? services : services.slice(0, 12)

  return (
    <section id="services" className="section-pad bg-secondary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="What We Offer"
          title="Our Photography"
          titleGold="Services"
          subtitle="From intimate baby shoots to grand wedding ceremonies — we cover every milestone of your life with artistry and care."
        />

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {displayed.map((service, i) => {
            const Icon = iconMap[service.icon] || MdCameraAlt
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: (i % 12) * 0.05 }}
                className="group glass rounded-2xl p-6 hover:border-gold/30 hover:bg-gold/5 transition-all duration-400 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                  <Icon size={22} className="text-gold group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="font-playfair font-semibold text-white text-base mb-2 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed mb-4">{service.desc}</p>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gold text-xs font-semibold hover:gap-3 transition-all duration-300"
                >
                  <FaWhatsapp size={13} />
                  Book Now
                </a>
              </motion.div>
            )
          })}
        </div>

        {!showAll && services.length > 12 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-10"
          >
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 border-2 border-gold/40 text-gold font-semibold px-8 py-3.5 rounded-full hover:bg-gold hover:text-primary hover:border-gold transition-all duration-300"
            >
              View All {services.length} Services
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
