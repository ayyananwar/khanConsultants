import { useParams, Link } from 'react-router-dom';
import { designTokens } from '../tokens';
import { FaShieldAlt, FaBullseye, FaBolt, FaBalanceScale, FaPuzzlePiece } from 'react-icons/fa';
import { MdPhone, MdWarning, MdSchedule } from 'react-icons/md';
import { IoMdCheckmarkCircle, IoMdClose, IoMdPeople, IoMdGlobe, IoMdTrophy, IoMdSchool } from 'react-icons/io';
import { RiBuilding2Fill, RiBriefcaseFill } from 'react-icons/ri';

interface ServiceDetailContent {
  [key: string]: {
    title: string;
    heroDescription: string;
    mainDescription: string;
    process: { step: number; title: string; description: string }[];
    warning: string;
    warningPoints: string[];
    packages: { name: string; price: string; features: string[]; popular?: boolean }[];
    whyChoose: { icon: any; text: string }[];
    idealFor: { good: string[]; notGood: string[] };
    timeline: { step: string; detail: string }[];
  };
}

const Services = () => {
  const { id } = useParams();

  const serviceContent: ServiceDetailContent = {
    'gst-accounting': {
      title: 'GST & Accounting',
      heroDescription: 'Get Your GST Sorted Without the Headache',
      mainDescription: 'We don\'t just email you a certificate; we set up your entire Tax Compliance System. Timely, transparently, and under your full control.',
      process: [
        {
          step: 1,
          title: 'Express Filing',
          description: 'We file your application immediately using Aadhaar Authentication for the fastest possible approval (Subject to Govt. approval)'
        },
        {
          step: 2,
          title: 'Complete Handover',
          description: 'We create your permanent User ID and Password and hand them over to you securely. You own your data'
        },
        {
          step: 3,
          title: 'Bank Account Linkage',
          description: 'Mandatory compliance step. Once you open your bank account, we update it on the GST portal to prevent suspension'
        },
        {
          step: 4,
          title: 'The CEO Briefing',
          description: 'A dedicated meeting (Zoom/In-Person) to teach you: How to raise a bill? When to file? How to save tax legally?'
        }
      ],
      warning: '"Cheap GST Registration" is Dangerous. What most Agents don\'t tell you!',
      warningPoints: [
        'The Trap: If you don\'t link your Bank Account within 45 days, your GST is suspended',
        'The Risk: If you miss even a "Nil Return," the Govt charges fines of ₹50/day',
        'No Access: Many agents keep your ID/Password hostage. We give you full control'
      ],
      packages: [
        {
          name: 'Basic',
          price: '₹1,499',
          features: ['GST Registration Certificate', 'Standard Filing (3-5 Days)', 'ID & Password (Emailed)']
        },
        {
          name: 'Standard',
          price: '₹1,999',
          features: ['Everything in Basic +', 'Priority Filing (within 24 Hrs)', 'Full Credential Handover', 'Bank Account Linkage', '1-on-1 CEO Briefing with CA'],
          popular: true
        },
        {
          name: 'Premium',
          price: '₹2,999',
          features: ['Everything in STANDARD +', 'Multiple Consultations with CA', 'First month GST return filing', 'MSME (Udyam) Registration']
        }
      ],
      whyChoose: [
        { icon: IoMdPeople, text: 'Real Experts, Real Support: We have a physical office. Pop in for a chai!' },
        { icon: IoMdGlobe, text: 'Global Standard: We work with International clients, bringing professional standards to Kolkata' },
        { icon: IoMdTrophy, text: '30+ Years Experience: Decades of consulting for businesses just like yours' },
        { icon: IoMdSchool, text: 'Pool of Experts: Finding the right expert for your needs. We don\'t leave you hanging' }
      ],
      idealFor: {
        good: ['Start-ups/ New business owners', 'Ecommerce/Amazon / Flipkart sellers', 'Service providers', 'Exporting Products'],
        notGood: ['Cheapest-only seekers', 'Businesses ignoring compliance', 'Short cut solutions']
      },
      timeline: [
        { step: 'Filing', detail: 'Same day / within 24 hours' },
        { step: 'Certificate', detail: '~10-15 days' },
        { step: 'Full Setup', detail: '~30 days' },
        { step: 'Peace of Mind', detail: 'Ongoing support and compliance' }
      ]
    },
    'legal': {
      title: 'Trade Mark & Legal',
      heroDescription: 'Is your Business Name Legally Protected?',
      mainDescription: 'We ensure your brand is legally protected with a comprehensive trademark registration process. Secure Your Brand Before Someone Else Does.',
      process: [
        {
          step: 1,
          title: 'The Phonetic "Deep Scan"',
          description: 'We run a Phonetic Database Scan (not just Google) to catch hidden sound-alike conflicts that cause rejections 12 months later'
        },
        {
          step: 2,
          title: 'The Future-Proof Strategy',
          description: 'We select the correct "Legal Class" to ensure your protection covers your future products, not just what you sell today'
        },
        {
          step: 3,
          title: 'Your "TM" Protection',
          description: 'We draft the "User Affidavit" to prove ownership history. You get your TM App No. and can start using the ™ symbol immediately'
        },
        {
          step: 4,
          title: 'The Legal Defense Shield',
          description: 'If the Govt. raises an objection (60% probability), our legal team steps in to draft the technical defense and save your brand'
        }
      ],
      warning: 'WARNING: The "₹499 Filing" Trap',
      warningPoints: [
        'ZERO ADVICE: They don\'t want to know your objective or understand your business',
        'The "Blind" Filing: They don\'t check for phonetic conflicts (sound-alike names)',
        'The Rejection Loop: 60% of these cheap applications get objected to by the Govt',
        'The Hidden Cost: When the objection comes, they charge you double to fix it'
      ],
      packages: [
        {
          name: 'Basic',
          price: '₹7,999',
          features: ['Trademark application filing', 'Application number', 'One class']
        },
        {
          name: 'Standard',
          price: '₹14,499',
          features: ['Everything in Basic +', 'Comprehensive Brand Search', 'Objection support (if raised)', 'Application tracking', '1-on-1 CEO Briefing with CA'],
          popular: true
        },
        {
          name: 'Premium',
          price: '₹24,999',
          features: ['Everything in STANDARD +', 'Multiple Consultations with CA', 'Logo + Text strategy guidance', 'Extended objection handling', 'Priority support']
        }
      ],
      whyChoose: [
        { icon: IoMdPeople, text: 'Real Experts, Real Support: We have a physical office. Pop in for a chai!' },
        { icon: IoMdGlobe, text: 'Global Standard: We work with International clients, bringing professional standards to Kolkata' },
        { icon: IoMdTrophy, text: '30+ Years Experience: Decades of consulting for businesses just like yours' },
        { icon: IoMdSchool, text: 'Pool of Experts: Finding the right expert for your needs. We don\'t leave you hanging' }
      ],
      idealFor: {
        good: ['Selling on Amazon, Flipkart, Meesho, Instagram', 'Running a shop, factory, or service business', 'Planning to scale or franchise', 'Exporting Products'],
        notGood: ['Cheapest-only seekers', 'Businesses ignoring compliance', 'Short cut solutions']
      },
      timeline: [
        { step: 'Filing', detail: 'Same day / within 24 hours' },
        { step: 'Application Number', detail: 'Immediately after filing' },
        { step: 'Certificate of Application', detail: '~10-15 days' },
        { step: 'Registration Process', detail: 'Continues as per registry timeline' }
      ]
    },
    'kolkata-corporation': {
      title: 'KMC Services',
      heroDescription: 'From birth & death certificates to trade licenses and property matters',
      mainDescription: 'Dealing with KMC often involves complicated processes, endless queues, and complex documentation. At Khan Consultants, we combine administrative expertise with strong legal backing to ensure your files are processed correctly, legally, and efficiently.',
      process: [
        {
          step: 1,
          title: 'Initial Assessment',
          description: 'We understand your issue, review available documents, and identify the correct KMC process.'
        },
        {
          step: 2,
          title: 'Document Preparation',
          description: 'We help compile, correct, or arrange all required documents — including affidavits, supporting records, and applications.'
        },
        {
          step: 3,
          title: 'Filing & Follow-Ups',
          description: 'We handle submissions, coordination, and follow-ups with the relevant KMC departments.'
        },
        {
          step: 4,
          title: 'Resolution & Closure',
          description: 'We track the matter until completion and keep you informed at every stage. No guesswork. No unnecessary delays.'
        }
      ],
      warning: 'More Than Just Filing—We Handle the Legal Hurdles',
      warningPoints: [
        'KMC processes often get stuck due to missing "legal links"',
        'Unlike standard agents, we are backed by a robust team of lawyers',
        'We handle First Class Magistrate Affidavits, Executive Magistrate Orders, Notarized Declarations, and Indemnity Bonds in-house'
      ],
      packages: [
        {
          name: 'Documentation',
          price: '₹2,999',
          features: ['Initial Consultation', 'Document Review', 'Affidavit Preparation', 'Application Filing']
        },
        {
          name: 'Complete Processing',
          price: '₹4,999',
          features: ['Everything in Documentation +', 'KMC Department Follow-ups', 'Status Tracking', 'Correspondence Handling'],
          popular: true
        },
        {
          name: 'Legal Support Package',
          price: '₹7,999',
          features: ['Everything in Complete Processing +', 'Magistrate Affidavits', 'Legal Declarations', 'Court Order Support (if needed)']
        }
      ],
      whyChoose: [
        { icon: FaShieldAlt, text: 'Strong on-ground experience with KMC procedures' },
        { icon: FaBullseye, text: 'Dedicated handling — not passed between agents' },
        { icon: FaBalanceScale, text: 'Access to a reliable group of local lawyers' },
        { icon: FaBolt, text: 'Clear communication and realistic timelines' }
      ],
      idealFor: {
        good: ['Citizens seeking birth/death certificates', 'Business owners needing trade licenses', 'Property owners resolving tax disputes', 'Those facing complex KMC procedures'],
        notGood: ['Those seeking illegal shortcuts', 'Expecting unrealistic timelines', 'Unwilling to provide required documentation']
      },
      timeline: [
        { step: 'Initial Review', detail: '1-2 days' },
        { step: 'Document Preparation', detail: '3-7 days' },
        { step: 'KMC Filing', detail: '7-15 days' },
        { step: 'Resolution', detail: '15-45 days (depending on complexity)' }
      ]
    }
  };

  const service = serviceContent[id || ''];
  const isKmc = id === 'kolkata-corporation';

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: designTokens.colors.neutral.white }}>
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4" style={{ color: designTokens.colors.sage[900] }}>Service Not Found</h1>
          <p className="mb-6" style={{ color: designTokens.colors.sage[600] }}>The service you're looking for doesn't exist</p>
          <Link to="/" className="px-6 py-3 text-white rounded-lg transition" style={{ backgroundColor: designTokens.colors.sage[900] }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = designTokens.colors.sage[700]} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = designTokens.colors.sage[900]}>
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section - Compact */}
      <section
        className="relative bg-cover bg-center py-16 sm:py-20 md:py-32"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=1200&h=600&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2d23]/92 via-[#2c4d3f]/85 to-[#1f3a2f]/90" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-white text-center">
          <p className="text-xs sm:text-sm tracking-widest font-bold mb-3 sm:mb-4 uppercase text-emerald-300">{service.title}</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">{service.heroDescription}</h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed text-white/85">{service.mainDescription}</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center">
            <a href="tel:+916291139691" className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 text-white rounded-xl font-bold transition bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 hover:shadow-lg hover:shadow-emerald-500/50 transform hover:scale-105">
              <MdPhone className="text-lg" /> Call Now
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white/15 hover:border-emerald-300 transition">
              Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* KMC-Specific: Intro Section */}
      {id === 'kolkata-corporation' && (
        <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6" style={{ backgroundColor: designTokens.colors.neutral.white }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6" style={{ color: designTokens.colors.sage[900] }}>Your Bridge to the Kolkata Municipal Corporation</h2>
            <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: designTokens.colors.sage[600] }}>
              Dealing with KMC often involves complicated processes, endless queues, and complex documentation. Whether you are a citizen securing a birth certificate, a business owner needing a trade license, or a property owner resolving tax disputes, mistakes are costly.
            </p>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: designTokens.colors.sage[600] }}>
              At Khan Consultants, we combine administrative expertise with strong legal backing to ensure your files are processed correctly, legally, and efficiently.
            </p>
          </div>
        </section>
      )}

      {/* KMC-Specific: Core Services Section */}
      {id === 'kolkata-corporation' && (
        <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6" style={{ backgroundColor: designTokens.colors.sage[50] }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3" style={{ color: designTokens.colors.sage[900] }}>Our Core Services</h2>
            <p className="text-center text-sm sm:text-base mb-10 max-w-3xl mx-auto" style={{ color: designTokens.colors.sage[600] }}>
              Our KMC services are broadly divided into three key areas:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Service 1: Certificates */}
              <div className="rounded-2xl p-6 sm:p-8 hover:shadow-lg transition" style={{ backgroundColor: designTokens.colors.neutral.white, border: `1px solid ${designTokens.colors.sage[100]}` }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: designTokens.colors.sage[100] }}>
                  <IoMdPeople className="text-3xl" style={{ color: designTokens.colors.sage[600] }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: designTokens.colors.sage[900] }}>Birth & Death Certificates</h3>
                <p className="text-sm mb-4" style={{ color: designTokens.colors.sage[600] }}>We assist with more than just new registrations. We specialize in the difficult cases that others reject.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm" style={{ color: designTokens.colors.sage[700] }}>
                    <span className="flex-shrink-0 font-bold" style={{ color: designTokens.colors.sage[600] }}>•</span>
                    <span>New Birth/Death Registrations</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: designTokens.colors.sage[700] }}>
                    <span className="flex-shrink-0 font-bold" style={{ color: designTokens.colors.sage[600] }}>•</span>
                    <span>Corrections: Spelling errors and name changes</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: designTokens.colors.sage[700] }}>
                    <span className="flex-shrink-0 font-bold" style={{ color: designTokens.colors.sage[600] }}>•</span>
                    <span>Delayed Registration: Handling cases older than 1 year (Magistrate permissions)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: designTokens.colors.sage[700] }}>
                    <span className="flex-shrink-0 font-bold" style={{ color: designTokens.colors.sage[600] }}>•</span>
                    <span>Digitization: Converting old manual certificates to digital online records</span>
                  </li>
                </ul>
                <Link to="/contact" className="inline-block px-5 py-2.5 text-white rounded-lg font-semibold transition text-sm" style={{ backgroundColor: designTokens.colors.sage[600] }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = designTokens.colors.sage[700]} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = designTokens.colors.sage[600]}>
                  View Services
                </Link>
              </div>

              {/* Service 2: Licenses */}
              <div className="rounded-2xl p-6 sm:p-8 hover:shadow-lg transition" style={{ backgroundColor: designTokens.colors.neutral.white, border: `1px solid ${designTokens.colors.sage[100]}` }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: designTokens.colors.sage[100] }}>
                  <RiBriefcaseFill className="text-3xl" style={{ color: designTokens.colors.sage[600] }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: designTokens.colors.sage[900] }}>Trade & Commercial Licenses</h3>
                <p className="text-sm mb-4" style={{ color: designTokens.colors.sage[600] }}>Start your business on the right foot with full KMC compliance.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm" style={{ color: designTokens.colors.sage[700] }}>
                    <span className="flex-shrink-0 font-bold" style={{ color: designTokens.colors.sage[600] }}>•</span>
                    <span>New Certificate of Enlistment (Trade License)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: designTokens.colors.sage[700] }}>
                    <span className="flex-shrink-0 font-bold" style={{ color: designTokens.colors.sage[600] }}>•</span>
                    <span>License Renewals & Amalgamation</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: designTokens.colors.sage[700] }}>
                    <span className="flex-shrink-0 font-bold" style={{ color: designTokens.colors.sage[600] }}>•</span>
                    <span>Food License (FSSAI) & Pharmacy License</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: designTokens.colors.sage[700] }}>
                    <span className="flex-shrink-0 font-bold" style={{ color: designTokens.colors.sage[600] }}>•</span>
                    <span>Shop & Establishment Acts</span>
                  </li>
                </ul>
                <Link to="/contact" className="inline-block px-5 py-2.5 text-white rounded-lg font-semibold transition text-sm" style={{ backgroundColor: designTokens.colors.sage[600] }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = designTokens.colors.sage[700]} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = designTokens.colors.sage[600]}>
                  Learn More
                </Link>
              </div>

              {/* Service 3: Property */}
              <div className="rounded-2xl p-6 sm:p-8 hover:shadow-lg transition" style={{ backgroundColor: designTokens.colors.neutral.white, border: `1px solid ${designTokens.colors.sage[100]}` }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: designTokens.colors.sage[100] }}>
                  <RiBuilding2Fill className="text-3xl" style={{ color: designTokens.colors.sage[600] }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: designTokens.colors.sage[900] }}>Property & Land Matters</h3>
                <p className="text-sm mb-4" style={{ color: designTokens.colors.sage[600] }}>Protect your most valuable assets with correct records. We handle complex land and tax matters directly with the KMC assessment department.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm" style={{ color: designTokens.colors.sage[700] }}>
                    <span className="flex-shrink-0 font-bold" style={{ color: designTokens.colors.sage[600] }}>•</span>
                    <span>Mutation: Separation and apportionment of property</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: designTokens.colors.sage[700] }}>
                    <span className="flex-shrink-0 font-bold" style={{ color: designTokens.colors.sage[600] }}>•</span>
                    <span>Assessment: Resolving property tax disputes and hearing attendance</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: designTokens.colors.sage[700] }}>
                    <span className="flex-shrink-0 font-bold" style={{ color: designTokens.colors.sage[600] }}>•</span>
                    <span>Thika Tenancy: Expert handling of Thika Controller permissions and returns</span>
                  </li>
                </ul>
                <Link to="/contact" className="inline-block px-5 py-2.5 text-white rounded-lg font-semibold transition text-sm" style={{ backgroundColor: designTokens.colors.sage[600] }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = designTokens.colors.sage[700]} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = designTokens.colors.sage[600]}>
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {isKmc ? (
        <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6" style={{ backgroundColor: designTokens.colors.sage[50] }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center justify-center mb-5 p-4 rounded-full bg-white border border-emerald-200">
                <FaBalanceScale className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-600" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#2c4d3f]">
                More Than Just Filing—We Handle the Legal Hurdles
              </h2>
              <p className="text-base sm:text-lg text-[#53785b] max-w-3xl mx-auto leading-relaxed">
                KMC processes often get stuck due to missing "legal links." Unlike standard agents, Khan Consultants is backed by a robust team of lawyers. We handle the drafting and execution of all necessary legal supports in-house. This ensures your matter is not handled in isolation, but as part of a complete solution.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {[
                'First Class Magistrate Affidavits',
                'Executive Magistrate Orders',
                'Notarized Declarations',
                'Indemnity Bonds',
              ].map((item, index) => (
                <div key={index} className="rounded-2xl p-6 sm:p-7 bg-white border border-[#d6fadc] hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl text-emerald-600 flex-shrink-0">✓</span>
                    <p className="text-base sm:text-lg font-semibold text-[#2c4d3f] leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6" style={{ background: 'linear-gradient(to right, #fef2f2, #fff7ed)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block mb-4 p-4 rounded-full" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)' }}>
                <MdWarning className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: '#dc2626' }} />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{ color: '#7f1d1d' }}>{service.warning}</h2>
              <p className="text-base sm:text-lg text-red-900">Don't risk your business on incomplete or careless filings</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {service.warningPoints.map((point, index) => (
                <div key={index} className="rounded-2xl p-7 sm:p-8 bg-white border-l-4 hover:shadow-xl transition-all" style={{ borderColor: '#ef4444', background: 'linear-gradient(135deg, white, rgba(239, 68, 68, 0.05))' }}>
                  <div className="flex gap-4">
                    <div className="text-2xl flex-shrink-0" style={{ color: '#dc2626' }}>⚠️</div>
                    <p className="text-base sm:text-lg leading-relaxed font-medium" style={{ color: '#7f1d1d' }}>{point}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Section - Clean Timeline */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-[#d6fadc]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 pb-8 sm:pb-12 border-b-2 border-[#c5f4d4]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-[#2c4d3f] flex items-center justify-center gap-3">
              <FaPuzzlePiece className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-600" aria-hidden="true" />
              Our Process
            </h2>
            <p className="text-base sm:text-lg text-[#53785b]">The Safe-Start Protocol - Securing your {service.title} in {service.process.length} steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {service.process.map((item, index) => (
              <div key={index} className="relative rounded-2xl p-8 bg-white border-2 border-[#e8f0eb] hover:shadow-xl hover:-translate-y-2 transition-all">
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-br-2xl flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{item.step}</span>
                </div>
                <div className="pl-6 pt-4">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#2c4d3f]">{item.title}</h3>
                  <p className="text-base text-[#53785b] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {!isKmc && (
        <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 pb-8 sm:pb-12 border-b-2 border-[#d6fadc]">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-[#2c4d3f]">Pricing & Packages</h2>
              <p className="text-base sm:text-lg text-[#53785b]">Choose the level of service your business needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {service.packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl overflow-hidden transition-all transform ${
                    pkg.popular
                      ? 'ring-2 ring-emerald-400 hover:shadow-2xl hover:scale-105 bg-gradient-to-br from-white to-emerald-50/30'
                      : 'border-2 border-[#e8f0eb] hover:shadow-xl hover:-translate-y-2 bg-white'
                  } p-8`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-5 py-2 rounded-bl-xl text-sm font-bold">
                      Most Popular
                    </div>
                  )}

                  <h3 className="text-2xl sm:text-2xl font-bold mb-2 text-[#2c4d3f] pt-4">{pkg.name}</h3>

                  <div className="mb-6 pb-6 border-b-2 border-[#e8f0eb]">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-4xl sm:text-5xl font-bold ${pkg.popular ? 'text-emerald-600' : 'text-[#2c4d3f]'}`}>
                        {pkg.price}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#2c4d3f]">
                        <span className={`text-xl flex-shrink-0 ${pkg.popular ? 'text-emerald-500' : 'text-teal-500'}`}>✓</span>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-all transform ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-emerald-500/50 hover:shadow-lg hover:-translate-y-1'
                        : 'bg-[#d6fadc] text-[#2c4d3f] border-2 border-emerald-300 hover:bg-emerald-300/30 hover:shadow-lg hover:-translate-y-1'
                    }`}
                  >
                    Get Started →
                  </Link>
                </div>
              ))}
            </div>
            
            {id === 'legal' && (
              <p className="text-center text-xs mt-6 max-w-3xl mx-auto" style={{ color: designTokens.colors.sage[500] }}>
                * Pricing based on "Sole Proprietorship" model. Includes Govt Fees (₹4,500) + Professional Fees. 
                Quotes will be provided based on your specific business requirements.
              </p>
            )}
          </div>
        </section>
      )}

      {/* Timeline & What You Receive - Compact */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-[#d6fadc]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 pb-8 sm:pb-12 border-b-2 border-[#c5f4d4]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 flex items-center justify-center gap-3 text-[#2c4d3f]">
              <MdSchedule className="text-4xl" /> Timeline & What You'll Receive
            </h2>
            <p className="text-base sm:text-lg text-[#53785b]">Here's what to expect throughout the process</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {service.timeline.map((item, index) => (
              <div key={index} className="rounded-2xl p-8 bg-white border-2 border-[#e8f0eb] hover:shadow-xl hover:-translate-y-2 transition-all flex gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white flex items-center justify-center flex-shrink-0 font-bold text-2xl">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="text-xl sm:text-2xl font-bold mb-2 text-[#2c4d3f]">{item.step}</h4>
                  <p className="text-base text-[#53785b] leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 rounded-2xl p-8 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-center shadow-xl">
            <p className="text-2xl sm:text-3xl font-bold mb-2 flex items-center justify-center gap-3">
              <FaShieldAlt className="text-3xl" /> Complete 360° Guidance
            </p>
            <p className="text-lg text-emerald-50">We provide support and guidance at every stage of your journey</p>
          </div>
        </div>
      </section>

      {/* Who Is This For - Split Layout */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-[#d6fadc]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 pb-8 sm:pb-12 border-b-2 border-[#c5f4d4]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2c4d3f]">Who Is This Service For?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            <div className="rounded-2xl p-8 bg-white border-2 border-emerald-200 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl sm:text-2xl font-bold mb-6 flex items-center gap-3 text-emerald-600">
                <IoMdCheckmarkCircle className="text-3xl" /> This Service Is Ideal For
              </h3>
              <ul className="space-y-4">
                {service.idealFor.good.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-base text-[#2c4d3f]">
                    <span className="text-2xl text-emerald-500 flex-shrink-0">✓</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl p-8 bg-red-50 border-2 border-red-200 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl sm:text-2xl font-bold mb-6 flex items-center gap-3 text-red-600">
                <IoMdClose className="text-3xl" /> This Is Not Fit For
              </h3>
              <ul className="space-y-4">
                {service.idealFor.notGood.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-base text-red-900">
                    <span className="text-2xl text-red-500 flex-shrink-0">✕</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose - Compact */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 pb-8 sm:pb-12 border-b-2 border-[#d6fadc]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-[#2c4d3f]">Why Work with Khan Consultants?</h2>
            <p className="text-base sm:text-lg text-[#53785b]">Excellence in every step of your journey</p>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 ${isKmc ? 'lg:grid-cols-3' : ''} gap-6 sm:gap-8`}>
            {service.whyChoose.map((reason, index) => {
              const IconComponent = reason.icon;
              const isKmcCenter = isKmc && service.whyChoose.length === 3 && index === 2;
              return (
                <div
                  key={index}
                  className={`rounded-2xl p-8 bg-gradient-to-br from-white to-emerald-50/20 border-2 border-[#e8f0eb] hover:shadow-xl hover:-translate-y-2 transition-all flex flex-col gap-4 ${
                    isKmcCenter ? 'sm:col-span-2 sm:justify-self-center lg:col-span-1' : ''
                  }`}
                >
                  <div className="text-5xl text-emerald-500">
                    <IconComponent />
                  </div>
                  <p className="text-lg text-[#2c4d3f] font-semibold leading-relaxed">{reason.text}</p>
                </div>
              );
            })}
          </div>

          {!isKmc && (
            <div className="mt-12 sm:mt-16 rounded-2xl p-8 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 flex items-center gap-3 text-amber-900">
                <MdWarning className="text-3xl text-amber-600" /> Why Not Go With Cheaper Alternatives?
              </h3>
              <p className="text-base text-amber-800 mb-6">Here's what budget services usually skip:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <span className="text-2xl text-amber-600 flex-shrink-0">⚠️</span>
                  <p className="text-amber-900">No brand search leading to rejection</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl text-amber-600 flex-shrink-0">⚠️</span>
                  <p className="text-amber-900">Wrong class filing making it useless</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl text-amber-600 flex-shrink-0">⚠️</span>
                  <p className="text-amber-900">No objection reply causing rejection</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl text-amber-600 flex-shrink-0">⚠️</span>
                  <p className="text-amber-900">No accountability when issues arise</p>
                </div>
              </div>
              <p className="text-base font-semibold mt-8 flex items-center justify-center gap-2 text-amber-900 bg-white/50 px-6 py-3 rounded-xl">
                <FaBalanceScale className="text-xl" /> Your application must be accurate and perfect—or you'll pay the price.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Final CTA - Premium */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 text-white bg-gradient-to-br from-[#1a2d23] via-[#2c4d3f] to-[#1f3a2f]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">Ready to Get Started?</h2>
          <p className="text-lg sm:text-xl mb-10 sm:mb-12 text-emerald-100">Book your free consultation with our experts today</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <a 
              href="tel:+916291139691" 
              className="px-8 sm:px-10 py-4 rounded-xl font-bold text-lg transition-all transform hover:shadow-emerald-500/50 hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white inline-flex items-center justify-center gap-3"
            >
              <MdPhone className="text-2xl" /> Call +91-6291-139-691
            </a>
            <Link 
              to="/contact" 
              className="px-8 sm:px-10 py-4 border-2 border-emerald-400 rounded-xl font-bold text-lg transition-all transform hover:bg-emerald-500/20 hover:shadow-lg hover:-translate-y-1 text-white inline-flex items-center justify-center"
            >
              Book a Free Call →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;



