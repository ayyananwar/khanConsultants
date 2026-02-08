import { designTokens } from '../tokens';

interface SectionHeroProps {
  title: string;
  subtitle: string;
  bgImage?: string;
}

export default function SectionHero({ title, subtitle, bgImage }: SectionHeroProps) {
  return (
    <section
      className="relative min-h-[350px] sm:min-h-[420px] md:min-h-[500px] lg:h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : 'url(https://khanconsultants.in/assets/bg.jpg)',
        backgroundColor: designTokens.colors.sage[950],
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
