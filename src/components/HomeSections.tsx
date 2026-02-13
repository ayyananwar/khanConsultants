import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { HiRocketLaunch, HiUserGroup, HiCheckCircle, HiClock, HiChartBar, HiMagnifyingGlass, HiClipboardDocumentCheck, HiLightBulb, HiUser, HiChevronLeft, HiChevronRight, HiDocumentText, HiHomeModern, HiBuildingOffice2 } from 'react-icons/hi2';
import { FaBalanceScale, FaFileInvoiceDollar, FaShippingFast, FaPassport } from 'react-icons/fa';

// Google Apps Script URL
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzMVlb0hRhjW2snEFKAEgg9-IYwX_ca2mXMQOEAPPwzJYZq6T5t7b1dpdanOr8OpXky/exec";

// About Section Component
function AboutSection() {
  const values = [
    { title: 'Legal Excellence', description: 'Expert guidance in trademark, company formation & legal matters' },
    { title: 'Financial Expertise', description: 'Complete GST, accounting & tax compliance solutions' },
    { title: 'Global Reach', description: 'International trade, visas & immigration services' },
    { title: 'Client Success', description: 'Trusted by 500+ businesses for their growth journey' },
  ];


  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-[#517358]">
      <div className="max-w-7xl mx-auto">
        {/* Professional Header - Compact */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-block">
            <p className="text-xs sm:text-sm tracking-[0.2em] text-white font-bold mb-3 uppercase relative">
              <span className="relative z-10 bg-[#517358] px-4">About Khan Consultants</span>
              <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#53785b]/30 to-transparent"></span>
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-3 sm:mb-4 leading-tight">
            Your Trusted Partner for Business Success
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mb-6 sm:mb-8 rounded-full"></div>
        </div>

        {/* Core Values Grid - Mobile Optimized */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5 mb-10 sm:mb-12">
          {values.map((value, index) => {
            return (
              <div key={index} className="group  border border-emerald-400/20 shadow-lg rounded-2xl p-4 sm:p-5 md:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1))' }}>
                <h4 className="font-bold text-[#b3e5c2] text-base sm:text-lg mb-2">{value.title}</h4>
                <p className="text-white text-sm sm:text-base leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us - Mobile Optimized */}
        <div className="border border-emerald-400/20 shadow-2xl hover:shadow-3xl rounded-3xl p-8 sm:p-10 md:p-14 lg:p-16 transition-all duration-300" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1))' }}>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6 sm:mb-8 leading-tight">
                Why Choose Khan Consultants?
              </h3>
              <div className="space-y-5 sm:space-y-6">
                <div className="flex gap-4 sm:gap-5 items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HiCheckCircle className="text-white text-xl sm:text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#b3e5c2] text-lg sm:text-xl mb-2">One-Stop Solution</h4>
                    <p className="text-white text-base sm:text-lg leading-relaxed">All services—legal, financial, trade, and government—under one roof</p>
                  </div>
                </div>
                <div className="flex gap-4 sm:gap-5 items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HiUserGroup className="text-white text-xl sm:text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#b3e5c2] text-lg sm:text-xl mb-2">Expert Team</h4>
                    <p className="text-white text-base sm:text-lg leading-relaxed">1000+ experts across legal, financial, and trade domains</p>
                  </div>
                </div>
                <div className="flex gap-4 sm:gap-5 items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HiRocketLaunch className="text-white text-xl sm:text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#b3e5c2] text-lg sm:text-xl mb-2">Fast Processing</h4>
                    <p className="text-white text-base sm:text-lg leading-relaxed">Quick turnaround times without compromising on quality</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className=" rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-7 lg:p-9 border border-emerald-400/20 shadow-lg hover:shadow-xl transition-all" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1))' }}>
              <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#b3e5c2] mb-3 sm:mb-4 md:mb-5 lg:mb-6">Our Services Include:</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                {[
                  { icon: HiBuildingOffice2, text: 'Kolkata Corp', color: '#2563eb', path: '/services/kolkata-corporation' },
                  { icon: HiDocumentText, text: 'Certificates', color: '#14b8a6', path: '/services/certificates' },
                  { icon: HiClipboardDocumentCheck, text: 'Licenses', color: '#6366f1', path: '/services/licenses' },
                  { icon: HiHomeModern, text: 'Property', color: '#f59e0b', path: '/services/property' },
                  { icon: FaBalanceScale, text: 'Legal', color: '#7c3aed', path: '/services/legal' },
                  { icon: FaFileInvoiceDollar, text: 'GST', color: '#059669', path: '/services/gst-accounting' },
                  { icon: FaShippingFast, text: 'Import/Export', color: '#dc2626', path: '/services/import-export' },
                  { icon: FaPassport, text: 'Visas', color: '#ea580c', path: '/services/visas-immigration' },
                ].map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <Link key={idx} to={service.path} className="flex flex-col items-center gap-2  border border-emerald-400/20 rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-3.5 lg:p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer group no-underline" style={{ background: 'linear-gradient(135deg, #b3e5c2, #b3e5c2)' }}>
                      <Icon className="text-lg sm:text-xl md:text-2xl lg:text-3xl group-hover:scale-110 transition-transform" style={{ color: service.color }} />
                      <span className="text-[11px] sm:text-xs md:text-sm lg:text-base text-[#2c4d3f] font-bold text-center leading-tight">{service.text}</span>
                    </Link>
                  );
                })}
              </div>
              <Link 
                to="/contact" 
                className="block text-center rounded-lg sm:rounded-xl px-4 sm:px-6 md:px-7 lg:px-8 py-2.5 sm:py-3 md:py-3.5 lg:py-4 bg-gradient-to-r from-[#10b981] to-[#14b8a6] text-white text-xs sm:text-sm md:text-base lg:text-lg font-bold hover:shadow-xl hover:scale-[1.02] transition-all duration-300 shadow-lg active:scale-[0.98]"
              >
                Get Started Today →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const industries = [
    { title: 'Financial Services', subtitle: 'Banking, Insurance & Investment' },
    { title: 'Healthcare', subtitle: 'Medical & Pharmaceutical' },
    { title: 'Technology', subtitle: 'Software & IT Services' },
    { title: 'Retail', subtitle: 'E-commerce & Consumer Goods' },
    { title: 'Manufacturing', subtitle: 'Industrial & Production' },
    { title: 'Education', subtitle: 'Academic & E-learning' },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Professional Header - Compact */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-block">
            <p className="text-xs sm:text-sm tracking-[0.2em] text-[#53785b] font-bold mb-3 uppercase relative">
              <span className="relative z-10 bg-white px-4">Industry Expertise</span>
              <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#53785b]/30 to-transparent"></span>
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2c4d3f] mb-3 sm:mb-4 leading-tight">
            Serving Diverse Industries
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#53785b] to-[#2c4d3f] mx-auto mb-6 sm:mb-8 rounded-full"></div>
        </div>

        {/* Industries Grid - Mobile First */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-10 sm:mb-14">
          {industries.map((item, index) => (
            <div key={index} className="border border-[#d6fadc] rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 bg-gradient-to-br from-[#f8fdf9] to-[#e8f5e9] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#2c4d3f] mb-1 sm:mb-2">{item.title}</p>
              <p className="text-[11px] sm:text-xs md:text-sm text-[#53785b] leading-relaxed">{item.subtitle}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[#53785b] to-[#2c4d3f] text-white rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-center shadow-xl">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">Don't See Your Industry?</h3>
          <p className="text-white/85 text-sm sm:text-base md:text-lg mb-5 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
            Our adaptable methodologies and diverse expertise allow us to serve clients across virtually any sector. Let's discuss how we can help your business thrive.
          </p>
          <Link to="/contact" className="inline-block rounded-lg sm:rounded-xl px-6 sm:px-8 py-3 sm:py-4 bg-[#d6fadc] text-[#53785b] text-sm sm:text-base font-bold hover:bg-white hover:shadow-lg transition-all duration-300">
            Contact Us Today →
          </Link>
        </div>
      </div>
    </section>
  );
}

// Process Timeline Component
function ProcessTimeline() {
  const steps = [
    { icon: HiMagnifyingGlass, title: 'Discovery', description: 'Deep dive into your business, challenges, and objectives through comprehensive analysis.', color: 'bg-gradient-to-br from-blue-600 to-blue-700' },
    { icon: HiClipboardDocumentCheck, title: 'Assessment', description: 'Evaluate current state, identify gaps, and benchmark against industry standards.', color: 'bg-gradient-to-br from-emerald-600 to-emerald-700' },
    { icon: HiLightBulb, title: 'Strategy', description: 'Develop tailored solutions and actionable roadmaps aligned with your goals.', color: 'bg-gradient-to-br from-teal-600 to-teal-700' },
    { icon: HiRocketLaunch, title: 'Implementation', description: 'Execute strategies with precision, managing change and ensuring adoption.', color: 'bg-gradient-to-br from-green-600 to-green-700' },
    { icon: HiChartBar, title: 'Optimization', description: 'Monitor performance, measure results, and continuously improve outcomes.', color: 'bg-gradient-to-br from-cyan-600 to-teal-600' },
  ];

  const benefits = [
    { icon: HiClock, title: 'Efficient Timeline', description: 'Streamlined processes ensure rapid deployment while maintaining quality standards.', color: 'text-sage-600' },
    { icon: HiUserGroup, title: 'Collaborative Approach', description: 'Work closely with your team to ensure alignment and knowledge transfer.', color: 'text-sage-700' },
    { icon: HiCheckCircle, title: 'Quality Assurance', description: 'Rigorous validation ensures deliverables meet the highest standards.', color: 'text-sage-600' },
  ];

  return (
    <section id="process" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-[#517358]">
      <div className="max-w-7xl mx-auto">
        {/* Professional Header - Compact */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-block">
            <p className="text-xs sm:text-sm tracking-[0.2em] text-white font-bold mb-3 uppercase relative">
              <span className="relative z-10 bg-[#517358] px-4">Our Process</span>
              <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#53785b]/30 to-transparent"></span>
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-3 sm:mb-4 leading-tight">
            How We Drive Success
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mb-6 sm:mb-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-12 sm:mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="border border-emerald-400/20 shadow-lg rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col h-full" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1))' }}>
                <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full ${step.color} text-white flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="text-lg sm:text-xl md:text-2xl" />
                </div>
                <h3 className="text-[11px] sm:text-xs md:text-sm lg:text-base font-bold text-[#b3e5c2] mb-1 sm:mb-2 leading-tight">{step.title}</h3>
                <p className="text-[10px] sm:text-[11px] md:text-xs text-white leading-relaxed flex-grow">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          {benefits.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="border border-emerald-400/20 shadow-lg rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col h-full" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.1))' }}>
                <IconComponent className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mx-auto mb-2 sm:mb-3 md:mb-4 text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#b3e5c2] mb-1 sm:mb-2 leading-tight">{item.title}</h4>
                <p className="text-[10px] sm:text-[11px] md:text-sm text-white leading-relaxed flex-grow">{item.description}</p>
              </div>
            );
          })}
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
      name: 'Priya Sharma',
      company: 'Startup Founder',
      text: 'Quick GST registration and excellent guidance. Made the entire process hassle-free.',
    },
    {
      name: 'Rajesh Kumar',
      company: 'Business Owner',
      text: 'Professional trademark service with complete support. Highly recommended for legal work.',
    },
    {
      name: 'Anjali Desai',
      company: 'Export Business',
      text: 'Helped with import-export documentation smoothly. Great team and fast service.',
    },
    {
      name: 'Arjun Patel',
      company: 'Tech Company',
      text: 'Efficient visa processing and clear communication throughout. Very satisfied.',
    },
    {
      name: 'Neha Gupta',
      company: 'Retail Business',
      text: 'Resolved complex KMC issues quickly. Their expertise saved us time and money.',
    },
    {
      name: 'Vikram Singh',
      company: 'Restaurant Owner',
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

  const maxSlide = Math.ceil(reviews.length / slidesPerView) - 1;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };


  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Professional Header - Compact */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-block">
            <p className="text-xs sm:text-sm tracking-[0.2em] text-[#53785b] font-bold mb-3 uppercase relative">
              <span className="relative z-10 bg-white px-4">Client Testimonials</span>
              <span className="absolute left-0 right-0 top-1/2 h-px bg-white to-transparent"></span>
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2c4d3f] mb-3 sm:mb-4 leading-tight">
            What Our Clients Say
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#53785b] to-[#2c4d3f] mx-auto mb-3 sm:mb-4 rounded-full"></div>
        </div>

        {/* Testimonial Slider - Mobile First */}
        <div 
          className="relative px-8 sm:px-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div 
                  key={index} 
                  className="w-full lg:w-1/2 flex-shrink-0 p-2 sm:p-3"
                >
                  <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#e8f5e9] h-full flex flex-col group relative">

                    
                    {/* Quote Text - Compact */}
                    <p className="text-[#2c4d3f] text-sm sm:text-base font-normal text-left mb-4 sm:mb-5 leading-relaxed flex-grow pl-1">
                      {review.text}
                    </p>
                    
                    {/* Author Info - Compact */}
                    <div className="flex items-center gap-3 pt-4 border-t border-[#e8f5e9] pl-1">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#53785b] to-[#2c4d3f] flex items-center justify-center flex-shrink-0 shadow-md">
                        <HiUser className="text-white text-base sm:text-lg" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm sm:text-base font-bold text-[#2c4d3f] leading-tight">{review.name}</p>
                        <p className="text-xs sm:text-sm text-[#53785b]">{review.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Outside the overflow container */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-[#2c4d3f] text-[#2c4d3f] hover:text-white rounded-full p-2 sm:p-2.5 shadow-xl hover:shadow-2xl transition-all duration-300 z-30 border-2 border-[#e8f5e9] hover:border-[#2c4d3f]"
            aria-label="Previous testimonial"
          >
            <HiChevronLeft className="text-lg sm:text-xl" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-[#2c4d3f] text-[#2c4d3f] hover:text-white rounded-full p-2 sm:p-2.5 shadow-xl hover:shadow-2xl transition-all duration-300 z-30 border-2 border-[#e8f5e9] hover:border-[#2c4d3f]"
            aria-label="Next testimonial"
          >
            <HiChevronRight className="text-lg sm:text-xl" />
          </button>
        </div>

        {/* CTA Section - Professional Design */}
        <div className="mt-10 sm:mt-12 bg-gradient-to-r from-[#2c4d3f] via-[#53785b] to-[#2c4d3f] text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 text-center shadow-2xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
          
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
              Join 500+ Satisfied Clients
            </h3>
            <p className="text-white/90 text-sm sm:text-base md:text-lg mb-5 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
              Experience the Khan Consultants difference and transform your business today
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 rounded-lg sm:rounded-xl px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#2c4d3f] text-sm sm:text-base font-bold hover:bg-[#d6fadc] hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl"
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
    <section className="relative bg-gradient-to-br from-[#1a2d23] via-[#2c4d3f] to-[#1f3a2f] overflow-hidden py-12 sm:py-16 md:py-20 lg:py-28">
      {/* Decorative gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 -right-32 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-32 w-96 h-96 bg-gradient-to-tr from-teal-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <p className="text-[10px] sm:text-xs md:text-sm tracking-widest text-emerald-400 font-bold mb-2 sm:mb-3 md:mb-4 uppercase">Your Success Starts Here</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight">
            Ready to Transform
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Your Business?</span>
          </h2>
          <p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
            Connect with our expert consultants today. Whether you need legal guidance, financial expertise, or government compliance—we've got you covered.
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <a href="tel:+916291139691" className="group bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 text-center transition-all hover:shadow-2xl hover:shadow-blue-500/20 shadow-lg border border-blue-500/20">
            <MdPhone className="text-2xl sm:text-3xl md:text-4xl text-white mx-auto mb-1 sm:mb-2 md:mb-3 group-hover:-translate-y-1 transition-transform" />
            <p className="text-[10px] sm:text-xs md:text-sm text-white font-bold">Call Us</p>
            <p className="text-[9px] sm:text-[10px] md:text-xs text-blue-100 mt-0.5 sm:mt-1">+91-6291-139-691</p>
          </a>
          <a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-br from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 text-center transition-all hover:shadow-2xl hover:shadow-green-500/20 shadow-lg border border-green-500/20">
            <BsWhatsapp className="text-2xl sm:text-3xl md:text-4xl text-white mx-auto mb-1 sm:mb-2 md:mb-3 group-hover:-translate-y-1 transition-transform" />
            <p className="text-[10px] sm:text-xs md:text-sm text-white font-bold">WhatsApp</p>
            <p className="text-[9px] sm:text-[10px] md:text-xs text-green-100 mt-0.5 sm:mt-1">Quick Chat</p>
          </a>
          <a href="mailto:hello@khanconsultants.in" className="group bg-gradient-to-br from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 text-center transition-all hover:shadow-2xl hover:shadow-orange-500/20 shadow-lg border border-orange-500/20">
            <MdEmail className="text-2xl sm:text-3xl md:text-4xl text-white mx-auto mb-1 sm:mb-2 md:mb-3 group-hover:-translate-y-1 transition-transform" />
            <p className="text-[10px] sm:text-xs md:text-sm text-white font-bold">Email Us</p>
            <p className="text-[9px] sm:text-[10px] md:text-xs text-orange-100 mt-0.5 sm:mt-1">hello@khan...</p>
          </a>
          <a href="https://maps.google.com/?q=26/1+Rafi+Ahmed+Kidwai+Road+Kolkata" target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-br from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 text-center transition-all hover:shadow-2xl hover:shadow-amber-500/20 shadow-lg border border-amber-500/20">
            <MdLocationOn className="text-2xl sm:text-3xl md:text-4xl text-white mx-auto mb-1 sm:mb-2 md:mb-3 group-hover:-translate-y-1 transition-transform" />
            <p className="text-[10px] sm:text-xs md:text-sm text-white font-bold">Visit Us</p>
            <p className="text-[9px] sm:text-[10px] md:text-xs text-amber-100 mt-0.5 sm:mt-1">Kolkata Office</p>
          </a>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {/* Contact Form */}
          <div className="order-2 lg:order-1 bg-gradient-to-br from-white/10 to-white/[0.05] backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 shadow-2xl border border-white/20">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">Get Your Free Consultation</h3>
            <p className="text-white/70 text-xs sm:text-sm mb-4 sm:mb-5 md:mb-6">Fill the form below and our experts will reach out within 24 hours</p>

            {successMessage && (
              <div className="mb-4 sm:mb-5 md:mb-6 p-3 sm:p-4 md:p-5 rounded-lg bg-emerald-500/20 border border-emerald-400/50 text-emerald-100 text-xs sm:text-sm backdrop-blur-sm">
                ✓ {successMessage}
              </div>
            )}

            {errorMessage && (
              <div className="mb-4 sm:mb-5 md:mb-6 p-3 sm:p-4 md:p-5 rounded-lg bg-red-500/20 border border-red-400/50 text-red-100 text-xs sm:text-sm backdrop-blur-sm">
                ✕ {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                <div>
                  <label className="block text-[10px] sm:text-xs md:text-sm font-semibold text-white/90 mb-1 sm:mb-1.5 md:mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="Priya"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm text-white placeholder-white/50 focus:outline-none focus:border-emerald-400/50 focus:bg-white/15 focus:ring-1 focus:ring-emerald-400/30 transition backdrop-blur-sm"
                  />
                </div>
                <div>
                  <label className="block text-[10px] sm:text-xs md:text-sm font-semibold text-white/90 mb-1 sm:mb-1.5 md:mb-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Sharma"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm text-white placeholder-white/50 focus:outline-none focus:border-emerald-400/50 focus:bg-white/15 focus:ring-1 focus:ring-emerald-400/30 transition backdrop-blur-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs md:text-sm font-semibold text-white/90 mb-1 sm:mb-1.5 md:mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="priya.sharma@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm text-white placeholder-white/50 focus:outline-none focus:border-emerald-400/50 focus:bg-white/15 focus:ring-1 focus:ring-emerald-400/30 transition backdrop-blur-sm"
                />
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs md:text-sm font-semibold text-white/90 mb-1 sm:mb-1.5 md:mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 98765-43210"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm text-white placeholder-white/50 focus:outline-none focus:border-emerald-400/50 focus:bg-white/15 focus:ring-1 focus:ring-emerald-400/30 transition backdrop-blur-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                <div>
                  <label className="block text-[10px] sm:text-xs md:text-sm font-semibold text-white/90 mb-1 sm:mb-1.5 md:mb-2">Company Name</label>
                  <input
                    type="text"
                    placeholder="Your Company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm text-white placeholder-white/50 focus:outline-none focus:border-emerald-400/50 focus:bg-white/15 focus:ring-1 focus:ring-emerald-400/30 transition backdrop-blur-sm"
                  />
                </div>
                <div>
                  <label className="block text-[10px] sm:text-xs md:text-sm font-semibold text-white/90 mb-1 sm:mb-1.5 md:mb-2">Service Interested</label>
                  <select
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-400/50 focus:bg-white/15 focus:ring-1 focus:ring-emerald-400/30 transition backdrop-blur-sm"
                  >
                    <option value="" className="bg-slate-900">Select a service</option>
                    <option value="legal" className="bg-slate-900">Trade Mark & Legal</option>
                    <option value="gst" className="bg-slate-900">GST & Accounting</option>
                    <option value="import-export" className="bg-slate-900">Import & Export</option>
                    <option value="visas" className="bg-slate-900">Visas & Immigration</option>
                    <option value="kolkata" className="bg-slate-900">Kolkata Corporation</option>
                    <option value="government-ids" className="bg-slate-900">Government IDs</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs md:text-sm font-semibold text-white/90 mb-1 sm:mb-1.5 md:mb-2">Message</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your requirements..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm text-white placeholder-white/50 focus:outline-none focus:border-emerald-400/50 focus:bg-white/15 focus:ring-1 focus:ring-emerald-400/30 transition resize-none backdrop-blur-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-bold py-3 sm:py-3.5 md:py-4 text-sm sm:text-base rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-emerald-500/50 disabled:shadow-none"
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
          <div className="order-1 lg:order-2 space-y-3 sm:space-y-4 md:space-y-5">
            {/* Main CTA Card */}
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 border border-emerald-400/30 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4 md:mb-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg sm:text-xl md:text-2xl">⚡</span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base md:text-lg">Why Choose Khan Consultants?</h4>
                  <p className="text-emerald-100 text-xs sm:text-sm mt-0.5 sm:mt-1">500+ satisfied clients across India</p>
                </div>
              </div>
              <ul className="space-y-2 sm:space-y-2.5 md:space-y-3 text-white/90 text-xs sm:text-sm">
                <li className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                  <span className="text-emerald-400 font-bold text-base sm:text-lg flex-shrink-0">✓</span>
                  <span>Expert consultants with 15+ years experience</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                  <span className="text-emerald-400 font-bold text-base sm:text-lg flex-shrink-0">✓</span>
                  <span>Complete end-to-end support & guidance</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                  <span className="text-emerald-400 font-bold text-base sm:text-lg flex-shrink-0">✓</span>
                  <span>24/7 availability for urgent queries</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-2.5 md:gap-3">
                  <span className="text-emerald-400 font-bold text-base sm:text-lg flex-shrink-0">✓</span>
                  <span>Proven track record of success</span>
                </li>
              </ul>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
              <a href="tel:+916291139691" className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 hover:from-white/20 hover:to-white/10 transition-all hover:shadow-lg border border-white/20 hover:border-blue-400/50">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                  <MdPhone className="text-white text-lg sm:text-xl" />
                </div>
                <h5 className="font-bold text-white text-xs sm:text-sm mb-0.5 sm:mb-1">Call Us</h5>
                <p className="text-[10px] sm:text-xs text-white/70">Immediate assistance</p>
              </a>

              <a href="mailto:hello@khanconsultants.in" className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 hover:from-white/20 hover:to-white/10 transition-all hover:shadow-lg border border-white/20 hover:border-orange-400/50">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-orange-600 flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                  <MdEmail className="text-white text-lg sm:text-xl" />
                </div>
                <h5 className="font-bold text-white text-xs sm:text-sm mb-0.5 sm:mb-1">Email</h5>
                <p className="text-[10px] sm:text-xs text-white/70">Within 24 hours</p>
              </a>
            </div>

            {/* Location & Hours Card */}
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-7 border border-white/20">
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4 md:mb-5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                  <MdLocationOn className="text-white text-lg sm:text-xl" />
                </div>
                <div className="flex-1">
                  <h5 className="font-bold text-white text-sm sm:text-base mb-2 sm:mb-3">Visit Our Office</h5>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                    26/1 Rafi Ahmed Kidwai Road<br />
                    Kolkata - 700016, India
                  </p>
                </div>
              </div>
              <a href="https://maps.google.com/?q=26/1+Rafi+Ahmed+Kidwai+Road+Kolkata" target="_blank" rel="noopener noreferrer" className="inline-block text-emerald-400 hover:text-emerald-300 text-xs sm:text-sm font-semibold transition">
                Get Directions →
              </a>
            </div>

            {/* Social Links Card */}
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-7 border border-white/20">
              <h5 className="font-bold text-white text-sm sm:text-base mb-3 sm:mb-4">Follow Us</h5>
              <div className="flex gap-2 sm:gap-3 flex-wrap">
                <a href="https://www.facebook.com/KhanConsultants2025" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center rounded-lg bg-[#1877f2] hover:bg-[#0f6ae6] text-white hover:scale-110 transition-transform shadow-lg">
                  <BsFacebook className="text-base sm:text-lg" />
                </a>
                <a href="https://www.instagram.com/khanconsultants2025/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white hover:scale-110 transition-transform shadow-lg">
                  <BsInstagram className="text-base sm:text-lg" />
                </a>
                <a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center rounded-lg bg-[#25D366] hover:bg-[#1ebe5d] text-white hover:scale-110 transition-transform shadow-lg">
                  <BsWhatsapp className="text-base sm:text-lg" />
                </a>
                <a href="mailto:hello@khanconsultants.in" className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center rounded-lg bg-[#ea4335] hover:bg-[#d93025] text-white hover:scale-110 transition-transform shadow-lg">
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

export { AboutSection, IndustriesSection, ProcessTimeline, Testimonials, FinalCTA };



