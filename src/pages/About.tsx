import { SectionHero } from '../components';
import { OurStory, LeadershipTeam, ValuesSection } from '../components/AboutSections.tsx';
import { designTokens } from '../tokens';

export default function About() {
  return (
    <div style={{ backgroundColor: designTokens.colors.neutral.white }}>
      {/* Hero Section */}
      <SectionHero
        title="Our Vision & Legacy"
        subtitle="Building trusted partnerships and delivering transformative consulting solutions for over 15 years."
        bgImage="/hero.png"
      />

      {/* Our Story Timeline */}
      <OurStory />

      {/* Leadership Team */}
      <LeadershipTeam />

      {/* Values Section */}
      <ValuesSection />

      {/* CTA Section - Premium */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 text-white bg-[#3d6b56]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">Let's Work Together</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 text-emerald-100 max-w-2xl mx-auto">
            Ready to experience the Khan Consultants difference? Let's discuss how we can help your organization achieve its goals.
          </p>
          <a href="/contact" className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg transition-all transform hover:shadow-emerald-500/50 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white min-h-[48px]">
            Schedule a Consultation →
          </a>
        </div>
      </section>
    </div>
  );
}
