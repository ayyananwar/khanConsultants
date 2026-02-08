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
      <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl text-white flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" style={{
        background: 'linear-gradient(135deg, #10b981, #14b8a6)'
      }}>
        {icon}
      </div>

      <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 text-[#2c4d3f] leading-tight">
        {title}
      </h3>

      <p className="text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 text-[#53785b] line-clamp-2 sm:line-clamp-none">
        {description}
      </p>

      {features && features.length > 0 && (
        <ul className="flex flex-col space-y-2 mb-4 sm:mb-5">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-[#53785b]">
              <span className="mt-0.5 text-sm font-bold text-emerald-500">✓</span>
              <span className="leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="inline-flex text-sm sm:text-base font-semibold items-center gap-2 mt-auto text-emerald-600 group-hover:gap-3 transition-all">
        Learn More <span aria-hidden="true" className="text-lg">→</span>
      </div>
    </>
  );

  if (href) {
    return (
      <Link
        to={href}
        className="group flex flex-col rounded-2xl p-5 sm:p-6 lg:p-7 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border-2 bg-white hover:border-emerald-300"
        style={{
          borderColor: '#e8f0eb'
        }}
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="group flex flex-col rounded-2xl p-5 sm:p-6 lg:p-7 border-2 bg-white" style={{
      borderColor: '#e8f0eb'
    }}>
      {content}
    </div>
  );
}
