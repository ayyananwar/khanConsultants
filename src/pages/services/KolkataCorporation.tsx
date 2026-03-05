import { Link } from 'react-router-dom';
import { designTokens } from '../../tokens';
import { MdPhone, MdSearch, MdDescription, MdUploadFile, MdTaskAlt } from 'react-icons/md';
import { IoMdPeople } from 'react-icons/io';
import { FaShieldAlt, FaBullseye, FaBalanceScale, FaBolt, FaCheckCircle } from 'react-icons/fa';
import { RiBuilding2Fill, RiBriefcaseFill } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { HiDocumentCheck, HiClock, HiShieldCheck, HiUserGroup } from 'react-icons/hi2';
import { openServiceEnquiry } from '../../lib/serviceEnquiryLauncher';

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
        className="relative bg-cover bg-center min-h-[calc(100svh-64px)] sm:min-h-[500px] md:min-h-[580px] lg:min-h-[calc(100svh-72px)] flex flex-col overflow-x-clip"
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75"></div>
        <div className="relative flex-1 flex flex-col justify-center max-w-3xl lg:max-w-6xl xl:max-w-7xl mx-auto w-full px-5 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 text-white">
          <div className="text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] sm:text-xs md:text-sm mb-5 sm:mb-6 bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full text-[10px] sm:text-xs font-bold bg-amber-500 text-white">&#9733;</span>
              <span className="font-semibold">Licensed KMC Consultant</span>
            </div>

            <h1 className="text-[1.6rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.18] mb-4 sm:mb-5">{service.heroTitle}</h1>
            <p className="text-sm sm:text-base md:text-lg text-white/85 max-w-xl mx-auto leading-relaxed mb-3 sm:mb-4">{service.heroDescription}</p>
            <p className="text-xs sm:text-sm md:text-base text-white/70 mb-6 sm:mb-8">{service.heroSubtitle}</p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <button
                type="button"
                onClick={() => openServiceEnquiry({ serviceType: 'kmc' })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white min-h-[48px] btn-primary-sage shadow-lg hover:shadow-xl transition-all"
              >
                Get in Touch <span>&rarr;</span>
              </button>
              <a
                href="https://wa.me/916291139691"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 sm:py-4 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white text-sm sm:text-base font-bold min-h-[48px] transition-all"
              >
                <BsWhatsapp className="text-lg text-[var(--color-25d366)]" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8" style={{ backgroundColor: designTokens.colors.neutral.white }}>
        <div className="max-w-6xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 items-start">
            {/* Left Column — Text */}
            <div className="mb-8 lg:mb-0">
              <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--color-3d6b56)] font-bold mb-2 sm:mb-3 uppercase">About KMC Services</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight" style={{ color: 'var(--color-111827)' }}>
                Your Bridge to the<br className="hidden sm:block" />
                <span className="text-[var(--color-3d6b56)]">Kolkata Municipal Corporation</span>
              </h2>
              <div className="w-12 sm:w-16 h-1 bg-[var(--color-3d6b56)] rounded-full mb-4 sm:mb-6" />
              <div className="space-y-4 sm:space-y-5">
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--color-4b5563)' }}>
                  Dealing with KMC often involves complicated processes, endless queues, and complex documentation. Whether you are a citizen securing a birth certificate, a business owner needing a trade license, or a property owner resolving tax disputes, mistakes are costly.
                </p>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--color-4b5563)' }}>
                  At Khan Consultants, we combine administrative expertise with strong legal backing to ensure your files are processed correctly, legally, and efficiently.
                </p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-3 mt-6 sm:mt-8">
                {[
                  { value: '25+', label: 'Years KMC Licensed' },
                  { value: '1,000+', label: 'Cases Handled' },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl p-3.5 sm:p-4 bg-gray-50 border border-gray-100">
                    <div className="text-xl sm:text-2xl font-bold text-[var(--color-3d6b56)] leading-none">{s.value}</div>
                    <div className="text-[11px] sm:text-xs text-gray-500 font-medium mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column — Feature highlight cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                { icon: HiDocumentCheck, color: 'text-blue-500', bg: 'bg-blue-50', title: 'Correct Documentation', desc: 'We ensure every application is filed with the right documents from the start.' },
                { icon: HiShieldCheck, color: 'text-emerald-600', bg: 'bg-emerald-50', title: 'Legal Backing', desc: 'In-house lawyers handle affidavits, court orders, and magistrate permissions.' },
                { icon: HiClock, color: 'text-amber-500', bg: 'bg-amber-50', title: 'Faster Processing', desc: 'Skip the trial-and-error. We know the correct process for each KMC department.' },
                { icon: HiUserGroup, color: 'text-violet-500', bg: 'bg-violet-50', title: 'Dedicated Handling', desc: 'One team handles your case end-to-end — no passing between agents.' },
              ].map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="group rounded-xl p-4 sm:p-5 bg-gray-50 border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all">
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg ${f.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`${f.color} text-xl sm:text-2xl`} />
                    </div>
                    <h4 className="font-bold text-gray-900 text-[13px] sm:text-sm md:text-base leading-snug mb-1.5">{f.title}</h4>
                    <p className="text-gray-500 text-[11px] sm:text-xs md:text-sm leading-relaxed">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section — Dark */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-5 sm:px-6 bg-[var(--color-3d6b56)] relative overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/[0.07] rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-amber-400/[0.05] rounded-full -ml-56 -mb-56 blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-14">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-emerald-300 font-bold mb-2 sm:mb-3 uppercase">Services Under KMC</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Our <span className="text-amber-300">Core Services</span>
            </h2>
            <p className="text-white/90 text-sm sm:text-base max-w-xl mx-auto">
              Our KMC services are broadly divided into three key areas.
            </p>
          </div>

          {/* Service cards — stacked on mobile, side-by-side on lg */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {service.coreServices.map((item, index) => {
              const IconComponent = item.icon;
              const accentColors = ['from-blue-400 to-cyan-400', 'from-amber-400 to-orange-400', 'from-violet-400 to-purple-400'];
              const iconBgs = ['bg-blue-400/25', 'bg-amber-400/25', 'bg-violet-400/25'];
              const iconTexts = ['text-blue-400', 'text-amber-400', 'text-violet-400'];
              const isReversed = index % 2 !== 0;

              return (
                <div key={index} className="group">
                  {/* Mobile layout — always vertical */}
                  <div className="lg:hidden">
                    {/* Accent bar + number */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`h-0.5 w-8 rounded-full bg-gradient-to-r ${accentColors[index]}`} />
                      <span className="text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase">Service 0{index + 1}</span>
                    </div>

                    {/* Card */}
                    <div className="rounded-xl bg-white/[0.15] backdrop-blur-sm border border-white/[0.15] p-5 sm:p-6">
                      {/* Icon + Title */}
                      <div className="flex items-center gap-3.5 mb-4">
                        <div className={`w-11 h-11 rounded-lg ${iconBgs[index]} flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className={`${iconTexts[index]} text-xl`} />
                        </div>
                        <h3 className="font-bold text-white text-base sm:text-lg leading-snug">{item.title}</h3>
                      </div>

                      {/* Description */}
                      <p className="text-white/90 text-sm sm:text-sm leading-relaxed mb-4">{item.description}</p>

                      {/* Features — clean list */}
                      <ul className="space-y-2.5 mb-5">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-300 mt-1.5 flex-shrink-0" />
                            <span className="text-white">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <Link to={item.buttonLink} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.15] border border-white/[0.15] text-amber-300 hover:bg-white/[0.2] text-sm font-semibold transition-all">
                        {item.buttonText} <span>&rarr;</span>
                      </Link>
                    </div>
                  </div>

                  {/* Desktop layout — alternating text/visual sides */}
                  <div className={`hidden lg:grid lg:grid-cols-5 lg:gap-8 items-center ${isReversed ? '' : ''}`}>
                    {/* Text side */}
                    <div className={`col-span-3 ${isReversed ? 'order-2' : ''}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-xl ${iconBgs[index]} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`${iconTexts[index]} text-2xl`} />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase block">Service 0{index + 1}</span>
                          <h3 className="font-bold text-white text-xl leading-snug">{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-white/90 text-sm leading-relaxed mb-5 max-w-lg">{item.description}</p>

                      {/* Features — 2-col grid on desktop */}
                      <div className="grid grid-cols-2 gap-x-5 gap-y-3 mb-6">
                        {item.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-sm leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-300 mt-1.5 flex-shrink-0" />
                            <span className="text-white">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link to={item.buttonLink} className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.15] border border-white/[0.15] text-amber-300 hover:bg-white/[0.2] hover:border-white/20 text-sm font-semibold transition-all">
                        {item.buttonText}
                        <span className="group-hover/btn:translate-x-0.5 transition-transform">&rarr;</span>
                      </Link>
                    </div>

                    {/* Visual side — large glass number card */}
                    <div className={`col-span-2 ${isReversed ? 'order-1' : ''}`}>
                      <div className="relative rounded-2xl bg-white/[0.08] border border-white/[0.08] p-8 flex flex-col items-center justify-center text-center min-h-[220px] group-hover:bg-white/[0.12] transition-all duration-300">
                        <span className={`text-7xl font-black bg-gradient-to-br ${accentColors[index]} bg-clip-text text-transparent leading-none mb-3 select-none`}>0{index + 1}</span>
                        <div className={`w-10 h-0.5 rounded-full bg-gradient-to-r ${accentColors[index]} mb-3`} />
                        <p className="text-white/80 text-xs font-medium tracking-wide uppercase">{item.title.split(' ')[0]} Services</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Legal Advantage Section — Light */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--color-3d6b56)] font-bold mb-2 sm:mb-3 uppercase">Our USP</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              More Than Just Filing&#8202;&#8212;&#8202;<br className="hidden sm:block" />
              <span className="text-[var(--color-3d6b56)]">We Handle the Legal Hurdles</span>
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-[var(--color-3d6b56)] mx-auto rounded-full mb-3 sm:mb-4" />
            <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              KMC processes often get stuck due to missing "legal links." Unlike standard agents, Khan Consultants is backed by a robust team of lawyers.
            </p>
          </div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {service.legalAdvantage.map((item, index) => (
              <div 
                key={index} 
                className="group flex items-start gap-3 sm:gap-4 rounded-xl p-4 sm:p-5 bg-gray-50 border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[var(--color-3d6b56)]/10 flex items-center justify-center">
                  <FaCheckCircle className="text-[var(--color-3d6b56)] text-lg sm:text-xl" />
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-sm sm:text-base font-semibold leading-relaxed text-gray-900">{item}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 sm:mt-8 text-center text-sm sm:text-base text-gray-600">
            This ensures your matter is not handled in isolation, but as part of a <span className="font-semibold text-gray-900">complete solution</span>.
          </p>
        </div>
      </section>

      {/* Process Section — Light */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--color-3d6b56)] font-bold mb-2 sm:mb-3 uppercase">Our Process</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              How We Work
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-[var(--color-3d6b56)] mx-auto rounded-full" />
            <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto mt-3 sm:mt-4 leading-relaxed">
              Our approach is simple, transparent, and structured.
            </p>
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
                    {index < service.process.length - 1 && (
                      <div className="w-0.5 h-6 bg-gray-200 mt-1.5" />
                    )}
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
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-px" />

            <div className="space-y-0">
              {service.process.map((item, index) => {
                const IconComponent = processVisuals[index].icon;
                const stepColor = processVisuals[index].color;
                const isEven = index % 2 === 0;
                return (
                  <div key={item.step} className="relative flex items-center mb-10 last:mb-0">
                    {/* Left content */}
                    <div className={`w-[calc(50%-2.5rem)] ${isEven ? '' : 'order-3'}`}>
                      {isEven && (
                        <div className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-all mr-4">
                          <span className="text-[10px] font-bold text-gray-400 tracking-wider">STEP 0{item.step}</span>
                          <h3 className="text-lg font-bold text-gray-900 mt-0.5 mb-1">{item.title}</h3>
                          <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                        </div>
                      )}
                    </div>

                    {/* Center icon */}
                    <div className="relative z-10 flex-shrink-0 order-2">
                      <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full ${stepColor} flex items-center justify-center shadow-lg ring-4 ring-gray-50`}>
                        <IconComponent className="text-white text-lg lg:text-xl" />
                      </div>
                    </div>

                    {/* Right content */}
                    <div className={`w-[calc(50%-2.5rem)] ${isEven ? 'order-3' : ''}`}>
                      {!isEven && (
                        <div className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-all ml-4">
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
        </div>
      </section>

      {/* Why Choose Section — Dark */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-5 sm:px-6 bg-[var(--color-3d6b56)] relative overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-400/[0.06] rounded-full -mt-48 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[28rem] h-[28rem] bg-amber-400/[0.04] rounded-full -mb-56 blur-3xl" />

        <div className="relative max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-12">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-emerald-300 font-bold mb-2 sm:mb-3 uppercase">Why Choose Us</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Why <span className="text-amber-300">Work With Us</span>
            </h2>
            <p className="text-white/90 text-sm sm:text-base max-w-lg mx-auto">
              What sets us apart from other consultants.
            </p>
          </div>

          {/* 2x2 Grid — glass cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4">
            {service.whyChoose.map((reason, index) => {
              const IconComponent = reason.icon;
              const iconBgs = ['bg-blue-400/25', 'bg-violet-400/25', 'bg-amber-400/25', 'bg-cyan-400/25'];
              const iconColors = ['text-blue-400', 'text-violet-400', 'text-amber-400', 'text-cyan-400'];
              return (
                <div
                  key={index}
                  className="group rounded-xl p-5 sm:p-5 bg-white/[0.15] backdrop-blur-sm border border-white/[0.15] shadow-lg shadow-black/10 hover:bg-white/[0.22] hover:border-white/25 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-start gap-4 sm:gap-4"
                >
                  <div className={`w-11 h-11 sm:w-11 sm:h-11 rounded-lg ${iconBgs[index]} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`${iconColors[index]} text-xl sm:text-2xl`} />
                  </div>
                  <p className="text-white group-hover:text-white text-sm sm:text-base font-medium leading-relaxed transition-colors pt-1.5">{reason.text}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 sm:mt-12 max-w-3xl mx-auto text-center space-y-3 sm:space-y-3">
            <p className="text-white/90 text-sm sm:text-base">Ethical, compliant, and documentation-first approach</p>
            <p className="text-white text-base sm:text-lg md:text-xl font-bold">We don't promise shortcuts. We promise correct handling, clarity, and accountability.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-gray-50 py-10 sm:py-14 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--color-3d6b56)] font-bold mb-2 sm:mb-3 uppercase">Get Started</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            Ready to Get Started?
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-[var(--color-3d6b56)] mx-auto rounded-full mb-3 sm:mb-4" />
          <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            If you need assistance with any KMC-related matter, get in touch for an initial review. We'll assess your situation and advise the right process, required documents, and realistic next steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              type="button"
              onClick={() => openServiceEnquiry({ serviceType: 'kmc' })}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-7 sm:px-8 py-3.5 sm:py-4 btn-primary-sage text-white text-sm sm:text-base font-bold shadow-lg hover:shadow-xl transition-all min-h-[48px]"
            >
              Get in Touch <span>&rarr;</span>
            </button>
            <a 
              href="tel:+916291139691" 
              className="inline-flex items-center justify-center gap-3 rounded-xl px-7 sm:px-8 py-3.5 sm:py-4 bg-white border border-gray-200 text-gray-900 text-sm sm:text-base font-bold hover:shadow-lg hover:border-gray-300 transition-all min-h-[48px]"
            >
              <MdPhone className="text-xl text-[var(--color-3d6b56)]" /> Call +91-6291-139-691
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KolkataCorporation;
