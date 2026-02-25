import { designTokens } from '../tokens';

interface SectionHeroProps {
  title: string;
  subtitle: string;
  bgImage?: string;
  isStretchedMobile?: boolean;
}

export default function SectionHero({ title, subtitle, bgImage, isStretchedMobile = true }: SectionHeroProps) {
  return (
    <section
      className={`relative ${isStretchedMobile ? 'min-h-[calc(100svh-64px)]' : 'min-h-[420px]'} sm:min-h-[500px] md:min-h-[580px] lg:min-h-[calc(100svh-72px)] bg-cover bg-center flex items-center justify-center`}
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
      <div className="relative z-10 text-center text-white px-3 sm:px-4 md:px-6 max-w-4xl mx-auto flex flex-col items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 md:gap-3 rounded-full px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-[10px] sm:text-xs md:text-sm lg:text-base mx-auto bg-white/10 backdrop-blur-sm border border-white/20">
          <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full text-xs sm:text-sm md:text-base font-bold bg-amber-500 text-white">★</span>
          <span className="font-semibold text-white">Licensed KMC Consultant</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
          {title}
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
