import { ServiceCard } from '../components';
import {
  AboutSection,
  IndustriesSection,
  ProcessTimeline,
  Testimonials,
  FinalCTA,
} from '../components/HomeSections';
import { Link } from 'react-router-dom';
import { designTokens } from '../tokens';
import { HiBuildingOffice2, HiDocumentText, HiClipboardDocumentCheck, HiHomeModern } from 'react-icons/hi2';
import { FaPassport, FaBalanceScale, FaFileInvoiceDollar, FaShippingFast } from 'react-icons/fa';

export default function Home() {
  const services = [
    {
      icon: <HiBuildingOffice2 className="text-inherit" style={{ color: '#2563eb' }} />,
      title: 'Kolkata Corporation',
      description: 'End-to-end municipal support: certificates, licenses, and property matters handled with legal backing.',
      features: ['Birth & Death Certificates', 'Trade Licenses', 'Property Mutation', 'Full Legal Support'],
      href: '/services/kolkata-corporation',
    },
    {
      icon: <HiDocumentText className="text-inherit" style={{ color: '#14b8a6' }} />,
      title: 'KMC Certificates',
      description: 'Birth, death, marriage, and succession certificates with complete legal assistance and fast processing.',
      features: ['Birth Certificates', 'Death Certificates', 'Marriage Certificates', 'Legal Support'],
      href: '/services/certificates',
    },
    {
      icon: <HiClipboardDocumentCheck className="text-inherit" style={{ color: '#6366f1' }} />,
      title: 'KMC Licenses',
      description: 'Trade licenses, hawker licenses, and commercial permits with compliance management.',
      features: ['Trade License', 'Hawker License', 'Compliance Support', 'Renewal Services'],
      href: '/services/licenses',
    },
    {
      icon: <HiHomeModern className="text-inherit" style={{ color: '#f59e0b' }} />,
      title: 'KMC Property',
      description: 'Property mutation, tax assessment, and Thika Tenancy matters with expert guidance.',
      features: ['Property Mutation', 'Tax Assessment', 'Thika Tenancy', 'Building Plans'],
      href: '/services/property',
    },
    {
      icon: <FaBalanceScale className="text-inherit" style={{ color: '#7c3aed' }} />,
      title: 'Trade Mark & Legal',
      description: 'Expert legal consultations, court matters, and company formation services.',
      features: ['Legal Consultations', 'Court Representation', 'Company Formation', 'Contract Advisory'],
      href: '/services/legal',
    },
    {
      icon: <FaFileInvoiceDollar className="text-inherit" style={{ color: '#059669' }} />,
      title: 'GST & Accounting',
      description: 'Complete GST filing, bookkeeping, and tax planning solutions.',
      features: ['GST Filing', 'Book-keeping', 'Tax Planning', 'Compliance Management'],
      href: '/services/gst-accounting',
    },
    {
      icon: <FaShippingFast className="text-inherit" style={{ color: '#dc2626' }} />,
      title: 'Import & Export',
      description: 'IEC registration, compliance management, and logistics guidance.',
      features: ['IEC Registration', 'Compliance Guidance', 'Documentation Support', 'Logistics Advisory'],
      href: '/services/import-export',
    },
    {
      icon: <FaPassport className="text-inherit" style={{ color: '#ea580c' }} />,
      title: 'Visas & Immigration',
      description: 'Study abroad, business visas, and family immigration services.',
      features: ['Study Abroad Guidance', 'Entrepreneur Visa', 'Business Visas', 'Family Immigration'],
      href: '/services/visas-immigration',
    },
  ];

  return (
    <div style={{ backgroundColor: designTokens.colors.neutral.white }}>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center min-h-[420px] sm:min-h-[500px] md:min-h-[580px] lg:min-h-[650px] xl:min-h-[700px]"
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 pt-14 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 pb-8 sm:pb-10 md:pb-14 lg:pb-16 xl:pb-20 text-white">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 md:gap-3 rounded-full px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-[10px] sm:text-xs md:text-sm lg:text-base mb-4 sm:mb-5 md:mb-6 lg:mb-8 backdrop-blur-sm border-2 border-emerald-400/30" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(20, 184, 166, 0.15))' }}>
              <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full text-xs sm:text-sm md:text-base font-bold" style={{ background: 'linear-gradient(to right, #73516C, #73516C)' }}>★</span>
              <span className="font-semibold text-emerald-50">Trusted by 500+ Clients Worldwide</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-[1.15] mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-7">
              <span className="inline-block">One Stop.</span>
              <span className="inline-block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"> 1000 Experts.</span>
              <span className="block mt-1.5 sm:mt-2 md:mt-3">Your Solution Starts Here</span>
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-5 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 leading-relaxed text-emerald-50/90 max-w-3xl mx-auto px-2">
              From business to property, legal to taxation—we've got you covered with our team of 1000+ experts providing comprehensive solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center items-center px-2">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl px-5 sm:px-6 md:px-8 lg:px-9 xl:px-10 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg font-bold transition-all transform hover:shadow-emerald-500/50 hover:shadow-2xl hover:-translate-y-1 text-white"
                style={{ background: 'linear-gradient(to right, #10b981, #14b8a6)' }}
              >
                <span>Schedule Consultation</span>
                <span className="text-base sm:text-lg md:text-xl">→</span>
              </Link>
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl px-5 sm:px-6 md:px-8 lg:px-9 xl:px-10 py-3 sm:py-3.5 md:py-4 border-2 border-emerald-400/20 text-white text-sm sm:text-base md:text-lg font-bold hover:bg-emerald-500/20 backdrop-blur-sm transition-all transform hover:-translate-y-1"
              >
                <span>Explore Services</span>
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-14 xl:mt-16 2xl:mt-20 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5 max-w-5xl mx-auto">
            <div className="rounded-lg sm:rounded-xl md:rounded-2xl p-2.5 sm:p-3 md:p-4 lg:p-5 text-center backdrop-blur-sm border border-emerald-400/20" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1))' }}>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-0.5 sm:mb-1 md:mb-2 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">1000+</div>
              <div className="text-[10px] sm:text-xs md:text-sm lg:text-base font-medium text-emerald-100 leading-tight">Expert Consultants</div>
            </div>
            <div className="rounded-lg sm:rounded-xl md:rounded-2xl p-2.5 sm:p-3 md:p-4 lg:p-5 text-center backdrop-blur-sm border border-emerald-400/20" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1))' }}>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-0.5 sm:mb-1 md:mb-2 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">15+</div>
              <div className="text-[10px] sm:text-xs md:text-sm lg:text-base font-medium text-emerald-100 leading-tight">Years Experience</div>
            </div>
            <div className="rounded-lg sm:rounded-xl md:rounded-2xl p-2.5 sm:p-3 md:p-4 lg:p-5 text-center backdrop-blur-sm border border-emerald-400/20" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1))' }}>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-0.5 sm:mb-1 md:mb-2 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">8+</div>
              <div className="text-[10px] sm:text-xs md:text-sm lg:text-base font-medium text-emerald-100 leading-tight">Core Services</div>
            </div>
            <div className="rounded-lg sm:rounded-xl md:rounded-2xl p-2.5 sm:p-3 md:p-4 lg:p-5 text-center backdrop-blur-sm border border-emerald-400/20" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1))' }}>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-0.5 sm:mb-1 md:mb-2 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Pan India</div>
              <div className="text-[10px] sm:text-xs md:text-sm lg:text-base font-medium text-emerald-100 leading-tight">Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-3 sm:px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Professional Header - Compact */}
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-[#53785b] font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-white px-3 sm:px-4">Our Services</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#53785b]/30 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2c4d3f] mb-2 sm:mb-3 md:mb-4 leading-tight">
              Comprehensive Solutions for Your Business
            </h2>
            <div className="w-12 sm:w-16 md:w-20 h-1 bg-gradient-to-r from-[#53785b] to-[#2c4d3f] mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Industries Section */}
      <IndustriesSection />

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* Testimonials */}
      <Testimonials />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}

