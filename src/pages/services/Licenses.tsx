import { MdPhone, MdLocationOff, MdDescription, MdSearch, MdUploadFile, MdTaskAlt } from 'react-icons/md';
import { RiBriefcaseFill, RiWhatsappFill } from 'react-icons/ri';
import { FaCheckCircle, FaShieldAlt, FaFileAlt, FaBalanceScale } from 'react-icons/fa';
import { IoMdDocument } from 'react-icons/io';
import { openServiceEnquiry } from '../../lib/serviceEnquiryLauncher';

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
        className="relative bg-cover bg-center min-h-[calc(100svh-64px)] sm:min-h-[500px] md:min-h-[580px] lg:min-h-[calc(100svh-72px)] flex flex-col overflow-x-clip"
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75"></div>
        <div className="relative flex-1 flex flex-col justify-center max-w-3xl lg:max-w-6xl xl:max-w-7xl mx-auto w-full px-5 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 text-white text-center">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs md:text-sm mb-5 sm:mb-6 mx-auto bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full text-xs sm:text-sm font-bold bg-amber-500 text-white">★</span>
            <span className="font-semibold text-white">Licensed KMC Consultant</span>
          </div>
          <h1 className="text-[1.6rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.18] mb-4 sm:mb-5">{service.heroTitle}</h1>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/90 max-w-xl mx-auto mb-3 sm:mb-4">{service.heroDescription}</p>
          <p className="text-xs sm:text-sm md:text-base mb-5 sm:mb-6 text-white/80">{service.heroSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full mt-2">
            <button type="button" onClick={() => openServiceEnquiry({ serviceType: 'fssai' })} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 sm:py-4 text-sm sm:text-base font-bold transition-all transform hover:shadow-xl hover:-translate-y-1 text-white min-h-[48px] btn-primary-sage shadow-lg">
              Get Quote
            </button>
            <button type="button" onClick={() => openServiceEnquiry({ serviceType: 'fssai' })} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 sm:py-4 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white text-sm sm:text-base font-bold transition-all transform hover:shadow-xl hover:-translate-y-1 min-h-[48px]">
              Book Initial Review
            </button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-14">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--color-3d6b56)] font-bold mb-2 sm:mb-3 uppercase">BUSINESS COMPLIANCE</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-gray-900">Business Compliance Starts With the Right Licence</h2>
            <div className="w-12 sm:w-16 h-1 bg-[var(--color-3d6b56)] mx-auto rounded-full mb-4 sm:mb-6" />
            <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">Operating within KMC limits requires proper licensing and timely renewals. We make it simple.</p>
          </div>

          {/* Risk Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-10 md:mb-12">
            {[
              { icon: MdDescription, label: 'Penalties', desc: 'Incorrect trade classification or missed renewals lead to fines', color: 'bg-amber-50 border-amber-200', iconBg: 'bg-amber-100', iconColor: 'text-amber-600' },
              { icon: MdLocationOff, label: 'Closure Notices', desc: 'Operating without valid licence risks municipal shut-down orders', color: 'bg-rose-50 border-rose-200', iconBg: 'bg-rose-100', iconColor: 'text-rose-600' },
              { icon: FaFileAlt, label: 'Rejected Applications', desc: 'Incomplete documentation causes repeated rejections and delays', color: 'bg-orange-50 border-orange-200', iconBg: 'bg-orange-100', iconColor: 'text-orange-600' },
            ].map((risk, i) => (
              <div key={i} className={`rounded-xl p-4 sm:p-5 border ${risk.color} transition-all hover:shadow-md`}>
                <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg ${risk.iconBg} flex items-center justify-center mb-3`}>
                  <risk.icon className={`text-lg sm:text-xl ${risk.iconColor}`} />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">{risk.label}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{risk.desc}</p>
              </div>
            ))}
          </div>

          {/* Solution Card */}
          <div className="bg-[var(--color-3d6b56)]/[0.06] border border-[var(--color-3d6b56)]/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-5 md:gap-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[var(--color-3d6b56)] flex items-center justify-center flex-shrink-0">
              <FaShieldAlt className="text-xl sm:text-2xl text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1.5">We Handle It End-to-End</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                At Khan Consultants, we assist business owners, professionals, and commercial establishments with accurate KMC licensing — ensuring your business is <span className="font-semibold text-gray-900">compliant, defensible, and future-ready</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* License Services */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 px-5 sm:px-6 bg-[var(--color-3d6b56)]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-400/[0.07] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-400/[0.05] rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-emerald-300 font-bold mb-2 sm:mb-3 uppercase">LICENSING SERVICES</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-white">Our Comprehensive <span className="text-amber-300">Licensing</span> Services</h2>
            <div className="w-12 sm:w-16 h-1 bg-emerald-400 mx-auto rounded-full mb-4 sm:mb-6" />
            <p className="text-sm sm:text-base max-w-3xl mx-auto text-white/90">
              We assist with a wide range of trade and commercial licences issued or linked to the Kolkata Municipal Corporation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
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
              <div key={index} className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 bg-white border border-gray-200 hover:shadow-lg transition">
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${iconColor.bg}`}>
                    <ServiceIcon className={`text-xl sm:text-2xl ${iconColor.text}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] sm:text-xs font-bold tracking-wider text-[var(--color-3d6b56)] uppercase mb-1">Service 0{index + 1}</p>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1.5" style={{ color: 'var(--color-111827)' }}>{license.title}</h3>
                    <p className="text-xs sm:text-sm" style={{ color: 'var(--color-4b5563)' }}>{license.description}</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg sm:rounded-xl p-3.5 sm:p-4 md:p-5">
                  <p className="text-sm sm:text-base font-semibold mb-2.5 sm:mb-3" style={{ color: 'var(--color-111827)' }}>We assist with:</p>
                  <ul className="space-y-2 sm:space-y-2.5">
                    {license.services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <FaCheckCircle className={`text-base sm:text-lg ${checklistColors[index % checklistColors.length]} flex-shrink-0 mt-0.5`} />
                        <span className="text-xs sm:text-sm md:text-[15px]" style={{ color: 'var(--color-374151)' }}>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )})}
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12 text-center">
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 text-white/90" >
              We provide complete guidance & coordination with allied departments where applicable to guide you through licensing procedures across various business avenues.
            </p>
            <button type="button" onClick={() => openServiceEnquiry({ serviceType: 'fssai' })} className="inline-block px-6 sm:px-8 py-3 sm:py-4 text-white rounded-lg sm:rounded-xl font-bold transition text-sm sm:text-base bg-gray-900 hover:bg-gray-800">
              Get Quote
            </button>
          </div>
        </div>
      </section>

      {/* Compliance Ecosystem */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--color-3d6b56)] font-bold mb-2 sm:mb-3 uppercase">COMPLIANCE ECOSYSTEM</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-gray-900 leading-tight">The &ldquo;Hidden&rdquo; Requirements</h2>
            <div className="w-12 sm:w-16 h-1 bg-[var(--color-3d6b56)] mx-auto rounded-full mb-4 sm:mb-6" />
            <p className="text-gray-500 text-sm sm:text-base max-w-3xl mx-auto">A Trade License does not exist in isolation. KMC authorities often cross-verify other statutory documents before issuance. We ensure your entire compliance ecosystem is healthy so your license isn't blocked.</p>
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
                <div key={index} className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 bg-white border border-gray-100 hover:shadow-lg transition-all">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br ${complianceIconStyles[index % complianceIconStyles.length]} flex items-center justify-center mb-4 sm:mb-5`}>
                    <IconComponent className="text-2xl sm:text-3xl text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-amber-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 border border-amber-200">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 text-amber-900">Common Issues We Prevent:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {service.commonIssues.map((issue, index) => {
                const IssueIcon = issueVisuals[index % issueVisuals.length].icon;
                const iconColor = issueVisuals[index % issueVisuals.length].color;
                return (
                  <div key={issue} className="rounded-lg sm:rounded-xl border border-amber-200 bg-white p-3.5 sm:p-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${iconColor} flex items-center justify-center text-white flex-shrink-0`}>
                        <IssueIcon className="text-lg" />
                      </div>
                      <p className="text-sm sm:text-base md:text-lg text-amber-900 font-semibold leading-relaxed">{issue}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-sm sm:text-base md:text-lg text-amber-900 font-semibold">We identify and fix these issues before filing, saving time and repeated rejections. Our enlisted lawyers and relationships with authorities help us avoid costly mistakes.</p>
          </div>

          <div className="mt-8 sm:mt-10 text-center">
            <a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-white rounded-lg sm:rounded-xl font-bold transition text-sm sm:text-base bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 hover:shadow-lg transform hover:scale-105">
              <RiWhatsappFill className="text-xl sm:text-2xl" /> Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Legal Advantage */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-5 sm:px-6 bg-[var(--color-3d6b56)]">
        <div className="max-w-5xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-amber-300 font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-[var(--color-3d6b56)] px-3 sm:px-4">LEGAL ADVANTAGE</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-white">Backed by Legal Expertise, Not Just Agents</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-xs sm:text-sm md:text-base max-w-3xl mx-auto px-2 text-white/90">
              Many KMC licence matters require legal documentation beyond basic forms. Our work is supported by a strong local legal network.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-8 sm:mb-10 md:mb-12">
            {service.legalAdvantage.map((item, index) => {
              const legalIcons = [IoMdDocument, FaCheckCircle, FaBalanceScale, RiBriefcaseFill];
              const legalColors = ['text-blue-400', 'text-emerald-400', 'text-amber-400', 'text-violet-400'];
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
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 px-5 sm:px-6 bg-[var(--color-3d6b56)]">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-400/[0.07] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-amber-400/[0.05] rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-emerald-300 font-bold mb-2 sm:mb-3 uppercase">OUR PROCESS</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-white">How We Handle <span className="text-amber-300">Licence</span> Matters</h2>
            <div className="w-12 sm:w-16 h-1 bg-emerald-400 mx-auto rounded-full mb-4 sm:mb-6" />
            <p className="text-sm sm:text-base text-white/90">No confusion. No unnecessary back-and-forth. We guide you along the way.</p>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-3">
            {service.process.map((item, index) => {
              const IconComponent = processVisuals[index].icon;
              const stepColor = processVisuals[index].color;
              return (
                <div key={item.step} className="flex gap-3 items-start">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full ${stepColor} flex items-center justify-center shadow-lg ring-4 ring-[var(--color-3d6b56)]`}>
                      <IconComponent className="text-white text-base" />
                    </div>
                    {index < service.process.length - 1 && <div className="w-0.5 h-6 bg-white/20 mt-1" />}
                  </div>
                  <div className="flex-1 bg-white/95 rounded-xl p-3.5 sm:p-4 border border-white/30">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-gray-400">Step 0{item.step}</span>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Alternating Timeline */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400/60 via-white/20 to-emerald-400/60 -translate-x-px" />
            <div className="space-y-0">
              {service.process.map((item, index) => {
                const IconComponent = processVisuals[index].icon;
                const stepColor = processVisuals[index].color;
                const isEven = index % 2 === 0;
                return (
                  <div key={item.step} className="relative flex items-center mb-12 last:mb-0">
                    <div className={`w-[calc(50%-2rem)] ${isEven ? '' : 'order-3'}`}>
                      <div className={`bg-white/95 rounded-xl p-5 lg:p-6 border border-white/30 hover:shadow-lg transition-all duration-300 ${isEven ? 'mr-4 text-right' : 'ml-4'}`}>
                        <div className={`flex items-center gap-2 mb-1.5 ${isEven ? 'justify-end' : ''}`}>
                          <span className="text-[10px] font-bold tracking-wider uppercase text-gray-400">Step 0{item.step}</span>
                        </div>
                        <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1.5">{item.title}</h3>
                        <p className="text-sm lg:text-base text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                    <div className="relative z-10 flex-shrink-0 order-2 mx-auto">
                      <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-full ${stepColor} flex items-center justify-center shadow-xl ring-4 ring-[var(--color-3d6b56)]`}>
                        <IconComponent className="text-white text-xl lg:text-2xl" />
                      </div>
                    </div>
                    <div className={`w-[calc(50%-2rem)] ${isEven ? 'order-3' : ''}`} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-5 sm:px-6 bg-[var(--color-3d6b56)]">
        <div className="max-w-5xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-amber-300 font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-[var(--color-3d6b56)] px-3 sm:px-4">WHY CHOOSE US</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-white">A Practical, Accountable Approach</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-white/90 px-2">What sets us apart:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
            {service.whyChoose.map((reason, index) => {
              const whyIcons = [RiBriefcaseFill, FaBalanceScale, FaShieldAlt, IoMdDocument, FaCheckCircle, MdPhone];
              const whyIconColors = ['text-blue-400', 'text-amber-400', 'text-violet-400', 'text-cyan-400', 'text-emerald-400', 'text-rose-400'];
              const WhyIcon = whyIcons[index % whyIcons.length];
              return (
              <div key={index} className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/35 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3">
                <WhyIcon className={`text-2xl sm:text-3xl ${whyIconColors[index % whyIconColors.length]} flex-shrink-0`} />
                <p className="text-sm sm:text-base font-semibold text-white">{reason}</p>
              </div>
            )})}
          </div>

          <div className="text-center">
            <p className="text-base sm:text-lg md:text-xl font-bold text-white">We focus on doing it right, not just doing it fast.</p>
          </div>

          <div className="mt-10 sm:mt-12 md:mt-14 text-center">
            <a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold transition text-sm sm:text-base bg-white text-[var(--color-2c4d3f)] border border-white/80 hover:bg-emerald-50 hover:shadow-lg transform hover:scale-[1.02]">
              <RiWhatsappFill className="text-xl sm:text-2xl" /> Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-50 py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--color-3d6b56)] font-bold mb-2 sm:mb-3 uppercase">GET STARTED</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 text-gray-900">Make Your Business Official.</h2>
          <div className="w-12 sm:w-16 h-1 bg-[var(--color-3d6b56)] mx-auto rounded-full mb-4 sm:mb-6" />
          <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">Don't risk a municipal raid or a shut-down notice. Let us handle the paperwork so you can focus on growing your business. Get Free initial consultation and quotes.</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              type="button"
              onClick={() => openServiceEnquiry({ serviceType: 'fssai' })}
              className="px-7 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all transform hover:shadow-xl hover:-translate-y-1 btn-primary-sage text-white inline-flex items-center justify-center"
            >
              Start Your Case Now!
            </button>
            <a 
              href="tel:+916291139691" 
              className="px-7 py-3.5 sm:py-4 border-2 border-gray-300 rounded-xl font-bold text-sm sm:text-base transition-all transform hover:bg-white hover:shadow-lg hover:-translate-y-1 text-gray-900 inline-flex items-center justify-center gap-3"
            >
              <MdPhone className="text-xl text-[var(--color-3d6b56)]" /> Call +91-6291-139-691
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Licenses;
