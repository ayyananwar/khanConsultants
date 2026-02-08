import { SectionHero } from '../components';
import { OurStory, LeadershipTeam, ValuesSection } from '../components/AboutSections';
import { designTokens } from '../tokens';

export default function About() {
  return (
    <div style={{ backgroundColor: designTokens.colors.neutral.white }}>
      {/* Hero Section */}
      <SectionHero
        title="Our Vision & Legacy"
        subtitle="Building trusted partnerships and delivering transformative consulting solutions for over 15 years."
      />

      {/* Our Story Timeline */}
      <OurStory />

      {/* Leadership Team */}
      <LeadershipTeam />

      {/* Values Section */}
      <ValuesSection />

      {/* CTA Section - Premium */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 text-white" style={{ background: 'linear-gradient(to bottom right, #1a2d23, #2c4d3f, #1f3a2f)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">Let's Work Together</h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-10 text-emerald-100 max-w-2xl mx-auto">
            Ready to experience the Khan Consultants difference? Let's discuss how we can help your organization achieve its goals.
          </p>
          <a href="/contact" className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-lg transition-all transform hover:shadow-emerald-500/50 hover:shadow-2xl hover:-translate-y-1" style={{ background: 'linear-gradient(to right, #10b981, #14b8a6)' }}>
            Schedule a Consultation →
          </a>
        </div>
      </section>
    </div>
  );
}
