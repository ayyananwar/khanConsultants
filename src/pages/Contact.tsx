import { useState } from 'react';
import Accordion from '../components/Accordion';
import { designTokens } from '../tokens';
import { MdLocationOn, MdPhone, MdEmail, MdSchedule } from 'react-icons/md';
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { HiSparkles } from 'react-icons/hi2';
import { submitContactEnquiry } from '../api/contactEnquiryApi';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceInterest: string;
  message: string;
}

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

      const composedMessage = [
        formData.message.trim(),
        formData.company.trim() ? `Company: ${formData.company.trim()}` : '',
      ].filter(Boolean).join('\n\n') || 'Contact enquiry from website form.';

      await submitContactEnquiry({
        fullName: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        serviceType: formData.serviceInterest.trim() || undefined,
        message: composedMessage,
      });

      setSuccessMessage('Message sent successfully! We will contact you soon.');
      setFormData({
        name: '',
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
      {/* Hero Section — matches Home hero style */}
      <section
        className="relative min-h-[calc(100svh-56px)] sm:min-h-[520px] md:min-h-[600px] lg:min-h-[calc(100svh-72px)] flex flex-col overflow-x-clip"
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75" />

        <div className="relative flex-1 flex flex-col justify-center px-5 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 text-white">
          <div className="max-w-3xl lg:max-w-6xl xl:max-w-7xl mx-auto w-full text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] sm:text-xs md:text-sm mb-5 sm:mb-6 bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full text-[10px] sm:text-xs font-bold bg-amber-500 text-white">★</span>
              <span className="font-semibold">Licensed KMC Consultant</span>
            </div>

            <h1 className="text-[1.6rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.18] mb-4 sm:mb-5">
              Get In <span className="text-amber-300">Touch</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-white/85 max-w-xl mx-auto leading-relaxed mb-6 sm:mb-8">
              Let's discuss how we can help transform your business. Reach out and we'll respond within 24 hours.
            </p>

            {/* Quick contact action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <a
                href="tel:+916291139691"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white min-h-[48px] btn-primary-sage shadow-lg hover:shadow-xl transition-all"
              >
                <MdPhone className="text-lg" />
                Call +91-6291-139-691
              </a>
              <a
                href="https://wa.me/916291139691"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 sm:py-4 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white text-sm sm:text-base font-bold min-h-[48px] transition-all"
              >
                <BsWhatsapp className="text-lg text-[var(--color-25d366)]" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Stats Strip */}
          <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-lg sm:max-w-2xl mx-auto w-full mt-8 sm:mt-10">
            {[
              { value: '50+', label: 'Years' },
              { value: '25+', label: 'Licensed' },
              { value: '1K+', label: 'Clients' },
              { value: '24h', label: 'Response' },
            ].map((stat) => (
              <div key={stat.label} className="text-center py-2.5 sm:py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div className="text-lg sm:text-2xl md:text-3xl font-bold text-amber-300">{stat.value}</div>
                <div className="text-[9px] sm:text-xs text-white/70 font-medium mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section — clean two-column layout */}
      <section className="relative bg-white overflow-hidden py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6">
        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--color-3d6b56)] font-bold mb-2 sm:mb-3 uppercase">Contact Us</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              Send Us a Message
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-[var(--color-3d6b56)] mx-auto rounded-full" />
            <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto mt-3 sm:mt-4 leading-relaxed">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-5 gap-5 sm:gap-6 md:gap-8">
            {/* Contact Form — takes more space */}
            <div className="lg:col-span-3 bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-7 border border-gray-100 shadow-sm">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1">Get Your Free Consultation</h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-5">Our experts will reach out within 24 hours.</p>

              {/* Success Message */}
              {successMessage && (
                <div className="mb-4 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs sm:text-sm">
                  ✓ {successMessage}
                </div>
              )}

              {/* Error Message */}
              {errorMessage && (
                <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm">
                  ✕ {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
                {/* Name Field */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs sm:text-sm font-medium text-gray-600 mb-1">Full Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Rahul Sharma"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                    className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 sm:py-3 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[var(--color-3d6b56)] focus:ring-1 focus:ring-[var(--color-3d6b56)]/20 transition min-h-[44px]"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs sm:text-sm font-medium text-gray-600 mb-1">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="rahul@example.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 sm:py-3 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[var(--color-3d6b56)] focus:ring-1 focus:ring-[var(--color-3d6b56)]/20 transition min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs sm:text-sm font-medium text-gray-600 mb-1">Phone Number</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="+91 98765-43210"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      inputMode="tel"
                      required
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 sm:py-3 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[var(--color-3d6b56)] focus:ring-1 focus:ring-[var(--color-3d6b56)]/20 transition min-h-[44px]"
                    />
                  </div>
                </div>

                {/* Company & Service */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  <div>
                    <label htmlFor="contact-company" className="block text-xs sm:text-sm font-medium text-gray-600 mb-1">Company <span className="text-gray-300">(optional)</span></label>
                    <input
                      id="contact-company"
                      type="text"
                      placeholder="Your Company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      autoComplete="organization"
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 sm:py-3 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[var(--color-3d6b56)] focus:ring-1 focus:ring-[var(--color-3d6b56)]/20 transition min-h-[44px]"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-service" className="block text-xs sm:text-sm font-medium text-gray-600 mb-1">Service Interested</label>
                    <select
                      id="contact-service"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 sm:py-3 text-sm text-gray-900 focus:outline-none focus:border-[var(--color-3d6b56)] focus:ring-1 focus:ring-[var(--color-3d6b56)]/20 transition min-h-[44px]"
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

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs sm:text-sm font-medium text-gray-600 mb-1">Message</label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    placeholder="Tell us about your requirements..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                    className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2.5 sm:py-3 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[var(--color-3d6b56)] focus:ring-1 focus:ring-[var(--color-3d6b56)]/20 transition resize-none"
                  />
                </div>

                {/* Terms */}
                <label className="flex items-start gap-2 text-xs sm:text-sm text-gray-500">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(event) => setTermsAccepted(event.target.checked)}
                    className="mt-0.5 rounded"
                  />
                  <span>
                    I agree to the{' '}
                    <a href="/terms-of-service" target="_blank" rel="noopener noreferrer" className="font-medium text-[var(--color-3d6b56)] underline">
                      Terms
                    </a>{' '}
                    and{' '}
                    <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="font-medium text-[var(--color-3d6b56)] underline">
                      Privacy Policy
                    </a>.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-primary-sage disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-3 sm:py-3.5 text-sm sm:text-base rounded-lg shadow-lg hover:shadow-xl transition-all min-h-[48px]"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2"><span className="animate-spin">⟳</span> Sending...</span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">Send Message <span>→</span></span>
                  )}
                </button>
              </form>
            </div>

            {/* Sidebar — compact info cards */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-5">
              {/* Quick contact */}
              <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm">
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

              {/* Business Hours */}
              <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-violet-50 flex items-center justify-center flex-shrink-0">
                    <MdSchedule className="text-violet-500 text-base" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">Business Hours</h4>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm text-gray-500">Mon - Sat</span>
                    <span className="text-sm font-semibold text-gray-900">11:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Sunday</span>
                    <span className="text-sm font-semibold text-red-600">Closed</span>
                  </div>
                </div>
              </div>

              {/* Office location */}
              <a href="https://maps.google.com/?q=26/1+Rafi+Ahmed+Kidwai+Road+Kolkata" target="_blank" rel="noopener noreferrer" className="block bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all group">
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
                <span className="text-[var(--color-3d6b56)] text-xs sm:text-sm font-semibold group-hover:underline">
                  Get Directions →
                </span>
              </a>

              {/* Social */}
              <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm">
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

      {/* Map Section — dark section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 bg-[var(--color-3d6b56)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/[0.07] rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-amber-400/[0.05] rounded-full -ml-56 -mb-56 blur-3xl" />

        <div className="relative max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-emerald-300 font-bold mb-2 sm:mb-3 uppercase">Our Location</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Visit Our <span className="text-amber-300">Office</span>
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-emerald-400 mx-auto rounded-full" />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl border border-white/[0.15]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.6098169267256!2d88.36395!3d22.571356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275ed4e6b9d5d%3A0x4b2e4e4b4e4e4e4e!2s26%2F1%20Rafi%20Ahmed%20Kidwai%20Road%2C%20Kolkata%2C%20West%20Bengal%20700016!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
            ></iframe>
          </div>

          <div className="mt-6 sm:mt-8 text-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=26%2F1+Rafi+Ahmed+Kidwai+Road,+Kolkata,+700016"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl px-6 sm:px-7 py-3 sm:py-3.5 bg-amber-400 hover:bg-amber-300 text-[var(--color-1f3a30)] text-sm sm:text-base font-bold transition-all min-h-[48px]"
            >
              Get Directions
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--color-3d6b56)] font-bold mb-2 sm:mb-3 uppercase">Help Center</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              Frequently Asked Questions
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-[var(--color-3d6b56)] mx-auto rounded-full" />
            <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto mt-3 sm:mt-4 leading-relaxed">
              Find answers to common questions about our services and process.
            </p>
          </div>

          <Accordion items={faqItems} />

          {/* Bottom CTA */}
          <div className="mt-8 sm:mt-10 text-center">
            <p className="text-gray-500 text-sm mb-4">Still have questions?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl px-6 sm:px-7 py-3 sm:py-3.5 btn-primary-sage text-white text-sm sm:text-base font-bold shadow-lg hover:shadow-xl transition-all min-h-[48px]"
              >
                <HiSparkles className="text-lg" />
                Schedule Consultation
              </Link>
              <a
                href="https://wa.me/916291139691"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-6 sm:px-7 py-3 sm:py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm sm:text-base font-bold transition-all min-h-[48px]"
              >
                <BsWhatsapp className="text-lg text-[var(--color-25d366)]" />
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;


