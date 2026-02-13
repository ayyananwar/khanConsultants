import { Link } from 'react-router-dom';
import { designTokens } from '../../tokens';
import { MdPhone } from 'react-icons/md';
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

  return (
    <div className="bg-white service-page">
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
          <p className="text-[10px] sm:text-xs md:text-sm tracking-widest font-bold mb-2 sm:mb-3 md:mb-4 uppercase text-emerald-300">{service.title}</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4 md:mb-5 lg:mb-6">{service.heroTitle}</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-4 md:mb-5 max-w-3xl mx-auto leading-relaxed text-white/90">{service.heroDescription}</p>
          <p className="text-xs sm:text-sm md:text-base mb-6 sm:mb-8 md:mb-10 text-emerald-200">{service.heroSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-5 sm:px-6 md:px-7 lg:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base text-white rounded-lg sm:rounded-xl font-bold transition bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 hover:shadow-lg hover:shadow-emerald-500/50 transform hover:scale-105">
              Get in Touch
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center px-5 sm:px-6 md:px-7 lg:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base border-2 border-white text-white rounded-lg sm:rounded-xl font-bold hover:bg-white/15 hover:border-emerald-300 transition">
              Book Initial Review
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8" style={{ backgroundColor: designTokens.colors.neutral.white }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-7 md:mb-8 leading-snug" style={{ color: designTokens.colors.sage[900] }}>Your Bridge to the Kolkata Municipal Corporation</h2>
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: designTokens.colors.sage[600] }}>
              Dealing with KMC often involves complicated processes, endless queues, and complex documentation. Whether you are a citizen securing a birth certificate, a business owner needing a trade license, or a property owner resolving tax disputes, mistakes are costly.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: designTokens.colors.sage[600] }}>
              At Khan Consultants, we combine administrative expertise with strong legal backing to ensure your files are processed correctly, legally, and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-10 sm:py-14 md:py-18 lg:py-24 px-4 sm:px-6 md:px-8 bg-[#517358]">
        <div className="max-w-7xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            <div className="inline-block">
              <p className="text-[11px] sm:text-xs md:text-sm tracking-[0.3em] text-emerald-300 font-bold mb-3 sm:mb-4 uppercase relative">
                <span className="relative z-10 bg-[#517358] px-3 sm:px-4">SERVICES UNDER KMC</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-5 text-white leading-snug">Our Core Services</h2>
            <div className="w-12 sm:w-16 md:w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2 text-white/85 leading-relaxed">
              Our KMC services are broadly divided into three key areas:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
            {service.coreServices.map((item, index) => {
              const IconComponent = item.icon;
              const iconColors = ['#3b82f6', '#f59e0b', '#8b5cf6']; // Blue, Amber, Purple
              return (
                <div key={index} className="rounded-lg sm:rounded-xl md:rounded-2xl p-6 sm:p-7 md:p-8 hover:shadow-2xl hover:-translate-y-2 transition-all bg-white/10 backdrop-blur-sm border border-emerald-400/20 hover:border-emerald-400/40">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-5 sm:mb-6 md:mb-7 shadow-lg" style={{ backgroundColor: iconColors[index] }}>
                    <IconComponent className="text-3xl sm:text-4xl md:text-5xl text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-white leading-tight">{item.title}</h3>
                  <p className="text-sm sm:text-base mb-4 sm:mb-5 text-white/90 leading-relaxed">{item.description}</p>
                  <ul className="space-y-2 sm:space-y-2.5 mb-6 sm:mb-7">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-white/85 leading-relaxed">
                        <span className="flex-shrink-0 font-bold text-emerald-300 mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={item.buttonLink} className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 text-white rounded-lg sm:rounded-xl font-semibold transition text-xs sm:text-sm bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 hover:shadow-lg" style={{ backgroundColor: iconColors[index] }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                    {item.buttonText}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Legal Advantage Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-3 sm:px-4 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-[#53785b] font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-white px-3 sm:px-4">OUR USP</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#53785b]/30 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-[#2c4d3f] leading-tight">More Than Just Filing—We Handle the Legal Hurdles</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#53785b] to-[#2c4d3f] mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-xs sm:text-sm md:text-base text-[#53785b] max-w-3xl mx-auto px-2">KMC processes often get stuck due to missing "legal links." Unlike standard agents, Khan Consultants is backed by a robust team of lawyers. We handle the drafting and execution of all necessary legal supports in-house:</p>
          </div>

          {/* Legal Advantage Cards - 2x2 Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {service.legalAdvantage.map((item, index) => (
              <div 
                key={index} 
                className="group relative rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 bg-white border-2 border-red-300 hover:border-red-500 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 opacity-10 group-hover:opacity-20 transition-all">
                  <div className="absolute top-0 right-0 w-full h-full bg-red-500 transform rotate-45 translate-x-8 -translate-y-8"></div>
                </div>
                
                {/* Icon Badge */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white text-xl sm:text-2xl shadow-lg">
                    <FaCheckCircle />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm sm:text-base md:text-lg font-semibold leading-relaxed text-red-900">{item}</p>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12 text-center">
            <p className="text-sm sm:text-base md:text-lg text-red-900 font-semibold">This ensures your matter is not handled in isolation, but as part of a complete solution.</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-3 sm:px-4 md:px-6 bg-[#517358]">
        <div className="max-w-5xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-emerald-300 font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-[#517358] px-3 sm:px-4">OUR PROCESS</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-white leading-tight">
              How We Work
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-white/80 px-2">Our approach is simple, transparent, and structured:</p>
          </div>

          {/* 2x2 Grid from Mobile */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {service.process.map((item, index) => (
              <div key={index} className="relative rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 bg-white border-2 border-[#e8f0eb] hover:shadow-xl hover:-translate-y-2 transition-all">
                <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 md:-top-5 md:-right-5 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#2c4d3f] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm sm:text-base md:text-lg font-bold">{item.step}</span>
                </div>
                <div className="pt-4 sm:pt-5">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 text-[#2c4d3f]">{item.title}</h3>
                  <p className="text-sm sm:text-base text-[#53785b] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
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
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-[#2c4d3f] leading-tight px-2">Why Work With Us</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#53785b] to-[#2c4d3f] mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-[#53785b] px-2">What sets us apart:</p>
          </div>

          {/* 2x2 Grid from Mobile */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {service.whyChoose.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div
                  key={index}
                  className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 bg-gradient-to-br from-white to-emerald-50/30 border-2 border-[#e8f0eb] hover:shadow-xl hover:-translate-y-2 transition-all flex flex-col gap-3 sm:gap-4"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center bg-[#3b82f6] rounded-xl text-white shadow-lg">
                    <IconComponent className="text-2xl sm:text-3xl md:text-4xl" />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-[#2c4d3f] font-semibold leading-relaxed">{reason.text}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
            <p className="text-sm sm:text-base md:text-lg text-[#2c4d3f] font-semibold">Ethical, compliant, and documentation-first approach</p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#2c4d3f] font-bold">We don't promise shortcuts. We promise correct handling, clarity, and accountability.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 text-white bg-gradient-to-br from-[#1a2d23] via-[#2c4d3f] to-[#1f3a2f]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Ready to Get Started?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 text-emerald-100">If you need assistance with any KMC-related matter, get in touch with us for an initial review. We'll assess your situation and advise the right process, required documents, and realistic next steps.</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link 
              to="/contact" 
              className="px-8 sm:px-10 py-4 rounded-xl font-bold text-base sm:text-lg transition-all transform hover:shadow-emerald-500/50 hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white inline-flex items-center justify-center gap-3"
            >
              Get in Touch
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

export default KolkataCorporation;
