import { designTokens } from '../tokens';

interface SectionHeroProps {
  title: string;
  subtitle: string;
  bgImage?: string;
}

export default function SectionHero({ title, subtitle, bgImage }: SectionHeroProps) {
  return (
    <section
      className="relative min-h-[280px] sm:min-h-[350px] md:min-h-[420px] lg:min-h-[500px] xl:h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "url('/hero.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: designTokens.colors.sage[950],
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      {/* Content */}
      <div className="relative z-10 text-center text-white px-3 sm:px-4 md:px-6 max-w-3xl mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/90 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
