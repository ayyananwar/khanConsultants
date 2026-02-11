import { Link } from 'react-router-dom';
import { designTokens } from '../../tokens';
import { RiBuilding2Fill, RiWhatsappFill } from 'react-icons/ri';
import { FaFileAlt, FaGavel, FaHome, FaBalanceScale, FaCheckCircle, FaUserTie } from 'react-icons/fa';
import { IoMdDocument } from 'react-icons/io';

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

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&h=600&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2d23]/92 via-[#2c4d3f]/85 to-[#1f3a2f]/90" />
        <div className="relative max-w-6xl mx-auto px-3 sm:px-4 md:px-6 text-white text-center">
          <p className="text-[10px] sm:text-xs md:text-sm tracking-widest font-bold mb-2 sm:mb-3 md:mb-4 uppercase text-emerald-300">KMC Services</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4 md:mb-5 lg:mb-6">{service.heroTitle}</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-4 md:mb-5 max-w-3xl mx-auto leading-relaxed text-white/90">{service.heroDescription}</p>
          <p className="text-xs sm:text-sm md:text-base mb-6 sm:mb-8 md:mb-10 text-emerald-200">{service.heroSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center">
            <a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 md:px-7 lg:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base text-white rounded-lg sm:rounded-xl font-bold transition bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 hover:shadow-lg hover:shadow-emerald-500/50 transform hover:scale-105">
              <RiWhatsappFill className="text-xl" /> WhatsApp Us
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center px-5 sm:px-6 md:px-7 lg:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base border-2 border-white text-white rounded-lg sm:rounded-xl font-bold hover:bg-white/15 hover:border-emerald-300 transition">
              Start Your Case Now!
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6" style={{ backgroundColor: designTokens.colors.neutral.white }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-5 md:mb-6" style={{ color: designTokens.colors.sage[900] }}>We get it. Property Issues With KMC Can Get Complicated — Fast</h2>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4" style={{ color: designTokens.colors.sage[600] }}>
            Property-related matters in Kolkata often involve multiple departments, old records, unclear ownership, and outdated documentation.
          </p>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4" style={{ color: designTokens.colors.sage[600] }}>
            People usually come to us when:
          </p>
          <ul className="space-y-2 mb-4 sm:mb-6">
            {['Their mutation is stuck', 'Property tax disputes keep repeating', 'Ownership records don\'t match', 'Tenancy or Thika issues block transactions', 'KMC hearings are confusing or intimidating'].map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-xs sm:text-sm md:text-base" style={{ color: designTokens.colors.sage[700] }}>
                <span className="flex-shrink-0 font-bold" style={{ color: designTokens.colors.sage[600] }}>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed" style={{ color: designTokens.colors.sage[600] }}>
            At Khan Consultants, we help you navigate Kolkata Municipal Corporation property matters swiftly, with administrative handling and legal support where required.
          </p>
        </div>
      </section>

      {/* High-Demand Services */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6" style={{ backgroundColor: designTokens.colors.sage[50] }}>
        <div className="max-w-6xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-[#53785b] font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-[#f0f4f1] px-3 sm:px-4">HIGH-DEMAND SERVICES</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#53785b]/30 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3" style={{ color: designTokens.colors.sage[900] }}>The Big Issues</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#53785b] to-[#2c4d3f] mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
          </div>

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {service.highDemandServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 bg-white border border-[#e8f0eb] hover:shadow-lg transition">
                  <div className="flex items-start gap-4 sm:gap-5 md:gap-6 mb-5 sm:mb-6 md:mb-8">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: designTokens.colors.sage[100] }}>
                      <IconComponent className="text-3xl sm:text-4xl" style={{ color: designTokens.colors.sage[600] }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4" style={{ color: designTokens.colors.sage[900] }}>{service.title}</h3>
                      <p className="text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: designTokens.colors.sage[600] }}>{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-7 mb-5 sm:mb-6">
                    <ul className="space-y-3 sm:space-y-4">
                      {service.services.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <FaCheckCircle className="text-xl sm:text-2xl text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base md:text-lg" style={{ color: designTokens.colors.sage[700] }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Link to="/contact" className="inline-block px-6 sm:px-8 py-3 sm:py-4 text-white rounded-lg sm:rounded-xl font-bold transition text-sm sm:text-base text-center" style={{ backgroundColor: designTokens.colors.sage[600] }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = designTokens.colors.sage[700]} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = designTokens.colors.sage[600]}>
                      {service.cta}
                    </Link>
                    <a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-white rounded-lg sm:rounded-xl font-bold transition text-sm sm:text-base bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500">
                      <RiWhatsappFill className="text-xl" /> WhatsApp Us
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialized Property Matters */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-3 sm:px-4 md:px-6" style={{ background: 'linear-gradient(135deg, #fef2f2, #fff7ed)' }}>
        <div className="max-w-5xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-red-700 font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-transparent px-3 sm:px-4">SPECIALIZED SERVICES</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-red-400/50 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-red-900 leading-tight">Specialized Property Matters</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
            {service.specializedServices.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 bg-white border-2 border-red-300 hover:border-red-500 hover:shadow-xl transition-all">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-4 sm:mb-5 md:mb-6">
                    <IconComponent className="text-3xl sm:text-4xl text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-red-900">{item.title}</h3>
                  <p className="text-sm sm:text-base md:text-lg text-red-800 mb-4 sm:mb-5">{item.description}</p>
                  
                  {item.services && item.services.length > 0 && (
                    <ul className="space-y-2 sm:space-y-3">
                      {item.services.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="flex-shrink-0 font-bold text-red-600">•</span>
                          <span className="text-xs sm:text-sm md:text-base text-red-900">{service}</span>
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
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-[#53785b] font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-white px-3 sm:px-4">LEGAL PROPERTY SUPPORT</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#53785b]/30 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3" style={{ color: designTokens.colors.sage[900] }}>Legal Due Diligence (BLRO & Registration)</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#53785b] to-[#2c4d3f] mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-xs sm:text-sm md:text-base max-w-3xl mx-auto px-2" style={{ color: designTokens.colors.sage[600] }}>
              Beyond KMC, we handle the legal side of property ownership. For such cases, we work closely with experienced local lawyers to ensure correct handling.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {service.legalPropertySupport.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 bg-gradient-to-br from-white to-emerald-50/20 border-2 border-[#e8f0eb] hover:shadow-xl hover:-translate-y-2 transition-all text-center">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <IconComponent className="text-4xl sm:text-5xl text-emerald-600" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2" style={{ color: designTokens.colors.sage[900] }}>{item.title}</h3>
                  <p className="text-xs sm:text-sm" style={{ color: designTokens.colors.sage[600] }}>{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12 text-center">
            <a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-white rounded-lg sm:rounded-xl font-bold transition text-sm sm:text-base bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 hover:shadow-lg transform hover:scale-105">
              <RiWhatsappFill className="text-xl sm:text-2xl" /> WhatsApp Us
            </a>
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
              How We Handle Property Matters
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#53785b] to-[#2c4d3f] mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
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

      {/* Why Choose Khan Consultants */}
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
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3" style={{ color: designTokens.colors.sage[900] }}>We Go to the Hearings for You.</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#53785b] to-[#2c4d3f] mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-xs sm:text-sm md:text-base max-w-3xl mx-auto px-2" style={{ color: designTokens.colors.sage[600] }}>
              Most agents just submit forms and leave. But Property Tax and Mutation often require attending official "Hearings" with KMC officers to argue your case. Since we have a legal team, we personally attend these hearings to represent you. We ensure your files don't get stuck in the pile.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {service.whyChoose.map((reason, index) => (
              <div key={index} className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 bg-gradient-to-br from-white to-emerald-50/20 border-2 border-[#e8f0eb] hover:shadow-xl hover:-translate-y-2 transition-all flex items-center gap-3">
                <FaCheckCircle className="text-2xl sm:text-3xl text-emerald-600 flex-shrink-0" />
                <p className="text-sm sm:text-base font-semibold" style={{ color: designTokens.colors.sage[900] }}>{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 text-white bg-gradient-to-br from-[#1a2d23] via-[#2c4d3f] to-[#1f3a2f]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Ready to Resolve Your Property Issues?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 text-emerald-100">If you're facing any property-related issue in Kolkata — mutation, tax, tenancy, or documentation — get in touch with us for an initial review. We'll assess your case and guide you on the right process and next steps.</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <a 
              href="https://wa.me/916291139691"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 sm:px-10 py-4 rounded-xl font-bold text-base sm:text-lg transition-all transform hover:shadow-emerald-500/50 hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white inline-flex items-center justify-center gap-3"
            >
              <RiWhatsappFill className="text-2xl" /> WhatsApp Us
            </a>
            <Link 
              to="/contact" 
              className="px-8 sm:px-10 py-4 border-2 border-emerald-400 rounded-xl font-bold text-base sm:text-lg transition-all transform hover:bg-emerald-500/20 hover:shadow-lg hover:-translate-y-1 text-white inline-flex items-center justify-center"
            >
              Start Your Case Now!
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Property;
