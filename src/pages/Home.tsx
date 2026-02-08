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
import { HiScale, HiGlobeAlt, HiBuildingOffice2, HiIdentification } from 'react-icons/hi2';
import { MdAccountBalance, MdLocalShipping } from 'react-icons/md';

export default function Home() {
  const services = [
    {
      icon: <HiScale className="text-inherit" />,
      title: 'Trade Mark & Legal',
      description: 'Expert legal consultations, court matters, and company formation services.',
      features: ['Legal Consultations', 'Court Representation', 'Company Formation', 'Contract Advisory'],
      href: '/services/legal',
    },
    {
      icon: <MdAccountBalance className="text-inherit" />,
      title: 'GST & Accounting',
      description: 'Complete GST filing, bookkeeping, and tax planning solutions.',
      features: ['GST Filing', 'Book-keeping', 'Tax Planning', 'Compliance Management'],
      href: '/services/gst-accounting',
    },
    {
      icon: <MdLocalShipping className="text-inherit" />,
      title: 'Import & Export',
      description: 'IEC registration, compliance management, and logistics guidance.',
      features: ['IEC Registration', 'Compliance Guidance', 'Documentation Support', 'Logistics Advisory'],
      href: '/services/import-export',
    },
    {
      icon: <HiGlobeAlt className="text-inherit" />,
      title: 'Visas & Immigration',
      description: 'Study abroad, business visas, and family immigration services.',
      features: ['Study Abroad Guidance', 'Entrepreneur Visa', 'Business Visas', 'Family Immigration'],
      href: '/services/visas-immigration',
    },
    {
      icon: <HiBuildingOffice2 className="text-inherit" />,
      title: 'Kolkata Corporation',
      description: 'End-to-end municipal support: certificates, licenses, and property matters handled with legal backing.',
      features: ['Birth & Death Certificates', 'Trade Licenses', 'Property Mutation', 'Full Legal Support'],
      href: '/services/kolkata-corporation',
    },
    {
      icon: <HiIdentification className="text-inherit" />,
      title: 'Government IDs',
      description: 'Complete assistance with government identity and compliance documents.',
      features: ['PAN/Aadhaar', 'Voter ID', 'Passport Support', 'License Registration'],
      href: '/services/government-ids',
    },
  ];

  return (
    <div style={{ backgroundColor: designTokens.colors.neutral.white }}>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center min-h-[600px] sm:min-h-[650px] md:min-h-[700px] lg:min-h-[750px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&h=900&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2d23]/95 via-[#2c4d3f]/90 to-[#1f3a2f]/95" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 text-white">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 sm:gap-3 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base mb-6 sm:mb-8 backdrop-blur-sm border-2 border-emerald-400/30" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(20, 184, 166, 0.15))' }}>
              <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full text-sm sm:text-base font-bold" style={{ background: 'linear-gradient(to right, #10b981, #14b8a6)' }}>★</span>
              <span className="font-semibold text-emerald-50">Trusted by 500+ Clients Worldwide</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] mb-5 sm:mb-6 md:mb-7">
              <span className="inline-block">One Stop.</span>
              <span className="inline-block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"> 1000 Experts.</span>
              <span className="block mt-2 sm:mt-3">Your Solution Starts Here</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 leading-relaxed text-emerald-50/90 max-w-3xl mx-auto px-2">
              From business to property, legal to taxation—we've got you covered with our team of 1000+ experts providing comprehensive solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center px-2">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-8 sm:px-9 md:px-10 py-4 sm:py-4 text-base sm:text-lg font-bold transition-all transform hover:shadow-emerald-500/50 hover:shadow-2xl hover:-translate-y-1 text-white"
                style={{ background: 'linear-gradient(to right, #10b981, #14b8a6)' }}
              >
                <span>Schedule Consultation</span>
                <span className="text-xl">→</span>
              </Link>
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-8 sm:px-9 md:px-10 py-4 sm:py-4 border-2 border-emerald-400 text-white text-base sm:text-lg font-bold hover:bg-emerald-500/20 backdrop-blur-sm transition-all transform hover:-translate-y-1"
              >
                <span>Explore Services</span>
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto">
            <div className="rounded-2xl p-5 sm:p-6 text-center backdrop-blur-sm border border-emerald-400/20" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1))' }}>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">1000+</div>
              <div className="text-sm sm:text-base font-medium text-emerald-100">Expert Consultants</div>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 text-center backdrop-blur-sm border border-emerald-400/20" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1))' }}>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">15+</div>
              <div className="text-sm sm:text-base font-medium text-emerald-100">Years Experience</div>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 text-center backdrop-blur-sm border border-emerald-400/20" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1))' }}>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">6+</div>
              <div className="text-sm sm:text-base font-medium text-emerald-100">Core Services</div>
            </div>
            <div className="rounded-2xl p-5 sm:p-6 text-center backdrop-blur-sm border border-emerald-400/20" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1))' }}>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Pan India</div>
              <div className="text-sm sm:text-base font-medium text-emerald-100">Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 pb-10 sm:pb-12">
            {/* Label Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 sm:mb-8 rounded-full border-2 border-emerald-200" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(20, 184, 166, 0.08))' }}>
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"></span>
              <span className="text-xs sm:text-sm font-bold tracking-widest text-emerald-600 uppercase">Our Services</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 sm:mb-6 bg-gradient-to-r from-[#2c4d3f] via-emerald-600 to-[#2c4d3f] bg-clip-text text-transparent leading-tight px-2">
              Comprehensive Consulting Solutions
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed text-[#53785b] px-4">
              We offer a full spectrum of consulting services designed to address your unique business challenges and accelerate your growth trajectory.
            </p>

            {/* Decorative Line */}
            <div className="mt-8 sm:mt-10 flex items-center justify-center gap-3">
              <div className="h-1 w-16 sm:w-20 rounded-full bg-gradient-to-r from-transparent to-emerald-500"></div>
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
              <div className="h-1 w-16 sm:w-20 rounded-full bg-gradient-to-r from-teal-500 to-transparent"></div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
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

