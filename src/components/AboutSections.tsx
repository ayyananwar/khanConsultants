import { FaLinkedin } from 'react-icons/fa';
import { MdBalance, MdEmojiEvents, MdLightbulb, MdHandshake } from 'react-icons/md';

function OurStory() {
  const milestones = [
    { year: 2010, title: 'Founded', description: 'Khan Consultants established with a vision to transform businesses through expert consulting.', color: 'bg-blue-500', iconBg: 'bg-blue-50', borderColor: 'border-blue-100' },
    { year: 2013, title: 'Regional Expansion', description: 'Expanded operations across Asia-Pacific region with 50+ team members.', color: 'bg-emerald-500', iconBg: 'bg-emerald-50', borderColor: 'border-emerald-100' },
    { year: 2016, title: '100+ Projects', description: 'Achieved milestone of 100 successful consulting projects across diverse industries.', color: 'bg-violet-500', iconBg: 'bg-violet-50', borderColor: 'border-violet-100' },
    { year: 2019, title: 'Digital Innovation', description: 'Launched digital transformation services, becoming industry leaders in digital consulting.', color: 'bg-orange-500', iconBg: 'bg-orange-50', borderColor: 'border-orange-100' },
    { year: 2022, title: 'Global Recognition', description: 'Recognized as Top Consulting Firm by international business publications.', color: 'bg-amber-500', iconBg: 'bg-amber-50', borderColor: 'border-amber-100' },
    { year: 2025, title: 'Industry Leader', description: 'Now serving 500+ clients with 200+ team members across 15 countries.', color: 'bg-teal-500', iconBg: 'bg-teal-50', borderColor: 'border-teal-100' },
  ];

  return (
    <section id="story" className="py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--color-3d6b56)] font-bold mb-2 sm:mb-3 uppercase">Our Journey</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            15+ Years of Building Trust
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-[var(--color-3d6b56)] mx-auto rounded-full" />
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto mt-3 sm:mt-4 leading-relaxed">
            From a small consultancy to Kolkata's most trusted name in business services.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line — desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-px" />

          {/* Mobile timeline */}
          <div className="md:hidden space-y-3">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-3.5">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-10 h-10 rounded-full ${milestone.color} flex items-center justify-center shadow-md`}>
                    <span className="text-white text-xs font-bold">{milestone.year.toString().slice(-2)}</span>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-6 bg-gray-200 mt-1.5" />
                  )}
                </div>
                <div className="pt-1.5 pb-2">
                  <span className="text-[10px] font-bold text-gray-400 tracking-wider">{milestone.year}</span>
                  <h3 className="text-[15px] font-bold text-gray-900 mb-0.5">{milestone.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop alternating timeline */}
          <div className="hidden md:block">
            <div className="space-y-0">
              {milestones.map((milestone, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={index} className="relative flex items-center mb-10 last:mb-0">
                    <div className={`w-[calc(50%-2.5rem)] ${isEven ? '' : 'order-3'}`}>
                      {isEven && (
                        <div className={`rounded-xl p-5 border ${milestone.borderColor} ${milestone.iconBg} hover:shadow-md transition-all mr-4`}>
                          <span className="text-[10px] font-bold text-gray-400 tracking-wider">{milestone.year}</span>
                          <h3 className="text-lg font-bold text-gray-900 mt-0.5 mb-1">{milestone.title}</h3>
                          <p className="text-sm text-gray-500 leading-relaxed">{milestone.description}</p>
                        </div>
                      )}
                    </div>
                    <div className="relative z-10 flex-shrink-0 order-2">
                      <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full ${milestone.color} flex items-center justify-center shadow-lg ring-4 ring-white`}>
                        <span className="text-white text-sm lg:text-base font-bold">{milestone.year.toString().slice(-2)}</span>
                      </div>
                    </div>
                    <div className={`w-[calc(50%-2.5rem)] ${isEven ? 'order-3' : ''}`}>
                      {!isEven && (
                        <div className={`rounded-xl p-5 border ${milestone.borderColor} ${milestone.iconBg} hover:shadow-md transition-all ml-4`}>
                          <span className="text-[10px] font-bold text-gray-400 tracking-wider">{milestone.year}</span>
                          <h3 className="text-lg font-bold text-gray-900 mt-0.5 mb-1">{milestone.title}</h3>
                          <p className="text-sm text-gray-500 leading-relaxed">{milestone.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LeadershipTeam() {
  const leaders = [
    {
      name: 'Naz K',
      role: 'CEO',
      bio: 'Visionary leader with 25+ years of consulting experience.',
      image: '/ceo.jpeg',
      photoPosition: '50% 22%',
      linkedin: 'https://www.linkedin.com/in/nazk/',
    },
    {
      name: 'Ayyan Anwar',
      role: 'Technology Lead',
      bio: 'Leads digital systems, product technology, and online growth initiatives.',
      image: '/ayyan.jpg',
      photoPosition: '50% 26%',
      linkedin: 'https://www.linkedin.com/in/ayyan-anwar/',
    },
  ];

  return (
    <section id="team" className="py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 bg-[var(--color-3d6b56)] relative overflow-hidden">
      {/* Decorative ambient glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/[0.07] rounded-full -mr-48 -mt-48 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-amber-400/[0.05] rounded-full -ml-56 -mb-56 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header — dark section style */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <p className="text-[10px] sm:text-xs tracking-[0.2em] text-emerald-300 font-bold mb-2 sm:mb-3 uppercase">Our Leadership</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Meet the <span className="text-amber-300">Visionaries</span>
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-emerald-400 mx-auto rounded-full" />
          <p className="text-white/80 text-sm sm:text-base max-w-lg mx-auto mt-3 sm:mt-4 leading-relaxed">
            Experienced leaders driving our vision and success.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="rounded-2xl h-full flex flex-col items-center text-center bg-white/[0.14] backdrop-blur-sm border border-white/[0.16] shadow-lg shadow-black/10 hover:bg-white/[0.2] transition-all duration-300 px-5 sm:px-6 pt-6 sm:pt-7 pb-5 sm:pb-6"
            >
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1.5 bg-gradient-to-br from-amber-300 via-emerald-300 to-cyan-300 shadow-lg shadow-black/20 mb-4 sm:mb-5">
                <div className="w-full h-full rounded-full overflow-hidden bg-white/90">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: leader.photoPosition }}
                  />
                </div>
              </div>

              <div className="w-full flex-1 flex flex-col items-center">
                <h3 className="text-base sm:text-lg font-bold text-white mb-1">{leader.name}</h3>
                <p className="text-emerald-300 text-xs sm:text-sm font-semibold mb-2.5">{leader.role}</p>
                <p className="text-white/85 text-sm leading-relaxed mb-4 sm:mb-5 max-w-[30ch]">{leader.bio}</p>

                <div className="pt-3 border-t border-white/[0.15] mt-auto w-full flex justify-center">
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg px-3.5 py-2 bg-white/12 text-white/85 hover:bg-white/22 hover:text-white transition-all text-xs sm:text-sm font-semibold"
                    title="LinkedIn"
                    aria-label={`${leader.name} LinkedIn profile`}
                  >
                    <FaLinkedin className="w-3.5 h-3.5" />
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const values = [
    {
      icon: <MdBalance className="text-2xl sm:text-3xl" />,
      title: 'Integrity',
      description: 'We operate with unwavering honesty and ethical principles. Trust is the foundation of every relationship we build.',
      bg: 'bg-violet-50', border: 'border-violet-200', iconBg: 'bg-violet-100', iconColor: 'text-violet-600',
    },
    {
      icon: <MdEmojiEvents className="text-2xl sm:text-3xl" />,
      title: 'Excellence',
      description: 'We pursue excellence in every engagement. Quality and attention to detail define our work and results.',
      bg: 'bg-amber-50', border: 'border-amber-200', iconBg: 'bg-amber-100', iconColor: 'text-amber-600',
    },
    {
      icon: <MdLightbulb className="text-2xl sm:text-3xl" />,
      title: 'Innovation',
      description: 'We embrace creative thinking and forward-looking solutions. We challenge conventions to drive progress.',
      bg: 'bg-blue-50', border: 'border-blue-200', iconBg: 'bg-blue-100', iconColor: 'text-blue-600',
    },
    {
      icon: <MdHandshake className="text-2xl sm:text-3xl" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork. Success comes from diverse perspectives working toward shared goals.',
      bg: 'bg-emerald-50', border: 'border-emerald-200', iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600',
    },
  ];

  return (
    <section id="values" className="py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--color-3d6b56)] font-bold mb-2 sm:mb-3 uppercase">Our Core Values</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            Principles That Guide Us
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-[var(--color-3d6b56)] mx-auto rounded-full" />
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto mt-3 sm:mt-4 leading-relaxed">
            These principles define who we are and how we deliver results.
          </p>
        </div>

        {/* Colored cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {values.map((value, index) => (
            <div
              key={index}
              className={`rounded-2xl p-5 sm:p-6 border ${value.bg} ${value.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5`}
            >
              <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${value.iconBg} ${value.iconColor} flex items-center justify-center mb-3.5`}>
                {value.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5">{value.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { OurStory, LeadershipTeam, ValuesSection };
