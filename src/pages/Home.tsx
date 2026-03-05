import { ServiceCard } from '../components';
import {
  AboutSection,
  ProcessTimeline,
  Testimonials,
  FinalCTA,
} from '../components/HomeSections';
import { designTokens } from '../tokens';
import { HiBuildingOffice2, HiDocumentText, HiClipboardDocumentCheck, HiHomeModern } from 'react-icons/hi2';
import { FaBalanceScale, FaFileInvoiceDollar } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { openServiceEnquiry } from '../lib/serviceEnquiryLauncher';

export default function Home() {
  const services = [
    {
      icon: <HiBuildingOffice2 className="text-inherit" style={{ color: 'var(--color-2563eb)' }} />,
      title: 'Kolkata Corporation',
      description: 'End-to-end municipal support: certificates, licenses, and property matters handled with legal backing.',
      features: ['Birth & Death Certificates', 'Trade Licenses', 'Property Mutation', 'Full Legal Support'],
      href: '/services/kolkata-corporation',
    },
    {
      icon: <FaFileInvoiceDollar className="text-inherit" style={{ color: 'var(--color-059669)' }} />,
      title: 'GST & Accounting',
      description: 'Complete GST filing, bookkeeping, and tax planning solutions for businesses of all sizes.',
      features: ['GST Filing', 'Book-keeping', 'Tax Planning', 'Compliance Management'],
      href: '/services/gst-accounting',
    },
    {
      icon: <FaBalanceScale className="text-inherit" style={{ color: 'var(--color-7c3aed)' }} />,
      title: 'Trademark & Legal',
      description: 'Expert legal consultations, trademark registration, court matters, and company formation.',
      features: ['Trademark Registration', 'Court Representation', 'Company Formation', 'Contract Advisory'],
      href: '/services/legal',
    },
    {
      icon: <HiHomeModern className="text-inherit" style={{ color: 'var(--color-d97706)' }} />,
      title: 'Property Matters',
      description: 'Property mutation, tax assessment, and Thika Tenancy matters with expert guidance.',
      features: ['Property Mutation', 'Tax Assessment', 'Thika Tenancy', 'Building Plans'],
      href: '/services/property',
    },
    {
      icon: <HiDocumentText className="text-inherit" style={{ color: 'var(--color-0891b2)' }} />,
      title: 'Certificates & IDs',
      description: 'Birth, death, marriage, and succession certificates with complete legal assistance and fast processing.',
      features: ['Birth Certificates', 'Death Certificates', 'Marriage Certificates', 'Succession Certificates'],
      href: '/services/certificates',
    },
    {
      icon: <HiClipboardDocumentCheck className="text-inherit" style={{ color: 'var(--color-6366f1)' }} />,
      title: 'Licences',
      description: 'Trade licenses, hawker licenses, and commercial permits with compliance management.',
      features: ['Trade License', 'Hawker License', 'Compliance Support', 'Renewal Services'],
      href: '/services/licenses',
    },
  ];

  return (
    <div style={{ backgroundColor: designTokens.colors.neutral.white }}>
      {/* Hero Section — clean, focused, mobile-first */}
      <section
        className="relative min-h-[calc(100svh-56px)] sm:min-h-[520px] md:min-h-[600px] lg:min-h-[calc(100svh-72px)] flex flex-col overflow-x-clip"
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75" />

        <div className="relative flex-1 flex flex-col justify-center px-5 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 text-white">
          <div className="max-w-3xl lg:max-w-6xl xl:max-w-7xl mx-auto w-full text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] sm:text-xs md:text-sm mb-5 sm:mb-6 bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full text-[10px] sm:text-xs font-bold bg-amber-500 text-white">★</span>
              <span className="font-semibold">Government Licensed KMC Consultants</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-[1.6rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.18] mb-4 sm:mb-5">
              One Stop. <span className="text-amber-300">10,000 Experts.</span>
              <br className="hidden sm:block" />
              <span className="sm:block mt-1">Your Solution Starts Here</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-white/85 max-w-xl mx-auto leading-relaxed mb-6 sm:mb-8">
              From business to property, legal to taxation — Kolkata's most trusted consultants for over 50 years.
            </p>

            {/* CTA Buttons — HIDDEN on mobile, shown on sm+ (moved below stats on mobile) */}
            <div className="hidden sm:flex flex-row gap-4 justify-center items-center">
              <button
                type="button"
                onClick={() => openServiceEnquiry()}
                className="sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 text-base font-bold text-white min-h-[48px] btn-primary-sage shadow-lg hover:shadow-xl transition-all"
              >
                Schedule Consultation <span>→</span>
              </button>
              <a
                href="https://wa.me/916291139691"
                target="_blank"
                rel="noopener noreferrer"
                className="sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white text-base font-bold min-h-[48px] transition-all"
              >
                <BsWhatsapp className="text-lg text-[var(--color-25d366)]" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Compact Stats Strip */}
          <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-lg sm:max-w-2xl mx-auto w-full mt-6 sm:mt-10">
            {[
              { value: '50+', label: 'Years' },
              { value: '25+', label: 'Licensed' },
              { value: '1K+', label: 'Clients' },
              { value: '10K+', label: 'Experts' },
            ].map((stat) => (
              <div key={stat.label} className="text-center py-2.5 sm:py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div className="text-lg sm:text-2xl md:text-3xl font-bold text-amber-300">{stat.value}</div>
                <div className="text-[9px] sm:text-xs text-white/70 font-medium mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons — mobile only, AFTER stats */}
          <div className="flex sm:hidden flex-col gap-2.5 mt-6 max-w-lg mx-auto w-full">
            <button
              type="button"
              onClick={() => openServiceEnquiry()}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white min-h-[48px] btn-primary-sage shadow-lg hover:shadow-xl transition-all"
            >
              Schedule Consultation <span>→</span>
            </button>
            <a
              href="https://wa.me/916291139691"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white text-sm font-bold min-h-[48px] transition-all"
            >
              <BsWhatsapp className="text-lg text-[var(--color-25d366)]" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--color-3d6b56)] font-bold mb-2 sm:mb-3 uppercase">Our Services</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
              Legal, Licensed & Official<br className="hidden sm:block" /> Consulting Solutions
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-[var(--color-3d6b56)] mx-auto rounded-full" />
          </div>

          {/* Services Grid — 2-col on mobile, 3 on lg */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6">
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

