'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  MdAssignment, MdFingerprint, MdAccountBalance, MdFlight, MdPublic,
  MdDescription, MdScanner, MdPrint, MdCopyAll, MdLayers, MdBookmark,
  MdWifi, MdCloudUpload, MdAccountBalanceWallet, MdComputer, MdTrain,
  MdFlightTakeoff, MdPayments, MdKeyboard, MdBadge, MdEmail,
  MdTransform, MdPictureAsPdf, MdSchool, MdWork,
} from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import SectionHeader from '@/components/SectionHeader'
import { siteConfig } from '@/data/config'

const iconMap: Record<string, React.ElementType> = {
  MdAssignment, MdFingerprint, MdAccountBalance, MdFlight, MdPublic,
  MdDescription, MdScanner, MdPrint, MdCopyAll, MdLayers, MdBookmark,
  MdWifi, MdCloudUpload, MdAccountBalanceWallet, MdComputer, MdTrain,
  MdFlightTakeoff, MdPayments, MdKeyboard, MdBadge, MdEmail,
  MdTransform, MdPictureAsPdf, MdSchool, MdWork,
}

const services = [
  { icon: 'MdAssignment', title: 'Online Form Filling', desc: 'All government and private forms filled accurately.' },
  { icon: 'MdFingerprint', title: 'Aadhaar Services', desc: 'Enrollment, update, correction, and download.' },
  { icon: 'MdAccountBalance', title: 'PAN Card Assistance', desc: 'New application, correction, and reprint.' },
  { icon: 'MdFlight', title: 'Passport Application', desc: 'Complete form filling and documentation.' },
  { icon: 'MdPublic', title: 'Visa Assistance', desc: 'Visa application and documentation support.' },
  { icon: 'MdDescription', title: 'Resume Creation', desc: 'Professional resume and CV design.' },
  { icon: 'MdScanner', title: 'Scanning', desc: 'High-quality document and photo scanning.' },
  { icon: 'MdPrint', title: 'Color Printing', desc: 'Vibrant color printing for documents and photos.' },
  { icon: 'MdPrint', title: 'B&W Printing', desc: 'Fast black and white printing services.' },
  { icon: 'MdCopyAll', title: 'Photocopy', desc: 'Quick photocopy for all document types.' },
  { icon: 'MdLayers', title: 'Lamination', desc: 'Document and ID card lamination.' },
  { icon: 'MdBookmark', title: 'Spiral Binding', desc: 'Professional binding for reports.' },
  { icon: 'MdWifi', title: 'Internet Browsing', desc: 'High-speed internet on clean systems.' },
  { icon: 'MdCloudUpload', title: 'Document Upload', desc: 'Upload to government portals.' },
  { icon: 'MdAccountBalanceWallet', title: 'Government Forms', desc: 'All state and central government services.' },
  { icon: 'MdComputer', title: 'Online Exam Registration', desc: 'Register for competitive exams.' },
  { icon: 'MdTrain', title: 'Railway Ticket', desc: 'IRCTC booking assistance.' },
  { icon: 'MdFlightTakeoff', title: 'Flight Booking', desc: 'Domestic and international flight assistance.' },
  { icon: 'MdPayments', title: 'Bill Payments', desc: 'Electricity, mobile, and utility bills.' },
  { icon: 'MdKeyboard', title: 'Typing Work', desc: 'Hindi and English typing for all documents.' },
  { icon: 'MdBadge', title: 'Passport Photos', desc: 'Instant passport and visa size photos.' },
  { icon: 'MdEmail', title: 'Email Services', desc: 'Email creation, composing, and sending.' },
  { icon: 'MdTransform', title: 'Document Conversion', desc: 'Convert PDF, Word, Excel, and more.' },
  { icon: 'MdPictureAsPdf', title: 'PDF Services', desc: 'Create, merge, split, and edit PDFs.' },
  { icon: 'MdSchool', title: 'College Admission Forms', desc: 'College form filling assistance.' },
  { icon: 'MdWork', title: 'Employment Registration', desc: 'Job portal and employment registration.' },
]

export default function CyberCafeSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="cyber-cafe" className="section-pad relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #111111 0%, #1a1a2e 50%, #111111 100%)' }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,162,39,0.08)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Cyber Cafe"
          title="Digital Services"
          titleGold="At Your Fingertips"
          subtitle="Your trusted neighborhood cyber cafe for all government forms, printing, and digital services — fast, accurate, and affordable."
        />

        {/* Hero highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {['Aadhaar & PAN', 'Govt Forms', 'Printing', 'Internet', 'Passport Help', 'Bill Payments'].map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 bg-gold/10 border border-gold/20 text-gold text-xs font-semibold rounded-full"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || MdComputer
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="group glass rounded-2xl p-4 text-center hover:border-gold/30 hover:bg-gold/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                  <Icon size={18} className="text-gold group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="text-white text-xs font-semibold mb-1 leading-tight">{service.title}</h3>
                <p className="text-white/40 text-[10px] leading-relaxed hidden sm:block">{service.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-white/50 text-sm mb-6">Need any of these services? Walk in or contact us!</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gold text-primary font-bold px-8 py-4 rounded-full hover:bg-gold-light hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-1 transition-all duration-300"
            >
              <FaWhatsapp size={18} />
              WhatsApp for Services
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:border-gold hover:text-gold transition-all duration-300"
            >
              Call: {siteConfig.phoneDisplay}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
