import { Link } from 'react-router-dom';
import { designTokens } from '../tokens';

export default function Footer() {
  const logoSrc = `${import.meta.env.BASE_URL}logo.svg`;
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a2d23 0%, #2c4d3f 50%, #1f3a2f 100%)',
        color: designTokens.colors.neutral.white,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-14 md:py-16">
        {/* Top Accent Line */}
        <div className="h-1 w-24 sm:w-32 rounded-full mb-8 sm:mb-10" style={{ background: 'linear-gradient(to right, #10b981, #14b8a6)' }} />

        {/* Main Footer Content - 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          {/* Column 1: Brand Info */}
          <div>
            <div className="mb-4 sm:mb-5">
              <div className="inline-flex items-center rounded-lg bg-white/95 px-2.5 py-2">
                <img
                  src={logoSrc}
                  alt="Khan Consultants"
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-sm sm:text-base leading-relaxed max-w-sm" style={{ color: '#cfe7d6' }}>
              One stop. 1000 experts. Your solution starts here. From business to property, legal to taxation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center mt-5 sm:mt-6 px-5 py-2.5 min-h-[44px] rounded-lg text-sm sm:text-base font-semibold transition-all border-2 w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2d23]"
              style={{
                borderColor: '#10b981',
                color: '#10b981',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #10b981, #14b8a6)';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#10b981';
              }}
            >
              Book a Free Call
            </Link>
          </div>

          {/* Column 2: Services Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm sm:text-base" style={{ color: '#cfe7d6' }}>
              <li><Link to="/services/legal" className="hover:text-emerald-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2d23]">Trade Mark & Legal</Link></li>
              <li><Link to="/services/gst-accounting" className="hover:text-emerald-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2d23]">GST & Accounting</Link></li>
              <li><Link to="/services/import-export" className="hover:text-emerald-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2d23]">Import & Export</Link></li>
              <li><Link to="/services/visas-immigration" className="hover:text-emerald-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2d23]">Visas & Immigration</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-sm sm:text-base" style={{ color: '#cfe7d6' }}>
              <li><a href="tel:+916291139691" className="hover:text-emerald-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2d23]">+91-6291-139-691</a></li>
              <li><a href="mailto:hello@khanconsultants.in" className="hover:text-emerald-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2d23]">hello@khanconsultants.in</a></li>
              <li className="text-sm">26/1 Rafi Ahmed Kidwai Road</li>
              <li className="text-sm">Kolkata - 700016</li>
            </ul>
          </div>

          {/* Column 4: Social Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 text-white">Follow Us</h4>
            <ul className="space-y-2 text-sm sm:text-base" style={{ color: '#cfe7d6' }}>
              <li><a href="https://www.facebook.com/KhanConsultants2025" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2d23]">Facebook</a></li>
              <li><a href="https://www.instagram.com/khanconsultants2025/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2d23]">Instagram</a></li>
              <li><Link to="/contact" className="hover:text-emerald-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2d23]">Get in Touch</Link></li>
              <li><a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2d23]">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="pt-6 sm:pt-8" style={{ borderTop: '1px solid rgba(16, 185, 129, 0.25)' }}>
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-4 sm:gap-0" style={{ color: '#cfe7d6' }}>
            <p className="text-center sm:text-left">&copy; 2026 Khan Consultants. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link to="/privacy-policy" className="hover:text-emerald-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2d23]">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-emerald-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a2d23]">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

