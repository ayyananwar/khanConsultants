import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaShieldAlt, FaCheckCircle, FaFileAlt, FaUserTie, FaCalendarCheck, FaQuoteLeft } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';
import { MdOutlineChildCare, MdEditNote, MdGavel, MdCloudUpload, MdWarningAmber, MdFindInPage, MdSyncProblem, MdCancel, MdDescription, MdUploadFile, MdTaskAlt } from 'react-icons/md';
import { openBirthBooking } from '../../lib/birthBookingLauncher';

const Certificates = () => {
  const [activeReview, setActiveReview] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const service = {
    commonProblems: [
      'Birth not registered at the time',
      'Certificate not found in KMC records',
      'Mismatch in spelling or dates',
      'Different names across documents',
      'Rejection by school, passport, or authorities'
    ],
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


  const issueCards = [
    { icon: MdWarningAmber, title: service.commonProblems[0], color: 'from-amber-500 to-orange-500' },
    { icon: MdFindInPage, title: service.commonProblems[1], color: 'from-blue-500 to-cyan-500' },
    { icon: MdSyncProblem, title: service.commonProblems[2], color: 'from-violet-500 to-purple-500' },
    { icon: MdEditNote, title: service.commonProblems[3], color: 'from-emerald-500 to-teal-500' },
    { icon: MdCancel, title: service.commonProblems[4], color: 'from-rose-500 to-red-500' },
  ];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, [reviews.length]);


  useEffect(() => {
    if (searchParams.get('openBirthBooking') !== '1') {
      return;
    }

    openBirthBooking();
    const next = new URLSearchParams(searchParams);
    next.delete('openBirthBooking');
    setSearchParams(next, { replace: true });
  }, [searchParams, setSearchParams]);

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
        <div className="relative flex-1 flex flex-col justify-center max-w-3xl lg:max-w-[1320px] xl:max-w-[1440px] mx-auto w-full px-5 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 text-white text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs md:text-sm mb-5 sm:mb-6 mx-auto bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full text-xs sm:text-sm font-bold bg-amber-500 text-white">☆</span>
            <span className="font-semibold text-white">Licensed KMC Consultants</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-[1.6rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.18] mb-4 sm:mb-5 text-amber-300">Birth Certificates? Sorted!</h1>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/90 max-w-xl lg:max-w-4xl mx-auto mb-6 sm:mb-8">New application, corrections or digital QR — we get it done. No running around, no long queues at the Kolkata Municipal Corporation (KMC).</p>

          {/* Tell Us About Your Application */}
          <div className="mb-5 sm:mb-6">
            <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
              <RiWhatsappFill className="text-xl sm:text-2xl text-[var(--color-25d366)]" />
              <p className="text-base sm:text-lg md:text-xl font-bold text-white">Tell us about your application</p>
            </div>
            <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-4">Need guidance?&nbsp; Chat with us.</p>
            <a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="inline-flex lg:hidden items-center justify-center gap-2 rounded-full px-8 sm:px-10 py-2.5 sm:py-3 bg-[#e8dcc8] hover:bg-[#ddd0b8] text-[var(--color-1f3a30)] text-sm sm:text-base font-bold transition-all shadow-md hover:shadow-lg min-h-[42px]">
              Whatsapp
            </a>
          </div>

          {/* KMC Applications + Fee Badge */}
          <div className="mb-4 sm:mb-5">
            <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
              <p className="text-base sm:text-lg md:text-xl font-bold text-white leading-snug">We help you with your<br />KMC Applications</p>
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-amber-400 text-[var(--color-1f3a30)] text-[10px] sm:text-xs font-extrabold tracking-wide rotate-[-6deg] shadow-md whitespace-nowrap">Fee: Rs 199 only</span>
            </div>
          </div>

          {/* Checklist Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-2 sm:gap-y-2.5 max-w-sm sm:max-w-md lg:max-w-6xl mx-auto mb-5 sm:mb-6">
            {['Get KMC Booking.', 'Document Review.', 'Full Consultation.', 'Application Prepared.'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-left lg:justify-center">
                <FaCheckCircle className="text-[var(--color-25d366)] text-sm sm:text-base flex-shrink-0" />
                <span className="text-xs sm:text-sm text-white/90 font-medium whitespace-nowrap">{item}</span>
              </div>
            ))}
          </div>

          {/* Book Now CTA */}
          <button type="button" onClick={openBirthBooking} className="btn-book-slot lg:hidden mx-auto inline-flex items-center justify-center gap-2 rounded-full px-10 sm:px-14 py-3 sm:py-3.5 text-sm sm:text-base font-extrabold uppercase tracking-wider text-white transition-all transform hover:shadow-xl hover:-translate-y-1 min-h-[48px] shadow-lg mb-4 sm:mb-5">
            Book Now
          </button>

          <div className="hidden lg:flex flex-wrap justify-center items-center gap-4 mb-4 sm:mb-5">
            <button type="button" onClick={openBirthBooking} className="btn-book-slot inline-flex items-center justify-center gap-2 rounded-full px-10 py-3.5 text-base font-extrabold uppercase tracking-wider text-white transition-all transform hover:shadow-xl hover:-translate-y-1 min-h-[48px] shadow-lg">
              Book Now
            </button>
            <a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full px-10 py-3.5 bg-[#e8dcc8] hover:bg-[#ddd0b8] text-[var(--color-1f3a30)] text-base font-bold transition-all shadow-md hover:shadow-lg min-h-[48px]">
              Whatsapp
            </a>
          </div>

          <p className="text-xs sm:text-sm text-white/70 font-medium italic">Professional guidance from Licensed Consultant.</p>
        </div>
      </section>

      {/* Application Types */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-14">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--color-3d6b56)] font-bold mb-2 sm:mb-3 uppercase">APPLICATION TYPES</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-gray-900">What's your application Type?</h2>
            <div className="w-12 sm:w-16 h-1 bg-[var(--color-3d6b56)] mx-auto rounded-full mb-4 sm:mb-6" />
            <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">All types handled! Choose category for your application:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
            {[
              { icon: MdOutlineChildCare, title: 'New First Time Registrations', detail: 'If you never applied before', bg: 'bg-blue-50 border-blue-200', iconBg: 'bg-blue-100', iconColor: 'text-blue-600' },
              { icon: MdEditNote, title: 'Correction: Name & Date', detail: 'Need any name or date corrected.', bg: 'bg-emerald-50 border-emerald-200', iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600' },
              { icon: MdCloudUpload, title: 'Digitalization & QR Code', detail: 'Full consultation on your certificate application.', bg: 'bg-violet-50 border-violet-200', iconBg: 'bg-violet-100', iconColor: 'text-violet-600' },
              { icon: MdFindInPage, title: 'Lost / Destroyed or Get a Copy', detail: 'Get an original Birth Certificate copy', bg: 'bg-amber-50 border-amber-200', iconBg: 'bg-amber-100', iconColor: 'text-amber-600' },
            ].map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.title} className={`rounded-xl p-4 sm:p-5 border ${item.bg} transition-all hover:shadow-md`}>
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg ${item.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={`text-lg sm:text-xl ${item.iconColor}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--color-3d6b56)] font-bold mb-2 sm:mb-3 uppercase">CONSULTATION</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">What You Get In The Rs 199 Consultation</h2>
            <div className="w-12 sm:w-16 h-1 bg-[var(--color-3d6b56)] mx-auto rounded-full mb-3 sm:mb-5" />
            <p className="text-gray-500 text-sm sm:text-base">A quick, clear plan before you spend time and money on filing.</p>
          </div>

          {/* Checklist + CTA Card */}
          <div className="rounded-xl sm:rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 md:p-8 shadow-sm mb-6 sm:mb-8">
            <div className="flex flex-col items-center text-center">
              <div className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6">
                {[
                  '1-on-1 case review with a licensed consultant.',
                  'Exact document checklist based on your case type.',
                  'Clear action plan: where to apply, what to submit, and what to avoid.',
                  'KMC appointment support for the right application category.',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 justify-center">
                    <FaCheckCircle className="text-[var(--color-25d366)] text-sm sm:text-base flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <button type="button" onClick={openBirthBooking} className="btn-book-slot inline-flex items-center justify-center gap-2 rounded-full px-10 sm:px-14 py-3 sm:py-3.5 text-sm sm:text-base font-extrabold uppercase tracking-wider text-white transition-all transform hover:shadow-xl hover:-translate-y-1 min-h-[48px] shadow-lg mb-3 sm:mb-4">
                Book Now
              </button>
              <p className="text-base sm:text-lg font-bold text-gray-900">Book Your Consultation Slot</p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 mb-5 sm:mb-6">
            {[
              { icon: MdDescription, title: 'Full Document Review', detail: 'We go through all your documents. Full audit of your current proof.', bg: 'bg-blue-50 border-blue-200', iconBg: 'bg-blue-100', iconColor: 'text-blue-600' },
              { icon: FaCalendarCheck, title: 'Complete Consultation', detail: 'We provide you complete guidance.', bg: 'bg-emerald-50 border-emerald-200', iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600' },
              { icon: MdUploadFile, title: 'Application Preparation', detail: 'Draft support for your application.', bg: 'bg-violet-50 border-violet-200', iconBg: 'bg-violet-100', iconColor: 'text-violet-600' },
              { icon: MdTaskAlt, title: 'Your KMC Appointment', detail: 'We book an instant appointment with the KMC for your specific application.', bg: 'bg-amber-50 border-amber-200', iconBg: 'bg-amber-100', iconColor: 'text-amber-600' },
            ].map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.title} className={`rounded-xl p-4 sm:p-5 border ${item.bg} transition-all hover:shadow-md`}>
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg ${item.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={`text-lg sm:text-xl ${item.iconColor}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Fee Badge */}
          <div className="text-center">
            <span className="inline-block px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-amber-400 text-[var(--color-1f3a30)] text-sm sm:text-base font-extrabold shadow-md">Fee: Rs 199 only</span>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-5 sm:px-6 bg-[var(--color-3d6b56)] relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-400/[0.06] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-400/[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto text-center">
          <p className="text-[10px] sm:text-xs tracking-[0.2em] text-emerald-300 font-bold mb-2 sm:mb-3 uppercase">CLIENT REVIEWS</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">What Clients <span className="text-amber-300">Say</span> About Us</h2>
          <div className="w-12 sm:w-16 h-1 bg-emerald-400 mx-auto rounded-full mb-6 sm:mb-8" />

          <div className="relative max-w-2xl mx-auto rounded-xl sm:rounded-2xl bg-white/[0.15] backdrop-blur-sm border border-white/[0.15] shadow-lg shadow-black/10 p-5 sm:p-6 md:p-8 min-h-[200px] sm:min-h-[220px] flex flex-col justify-center">
            <FaQuoteLeft className="text-2xl sm:text-3xl text-amber-400/70 mx-auto mb-3 sm:mb-4" />
            <p className="text-sm sm:text-base text-white leading-relaxed mb-4 sm:mb-5">“{reviews[activeReview].review}”</p>
            <div className="flex items-center gap-3 justify-center">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-amber-400/90 flex items-center justify-center">
                <span className="text-[var(--color-1f3a30)] font-bold text-xs sm:text-sm">{reviews[activeReview].name.charAt(0)}</span>
              </div>
              <p className="font-semibold text-white text-sm sm:text-base">{reviews[activeReview].name}</p>
            </div>

            <div className="mt-4 sm:mt-5 flex justify-center gap-2">
              {reviews.map((review, index) => (
                <button
                  key={review.name}
                  type="button"
                  onClick={() => setActiveReview(index)}
                  className={`rounded-full transition-all duration-300 ${activeReview === index ? 'w-8 h-2.5 bg-amber-400' : 'w-2.5 h-2.5 bg-white/25 hover:bg-white/45'}`}
                  aria-label={`Show review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-14">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--color-3d6b56)] font-bold mb-2 sm:mb-3 uppercase">COMMON ISSUES</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-gray-900">Facing Issues With Your Birth Certificate?</h2>
            <div className="w-12 sm:w-16 h-1 bg-[var(--color-3d6b56)] mx-auto rounded-full mb-4 sm:mb-6" />
            <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">Here are some common Birth Certificate problems we handle:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-10">
            {issueCards.map((issue) => {
              const IconComponent = issue.icon;
              const issueColors: Record<string, { bg: string; iconBg: string; iconColor: string }> = {
                'from-amber-500 to-orange-500': { bg: 'bg-amber-50 border-amber-200', iconBg: 'bg-amber-100', iconColor: 'text-amber-600' },
                'from-blue-500 to-cyan-500': { bg: 'bg-blue-50 border-blue-200', iconBg: 'bg-blue-100', iconColor: 'text-blue-600' },
                'from-violet-500 to-purple-500': { bg: 'bg-violet-50 border-violet-200', iconBg: 'bg-violet-100', iconColor: 'text-violet-600' },
                'from-emerald-500 to-teal-500': { bg: 'bg-emerald-50 border-emerald-200', iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600' },
                'from-rose-500 to-red-500': { bg: 'bg-rose-50 border-rose-200', iconBg: 'bg-rose-100', iconColor: 'text-rose-600' },
              };
              const c = issueColors[issue.color] || { bg: 'bg-gray-50 border-gray-200', iconBg: 'bg-gray-100', iconColor: 'text-gray-600' };
              return (
                <div key={issue.title} className={`rounded-xl p-4 sm:p-5 border ${c.bg} transition-all hover:shadow-md flex items-center gap-3`}>
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg ${c.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className={`text-lg sm:text-xl ${c.iconColor}`} />
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-gray-900 leading-snug">{issue.title}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-gray-500 text-sm sm:text-base font-medium mb-5 sm:mb-6">If your case has been rejected or seems complicated, we can review it and guide you properly.</p>
            <a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base btn-primary-sage text-white transition-all min-h-[44px]">
              <RiWhatsappFill className="text-lg" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 bg-[var(--color-3d6b56)] relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-400/[0.07] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-amber-400/[0.05] rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-14">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-emerald-300 font-bold mb-2 sm:mb-3 uppercase">MORE SERVICES</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-white">Other <span className="text-amber-300">Services</span></h2>
            <div className="w-12 sm:w-16 h-1 bg-emerald-400 mx-auto rounded-full mb-4 sm:mb-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
            {[
              { icon: FaFileAlt, title: 'Death Certificates', iconBg: 'bg-blue-400/25', iconColor: 'text-blue-300' },
              { icon: FaUserTie, title: 'Marriage Certificates', iconBg: 'bg-amber-400/25', iconColor: 'text-amber-300' },
              { icon: MdEditNote, title: 'Official Name Change', iconBg: 'bg-emerald-400/25', iconColor: 'text-emerald-300' },
              { icon: MdGavel, title: 'Divorce Proceedings', iconBg: 'bg-rose-400/25', iconColor: 'text-rose-300' },
              { icon: FaShieldAlt, title: 'ID Documentation & more', iconBg: 'bg-violet-400/25', iconColor: 'text-violet-300' },
            ].map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.title} className="rounded-xl p-4 sm:p-5 bg-white/[0.15] backdrop-blur-sm border border-white/[0.15] shadow-lg shadow-black/10 hover:bg-white/[0.22] hover:border-white/25 hover:shadow-xl transition-all flex items-center gap-3">
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg ${item.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className={`text-lg sm:text-xl ${item.iconColor}`} />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white">{item.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-14">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--color-3d6b56)] font-bold mb-2 sm:mb-3 uppercase">OUR PROCESS</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-gray-900">What is the Process?</h2>
            <div className="w-12 sm:w-16 h-1 bg-[var(--color-3d6b56)] mx-auto rounded-full mb-4 sm:mb-6" />
            <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">Our process for Birth Certificate Applications</p>
          </div>

          <div className="relative">
            {/* Desktop center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block -translate-x-px"></div>
            {/* Mobile left line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200 md:hidden"></div>

            <div className="space-y-6 sm:space-y-8 md:space-y-0">
              {[
                { step: 1, title: 'Book consultation with us.', description: 'Meet us in person with all your documents.', icon: FaCalendarCheck, color: 'bg-blue-500' },
                { step: 2, title: 'KMC appointment booked.', description: 'We confirm your appointment with KMC.', icon: MdTaskAlt, color: 'bg-emerald-500' },
                { step: 3, title: 'Complete Guidance.', description: 'Full consultation on your certificate application.', icon: MdDescription, color: 'bg-violet-500' },
                { step: 4, title: 'Additional Legal Support.', description: 'Our panel of lawyers ready for extra support.', icon: FaShieldAlt, color: 'bg-amber-500' },
              ].map((item, index) => {
                const IconComponent = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <div key={item.step} className="relative md:flex md:items-center md:mb-12 last:md:mb-0">
                    {/* Mobile layout */}
                    <div className="md:hidden flex gap-3 sm:gap-4 items-start">
                      <div className="relative z-10 flex-shrink-0">
                        <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center shadow-lg ring-4 ring-white`}>
                          <IconComponent className="text-white text-base" />
                        </div>
                      </div>
                      <div className="flex-1 bg-gray-50 rounded-xl p-3.5 sm:p-4 border border-gray-100 hover:shadow-md transition-all">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-[var(--color-3d6b56)]">Step 0{item.step}</span>
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    {/* Desktop layout */}
                    <div className="hidden md:flex md:w-full md:items-center">
                      <div className={`w-[calc(50%-2rem)] ${isEven ? '' : 'order-3'}`}>
                        <div className={`bg-gray-50 rounded-xl p-5 lg:p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 ${isEven ? 'mr-4 text-right' : 'ml-4'}`}>
                          <div className={`flex items-center gap-2 mb-1.5 ${isEven ? 'justify-end' : ''}`}>
                            <span className="text-xs font-bold tracking-wider uppercase text-[var(--color-3d6b56)]">Step 0{item.step}</span>
                          </div>
                          <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1.5">{item.title}</h3>
                          <p className="text-sm lg:text-base text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                      </div>

                      <div className="relative z-10 flex-shrink-0 order-2 mx-auto">
                        <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-full ${item.color} flex items-center justify-center shadow-xl ring-4 ring-white`}>
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

      {/* Why Kolkata Trusts Us + Final CTA */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--color-3d6b56)] font-bold mb-2 sm:mb-3 uppercase">WHY KOLKATA TRUSTS US</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-gray-900">Local Experts, Legal Backing.</h2>
          <div className="w-12 sm:w-16 h-1 bg-[var(--color-3d6b56)] mx-auto rounded-full mb-4 sm:mb-6" />
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto">
            Agents outside the KMC building often promise quick results but leave you with half-done work or fake promises. Khan Consultants is different — we have a proper office, a legal team for affidavits, and years of experience dealing with Kolkata Municipal Corporation officials. We do it the right way, legally and securely.
          </p>

          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center">
            <button type="button" onClick={openBirthBooking} className="btn-book-slot w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-bold text-white transition-all min-h-[44px]">
              <FaCalendarCheck className="text-base" /> Book a Consultation
            </button>
            <a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-bold bg-white border border-gray-200 text-gray-800 hover:bg-gray-100 transition-all min-h-[44px] shadow-sm">
              <RiWhatsappFill className="text-lg text-[var(--color-25d366)]" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Certificates;
