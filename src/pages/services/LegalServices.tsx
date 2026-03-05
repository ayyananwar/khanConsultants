import { FaBalanceScale, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';
import { MdPhone, MdWarningAmber, MdFindInPage, MdSyncProblem, MdMoneyOff, MdSearch, MdDescription, MdUploadFile, MdTaskAlt } from 'react-icons/md';
import { IoMdCheckmarkCircle, IoMdClose, IoMdPeople, IoMdGlobe, IoMdTrophy, IoMdSchool } from 'react-icons/io';
import { openServiceEnquiry } from '../../lib/serviceEnquiryLauncher';

const LegalServices = () => {
  const clientLogos = [
    { src: '/1.png', alt: 'Darlington Borough Council' },
    { src: '/2.png', alt: 'Legafit Immigration Experts UK' },
    { src: '/3.png', alt: "Kaspa's Desserts" },
    { src: '/4.png', alt: 'Beauty Haven' },
    { src: '/5.png', alt: 'Nazkhan Productions' },
    { src: '/6.png', alt: 'SME Champ' },
    { src: '/7.jpg', alt: 'The Forum Darlington' },
    { src: '/8.png', alt: 'Raptoro' },
    { src: '/9.png', alt: 'Baccanalia' },
    { src: '/10.png', alt: 'The Steam Machine Brewing Co.' },
  ];

  const service = {
    title: 'Trade Mark & Legal',
    heroDescription: 'Is your Business Name Legally Protected?',
    mainDescription: 'We ensure your brand is legally protected with a comprehensive trademark registration process. Secure Your Brand Before Someone Else Does.',
    process: [
      {
        step: 1,
        title: 'The Phonetic "Deep Scan"',
        description: 'We run a Phonetic Database Scan (not just Google) to catch hidden sound-alike conflicts that cause rejections 12 months later'
      },
      {
        step: 2,
        title: 'The Future-Proof Strategy',
        description: 'We select the correct "Legal Class" to ensure your protection covers your future products, not just what you sell today'
      },
      {
        step: 3,
        title: 'Your "TM" Protection',
        description: 'We draft the "User Affidavit" to prove ownership history. You get your TM App No. and can start using the ™ symbol immediately'
      },
      {
        step: 4,
        title: 'The Legal Defense Shield',
        description: 'If the Govt. raises an objection (60% probability), our legal team steps in to draft the technical defense and save your brand'
      }
    ],
    warning: 'WARNING: The "₹499 Filing" Trap',
    warningPoints: [
      'ZERO ADVICE: They don\'t want to know your objective or understand your business',
      'The "Blind" Filing: They don\'t check for phonetic conflicts (sound-alike names)',
      'The Rejection Loop: 60% of these cheap applications get objected to by the Govt',
      'The Hidden Cost: When the objection comes, they charge you double to fix it'
    ],
    packages: [
      {
        name: 'Basic',
        price: '₹7,999',
        features: ['Trademark application filing', 'Application number', 'One class']
      },
      {
        name: 'Standard',
        price: '₹14,499',
        features: ['Everything in Basic +', 'Comprehensive Brand Search', 'Objection support (if raised)', 'Application tracking', '1-on-1 CEO Briefing with CA'],
        popular: true
      },
      {
        name: 'Premium',
        price: '₹24,999',
        features: ['Everything in STANDARD +', 'Multiple Consultations with CA', 'Logo + Text strategy guidance', 'Extended objection handling', 'Priority support']
      }
    ],
    whyChoose: [
      { icon: IoMdPeople, text: 'Real Experts, Real Support: We have a physical office. Pop in for a chai!' },
      { icon: IoMdGlobe, text: 'Global Standard: We work with International clients, bringing professional standards to Kolkata' },
      { icon: IoMdTrophy, text: '30+ Years Experience: Decades of consulting for businesses just like yours' },
      { icon: IoMdSchool, text: 'Pool of Experts: Finding the right expert for your needs. We don\'t leave you hanging' }
    ],
    idealFor: {
      good: ['Selling on Amazon, Flipkart, Meesho, Instagram', 'Running a shop, factory, or service business', 'Planning to scale or franchise', 'Exporting Products'],
      notGood: ['Cheapest-only seekers', 'Businesses ignoring compliance', 'Short cut solutions']
    },
    timeline: [
      { step: 'Filing', detail: 'Same day / within 24 hours' },
      { step: 'Application Number', detail: 'Immediately after filing' },
      { step: 'Certificate of Application', detail: '~10-15 days' },
      { step: 'Registration Process', detail: 'Continues as per registry timeline' }
    ]
  };

  const warningIcons = [MdWarningAmber, MdFindInPage, MdSyncProblem, MdMoneyOff];
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
        className="relative bg-cover bg-center min-h-[calc(100svh-56px)] sm:min-h-[520px] md:min-h-[600px] lg:min-h-[calc(100svh-72px)] flex flex-col overflow-x-clip"
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75"></div>
        <div className="relative flex-1 flex flex-col justify-center px-5 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 text-white">
          <div className="max-w-3xl lg:max-w-6xl xl:max-w-7xl mx-auto w-full text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] sm:text-xs md:text-sm mb-5 sm:mb-6 bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full text-[10px] sm:text-xs font-bold bg-amber-500 text-white">★</span>
              <span className="font-semibold">Licensed KMC Consultant</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-[1.6rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.18] mb-4 sm:mb-5">
              {service.heroDescription}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-xl mx-auto leading-relaxed mb-6 sm:mb-8">
              {service.mainDescription}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <a
                href="tel:+916291139691"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white min-h-[48px] btn-primary-sage shadow-lg hover:shadow-xl transition-all"
              >
                <MdPhone className="text-lg" /> Call Now
              </a>
              <button
                type="button"
                onClick={() => openServiceEnquiry({ serviceType: 'trademark-marketplace' })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 sm:py-4 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white text-sm sm:text-base font-bold min-h-[48px] transition-all"
              >
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Clean Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--color-3d6b56)] font-bold mb-2 sm:mb-3 uppercase">Important Warning</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 leading-tight">{service.warning}</h2>
            <div className="w-12 sm:w-16 h-1 bg-[var(--color-3d6b56)] mx-auto rounded-full mb-3 sm:mb-4" />
            <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">Don't risk your business on incomplete or careless filings</p>
          </div>

          {/* Warning Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
            {service.warningPoints.map((point, index) => {
              const WarningIcon = warningIcons[index % warningIcons.length];
              return (
                <div
                  key={index}
                  className="group rounded-xl p-4 sm:p-5 md:p-6 bg-amber-50 border border-amber-200 hover:border-amber-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-md">
                      <WarningIcon className="text-lg sm:text-xl" />
                    </div>
                    <p className="text-sm sm:text-base font-semibold leading-relaxed text-amber-900 pt-1">{point}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section — Dark */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-5 sm:px-6 bg-[var(--color-3d6b56)] relative overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/[0.07] rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-amber-400/[0.05] rounded-full -ml-56 -mb-56 blur-3xl" />

        <div className="relative max-w-5xl mx-auto">
          {/* Clean Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-14">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-emerald-300 font-bold mb-2 sm:mb-3 uppercase">Our Process</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-white leading-tight">
              The <span className="text-amber-300">Safe-Start</span> Protocol
            </h2>
            <p className="text-white/90 text-sm sm:text-base max-w-xl mx-auto">
              Securing your {service.title} in {service.process.length} proven steps
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
                    <div className={`w-10 h-10 rounded-full ${stepColor} flex items-center justify-center shadow-md ring-4 ring-[var(--color-3d6b56)]`}>
                      <IconComponent className="text-white text-base" />
                    </div>
                    {index < service.process.length - 1 && (
                      <div className="w-0.5 h-6 bg-white/20 mt-1.5" />
                    )}
                  </div>
                  <div className="flex-1 bg-white/95 rounded-xl p-4 border border-white/30">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-gray-400">Step 0{item.step}</span>
                    <h3 className="text-[15px] font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop: Alternating timeline */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-300 via-white/40 to-amber-300 -translate-x-px" />

            <div className="space-y-0">
              {service.process.map((item, index) => {
                const IconComponent = processVisuals[index].icon;
                const stepColor = processVisuals[index].color;
                const isEven = index % 2 === 0;

                return (
                  <div key={item.step} className="relative flex items-center mb-10 last:mb-0">
                    <div className={`w-[calc(50%-2.5rem)] ${isEven ? '' : 'order-3'}`}>
                      {isEven && (
                        <div className="bg-white/95 rounded-2xl p-5 lg:p-6 border border-white/30 hover:shadow-lg transition-all mr-4 text-right">
                          <span className="text-[10px] font-bold tracking-wider uppercase text-gray-400">Step 0{item.step}</span>
                          <h3 className="text-lg lg:text-xl font-bold text-gray-900 mt-0.5 mb-1">{item.title}</h3>
                          <p className="text-sm lg:text-base text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                      )}
                    </div>

                    <div className="relative z-10 flex-shrink-0 order-2">
                      <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-full ${stepColor} flex items-center justify-center shadow-xl ring-4 ring-[var(--color-3d6b56)]`}>
                        <IconComponent className="text-white text-xl lg:text-2xl" />
                      </div>
                    </div>

                    <div className={`w-[calc(50%-2.5rem)] ${isEven ? 'order-3' : ''}`}>
                      {!isEven && (
                        <div className="bg-white/95 rounded-2xl p-5 lg:p-6 border border-white/30 hover:shadow-lg transition-all ml-4">
                          <span className="text-[10px] font-bold tracking-wider uppercase text-gray-400">Step 0{item.step}</span>
                          <h3 className="text-lg lg:text-xl font-bold text-gray-900 mt-0.5 mb-1">{item.title}</h3>
                          <p className="text-sm lg:text-base text-gray-600 leading-relaxed">{item.description}</p>
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

      {/* Pricing Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Clean Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--color-3d6b56)] font-bold mb-2 sm:mb-3 uppercase">Pricing & Packages</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 leading-tight">Choose Your Perfect Plan</h2>
            <div className="w-12 sm:w-16 h-1 bg-[var(--color-3d6b56)] mx-auto rounded-full mb-3 sm:mb-4" />
            <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">Select the level of service your business needs</p>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {service.packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-xl sm:rounded-2xl overflow-hidden transition-all transform ${
                  pkg.popular
                    ? 'ring-2 ring-emerald-400 hover:shadow-2xl hover:scale-[1.02] bg-gradient-to-br from-white to-emerald-50/30'
                    : 'border-2 border-gray-200 hover:shadow-xl hover:-translate-y-1 bg-white'
                } p-5 sm:p-6 md:p-7 lg:p-8`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-bl-xl text-xs sm:text-sm font-bold">
                    Most Popular
                  </div>
                )}

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 text-gray-900 pt-3 sm:pt-4">{pkg.name}</h3>

                <div className="mb-5 sm:mb-6 pb-5 sm:pb-6 border-b-2 border-gray-200">
                  <span className={`text-3xl sm:text-4xl md:text-5xl font-bold ${pkg.popular ? 'text-emerald-600' : 'text-gray-900'}`}>
                    {pkg.price}
                  </span>
                </div>

                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-gray-900">
                      <FaCheckCircle className={`text-base sm:text-lg flex-shrink-0 mt-0.5 ${pkg.popular ? 'text-emerald-500' : 'text-teal-500'}`} />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => openServiceEnquiry({ serviceType: 'trademark-marketplace' })}
                  className={`block w-full py-3 sm:py-3.5 px-5 sm:px-6 rounded-xl font-bold text-sm sm:text-base text-center transition-all min-h-[48px] flex items-center justify-center ${
                    pkg.popular
                      ? 'btn-primary-sage text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-50 text-gray-900 border-2 border-gray-200 hover:bg-gray-100 hover:shadow-md'
                  }`}
                >
                  Get Started →
                </button>
              </div>
            ))}
          </div>
          
          <p className="text-center text-[10px] sm:text-xs mt-4 sm:mt-5 md:mt-6 max-w-3xl mx-auto text-gray-400">
            * Pricing based on "Sole Proprietorship" model. Includes Govt Fees (₹4,500) + Professional Fees. 
            Quotes will be provided based on your specific business requirements.
          </p>
        </div>
      </section>

      {/* Timeline Section — Dark */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-5 sm:px-6 bg-[var(--color-3d6b56)] relative overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-400/[0.06] rounded-full -mt-48 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[28rem] h-[28rem] bg-amber-400/[0.04] rounded-full -mb-56 blur-3xl" />

        <div className="relative max-w-4xl mx-auto">
          {/* Clean Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-14">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-emerald-300 font-bold mb-2 sm:mb-3 uppercase">Timeline</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-white leading-tight">
              What You'll <span className="text-amber-300">Receive</span> & When
            </h2>
            <p className="text-white/90 text-sm sm:text-base max-w-lg mx-auto">
              Clear expectations throughout the process
            </p>
          </div>

          {/* Timeline Cards — 2x2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.timeline.map((item, index) => (
              <div key={index} className="group rounded-xl p-5 bg-white/[0.15] backdrop-blur-sm border border-white/[0.15] shadow-lg shadow-black/10 hover:bg-white/[0.22] hover:border-white/25 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-start gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center flex-shrink-0 font-bold text-lg sm:text-xl shadow-lg">
                  {index + 1}
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1">{item.step}</h4>
                  <p className="text-sm text-white/90 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom highlight card */}
          <div className="mt-8 sm:mt-10 rounded-xl p-5 sm:p-6 bg-white/[0.15] backdrop-blur-sm border border-white/[0.15] shadow-lg shadow-black/10 text-center">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1.5 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
              <FaShieldAlt className="text-2xl sm:text-3xl text-amber-300" /> Complete 360° Guidance
            </p>
            <p className="text-sm sm:text-base text-white/90">We provide support and guidance at every stage of your journey</p>
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Clean Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--color-3d6b56)] font-bold mb-2 sm:mb-3 uppercase">Is This For You?</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 leading-tight">Who Should Choose This Service?</h2>
            <div className="w-12 sm:w-16 h-1 bg-[var(--color-3d6b56)] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {/* Ideal For */}
            <div className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 bg-gray-50 border border-gray-100 hover:shadow-md transition-all">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4 sm:mb-5 flex items-center gap-2 text-emerald-600">
                <IoMdCheckmarkCircle className="text-2xl flex-shrink-0" /> This Service Is Ideal For
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {service.idealFor.good.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-sm sm:text-base text-gray-900">
                    <FaCheckCircle className="text-emerald-500 flex-shrink-0 mt-0.5 text-sm" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Fit For */}
            <div className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 bg-red-50 border border-red-200 hover:shadow-md transition-all">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4 sm:mb-5 flex items-center gap-2 text-red-600">
                <IoMdClose className="text-2xl flex-shrink-0" /> This Is Not Fit For
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {service.idealFor.notGood.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-sm sm:text-base text-red-900">
                    <span className="text-lg text-red-500 flex-shrink-0 leading-none">✕</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section — Dark */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-5 sm:px-6 bg-[var(--color-3d6b56)] relative overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/[0.07] rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-amber-400/[0.05] rounded-full -ml-56 -mb-56 blur-3xl" />

        <div className="relative max-w-5xl mx-auto">
          {/* Clean Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-14">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-emerald-300 font-bold mb-2 sm:mb-3 uppercase">Why Choose Us</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-white leading-tight">
              Why <span className="text-amber-300">Khan Consultants?</span>
            </h2>
            <p className="text-white/90 text-sm sm:text-base max-w-lg mx-auto">
              We protect your brand with legal depth and practical execution.
            </p>
          </div>

          {/* 2x2 Glass Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.whyChoose.map((reason, index) => {
              const IconComponent = reason.icon;
              const iconBgs = ['bg-blue-400/25', 'bg-violet-400/25', 'bg-amber-400/25', 'bg-cyan-400/25'];
              const iconColors = ['text-blue-400', 'text-violet-400', 'text-amber-400', 'text-cyan-400'];
              return (
                <div
                  key={index}
                  className="group rounded-xl p-5 bg-white/[0.15] backdrop-blur-sm border border-white/[0.15] shadow-lg shadow-black/10 hover:bg-white/[0.22] hover:border-white/25 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-start gap-4"
                >
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-lg ${iconBgs[index]} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`${iconColors[index]} text-xl sm:text-2xl`} />
                  </div>
                  <p className="text-white text-sm sm:text-base font-medium leading-relaxed pt-1.5">{reason.text}</p>
                </div>
              );
            })}
          </div>

          {/* Budget Services Warning — Embedded light card */}
          <div className="mt-10 sm:mt-12 md:mt-16 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-br from-amber-50 via-white to-orange-50 border border-amber-200">
            <div className="text-center mb-6 sm:mb-8">
              <p className="text-[10px] sm:text-xs tracking-[0.2em] text-amber-700 font-bold mb-2 sm:mb-3 uppercase">The Truth</p>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 leading-tight">
                Why Budget Services Fail You
              </h3>
              <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {[
                { icon: MdFindInPage, text: 'No brand search = Rejection' },
                { icon: MdSyncProblem, text: 'Wrong class = Useless protection' },
                { icon: MdMoneyOff, text: 'No objection help = Abandoned' },
                { icon: FaBalanceScale, text: 'Zero accountability = You lose' },
              ].map((item) => {
                const IconComp = item.icon;
                return (
                  <div key={item.text} className="rounded-xl p-4 sm:p-5 bg-white border border-amber-200 hover:border-amber-300 hover:shadow-md transition-all">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white flex-shrink-0 shadow-md">
                        <IconComp className="text-lg" />
                      </div>
                      <p className="text-sm sm:text-base font-semibold text-gray-900 leading-relaxed pt-1">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="rounded-xl p-5 sm:p-6 bg-amber-100 border border-amber-300">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center">
                <FaBalanceScale className="text-2xl sm:text-3xl text-amber-700 flex-shrink-0" />
                <p className="text-sm sm:text-base md:text-lg font-bold text-amber-900 leading-tight">
                  Your trademark must be accurate and perfect—or you'll pay double to fix it later.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Clients Logo Slider */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 sm:px-6 md:px-8 py-7 sm:py-8 md:py-10">

            <div className="relative text-center mb-5 sm:mb-7">
              <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--color-3d6b56)] font-bold mb-2 uppercase">Trusted By</p>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900">Trusted By Local and International Brands</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">From Kolkata businesses to international teams for trademark, legal, and marketplace compliance support.</p>
            </div>

            <div className="relative">
              <div className="logo-marquee logo-marquee--premium group">
                <div className="logo-marquee__track group-hover:[animation-play-state:paused]" aria-label="Trusted client logos">
                  {[...clientLogos, ...clientLogos].map((logo, idx) => (
                    <div key={`single-${logo.src}-${idx}`} className="logo-marquee__item" role="img" aria-label={logo.alt}>
                      <img src={logo.src} alt={logo.alt} loading="lazy" className="h-11 sm:h-12 md:h-14 w-auto object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-gray-50 py-10 sm:py-14 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--color-3d6b56)] font-bold mb-2 sm:mb-3 uppercase">Get Started</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            Protect Your Brand Today
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-[var(--color-3d6b56)] mx-auto rounded-full mb-3 sm:mb-4" />
          <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Don't leave your business name unprotected. Get expert trademark and legal support from Khan Consultants.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              type="button"
              onClick={() => openServiceEnquiry({ serviceType: 'trademark-marketplace' })}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-7 sm:px-8 py-3.5 sm:py-4 btn-primary-sage text-white text-sm sm:text-base font-bold shadow-lg hover:shadow-xl transition-all min-h-[48px]"
            >
              Get Started Now <span>→</span>
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

export default LegalServices;
