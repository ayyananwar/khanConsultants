import { Link } from 'react-router-dom';
import { SectionHero } from '../components';
import { OurStory, LeadershipTeam, ValuesSection } from '../components/AboutSections.tsx';
import { designTokens } from '../tokens';
import { HiShieldCheck, HiUserGroup, HiSparkles } from 'react-icons/hi2';

export default function About() {
  return (
    <div style={{ backgroundColor: designTokens.colors.neutral.white }}>
      {/* Hero Section */}
      <SectionHero
        title="Our Vision & Legacy"
        subtitle="Building trusted partnerships and delivering transformative consulting solutions for over 15 years."
        bgImage="/hero.png"
        isStretchedMobile={false}
      />

      {/* Our Story Timeline */}
      <OurStory />

      {/* Leadership Team */}
      <LeadershipTeam />

      {/* Values Section */}
      <ValuesSection />

      <section className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <p className="text-xs sm:text-sm tracking-[0.2em] text-[var(--color-3d6b56)] font-bold mb-2 uppercase">Why Clients Choose Us</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Built for Trust. Designed for Results.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 sm:p-5">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                <HiShieldCheck className="text-xl" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5">Reliable Guidance</h3>
              <p className="text-sm text-gray-600">Every recommendation is practical, compliant, and built around your real business constraints.</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 sm:p-5">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                <HiUserGroup className="text-xl" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5">Experienced Team</h3>
              <p className="text-sm text-gray-600">Our specialists coordinate legal, government, and operational work as one seamless delivery team.</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 sm:p-5 sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
                <HiSparkles className="text-xl" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5">Outcome Focused</h3>
              <p className="text-sm text-gray-600">We prioritize fast, accurate completion so you move forward with confidence and fewer delays.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 text-white bg-[var(--color-3d6b56)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">Let's Work Together</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 text-emerald-100 max-w-2xl mx-auto">
            Ready to experience the Khan Consultants difference? Let's discuss how we can help your organization achieve its goals.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg transition-all transform hover:shadow-emerald-500/50 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white min-h-[48px]">
            <HiSparkles className="text-lg" />
            Schedule a Consultation →
          </Link>
        </div>
      </section>
    </div>
  );
}
