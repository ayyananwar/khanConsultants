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
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition">
          <button
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition text-left"
          >
            <h4 className="font-semibold text-slate-900">{item.title}</h4>
            <span
              className={`text-2xl text-slate-900 transition-transform ${
                activeIndex === index ? 'rotate-45' : ''
              }`}
            >
              +
            </span>
          </button>

          {activeIndex === index && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
