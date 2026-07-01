import Link from 'next/link'
import { FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { siteConfig } from '@/data/config'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Cyber Cafe', href: '#cyber-cafe' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'Wedding Photography', 'Pre-Wedding Shoot', 'Baby Shoot', 'Maternity Photography',
  'Event Photography', 'Passport Photos', 'Photo Printing', 'Photo Restoration',
  'Canvas Printing', 'Video Editing',
]

export default function FooterSection() {
  return (
    <footer className="bg-primary border-t border-white/5">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-gold-dark via-gold to-gold-dark py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-primary">
              Ready to Book Your Session?
            </h3>
            <p className="text-primary/70 text-sm mt-1">Contact us today — slots fill up fast!</p>
          </div>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-3 bg-primary text-gold font-bold px-8 py-4 rounded-full hover:bg-secondary hover:shadow-2xl transition-all duration-300"
          >
            <FaWhatsapp size={22} />
            Book Now on WhatsApp
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h2 className="font-playfair text-2xl font-bold text-white">Ganga Studio</h2>
              <p className="text-gold/80 text-xs tracking-[0.2em] uppercase mt-0.5">& Cyber Cafe</p>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Capturing life's most precious moments with artistry and passion since 10+ years.
              Your trusted photography studio and cyber cafe.
            </p>
            <div className="flex gap-3">
              <a href={siteConfig.social.instagram} className="w-9 h-9 glass rounded-full flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/30 transition-all duration-300">
                <FaInstagram size={16} />
              </a>
              <a href={siteConfig.social.facebook} className="w-9 h-9 glass rounded-full flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/30 transition-all duration-300">
                <FaFacebook size={16} />
              </a>
              <a href={siteConfig.social.youtube} className="w-9 h-9 glass rounded-full flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/30 transition-all duration-300">
                <FaYoutube size={16} />
              </a>
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-success/10 border border-success/20 rounded-full flex items-center justify-center text-success hover:bg-success/20 transition-all duration-300">
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 text-sm hover:text-gold transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">Services</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <Link href="#services" className="text-white/50 text-sm hover:text-gold transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${siteConfig.phone}`} className="flex items-start gap-3 text-white/50 text-sm hover:text-gold transition-colors group">
                  <FiPhone size={15} className="mt-0.5 flex-shrink-0 text-gold/60 group-hover:text-gold" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-3 text-white/50 text-sm hover:text-gold transition-colors group">
                  <FiMail size={15} className="mt-0.5 flex-shrink-0 text-gold/60 group-hover:text-gold" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/50 text-sm">
                  <FiMapPin size={15} className="mt-0.5 flex-shrink-0 text-gold/60" />
                  <span>{siteConfig.address}</span>
                </div>
              </li>
            </ul>

            <div className="mt-6 p-4 glass rounded-xl border border-gold/10">
              <p className="text-gold text-xs font-semibold mb-1">Business Hours</p>
              <p className="text-white/50 text-xs">{siteConfig.hours}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Ganga Studio & Cyber Cafe. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gold transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-gold transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
