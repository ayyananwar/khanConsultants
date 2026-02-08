import { SectionHero } from './index';
import Accordion from './Accordion';

interface ServiceDetailProps {
  title: string;
  subtitle: string;
  challenge: string;
  approach: string;
  offerings: Array<{ title: string; description: string }>;
  benefits: Array<{ title: string; description: string }>;
}

export default function ServiceDetail({
  title,
  subtitle,
  challenge,
  approach,
  offerings,
  benefits,
}: ServiceDetailProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <SectionHero title={title} subtitle={subtitle} />

      {/* Overview Section - 2 Column Layout */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {/* Left: The Challenge */}
            <div className="border-l-4 border-emerald-500 pl-6 md:pl-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2c4d3f] mb-6">The Challenge</h2>
              <p className="text-[#53785b] leading-relaxed text-base sm:text-lg">{challenge}</p>
            </div>

            {/* Right: Our Approach */}
            <div className="border-l-4 border-teal-400 pl-6 md:pl-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2c4d3f] mb-6">Our Approach</h2>
              <p className="text-[#53785b] leading-relaxed text-base sm:text-lg">{approach}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Offerings Section */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-[#d6fadc]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 pb-8 sm:pb-12 border-b border-[#c5f4d4]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2c4d3f] mb-4">
              Key Offerings
            </h2>
            <p className="text-[#53785b] text-base sm:text-lg max-w-2xl mx-auto">
              Specific deliverables and services included in our engagement.
            </p>
          </div>

          <Accordion items={offerings} />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 pb-8 sm:pb-12 border-b-2 border-[#d6fadc]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2c4d3f] mb-2">
              Why Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-[#fafffe] rounded-2xl p-7 sm:p-8 border border-[#e8f0eb] hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 mb-4 flex-shrink-0"></div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#2c4d3f] mb-3">{benefit.title}</h3>
                <p className="text-[#53785b] text-base leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-br from-[#2c4d3f] via-[#1a2d23] to-[#1f3a2f]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">Ready to optimize your {title.toLowerCase()}?</h2>
          <p className="text-base sm:text-lg text-white/85 mb-8">
            Let's discuss how we can help you achieve measurable results.
          </p>
          <button className="inline-block rounded-xl px-8 sm:px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold hover:from-emerald-400 hover:to-teal-400 hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105">
            Book a Call
          </button>
        </div>
      </section>
    </div>
  );
}

