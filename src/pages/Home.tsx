import { ServiceCard } from '../components';
import {
  AboutSection,
  ProcessTimeline,
  Testimonials,
  FinalCTA,
} from '../components/HomeSections';
import { Link } from 'react-router-dom';
import { designTokens } from '../tokens';
import { HiBuildingOffice2, HiDocumentText, HiClipboardDocumentCheck, HiHomeModern } from 'react-icons/hi2';
import { FaPassport, FaBalanceScale, FaFileInvoiceDollar, FaShippingFast } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';

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
      icon: <FaFileInvoiceDollar className="text-inherit" style={{ color: '#059669' }} />,
      title: 'GST & Accounting',
      description: 'Complete GST filing, bookkeeping, and tax planning solutions for businesses of all sizes.',
      features: ['GST Filing', 'Book-keeping', 'Tax Planning', 'Compliance Management'],
      href: '/services/gst-accounting',
    },
    {
      icon: <FaBalanceScale className="text-inherit" style={{ color: '#7c3aed' }} />,
      title: 'Trademark & Legal',
      description: 'Expert legal consultations, trademark registration, court matters, and company formation.',
      features: ['Trademark Registration', 'Court Representation', 'Company Formation', 'Contract Advisory'],
      href: '/services/legal',
    },
    {
      icon: <HiHomeModern className="text-inherit" style={{ color: '#d97706' }} />,
      title: 'Property Matters',
      description: 'Property mutation, tax assessment, and Thika Tenancy matters with expert guidance.',
      features: ['Property Mutation', 'Tax Assessment', 'Thika Tenancy', 'Building Plans'],
      href: '/services/property',
    },
    {
      icon: <HiDocumentText className="text-inherit" style={{ color: '#0891b2' }} />,
      title: 'Certificates & IDs',
      description: 'Birth, death, marriage, and succession certificates with complete legal assistance and fast processing.',
      features: ['Birth Certificates', 'Death Certificates', 'Marriage Certificates', 'Succession Certificates'],
      href: '/services/certificates',
    },
    {
      icon: <HiClipboardDocumentCheck className="text-inherit" style={{ color: '#6366f1' }} />,
      title: 'Licences',
      description: 'Trade licenses, hawker licenses, and commercial permits with compliance management.',
      features: ['Trade License', 'Hawker License', 'Compliance Support', 'Renewal Services'],
      href: '/services/licenses',
    },
    {
      icon: <FaShippingFast className="text-inherit" style={{ color: '#dc2626' }} />,
      title: 'Exporting',
      description: 'IEC registration, compliance management, and international trade logistics guidance.',
      features: ['IEC Registration', 'Compliance Guidance', 'Documentation Support', 'Logistics Advisory'],
      href: '/services/import-export',
    },
    {
      icon: <FaPassport className="text-inherit" style={{ color: '#ea580c' }} />,
      title: 'Immigration',
      description: 'Study abroad, business visas, and family immigration services with end-to-end support.',
      features: ['Study Abroad Guidance', 'Entrepreneur Visa', 'Business Visas', 'Family Immigration'],
      href: '/services/visas-immigration',
    },
  ];

  return (
    <div style={{ backgroundColor: designTokens.colors.neutral.white }}>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center min-h-0 sm:min-h-[500px] md:min-h-[580px] lg:min-h-[650px] xl:min-h-[700px] flex flex-col"
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        <div className="relative flex-1 flex flex-col max-w-7xl mx-auto w-full px-4 sm:px-4 md:px-6 pt-20 sm:pt-24 md:pt-20 lg:pt-24 xl:pt-28 pb-6 sm:pb-10 md:pb-14 lg:pb-16 xl:pb-20 text-white">
          {/* Content area */}
          <div className="flex flex-col justify-center max-w-4xl mx-auto w-full text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 md:gap-3 rounded-full px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-[10px] sm:text-xs md:text-sm lg:text-base mb-5 sm:mb-5 md:mb-6 lg:mb-8 mx-auto bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full text-xs sm:text-sm md:text-base font-bold bg-amber-500 text-white">★</span>
              <span className="font-semibold text-white">Government Licensed KMC Consultants</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-2xl mt-5 md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-[1.15] mb-4 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-7">
              <span className="inline-block">One Stop.</span>
              <span className="inline-block text-amber-300"> 1000 Experts.</span>
              <span className="block mt-1.5 sm:mt-2 md:mt-3">Your Solution Starts Here</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl mb-6 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 leading-relaxed text-white/90 max-w-3xl mx-auto px-1">
              From business to property, legal to taxation—we've got you covered with our team of 1000+ experts.
            </p>

          </div>

          {/* Stats Section */}
          <div className="grid mt-10 sm:mt-6 md:mt-8 lg:mt-10 grid-cols-4 gap-1.5 sm:gap-3 md:gap-4 lg:gap-5 max-w-5xl mx-auto w-full">
            <div className="rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-5 text-center bg-white/10 backdrop-blur-sm border border-white/10">
              <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-0.5 md:mb-2 text-amber-300">50+</div>
              <div className="text-[9px] sm:text-sm md:text-base font-medium text-white/80 leading-tight">Years Exp.</div>
            </div>
            <div className="rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-5 text-center bg-white/10 backdrop-blur-sm border border-white/10">
              <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-0.5 md:mb-2 text-amber-300">25+</div>
              <div className="text-[9px] sm:text-sm md:text-base font-medium text-white/80 leading-tight">KMC Licensed</div>
            </div>
            <div className="rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-5 text-center bg-white/10 backdrop-blur-sm border border-white/10">
              <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-0.5 md:mb-2 text-amber-300">1K+</div>
              <div className="text-[9px] sm:text-sm md:text-base font-medium text-white/80 leading-tight">Clients</div>
            </div>
            <div className="rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-5 text-center bg-white/10 backdrop-blur-sm border border-white/10">
              <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-0.5 md:mb-2 text-amber-300">10K+</div>
              <div className="text-[9px] sm:text-sm md:text-base font-medium text-white/80 leading-tight">Experts</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2.5 mt-15 sm:gap-4 md:gap-5 justify-center items-center w-full mt-6 sm:mt-8 md:mt-10 lg:mt-12 pb-safe">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 text-sm sm:text-base md:text-lg font-bold transition-all transform hover:shadow-xl hover:-translate-y-1 text-white min-h-[48px] bg-[#3d6b56] hover:bg-[#2c4d3f] shadow-lg"
            >
              <span>Schedule Consultation</span>
              <span className="text-base sm:text-lg md:text-xl">→</span>
            </Link>
            <a
              href="https://wa.me/916291139691"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white text-sm sm:text-base md:text-lg font-bold transition-all transform hover:shadow-xl hover:-translate-y-1 min-h-[48px]"
            >
              <BsWhatsapp className="text-lg sm:text-xl text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-3 sm:px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Professional Header - Compact */}
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-gray-500 font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-white px-3 sm:px-4">Our Services</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 leading-tight">
              Legal, Licensed & Official Consulting Solutions in Kolkata
            </h2>
            <div className="w-12 sm:w-16 md:w-20 h-1 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
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

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* Testimonials */}
      <Testimonials />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}

