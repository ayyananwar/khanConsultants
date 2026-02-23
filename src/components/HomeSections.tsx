import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { HiRocketLaunch, HiUserGroup, HiCheckCircle, HiClock, HiChartBar, HiMagnifyingGlass, HiClipboardDocumentCheck, HiLightBulb, HiUser } from 'react-icons/hi2';

// Google Apps Script URL
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzMVlb0hRhjW2snEFKAEgg9-IYwX_ca2mXMQOEAPPwzJYZq6T5t7b1dpdanOr8OpXky/exec";

// About Section Component
function AboutSection() {
  return (
    <section id="about" className="py-10 sm:py-14 md:py-20 lg:py-28 px-4 sm:px-6 bg-[#3d6b56] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-white/5 rounded-full -mr-24 sm:-mr-36 -mt-24 sm:-mt-36 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-white/5 rounded-full -ml-32 sm:-ml-48 -mb-32 sm:-mb-48 blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 mb-4 sm:mb-5">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="text-[10px] sm:text-xs md:text-sm tracking-wider text-amber-300 font-semibold uppercase">About Khan Consultants</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Your Trusted Partner for
            <span className="block text-amber-300">Business Success</span>
          </h2>
          <p className="text-white/70 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            For over 50 years, Khan Consultants has been Kolkata's most trusted name in business consulting, legal services, and government compliance.
          </p>
        </div>

        {/* Why Choose Us — clean inline list */}
        <div className="space-y-4 sm:space-y-5 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-6 mb-10 sm:mb-12 md:mb-14">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <HiCheckCircle className="text-blue-400 text-base sm:text-lg" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm sm:text-base leading-tight">One-Stop Solution</h4>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed mt-0.5">Legal, financial, trade, and government—all under one roof.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <HiUserGroup className="text-emerald-400 text-base sm:text-lg" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm sm:text-base leading-tight">10,000+ Experts</h4>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed mt-0.5">Specialists across legal, financial, and trade domains.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-violet-500/20 flex items-center justify-center">
              <HiRocketLaunch className="text-violet-400 text-base sm:text-lg" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm sm:text-base leading-tight">Fast Processing</h4>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed mt-0.5">Quick turnaround times without compromising on quality.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
              <HiClock className="text-amber-400 text-base sm:text-lg" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm sm:text-base leading-tight">50+ Years Legacy</h4>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed mt-0.5">Decades of trusted service with 25+ years of KMC licensing.</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-8 sm:mb-10 md:mb-12"></div>

        {/* Stats row — minimal, no box */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-8 sm:mb-10 md:mb-12 text-center">
          <div>
            <div className="text-xl sm:text-3xl md:text-4xl font-bold text-amber-300">50+</div>
            <div className="text-[9px] sm:text-xs md:text-sm text-white/50 mt-0.5">Years Exp.</div>
          </div>
          <div>
            <div className="text-xl sm:text-3xl md:text-4xl font-bold text-amber-300">1000+</div>
            <div className="text-[9px] sm:text-xs md:text-sm text-white/50 mt-0.5">Happy Clients</div>
          </div>
          <div>
            <div className="text-xl sm:text-3xl md:text-4xl font-bold text-amber-300">25+</div>
            <div className="text-[9px] sm:text-xs md:text-sm text-white/50 mt-0.5">KMC Licensed</div>
          </div>
          <div>
            <div className="text-xl sm:text-3xl md:text-4xl font-bold text-amber-300">10K+</div>
            <div className="text-[9px] sm:text-xs md:text-sm text-white/50 mt-0.5">Local Experts</div>
          </div>
        </div>

        {/* CTA — subtle link style */}
        <div className="text-center">
          <Link
            to="/about"
            className="group inline-flex items-center gap-2.5 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-amber-300/40 text-white/90 hover:text-white text-sm sm:text-base font-semibold transition-all duration-200 min-h-[44px]"
          >
            Learn more about us
            <span className="inline-block text-amber-300 group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Process Timeline Component
function ProcessTimeline() {
  const steps = [
    { icon: HiMagnifyingGlass, title: 'Discovery', description: 'We understand your business needs and challenges through detailed consultation.', step: '01', color: 'bg-blue-500' },
    { icon: HiClipboardDocumentCheck, title: 'Assessment', description: 'Evaluate requirements, identify gaps, and plan the best approach.', step: '02', color: 'bg-emerald-500' },
    { icon: HiLightBulb, title: 'Strategy', description: 'Develop tailored solutions and actionable roadmaps for your goals.', step: '03', color: 'bg-violet-500' },
    { icon: HiRocketLaunch, title: 'Implementation', description: 'Execute with precision, managing paperwork and compliance end-to-end.', step: '04', color: 'bg-orange-500' },
    { icon: HiChartBar, title: 'Delivery', description: 'Deliver results on time with ongoing support and follow-up.', step: '05', color: 'bg-amber-500' },
  ];

  return (
    <section id="process" className="py-12 sm:py-16 md:py-24 lg:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-14">
          <div className="inline-block">
            <p className="text-xs sm:text-sm tracking-[0.2em] text-[#3d6b56] font-bold mb-3 uppercase relative">
              <span className="relative z-10 bg-white px-4">Our Process</span>
              <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></span>
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            How We Drive Success
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#3d6b56] to-[#2c4d3f] mx-auto rounded-full"></div>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-3 sm:mt-4 leading-relaxed">
            A proven five-step approach that delivers results every time.
          </p>
        </div>

        {/* Timeline - alternating cards with center line */}
        <div className="relative">
          {/* Center vertical line - desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3d6b56] via-gray-300 to-[#3d6b56] hidden md:block -translate-x-px"></div>
          {/* Left vertical line - mobile */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3d6b56] via-gray-300 to-[#3d6b56] md:hidden"></div>

          <div className="space-y-6 sm:space-y-8 md:space-y-0">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative md:flex md:items-center md:mb-12 last:md:mb-0">
                  {/* Mobile layout */}
                  <div className="md:hidden flex gap-3 sm:gap-4 items-start">
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-10 h-10 rounded-full ${step.color} flex items-center justify-center shadow-lg ring-4 ring-white`}>
                        <IconComponent className="text-white text-base" />
                      </div>
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-xl p-3.5 sm:p-4 border border-gray-100 hover:shadow-md transition-all">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] sm:text-xs font-bold tracking-wider uppercase ${step.color} text-white px-2 py-0.5 rounded-full`}>Step {step.step}</span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Desktop layout - alternating sides */}
                  <div className="hidden md:flex md:w-full md:items-center">
                    {/* Left side content */}
                    <div className={`w-[calc(50%-2rem)] ${isEven ? '' : 'order-3'}`}>
                      <div className={`bg-gray-50 rounded-2xl p-5 lg:p-6 border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 group ${isEven ? 'mr-4 text-right' : 'ml-4'}`}>
                        <div className={`flex items-center gap-2 mb-1.5 ${isEven ? 'justify-end' : ''}`}>
                          <span className={`text-xs font-bold tracking-wider uppercase ${step.color} text-white px-2.5 py-0.5 rounded-full`}>Step {step.step}</span>
                        </div>
                        <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1.5 group-hover:text-[#3d6b56] transition-colors">{step.title}</h3>
                        <p className="text-sm lg:text-base text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>

                    {/* Center icon */}
                    <div className="relative z-10 flex-shrink-0 order-2 mx-auto">
                      <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-full ${step.color} flex items-center justify-center shadow-xl ring-4 ring-white`}>
                        <IconComponent className="text-white text-xl lg:text-2xl" />
                      </div>
                    </div>

                    {/* Right side (empty or content) */}
                    <div className={`w-[calc(50%-2rem)] ${isEven ? 'order-3' : ''}`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-10 md:mt-14">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl px-8 sm:px-10 py-3.5 sm:py-4 bg-[#3d6b56] hover:bg-[#2c4d3f] text-white text-sm sm:text-base md:text-lg font-bold hover:shadow-xl transition-all duration-300 shadow-lg active:scale-[0.98] min-h-[48px]"
          >
            Start Your Journey <span>→</span>
          </Link>
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
    {
      name: 'Sritama Bhattacharya',
      text: 'Quick GST registration and excellent guidance. Made the entire process hassle-free.',
    },
    {
      name: 'Afzal Hussain',
      text: 'Professional trademark service with complete support. Highly recommended for legal work.',
    },
    {
      name: 'Shariq Nawaz',
      text: 'Helped with import-export documentation smoothly. Great team and fast service.',
    },
    {
      name: 'Pooja Trivedi',
      text: 'Efficient visa processing and clear communication throughout. Very satisfied.',
    },
    {
      name: 'Ahmed Chowdhury',
      text: 'Resolved complex KMC issues quickly. Their expertise saved us time and money.',
    },
    {
      name: 'Vikram Singh',
      text: 'Complete support for licenses and permits. Trustworthy and professional consultants.',
    },
  ];

  // Update slides per view based on screen size
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      const maxSlide = Math.ceil(reviews.length / slidesPerView) - 1;
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isPaused, reviews.length, slidesPerView]);

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#3d6b56]">
      <div className="max-w-6xl mx-auto">
        {/* Professional Header - Compact */}
        <div className="text-center mb-7 sm:mb-9 md:mb-10">
          <div className="inline-block">
            <p className="text-xs sm:text-sm tracking-[0.2em] text-amber-300 font-bold mb-3 uppercase relative">
              <span className="relative z-10 bg-[#3d6b56] px-4">Client Testimonials</span>
              <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
            What Our Clients Say
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full"></div>
        </div>

        {/* Testimonial Slider - Mobile First */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-xl sm:rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div 
                  key={index} 
                  className="w-full lg:w-1/2 flex-shrink-0 px-1.5 sm:px-2"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20 shadow-lg h-full flex flex-col">

                    
                    {/* Quote Text - Clean on white */}
                    <p className="text-white/90 text-sm sm:text-base font-normal text-left mb-4 sm:mb-5 leading-relaxed flex-grow italic">
                      "{review.text}"
                    </p>
                    
                    {/* Author Info - Clean */}
                    <div className="flex items-center gap-3 pt-3.5 border-t border-white/15">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0 shadow-sm">
                        <HiUser className="text-[#3d6b56] text-base sm:text-lg" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm sm:text-base font-bold text-white leading-tight">{review.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 sm:mt-10 md:mt-12 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 text-center shadow-lg border border-white/20">
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2.5 sm:mb-3 leading-tight text-white">
              Join 500+ Satisfied Clients
            </h3>
            <p className="text-white/80 text-sm sm:text-base md:text-lg mb-4 sm:mb-5 max-w-2xl mx-auto leading-relaxed">
              Experience the Khan Consultants difference and transform your business today.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 rounded-lg px-5 sm:px-6 py-3 bg-amber-400 hover:bg-amber-300 text-[#1f3a30] text-sm sm:text-base font-semibold transition-colors duration-200 min-h-[44px]"
            >
              <span>Start Your Success Story</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
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

      const newFormData = new FormData();
      newFormData.append('name', `${formData.firstName} ${formData.lastName}`);
      newFormData.append('email', formData.email);
      newFormData.append('phone', formData.phone);
      newFormData.append('company', formData.company);
      newFormData.append('serviceInterest', formData.serviceInterest);
      newFormData.append('message', formData.message);

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: newFormData,
      });

      if (response) {
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
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative bg-white overflow-hidden py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <p className="text-[10px] sm:text-xs md:text-sm tracking-widest text-[#3d6b56] font-bold mb-2 sm:mb-3 md:mb-4 uppercase">Your Success Starts Here</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight">
            Ready to Transform
            <br className="hidden sm:block" />
            <span className="text-[#3d6b56]"> Your Business?</span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
            Connect with our expert consultants today. Whether you need legal guidance, financial expertise, or government compliance—we've got you covered.
          </p>
        </div>

        {/* Quick Action Buttons - Compact icon style */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <a href="tel:+916291139691" className="group flex flex-col items-center gap-1.5" title="Call Us">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all group-hover:scale-110 group-hover:-translate-y-1">
              <MdPhone className="text-white text-xl sm:text-2xl" />
            </div>
            <span className="text-[10px] sm:text-xs text-gray-500 font-medium">Call</span>
          </a>
          <a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-1.5" title="WhatsApp">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] flex items-center justify-center shadow-lg hover:shadow-xl transition-all group-hover:scale-110 group-hover:-translate-y-1">
              <BsWhatsapp className="text-white text-xl sm:text-2xl" />
            </div>
            <span className="text-[10px] sm:text-xs text-gray-500 font-medium">WhatsApp</span>
          </a>
          <a href="mailto:hello@khanconsultants.in" className="group flex flex-col items-center gap-1.5" title="Email Us">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all group-hover:scale-110 group-hover:-translate-y-1">
              <MdEmail className="text-white text-xl sm:text-2xl" />
            </div>
            <span className="text-[10px] sm:text-xs text-gray-500 font-medium">Email</span>
          </a>
          <a href="https://maps.google.com/?q=26/1+Rafi+Ahmed+Kidwai+Road+Kolkata" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-1.5" title="Visit Us">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-amber-500 hover:bg-amber-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all group-hover:scale-110 group-hover:-translate-y-1">
              <MdLocationOn className="text-white text-xl sm:text-2xl" />
            </div>
            <span className="text-[10px] sm:text-xs text-gray-500 font-medium">Visit</span>
          </a>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {/* Contact Form */}
          <div className="order-1 lg:order-1 bg-gray-50 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 shadow-lg border border-gray-200">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">Get Your Free Consultation</h3>
            <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-5 md:mb-6">Fill the form below and our experts will reach out within 24 hours.</p>

            {successMessage && (
              <div className="mb-4 sm:mb-5 md:mb-6 p-3 sm:p-4 md:p-5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs sm:text-sm">
                ✓ {successMessage}
              </div>
            )}

            {errorMessage && (
              <div className="mb-4 sm:mb-5 md:mb-6 p-3 sm:p-4 md:p-5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm">
                ✕ {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                <div>
                  <label className="block text-[10px] sm:text-xs md:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5 md:mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="Priya"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#3d6b56] focus:ring-1 focus:ring-[#3d6b56]/30 transition"
                  />
                </div>
                <div>
                  <label className="block text-[10px] sm:text-xs md:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5 md:mb-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Sharma"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#3d6b56] focus:ring-1 focus:ring-[#3d6b56]/30 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs md:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5 md:mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="priya.sharma@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#3d6b56] focus:ring-1 focus:ring-[#3d6b56]/30 transition"
                />
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs md:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5 md:mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 98765-43210"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#3d6b56] focus:ring-1 focus:ring-[#3d6b56]/30 transition"
                />
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                <div>
                  <label className="block text-[10px] sm:text-xs md:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5 md:mb-2">Company Name</label>
                  <input
                    type="text"
                    placeholder="Your Company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#3d6b56] focus:ring-1 focus:ring-[#3d6b56]/30 transition"
                  />
                </div>
                <div>
                  <label className="block text-[10px] sm:text-xs md:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5 md:mb-2">Service Interested</label>
                  <select
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[#3d6b56] focus:ring-1 focus:ring-[#3d6b56]/30 transition"
                  >
                    <option value="">Select a service</option>
                    <option value="legal">Trade Mark & Legal</option>
                    <option value="gst">GST & Accounting</option>
                    <option value="import-export">Import & Export</option>
                    <option value="visas">Visas & Immigration</option>
                    <option value="kolkata">Kolkata Corporation</option>
                    <option value="government-ids">Government IDs</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs md:text-sm font-semibold text-gray-700 mb-1 sm:mb-1.5 md:mb-2">Message</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your requirements..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#3d6b56] focus:ring-1 focus:ring-[#3d6b56]/30 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#3d6b56] hover:bg-[#2c4d3f] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-3 sm:py-3.5 md:py-4 text-sm sm:text-base rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl disabled:shadow-none"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin">⟳</span> Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Start Your Journey <span>→</span>
                  </span>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information Cards */}
          <div className="order-2 lg:order-2 space-y-3 sm:space-y-4 md:space-y-5">
            {/* Main CTA Card */}
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 shadow-lg hover:shadow-xl transition-all border border-gray-200">
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4 md:mb-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-[#3d6b56] flex items-center justify-center flex-shrink-0">
                  <span className="text-lg sm:text-xl md:text-2xl">⚡</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Why Choose Khan Consultants?</h4>
                  <p className="text-gray-500 text-xs sm:text-sm mt-0.5 sm:mt-1">500+ satisfied clients across India.</p>
                </div>
              </div>
              <ul className="space-y-2 sm:space-y-2.5 md:space-y-3 text-gray-700 text-xs sm:text-sm">
                <li className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                  <span className="text-[#3d6b56] font-bold text-base sm:text-lg flex-shrink-0">✓</span>
                  <span>Expert consultants with 15+ years experience.</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                  <span className="text-[#3d6b56] font-bold text-base sm:text-lg flex-shrink-0">✓</span>
                  <span>Complete end-to-end support & guidance.</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                  <span className="text-[#3d6b56] font-bold text-base sm:text-lg flex-shrink-0">✓</span>
                  <span>24/7 availability for urgent queries.</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                  <span className="text-[#3d6b56] font-bold text-base sm:text-lg flex-shrink-0">✓</span>
                  <span>Proven track record of success.</span>
                </li>
              </ul>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
              <a href="tel:+916291139691" className="group bg-gray-50 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 hover:bg-gray-100 transition-all hover:shadow-md border border-gray-200">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                  <MdPhone className="text-white text-lg sm:text-xl" />
                </div>
                <h5 className="font-bold text-gray-900 text-xs sm:text-sm mb-0.5 sm:mb-1">Call Us</h5>
                <p className="text-[10px] sm:text-xs text-gray-500">Immediate assistance</p>
              </a>

              <a href="mailto:hello@khanconsultants.in" className="group bg-gray-50 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 hover:bg-gray-100 transition-all hover:shadow-md border border-gray-200">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-orange-500 flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                  <MdEmail className="text-white text-lg sm:text-xl" />
                </div>
                <h5 className="font-bold text-gray-900 text-xs sm:text-sm mb-0.5 sm:mb-1">Email</h5>
                <p className="text-[10px] sm:text-xs text-gray-500">Within 24 hours</p>
              </a>
            </div>

            {/* Location & Hours Card */}
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-7 border border-gray-200">
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4 md:mb-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-amber-500 flex items-center justify-center flex-shrink-0">
                  <MdLocationOn className="text-white text-lg sm:text-xl" />
                </div>
                <div className="flex-1">
                  <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-2 sm:mb-3">Visit Our Office</h5>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    26/1 Rafi Ahmed Kidwai Road<br />
                    Kolkata - 700016, India
                  </p>
                </div>
              </div>
              <a href="https://maps.google.com/?q=26/1+Rafi+Ahmed+Kidwai+Road+Kolkata" target="_blank" rel="noopener noreferrer" className="inline-block text-[#3d6b56] hover:text-[#2c4d3f] text-xs sm:text-sm font-semibold transition">
                Get Directions →
              </a>
            </div>

            {/* Social Links Card */}
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-7 border border-gray-200">
              <h5 className="font-bold text-gray-900 text-sm sm:text-base mb-3 sm:mb-4">Follow Us</h5>
              <div className="flex gap-2 sm:gap-3 flex-wrap">
                <a href="https://www.facebook.com/KhanConsultants2025" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center rounded-lg bg-[#1877f2] hover:bg-[#0f6ae6] text-white hover:scale-110 transition-transform shadow-md">
                  <BsFacebook className="text-base sm:text-lg" />
                </a>
                <a href="https://www.instagram.com/khanconsultants2025/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white hover:scale-110 transition-transform shadow-md">
                  <BsInstagram className="text-base sm:text-lg" />
                </a>
                <a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center rounded-lg bg-[#25D366] hover:bg-[#1ebe5d] text-white hover:scale-110 transition-transform shadow-md">
                  <BsWhatsapp className="text-base sm:text-lg" />
                </a>
                <a href="mailto:hello@khanconsultants.in" className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center rounded-lg bg-[#ea4335] hover:bg-[#d93025] text-white hover:scale-110 transition-transform shadow-md">
                  <MdEmail className="text-base sm:text-lg" />
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



