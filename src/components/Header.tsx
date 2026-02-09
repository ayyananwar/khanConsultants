import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { designTokens } from '../tokens';

export default function Navbar() {
  const logoSrc = `${import.meta.env.BASE_URL}logo.svg`;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const services = [
    { name: 'Trade Mark & Legal', path: '/services/legal' },
    { name: 'GST & Accounting', path: '/services/gst-accounting' },
    { name: 'Import & Export', path: '/services/import-export' },
    { name: 'Visas & Immigration', path: '/services/visas-immigration' },
    { name: 'Kolkata Corporation', path: '/services/kolkata-corporation' },
    { name: 'Government IDs', path: '/services/government-ids' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logoSrc}
              alt="Khan Consultants"
              className="h-8 sm:h-10 md:h-12 w-auto object-contain"
            />
            <span className="sr-only">Khan Consultants</span>
          </Link>

          {/* Center: Desktop Navigation Links */}
          <ul className="hidden lg:flex gap-8 font-medium" style={{ color: designTokens.colors.sage[600] }}>
            <li><Link to="/" className="hover:text-gray-800 transition">Home</Link></li>
            <li 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="hover:text-gray-800 transition flex items-center gap-1">
                Services
                <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 pt-2 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="w-64 bg-white rounded-xl shadow-lg border py-2" style={{ borderColor: designTokens.colors.sage[50] }}>
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        onClick={() => setIsServicesOpen(false)}
                        className="block px-4 py-2.5 text-sm transition"
                        style={{
                          color: designTokens.colors.sage[900],
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = designTokens.colors.sage[600];
                          e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = designTokens.colors.sage[900];
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
            <li><Link to="/about" className="hover:text-gray-800 transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-gray-800 transition">Contact</Link></li>
          </ul>

          {/* Right: CTA Button + Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:block rounded-full px-4 sm:px-5 py-2 text-white text-sm font-medium transition"
              style={{
                backgroundColor: designTokens.colors.sage[600],
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = designTokens.colors.sage[700];
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = designTokens.colors.sage[600];
              }}
            >
              Get Consultation
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5 rounded-lg hover:bg-gray-800 transition"
              aria-label="Toggle menu"
            >
              <span className={`w-5 h-0.5 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ backgroundColor: designTokens.colors.sage[600] }}></span>
              <span className={`w-5 h-0.5 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: designTokens.colors.sage[600] }}></span>
              <span className={`w-5 h-0.5 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ backgroundColor: designTokens.colors.sage[600] }}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[280px] bg-white shadow-2xl z-50 transform transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-lg transition"
            style={{ color: 'black' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = designTokens.colors.sage[600];
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
            aria-label="Close menu"
          >
            <span className="text-2xl">×</span>
          </button>

          {/* Logo */}
          <div className="mb-8 mt-2">
            <img
              src={logoSrc}
              alt="Khan Consultants"
              className="h-9 w-auto object-contain"
            />
          </div>

          {/* Mobile Navigation */}
          <nav className="space-y-1">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg font-medium transition"
              style={{ color: 'black' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = designTokens.colors.sage[600];
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'black';
              }}
            >
              Home
            </Link>
            
            {/* Services with Submenu */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition"
                style={{ color: 'black' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = designTokens.colors.sage[600];
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'black';
                }}
              >
                <span>Services</span>
                <svg 
                  className={`w-5 h-5 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Submenu */}
              {isMobileServicesOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-2.5 rounded-lg text-sm transition"
                      style={{ color: 'black' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = designTokens.colors.sage[50];
                        e.currentTarget.style.color = designTokens.colors.sage[600];
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = 'black';
                      }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg font-medium transition"
              style={{ color: 'black' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = designTokens.colors.sage[600];
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'black';
              }}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg font-medium transition"
              style={{ color: 'black' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = designTokens.colors.sage[600];
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'black';
              }}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile CTA Button */}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full mt-6 rounded-full px-5 py-3 text-white text-center font-medium transition"
            style={{ backgroundColor: designTokens.colors.sage[600] }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = designTokens.colors.sage[700];
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = designTokens.colors.sage[600];
            }}
          >
            Get Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
}


