import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { designTokens } from '../tokens';

export default function Footer() {
  const logoSrc = `${import.meta.env.BASE_URL}footerlogo.svg`;
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: '#3d6b56',
        color: designTokens.colors.neutral.white,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-14 md:py-16">
        {/* Top Accent Line */}
        <div className="h-1 w-24 sm:w-32 rounded-full mb-8 sm:mb-10" style={{ background: 'linear-gradient(to right, #10b981, #14b8a6)' }} />

        {/* Main Footer Content - Mobile First Layout */}
        <div className="mb-10 sm:mb-12">
          {/* Row 1: Brand Info (Full Width on Mobile) */}
          <div className="mb-8 lg:mb-0 lg:grid lg:grid-cols-4 lg:gap-8 xl:gap-12">
            <div className="mb-8 lg:mb-0">
              <div className="mb-4 sm:mb-5">
                <img
                  src={logoSrc}
                  alt="Khan Consultants"
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </div>
              <p className="text-sm sm:text-base leading-relaxed max-w-sm" style={{ color: '#cfe7d6' }}>
                One stop. 1000 experts. Your solution starts here. From business to property, legal to taxation.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center mt-5 sm:mt-6 px-5 py-2.5 min-h-[44px] rounded-lg text-sm sm:text-base font-semibold transition-all border-2 w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#3d6b56]"
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

            {/* Row 2: Services, KMC, Contact, Social */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:col-span-3 xl:gap-12">
              {/* Column 2: Services Links */}
              <div>
                <h4 className="text-xs sm:text-base lg:text-lg font-semibold mb-3 sm:mb-4 text-white">Services</h4>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm lg:text-base" style={{ color: '#cfe7d6' }}>
                  <li><Link to="/services/kolkata-corporation" className="hover:text-emerald-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#3d6b56]">KMC Services</Link></li>
                  <li><Link to="/services/legal" className="hover:text-emerald-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#3d6b56]">Trade Mark & Legal</Link></li>
                  <li><Link to="/services/gst-accounting" className="hover:text-emerald-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#3d6b56]">GST & Accounting</Link></li>
                  <li><Link to="/services/import-export" className="hover:text-emerald-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#3d6b56]">Import & Export</Link></li>
                  <li><Link to="/services/visas-immigration" className="hover:text-emerald-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#3d6b56]">Visas & Immigration</Link></li>
                </ul>
              </div>

              {/* Column 3: KMC Sub Pages */}
              <div>
                <h4 className="text-xs sm:text-base lg:text-lg font-semibold mb-3 sm:mb-4 text-white">KMC Sub Pages</h4>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm lg:text-base" style={{ color: '#cfe7d6' }}>
                  <li><Link to="/services/kolkata-corporation" className="hover:text-emerald-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#3d6b56]">Kolkata Corporation</Link></li>
                  <li><Link to="/services/certificates" className="hover:text-emerald-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#3d6b56]">Certificates</Link></li>
                  <li><Link to="/services/licenses" className="hover:text-emerald-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#3d6b56]">Licenses</Link></li>
                  <li><Link to="/services/property" className="hover:text-emerald-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#3d6b56]">Property</Link></li>
                </ul>
              </div>

              {/* Column 4: Contact Info */}
              <div>
                <h4 className="text-xs sm:text-base lg:text-lg font-semibold mb-3 sm:mb-4 text-white">Contact</h4>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm lg:text-base" style={{ color: '#cfe7d6' }}>
                  <li><a href="tel:+916291139691" className="hover:text-emerald-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#3d6b56]">+91-6291-139-691</a></li>
                  <li><a href="mailto:hello@khanconsultants.in" className="hover:text-emerald-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#3d6b56]">hello@khanconsultants.in</a></li>
                  <li className="text-xs sm:text-sm">26/1 Rafi Ahmed Kidwai Road</li>
                  <li className="text-xs sm:text-sm">Kolkata - 700016</li>
                </ul>
              </div>

              {/* Column 5: Social Links */}
              <div>
                <h4 className="text-xs sm:text-base lg:text-lg font-semibold mb-3 sm:mb-4 text-white">Follow Us</h4>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm lg:text-base" style={{ color: '#cfe7d6' }}>
                  <li>
                    <a
                      href="https://www.facebook.com/KhanConsultants2025"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-emerald-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#3d6b56]"
                    >
                      <FaFacebookF className="text-sm sm:text-base" aria-hidden="true" />
                      <span>Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/khanconsultants2025/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-emerald-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#3d6b56]"
                    >
                      <FaInstagram className="text-sm sm:text-base" aria-hidden="true" />
                      <span>Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/916291139691"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-emerald-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#3d6b56]"
                    >
                      <FaWhatsapp className="text-sm sm:text-base" aria-hidden="true" />
                      <span>WhatsApp</span>
                    </a>
                  </li>
                  <li><Link to="/contact" className="hover:text-emerald-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#3d6b56]">Get in Touch</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="pt-6 sm:pt-8" style={{ borderTop: '1px solid rgba(16, 185, 129, 0.25)' }}>
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-4 sm:gap-0" style={{ color: '#cfe7d6' }}>
            <p className="text-center sm:text-left">&copy; 2026 Khan Consultants. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link to="/privacy-policy" className="hover:text-emerald-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#3d6b56]">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-emerald-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#3d6b56]">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

