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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-14">
        <div className="h-1 w-20 sm:w-28 rounded-full mb-6 sm:mb-8" style={{ background: 'linear-gradient(to right, #f59e0b, #facc15)' }} />

        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4 text-center sm:text-left">
            <img src={logoSrc} alt="Khan Consultants" className="h-12 sm:h-14 w-auto object-contain mb-4 mx-auto sm:mx-0" />
            <p className="text-sm sm:text-base leading-relaxed max-w-sm" style={{ color: '#cfe7d6' }}>
              One Stop. 10000 Experts. Your Solution Starts Here. From business to property, legal to taxation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center mt-5 px-5 py-2.5 min-h-[44px] rounded-lg text-sm sm:text-base font-semibold bg-amber-400 text-[#1f3a30] hover:bg-amber-300 transition-colors duration-200 w-full sm:w-auto shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#3d6b56]"
            >
              Book a Free Call
            </Link>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-left">
            <div>
              <h4 className="text-sm sm:text-base font-semibold mb-3 text-white">Services</h4>
              <ul className="space-y-2 text-xs sm:text-sm" style={{ color: '#cfe7d6' }}>
                <li><Link to="/services/kolkata-corporation" className="hover:text-amber-200 transition-colors">KMC Services</Link></li>
                <li><Link to="/services/legal" className="hover:text-amber-200 transition-colors">Trade Mark & Legal</Link></li>
                <li><Link to="/services/gst-accounting" className="hover:text-amber-200 transition-colors">GST & Accounting</Link></li>
                <li><Link to="/services/import-export" className="hover:text-amber-200 transition-colors">Import & Export</Link></li>
                <li><Link to="/services/visas-immigration" className="hover:text-amber-200 transition-colors">Visas & Immigration</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm sm:text-base font-semibold mb-3 text-white">Quick Links</h4>
              <ul className="space-y-2 text-xs sm:text-sm" style={{ color: '#cfe7d6' }}>
                <li><Link to="/services/certificates" className="hover:text-amber-200 transition-colors">Certificates</Link></li>
                <li><Link to="/services/licenses" className="hover:text-amber-200 transition-colors">Licenses</Link></li>
                <li><Link to="/services/property" className="hover:text-amber-200 transition-colors">Property</Link></li>
                <li><Link to="/contact" className="hover:text-amber-200 transition-colors">Get in Touch</Link></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-sm sm:text-base font-semibold mb-3 text-white">Contact</h4>
              <ul className="space-y-2 text-xs sm:text-sm" style={{ color: '#cfe7d6' }}>
                <li><a href="tel:+916291139691" className="hover:text-amber-200 transition-colors">+91-6291-139-691</a></li>
                <li><a href="mailto:hello@khanconsultants.in" className="hover:text-amber-200 transition-colors">hello@khanconsultants.in</a></li>
                <li>26/1 Rafi Ahmed Kidwai Road</li>
                <li>Kolkata - 700016</li>
              </ul>

              <div className="flex items-center gap-3 mt-4">
                <a href="https://www.facebook.com/KhanConsultants2025" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#1877F2] hover:bg-[#0f6ae6] text-white flex items-center justify-center transition-colors">
                  <FaFacebookF className="text-sm" aria-hidden="true" />
                </a>
                <a href="https://www.instagram.com/khanconsultants2025/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] hover:brightness-110 text-white flex items-center justify-center transition-all">
                  <FaInstagram className="text-sm" aria-hidden="true" />
                </a>
                <a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white flex items-center justify-center transition-colors">
                  <FaWhatsapp className="text-sm" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 mt-8" style={{ borderTop: '1px solid rgba(250, 204, 21, 0.28)' }}>
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-3 sm:gap-0" style={{ color: '#cfe7d6' }}>
            <p className="text-center sm:text-left">&copy; 2026 Khan Consultants. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/privacy-policy" className="hover:text-amber-200 transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-amber-200 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

