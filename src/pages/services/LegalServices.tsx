import { Link } from 'react-router-dom';
import { FaBalanceScale } from 'react-icons/fa';
import { MdPhone, MdWarningAmber, MdFindInPage, MdSyncProblem, MdMoneyOff, MdSearch, MdDescription, MdUploadFile, MdTaskAlt } from 'react-icons/md';
import { IoMdCheckmarkCircle, IoMdClose, IoMdPeople, IoMdGlobe, IoMdTrophy, IoMdSchool } from 'react-icons/io';
import { FaShieldAlt} from 'react-icons/fa';

const LegalServices = () => {
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-[1.15] mt-1 mb-4 sm:mb-7 md:mb-8 lg:mb-5 xl:mb-6">{service.heroDescription}</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-5 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 max-w-3xl mx-auto leading-relaxed text-white/85 px-1">{service.mainDescription}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 md:gap-5 justify-center items-center w-full mt-4 sm:mt-8 md:mt-9 lg:mt-6 pb-safe">
            <a href="tel:+916291139691" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 text-sm sm:text-base md:text-lg font-bold transition-all transform hover:shadow-xl hover:-translate-y-1 text-white min-h-[48px] btn-primary-sage shadow-lg">
              <MdPhone className="text-base sm:text-lg" /> Call Now
            </a>
            <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white text-sm sm:text-base md:text-lg font-bold transition-all transform hover:shadow-xl hover:-translate-y-1 min-h-[48px]">
              Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-20 xl:py-24 px-3 sm:px-4 md:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-gray-500 font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-white px-3 sm:px-4">IMPORTANT WARNING</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-gray-900 leading-tight">{service.warning}</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-gray-300 to-gray-500 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">Don't risk your business on incomplete or careful filings</p>
          </div>

          {/* Warning Cards - 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {service.warningPoints.map((point, index) => {
              const WarningIcon = warningIcons[index % warningIcons.length];
              return (
              <div 
                key={index} 
                className="group relative rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 bg-white border-2 border-amber-300 hover:border-amber-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white text-xl sm:text-2xl shadow-lg">
                    <WarningIcon />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm sm:text-base md:text-lg font-semibold leading-relaxed text-amber-900">{point}</p>
                  </div>
                </div>
              </div>
            )})}
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
              The Safe-Start Protocol
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-white/80 px-2">Securing your {service.title} in {service.process.length} proven steps</p>
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

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-20 xl:py-24 px-3 sm:px-4 md:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-gray-500 font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-white px-3 sm:px-4">PRICING & PACKAGES</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-gray-900 leading-tight">Choose Your Perfect Plan</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-gray-300 to-gray-500 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 px-2">Select the level of service your business needs</p>
          </div>

          {/* Side by Side Packages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {service.packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-xl sm:rounded-2xl overflow-hidden transition-all transform ${
                  pkg.popular
                    ? 'ring-2 ring-emerald-400 hover:shadow-2xl hover:scale-105 bg-gradient-to-br from-white to-emerald-50/30'
                    : 'border-2 border-gray-200 hover:shadow-xl hover:-translate-y-2 bg-white'
                } p-5 sm:p-6 md:p-7 lg:p-8`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-bl-lg sm:rounded-bl-xl text-xs sm:text-sm font-bold">
                    Most Popular
                  </div>
                )}

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 text-gray-900 pt-3 sm:pt-4">{pkg.name}</h3>

                <div className="mb-5 sm:mb-6 pb-5 sm:pb-6 border-b-2 border-gray-200">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-3xl sm:text-4xl md:text-5xl font-bold ${pkg.popular ? 'text-emerald-600' : 'text-gray-900'}`}>
                      {pkg.price}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-gray-900">
                      <span className="text-lg sm:text-xl flex-shrink-0 text-gray-900">✓</span>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg font-semibold text-sm sm:text-base text-center transition-all transform ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-emerald-500/50 hover:shadow-lg hover:-translate-y-1'
                      : 'bg-[var(--color-d6fadc)] text-gray-900 border-2 border-emerald-300 hover:bg-emerald-300/30 hover:shadow-lg hover:-translate-y-1'
                  }`}
                >
                  Get Started →
                </Link>
              </div>
            ))}
          </div>
          
          <p className="text-center text-[10px] sm:text-xs mt-4 sm:mt-5 md:mt-6 max-w-3xl mx-auto px-2" style={{ color: 'var(--color-6b7280)' }}>
            * Pricing based on "Sole Proprietorship" model. Includes Govt Fees (₹4,500) + Professional Fees. 
            Quotes will be provided based on your specific business requirements.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-20 xl:py-24 px-3 sm:px-4 md:px-6 bg-[var(--color-3d6b56)]">
        <div className="max-w-4xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-amber-300 font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-[var(--color-3d6b56)] px-3 sm:px-4">TIMELINE</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-white leading-tight">
              What You'll Receive & When
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-white/80 px-2">Clear expectations throughout the process</p>
          </div>

          {/* 2x2 Grid from Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {service.timeline.map((item, index) => (
              <div key={index} className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 bg-white border-2 border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all flex gap-4 sm:gap-5 md:gap-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center flex-shrink-0 font-bold text-lg sm:text-xl md:text-2xl">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 text-gray-900">{item.step}</h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 bg-white/10 border border-white/20 text-white text-center shadow-xl">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
              <FaShieldAlt className="text-2xl sm:text-3xl text-amber-300" /> Complete 360° Guidance
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/80">We provide support and guidance at every stage of your journey</p>
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-20 xl:py-24 px-3 sm:px-4 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-gray-500 font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-white px-3 sm:px-4">IS THIS FOR YOU?</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-gray-900 leading-tight px-2">Who Should Choose This Service?</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-gray-300 to-gray-500 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10">
            <div className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 bg-white border-2 border-emerald-200 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6 flex items-center gap-2 sm:gap-3 text-gray-900">
                <IoMdCheckmarkCircle className="text-2xl sm:text-3xl flex-shrink-0" /> This Service Is Ideal For
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {service.idealFor.good.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-900">
                    <span className="text-xl sm:text-2xl text-gray-900 flex-shrink-0">✓</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 bg-red-50 border-2 border-red-200 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6 flex items-center gap-2 sm:gap-3 text-red-600">
                <IoMdClose className="text-2xl sm:text-3xl flex-shrink-0" /> This Is Not Fit For
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {service.idealFor.notGood.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-red-900">
                    <span className="text-xl sm:text-2xl text-red-500 flex-shrink-0">✕</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-20 xl:py-24 px-3 sm:px-4 md:px-6 bg-[var(--color-3d6b56)]">
        <div className="max-w-5xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-amber-300 font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-[var(--color-3d6b56)] px-3 sm:px-4">WHY CHOOSE US</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-white leading-tight px-2">Why Khan Consultants?</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-white/80 px-2">We protect your brand with legal depth and practical execution.</p>
          </div>

          {/* 2x2 Grid from Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {service.whyChoose.map((reason, index) => {
              const IconComponent = reason.icon;
              const iconColorClasses = ['text-blue-200', 'text-violet-200', 'text-amber-200', 'text-cyan-200'];
              const iconBgClasses = ['bg-blue-500/20', 'bg-violet-500/20', 'bg-amber-500/20', 'bg-cyan-500/20'];
              return (
                <div
                  key={index}
                  className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/35 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col gap-3 sm:gap-4"
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center ${iconBgClasses[index % iconBgClasses.length]} ${iconColorClasses[index % iconColorClasses.length]}`}>
                    <IconComponent />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-white/95 font-semibold leading-relaxed">{reason.text}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-br from-amber-50 via-white to-orange-50 border border-amber-200">
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <div className="inline-block">
                <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-amber-700 font-bold mb-2 sm:mb-3 uppercase relative">
                  <span className="relative z-10 bg-white px-3 sm:px-4">THE TRUTH</span>
                  <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></span>
                </p>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 text-gray-900 leading-tight">
                Why Budget Services Fail You
              </h3>
              <div className="w-12 sm:w-16 md:w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8">
              {[
                { icon: MdFindInPage, text: 'No brand search = Rejection' },
                { icon: MdSyncProblem, text: 'Wrong class = Useless protection' },
                { icon: MdMoneyOff, text: 'No objection help = Abandoned' },
                { icon: FaBalanceScale, text: 'Zero accountability = You lose' },
              ].map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.text} className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 bg-white border border-amber-200 hover:border-amber-300 hover:shadow-xl hover:-translate-y-1 transition-all">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white flex-shrink-0">
                        <IconComponent className="text-lg" />
                      </div>
                      <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-900 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 bg-amber-100 border border-amber-300 shadow-lg">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center">
                <FaBalanceScale className="text-2xl sm:text-3xl md:text-4xl text-amber-700 flex-shrink-0" />
                <p className="text-sm sm:text-base md:text-lg font-bold text-amber-900 leading-tight">
                  Your trademark must be accurate and perfect—or you'll pay double to fix it later.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 text-gray-900 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">Protect Your Brand Today</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 text-gray-600">Don't leave your business name unprotected. Get expert trademark and legal support from Khan Consultants.</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link 
              to="/contact" 
              className="px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg transition-all transform hover:shadow-xl hover:-translate-y-1 btn-primary-sage text-white inline-flex items-center justify-center min-h-[48px]"
            >
              Get Started Now →
            </Link>
            <a 
              href="tel:+916291139691" 
              className="px-8 sm:px-10 py-3.5 sm:py-4 border-2 border-gray-300 rounded-xl font-bold text-sm sm:text-base md:text-lg transition-all transform hover:bg-gray-50 hover:shadow-lg hover:-translate-y-1 text-gray-900 inline-flex items-center justify-center gap-3 min-h-[48px]"
            >
              <MdPhone className="text-xl sm:text-2xl text-[var(--color-3d6b56)]" /> Call +91-6291-139-691
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LegalServices;
