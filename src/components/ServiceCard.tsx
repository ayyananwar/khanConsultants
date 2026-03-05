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
      {/* Icon */}
      <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-14 md:h-14 rounded-lg sm:rounded-xl flex items-center justify-center text-xl sm:text-xl md:text-3xl mb-2.5 sm:mb-3 md:mb-4 bg-emerald-50 group-hover:scale-105 transition-transform duration-300">
        {icon}
      </div>

      <h3 className="text-sm sm:text-[15px] md:text-lg font-bold mb-1 sm:mb-1.5 md:mb-2 text-gray-900 leading-snug">
        {title}
      </h3>

      <p className="text-[11px] sm:text-[13px] md:text-base leading-relaxed mb-2.5 sm:mb-3 md:mb-4 text-gray-500 line-clamp-3 md:line-clamp-none">
        {description}
      </p>

      {features && features.length > 0 && (
        <ul className="flex flex-col gap-1 sm:gap-1.5 md:gap-2 mb-3 sm:mb-4 md:mb-5">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs md:text-sm text-gray-600">
              <span className="text-emerald-500 text-[10px] sm:text-xs font-bold shrink-0">✓</span>
              <span className="line-clamp-1">{feature}</span>
            </li>
          ))}
          {features.length > 3 && (
            <li className="hidden md:flex items-center gap-2 text-sm text-gray-600">
              <span className="text-emerald-500 text-xs font-bold shrink-0">✓</span>
              <span>{features[3]}</span>
            </li>
          )}
        </ul>
      )}

      <div className="inline-flex text-[11px] sm:text-sm md:text-base font-semibold items-center gap-1 sm:gap-1.5 mt-auto text-emerald-600 group-hover:gap-2.5 transition-all">
        Learn More <span aria-hidden="true">→</span>
      </div>
    </>
  );

  const cardClasses = "group flex flex-col rounded-xl sm:rounded-xl md:rounded-2xl p-3.5 sm:p-4 md:p-6 bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300";

  if (href) {
    return (
      <Link to={href} className={cardClasses + " cursor-pointer"}>
        {content}
      </Link>
    );
  }

  return (
    <div className={cardClasses}>
      {content}
    </div>
  );
}
