import { Link } from 'react-router-dom';
import { designTokens } from '../../tokens';
import { FaShieldAlt, FaCheckCircle, FaFileAlt, FaUserTie } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';

const Certificates = () => {
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

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2d23]/92 via-[#2c4d3f]/85 to-[#1f3a2f]/90" />
        <div className="relative max-w-6xl mx-auto px-3 sm:px-4 md:px-6 text-white text-center">
          <p className="text-[10px] sm:text-xs md:text-sm tracking-widest font-bold mb-2 sm:mb-3 md:mb-4 uppercase text-emerald-300">KMC Services</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4 md:mb-5 lg:mb-6">{service.title}</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed text-white/90">{service.heroDescription}</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-5 sm:px-6 md:px-7 lg:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base text-white rounded-lg sm:rounded-xl font-bold transition bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 hover:shadow-lg hover:shadow-emerald-500/50 transform hover:scale-105">
              Start Your Case Now!
            </Link>
            <a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 md:px-7 lg:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base border-2 border-white text-white rounded-lg sm:rounded-xl font-bold hover:bg-white/15 hover:border-emerald-300 transition">
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
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-[#53785b] font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-white px-3 sm:px-4">MAIN PRIORITY</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#53785b]/30 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3" style={{ color: designTokens.colors.sage[900] }}>Your Birth Certificate. Handled Correctly.</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#53785b] to-[#2c4d3f] mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12">
            <p className="text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4" style={{ color: designTokens.colors.sage[600] }}>
              A Birth Certificate is the most important document for school admission, passports, and visas. But in Kolkata, getting it right can be stressful. One spelling mistake can cause years of trouble.
            </p>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4" style={{ color: designTokens.colors.sage[600] }}>
              We don't just "submit files." We check every detail before it goes to the KMC office to ensure your application is approved the first time.
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 mb-6 sm:mb-8 md:mb-10">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6" style={{ color: designTokens.colors.sage[900] }}>What We Handle:</h3>
            <ul className="space-y-3 sm:space-y-4">
              {service.birthCertificateServices.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-xl sm:text-2xl text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base md:text-lg" style={{ color: designTokens.colors.sage[700] }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6" style={{ color: designTokens.colors.sage[600] }}>
              At Khan Consultants, we help residents of Kolkata complete certificate-related work correctly, legally, and without unnecessary stress.
            </p>
            <Link to="/contact" className="inline-block px-6 sm:px-8 py-3 sm:py-4 text-white rounded-lg sm:rounded-xl font-bold transition text-sm sm:text-base" style={{ backgroundColor: designTokens.colors.sage[600] }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = designTokens.colors.sage[700]} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = designTokens.colors.sage[600]}>
              Request a Quote for Birth Certificate
            </Link>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-3 sm:px-4 md:px-6" style={{ background: 'linear-gradient(135deg, #fef2f2, #fff7ed)' }}>
        <div className="max-w-5xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-red-700 font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-transparent px-3 sm:px-4">COMMON ISSUES</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-red-400/50 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-red-900 leading-tight">Facing Issues With Your Birth Certificate?</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-red-800 max-w-3xl mx-auto px-2">Here are some common Birth Certificate problems we handle:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
            {service.commonProblems.map((problem, index) => (
              <div 
                key={index} 
                className="group relative rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 bg-white border-2 border-red-300 hover:border-red-500 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white text-xl sm:text-2xl shadow-lg">
                    ⚠️
                  </div>
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-red-900">{problem}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm sm:text-base md:text-lg text-red-900 font-semibold mb-6 sm:mb-8">If your case has been rejected earlier or seems complicated, we can review it and guide you properly.</p>
            <a href="https://wa.me/916291139691" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-white rounded-lg sm:rounded-xl font-bold transition text-sm sm:text-base bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 hover:shadow-lg transform hover:scale-105">
              <RiWhatsappFill className="text-xl sm:text-2xl" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Other Important Certificates */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6" style={{ backgroundColor: designTokens.colors.sage[50] }}>
        <div className="max-w-6xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-[#53785b] font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-[#f0f4f1] px-3 sm:px-4">OTHER SERVICES</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#53785b]/30 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3" style={{ color: designTokens.colors.sage[900] }}>Other Civil Documents We Manage</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#53785b] to-[#2c4d3f] mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-xs sm:text-sm md:text-base max-w-3xl mx-auto px-2" style={{ color: designTokens.colors.sage[600] }}>
              We provide the same expert fast-tracking for other essential life documents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {service.otherCertificates.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 hover:shadow-lg transition bg-white border border-[#e8f0eb]">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-5 md:mb-6" style={{ backgroundColor: designTokens.colors.sage[100] }}>
                    <IconComponent className="text-2xl sm:text-3xl" style={{ color: designTokens.colors.sage[600] }} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ color: designTokens.colors.sage[900] }}>{cert.title}</h3>
                  <p className="text-xs sm:text-sm" style={{ color: designTokens.colors.sage[600] }}>{cert.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12 text-center">
            <p className="text-sm sm:text-base md:text-lg font-semibold" style={{ color: designTokens.colors.sage[700] }}>We provide you a single stop for all your certification needs.</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-3 sm:px-4 md:px-6 bg-[#d6fadc]">
        <div className="max-w-5xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-[#53785b] font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-[#d6fadc] px-3 sm:px-4">OUR PROCESS</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#53785b]/30 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-[#2c4d3f] leading-tight">
              How We Work
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#53785b] to-[#2c4d3f] mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
            <p className="text-sm sm:text-base md:text-lg text-[#53785b] px-2">No confusion. No unnecessary back-and-forth. We guide you along the way.</p>
          </div>

          {/* 2x2 Grid from Mobile */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {service.process.map((item, index) => (
              <div key={index} className="relative rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 bg-white border-2 border-[#e8f0eb] hover:shadow-xl hover:-translate-y-2 transition-all">
                <div className="absolute top-0 left-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-br-xl sm:rounded-br-2xl flex items-center justify-center">
                  <span className="text-white text-lg sm:text-xl md:text-2xl font-bold">{item.step}</span>
                </div>
                <div className="pl-4 sm:pl-5 md:pl-6 pt-3 sm:pt-4">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 text-[#2c4d3f]">{item.title}</h3>
                  <p className="text-sm sm:text-base text-[#53785b] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kolkata Trusts Us */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-3 sm:px-4 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Professional Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="inline-block">
              <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-[#53785b] font-bold mb-2 sm:mb-3 uppercase relative">
                <span className="relative z-10 bg-white px-3 sm:px-4">WHY KOLKATA TRUSTS US</span>
                <span className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#53785b]/30 to-transparent"></span>
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3" style={{ color: designTokens.colors.sage[900] }}>Local Experts, Legal Backing.</h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#53785b] to-[#2c4d3f] mx-auto mb-4 sm:mb-6 md:mb-8 rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6" style={{ color: designTokens.colors.sage[700] }}>
              Agents outside the KMC building often promise quick results but leave you with half-done work or fake promises. Khan Consultants is different. We have a proper office, a legal team for affidavits, and years of experience dealing with Kolkata Municipal Corporation officials. We do it the right way, legally and securely.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 text-white bg-gradient-to-br from-[#1a2d23] via-[#2c4d3f] to-[#1f3a2f]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Get Your Papers in Order Today.</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 text-emerald-100">Stop worrying about KMC rules. Let us handle the paperwork for you.</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link 
              to="/contact" 
              className="px-8 sm:px-10 py-4 rounded-xl font-bold text-base sm:text-lg transition-all transform hover:shadow-emerald-500/50 hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white inline-flex items-center justify-center"
            >
              Start Your Case Now!
            </Link>
            <a 
              href="https://wa.me/916291139691" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 sm:px-10 py-4 border-2 border-emerald-400 rounded-xl font-bold text-base sm:text-lg transition-all transform hover:bg-emerald-500/20 hover:shadow-lg hover:-translate-y-1 text-white inline-flex items-center justify-center gap-3"
            >
              <RiWhatsappFill className="text-2xl" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificates;
