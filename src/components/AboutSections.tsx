import { HiUserCircle } from 'react-icons/hi2';
import { FaLinkedin } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { designTokens } from '../tokens';
import { MdBalance, MdEmojiEvents, MdLightbulb, MdHandshake } from 'react-icons/md';

// Timeline Component
function OurStory() {
  const milestones = [
    {
      year: 2010,
      title: 'Founded',
      description: 'Khan Consultants established with a vision to transform businesses through expert consulting.',
    },
    {
      year: 2013,
      title: 'Regional Expansion',
      description: 'Expanded operations across Asia-Pacific region with 50+ team members.',
    },
    {
      year: 2016,
      title: '100+ Projects',
      description: 'Achieved milestone of 100 successful consulting projects across diverse industries.',
    },
    {
      year: 2019,
      title: 'Digital Innovation',
      description: 'Launched digital transformation services, becoming industry leaders in digital consulting.',
    },
    {
      year: 2022,
      title: 'Global Recognition',
      description: 'Recognized as Top Consulting Firm by international business publications.',
    },
    {
      year: 2025,
      title: 'Industry Leader',
      description: 'Now serving 500+ clients with 200+ team members across 15 countries.',
    },
  ];

  return (
    <section id="story" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-3 sm:px-4 md:px-6" style={{ backgroundColor: designTokens.colors.neutral.white }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 pb-6 sm:pb-8 md:pb-10 lg:pb-12" style={{ borderBottom: '2px solid #d6fadc' }}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: designTokens.colors.sage[900] }}>
            Our Journey
          </h2>
        </div>

        {/* Timeline - Simplified vertical layout */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative flex gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {/* Timeline Dot and Line */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 text-sm sm:text-base md:text-lg" style={{ background: 'linear-gradient(to right, #10b981, #14b8a6)' }}>
                  {milestone.year % 10}
                </div>
                {index < milestones.length - 1 && (
                  <div className="w-1 h-12 sm:h-14 md:h-16 lg:h-20" style={{ backgroundColor: '#d6fadc' }}></div>
                )}
              </div>

              {/* Content Card */}
              <div className="flex-1 pb-4 sm:pb-5 md:pb-6 lg:pb-8">
                <div className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 transition-all border-2 hover:shadow-xl hover:-translate-y-2" style={{ backgroundColor: 'linear-gradient(to bottom right, white, rgb(209, 250, 229, 0.2))', borderColor: '#e8f0eb' }}>
                  <p className="font-bold text-lg sm:text-xl md:text-2xl" style={{ color: '#10b981' }}>{milestone.year}</p>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mt-1 sm:mt-2 mb-1 sm:mb-2" style={{ color: designTokens.colors.sage[900] }}>{milestone.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg" style={{ color: designTokens.colors.sage[600] }}>{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Leadership Team Component
function LeadershipTeam() {
  const leaders = [
    {
      name: 'Aamir Khan',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 25+ years of consulting experience.',
    },
    {
      name: 'Priya Sharma',
      role: 'Chief Operating Officer',
      bio: 'Operations expert driving organizational excellence.',
    },
    {
      name: 'Rajesh Patel',
      role: 'Head of Strategy',
      bio: 'Strategic thinker with deep industry knowledge.',
    },
    {
      name: 'Anjali Singh',
      role: 'Chief Financial Officer',
      bio: 'Financial strategist ensuring sustainable growth.',
    },
    {
      name: 'Vikram Kumar',
      role: 'Head of Digital Innovation',
      bio: 'Technology leader transforming business models.',
    },
    {
      name: 'Neha Gupta',
      role: 'Head of Talent Development',
      bio: 'People-focused leader building high-performing teams.',
    },
    {
      name: 'Arjun Mishra',
      role: 'Head of Client Success',
      bio: 'Customer advocate ensuring delivery excellence.',
    },
    {
      name: 'Deepa Nair',
      role: 'Head of Research & Analytics',
      bio: 'Data-driven strategist providing market insights.',
    },
  ];

  return (
    <section id="team" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-3 sm:px-4 md:px-6" style={{ backgroundColor: '#d6fadc' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 pb-6 sm:pb-8 md:pb-10 lg:pb-12" style={{ borderBottom: '2px solid #c5f4d4' }}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3" style={{ color: designTokens.colors.sage[900] }}>
            Leadership Team
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto" style={{ color: designTokens.colors.sage[600] }}>
            Meet the experienced leaders driving our vision and success.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-md overflow-hidden border-2 border-[#e8f0eb] transition-all hover:shadow-xl hover:-translate-y-2"
            >
              {/* Avatar */}
              <div className="h-32 sm:h-36 md:h-40 flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #10b981, #14b8a6)' }}>
                <HiUserCircle className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 text-white" />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6 lg:p-7">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1" style={{ color: designTokens.colors.sage[900] }}>{leader.name}</h3>
                <p className="font-semibold text-[10px] sm:text-xs md:text-sm mb-2 sm:mb-3" style={{ color: '#10b981' }}>{leader.role}</p>
                <p className="text-xs sm:text-sm md:text-base mb-4 sm:mb-5 md:mb-6 leading-relaxed" style={{ color: designTokens.colors.sage[600] }}>{leader.bio}</p>

                {/* Social Icons */}
                <div className="flex gap-3 sm:gap-4 justify-center pt-3 sm:pt-4 md:pt-5" style={{ borderTop: '2px solid #f3f4f6' }}>
                  <a
                    href="#"
                    className="transition-all duration-200 cursor-pointer hover:scale-125"
                    title="LinkedIn"
                    aria-label="LinkedIn profile"
                    style={{ color: designTokens.colors.sage[300] }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#10b981'}
                    onMouseLeave={(e) => e.currentTarget.style.color = designTokens.colors.sage[300]}
                  >
                    <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href="#"
                    className="transition-all duration-200 cursor-pointer hover:scale-125"
                    title="Twitter"
                    aria-label="Twitter profile"
                    style={{ color: designTokens.colors.sage[300] }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#14b8a6'}
                    onMouseLeave={(e) => e.currentTarget.style.color = designTokens.colors.sage[300]}
                  >
                    <BsTwitterX className="w-4 h-4 sm:w-5 sm:h-5" />
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

// Values Section Component
function ValuesSection() {
  const values = [
    {
      icon: <MdBalance className="w-12 h-12" style={{ color: designTokens.colors.sage[600] }} />,
      title: 'Integrity',
      description:
        'We operate with unwavering honesty and ethical principles. Trust is the foundation of every relationship we build.',
    },
    {
      icon: <MdEmojiEvents className="w-12 h-12" style={{ color: designTokens.colors.sage[600] }} />,
      title: 'Excellence',
      description:
        'We pursue excellence in every engagement. Quality and attention to detail define our work and results.',
    },
    {
      icon: <MdLightbulb className="w-12 h-12" style={{ color: designTokens.colors.sage[600] }} />,
      title: 'Innovation',
      description:
        'We embrace creative thinking and forward-looking solutions. We challenge conventions to drive progress.',
    },
    {
      icon: <MdHandshake className="w-12 h-12" style={{ color: designTokens.colors.sage[600] }} />,
      title: 'Collaboration',
      description:
        'We believe in the power of teamwork. Success comes from diverse perspectives working toward shared goals.',
    },
  ];

  return (
    <section id="values" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-3 sm:px-4 md:px-6" style={{ backgroundColor: designTokens.colors.neutral.white }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 pb-6 sm:pb-8 md:pb-10 lg:pb-12" style={{ borderBottom: '2px solid #d6fadc' }}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3" style={{ color: designTokens.colors.sage[900] }}>
            Our Core Values
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto" style={{ color: designTokens.colors.sage[600] }}>
            These principles guide everything we do and define who we are as an organization.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-200 border-2"
              style={{
                backgroundColor: 'linear-gradient(to bottom right, white, rgb(209, 250, 229, 0.2))',
                borderColor: '#e8f0eb',
              }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4 sm:mb-5 md:mb-6 text-3xl sm:text-4xl md:text-5xl" style={{ color: '#10b981' }}>{value.icon}</div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 text-center" style={{ color: designTokens.colors.sage[900] }}>{value.title}</h3>
              <p className="leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg text-center" style={{ color: designTokens.colors.sage[700] }}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { OurStory, LeadershipTeam, ValuesSection };

