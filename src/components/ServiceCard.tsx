import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  href?: string;
}

export default function ServiceCard({ icon, title, description, features, href }: ServiceCardProps) {
  const content = (
    <>
      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 rounded-xl sm:rounded-2xl text-white flex items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 sm:mb-4 md:mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" style={{
        background: 'linear-gradient(135deg, #ffffff, #ffffff)'
      }}>
        {icon}
      </div>

      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2 md:mb-3 text-[#2c4d3f] leading-tight">
        {title}
      </h3>

      <p className="text-xs sm:text-sm md:text-base leading-relaxed mb-2 sm:mb-3 md:mb-4 text-[#53785b] line-clamp-2 sm:line-clamp-none">
        {description}
      </p>

      {features && features.length > 0 && (
        <ul className="flex flex-col space-y-1.5 sm:space-y-2 mb-3 sm:mb-4 md:mb-5">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs md:text-sm text-[#53785b]">
              <span className="mt-0.5 text-xs sm:text-sm font-bold text-emerald-500">✓</span>
              <span className="leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="inline-flex text-xs sm:text-sm md:text-base font-semibold items-center gap-1.5 sm:gap-2 mt-auto text-emerald-600 group-hover:gap-2 sm:group-hover:gap-3 transition-all">
        Learn More <span aria-hidden="true" className="text-sm sm:text-base md:text-lg">→</span>
      </div>
    </>
  );

  if (href) {
    return (
      <Link
        to={href}
        className="group flex flex-col rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-7 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border-2 bg-white hover:border-emerald-300"
        style={{
          borderColor: '#e8f0eb'
        }}
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="group flex flex-col rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-7 border-2 bg-white" style={{
      borderColor: '#e8f0eb'
    }}>
      {content}
    </div>
  );
}
