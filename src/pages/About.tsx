import { Link } from 'react-router-dom';
import { OurStory, LeadershipTeam, ValuesSection } from '../components/AboutSections.tsx';
import { designTokens } from '../tokens';
import { HiShieldCheck, HiUserGroup, HiSparkles } from 'react-icons/hi2';
import { BsWhatsapp } from 'react-icons/bs';

export default function About() {
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
              <span className="font-semibold">Government Licensed KMC Consultants</span>
            </div>

            <h1 className="text-[1.6rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.18] mb-4 sm:mb-5">
              Our Vision & <span className="text-amber-300">Legacy</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-white/85 max-w-xl mx-auto leading-relaxed mb-6 sm:mb-8">
              Building trusted partnerships and delivering transformative consulting solutions for over 15 years.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white min-h-[48px] btn-primary-sage shadow-lg hover:shadow-xl transition-all"
              >
                Schedule Consultation <span>→</span>
              </Link>
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
              { value: '10K+', label: 'Experts' },
            ].map((stat) => (
              <div key={stat.label} className="text-center py-2.5 sm:py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div className="text-lg sm:text-2xl md:text-3xl font-bold text-amber-300">{stat.value}</div>
                <div className="text-[9px] sm:text-xs text-white/70 font-medium mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <OurStory />

      {/* Leadership Team */}
      <LeadershipTeam />

      {/* Values Section */}
      <ValuesSection />

      {/* Why Clients Choose Us */}
      <section className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[var(--color-3d6b56)] font-bold mb-2 sm:mb-3 uppercase">Why Choose Us</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Built for Trust. Designed for Results.
            </h2>
            <div className="w-12 sm:w-16 h-1 bg-[var(--color-3d6b56)] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
              <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3.5">
                <HiShieldCheck className="text-xl" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5">Reliable Guidance</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Every recommendation is practical, compliant, and built around your real business constraints.</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
              <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3.5">
                <HiUserGroup className="text-xl" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5">Experienced Team</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Our specialists coordinate legal, government, and operational work as one seamless delivery team.</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6 sm:col-span-2 lg:col-span-1 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
              <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3.5">
                <HiSparkles className="text-xl" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5">Outcome Focused</h3>
              <p className="text-sm text-gray-600 leading-relaxed">We prioritize fast, accurate completion so you move forward with confidence and fewer delays.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section — dark, matches Home dark sections */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 bg-[var(--color-3d6b56)] relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-400/[0.06] rounded-full -mt-48 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[28rem] h-[28rem] bg-amber-400/[0.04] rounded-full -mb-56 blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-[10px] sm:text-xs tracking-[0.2em] text-emerald-300 font-bold mb-2 sm:mb-3 uppercase">Get Started Today</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Let's Work <span className="text-amber-300">Together</span>
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-emerald-400 mx-auto rounded-full mb-4 sm:mb-6" />
          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Ready to experience the Khan Consultants difference? Let's discuss how we can help your organization achieve its goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-8 sm:px-10 py-3.5 sm:py-4 font-bold text-sm sm:text-base text-[var(--color-1f3a30)] bg-amber-400 hover:bg-amber-300 transition-all shadow-lg hover:shadow-xl min-h-[48px]"
            >
              <HiSparkles className="text-lg" />
              Schedule a Consultation →
            </Link>
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
      </section>
    </div>
  );
}
