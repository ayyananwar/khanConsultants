import { RiBuilding2Fill, RiWhatsappFill } from 'react-icons/ri';
import { FaFileAlt, FaGavel, FaHome, FaBalanceScale, FaCheckCircle, FaUserTie } from 'react-icons/fa';
import { IoMdDocument } from 'react-icons/io';
import { MdSearch, MdDescription, MdUploadFile, MdTaskAlt } from 'react-icons/md';
import { openServiceEnquiry } from '../../lib/serviceEnquiryLauncher';

const Property = () => {
  const service = {
    title: 'Property Matters in Kolkata',
    heroTitle: 'Property Matters in Kolkata – KMC, Mutation, Tax & Tenancy Support',
    heroDescription: 'From property mutation and tax issues to tenancy and Thika matters — we help property owners resolve municipal and legal issues with clarity and proper documentation.',
    heroSubtitle: 'Handled locally. Done correctly. No unnecessary delays.',
    
    highDemandServices: [
      {
        icon: FaFileAlt,
        title: 'Mutation (Name Change)',
        description: 'Mutation is mandatory if you have bought a flat, inherited a house, or received property through a gift deed. Without a Mutation Certificate in your name, you cannot pay property tax or sell the property legally.',
        services: [
          'Separation: We help separate your portion of the tax bill from a joint property',
          'Amalgamation: Joining two plots or flats into one record',
          'Succession: Adding legal heirs\' names after the death of the original owner'
        ],
        cta: 'Request Quote for Mutation'
      },
      {
        icon: FaGavel,
        title: 'Property Tax & Assessment',
        description: 'Received a shockingly high Property Tax bill from KMC? Or maybe a "Notice of Hearing"? Do not ignore it.',
        services: [
          'We represent you at the KMC Hearing Department',
          'We check the "Person Liable to Pay" (PLP) details',
          'We fight to get your Annual Valuation (AV) reduced legally so your quarterly tax becomes affordable'
        ],
        cta: 'Start Your Case Now!'
      }
    ],
    
    specializedServices: [
      {
        icon: FaHome,
        title: 'Thika Tenancy Solutions',
        description: 'Thika property laws in Kolkata are very different from normal land laws. Many owners don\'t realize their land is under "Thika" until they try to build or sell.',
        services: [
          'Thika Return Filing',
          'Permissions from the Thika Controller',
          'Legalizing structures on Thika land'
        ]
      },
      {
        icon: RiBuilding2Fill,
        title: 'Building Plans & Sanctions',
        description: 'Assistance with getting building plans sanctioned (approved) by the KMC Building Department for new constructions or additional floors.',
        services: []
      }
    ],
    
    legalPropertySupport: [
      {
        icon: IoMdDocument,
        title: 'Sale Deeds and Gift Deeds',
        description: 'Helping with registration at the Registry office'
      },
      {
        icon: FaBalanceScale,
        title: 'HIBA Mutation',
        description: 'Gift as per Shariah Law'
      },
      {
        icon: FaFileAlt,
        title: 'BLRO Mutation',
        description: 'Updating records at the Land Reforms office (essential for land/plots)'
      },
      {
        icon: FaUserTie,
        title: 'Searching',
        description: 'Checking the history of a property to ensure it has no legal cases before you buy it'
      }
    ],
    
    process: [
      {
        step: 1,
        title: 'Initial Review',
        description: 'We understand your issue and review existing property documents.'
      },
      {
        step: 2,
        title: 'Documentation & Preparation',
        description: 'We prepare applications, affidavits, and supporting records.'
      },
      {
        step: 3,
        title: 'Filing & Coordination',
        description: 'We assist with submissions and follow-ups with KMC and related authorities.'
      },
      {
        step: 4,
        title: 'Resolution',
        description: 'We track progress and keep you informed till completion. Clear steps. No confusion.'
      }
    ],
    
    whyChoose: [
      'We personally attend official "Hearings" with KMC officers to represent you',
      'Legal team backing for complex property matters',
      'No hidden bribes',
      'Clear explanation of the fees',
      'Regular updates on your file movement',
      'We focus on correct records today to avoid problems tomorrow'
    ]
  };

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
            <a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 sm:py-4 text-sm sm:text-base font-bold transition-all transform hover:shadow-xl hover:-translate-y-1 text-white min-h-[48px] btn-primary-sage shadow-lg">
              <RiWhatsappFill className="text-xl" /> WhatsApp Us
            </a>
            <button type="button" onClick={() => openServiceEnquiry({ serviceType: 'kmc' })} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 sm:py-4 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white text-sm sm:text-base font-bold transition-all transform hover:shadow-xl hover:-translate-y-1 min-h-[48px]">
              Start Your Case Now!
            </button>
          </div>

          {/* Compact Stats Strip */}
          <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-lg sm:max-w-2xl mx-auto w-full mt-8 sm:mt-10">
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
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-14">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--color-3d6b56)] font-bold mb-2 sm:mb-3 uppercase">PROPERTY MATTERS</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-gray-900">Property Issues With KMC Can Get Complicated — Fast</h2>
            <div className="w-12 sm:w-16 h-1 bg-[var(--color-3d6b56)] mx-auto rounded-full mb-4 sm:mb-6" />
            <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">Property-related matters in Kolkata often involve multiple departments, old records, unclear ownership, and outdated documentation.</p>
          </div>

          {/* Pain Point Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-10 md:mb-12">
            {[
              { icon: FaFileAlt, label: 'Mutation Stuck', desc: 'Name change applications blocked due to incomplete records or missing heirs', color: 'bg-amber-50 border-amber-200', iconBg: 'bg-amber-100', iconColor: 'text-amber-600' },
              { icon: FaGavel, label: 'Tax Disputes', desc: 'Property tax disputes keep repeating with inflated Annual Valuation bills', color: 'bg-rose-50 border-rose-200', iconBg: 'bg-rose-100', iconColor: 'text-rose-600' },
              { icon: IoMdDocument, label: 'Ownership Mismatch', desc: 'Records don\'t match across KMC, registry, and revenue departments', color: 'bg-orange-50 border-orange-200', iconBg: 'bg-orange-100', iconColor: 'text-orange-600' },
              { icon: FaHome, label: 'Thika / Tenancy Issues', desc: 'Tenancy or Thika complications blocking your property transactions', color: 'bg-violet-50 border-violet-200', iconBg: 'bg-violet-100', iconColor: 'text-violet-600' },
              { icon: FaBalanceScale, label: 'KMC Hearings', desc: 'Official hearings that feel confusing, intimidating, or poorly handled', color: 'bg-blue-50 border-blue-200', iconBg: 'bg-blue-100', iconColor: 'text-blue-600' },
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
              <FaCheckCircle className="text-xl sm:text-2xl text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1.5">We Navigate It All For You</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                At Khan Consultants, we help you navigate KMC property matters swiftly — with <span className="font-semibold text-gray-900">administrative handling and legal support</span> where required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* High-Demand Services */}
      <section className="relative overflow-hidden py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 bg-[var(--color-3d6b56)]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-400/[0.07] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-400/[0.05] rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-emerald-300 font-bold mb-2 sm:mb-3 uppercase">HIGH-DEMAND SERVICES</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-white">The <span className="text-amber-300">Big</span> Issues We Solve</h2>
            <div className="w-12 sm:w-16 h-1 bg-emerald-400 mx-auto rounded-full mb-3 sm:mb-5" />
            <p className="text-white/80 text-xs sm:text-sm md:text-base max-w-xl mx-auto">The most critical property matters in Kolkata — and where we make the biggest difference.</p>
          </div>

          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {service.highDemandServices.map((svc, index) => {
              const IconComponent = svc.icon;
              const iconStyles = [
                { bg: 'bg-blue-400/25', color: 'text-blue-400', accent: 'border-blue-400/30' },
                { bg: 'bg-amber-400/25', color: 'text-amber-400', accent: 'border-amber-400/30' }
              ];
              const style = iconStyles[index % iconStyles.length];
              return (
                <div key={index} className={`group rounded-xl p-4 sm:p-5 md:p-6 lg:p-7 bg-white/[0.08] border ${style.accent} hover:bg-white/[0.14] hover:border-white/25 transition-all duration-300`}>
                  {/* Top row: icon + title + description */}
                  <div className="flex gap-3 sm:gap-4 mb-3.5 sm:mb-5">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${style.bg} flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={`text-lg sm:text-2xl ${style.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-snug mb-1 sm:mb-1.5">{svc.title}</h3>
                      <p className="text-xs sm:text-sm text-white/70 leading-relaxed line-clamp-3 sm:line-clamp-none">{svc.description}</p>
                    </div>
                  </div>
                  
                  {/* Service checklist — compact on mobile */}
                  <div className="rounded-lg bg-white/[0.06] border border-white/[0.08] p-3 sm:p-4 mb-3.5 sm:mb-5">
                    <p className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-emerald-300/80 mb-2 sm:mb-2.5">What we handle</p>
                    <div className="space-y-1.5 sm:space-y-2.5">
                      {svc.services.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <FaCheckCircle className="text-xs sm:text-sm text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="text-[11px] sm:text-xs md:text-sm text-white/85 leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTAs — full width stacked on mobile */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <button type="button" onClick={() => openServiceEnquiry({ serviceType: 'kmc' })} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm bg-amber-400 hover:bg-amber-300 text-[var(--color-1f3a30)] transition-all min-h-[40px] sm:min-h-[44px]">
                      {svc.cta} <span>→</span>
                    </button>
                    <a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm bg-white/[0.08] hover:bg-white/[0.15] border border-white/10 text-white transition-all min-h-[40px] sm:min-h-[44px]">
                      <RiWhatsappFill className="text-base text-[var(--color-25d366)]" /> WhatsApp
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialized Property Matters */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--color-3d6b56)] font-bold mb-2 sm:mb-3 uppercase">SPECIALIZED SERVICES</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-gray-900 leading-tight">Specialized Property Matters</h2>
            <div className="w-12 sm:w-16 h-1 bg-[var(--color-3d6b56)] mx-auto rounded-full mb-4 sm:mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
            {service.specializedServices.map((item, index) => {
              const IconComponent = item.icon;
              const specializedIconBg = ['bg-violet-100', 'bg-cyan-100'];
              const specializedIconColor = ['text-violet-600', 'text-cyan-600'];
              return (
                <div key={index} className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 bg-white border border-gray-100 hover:shadow-lg transition-all">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${specializedIconBg[index % specializedIconBg.length]} flex items-center justify-center mb-4 sm:mb-5`}>
                    <IconComponent className={`text-2xl sm:text-3xl ${specializedIconColor[index % specializedIconColor.length]}`} />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 leading-relaxed">{item.description}</p>
                  
                  {item.services && item.services.length > 0 && (
                    <ul className="space-y-2 sm:space-y-2.5">
                      {item.services.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <FaCheckCircle className="text-base sm:text-lg text-[var(--color-3d6b56)] flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm md:text-base text-gray-700">{service}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Legal Property Support */}
      <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 px-5 sm:px-6 bg-[var(--color-3d6b56)]">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-emerald-400/[0.07] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-amber-400/[0.05] rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-emerald-300 font-bold mb-2 sm:mb-3 uppercase">LEGAL PROPERTY SUPPORT</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-white">Legal Due Diligence <span className="text-amber-300">(BLRO & Registration)</span></h2>
            <div className="w-12 sm:w-16 h-1 bg-emerald-400 mx-auto rounded-full mb-4 sm:mb-6" />
            <p className="text-sm sm:text-base max-w-3xl mx-auto text-white/90">
              Beyond KMC, we handle the legal side of property ownership. For such cases, we work closely with experienced local lawyers to ensure correct handling.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {service.legalPropertySupport.map((item, index) => {
              const IconComponent = item.icon;
              const legalIconBg = ['bg-indigo-400/25', 'bg-emerald-400/25', 'bg-amber-400/25', 'bg-rose-400/25'];
              const legalIconColor = ['text-indigo-400', 'text-emerald-400', 'text-amber-400', 'text-rose-400'];
              return (
                <div key={index} className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 bg-white/[0.15] backdrop-blur-sm border border-white/[0.15] shadow-lg shadow-black/10 hover:bg-white/[0.22] hover:border-white/25 hover:shadow-xl hover:-translate-y-1 transition-all text-center">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${legalIconBg[index % legalIconBg.length]} flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                    <IconComponent className={`text-2xl sm:text-3xl ${legalIconColor[index % legalIconColor.length]}`} />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-white/80">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12 text-center">
            <a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold transition text-sm sm:text-base bg-white text-[var(--color-2c4d3f)] border border-white/80 hover:bg-emerald-50 hover:shadow-lg transform hover:scale-[1.02]">
              <RiWhatsappFill className="text-xl sm:text-2xl" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Process Section — matches Home ProcessTimeline (white bg) */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--color-3d6b56)] font-bold mb-2 sm:mb-3 uppercase">Our Process</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">How We Handle Property Matters</h2>
            <div className="w-12 sm:w-16 h-1 bg-[var(--color-3d6b56)] mx-auto rounded-full" />
            <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto mt-3 sm:mt-4 leading-relaxed">A proven four-step approach to resolving your property issues.</p>
          </div>

          {/* Mobile: Clean vertical steps */}
          <div className="md:hidden space-y-3">
            {service.process.map((item, index) => {
              const IconComponent = processVisuals[index].icon;
              const stepColor = processVisuals[index].color;
              return (
                <div key={item.step} className="flex items-start gap-3.5">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full ${stepColor} flex items-center justify-center shadow-md`}>
                      <IconComponent className="text-white text-base" />
                    </div>
                    {index < service.process.length - 1 && <div className="w-0.5 h-6 bg-gray-200 mt-1.5" />}
                  </div>
                  <div className="pt-1.5 pb-2">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-bold text-gray-400 tracking-wider">STEP 0{item.step}</span>
                    </div>
                    <h3 className="text-[15px] font-bold text-gray-900 mb-0.5">{item.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop: Alternating timeline */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-px" />
            <div className="space-y-0">
              {service.process.map((item, index) => {
                const IconComponent = processVisuals[index].icon;
                const stepColor = processVisuals[index].color;
                const isEven = index % 2 === 0;
                return (
                  <div key={item.step} className="relative flex items-center mb-10 last:mb-0">
                    <div className={`w-[calc(50%-2.5rem)] ${isEven ? '' : 'order-3'}`}>
                      {isEven && (
                        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:shadow-md transition-all mr-4">
                          <span className="text-[10px] font-bold text-gray-400 tracking-wider">STEP 0{item.step}</span>
                          <h3 className="text-lg font-bold text-gray-900 mt-0.5 mb-1">{item.title}</h3>
                          <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                        </div>
                      )}
                    </div>
                    <div className="relative z-10 flex-shrink-0 order-2">
                      <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full ${stepColor} flex items-center justify-center shadow-lg ring-4 ring-white`}>
                        <IconComponent className="text-white text-lg lg:text-xl" />
                      </div>
                    </div>
                    <div className={`w-[calc(50%-2.5rem)] ${isEven ? 'order-3' : ''}`}>
                      {!isEven && (
                        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:shadow-md transition-all ml-4">
                          <span className="text-[10px] font-bold text-gray-400 tracking-wider">STEP 0{item.step}</span>
                          <h3 className="text-lg font-bold text-gray-900 mt-0.5 mb-1">{item.title}</h3>
                          <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8 sm:mt-10 md:mt-14">
            <button type="button" onClick={() => openServiceEnquiry({ serviceType: 'kmc' })} className="inline-flex items-center gap-2 rounded-xl px-7 sm:px-8 py-3.5 sm:py-4 btn-primary-sage text-white text-sm sm:text-base font-bold shadow-lg hover:shadow-xl transition-all min-h-[48px]">
              Start Your Case <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Khan Consultants — dark bg with glass cards (like Home About) */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-5 sm:px-6 bg-[var(--color-3d6b56)] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-400/[0.07] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-400/[0.05] rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-emerald-300 font-bold mb-2 sm:mb-3 uppercase">WHY CHOOSE US</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-white">We Go to the <span className="text-amber-300">Hearings</span> for You.</h2>
            <div className="w-12 sm:w-16 h-1 bg-emerald-400 mx-auto rounded-full mb-4 sm:mb-6" />
            <p className="text-white/90 text-sm sm:text-base max-w-3xl mx-auto">
              Most agents just submit forms and leave. But Property Tax and Mutation often require attending official "Hearings" with KMC officers to argue your case. Since we have a legal team, we personally attend these hearings to represent you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-4">
            {service.whyChoose.map((reason, index) => {
              const whyIcons = [FaBalanceScale, FaUserTie, FaCheckCircle, IoMdDocument, RiBuilding2Fill, FaFileAlt];
              const whyIconBg = ['bg-blue-400/25', 'bg-violet-400/25', 'bg-emerald-400/25', 'bg-amber-400/25', 'bg-cyan-400/25', 'bg-rose-400/25'];
              const whyIconColors = ['text-blue-400', 'text-violet-400', 'text-emerald-400', 'text-amber-400', 'text-cyan-400', 'text-rose-400'];
              const WhyIcon = whyIcons[index % whyIcons.length];
              return (
              <div key={index} className="group rounded-xl p-5 sm:p-5 bg-white/[0.15] backdrop-blur-sm border border-white/[0.15] shadow-lg shadow-black/10 hover:bg-white/[0.22] hover:border-white/25 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-start gap-3">
                <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg ${whyIconBg[index % whyIconBg.length]} flex items-center justify-center flex-shrink-0`}>
                  <WhyIcon className={`text-lg sm:text-xl ${whyIconColors[index % whyIconColors.length]}`} />
                </div>
                <p className="text-sm sm:text-base font-semibold text-white leading-snug">{reason}</p>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-50 py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--color-3d6b56)] font-bold mb-2 sm:mb-3 uppercase">GET STARTED</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 text-gray-900">Ready to Resolve Your Property Issues?</h2>
          <div className="w-12 sm:w-16 h-1 bg-[var(--color-3d6b56)] mx-auto rounded-full mb-4 sm:mb-6" />
          <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">If you're facing any property-related issue in Kolkata — mutation, tax, tenancy, or documentation — get in touch for an initial review. We'll assess your case and guide you on the right next steps.</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              href="https://wa.me/916291139691"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all transform hover:shadow-xl hover:-translate-y-1 btn-primary-sage text-white inline-flex items-center justify-center gap-3"
            >
              <RiWhatsappFill className="text-xl" /> WhatsApp Us
            </a>
            <button
              type="button"
              onClick={() => openServiceEnquiry({ serviceType: 'kmc' })}
              className="px-7 py-3.5 sm:py-4 border-2 border-gray-300 rounded-xl font-bold text-sm sm:text-base transition-all transform hover:bg-white hover:shadow-lg hover:-translate-y-1 text-gray-900 inline-flex items-center justify-center"
            >
              Start Your Case Now!
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Property;
