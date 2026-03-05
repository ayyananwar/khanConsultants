import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { HiRocketLaunch, HiUserGroup, HiCheckCircle, HiClock, HiChartBar, HiMagnifyingGlass, HiClipboardDocumentCheck, HiLightBulb } from 'react-icons/hi2';
import { openServiceEnquiry } from '../lib/serviceEnquiryLauncher';
import { submitContactEnquiry } from '../api/contactEnquiryApi';

// About Section Component
function AboutSection() {
  const features = [
    { icon: HiCheckCircle, iconColor: 'text-blue-400', iconBg: 'bg-blue-400/25', title: 'One-Stop Solution', desc: 'Legal, financial, trade, and government — all under one roof.' },
    { icon: HiUserGroup, iconColor: 'text-emerald-400', iconBg: 'bg-emerald-400/25', title: '10,000+ Experts', desc: 'Specialists across legal, financial, and trade domains.' },
    { icon: HiRocketLaunch, iconColor: 'text-violet-400', iconBg: 'bg-violet-400/25', title: 'Fast Processing', desc: 'Quick turnaround times without compromising on quality.' },
    { icon: HiClock, iconColor: 'text-amber-400', iconBg: 'bg-amber-400/25', title: '50+ Years Legacy', desc: 'Decades of trusted service with 25+ years of KMC licensing.' },
  ];

  const stats = [
    { value: '50+', label: 'Years of Service' },
    { value: '25+', label: 'Years KMC Licensed' },
    { value: '1,000+', label: 'Happy Clients' },
    { value: '10K+', label: 'Expert Consultants' },
  ];

  return (
    <section id="about" className="py-10 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-[var(--color-3d6b56)] relative overflow-hidden">
      {/* Decorative ambient glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/[0.07] rounded-full -mr-48 -mt-48 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-amber-400/[0.05] rounded-full -ml-56 -mb-56 blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-white/[0.02] rounded-full blur-2xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Two-column layout: text left, cards right */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column — Text Content */}
          <div className="mb-6 lg:mb-0 lg:sticky lg:top-24">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-emerald-300 font-bold mb-1.5 sm:mb-3 uppercase">About Khan Consultants</p>
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-5 leading-tight">
              Kolkata's Most Trusted
              <span className="block text-amber-300">Business Partners</span>
            </h2>
            <p className="text-white/90 text-[13px] sm:text-base leading-relaxed mb-5 sm:mb-8 max-w-lg">
              For over 50 years, Khan Consultants has been guiding businesses and individuals through complex legal, financial, and government processes. We combine deep expertise with personal attention to deliver results you can trust.
            </p>

            {/* Stats — 2x2 grid */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 mb-5 sm:mb-8">
              {stats.map((s) => (
                <div key={s.label} className="rounded-lg sm:rounded-xl p-3 sm:p-4 bg-white/[0.15] backdrop-blur-sm border border-white/[0.15] shadow-lg shadow-black/10 hover:bg-white/[0.2] transition-colors">
                  <div className="text-lg sm:text-2xl md:text-3xl font-bold text-amber-300 leading-none">{s.value}</div>
                  <div className="text-[10px] sm:text-xs text-white font-medium mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="group inline-flex items-center gap-2 rounded-xl px-5 sm:px-6 py-2.5 sm:py-3 bg-amber-400 hover:bg-amber-300 text-[var(--color-1f3a30)] text-[13px] sm:text-base font-bold transition-all min-h-[40px] sm:min-h-[44px]"
            >
              Learn more about us
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>
          </div>

          {/* Right Column — Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="group rounded-lg sm:rounded-xl p-4 sm:p-5 bg-white/[0.15] backdrop-blur-sm border border-white/[0.15] shadow-lg shadow-black/10 hover:bg-white/[0.22] hover:border-white/25 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                  <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-lg ${f.iconBg} flex items-center justify-center mb-2.5 sm:mb-3.5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`${f.iconColor} text-lg sm:text-2xl`} />
                  </div>
                  <h4 className="font-bold text-white text-[13px] sm:text-sm md:text-base leading-snug mb-1.5 sm:mb-2">{f.title}</h4>
                  <p className="text-white/90 group-hover:text-white text-[11px] sm:text-xs md:text-sm leading-relaxed transition-colors">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// Process Timeline Component
function ProcessTimeline() {
  const steps = [
    { icon: HiMagnifyingGlass, title: 'Discovery', description: 'We understand your needs through detailed consultation.', step: '01', color: 'bg-blue-500' },
    { icon: HiClipboardDocumentCheck, title: 'Assessment', description: 'Evaluate requirements and plan the best approach.', step: '02', color: 'bg-emerald-500' },
    { icon: HiLightBulb, title: 'Strategy', description: 'Develop tailored solutions and actionable roadmaps.', step: '03', color: 'bg-violet-500' },
    { icon: HiRocketLaunch, title: 'Implementation', description: 'Execute with precision, managing paperwork end-to-end.', step: '04', color: 'bg-orange-500' },
    { icon: HiChartBar, title: 'Delivery', description: 'Deliver results on time with ongoing support.', step: '05', color: 'bg-amber-500' },
  ];

  return (
    <section id="process" className="py-8 sm:py-14 md:py-20 lg:py-24 px-3 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10 md:mb-12">
          <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--color-3d6b56)] font-bold mb-1.5 sm:mb-3 uppercase">Our Process</p>
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4 leading-tight">
            How We Drive Success
          </h2>
          <div className="w-10 sm:w-16 h-1 bg-[var(--color-3d6b56)] mx-auto rounded-full" />
          <p className="text-gray-500 text-[13px] sm:text-base max-w-xl mx-auto mt-2 sm:mt-4 leading-relaxed">
            A proven five-step approach that delivers results every time.
          </p>
        </div>

        {/* Mobile: Clean vertical steps */}
        <div className="md:hidden space-y-2">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex items-start gap-3">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-9 h-9 rounded-full ${step.color} flex items-center justify-center shadow-md`}>
                    <Icon className="text-white text-sm" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-5 bg-gray-200 mt-1" />
                  )}
                </div>
                <div className="pt-1 pb-1.5">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[9px] font-bold text-gray-400 tracking-wider">STEP {step.step}</span>
                  </div>
                  <h3 className="text-[13px] font-bold text-gray-900 mb-0.5">{step.title}</h3>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{step.description}</p>
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
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex items-center mb-10 last:mb-0">
                  {/* Left content */}
                  <div className={`w-[calc(50%-2.5rem)] ${isEven ? '' : 'order-3'}`}>
                    {isEven && (
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:shadow-md transition-all mr-4">
                        <span className="text-[10px] font-bold text-gray-400 tracking-wider">STEP {step.step}</span>
                        <h3 className="text-lg font-bold text-gray-900 mt-0.5 mb-1">{step.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Center icon */}
                  <div className="relative z-10 flex-shrink-0 order-2">
                    <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full ${step.color} flex items-center justify-center shadow-lg ring-4 ring-white`}>
                      <Icon className="text-white text-lg lg:text-xl" />
                    </div>
                  </div>

                  {/* Right content */}
                  <div className={`w-[calc(50%-2.5rem)] ${isEven ? 'order-3' : ''}`}>
                    {!isEven && (
                      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:shadow-md transition-all ml-4">
                        <span className="text-[10px] font-bold text-gray-400 tracking-wider">STEP {step.step}</span>
                        <h3 className="text-lg font-bold text-gray-900 mt-0.5 mb-1">{step.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-6 sm:mt-10 md:mt-14">
          <button
            type="button"
            onClick={() => openServiceEnquiry()}
            className="inline-flex items-center gap-2 rounded-xl px-6 sm:px-8 py-3 sm:py-4 btn-primary-sage text-white text-[13px] sm:text-base font-bold shadow-lg hover:shadow-xl transition-all min-h-[44px] sm:min-h-[48px]"
          >
            Start Your Journey <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

// Testimonials Component with Auto-Sliding Carousel
function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(1);

  const reviews = [
    { name: 'Sritama Bhattacharya', text: 'Quick GST registration and excellent guidance. Made the entire process hassle-free.' },
    { name: 'Afzal Hussain', text: 'Professional trademark service with complete support. Highly recommended for legal work.' },
    { name: 'Shariq Nawaz', text: 'Helped with import-export documentation smoothly. Great team and fast service.' },
    { name: 'Pooja Trivedi', text: 'Efficient visa processing and clear communication throughout. Very satisfied.' },
    { name: 'Ahmed Chowdhury', text: 'Resolved complex KMC issues quickly. Their expertise saved us time and money.' },
    { name: 'Vikram Singh', text: 'Complete support for licenses and permits. Trustworthy and professional consultants.' },
  ];


  useEffect(() => {
    const update = () => setSlidesPerView(window.innerWidth >= 1024 ? 2 : 1);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const totalPages = Math.ceil(reviews.length / slidesPerView);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev >= totalPages - 1 ? 0 : prev + 1));
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused, totalPages]);

  return (
    <section id="testimonials" className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden bg-[var(--color-3d6b56)]">
      {/* Decorative ambient glows */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-400/[0.06] rounded-full -mt-48 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[28rem] h-[28rem] bg-amber-400/[0.04] rounded-full -mb-56 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10 md:mb-12">
          <p className="text-[10px] sm:text-xs tracking-[0.2em] text-emerald-300 font-bold mb-1.5 sm:mb-3 uppercase">Client Testimonials</p>
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4 leading-tight">
            Trusted by <span className="text-amber-300">500+</span> Clients
          </h2>
          <p className="text-white/90 text-[13px] sm:text-base max-w-lg mx-auto">
            Real stories from businesses and individuals we've helped succeed.
          </p>
        </div>

        {/* Slider */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-full lg:w-1/2 flex-shrink-0 px-1.5 sm:px-3">
                  <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-7 h-full flex flex-col bg-white/[0.15] backdrop-blur-sm border border-white/[0.15] shadow-lg shadow-black/10 hover:bg-white/[0.2] transition-colors duration-300">
                    {/* Quote mark + Stars row */}
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <span className="text-2xl sm:text-4xl leading-none text-amber-400/70 font-serif select-none">&ldquo;</span>
                      <div className="flex gap-0.5">
                        {'★★★★★'.split('').map((s, i) => (
                          <span key={i} className="text-amber-400 text-xs sm:text-base">{s}</span>
                        ))}
                      </div>
                    </div>

                    {/* Quote */}
                    <p className="text-white text-[13px] sm:text-base leading-relaxed flex-grow mb-4 sm:mb-6">
                      {review.text}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-2.5 sm:gap-3 pt-3 sm:pt-4 border-t border-white/[0.15]">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-400/90 flex items-center justify-center flex-shrink-0">
                        <span className="text-[var(--color-1f3a30)] font-bold text-[10px] sm:text-sm">{review.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-white text-[13px] sm:text-base">{review.name}</p>
                        <p className="text-[10px] sm:text-[11px] text-emerald-300 flex items-center gap-1">
                          <HiCheckCircle className="text-emerald-400 text-[10px] sm:text-[11px]" /> Verified Client
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-5 sm:mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === currentSlide
                    ? 'w-8 h-2.5 bg-amber-400'
                    : 'w-2.5 h-2.5 bg-white/25 hover:bg-white/45'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 sm:mt-10 text-center">
          <button
            type="button"
            onClick={() => openServiceEnquiry()}
            className="group inline-flex items-center gap-2 rounded-xl px-5 sm:px-7 py-2.5 sm:py-3.5 bg-amber-400 hover:bg-amber-300 text-[var(--color-1f3a30)] text-[13px] sm:text-base font-bold transition-all min-h-[40px] sm:min-h-[48px]"
          >
            Start Your Success Story
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

// Final CTA Section - "Let's Start Your Transformation"
function FinalCTA() {
  interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    serviceInterest: string;
    message: string;
  }

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setSuccessMessage('');
    setErrorMessage('');
  };

  const validateForm = (): boolean => {
    if (!formData.firstName.trim()) {
      setErrorMessage('First name is required');
      return false;
    }
    if (!formData.lastName.trim()) {
      setErrorMessage('Last name is required');
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage('Email is required');
      return false;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Phone number is required');
      return false;
    }
    if (!termsAccepted) {
      setErrorMessage('Please accept Terms & Conditions and Privacy Policy');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    if (!validateForm()) {
      return;
    }

    try {
      setIsLoading(true);

      const composedMessage = [
        formData.message.trim(),
        formData.company.trim() ? `Company: ${formData.company.trim()}` : '',
      ].filter(Boolean).join('\n\n') || 'Contact enquiry from website form.';

      await submitContactEnquiry({
        fullName: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        serviceType: formData.serviceInterest.trim() || undefined,
        message: composedMessage,
      });

      setSuccessMessage('Message sent successfully! We will contact you soon.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        serviceInterest: '',
        message: '',
      });
      setTermsAccepted(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative bg-gray-50 py-8 sm:py-14 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-3 sm:px-6">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10 md:mb-12">
          <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--color-3d6b56)] font-bold mb-1.5 sm:mb-3 uppercase">Your Success Starts Here</p>
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4 leading-tight">
            Ready to Transform<br className="hidden sm:block" />
            <span className="text-[var(--color-3d6b56)]"> Your Business?</span>
          </h2>
          <div className="w-10 sm:w-16 h-1 bg-[var(--color-3d6b56)] mx-auto rounded-full mb-2 sm:mb-4" />
          <p className="text-gray-500 text-[13px] sm:text-base max-w-2xl mx-auto leading-relaxed">
            Connect with our expert consultants today. Whether you need legal guidance, financial expertise, or government compliance — we've got you covered.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {/* Contact Form — takes more space */}
          <div className="lg:col-span-3 bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-5 md:p-6 lg:p-7 shadow-sm border border-gray-100">
            <h3 className="text-[15px] sm:text-lg md:text-xl font-bold text-gray-900 mb-0.5 sm:mb-1">Get Your Free Consultation</h3>
            <p className="text-gray-400 text-[11px] sm:text-sm mb-3 sm:mb-5">Our experts will reach out within 24 hours.</p>

            {successMessage && (
              <div className="mb-4 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs sm:text-sm">
                ✓ {successMessage}
              </div>
            )}

            {errorMessage && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm">
                ✕ {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3.5">
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div>
                  <label className="block text-[11px] sm:text-sm font-medium text-gray-600 mb-0.5 sm:mb-1">First Name</label>
                  <input type="text" placeholder="Priya" name="firstName" value={formData.firstName} onChange={handleChange} required
                    className="w-full bg-white border border-gray-200 rounded-lg px-2.5 sm:px-3 py-2 sm:py-3 text-[13px] sm:text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[var(--color-3d6b56)] focus:ring-1 focus:ring-[var(--color-3d6b56)]/20 transition" />
                </div>
                <div>
                  <label className="block text-[11px] sm:text-sm font-medium text-gray-600 mb-0.5 sm:mb-1">Last Name</label>
                  <input type="text" placeholder="Sharma" name="lastName" value={formData.lastName} onChange={handleChange} required
                    className="w-full bg-white border border-gray-200 rounded-lg px-2.5 sm:px-3 py-2 sm:py-3 text-[13px] sm:text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[var(--color-3d6b56)] focus:ring-1 focus:ring-[var(--color-3d6b56)]/20 transition" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div>
                  <label className="block text-[11px] sm:text-sm font-medium text-gray-600 mb-0.5 sm:mb-1">Email Address</label>
                  <input type="email" placeholder="priya@example.com" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full bg-white border border-gray-200 rounded-lg px-2.5 sm:px-3 py-2 sm:py-3 text-[13px] sm:text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[var(--color-3d6b56)] focus:ring-1 focus:ring-[var(--color-3d6b56)]/20 transition" />
                </div>
                <div>
                  <label className="block text-[11px] sm:text-sm font-medium text-gray-600 mb-0.5 sm:mb-1">Phone Number</label>
                  <input type="tel" placeholder="+91 98765-43210" name="phone" value={formData.phone} onChange={handleChange} required
                    className="w-full bg-white border border-gray-200 rounded-lg px-2.5 sm:px-3 py-2 sm:py-3 text-[13px] sm:text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[var(--color-3d6b56)] focus:ring-1 focus:ring-[var(--color-3d6b56)]/20 transition" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div>
                  <label className="block text-[11px] sm:text-sm font-medium text-gray-600 mb-0.5 sm:mb-1">Company <span className="text-gray-300">(optional)</span></label>
                  <input type="text" placeholder="Your Company" name="company" value={formData.company} onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-lg px-2.5 sm:px-3 py-2 sm:py-3 text-[13px] sm:text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[var(--color-3d6b56)] focus:ring-1 focus:ring-[var(--color-3d6b56)]/20 transition" />
                </div>
                <div>
                  <label className="block text-[11px] sm:text-sm font-medium text-gray-600 mb-0.5 sm:mb-1">Service Interested</label>
                  <select name="serviceInterest" value={formData.serviceInterest} onChange={handleChange} required
                    className="w-full bg-white border border-gray-200 rounded-lg px-2.5 sm:px-3 py-2 sm:py-3 text-[13px] sm:text-sm text-gray-900 focus:outline-none focus:border-[var(--color-3d6b56)] focus:ring-1 focus:ring-[var(--color-3d6b56)]/20 transition">
                    <option value="">Select a service</option>
                    <option value="kolkata">Kolkata Corporation</option>
                    <option value="gst">GST & Accounting</option>
                    <option value="legal">Trade Mark & Legal</option>
                    <option value="property">Property Matters</option>
                    <option value="certificates">Certificates & IDs</option>
                    <option value="licenses">Licences</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] sm:text-sm font-medium text-gray-600 mb-0.5 sm:mb-1">Message</label>
                <textarea rows={3} placeholder="Tell us about your requirements..." name="message" value={formData.message} onChange={handleChange} required
                  className="w-full bg-white border border-gray-200 rounded-lg px-2.5 sm:px-3 py-2 sm:py-3 text-[13px] sm:text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[var(--color-3d6b56)] focus:ring-1 focus:ring-[var(--color-3d6b56)]/20 transition resize-none" />
              </div>

              <label className="flex items-start gap-2 text-[11px] sm:text-sm text-gray-500">
                <input type="checkbox" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} className="mt-0.5 rounded" />
                <span>
                  I agree to the{' '}
                  <a href="/terms-of-service" target="_blank" rel="noopener noreferrer" className="font-medium text-[var(--color-3d6b56)] underline">Terms</a>{' '}
                  and{' '}
                  <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="font-medium text-[var(--color-3d6b56)] underline">Privacy Policy</a>.
                </span>
              </label>

              <button type="submit" disabled={isLoading}
                className="w-full btn-primary-sage disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-2.5 sm:py-3.5 text-[13px] sm:text-base rounded-lg shadow-lg hover:shadow-xl transition-all min-h-[44px] sm:min-h-[48px]">
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2"><span className="animate-spin">⟳</span> Sending...</span>
                ) : (
                  <span className="flex items-center justify-center gap-2">Send Message <span>→</span></span>
                )}
              </button>
            </form>
          </div>

          {/* Sidebar — compact info */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-5">
            {/* Quick contact */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100">
              <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-3 sm:mb-4">Get in Touch Directly</h4>
              <div className="space-y-3">
                <a href="tel:+916291139691" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                    <MdPhone className="text-blue-500 text-base" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Call Us</p>
                    <p className="text-sm font-semibold text-gray-800">+91 629-113-9691</p>
                  </div>
                </a>
                <a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 transition-colors">
                    <BsWhatsapp className="text-[var(--color-25d366)] text-base" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">WhatsApp</p>
                    <p className="text-sm font-semibold text-gray-800">Chat Now</p>
                  </div>
                </a>
                <a href="mailto:hello@khanconsultants.in" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100 transition-colors">
                    <MdEmail className="text-orange-500 text-base" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Email</p>
                    <p className="text-sm font-semibold text-gray-800">hello@khanconsultants.in</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Office location */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <MdLocationOn className="text-amber-500 text-base" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">Visit Our Office</h4>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-relaxed">
                    26/1 Rafi Ahmed Kidwai Road<br />Kolkata - 700016, India
                  </p>
                </div>
              </div>
              <a href="https://maps.google.com/?q=26/1+Rafi+Ahmed+Kidwai+Road+Kolkata" target="_blank" rel="noopener noreferrer"
                className="text-[var(--color-3d6b56)] text-xs sm:text-sm font-semibold hover:underline">
                Get Directions →
              </a>
            </div>

            {/* Social */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100">
              <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-3">Follow Us</h4>
              <div className="flex gap-2">
                <a href="https://www.facebook.com/KhanConsultants2025" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-lg bg-[var(--color-1877f2)] text-white hover:opacity-90 transition-opacity">
                  <BsFacebook className="text-sm" />
                </a>
                <a href="https://www.instagram.com/khanconsultants2025/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-lg bg-gradient-to-br from-[var(--color-f58529)] via-[var(--color-dd2a7b)] to-[var(--color-8134af)] text-white hover:opacity-90 transition-opacity">
                  <BsInstagram className="text-sm" />
                </a>
                <a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-lg bg-[var(--color-25d366)] text-white hover:opacity-90 transition-opacity">
                  <BsWhatsapp className="text-sm" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { AboutSection, ProcessTimeline, Testimonials, FinalCTA };



