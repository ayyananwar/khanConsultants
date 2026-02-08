import { useState } from 'react';
import SectionHero from '../components/SectionHero';
import Accordion from '../components/Accordion';
import { designTokens } from '../tokens';
import { MdLocationOn, MdPhone, MdEmail, MdSchedule } from 'react-icons/md';
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceInterest: string;
  message: string;
}

interface FormState extends FormData {}

// Google Apps Script URL
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzMVlb0hRhjW2snEFKAEgg9-IYwX_ca2mXMQOEAPPwzJYZq6T5t7b1dpdanOr8OpXky/exec";

const Contact = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
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
    // Clear messages when user starts typing
    setSuccessMessage('');
    setErrorMessage('');
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setErrorMessage('Name is required');
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
    // Basic email validation
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

    // Validate form
    if (!validateForm()) {
      return;
    }

    try {
      setIsLoading(true);

      // Create FormData object for CORS compatibility with Google Apps Script
      const newFormData = new FormData();
      newFormData.append('name', formData.name);
      newFormData.append('email', formData.email);
      newFormData.append('phone', formData.phone);
      newFormData.append('company', formData.company);
      newFormData.append('serviceInterest', formData.serviceInterest);
      newFormData.append('message', formData.message);

      // Send to Google Apps Script
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: newFormData,
      });

      // Google Apps Script returns opaque response, so we treat successful fetch as success
      if (response) {
        setSuccessMessage('Message sent successfully! We will contact you soon.');
        // Reset form
        setFormData({
          name: '',
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

  const faqItems = [
    {
      title: 'How long does GST registration take?',
      description:
        'GST registration filing is completed the same day. You receive your certificate in 10-15 working days. We also handle bank account linking (must be done within 45 days to avoid penalties) and provide complete handover with all credentials.',
    },
    {
      title: 'What makes your Trademark service different?',
      description:
        'We perform a phonetic deep scan (not just exact match), create a future-proof filing strategy for multi-category protection, and handle objections at no extra cost. Unlike ₹499 filing services, we provide expert legal advice and have a 95%+ approval rate.',
    },
    {
      title: 'Do you help with Import Export Code (IEC)?',
      description:
        'Yes! We handle complete IEC registration for businesses looking to import or export goods. We also assist with customs documentation, DGFT compliance, and export incentive schemes. The process takes 7-10 working days.',
    },
    {
      title: 'Can you assist with visa applications?',
      description:
        'Absolutely. We handle tourist visas, business visas, student visas, and immigration services for multiple countries including UK, USA, Canada, Australia, and Europe. We provide end-to-end documentation support and application tracking.',
    },
    {
      title: 'What Kolkata Corporation services do you offer?',
      description:
        'We handle Trade License, Health License, Building Plan approvals, Mutation, Property Tax assessments, and all other KMC (Kolkata Municipal Corporation) related services. Our team has direct expertise with local government procedures.',
    },
    {
      title: 'How can I get started with your services?',
      description:
        'Simply call us at +91-6291-139-691 or fill out the contact form above. We offer a free consultation to understand your requirements and recommend the best package. Most services can be started immediately with basic documentation.',
    },
  ];

  return (
    <div style={{ backgroundColor: designTokens.colors.neutral.white }}>
      {/* Hero Section */}
      <SectionHero
        title="Get In Touch"
        subtitle="Let's discuss how we can help transform your business"
      />

      {/* Contact Section with Modern Design */}
      <section
        className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6"
        style={{ background: 'linear-gradient(to bottom right, #e8f0eb, #d6fadc)' }}
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-20 w-72 h-72 rounded-full filter blur-3xl" style={{ backgroundColor: '#10b981' }}></div>
          <div className="absolute bottom-0 -right-20 w-72 h-72 rounded-full filter blur-3xl" style={{ backgroundColor: '#14b8a6' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-14">
            <p className="text-sm sm:text-base tracking-widest font-semibold mb-3 uppercase text-[#53785b]">GET IN TOUCH</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2c4d3f] mb-4 leading-tight">
              Let's Build Something<br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Amazing Together</span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto text-[#53785b]">
              Ready to transform your business? Get in touch with our experts today.
            </p>
          </div>

          {/* Quick Contact Buttons - Mobile Priority */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12">
            <a
              href="tel:+916291139691"
              className="group rounded-2xl p-4 sm:p-5 text-center transition-all hover:-translate-y-1 hover:shadow-lg min-h-[96px] flex flex-col items-center justify-center gap-2 border border-[#e8f0eb] bg-white"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1877f2] flex items-center justify-center">
                <MdPhone className="text-2xl text-white group-hover:rotate-6 transition-transform" />
              </div>
              <p className="text-sm sm:text-base text-[#2c4d3f] font-semibold">Call Us</p>
            </a>
            <a
              href="https://wa.me/916291139691"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl p-4 sm:p-5 text-center transition-all hover:-translate-y-1 hover:shadow-lg min-h-[96px] flex flex-col items-center justify-center gap-2 border border-[#e8f0eb] bg-white"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center">
                <BsWhatsapp className="text-2xl text-white group-hover:rotate-6 transition-transform" />
              </div>
              <p className="text-sm sm:text-base text-[#2c4d3f] font-semibold">WhatsApp</p>
            </a>
            <a
              href="mailto:hello@khanconsultants.in"
              className="group rounded-2xl p-4 sm:p-5 text-center transition-all hover:-translate-y-1 hover:shadow-lg min-h-[96px] flex flex-col items-center justify-center gap-2 border border-[#e8f0eb] bg-white"
            >
              <div className="w-12 h-12 rounded-xl bg-[#ea4335] flex items-center justify-center">
                <MdEmail className="text-2xl text-white group-hover:rotate-6 transition-transform" />
              </div>
              <p className="text-sm sm:text-base text-[#2c4d3f] font-semibold">Email Us</p>
            </a>
            <a
              href="https://maps.google.com/?q=26/1+Rafi+Ahmed+Kidwai+Road+Kolkata"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl p-4 sm:p-5 text-center transition-all hover:-translate-y-1 hover:shadow-lg min-h-[96px] flex flex-col items-center justify-center gap-2 border border-[#e8f0eb] bg-white"
            >
              <div className="w-12 h-12 rounded-xl bg-[#ea4335] flex items-center justify-center">
                <MdLocationOn className="text-2xl text-white group-hover:rotate-6 transition-transform" />
              </div>
              <p className="text-sm sm:text-base text-[#2c4d3f] font-semibold">Visit Us</p>
            </a>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Contact Form */}
            <div className="order-2 lg:order-1 bg-white rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-7 lg:p-8 border border-[#e8f0eb] shadow-2xl">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#2c4d3f] mb-5 sm:mb-6">Send Us a Message</h3>

              {/* Success Message */}
              {successMessage && (
                <div className="mb-5 p-4 rounded-xl border text-sm" style={{
                  background: 'linear-gradient(90deg, rgba(16, 185, 129, 0.15), rgba(20, 184, 166, 0.15))',
                  borderColor: 'rgba(16, 185, 129, 0.4)',
                  color: '#2c4d3f',
                }}>
                  {successMessage}
                </div>
              )}

              {/* Error Message */}
              {errorMessage && (
                <div className="mb-5 p-4 rounded-xl bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-400/50 text-red-100 text-sm backdrop-blur-sm">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-[#53785b] mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Rahul Sharma"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-[#e8f0eb] rounded-xl px-3 sm:px-4 py-3 text-base text-[#2c4d3f] placeholder-[#53785b]/60 focus:outline-none focus:border-emerald-400/60 transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-[#53785b] mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="rahul.sharma@example.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-[#e8f0eb] rounded-xl px-3 sm:px-4 py-3 text-base text-[#2c4d3f] placeholder-[#53785b]/60 focus:outline-none focus:border-emerald-400/60 transition"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-[#53785b] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765-43210"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-[#e8f0eb] rounded-xl px-3 sm:px-4 py-3 text-base text-[#2c4d3f] placeholder-[#53785b]/60 focus:outline-none focus:border-emerald-400/60 transition"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-[#53785b] mb-2">Company Name</label>
                  <input
                    type="text"
                    placeholder="Sharma Enterprises Pvt Ltd"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#e8f0eb] rounded-xl px-3 sm:px-4 py-3 text-base text-[#2c4d3f] placeholder-[#53785b]/60 focus:outline-none focus:border-emerald-400/60 transition"
                  />
                </div>

                {/* Service Interest */}
                <div>
                  <label className="block text-sm font-medium text-[#53785b] mb-2">Service Interested</label>
                  <select
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-[#e8f0eb] rounded-xl px-3 sm:px-4 py-3 text-base text-[#2c4d3f] focus:outline-none focus:border-emerald-400/60 transition"
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

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-[#53785b] mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-[#e8f0eb] rounded-xl px-3 sm:px-4 py-3 text-base text-[#2c4d3f] placeholder-[#53785b]/60 focus:outline-none focus:border-emerald-400/60 transition resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                  {!isLoading && <span className="text-lg">→</span>}
                </button>
              </form>
            </div>

            {/* Contact Information Cards */}
            <div className="order-1 lg:order-2 space-y-4 sm:space-y-5">
              {/* Business Hours Highlight */}
              <div className="bg-white rounded-2xl md:rounded-3xl p-5 sm:p-6 border border-[#e8f0eb] shadow-2xl">
                <div className="flex items-center gap-3 sm:gap-4 mb-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#4285F4] flex items-center justify-center flex-shrink-0">
                    <MdSchedule className="text-white text-2xl sm:text-3xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2c4d3f] text-base sm:text-lg">Business Hours</h4>
                    <p className="text-xs text-[#53785b]">We're here when you need us</p>
                  </div>
                </div>
                <div className="bg-[#fafffe] rounded-xl p-3 sm:p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-[#53785b]">Mon - Sat</span>
                    <span className="text-sm font-semibold text-[#2c4d3f]">11:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#53785b]">Sunday</span>
                    <span className="text-sm font-semibold text-red-400">Closed</span>
                  </div>
                </div>
              </div>

              {/* Contact Cards Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* Phone */}
                <a href="tel:+916291139691" className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-[#e8f0eb] hover:border-emerald-400/50 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#1877f2] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <MdPhone className="text-white text-xl sm:text-2xl" />
                  </div>
                  <h4 className="font-semibold text-[#2c4d3f] text-sm mb-1">Call Now</h4>
                  <p className="text-xs text-[#53785b]">+91-6291-139-691</p>
                </a>

                {/* Email */}
                <a href="mailto:hello@khanconsultants.in" className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-[#e8f0eb] hover:border-emerald-400/50 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <MdEmail className="text-white text-xl sm:text-2xl" />
                  </div>
                  <h4 className="font-semibold text-[#2c4d3f] text-sm mb-1">Email Us</h4>
                  <p className="text-xs text-[#53785b] break-all">hello@khan...</p>
                </a>
              </div>

              {/* Location Card */}
              <a href="https://maps.google.com/?q=26/1+Rafi+Ahmed+Kidwai+Road+Kolkata" target="_blank" rel="noopener noreferrer" className="group block bg-white rounded-2xl md:rounded-3xl p-5 sm:p-6 border border-[#e8f0eb] hover:border-emerald-400/50 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#ea4335] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MdLocationOn className="text-white text-2xl sm:text-3xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2c4d3f] text-base sm:text-lg mb-2">Visit Our Office</h4>
                    <p className="text-sm text-[#53785b] leading-relaxed">
                      26/1 Rafi Ahmed Kidwai Road<br />
                      Kolkata - 700016<br />
                      West Bengal, India
                    </p>
                  </div>
                </div>
              </a>

              {/* Social Media */}
              <div className="bg-white rounded-2xl md:rounded-3xl p-5 sm:p-6 border border-[#e8f0eb]">
                <h4 className="font-bold text-[#2c4d3f] text-base sm:text-lg mb-4">Connect With Us</h4>
                <div className="flex gap-3">
                  <a href="https://www.facebook.com/KhanConsultants2025" target="_blank" rel="noopener noreferrer" className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-[#1877f2] hover:bg-[#0f6ae6] text-white hover:scale-110 transition-transform shadow-lg">
                    <BsFacebook className="text-lg sm:text-xl" />
                  </a>
                  <a href="https://www.instagram.com/khanconsultants2025/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white hover:scale-110 transition-transform shadow-lg">
                    <BsInstagram className="text-lg sm:text-xl" />
                  </a>
                  <a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white hover:scale-110 transition-transform shadow-lg">
                    <BsWhatsapp className="text-lg sm:text-xl" />
                  </a>
                  <a href="mailto:hello@khanconsultants.in" className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-[#ea4335] hover:bg-[#d93025] text-white hover:scale-110 transition-transform shadow-lg">
                    <MdEmail className="text-lg sm:text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6" style={{ backgroundColor: '#d6fadc' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 text-center text-[#2c4d3f]">Visit Our Office</h2>
          
          <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.6098169267256!2d88.36395!3d22.571356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275ed4e6b9d5d%3A0x4b2e4e4b4e4e4e4e!2s26%2F1%20Rafi%20Ahmed%20Kidwai%20Road%2C%20Kolkata%2C%20West%20Bengal%20700016!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full sm:h-[400px] md:h-[450px]"
            ></iframe>
          </div>

          <div className="mt-6 sm:mt-8 md:mt-10 text-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=26%2F1+Rafi+Ahmed+Kidwai+Road,+Kolkata,+700016"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 text-white rounded-xl font-semibold transition-all text-sm sm:text-base bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6" style={{ backgroundColor: designTokens.colors.neutral.white }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2 text-[#2c4d3f]">Frequently Asked Questions</h2>
            <p className="text-base sm:text-lg px-3 sm:px-4 text-[#53785b]">
              Find answers to common questions about our services and process
            </p>
          </div>

          <Accordion items={faqItems} />
        </div>
      </section>
    </div>
  );
};

export default Contact;


