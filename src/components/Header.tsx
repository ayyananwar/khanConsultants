import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const logoSrc = `${import.meta.env.BASE_URL}logo.svg`;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(true);

  const services = [
    { 
      name: 'Kolkata Corporation', 
      path: '/services/kolkata-corporation',
      subItems: [
        { name: 'Certificates', path: '/services/certificates' },
        { name: 'Licenses', path: '/services/licenses' },
        { name: 'Property', path: '/services/property' },
      ]
    },
    { name: 'Trade Mark & Legal', path: '/services/legal' },
    { name: 'GST & Accounting', path: '/services/gst-accounting' },
    { name: 'Import & Export', path: '/services/import-export' },
    { name: 'Visas & Immigration', path: '/services/visas-immigration' },
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
      className={`sticky top-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'shadow' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center min-h-[44px]">
            <img
              src={logoSrc}
              alt="Khan Consultants"
              className="h-6 sm:h-7 md:h-8 lg:h-9 xl:h-10 w-auto object-contain"
            />
            <span className="sr-only">Khan Consultants</span>
          </Link>

          {/* Center: Desktop Navigation Links */}
          <ul className="hidden lg:flex gap-4 xl:gap-6 2xl:gap-8 font-medium text-xs lg:text-sm xl:text-base" style={{ color: 'black' }}>
            <li><Link to="/" className="hover:text-gray-700 transition">Home</Link></li>
            <li 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="hover:text-gray-700 transition flex items-center gap-1">
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
                  <div className="w-64 bg-white rounded-xl shadow-lg border py-2" style={{ borderColor: '#f3f4f6' }}>
                    {services.map((service, index) => (
                      <div key={index}>
                        {service.subItems ? (
                          <>
                            <Link
                              to={service.path}
                              onClick={() => setIsServicesOpen(false)}
                              className="block px-4 py-2.5 text-sm font-semibold transition"
                              style={{
                                color: 'black',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#111827';
                                e.currentTarget.style.color = 'white';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = 'black';
                              }}
                            >
                              {service.name}
                            </Link>
                            {service.subItems.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.path}
                                onClick={() => setIsServicesOpen(false)}
                                className="block pl-8 pr-4 py-2 text-sm transition"
                                style={{
                                  color: 'black',
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = '#f3f4f6';
                                  e.currentTarget.style.color = '#111827';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = 'transparent';
                                  e.currentTarget.style.color = 'black';
                                }}
                              >
                                → {subItem.name}
                              </Link>
                            ))}
                          </>
                        ) : (
                          <Link
                            to={service.path}
                            onClick={() => setIsServicesOpen(false)}
                            className="block px-4 py-2.5 text-sm transition"
                            style={{
                              color: 'black',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#111827';
                              e.currentTarget.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.color = 'black';
                            }}
                          >
                            {service.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
            <li><Link to="/about" className="hover:text-gray-700 transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-gray-700 transition">Contact</Link></li>
          </ul>

          {/* Right: CTA Button + Mobile Menu Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center rounded-full px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 lg:py-2.5 min-h-[44px] text-white text-xs sm:text-sm font-medium transition bg-[#3d6b56] hover:bg-[#2c4d3f]"
            >
              Get Consultation
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                setIsMobileMenuOpen((prev) => {
                  const next = !prev;
                  if (next) {
                    setIsMobileServicesOpen(true);
                  }
                  return next;
                });
              }}
              className="lg:hidden w-10 h-10 sm:w-11 sm:h-11 flex flex-col justify-center items-center gap-1 sm:gap-1.5 rounded-lg hover:bg-gray-100 transition"
              aria-label="Toggle menu"
            >
              <span className={`w-5 sm:w-6 h-0.5 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5 sm:translate-y-2' : ''}`} style={{ backgroundColor: 'black' }}></span>
              <span className={`w-5 sm:w-6 h-0.5 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: 'black' }}></span>
              <span className={`w-5 sm:w-6 h-0.5 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5 sm:-translate-y-2' : ''}`} style={{ backgroundColor: 'black' }}></span>
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
        className={`fixed top-0 right-0 bottom-0 w-[85vw] max-w-[280px] sm:max-w-[320px] bg-white shadow-2xl z-50 transform transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 sm:p-5 md:p-6">
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-lg hover:bg-gray-100 transition"
            style={{ color: 'black' }}
            aria-label="Close menu"
          >
            <span className="text-2xl sm:text-3xl leading-none">×</span>
          </button>

          {/* Logo */}
          <div className="mb-5 sm:mb-6 mt-1">
            <img
              src={logoSrc}
              alt="Khan Consultants"
              className="h-5 sm:h-6 md:h-7 w-auto object-contain"
            />
          </div>

          {/* Mobile Navigation */}
          <nav className="space-y-0.5 sm:space-y-1">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base min-h-[44px] sm:min-h-[48px] flex items-center transition"
              style={{ color: 'black' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#111827';
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
                className="w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base min-h-[44px] sm:min-h-[48px] transition"
                style={{ color: 'black' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#111827';
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
                <div className="ml-3 sm:ml-4 mt-0.5 sm:mt-1 space-y-0.5 sm:space-y-1">
                  {services.map((service, index) => (
                    <div key={index}>
                      {service.subItems ? (
                        <>
                          <Link
                            to={service.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold min-h-[44px] flex items-center transition"
                            style={{ color: 'black' }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#111827';
                              e.currentTarget.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.color = 'black';
                            }}
                          >
                            {service.name}
                          </Link>
                          <div className="ml-3 sm:ml-4 mt-0.5 space-y-0.5">
                            {service.subItems.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm min-h-[40px] flex items-center transition"
                                style={{ color: 'black' }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = '#f3f4f6';
                                  e.currentTarget.style.color = '#111827';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = 'transparent';
                                  e.currentTarget.style.color = 'black';
                                }}
                              >
                                → {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </>
                      ) : (
                        <Link
                          to={service.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm min-h-[44px] flex items-center transition"
                          style={{ color: 'black' }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#111827';
                            e.currentTarget.style.color = 'white';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = 'black';
                          }}
                        >
                          {service.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base min-h-[44px] sm:min-h-[48px] flex items-center transition"
              style={{ color: 'black' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#111827';
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
              className="block px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base min-h-[44px] sm:min-h-[48px] flex items-center transition"
              style={{ color: 'black' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#111827';
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
            className="block w-full mt-5 sm:mt-6 rounded-full px-4 sm:px-5 py-3 sm:py-3.5 text-white text-center font-medium text-sm sm:text-base min-h-[44px] sm:min-h-[48px] flex items-center justify-center transition bg-[#3d6b56] hover:bg-[#2c4d3f]"
          >
            Get Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
}


