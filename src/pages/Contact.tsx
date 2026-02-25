import { useState } from 'react';
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

// Google Apps Script URL
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzMVlb0hRhjW2snEFKAEgg9-IYwX_ca2mXMQOEAPPwzJYZq6T5t7b1dpdanOr8OpXky/exec";

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
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
  const [termsAccepted, setTermsAccepted] = useState(false);

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
    if (!termsAccepted) {
      setErrorMessage('Please accept Terms & Conditions and Privacy Policy');
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
        mode: 'no-cors',
        body: newFormData,
      });

      if (response.type === 'opaque' || response.ok) {
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
        setTermsAccepted(false);
      } else {
        setErrorMessage('Failed to send message. Please try again or contact us directly.');
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
      <section
        className="relative bg-cover bg-center min-h-[calc(100svh-64px)] sm:min-h-[500px] md:min-h-[580px] lg:min-h-[calc(100svh-72px)] flex items-center"
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        <div className="relative max-w-6xl mx-auto px-3 sm:px-4 md:px-6 text-white text-center flex flex-col items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 md:gap-3 rounded-full px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-[10px] sm:text-xs md:text-sm lg:text-base mx-auto bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full text-xs sm:text-sm md:text-base font-bold bg-amber-500 text-white">★</span>
            <span className="font-semibold text-white">Licensed KMC Consultant</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">Get In Touch</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed text-white/85">
            Let's discuss how we can help transform your business
          </p>
        </div>
      </section>

      {/* Contact Section with Modern Design */}
      <section className="relative bg-white overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-3 sm:px-4 md:px-6">
        {/* Decorative gradient blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 -right-32 w-96 h-96 bg-gradient-to-br from-emerald-100/40 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-32 w-96 h-96 bg-gradient-to-tr from-teal-100/40 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
            <a href="tel:+916291139691" className="rounded-xl border border-emerald-200 bg-emerald-50 px-2.5 py-3 text-center hover:bg-emerald-100 transition">
              <MdPhone className="mx-auto text-lg sm:text-xl text-emerald-700" />
              <p className="mt-1 text-[11px] sm:text-xs font-semibold text-emerald-800">Call</p>
            </a>
            <a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-emerald-200 bg-emerald-50 px-2.5 py-3 text-center hover:bg-emerald-100 transition">
              <BsWhatsapp className="mx-auto text-lg sm:text-xl text-emerald-700" />
              <p className="mt-1 text-[11px] sm:text-xs font-semibold text-emerald-800">WhatsApp</p>
            </a>
            <a href="mailto:hello@khanconsultants.in" className="rounded-xl border border-emerald-200 bg-emerald-50 px-2.5 py-3 text-center hover:bg-emerald-100 transition">
              <MdEmail className="mx-auto text-lg sm:text-xl text-emerald-700" />
              <p className="mt-1 text-[11px] sm:text-xs font-semibold text-emerald-800">Email</p>
            </a>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {/* Contact Form */}
            <div className="order-1 lg:order-1 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 border border-emerald-200 shadow-xl">
              <div className="flex items-center gap-2 mb-4 sm:mb-5 md:mb-6">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                  <MdEmail className="text-base sm:text-lg" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900">Send Us a Message</h3>
              </div>

              {/* Success Message */}
              {successMessage && (
                <div className="mb-4 sm:mb-5 p-3 sm:p-4 rounded-lg bg-emerald-50 border border-emerald-300 text-gray-900 text-xs sm:text-sm">
                  {successMessage}
                </div>
              )}

              {/* Error Message */}
              {errorMessage && (
                <div className="mb-4 sm:mb-5 p-3 sm:p-4 rounded-xl bg-red-50 border border-red-300 text-red-800 text-xs sm:text-sm">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                {/* Name Field */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-900 mb-1 sm:mb-1.5 md:mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Rahul Sharma"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/20 transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-900 mb-1 sm:mb-1.5 md:mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="rahul.sharma@example.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/20 transition"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-900 mb-1 sm:mb-1.5 md:mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765-43210"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/20 transition"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-900 mb-1 sm:mb-1.5 md:mb-2">Company Name</label>
                  <input
                    type="text"
                    placeholder="Sharma Enterprises Pvt Ltd"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/20 transition"
                  />
                </div>

                {/* Service Interest */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-900 mb-1 sm:mb-1.5 md:mb-2">Service Interested</label>
                  <select
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base text-gray-900 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/20 transition"
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
                  <label className="block text-xs sm:text-sm font-medium text-gray-900 mb-1 sm:mb-1.5 md:mb-2">Message</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your requirements..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400/20 transition resize-none"
                  />
                </div>

                {/* Submit Button */}
                <label className="flex items-start gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-xs sm:text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(event) => setTermsAccepted(event.target.checked)}
                    className="mt-0.5"
                  />
                  <span>
                    I agree to the{' '}
                    <a href="/terms-of-service" target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--color-3d6b56)] underline">
                      Terms & Conditions
                    </a>{' '}
                    and{' '}
                    <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--color-3d6b56)] underline">
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>

                <p className="text-[11px] sm:text-xs text-gray-500 text-center">By submitting, you agree to our Terms & Conditions and Privacy Policy.</p>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-semibold py-3 sm:py-3.5 text-sm sm:text-base rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                  {!isLoading && <span className="text-lg">→</span>}
                </button>
              </form>
            </div>

            {/* Contact Information Cards */}
            <div className="order-2 lg:order-2 space-y-3 sm:space-y-4 md:space-y-5">
              {/* Business Hours Highlight */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <MdSchedule className="text-white text-xl sm:text-2xl md:text-3xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">Business Hours</h4>
                    <p className="text-gray-600 text-[10px] sm:text-xs">We're here when you need us</p>
                  </div>
                </div>
                  <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-1 sm:mb-2">
                    <span className="text-xs sm:text-sm text-gray-600">Mon - Sat</span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-900">11:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-600">Sunday</span>
                    <span className="text-xs sm:text-sm font-semibold text-red-600">Closed</span>
                  </div>
                </div>
              </div>

              {/* Contact Cards Grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                {/* Phone */}
                <a href="tel:+916291139691" className="group bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 hover:from-blue-100 hover:to-blue-200/50 transition-all hover:shadow-lg border border-emerald-200 hover:border-emerald-300">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                    <MdPhone className="text-white text-lg sm:text-xl md:text-2xl" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-0.5 sm:mb-1">Call Now</h4>
                  <p className="text-[10px] sm:text-xs text-gray-600">+91-6291-139-691</p>
                </a>

                {/* Email */}
                <a href="mailto:hello@khanconsultants.in" className="group bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 hover:from-orange-100 hover:to-orange-200/50 transition-all hover:shadow-lg border border-emerald-200 hover:border-emerald-300">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-orange-600 flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                    <MdEmail className="text-white text-lg sm:text-xl md:text-2xl" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-0.5 sm:mb-1">Email</h4>
                  <p className="text-[10px] sm:text-xs text-gray-600">Within 24 hours</p>
                </a>
              </div>

              {/* Location Card */}
              <a href="https://maps.google.com/?q=26/1+Rafi+Ahmed+Kidwai+Road+Kolkata" target="_blank" rel="noopener noreferrer" className="group block bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 border border-emerald-200 hover:border-emerald-300 hover:shadow-lg transition-all">
                <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MdLocationOn className="text-white text-xl sm:text-2xl md:text-3xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Visit Our Office</h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      26/1 Rafi Ahmed Kidwai Road<br />
                      Kolkata - 700016<br />
                      West Bengal, India
                    </p>
                  </div>
                </div>
              </a>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 border border-emerald-200 shadow-lg">
                <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg mb-3 sm:mb-4">Follow Us</h4>
                <div className="flex gap-2 sm:gap-3">
                  <a href="https://www.facebook.com/KhanConsultants2025" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center rounded-lg sm:rounded-xl bg-[var(--color-1877f2)] hover:bg-[var(--color-0f6ae6)] text-white hover:scale-110 transition-transform shadow-lg">
                    <BsFacebook className="text-base sm:text-lg md:text-xl" />
                  </a>
                  <a href="https://www.instagram.com/khanconsultants2025/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-[var(--color-f58529)] via-[var(--color-dd2a7b)] to-[var(--color-8134af)] text-white hover:scale-110 transition-transform shadow-lg">
                    <BsInstagram className="text-base sm:text-lg md:text-xl" />
                  </a>
                  <a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center rounded-lg sm:rounded-xl bg-[var(--color-25d366)] hover:bg-[var(--color-1ebe5d)] text-white hover:scale-110 transition-transform shadow-lg">
                    <BsWhatsapp className="text-base sm:text-lg md:text-xl" />
                  </a>
                  <a href="mailto:hello@khanconsultants.in" className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center rounded-lg sm:rounded-xl bg-[var(--color-ea4335)] hover:bg-[var(--color-d93025)] text-white hover:scale-110 transition-transform shadow-lg">
                    <MdEmail className="text-base sm:text-lg md:text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 bg-[var(--color-3d6b56)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-12 text-center text-white">Visit Our Office</h2>
          
          <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.6098169267256!2d88.36395!3d22.571356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275ed4e6b9d5d%3A0x4b2e4e4b4e4e4e4e!2s26%2F1%20Rafi%20Ahmed%20Kidwai%20Road%2C%20Kolkata%2C%20West%20Bengal%20700016!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px]"
            ></iframe>
          </div>

          <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=26%2F1+Rafi+Ahmed+Kidwai+Road,+Kolkata,+700016"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 text-white rounded-lg sm:rounded-xl font-semibold transition-all text-xs sm:text-sm md:text-base bg-white/15 hover:bg-white/25 border border-white/20 shadow-lg hover:shadow-xl"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6" style={{ backgroundColor: designTokens.colors.neutral.white }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 px-2 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-sm sm:text-base md:text-lg px-3 sm:px-4 text-gray-600">
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


