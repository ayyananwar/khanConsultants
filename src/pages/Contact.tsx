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
      <section
        className="relative bg-cover bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&h=600&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2d23]/92 via-[#2c4d3f]/85 to-[#1f3a2f]/90" />
        <div className="relative max-w-6xl mx-auto px-3 sm:px-4 md:px-6 text-white text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4 md:mb-5 lg:mb-6">Get In Touch</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed text-white/85">
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
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {/* Contact Form */}
            <div className="order-2 lg:order-1 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 border border-emerald-200 shadow-2xl">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#2c4d3f] mb-4 sm:mb-5 md:mb-6">Send Us a Message</h3>

              {/* Success Message */}
              {successMessage && (
                <div className="mb-4 sm:mb-5 p-3 sm:p-4 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs sm:text-sm">
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
                  <label className="block text-xs sm:text-sm font-medium text-[#2c4d3f] mb-1 sm:mb-1.5 md:mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Rahul Sharma"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-[#d6fadc] rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base text-[#2c4d3f] placeholder-[#53785b]/50 focus:outline-none focus:border-[#53785b] focus:ring-2 focus:ring-[#53785b]/20 transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-[#2c4d3f] mb-1 sm:mb-1.5 md:mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="rahul.sharma@example.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-[#d6fadc] rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base text-[#2c4d3f] placeholder-[#53785b]/50 focus:outline-none focus:border-[#53785b] focus:ring-2 focus:ring-[#53785b]/20 transition"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-[#2c4d3f] mb-1 sm:mb-1.5 md:mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765-43210"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-[#d6fadc] rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base text-[#2c4d3f] placeholder-[#53785b]/50 focus:outline-none focus:border-[#53785b] focus:ring-2 focus:ring-[#53785b]/20 transition"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-[#2c4d3f] mb-1 sm:mb-1.5 md:mb-2">Company Name</label>
                  <input
                    type="text"
                    placeholder="Sharma Enterprises Pvt Ltd"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-white border border-[#d6fadc] rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base text-[#2c4d3f] placeholder-[#53785b]/50 focus:outline-none focus:border-[#53785b] focus:ring-2 focus:ring-[#53785b]/20 transition"
                  />
                </div>

                {/* Service Interest */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-[#2c4d3f] mb-1 sm:mb-1.5 md:mb-2">Service Interested</label>
                  <select
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-[#d6fadc] rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base text-[#2c4d3f] focus:outline-none focus:border-[#53785b] focus:ring-2 focus:ring-[#53785b]/20 transition"
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
                  <label className="block text-xs sm:text-sm font-medium text-[#2c4d3f] mb-1 sm:mb-1.5 md:mb-2">Message</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your requirements..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-[#d6fadc] rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base text-[#2c4d3f] placeholder-[#53785b]/50 focus:outline-none focus:border-[#53785b] focus:ring-2 focus:ring-[#53785b]/20 transition resize-none"
                  />
                </div>

                {/* Submit Button */}
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
            <div className="order-1 lg:order-2 space-y-3 sm:space-y-4 md:space-y-5">
              {/* Business Hours Highlight */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 border border-emerald-200 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <MdSchedule className="text-white text-xl sm:text-2xl md:text-3xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2c4d3f] text-sm sm:text-base md:text-lg">Business Hours</h4>
                    <p className="text-[#53785b] text-[10px] sm:text-xs">We're here when you need us</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-1 sm:mb-2">
                    <span className="text-xs sm:text-sm text-[#53785b]">Mon - Sat</span>
                    <span className="text-xs sm:text-sm font-semibold text-[#2c4d3f]">11:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-[#53785b]">Sunday</span>
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
                  <h4 className="font-semibold text-[#2c4d3f] text-xs sm:text-sm mb-0.5 sm:mb-1">Call Now</h4>
                  <p className="text-[10px] sm:text-xs text-[#53785b]">+91-6291-139-691</p>
                </a>

                {/* Email */}
                <a href="mailto:hello@khanconsultants.in" className="group bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 hover:from-orange-100 hover:to-orange-200/50 transition-all hover:shadow-lg border border-emerald-200 hover:border-emerald-300">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-orange-600 flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                    <MdEmail className="text-white text-lg sm:text-xl md:text-2xl" />
                  </div>
                  <h4 className="font-semibold text-[#2c4d3f] text-xs sm:text-sm mb-0.5 sm:mb-1">Email</h4>
                  <p className="text-[10px] sm:text-xs text-[#53785b]">Within 24 hours</p>
                </a>
              </div>

              {/* Location Card */}
              <a href="https://maps.google.com/?q=26/1+Rafi+Ahmed+Kidwai+Road+Kolkata" target="_blank" rel="noopener noreferrer" className="group block bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 border border-emerald-200 hover:border-emerald-300 hover:shadow-lg transition-all">
                <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MdLocationOn className="text-white text-xl sm:text-2xl md:text-3xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2c4d3f] text-sm sm:text-base md:text-lg mb-1 sm:mb-2">Visit Our Office</h4>
                    <p className="text-xs sm:text-sm text-[#53785b] leading-relaxed">
                      26/1 Rafi Ahmed Kidwai Road<br />
                      Kolkata - 700016<br />
                      West Bengal, India
                    </p>
                  </div>
                </div>
              </a>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 border border-emerald-200 shadow-lg">
                <h4 className="font-bold text-[#2c4d3f] text-sm sm:text-base md:text-lg mb-3 sm:mb-4">Follow Us</h4>
                <div className="flex gap-2 sm:gap-3">
                  <a href="https://www.facebook.com/KhanConsultants2025" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center rounded-lg sm:rounded-xl bg-[#1877f2] hover:bg-[#0f6ae6] text-white hover:scale-110 transition-transform shadow-lg">
                    <BsFacebook className="text-base sm:text-lg md:text-xl" />
                  </a>
                  <a href="https://www.instagram.com/khanconsultants2025/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white hover:scale-110 transition-transform shadow-lg">
                    <BsInstagram className="text-base sm:text-lg md:text-xl" />
                  </a>
                  <a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center rounded-lg sm:rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white hover:scale-110 transition-transform shadow-lg">
                    <BsWhatsapp className="text-base sm:text-lg md:text-xl" />
                  </a>
                  <a href="mailto:hello@khanconsultants.in" className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center rounded-lg sm:rounded-xl bg-[#ea4335] hover:bg-[#d93025] text-white hover:scale-110 transition-transform shadow-lg">
                    <MdEmail className="text-base sm:text-lg md:text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6" style={{ backgroundColor: '#d6fadc' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-12 text-center text-[#2c4d3f]">Visit Our Office</h2>
          
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
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 text-white rounded-lg sm:rounded-xl font-semibold transition-all text-xs sm:text-sm md:text-base bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400"
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
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 px-2 text-[#2c4d3f]">Frequently Asked Questions</h2>
            <p className="text-sm sm:text-base md:text-lg px-3 sm:px-4 text-[#53785b]">
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


