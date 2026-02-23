import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { designTokens } from '../../tokens';
import { FaShieldAlt, FaCheckCircle, FaFileAlt, FaUserTie, FaCalendarCheck, FaQuoteLeft, FaRupeeSign, FaStar } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import { MdOutlineChildCare, MdEditNote, MdBadge, MdGavel, MdCloudUpload, MdWarningAmber, MdFindInPage, MdSyncProblem, MdCancel, MdSearch, MdDescription, MdUploadFile, MdTaskAlt } from 'react-icons/md';
import BirthCertificateBookingModal from '../../components/BirthCertificateBookingModal';

const Certificates = () => {
  const [activeReview, setActiveReview] = useState(0);
  const [bookingOpen, setBookingOpen] = useState(false);

  const service = {
    title: 'Birth Certificate & Civil Documents in Kolkata',
    heroDescription: 'Whether it is a new baby, a lost document, or a correction in your child\'s birth certificate — we get it done. No running around, no long queues at the Kolkata Municipal Corporation (KMC).',
    
    birthCertificateServices: [
      'New Registrations: For newborns (Hospital or Home birth)',
      'Corrections: Fixing spelling mistakes in names, parents\' names, or addresses',
      'Name Inclusion: Adding your child\'s name to an old certificate without a name',
      'Delayed Registration: If you missed the 1-year deadline, we handle the Magistrate permission and court paperwork',
      'Digitization (Old to Online): Converting your old handwritten paper certificate into a digital, computer-generated one'
    ],
    
    commonProblems: [
      'Birth not registered at the time',
      'Certificate not found in KMC records',
      'Mismatch in spelling or dates',
      'Different names across documents',
      'Rejection by school, passport, or authorities'
    ],
    
    otherCertificates: [
      {
        icon: FaFileAlt,
        title: 'Death Certificates',
        description: 'Assisting families with cremation/burial records and obtaining the final Death Certificate from KMC for bank and property claims.'
      },
      {
        icon: FaUserTie,
        title: 'Marriage Registration',
        description: 'Guidance on registering marriages under the Special Marriage Act or Hindu Marriage Act in Kolkata.'
      },
      {
        icon: FaShieldAlt,
        title: 'Succession & Legal Heir Certificates',
        description: 'Legal support to prove inheritance for property and bank transfers.'
      }
    ],
    
    process: [
      {
        step: 1,
        title: 'Initial Review',
        description: 'We understand your issue and check available documents.'
      },
      {
        step: 2,
        title: 'Document Preparation',
        description: 'We help prepare forms, affidavits, and supporting papers.'
      },
      {
        step: 3,
        title: 'Submission & Follow-Ups',
        description: 'We assist with filing and coordination with KMC departments.'
      },
      {
        step: 4,
        title: 'Completion',
        description: 'We track the case and keep you informed till resolution.'
      }
    ]
  };

  const reviews = [
    {
      name: 'Sritama Bhattacharya',
      review: 'I had a delayed registration issue for my daughter. Khan Consultants handled the paperwork and court process smoothly and saved us weeks of stress.',
    },
    {
      name: 'Afzal Hussain',
      review: 'My correction request was rejected twice before. Their team fixed the documentation and got it processed correctly in one go.',
    },
    {
      name: 'Shariq Nawaz',
      review: 'Clear communication, proper guidance, and genuine follow-up. I always knew the exact status of my file.',
    },
    {
      name: 'Pooja Trivedi',
      review: 'Very professional service. They explained each step and handled my child name inclusion without confusion.',
    },
    {
      name: 'Ahmed Chowdhury',
      review: 'Fast response on WhatsApp and solid execution. Worth it if your case is urgent and you need experts who actually know KMC processes.',
    },
  ];

  const handleCards = [
    { icon: MdOutlineChildCare, title: 'New Registrations', detail: service.birthCertificateServices[0], color: 'from-blue-500 to-cyan-500' },
    { icon: MdEditNote, title: 'Corrections', detail: service.birthCertificateServices[1], color: 'from-emerald-500 to-teal-500' },
    { icon: MdBadge, title: 'Name Inclusion', detail: service.birthCertificateServices[2], color: 'from-violet-500 to-purple-500' },
    { icon: MdGavel, title: 'Delayed Registration', detail: service.birthCertificateServices[3], color: 'from-amber-500 to-orange-500' },
    { icon: MdCloudUpload, title: 'Digitization', detail: service.birthCertificateServices[4], color: 'from-rose-500 to-pink-500' },
  ];

  const issueCards = [
    { icon: MdWarningAmber, title: service.commonProblems[0], color: 'from-amber-500 to-orange-500' },
    { icon: MdFindInPage, title: service.commonProblems[1], color: 'from-blue-500 to-cyan-500' },
    { icon: MdSyncProblem, title: service.commonProblems[2], color: 'from-violet-500 to-purple-500' },
    { icon: MdEditNote, title: service.commonProblems[3], color: 'from-emerald-500 to-teal-500' },
    { icon: MdCancel, title: service.commonProblems[4], color: 'from-rose-500 to-red-500' },
  ];

  const processVisuals = [
    { icon: MdSearch, color: 'bg-blue-500' },
    { icon: MdDescription, color: 'bg-emerald-500' },
    { icon: MdUploadFile, color: 'bg-violet-500' },
    { icon: MdTaskAlt, color: 'bg-amber-500' },
  ];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, [reviews.length]);

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
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.15] mt-5 mb-6 sm:mb-7 md:mb-8 lg:mb-9 xl:mb-10">{service.title}</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 max-w-3xl mx-auto leading-relaxed text-white/90 px-1">{service.heroDescription}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 md:gap-5 justify-center items-center w-full mt-6 sm:mt-8 md:mt-10 lg:mt-12 pb-safe">
            <button type="button" onClick={() => setBookingOpen(true)} className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 text-sm sm:text-base md:text-lg font-bold transition-all transform hover:shadow-xl hover:-translate-y-1 text-white min-h-[48px] bg-[#3d6b56] hover:bg-[#2c4d3f] shadow-lg">
              <FaCalendarCheck className="text-base sm:text-lg" /> Book a Slot 199.00 Only
            </button>
            <a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white text-sm sm:text-base md:text-lg font-bold transition-all transform hover:shadow-xl hover:-translate-y-1 min-h-[48px]">
              <RiWhatsappFill className="text-xl" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Main Priority - Birth Certificates */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6" style={{ backgroundColor: designTokens.colors.neutral.white }}>
        <div className="max-w-6xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-gray-500 font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-white px-3 sm:px-4">MAIN PRIORITY</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3" style={{ color: '#111827' }}>Your Birth Certificate. Handled Correctly.</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-gray-300 to-gray-500 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12">
            <p className="text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4" style={{ color: '#4b5563' }}>
              A Birth Certificate is the most important document for school admission, passports, and visas. But in Kolkata, getting it right can be stressful. One spelling mistake can cause years of trouble.
            </p>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4" style={{ color: '#4b5563' }}>
              We don't just "submit files." We check every detail before it goes to the KMC office to ensure your application is approved the first time.
            </p>
          </div>

          <div className="mb-6 sm:mb-8 md:mb-10">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6 text-center" style={{ color: '#111827' }}>What We Handle:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
              {handleCards.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.title} className="group rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-md flex-shrink-0`}>
                        <IconComponent className="text-xl" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1 sm:mb-1.5">
                          <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-gray-500">Task {String(index + 1).padStart(2, '0')}</span>
                        </div>
                        <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1 sm:mb-1.5">{item.title}</h4>
                        <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6" style={{ color: '#4b5563' }}>
              At Khan Consultants, we help residents of Kolkata complete certificate-related work correctly, legally, and without unnecessary stress.
            </p>
            <Link to="/contact" className="inline-block px-6 sm:px-8 py-3 sm:py-4 text-white rounded-lg sm:rounded-xl font-bold transition text-sm sm:text-base bg-gray-900 hover:bg-gray-800">
              Request a Quote for Birth Certificate
            </Link>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-10 sm:py-14 md:py-18 lg:py-22 px-3 sm:px-4 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl sm:rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-emerald-50 p-4 sm:p-6 md:p-8 lg:p-10 shadow-sm">
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <p className="text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.18em] uppercase text-amber-700 mb-2 sm:mb-3">Priority Consultation</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">Confused? Book an Consultation!</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">Get a fast case review before spending on the full process.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              <div className="rounded-xl sm:rounded-2xl bg-white border border-amber-200 p-4 sm:p-5 md:p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                    <FaRupeeSign className="text-lg" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-gray-600">Consultation Price</p>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">₹199.00 Only</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">The consultation amount gets deducted from your final service fee when you proceed with us.</p>
              </div>

              <div className="rounded-xl sm:rounded-2xl bg-white border border-emerald-200 p-4 sm:p-5 md:p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <FaCalendarCheck className="text-lg" />
                  </div>
                  <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900">What You Get</p>
                </div>
                <ul className="space-y-2.5 sm:space-y-3">
                  {[
                    '15-minute one-to-one expert call',
                    'Document checklist specific to your case',
                    'Clear timeline and next-step roadmap',
                    'Risk flags before filing',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm md:text-base text-gray-700">
                      <FaCheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-5 sm:mt-6 md:mt-8 rounded-xl sm:rounded-2xl bg-red-50 border border-red-200 p-4 sm:p-5 md:p-6">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center flex-shrink-0">
                  <FaStar className="text-sm sm:text-base" />
                </div>
                <div>
                  <p className="text-sm sm:text-base md:text-lg font-bold text-red-800">Limited Availability for Urgent Cases</p>
                  <p className="text-xs sm:text-sm md:text-base text-red-700 mt-1 sm:mt-1.5">Same-day priority slots are limited and filled on first-come basis. Book early if your application has a deadline or prior rejection.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button type="button" onClick={() => setBookingOpen(true)} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white bg-[#3d6b56] hover:bg-[#2c4d3f] transition-all">
                <FaCalendarCheck className="text-base" /> Book a Slot 199.00 Only
              </button>
              <a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold bg-white border border-gray-300 text-gray-800 hover:bg-gray-50 transition-all">
                <RiWhatsappFill className="text-lg text-[#25D366]" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-10 sm:py-14 md:py-18 lg:py-22 px-3 sm:px-4 md:px-6 bg-[#3d6b56]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-3 sm:mb-4">
            <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-amber-300 font-bold uppercase">Client Reviews</p>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 md:mb-10">What Clients Say About Us</h2>

          <div className="relative max-w-3xl mx-auto rounded-2xl sm:rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 p-5 sm:p-7 md:p-9 min-h-[230px] sm:min-h-[250px] flex flex-col justify-center">
            <FaQuoteLeft className="text-2xl sm:text-3xl text-amber-300 mx-auto mb-3 sm:mb-4" />
            <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed mb-4 sm:mb-5">“{reviews[activeReview].review}”</p>
            <p className="text-base sm:text-lg md:text-xl font-bold text-amber-200">{reviews[activeReview].name}</p>

            <div className="mt-5 sm:mt-6 flex justify-center gap-2">
              {reviews.map((review, index) => (
                <button
                  key={review.name}
                  type="button"
                  onClick={() => setActiveReview(index)}
                  className={`h-2 rounded-full transition-all ${activeReview === index ? 'w-6 bg-amber-300' : 'w-2 bg-white/40 hover:bg-white/60'}`}
                  aria-label={`Show review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-3 sm:px-4 md:px-6 bg-[#3d6b56]">
        <div className="max-w-5xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-amber-300 font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-[#3d6b56] px-3 sm:px-4">COMMON ISSUES</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-white leading-tight">Facing Issues With Your Birth Certificate?</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-3xl mx-auto px-2">Here are some common Birth Certificate problems we handle:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
            {issueCards.map((issue) => {
              const IconComponent = issue.icon;
              return (
                <div key={issue.title} className="group relative rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 bg-white/10 backdrop-blur border border-white/20 hover:border-white/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/5 to-transparent"></div>
                  <div className="relative flex items-center gap-3 sm:gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${issue.color} flex items-center justify-center text-white text-xl sm:text-2xl shadow-lg`}>
                      <IconComponent />
                    </div>
                    <p className="text-sm sm:text-base md:text-lg font-semibold text-white leading-snug">{issue.title}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-sm sm:text-base md:text-lg text-white/80 font-semibold mb-6 sm:mb-8">If your case has been rejected earlier or seems complicated, we can review it and guide you properly.</p>
            <a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-white rounded-lg sm:rounded-xl font-bold transition text-sm sm:text-base bg-white/15 hover:bg-white/25 border border-white/20 hover:shadow-lg transform hover:scale-105">
              <RiWhatsappFill className="text-xl sm:text-2xl" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Other Important Certificates */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-gray-500 font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-white px-3 sm:px-4">OTHER SERVICES</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-gray-900">Other Civil Documents We Manage</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-gray-300 to-gray-500 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-xs sm:text-sm md:text-base max-w-3xl mx-auto px-2 text-gray-600">
              We provide the same expert fast-tracking for other essential life documents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {service.otherCertificates.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 hover:shadow-lg transition bg-white border border-gray-200">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-5 md:mb-6 bg-gray-100">
                    <IconComponent className="text-2xl sm:text-3xl text-gray-700" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ color: '#111827' }}>{cert.title}</h3>
                  <p className="text-xs sm:text-sm" style={{ color: '#4b5563' }}>{cert.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12 text-center">
            <p className="text-sm sm:text-base md:text-lg font-semibold" style={{ color: '#374151' }}>We provide you a single stop for all your certification needs.</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-3 sm:px-4 md:px-6 bg-[#3d6b56]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-amber-300 font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-[#3d6b56] px-3 sm:px-4">OUR PROCESS</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-white leading-tight">How We Work</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-white/80 px-2">A clear four-step workflow designed to reduce delays and mistakes.</p>
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
                        <div className={`w-10 h-10 rounded-full ${stepColor} flex items-center justify-center shadow-lg ring-4 ring-[#3d6b56]`}>
                          <IconComponent className="text-white text-base" />
                        </div>
                      </div>
                      <div className="flex-1 bg-white/95 rounded-xl p-3.5 sm:p-4 border border-white/30 hover:shadow-md transition-all">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase bg-[#3d6b56] text-white px-2 py-0.5 rounded-full">Step 0{item.step}</span>
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    <div className="hidden md:flex md:w-full md:items-center">
                      <div className={`w-[calc(50%-2rem)] ${isEven ? '' : 'order-3'}`}>
                        <div className={`bg-white/95 rounded-2xl p-5 lg:p-6 border border-white/30 hover:shadow-lg transition-all duration-300 ${isEven ? 'mr-4 text-right' : 'ml-4'}`}>
                          <div className={`flex items-center gap-2 mb-1.5 ${isEven ? 'justify-end' : ''}`}>
                            <span className="text-xs font-bold tracking-wider uppercase bg-[#3d6b56] text-white px-2.5 py-0.5 rounded-full">Step 0{item.step}</span>
                          </div>
                          <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1.5">{item.title}</h3>
                          <p className="text-sm lg:text-base text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                      </div>

                      <div className="relative z-10 flex-shrink-0 order-2 mx-auto">
                        <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-full ${stepColor} flex items-center justify-center shadow-xl ring-4 ring-[#3d6b56]`}>
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

      {/* Why Kolkata Trusts Us */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-3 sm:px-4 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-gray-500 font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-white px-3 sm:px-4">WHY KOLKATA TRUSTS US</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3" style={{ color: '#111827' }}>Local Experts, Legal Backing.</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-gray-300 to-gray-500 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6" style={{ color: '#374151' }}>
              Agents outside the KMC building often promise quick results but leave you with half-done work or fake promises. Khan Consultants is different. We have a proper office, a legal team for affidavits, and years of experience dealing with Kolkata Municipal Corporation officials. We do it the right way, legally and securely.
            </p>
          </div>
        </div>
      </section>

      <BirthCertificateBookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />

    </div>
  );
};

export default Certificates;
