import { Link } from 'react-router-dom';
import { designTokens } from '../../tokens';
import { MdPhone, MdSearch, MdDescription, MdUploadFile, MdTaskAlt } from 'react-icons/md';
import { IoMdPeople } from 'react-icons/io';
import { FaShieldAlt, FaBullseye, FaBalanceScale, FaBolt, FaCheckCircle } from 'react-icons/fa';
import { RiBuilding2Fill, RiBriefcaseFill } from 'react-icons/ri';

const KolkataCorporation = () => {
  const service = {
    title: 'KMC Services',
    heroTitle: 'KMC Services – End-to-End Municipal Support in Kolkata',
    heroDescription: 'From birth & death certificates to trade licences and property or tenancy matters — we handle the bureaucracy so you don\'t have to.',
    heroSubtitle: 'Supported by a dedicated legal team for affidavits & court orders.',
    
    coreServices: [
      {
        icon: IoMdPeople,
        title: 'Birth & Death Certificates',
        description: 'We assist with more than just new registrations. We specialize in the difficult cases that others reject.',
        features: [
          'New Birth/Death Registrations',
          'Corrections: Spelling errors and name changes',
          'Delayed Registration: Handling cases older than 1 year (Magistrate permissions)',
          'Digitization: Converting old manual certificates to digital online records'
        ],
        buttonText: 'View Certificate Services',
        buttonLink: '/services/certificates'
      },
      {
        icon: RiBriefcaseFill,
        title: 'Trade & Commercial Licenses',
        description: 'Start your business on the right foot with full KMC compliance.',
        features: [
          'New Certificate of Enlistment (Trade License)',
          'License Renewals & Amalgamation',
          'Food License (FSSAI) & Pharmacy License',
          'Shop & Establishment Acts'
        ],
        buttonText: 'Learn More',
        buttonLink: '/services/licenses'
      },
      {
        icon: RiBuilding2Fill,
        title: 'Assessment, Mutation & Thika Tenancy',
        description: 'Protect your most valuable assets with correct records. We handle complex land and tax matters directly with the KMC assessment department.',
        features: [
          'Mutation: Separation and apportionment of property',
          'Assessment: Resolving property tax disputes and hearing attendance',
          'Thika Tenancy: Expert handling of Thika Controller permissions and returns'
        ],
        buttonText: 'Learn More',
        buttonLink: '/services/property'
      }
    ],
    
    process: [
      {
        step: 1,
        title: 'Initial Assessment',
        description: 'We understand your issue, review available documents, and identify the correct KMC process.'
      },
      {
        step: 2,
        title: 'Document Preparation',
        description: 'We help compile, correct, or arrange all required documents — including affidavits, supporting records, and applications.'
      },
      {
        step: 3,
        title: 'Filing & Follow-Ups',
        description: 'We handle submissions, coordination, and follow-ups with the relevant KMC departments.'
      },
      {
        step: 4,
        title: 'Resolution & Closure',
        description: 'We track the matter until completion and keep you informed at every stage. No guesswork. No unnecessary delays.'
      }
    ],
    
    legalAdvantage: [
      'First Class Magistrate Affidavits',
      'Executive Magistrate Orders',
      'Notarized Declarations',
      'Indemnity Bonds'
    ],
    
    whyChoose: [
      { icon: FaShieldAlt, text: 'Strong on-ground experience with KMC procedures' },
      { icon: FaBullseye, text: 'Dedicated handling — not passed between agents' },
      { icon: FaBalanceScale, text: 'Access to a reliable group of local lawyers' },
      { icon: FaBolt, text: 'Clear communication and realistic timelines' }
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
        className="relative bg-cover bg-center min-h-[calc(100svh-64px)] sm:min-h-[500px] md:min-h-[580px] lg:min-h-[calc(100svh-72px)] flex flex-col"
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        <div className="relative flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full px-3 sm:px-4 md:px-6 py-2.5 sm:py-8 md:py-10 lg:py-8 text-white">
          <div className="flex flex-col justify-center max-w-4xl mx-auto w-full text-center">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 md:gap-3 rounded-full px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-[10px] sm:text-xs md:text-sm lg:text-sm mb-3 sm:mb-5 md:mb-6 lg:mb-5 mx-auto bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full text-xs sm:text-sm md:text-base font-bold bg-amber-500 text-white">★</span>
              <span className="font-semibold text-white">Licensed KMC Consultant</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-[1.15] mt-1 mb-4 sm:mb-7 md:mb-8 lg:mb-5 xl:mb-6">{service.heroTitle}</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-lg mb-3 sm:mb-4 md:mb-5 max-w-3xl mx-auto leading-relaxed text-white/90 px-1">{service.heroDescription}</p>
            <p className="text-xs sm:text-sm md:text-base mb-4 sm:mb-6 md:mb-8 lg:mb-6 xl:mb-7 text-white/80">{service.heroSubtitle}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 md:gap-5 justify-center items-center w-full mt-4 sm:mt-8 md:mt-9 lg:mt-6 pb-safe">
            <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 text-sm sm:text-base md:text-lg font-bold transition-all transform hover:shadow-xl hover:-translate-y-1 text-white min-h-[48px] btn-primary-sage shadow-lg">
              Get in Touch
            </Link>
            <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white text-sm sm:text-base md:text-lg font-bold transition-all transform hover:shadow-xl hover:-translate-y-1 min-h-[48px]">
              Book Initial Review
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8" style={{ backgroundColor: designTokens.colors.neutral.white }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-7 md:mb-8 leading-snug" style={{ color: 'var(--color-111827)' }}>Your Bridge to the Kolkata Municipal Corporation</h2>
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: 'var(--color-4b5563)' }}>
              Dealing with KMC often involves complicated processes, endless queues, and complex documentation. Whether you are a citizen securing a birth certificate, a business owner needing a trade license, or a property owner resolving tax disputes, mistakes are costly.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: 'var(--color-4b5563)' }}>
              At Khan Consultants, we combine administrative expertise with strong legal backing to ensure your files are processed correctly, legally, and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-10 sm:py-14 md:py-18 lg:py-24 px-4 sm:px-6 md:px-8 bg-[var(--color-3d6b56)]">
        <div className="max-w-7xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            <div className="inline-block">
              <p className="text-[11px] sm:text-xs md:text-sm tracking-[0.3em] text-amber-300 font-bold mb-3 sm:mb-4 uppercase relative">
                <span className="relative z-10 bg-[var(--color-3d6b56)] px-3 sm:px-4">SERVICES UNDER KMC</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-5 text-white leading-snug">Our Core Services</h2>
            <div className="w-12 sm:w-16 md:w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2 text-white/85 leading-relaxed">
              Our KMC services are broadly divided into three key areas:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
            {service.coreServices.map((item, index) => {
              const IconComponent = item.icon;
              const iconGradients = ['from-blue-500 to-cyan-500', 'from-amber-500 to-orange-500', 'from-violet-500 to-purple-500'];
              return (
                <div key={index} className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 hover:shadow-2xl hover:-translate-y-1 transition-all bg-white/10 backdrop-blur-sm border border-white/15 hover:border-white/35">
                  <div className="flex items-center gap-3 mb-4 sm:mb-5">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${iconGradients[index % iconGradients.length]} flex items-center justify-center shadow-lg`}>
                      <IconComponent className="text-2xl sm:text-3xl md:text-4xl text-white" />
                    </div>
                    <span className="text-[10px] sm:text-xs tracking-[0.14em] uppercase text-white/60 font-semibold">Service {String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-white leading-tight">{item.title}</h3>
                  <p className="text-sm sm:text-base mb-4 sm:mb-5 text-white/90 leading-relaxed">{item.description}</p>
                  <ul className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6 md:mb-7">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-white/85 leading-relaxed">
                        <span className="flex-shrink-0 font-bold text-amber-300 mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={item.buttonLink} className="inline-flex items-center justify-center w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 text-white rounded-lg sm:rounded-xl font-semibold transition text-xs sm:text-sm bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 hover:shadow-lg">
                    {item.buttonText}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Legal Advantage Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-20 xl:py-24 px-3 sm:px-4 md:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-gray-500 font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-white px-3 sm:px-4">OUR USP</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-gray-900 leading-tight">More Than Just Filing—We Handle the Legal Hurdles</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-gray-300 to-gray-500 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-3xl mx-auto px-2">KMC processes often get stuck due to missing "legal links." Unlike standard agents, Khan Consultants is backed by a robust team of lawyers. We handle the drafting and execution of all necessary legal supports in-house:</p>
          </div>

          {/* Legal Advantage Cards - 2x2 Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {service.legalAdvantage.map((item, index) => (
              <div 
                key={index} 
                className="group relative rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 bg-white border-2 border-gray-200 hover:border-[var(--color-517358)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 opacity-10 group-hover:opacity-20 transition-all">
                  <div className="absolute top-0 right-0 w-full h-full bg-[var(--color-2c4d3f)] transform rotate-45 translate-x-8 -translate-y-8"></div>
                </div>
                
                {/* Icon Badge */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-[var(--color-517358)] to-[var(--color-2c4d3f)] flex items-center justify-center text-white text-xl sm:text-2xl shadow-lg">
                    <FaCheckCircle />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm sm:text-base md:text-lg font-semibold leading-relaxed text-gray-900">{item}</p>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-517358)] to-[var(--color-2c4d3f)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12 text-center">
            <p className="text-sm sm:text-base md:text-lg text-gray-900 font-semibold">This ensures your matter is not handled in isolation, but as part of a complete solution.</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-20 xl:py-24 px-3 sm:px-4 md:px-6 bg-[var(--color-3d6b56)]">
        <div className="max-w-5xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-amber-300 font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-[var(--color-3d6b56)] px-3 sm:px-4">OUR PROCESS</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-white leading-tight">
              How We Work
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-white/80 px-2">Our approach is simple, transparent, and structured:</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-300 via-white/40 to-amber-300 hidden md:block -translate-x-px"></div>
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-300 via-white/40 to-amber-300 md:hidden"></div>

            <div className="space-y-6 sm:space-y-8 md:space-y-0">
              {service.process.map((item, index) => {
                const IconComponent = processVisuals[index].icon;
                const stepColor = processVisuals[index].color;
                const isEven = index % 2 === 0;

                return (
                  <div key={item.step} className="relative md:flex md:items-center md:mb-12 last:md:mb-0">
                    <div className="md:hidden flex gap-3 sm:gap-4 items-start">
                      <div className="relative z-10 flex-shrink-0">
                        <div className={`w-10 h-10 rounded-full ${stepColor} flex items-center justify-center shadow-lg ring-4 ring-[var(--color-3d6b56)]`}>
                          <IconComponent className="text-white text-base" />
                        </div>
                      </div>
                      <div className="flex-1 bg-white/95 rounded-xl p-3.5 sm:p-4 border border-white/30 hover:shadow-md transition-all">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase bg-[var(--color-3d6b56)] text-white px-2 py-0.5 rounded-full">Step 0{item.step}</span>
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    <div className="hidden md:flex md:w-full md:items-center">
                      <div className={`w-[calc(50%-2rem)] ${isEven ? '' : 'order-3'}`}>
                        <div className={`bg-white/95 rounded-2xl p-5 lg:p-6 border border-white/30 hover:shadow-lg transition-all duration-300 ${isEven ? 'mr-4 text-right' : 'ml-4'}`}>
                          <div className={`flex items-center gap-2 mb-1.5 ${isEven ? 'justify-end' : ''}`}>
                            <span className="text-xs font-bold tracking-wider uppercase bg-[var(--color-3d6b56)] text-white px-2.5 py-0.5 rounded-full">Step 0{item.step}</span>
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

                      <div className={`w-[calc(50%-2rem)] ${isEven ? 'order-3' : ''}`}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-20 xl:py-24 px-3 sm:px-4 md:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-gray-500 font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-gray-50 px-3 sm:px-4">WHY CHOOSE US</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-gray-900 leading-tight px-2">Why Work With Us</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-gray-300 to-gray-500 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 px-2">What sets us apart:</p>
          </div>

          {/* 2x2 Grid from Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {service.whyChoose.map((reason, index) => {
              const IconComponent = reason.icon;
              const iconColors = ['var(--color-2563eb)', 'var(--color-7c3aed)', 'var(--color-d97706)', 'var(--color-0891b2)'];
              return (
                <div
                  key={index}
                  className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 bg-gradient-to-br from-white to-emerald-50/30 border-2 border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all flex flex-col gap-3 sm:gap-4"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl text-white shadow-lg" style={{ backgroundColor: iconColors[index] }}>
                    <IconComponent className="text-2xl sm:text-3xl md:text-4xl" />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-900 font-semibold leading-relaxed">{reason.text}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
            <p className="text-sm sm:text-base md:text-lg text-gray-900 font-semibold">Ethical, compliant, and documentation-first approach</p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900 font-bold">We don't promise shortcuts. We promise correct handling, clarity, and accountability.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 text-gray-900 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Ready to Get Started?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 text-gray-600">If you need assistance with any KMC-related matter, get in touch with us for an initial review. We'll assess your situation and advise the right process, required documents, and realistic next steps.</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link 
              to="/contact" 
              className="px-8 sm:px-10 py-4 rounded-xl font-bold text-base sm:text-lg transition-all transform hover:shadow-xl hover:-translate-y-1 btn-primary-sage text-white inline-flex items-center justify-center gap-3"
            >
              Get in Touch
            </Link>
            <a 
              href="tel:+916291139691" 
              className="px-8 sm:px-10 py-4 border-2 border-gray-300 rounded-xl font-bold text-base sm:text-lg transition-all transform hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1 text-gray-900 inline-flex items-center justify-center gap-3"
            >
              <MdPhone className="text-2xl text-[var(--color-3d6b56)]" /> Call +91-6291-139-691
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KolkataCorporation;
