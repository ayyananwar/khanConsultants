import { Link } from 'react-router-dom';
import { FaBalanceScale } from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';
import { IoMdCheckmarkCircle, IoMdClose, IoMdPeople, IoMdGlobe, IoMdTrophy, IoMdSchool } from 'react-icons/io';
import { FaShieldAlt} from 'react-icons/fa';

const GSTAccounting = () => {
  const service = {
    title: 'GST & Accounting',
    heroDescription: 'Get Your GST Sorted Without the Headache',
    mainDescription: 'We don\'t just email you a certificate; we set up your entire Tax Compliance System. Timely, transparently, and under your full control.',
    process: [
      {
        step: 1,
        title: 'Express Filing',
        description: 'We file your application immediately using Aadhaar Authentication for the fastest possible approval (Subject to Govt. approval)'
      },
      {
        step: 2,
        title: 'Complete Handover',
        description: 'We create your permanent User ID and Password and hand them over to you securely. You own your data'
      },
      {
        step: 3,
        title: 'Bank Account Linkage',
        description: 'Mandatory compliance step. Once you open your bank account, we update it on the GST portal to prevent suspension'
      },
      {
        step: 4,
        title: 'The CEO Briefing',
        description: 'A dedicated meeting (Zoom/In-Person) to teach you: How to raise a bill? When to file? How to save tax legally?'
      }
    ],
    warning: '"Cheap GST Registration" is Dangerous. What most Agents don\'t tell you!',
    warningPoints: [
      'The Trap: If you don\'t link your Bank Account within 45 days, your GST is suspended',
      'The Risk: If you miss even a "Nil Return," the Govt charges fines of ₹50/day',
      'No Access: Many agents keep your ID/Password hostage. We give you full control'
    ],
    packages: [
      {
        name: 'Basic',
        price: '₹1,499',
        features: ['GST Registration Certificate', 'Standard Filing (3-5 Days)', 'ID & Password (Emailed)']
      },
      {
        name: 'Standard',
        price: '₹1,999',
        features: ['Everything in Basic +', 'Priority Filing (within 24 Hrs)', 'Full Credential Handover', 'Bank Account Linkage', '1-on-1 CEO Briefing with CA'],
        popular: true
      },
      {
        name: 'Premium',
        price: '₹2,999',
        features: ['Everything in STANDARD +', 'Multiple Consultations with CA', 'First month GST return filing', 'MSME (Udyam) Registration']
      }
    ],
    whyChoose: [
      { icon: IoMdPeople, text: 'Real Experts, Real Support: We have a physical office. Pop in for a chai!' },
      { icon: IoMdGlobe, text: 'Global Standard: We work with International clients, bringing professional standards to Kolkata' },
      { icon: IoMdTrophy, text: '30+ Years Experience: Decades of consulting for businesses just like yours' },
      { icon: IoMdSchool, text: 'Pool of Experts: Finding the right expert for your needs. We don\'t leave you hanging' }
    ],
    idealFor: {
      good: ['Start-ups/ New business owners', 'Ecommerce/Amazon / Flipkart sellers', 'Service providers', 'Exporting Products'],
      notGood: ['Cheapest-only seekers', 'Businesses ignoring compliance', 'Short cut solutions']
    },
    timeline: [
      { step: 'Filing', detail: 'Same day / within 24 hours' },
      { step: 'Certificate', detail: '~10-15 days' },
      { step: 'Full Setup', detail: '~30 days' },
      { step: 'Peace of Mind', detail: 'Ongoing support and compliance' }
    ]
  };

  return (
    <div className="bg-white service-page">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32"
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        <div className="relative max-w-6xl mx-auto px-3 sm:px-4 md:px-6 text-white text-center">
          <p className="text-[10px] sm:text-xs md:text-sm tracking-widest font-bold mb-2 sm:mb-3 md:mb-4 uppercase text-amber-300">{service.title}</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4 md:mb-5 lg:mb-6">{service.heroDescription}</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed text-white/85">{service.mainDescription}</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center">
            <a href="tel:+916291139691" className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 md:px-7 lg:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base text-white rounded-lg sm:rounded-xl font-bold transition bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 hover:shadow-lg hover:shadow-emerald-500/50 transform hover:scale-105">
              <MdPhone className="text-base sm:text-lg" /> Call Now
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center px-5 sm:px-6 md:px-7 lg:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base border-2 border-white text-white rounded-lg sm:rounded-xl font-bold hover:bg-white/15 hover:border-emerald-300 transition">
              Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-3 sm:px-4 md:px-6 bg-white">
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
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">Don't risk your business on incomplete or careless filings</p>
          </div>

          {/* Warning Cards - 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {service.warningPoints.map((point, index) => (
              <div 
                key={index} 
                className="group relative rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 bg-white border-2 border-amber-300 hover:border-amber-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Warning Icon Badge */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white text-xl sm:text-2xl shadow-lg">
                    ⚠️
                  </div>
                  <div className="flex-1">
                    <p className="text-sm sm:text-base md:text-lg font-semibold leading-relaxed text-amber-900">{point}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-3 sm:px-4 md:px-6 bg-[#3d6b56]">
        <div className="max-w-5xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-amber-300 font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-[#3d6b56] px-3 sm:px-4">OUR PROCESS</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-white leading-tight">
              The Safe-Start Protocol
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-white/80 px-2">Securing your {service.title} in {service.process.length} proven steps</p>
          </div>

          {/* 2x2 Grid from Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {service.process.map((item, index) => (
              <div key={index} className="relative rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 bg-white border-2 border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all">
                <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 md:-top-5 md:-right-5 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#2c4d3f] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm sm:text-base md:text-lg font-bold">{item.step}</span>
                </div>
                <div className="pt-4 sm:pt-5">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-3 sm:px-4 md:px-6 bg-white">
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
                      <span className={`text-lg sm:text-xl flex-shrink-0 ${pkg.popular ? 'text-emerald-500' : 'text-teal-500'}`}>✓</span>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg font-semibold text-sm sm:text-base text-center transition-all transform ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-emerald-500/50 hover:shadow-lg hover:-translate-y-1'
                      : 'bg-[#d6fadc] text-gray-900 border-2 border-emerald-300 hover:bg-emerald-300/30 hover:shadow-lg hover:-translate-y-1'
                  }`}
                >
                  Get Started →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-3 sm:px-4 md:px-6 bg-[#3d6b56]">
        <div className="max-w-4xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-amber-300 font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-[#3d6b56] px-3 sm:px-4">TIMELINE</span>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
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
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-3 sm:px-4 md:px-6 bg-white">
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
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6 flex items-center gap-2 sm:gap-3 text-emerald-600">
                <IoMdCheckmarkCircle className="text-2xl sm:text-3xl flex-shrink-0" /> This Service Is Ideal For
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {service.idealFor.good.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-900">
                    <span className="text-xl sm:text-2xl text-emerald-500 flex-shrink-0">✓</span>
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
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-white leading-tight px-2">Why Khan Consultants?</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-white/80 px-2">Excellence in every step of your journey</p>
          </div>

          {/* 2x2 Grid from Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {service.whyChoose.map((reason, index) => {
              const IconComponent = reason.icon;
              const iconColorClasses = ['text-blue-700', 'text-violet-700', 'text-amber-700', 'text-cyan-700'];
              const iconBgClasses = ['bg-blue-100', 'bg-violet-100', 'bg-amber-100', 'bg-cyan-100'];
              return (
                <div
                  key={index}
                  className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 bg-gradient-to-br from-white to-emerald-50/20 border-2 border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all flex flex-col gap-3 sm:gap-4"
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center ${iconBgClasses[index % iconBgClasses.length]} ${iconColorClasses[index % iconColorClasses.length]}`}>
                    <IconComponent className="text-2xl sm:text-3xl" />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-900 font-semibold leading-relaxed">{reason.text}</p>
                </div>
              );
            })}
          </div>

          {/* Why Not Go Cheap Section - Redesigned */}
          <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-20">
            {/* Section Header */}
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <div className="inline-block">
                <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-amber-700 font-bold mb-2 sm:mb-3 uppercase relative">
                  <span className="relative z-10 bg-[#3d6b56] px-3 sm:px-4">THE TRUTH</span>
                  <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></span>
                </p>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 text-amber-900 leading-tight">
                Why Budget Services Fail You
              </h3>
              <div className="w-12 sm:w-16 md:w-20 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full"></div>
            </div>

            {/* Comparison Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-6 sm:mb-8">
              <div className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 bg-white border-2 border-amber-300 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="flex flex-col items-center text-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white text-lg sm:text-xl">
                    ✕
                  </div>
                  <p className="text-xs sm:text-sm md:text-base font-semibold text-amber-900 leading-tight">No proper guidance = Costly mistakes</p>
                </div>
              </div>
              <div className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 bg-white border-2 border-amber-300 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="flex flex-col items-center text-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white text-lg sm:text-xl">
                    ✕
                  </div>
                  <p className="text-xs sm:text-sm md:text-base font-semibold text-amber-900 leading-tight">Hidden charges = Budget disaster</p>
                </div>
              </div>
              <div className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 bg-white border-2 border-amber-300 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="flex flex-col items-center text-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white text-lg sm:text-xl">
                    ✕
                  </div>
                  <p className="text-xs sm:text-sm md:text-base font-semibold text-amber-900 leading-tight">No follow-up = You're abandoned</p>
                </div>
              </div>
              <div className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 bg-white border-2 border-amber-300 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="flex flex-col items-center text-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white text-lg sm:text-xl">
                    ✕
                  </div>
                  <p className="text-xs sm:text-sm md:text-base font-semibold text-amber-900 leading-tight">Zero accountability = You lose</p>
                </div>
              </div>
            </div>

            {/* Bottom Warning */}
            <div className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-400 shadow-lg">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center">
                <FaBalanceScale className="text-2xl sm:text-3xl md:text-4xl text-amber-700 flex-shrink-0" />
                <p className="text-sm sm:text-base md:text-lg font-bold text-amber-900 leading-tight">
                  Your GST registration must be accurate and perfect—or you'll pay double to fix it later.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 text-white bg-[#3d6b56]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">Get Your GST Sorted Today</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 text-emerald-100">Stop risking fines and penalties. Let our experts handle your GST registration and compliance the right way.</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link 
              to="/contact" 
              className="px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg transition-all transform hover:shadow-emerald-500/50 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white inline-flex items-center justify-center min-h-[48px]"
            >
              Get Started Now →
            </Link>
            <a 
              href="tel:+916291139691" 
              className="px-8 sm:px-10 py-3.5 sm:py-4 border-2 border-emerald-400 rounded-xl font-bold text-sm sm:text-base md:text-lg transition-all transform hover:bg-emerald-500/20 hover:shadow-lg hover:-translate-y-1 text-white inline-flex items-center justify-center gap-3 min-h-[48px]"
            >
              <MdPhone className="text-xl sm:text-2xl" /> Call +91-6291-139-691
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default GSTAccounting;
