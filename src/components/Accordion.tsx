import { useState } from 'react';

interface AccordionItem {
  title: string;
  description: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3 sm:space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:border-gray-400/30 transition-all">
          <button
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            className="w-full px-4 sm:px-6 py-3.5 sm:py-4 flex justify-between items-center bg-white hover:bg-[#f8fdf9] transition text-left min-h-[48px] gap-3"
          >
            <h4 className="font-semibold text-sm sm:text-base text-gray-900">{item.title}</h4>
            <span
              className={`text-xl sm:text-2xl text-[#517358] transition-transform flex-shrink-0 ${
                activeIndex === index ? 'rotate-45' : ''
              }`}
            >
              +
            </span>
          </button>

          {activeIndex === index && (
            <div className="px-4 sm:px-6 py-3.5 sm:py-4 bg-gray-50 border-t border-gray-200">
              <p className="text-[#517358] text-sm sm:text-base leading-relaxed">{item.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
