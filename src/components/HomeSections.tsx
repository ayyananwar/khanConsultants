import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MdLocationOn, MdPhone, MdEmail, MdAccountBalance, MdLocalHospital, MdComputer, MdShoppingBag, MdFactory, MdSchool, MdEmojiTransportation, MdHome, MdHotel, MdWifi, MdGavel, MdLocalShipping } from 'react-icons/md';
import { BsFacebook, BsInstagram, BsWhatsapp, BsLightning } from 'react-icons/bs';
import { HiGlobeAlt, HiBuildingOffice2, HiRocketLaunch, HiUserGroup, HiCheckCircle, HiClock, HiChartBar, HiMagnifyingGlass, HiClipboardDocumentCheck, HiLightBulb, HiUser } from 'react-icons/hi2';
import { FaBalanceScale, FaIdCard } from 'react-icons/fa';

// Google Apps Script URL
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzMVlb0hRhjW2snEFKAEgg9-IYwX_ca2mXMQOEAPPwzJYZq6T5t7b1dpdanOr8OpXky/exec";

// About Section Component
function AboutSection() {
  const values = [
    { icon: FaBalanceScale, title: 'Legal Excellence', description: 'Expert guidance in trademark, company formation & legal matters', color: 'bg-blue-600' },
    { icon: MdAccountBalance, title: 'Financial Expertise', description: 'Complete GST, accounting & tax compliance solutions', color: 'bg-green-600' },
    { icon: HiGlobeAlt, title: 'Global Reach', description: 'International trade, visas & immigration services', color: 'bg-teal-700' },
    { icon: HiCheckCircle, title: 'Client Success', description: 'Trusted by 500+ businesses for their growth journey', color: 'bg-green-600' },
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: HiUserGroup, color: 'text-black' },
    { number: '1000+', label: 'Projects Completed', icon: HiCheckCircle, color: 'text-black' },
    { number: '15+', label: 'Years Experience', icon: HiClock, color: 'text-black' },
    { number: '24/7', label: 'Support Available', icon: MdPhone, color: 'text-black' },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 pb-8 sm:pb-12 border-b-2 border-[#d6fadc]">
          <p className="text-xs sm:text-sm tracking-widest text-[#53785b] font-bold mb-3 sm:mb-4">ABOUT KHAN CONSULTANTS</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2c4d3f] mb-5 leading-tight">
            Your Trusted Partner for<br className="hidden sm:block" />
            <span className="text-[#53785b]">Business Success</span>
          </h2>
          <p className="text-[#2c4d3f] text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            From legal consultations to international trade, government compliance to financial management—Khan Consultants provides comprehensive solutions under one roof.
          </p>
        </div>

        {/* Core Values Grid - Mobile Optimized */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5 mb-10 sm:mb-12">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="group bg-white border border-[#d6fadc] shadow-lg rounded-2xl p-4 sm:p-5 md:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="text-white text-2xl sm:text-3xl" />
                </div>
                <h4 className="font-bold text-[#2c4d3f] text-base sm:text-lg mb-2">{value.title}</h4>
                <p className="text-[#53785b] text-sm sm:text-base leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Grid - Mobile First */}
        <div className="bg-gradient-to-br from-white to-[#fafffe] rounded-3xl p-8 sm:p-10 md:p-14 mb-12 sm:mb-16 border border-[#e8f0eb] shadow-lg">
          <h3 className="text-[#2c4d3f] text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">
            Trusted by Businesses Across India
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-[#d6fadc] border border-[#d6fadc] shadow-lg backdrop-blur-sm rounded-2xl p-4 sm:p-5 hover:bg-[#c5f4d4] transition-all duration-300">
                    <IconComponent className={`${stat.color} text-3xl sm:text-4xl mx-auto mb-3 filter brightness-125`} />
                    <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2c4d3f] mb-1 sm:mb-2">{stat.number}</p>
                    <p className="text-[#53785b] text-xs sm:text-sm font-medium">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us - Mobile Optimized */}
        <div className="bg-gradient-to-br from-white via-[#fafffe] to-white border border-[#e8f0eb] shadow-2xl hover:shadow-3xl rounded-3xl p-8 sm:p-10 md:p-14 lg:p-16 transition-all duration-300">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2c4d3f] mb-6 sm:mb-8 leading-tight">
                Why Choose Khan Consultants?
              </h3>
              <div className="space-y-5 sm:space-y-6">
                <div className="flex gap-4 sm:gap-5 items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HiCheckCircle className="text-white text-xl sm:text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2c4d3f] text-lg sm:text-xl mb-2">One-Stop Solution</h4>
                    <p className="text-[#53785b] text-base sm:text-lg leading-relaxed">All services—legal, financial, trade, and government—under one roof</p>
                  </div>
                </div>
                <div className="flex gap-4 sm:gap-5 items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HiUserGroup className="text-white text-xl sm:text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2c4d3f] text-lg sm:text-xl mb-2">Expert Team</h4>
                    <p className="text-[#53785b] text-base sm:text-lg leading-relaxed">1000+ experts across legal, financial, and trade domains</p>
                  </div>
                </div>
                <div className="flex gap-4 sm:gap-5 items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HiRocketLaunch className="text-white text-xl sm:text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2c4d3f] text-lg sm:text-xl mb-2">Fast Processing</h4>
                    <p className="text-[#53785b] text-base sm:text-lg leading-relaxed">Quick turnaround times without compromising on quality</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 sm:p-9 border border-[#d6fadc] shadow-lg hover:shadow-xl transition-all">
              <h4 className="text-2xl sm:text-3xl font-bold text-[#2c4d3f] mb-6">Our Services Include:</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: FaBalanceScale, text: 'Legal & Trademark' },
                  { icon: MdAccountBalance, text: 'GST & Accounting' },
                  { icon: MdLocalShipping, text: 'Import & Export' },
                  { icon: HiGlobeAlt, text: 'Visas & Immigration' },
                  { icon: HiBuildingOffice2, text: 'Corporation Services' },
                  { icon: FaIdCard, text: 'Government IDs' },
                ].map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3 bg-gradient-to-br from-[#d6fadc] to-[#e8f0eb] border border-[#d6fadc] rounded-xl p-4 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer">
                      <Icon className="text-[#53785b] text-2xl sm:text-3xl flex-shrink-0" />
                      <span className="text-sm sm:text-base text-[#2c4d3f] font-bold">{service.text}</span>
                    </div>
                  );
                })}
              </div>
              <Link 
                to="/contact" 
                className="mt-8 block text-center rounded-xl px-8 py-4 bg-gradient-to-r from-[#53785b] to-[#2c4d3f] text-white text-base sm:text-lg font-bold hover:shadow-xl hover:scale-[1.02] transition-all duration-300 shadow-lg active:scale-[0.98]"
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
    { title: 'Financial Services', subtitle: 'Banking, Insurance & Investment', icon: MdAccountBalance, color: 'text-emerald-600' },
    { title: 'Healthcare', subtitle: 'Medical & Pharmaceutical', icon: MdLocalHospital, color: 'text-red-600' },
    { title: 'Technology', subtitle: 'Software & IT Services', icon: MdComputer, color: 'text-sage-600' },
    { title: 'Retail', subtitle: 'E-commerce & Consumer Goods', icon: MdShoppingBag, color: 'text-sage-700' },
    { title: 'Manufacturing', subtitle: 'Industrial & Production', icon: MdFactory, color: 'text-sage-700' },
    { title: 'Education', subtitle: 'Academic & E-learning', icon: MdSchool, color: 'text-indigo-600' },
    { title: 'Energy', subtitle: 'Oil, Gas & Renewables', icon: BsLightning, color: 'text-yellow-600' },
    { title: 'Transportation', subtitle: 'Logistics & Supply Chain', icon: MdEmojiTransportation, color: 'text-sky-600' },
  ];

  const extra = [
    { title: 'Real Estate', icon: MdHome, color: 'text-sage-500' },
    { title: 'Hospitality', icon: MdHotel, color: 'text-pink-500' },
    { title: 'Telecom', icon: MdWifi, color: 'text-cyan-500' },
    { title: 'Legal Services', icon: MdGavel, color: 'text-amber-600' },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-[#d6fadc]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 pb-8 sm:pb-12 border-b border-[#c5f4d4]\">
          <p className="text-xs tracking-widest text-[#53785b] font-bold text-center mb-3 sm:mb-4\">INDUSTRY EXPERTISE</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#2c4d3f] mb-4 sm:mb-6 px-2 leading-tight\">            Serving Diverse Industries         </h2>       <p className="text-center text-[#53785b] text-base sm:text-lg max-w-2xl mx-auto px-4 leading-relaxed">          Our cross-industry experience enables us to bring fresh perspectives and proven strategies to your unique business context.        </p>       </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-14">
          {industries.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="border border-[#d6fadc] rounded-2xl p-6 sm:p-7 text-center bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                <IconComponent className={`text-5xl sm:text-6xl mx-auto mb-4 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                <p className="text-sm sm:text-base font-bold text-[#2c4d3f] mb-2">{item.title}</p>
                <p className="text-xs sm:text-sm text-[#53785b]">{item.subtitle}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-[#53785b] to-[#2c4d3f] text-white rounded-3xl p-8 sm:p-10 md:p-12 grid lg:grid-cols-2 gap-8 sm:gap-10 items-center shadow-xl">
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">Don't See Your Industry?</h3>
            <p className="text-white/85 text-base sm:text-lg mb-7 leading-relaxed">
              Our adaptable methodologies and diverse expertise allow us to serve clients across virtually any sector. Let's discuss how we can help your business thrive.
            </p>
            <Link to="/contact" className="inline-block rounded-xl px-8 py-4 bg-[#d6fadc] text-[#53785b] text-base sm:text-lg font-bold hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
              Contact Us Today →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {extra.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-white/10 border border-white/30 rounded-2xl p-5 sm:p-6 text-center hover:bg-white/20 transition-all duration-300 group cursor-pointer backdrop-blur-sm">
                  <IconComponent className={`text-4xl sm:text-5xl mb-3 mx-auto ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                  <p className="text-sm sm:text-base font-bold text-white">{item.title}</p>
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
    { icon: HiMagnifyingGlass, title: 'Discovery', description: 'Deep dive into your business, challenges, and objectives through comprehensive analysis.', color: 'bg-pink-500' },
    { icon: HiClipboardDocumentCheck, title: 'Assessment', description: 'Evaluate current state, identify gaps, and benchmark against industry standards.', color: 'bg-blue-500' },
    { icon: HiLightBulb, title: 'Strategy', description: 'Develop tailored solutions and actionable roadmaps aligned with your goals.', color: 'bg-yellow-500' },
    { icon: HiRocketLaunch, title: 'Implementation', description: 'Execute strategies with precision, managing change and ensuring adoption.', color: 'bg-orange-500' },
    { icon: HiChartBar, title: 'Optimization', description: 'Monitor performance, measure results, and continuously improve outcomes.', color: 'bg-green-500' },
  ];

  const benefits = [
    { icon: HiClock, title: 'Efficient Timeline', description: 'Streamlined processes ensure rapid deployment while maintaining quality standards.', color: 'text-sage-600' },
    { icon: HiUserGroup, title: 'Collaborative Approach', description: 'Work closely with your team to ensure alignment and knowledge transfer.', color: 'text-sage-700' },
    { icon: HiCheckCircle, title: 'Quality Assurance', description: 'Rigorous validation ensures deliverables meet the highest standards.', color: 'text-sage-600' },
  ];

  return (
    <section id="process" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 pb-8 sm:pb-12 border-b-2 border-[#d6fadc]">
          <p className="text-xs tracking-widest text-[#53785b] font-bold text-center mb-3 sm:mb-4">OUR PROCESS</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#2c4d3f] mb-4 sm:mb-6 px-2 leading-tight">
            How We Drive Success
          </h2>
          <p className="text-center text-[#2c4d3f] text-base sm:text-lg max-w-3xl mx-auto px-4 leading-relaxed">
            Our proven methodology ensures comprehensive analysis, strategic planning, and effective execution at every stage of engagement.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 mb-12 sm:mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="bg-white border border-[#d6fadc] shadow-lg rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-3 transition-all duration-300 group cursor-pointer">
                <div className={`w-16 h-16 sm:w-18 sm:h-18 rounded-full ${step.color} text-white flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="text-3xl sm:text-4xl" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#2c4d3f] mb-3">{step.title}</h3>
                <p className="text-sm text-[#53785b] leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {benefits.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="bg-white border border-[#d6fadc] shadow-lg rounded-2xl p-7 text-center hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <IconComponent className={`text-5xl sm:text-6xl mx-auto mb-4 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                <h4 className="text-base sm:text-lg font-bold text-[#2c4d3f] mb-3">{item.title}</h4>
                <p className="text-sm text-[#53785b]">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Testimonials Component
function Testimonials() {
  const reviews = [
    {
      name: 'Sarah Mitchell',
      company: 'CEO, TechVision Inc.',
      text: 'Khan Consultants transformed our business operations completely. Their strategic insights helped us increase efficiency by 40% and reduce costs significantly.',
      stars: 5,
    },
    {
      name: 'Michael Chen',
      company: 'Director, Global Retail Solutions',
      text: 'Working with Khan Consultants was a game-changer for our digital transformation journey. They brought clarity to our vision and executed flawlessly.',
      stars: 5,
    },
    {
      name: 'Emily Rodriguez',
      company: 'CEO, HealthCare Partners',
      text: 'The financial advisory services provided by Khan Consultants helped us optimize our capital structure and improve our bottom line.',
      stars: 5,
    },
    {
      name: 'David Thompson',
      company: 'VP Operations, Manufacturing Corp',
      text: 'Khan Consultants helped us navigate a complex organizational restructuring. Their change management expertise ensured smooth transitions.',
      stars: 5,
    },
    {
      name: 'Jennifer Lee',
      company: 'CMO, Digital Innovations Ltd',
      text: 'The marketing strategy developed by Khan Consultants doubled our lead generation within six months.',
      stars: 5,
    },
    {
      name: 'Robert Anderson',
      company: 'President, Global Ventures',
      text: 'Outstanding service from start to finish. Their insights helped us enter new markets successfully.',
      stars: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-[#d6fadc]\">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 pb-8 sm:pb-12 border-b-2 border-[#d6fadc]">
          <p className="text-xs tracking-widest text-[#53785b] font-bold text-center mb-3 sm:mb-4">CLIENT TESTIMONIALS</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#2c4d3f] mb-4 sm:mb-6 leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-center text-[#53785b] text-base sm:text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what business leaders have to say about their experience working with Khan Consultants.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white border border-[#d6fadc] rounded-2xl p-7 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
              <div className="flex gap-1 mb-5">
                {[...Array(review.stars)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-[#53785b] text-base mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4 pt-5 border-t border-[#d6fadc]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#53785b] to-[#2c4d3f] flex items-center justify-center flex-shrink-0">
                  <HiUser className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-base font-bold text-[#2c4d3f]">{review.name}</p>
                  <p className="text-sm text-[#53785b]">{review.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#53785b] to-[#2c4d3f] text-white rounded-3xl p-8 sm:p-10 text-center shadow-xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">Join 500+ Satisfied Clients</h3>
          <p className="text-white/90 text-base sm:text-lg mb-8">
            Experience the Khan Consultants difference and see why leading organizations trust us with their most critical business challenges.
          </p>
          <Link to="/contact" className="inline-block rounded-xl px-8 py-4 bg-[#d6fadc] text-[#53785b] text-base sm:text-lg font-bold hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
            Start Your Success Story →
          </Link>
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
    <section className="relative bg-gradient-to-br from-[#1a2d23] via-[#2c4d3f] to-[#1f3a2f] overflow-hidden py-16 sm:py-20 md:py-28">
      {/* Decorative gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 -right-32 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-32 w-96 h-96 bg-gradient-to-tr from-teal-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-14 sm:mb-16">
          <p className="text-xs sm:text-sm tracking-widest text-emerald-400 font-bold mb-4 uppercase">Your Success Starts Here</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Your Business?</span>
          </h2>
          <p className="text-white/80 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Connect with our expert consultants today. Whether you need legal guidance, financial expertise, or government compliance—we've got you covered.
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16">
          <a href="tel:+916291139691" className="group bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center transition-all hover:shadow-2xl hover:shadow-blue-500/20 shadow-lg border border-blue-500/20">
            <MdPhone className="text-3xl sm:text-4xl text-white mx-auto mb-3 group-hover:-translate-y-1 transition-transform" />
            <p className="text-xs sm:text-sm text-white font-bold">Call Us</p>
            <p className="text-xs text-blue-100 mt-1">+91-6291-139-691</p>
          </a>
          <a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-br from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center transition-all hover:shadow-2xl hover:shadow-green-500/20 shadow-lg border border-green-500/20">
            <BsWhatsapp className="text-3xl sm:text-4xl text-white mx-auto mb-3 group-hover:-translate-y-1 transition-transform" />
            <p className="text-xs sm:text-sm text-white font-bold">WhatsApp</p>
            <p className="text-xs text-green-100 mt-1">Quick Chat</p>
          </a>
          <a href="mailto:hello@khanconsultants.in" className="group bg-gradient-to-br from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center transition-all hover:shadow-2xl hover:shadow-orange-500/20 shadow-lg border border-orange-500/20">
            <MdEmail className="text-3xl sm:text-4xl text-white mx-auto mb-3 group-hover:-translate-y-1 transition-transform" />
            <p className="text-xs sm:text-sm text-white font-bold">Email Us</p>
            <p className="text-xs text-orange-100 mt-1">hello@khan...</p>
          </a>
          <a href="https://maps.google.com/?q=26/1+Rafi+Ahmed+Kidwai+Road+Kolkata" target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-br from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center transition-all hover:shadow-2xl hover:shadow-amber-500/20 shadow-lg border border-amber-500/20">
            <MdLocationOn className="text-3xl sm:text-4xl text-white mx-auto mb-3 group-hover:-translate-y-1 transition-transform" />
            <p className="text-xs sm:text-sm text-white font-bold">Visit Us</p>
            <p className="text-xs text-amber-100 mt-1">Kolkata Office</p>
          </a>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Form */}
          <div className="order-2 lg:order-1 bg-gradient-to-br from-white/10 to-white/[0.05] backdrop-blur-xl rounded-2xl sm:rounded-3xl p-7 sm:p-8 shadow-2xl border border-white/20">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Get Your Free Consultation</h3>
            <p className="text-white/70 text-sm mb-6">Fill the form below and our experts will reach out within 24 hours</p>

            {successMessage && (
              <div className="mb-6 p-4 sm:p-5 rounded-lg bg-emerald-500/20 border border-emerald-400/50 text-emerald-100 text-sm backdrop-blur-sm">
                ✓ {successMessage}
              </div>
            )}

            {errorMessage && (
              <div className="mb-6 p-4 sm:p-5 rounded-lg bg-red-500/20 border border-red-400/50 text-red-100 text-sm backdrop-blur-sm">
                ✕ {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-white/90 mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="Priya"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:border-emerald-400/50 focus:bg-white/15 focus:ring-1 focus:ring-emerald-400/30 transition backdrop-blur-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-white/90 mb-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Sharma"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:border-emerald-400/50 focus:bg-white/15 focus:ring-1 focus:ring-emerald-400/30 transition backdrop-blur-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-white/90 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="priya.sharma@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:border-emerald-400/50 focus:bg-white/15 focus:ring-1 focus:ring-emerald-400/30 transition backdrop-blur-sm"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-white/90 mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 98765-43210"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:border-emerald-400/50 focus:bg-white/15 focus:ring-1 focus:ring-emerald-400/30 transition backdrop-blur-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-white/90 mb-2">Company Name</label>
                  <input
                    type="text"
                    placeholder="Your Company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:border-emerald-400/50 focus:bg-white/15 focus:ring-1 focus:ring-emerald-400/30 transition backdrop-blur-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-white/90 mb-2">Service Interested</label>
                  <select
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400/50 focus:bg-white/15 focus:ring-1 focus:ring-emerald-400/30 transition backdrop-blur-sm"
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
                <label className="block text-xs sm:text-sm font-semibold text-white/90 mb-2">Message</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your requirements..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:border-emerald-400/50 focus:bg-white/15 focus:ring-1 focus:ring-emerald-400/30 transition resize-none backdrop-blur-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-bold py-3.5 sm:py-4 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-emerald-500/50 disabled:shadow-none"
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
          <div className="order-1 lg:order-2 space-y-5">
            {/* Main CTA Card */}
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-emerald-400/30 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Why Choose Khan Consultants?</h4>
                  <p className="text-emerald-100 text-sm mt-1">500+ satisfied clients across India</p>
                </div>
              </div>
              <ul className="space-y-3 text-white/90 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold text-lg flex-shrink-0">✓</span>
                  <span>Expert consultants with 15+ years experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold text-lg flex-shrink-0">✓</span>
                  <span>Complete end-to-end support & guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold text-lg flex-shrink-0">✓</span>
                  <span>24/7 availability for urgent queries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 font-bold text-lg flex-shrink-0">✓</span>
                  <span>Proven track record of success</span>
                </li>
              </ul>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              <a href="tel:+916291139691" className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:from-white/20 hover:to-white/10 transition-all hover:shadow-lg border border-white/20 hover:border-blue-400/50">
                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <MdPhone className="text-white text-xl" />
                </div>
                <h5 className="font-bold text-white text-sm mb-1">Call Us</h5>
                <p className="text-xs text-white/70">Immediate assistance</p>
              </a>

              <a href="mailto:hello@khanconsultants.in" className="group bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:from-white/20 hover:to-white/10 transition-all hover:shadow-lg border border-white/20 hover:border-orange-400/50">
                <div className="w-12 h-12 rounded-lg bg-orange-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <MdEmail className="text-white text-xl" />
                </div>
                <h5 className="font-bold text-white text-sm mb-1">Email</h5>
                <p className="text-xs text-white/70">Within 24 hours</p>
              </a>
            </div>

            {/* Location & Hours Card */}
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-white/20">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                  <MdLocationOn className="text-white text-xl" />
                </div>
                <div className="flex-1">
                  <h5 className="font-bold text-white mb-3">Visit Our Office</h5>
                  <p className="text-sm text-white/80 leading-relaxed">
                    26/1 Rafi Ahmed Kidwai Road<br />
                    Kolkata - 700016, India
                  </p>
                </div>
              </div>
              <a href="https://maps.google.com/?q=26/1+Rafi+Ahmed+Kidwai+Road+Kolkata" target="_blank" rel="noopener noreferrer" className="inline-block text-emerald-400 hover:text-emerald-300 text-sm font-semibold transition">
                Get Directions →
              </a>
            </div>

            {/* Social Links Card */}
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-white/20">
              <h5 className="font-bold text-white mb-4">Follow Us</h5>
              <div className="flex gap-3 flex-wrap">
                <a href="https://www.facebook.com/KhanConsultants2025" target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center rounded-lg bg-[#1877f2] hover:bg-[#0f6ae6] text-white hover:scale-110 transition-transform shadow-lg">
                  <BsFacebook className="text-lg" />
                </a>
                <a href="https://www.instagram.com/khanconsultants2025/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center rounded-lg bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white hover:scale-110 transition-transform shadow-lg">
                  <BsInstagram className="text-lg" />
                </a>
                <a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center rounded-lg bg-[#25D366] hover:bg-[#1ebe5d] text-white hover:scale-110 transition-transform shadow-lg">
                  <BsWhatsapp className="text-lg" />
                </a>
                <a href="mailto:hello@khanconsultants.in" className="w-11 h-11 flex items-center justify-center rounded-lg bg-[#ea4335] hover:bg-[#d93025] text-white hover:scale-110 transition-transform shadow-lg">
                  <MdEmail className="text-lg" />
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



