import { Link } from 'react-router-dom';
import { designTokens } from '../../tokens';
import { MdPhone } from 'react-icons/md';
import { RiBriefcaseFill, RiWhatsappFill } from 'react-icons/ri';
import { FaCheckCircle, FaShieldAlt, FaFileAlt, FaBalanceScale } from 'react-icons/fa';
import { IoMdDocument } from 'react-icons/io';

const Licenses = () => {
  const service = {
    title: 'KMC Trade & Commercial Licences',
    heroTitle: 'KMC Trade & Commercial Licences – Done Right, From Day One',
    heroDescription: 'Whether you\'re starting a new business, renewing an existing licence, or correcting past records, we handle KMC licensing compliantly, efficiently, and end-to-end.',
    heroSubtitle: 'Supported by on-ground professionals and a dedicated legal team where required.',
    
    licenseServices: [
      {
        title: 'Certificate of Enlistment (Trade Licence)',
        description: 'The Certificate of Enlistment is mandatory for most businesses operating within KMC jurisdiction.',
        services: [
          'New Trade Licence applications',
          'Change of trade category or nature of business',
          'Address change or premises modification',
          'Surrender or cancellation of licence',
          'Rectification of past errors'
        ]
      },
      {
        title: 'Licence Renewals & Amalgamation',
        description: 'Avoid penalties and operational disruption with timely and accurate renewals.',
        services: [
          'Annual and delayed renewals',
          'Amalgamation of multiple licences',
          'Updating proprietor / partner details',
          'Closure compliance and record updates'
        ]
      },
      {
        title: 'Food, Pharmacy & other Allied Licences',
        description: 'Certain businesses require additional statutory approvals alongside KMC licences.',
        services: [
          'FSSAI (Food Licence) applications & renewals',
          'Pharmacy & medical-related municipal permissions',
          'Fire License: Guidance on Fire Safety Certificates (FSC)',
          'Export License: Consultation and application for Exporting products'
        ]
      }
    ],
    
    complianceEcosystem: [
      {
        icon: FaFileAlt,
        title: 'Property Tax Linkage',
        description: 'We verify that the premises\' tax is paid or properly assessed (Assessee No. verification).'
      },
      {
        icon: IoMdDocument,
        title: 'Professional Tax (P. Tax)',
        description: 'We assist with P. Tax Enrolment & Registration, often mandatory to obtain or renew a Trade License.'
      },
      {
        icon: FaBalanceScale,
        title: 'Rent/Lease Verification',
        description: 'Ensuring your rent agreement or NOC meets KMC standards for commercial usage.'
      }
    ],
    
    commonIssues: [
      'Mismatch between address, property records, and licence data',
      'Unclear ownership or tenancy documentation'
    ],
    
    legalAdvantage: [
      'Drafting affidavits and declarations',
      'Notarisation and attestation',
      'Legal explanations for discrepancies',
      'Coordination where magistrate or legal orders are required'
    ],
    
    process: [
      {
        step: 1,
        title: 'Initial Assessment',
        description: 'We understand your business activity, premises, and existing records.'
      },
      {
        step: 2,
        title: 'Document Review & Preparation',
        description: 'We prepare applications, affidavits, and supporting documents accurately.'
      },
      {
        step: 3,
        title: 'Filing & Department Coordination',
        description: 'We manage submission and follow-ups with KMC and allied departments.'
      },
      {
        step: 4,
        title: 'Completion & Compliance Guidance',
        description: 'We ensure issuance, renewal, or closure is completed correctly.'
      }
    ],
    
    whyChoose: [
      'Strong familiarity with KMC trade departments',
      'Long standing relationships with several authorities',
      'Years of Experience in dealing with municipal matters',
      'Legal-backed documentation support',
      'Transparent timelines and expectations',
      'No false assurances or shortcuts'
    ]
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32"
        style={{
          backgroundImage: "url('/khanConsultants/hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="relative max-w-6xl mx-auto px-3 sm:px-4 md:px-6 text-white text-center">
          <p className="text-[10px] sm:text-xs md:text-sm tracking-widest font-bold mb-2 sm:mb-3 md:mb-4 uppercase text-emerald-300">KMC Services</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4 md:mb-5 lg:mb-6">{service.heroTitle}</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-4 md:mb-5 max-w-3xl mx-auto leading-relaxed text-white/90">{service.heroDescription}</p>
          <p className="text-xs sm:text-sm md:text-base mb-6 sm:mb-8 md:mb-10 text-emerald-200">{service.heroSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-5 sm:px-6 md:px-7 lg:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base text-white rounded-lg sm:rounded-xl font-bold transition bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 hover:shadow-lg hover:shadow-emerald-500/50 transform hover:scale-105">
              Get Quote
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center px-5 sm:px-6 md:px-7 lg:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base border-2 border-white text-white rounded-lg sm:rounded-xl font-bold hover:bg-white/15 hover:border-emerald-300 transition">
              Book Initial Review
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6" style={{ backgroundColor: designTokens.colors.neutral.white }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-5 md:mb-6" style={{ color: designTokens.colors.sage[900] }}>Business Compliance Starts With the Right Licence</h2>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4" style={{ color: designTokens.colors.sage[600] }}>
            Operating a business within Kolkata Municipal Corporation limits requires proper licensing and timely renewals. Delays, incorrect trade classification, or incomplete documentation can lead to penalties, closure notices, or rejected applications.
          </p>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed" style={{ color: designTokens.colors.sage[600] }}>
            At Khan Consultants, we assist business owners, professionals, and commercial establishments with accurate KMC licensing, ensuring your business is compliant, defensible, and future-ready.
          </p>
        </div>
      </section>

      {/* License Services */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6" style={{ backgroundColor: designTokens.colors.sage[50] }}>
        <div className="max-w-6xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-[#53785b] font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-[#f0f4f1] px-3 sm:px-4">LICENSING SERVICES</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#53785b]/30 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3" style={{ color: designTokens.colors.sage[900] }}>Our Comprehensive Licencing Services</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#53785b] to-[#2c4d3f] mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-xs sm:text-sm md:text-base max-w-3xl mx-auto px-2" style={{ color: designTokens.colors.sage[600] }}>
              We assist with a wide range of trade and commercial licences issued or linked to the Kolkata Municipal Corporation.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            {service.licenseServices.map((license, index) => (
              <div key={index} className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 bg-white border border-[#e8f0eb] hover:shadow-lg transition">
                <div className="flex items-start gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-5 md:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: designTokens.colors.sage[100] }}>
                    <RiBriefcaseFill className="text-2xl sm:text-3xl" style={{ color: designTokens.colors.sage[600] }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3" style={{ color: designTokens.colors.sage[900] }}>{license.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4" style={{ color: designTokens.colors.sage[600] }}>{license.description}</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6">
                  <p className="text-sm sm:text-base font-semibold mb-3 sm:mb-4" style={{ color: designTokens.colors.sage[900] }}>We assist with:</p>
                  <ul className="space-y-2 sm:space-y-3">
                    {license.services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3">
                        <FaCheckCircle className="text-lg sm:text-xl text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm md:text-base" style={{ color: designTokens.colors.sage[700] }}>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12 text-center">
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6" style={{ color: designTokens.colors.sage[600] }}>
              We provide complete guidance & coordination with allied departments where applicable to guide you through licensing procedures across various business avenues.
            </p>
            <Link to="/contact" className="inline-block px-6 sm:px-8 py-3 sm:py-4 text-white rounded-lg sm:rounded-xl font-bold transition text-sm sm:text-base" style={{ backgroundColor: designTokens.colors.sage[600] }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = designTokens.colors.sage[700]} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = designTokens.colors.sage[600]}>
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Compliance Ecosystem */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-3 sm:px-4 md:px-6" style={{ background: 'linear-gradient(135deg, #fef2f2, #fff7ed)' }}>
        <div className="max-w-5xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-red-700 font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-transparent px-3 sm:px-4">COMPLIANCE ECOSYSTEM</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-red-400/50 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-red-900 leading-tight">The "Hidden" Requirements</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-xs sm:text-sm md:text-base text-red-800 max-w-3xl mx-auto px-2">A Trade License does not exist in isolation. KMC authorities often cross-verify other statutory documents before issuance. We ensure your entire compliance ecosystem is healthy so your license isn't blocked.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
            {service.complianceEcosystem.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 bg-white border-2 border-red-300 hover:border-red-500 hover:shadow-xl transition-all">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-4 sm:mb-5">
                    <IconComponent className="text-2xl sm:text-3xl text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-red-900">{item.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-red-800">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 border-2 border-red-300">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 text-red-900">Common Issues We Prevent:</h3>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {service.commonIssues.map((issue, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-xl sm:text-2xl text-red-500 flex-shrink-0">⚠️</span>
                  <span className="text-sm sm:text-base md:text-lg text-red-900">{issue}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm sm:text-base md:text-lg text-red-900 font-semibold">We identify and fix these issues before filing, saving time and repeated rejections. Our enlisted lawyers and relationships with authorities help us avoid costly mistakes.</p>
          </div>

          <div className="mt-8 sm:mt-10 text-center">
            <a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-white rounded-lg sm:rounded-xl font-bold transition text-sm sm:text-base bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 hover:shadow-lg transform hover:scale-105">
              <RiWhatsappFill className="text-xl sm:text-2xl" /> Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Legal Advantage */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-[#53785b] font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-white px-3 sm:px-4">LEGAL ADVANTAGE</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#53785b]/30 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3" style={{ color: designTokens.colors.sage[900] }}>Backed by Legal Expertise, Not Just Agents</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#53785b] to-[#2c4d3f] mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-xs sm:text-sm md:text-base max-w-3xl mx-auto px-2" style={{ color: designTokens.colors.sage[600] }}>
              Many KMC licence matters require legal documentation beyond basic forms. Our work is supported by a strong local legal network.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-8 sm:mb-10 md:mb-12">
            {service.legalAdvantage.map((item, index) => (
              <div key={index} className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-[#e8f0eb] hover:shadow-xl transition-all flex items-center gap-3 sm:gap-4">
                <FaShieldAlt className="text-3xl sm:text-4xl md:text-5xl text-emerald-600 flex-shrink-0" />
                <p className="text-sm sm:text-base md:text-lg font-semibold" style={{ color: designTokens.colors.sage[900] }}>{item}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-base sm:text-lg md:text-xl font-bold" style={{ color: designTokens.colors.sage[900] }}>Your licence application is handled as a complete legal-compliance file, not a standalone form.</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-3 sm:px-4 md:px-6 bg-[#d6fadc]">
        <div className="max-w-5xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-[#53785b] font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-[#d6fadc] px-3 sm:px-4">OUR PROCESS</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#53785b]/30 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-[#2c4d3f] leading-tight">
              How We Handle Licence Matters
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#53785b] to-[#2c4d3f] mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-[#53785b] px-2">No confusion. No unnecessary back-and-forth. We guide you along the way.</p>
          </div>

          {/* 2x2 Grid from Mobile */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {service.process.map((item, index) => (
              <div key={index} className="relative rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 bg-white border-2 border-[#e8f0eb] hover:shadow-xl hover:-translate-y-2 transition-all">
                <div className="absolute top-0 left-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-br-xl sm:rounded-br-2xl flex items-center justify-center">
                  <span className="text-white text-lg sm:text-xl md:text-2xl font-bold">{item.step}</span>
                </div>
                <div className="pl-4 sm:pl-5 md:pl-6 pt-3 sm:pt-4">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 text-[#2c4d3f]">{item.title}</h3>
                  <p className="text-sm sm:text-base text-[#53785b] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-3 sm:px-4 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-[#53785b] font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-white px-3 sm:px-4">WHY CHOOSE US</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#53785b]/30 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3" style={{ color: designTokens.colors.sage[900] }}>A Practical, Accountable Approach</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#53785b] to-[#2c4d3f] mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-[#53785b] px-2">What sets us apart:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
            {service.whyChoose.map((reason, index) => (
              <div key={index} className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 bg-gradient-to-br from-white to-emerald-50/20 border-2 border-[#e8f0eb] hover:shadow-xl hover:-translate-y-2 transition-all flex items-center gap-3">
                <FaCheckCircle className="text-2xl sm:text-3xl text-emerald-600 flex-shrink-0" />
                <p className="text-sm sm:text-base font-semibold" style={{ color: designTokens.colors.sage[900] }}>{reason}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-base sm:text-lg md:text-xl font-bold" style={{ color: designTokens.colors.sage[900] }}>We focus on doing it right, not just doing it fast.</p>
          </div>

          <div className="mt-8 sm:mt-10 text-center">
            <a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-white rounded-lg sm:rounded-xl font-bold transition text-sm sm:text-base bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 hover:shadow-lg transform hover:scale-105">
              <RiWhatsappFill className="text-xl sm:text-2xl" /> Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 text-white bg-gradient-to-br from-[#1a2d23] via-[#2c4d3f] to-[#1f3a2f]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Make Your Business Official.</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 text-emerald-100">Don't risk a municipal raid or a shut-down notice. Let us handle the paperwork so you can focus on growing your business. Get Free initial consultation and quotes.</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link 
              to="/contact" 
              className="px-8 sm:px-10 py-4 rounded-xl font-bold text-base sm:text-lg transition-all transform hover:shadow-emerald-500/50 hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white inline-flex items-center justify-center"
            >
              Start Your Case Now!
            </Link>
            <a 
              href="tel:+916291139691" 
              className="px-8 sm:px-10 py-4 border-2 border-emerald-400 rounded-xl font-bold text-base sm:text-lg transition-all transform hover:bg-emerald-500/20 hover:shadow-lg hover:-translate-y-1 text-white inline-flex items-center justify-center gap-3"
            >
              <MdPhone className="text-2xl" /> Call +91-6291-139-691
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Licenses;
