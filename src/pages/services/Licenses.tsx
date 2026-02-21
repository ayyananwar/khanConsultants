import { Link } from 'react-router-dom';
import { designTokens } from '../../tokens';
import { MdPhone, MdLocationOff, MdDescription, MdSearch, MdUploadFile, MdTaskAlt } from 'react-icons/md';
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

  const issueVisuals = [
    { icon: MdLocationOff, color: 'from-amber-500 to-orange-500' },
    { icon: MdDescription, color: 'from-rose-500 to-red-500' },
  ];

  const processVisuals = [
    { icon: MdSearch, color: 'bg-blue-500' },
    { icon: MdDescription, color: 'bg-emerald-500' },
    { icon: MdUploadFile, color: 'bg-violet-500' },
    { icon: MdTaskAlt, color: 'bg-amber-500' },
  ];

  return (
    <div className="bg-white service-page">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center min-h-[100svh] sm:min-h-[500px] md:min-h-[580px] lg:min-h-[650px] xl:min-h-[700px] flex flex-col"
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        <div className="relative flex-1 flex flex-col max-w-6xl mx-auto w-full px-3 sm:px-4 md:px-6 pt-20 sm:pt-24 md:pt-20 lg:pt-24 xl:pt-28 pb-6 sm:pb-10 md:pb-12 lg:pb-14 text-white">
          <div className="flex flex-col justify-center max-w-4xl mx-auto w-full text-center">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 md:gap-3 rounded-full px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-[10px] sm:text-xs md:text-sm lg:text-base mb-5 sm:mb-5 md:mb-6 lg:mb-8 mx-auto bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full text-xs sm:text-sm md:text-base font-bold bg-amber-500 text-white">★</span>
              <span className="font-semibold text-white">Licensed KMC Consultant</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.15] mt-5 mb-6 sm:mb-7 md:mb-8 lg:mb-9 xl:mb-10">{service.heroTitle}</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-4 md:mb-5 max-w-3xl mx-auto leading-relaxed text-white/90 px-1">{service.heroDescription}</p>
            <p className="text-xs sm:text-sm md:text-base mb-6 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 text-white/80">{service.heroSubtitle}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 md:gap-5 justify-center items-center w-full mt-6 sm:mt-8 md:mt-10 lg:mt-12 pb-safe">
            <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 text-sm sm:text-base md:text-lg font-bold transition-all transform hover:shadow-xl hover:-translate-y-1 text-white min-h-[48px] bg-[#3d6b56] hover:bg-[#2c4d3f] shadow-lg">
              Get Quote
            </Link>
            <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white text-sm sm:text-base md:text-lg font-bold transition-all transform hover:shadow-xl hover:-translate-y-1 min-h-[48px]">
              Book Initial Review
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6" style={{ backgroundColor: designTokens.colors.neutral.white }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-5 md:mb-6" style={{ color: '#111827' }}>Business Compliance Starts With the Right Licence</h2>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4" style={{ color: '#4b5563' }}>
            Operating a business within Kolkata Municipal Corporation limits requires proper licensing and timely renewals. Delays, incorrect trade classification, or incomplete documentation can lead to penalties, closure notices, or rejected applications.
          </p>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed" style={{ color: '#4b5563' }}>
            At Khan Consultants, we assist business owners, professionals, and commercial establishments with accurate KMC licensing, ensuring your business is compliant, defensible, and future-ready.
          </p>
        </div>
      </section>

      {/* License Services */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 bg-[#3d6b56]">
        <div className="max-w-6xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-amber-300 font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-[#3d6b56] px-3 sm:px-4">LICENSING SERVICES</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-white">Our Comprehensive Licencing Services</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-xs sm:text-sm md:text-base max-w-3xl mx-auto px-2 text-white/80">
              We assist with a wide range of trade and commercial licences issued or linked to the Kolkata Municipal Corporation.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            {service.licenseServices.map((license, index) => {
              const serviceIcons = [IoMdDocument, FaCheckCircle, FaBalanceScale];
              const serviceIconColors = [
                { bg: 'bg-blue-100', text: 'text-blue-700' },
                { bg: 'bg-violet-100', text: 'text-violet-700' },
                { bg: 'bg-amber-100', text: 'text-amber-700' }
              ];
              const checklistColors = ['text-cyan-700', 'text-fuchsia-700', 'text-orange-700'];
              const ServiceIcon = serviceIcons[index % serviceIcons.length];
              const iconColor = serviceIconColors[index % serviceIconColors.length];

              return (
              <div key={index} className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 bg-white border border-gray-200 hover:shadow-lg transition">
                <div className="flex items-start gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-5 md:mb-6">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center flex-shrink-0 ${iconColor.bg}`}>
                    <ServiceIcon className={`text-2xl sm:text-3xl ${iconColor.text}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3" style={{ color: '#111827' }}>{license.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4" style={{ color: '#4b5563' }}>{license.description}</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6">
                  <p className="text-sm sm:text-base font-semibold mb-3 sm:mb-4" style={{ color: '#111827' }}>We assist with:</p>
                  <ul className="space-y-2 sm:space-y-3">
                    {license.services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3">
                        <FaCheckCircle className={`text-lg sm:text-xl ${checklistColors[index % checklistColors.length]} flex-shrink-0 mt-0.5`} />
                        <span className="text-xs sm:text-sm md:text-base" style={{ color: '#374151' }}>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )})}
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12 text-center">
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6" style={{ color: '#4b5563' }}>
              We provide complete guidance & coordination with allied departments where applicable to guide you through licensing procedures across various business avenues.
            </p>
            <Link to="/contact" className="inline-block px-6 sm:px-8 py-3 sm:py-4 text-white rounded-lg sm:rounded-xl font-bold transition text-sm sm:text-base bg-gray-900 hover:bg-gray-800">
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Compliance Ecosystem */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-3 sm:px-4 md:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-gray-500 font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-white px-3 sm:px-4">COMPLIANCE ECOSYSTEM</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-gray-900 leading-tight">The "Hidden" Requirements</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-gray-300 to-gray-500 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-3xl mx-auto px-2">A Trade License does not exist in isolation. KMC authorities often cross-verify other statutory documents before issuance. We ensure your entire compliance ecosystem is healthy so your license isn't blocked.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
            {service.complianceEcosystem.map((item, index) => {
              const IconComponent = item.icon;
              const complianceIconStyles = [
                'from-blue-500 to-blue-600',
                'from-violet-500 to-violet-600',
                'from-amber-500 to-orange-600'
              ];
              return (
                <div key={index} className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 bg-white border-2 border-gray-200 hover:shadow-xl transition-all">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br ${complianceIconStyles[index % complianceIconStyles.length]} flex items-center justify-center mb-4 sm:mb-5`}>
                    <IconComponent className="text-2xl sm:text-3xl text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 border-2 border-red-300">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 text-red-900">Common Issues We Prevent:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {service.commonIssues.map((issue, index) => {
                const IssueIcon = issueVisuals[index % issueVisuals.length].icon;
                const iconColor = issueVisuals[index % issueVisuals.length].color;
                return (
                  <div key={issue} className="rounded-lg sm:rounded-xl border border-red-200 bg-red-50 p-3.5 sm:p-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${iconColor} flex items-center justify-center text-white flex-shrink-0`}>
                        <IssueIcon className="text-lg" />
                      </div>
                      <p className="text-sm sm:text-base md:text-lg text-red-900 font-semibold leading-relaxed">{issue}</p>
                    </div>
                  </div>
                );
              })}
            </div>
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
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 bg-[#3d6b56]">
        <div className="max-w-5xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-amber-300 font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-[#3d6b56] px-3 sm:px-4">LEGAL ADVANTAGE</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-white">Backed by Legal Expertise, Not Just Agents</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-xs sm:text-sm md:text-base max-w-3xl mx-auto px-2 text-white/80">
              Many KMC licence matters require legal documentation beyond basic forms. Our work is supported by a strong local legal network.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-8 sm:mb-10 md:mb-12">
            {service.legalAdvantage.map((item, index) => {
              const legalIcons = [IoMdDocument, FaCheckCircle, FaBalanceScale, RiBriefcaseFill];
              const legalColors = ['text-blue-300', 'text-emerald-300', 'text-amber-300', 'text-violet-300'];
              const LegalIcon = legalIcons[index % legalIcons.length];
              return (
              <div key={index} className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/35 hover:shadow-xl transition-all flex items-center gap-3 sm:gap-4">
                <LegalIcon className={`text-3xl sm:text-4xl md:text-5xl ${legalColors[index % legalColors.length]} flex-shrink-0`} />
                <p className="text-sm sm:text-base md:text-lg font-semibold text-white">{item}</p>
              </div>
            )})}
          </div>

          <div className="text-center">
            <p className="text-base sm:text-lg md:text-xl font-bold text-white">Your licence application is handled as a complete legal-compliance file, not a standalone form.</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-3 sm:px-4 md:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-gray-500 font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-white px-3 sm:px-4">OUR PROCESS</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-gray-900 leading-tight">
              How We Handle Licence Matters
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-gray-300 to-gray-500 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 px-2">No confusion. No unnecessary back-and-forth. We guide you along the way.</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3d6b56] via-gray-300 to-[#3d6b56] hidden md:block -translate-x-px"></div>
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3d6b56] via-gray-300 to-[#3d6b56] md:hidden"></div>

            <div className="space-y-6 sm:space-y-8 md:space-y-0">
              {service.process.map((item, index) => {
                const IconComponent = processVisuals[index].icon;
                const stepColor = processVisuals[index].color;
                const isEven = index % 2 === 0;

                return (
                  <div key={item.step} className="relative md:flex md:items-center md:mb-12 last:md:mb-0">
                    <div className="md:hidden flex gap-3 sm:gap-4 items-start">
                      <div className="relative z-10 flex-shrink-0">
                        <div className={`w-10 h-10 rounded-full ${stepColor} flex items-center justify-center shadow-lg ring-4 ring-white`}>
                          <IconComponent className="text-white text-base" />
                        </div>
                      </div>
                      <div className="flex-1 bg-gray-50 rounded-xl p-3.5 sm:p-4 border border-gray-100 hover:shadow-md transition-all">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase bg-[#3d6b56] text-white px-2 py-0.5 rounded-full">Step 0{item.step}</span>
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    <div className="hidden md:flex md:w-full md:items-center">
                      <div className={`w-[calc(50%-2rem)] ${isEven ? '' : 'order-3'}`}>
                        <div className={`bg-gray-50 rounded-2xl p-5 lg:p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 ${isEven ? 'mr-4 text-right' : 'ml-4'}`}>
                          <div className={`flex items-center gap-2 mb-1.5 ${isEven ? 'justify-end' : ''}`}>
                            <span className="text-xs font-bold tracking-wider uppercase bg-[#3d6b56] text-white px-2.5 py-0.5 rounded-full">Step 0{item.step}</span>
                          </div>
                          <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1.5">{item.title}</h3>
                          <p className="text-sm lg:text-base text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                      </div>

                      <div className="relative z-10 flex-shrink-0 order-2 mx-auto">
                        <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-full ${stepColor} flex items-center justify-center shadow-xl ring-4 ring-white`}>
                          <IconComponent className="text-white text-xl lg:text-2xl" />
                        </div>
                      </div>

                      <div className={`w-[calc(50%-2rem)] ${isEven ? 'order-3' : ''}`}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-3 sm:px-4 md:px-6 bg-[#3d6b56]">
        <div className="max-w-5xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-amber-300 font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-[#3d6b56] px-3 sm:px-4">WHY CHOOSE US</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-white">A Practical, Accountable Approach</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-white/80 px-2">What sets us apart:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
            {service.whyChoose.map((reason, index) => {
              const whyIcons = [RiBriefcaseFill, FaBalanceScale, FaShieldAlt, IoMdDocument, FaCheckCircle, MdPhone];
              const whyIconColors = ['text-blue-200', 'text-amber-200', 'text-violet-200', 'text-cyan-200', 'text-emerald-200', 'text-rose-200'];
              const WhyIcon = whyIcons[index % whyIcons.length];
              return (
              <div key={index} className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/35 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3">
                <WhyIcon className={`text-2xl sm:text-3xl ${whyIconColors[index % whyIconColors.length]} flex-shrink-0`} />
                <p className="text-sm sm:text-base font-semibold text-white/95">{reason}</p>
              </div>
            )})}
          </div>

          <div className="text-center">
            <p className="text-base sm:text-lg md:text-xl font-bold text-white">We focus on doing it right, not just doing it fast.</p>
          </div>

          <div className="mt-10 sm:mt-12 md:mt-14 text-center">
            <a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold transition text-sm sm:text-base bg-white text-[#2c4d3f] border border-white/80 hover:bg-emerald-50 hover:shadow-lg transform hover:scale-[1.02]">
              <RiWhatsappFill className="text-xl sm:text-2xl" /> Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 text-gray-900 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Make Your Business Official.</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 text-gray-600">Don't risk a municipal raid or a shut-down notice. Let us handle the paperwork so you can focus on growing your business. Get Free initial consultation and quotes.</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link 
              to="/contact" 
              className="px-8 sm:px-10 py-4 rounded-xl font-bold text-base sm:text-lg transition-all transform hover:shadow-xl hover:-translate-y-1 bg-[#3d6b56] hover:bg-[#2c4d3f] text-white inline-flex items-center justify-center"
            >
              Start Your Case Now!
            </Link>
            <a 
              href="tel:+916291139691" 
              className="px-8 sm:px-10 py-4 border-2 border-gray-300 rounded-xl font-bold text-base sm:text-lg transition-all transform hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1 text-gray-900 inline-flex items-center justify-center gap-3"
            >
              <MdPhone className="text-2xl text-[#3d6b56]" /> Call +91-6291-139-691
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Licenses;
