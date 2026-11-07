import React, { useState } from 'react';
import { Sparkles, MessageCircle, Info } from 'lucide-react';
import { PORTFOLIO_ITEMS, BUSINESS_INFO } from '../data/salonData';
import { SafeImage } from './SafeImage';

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredItems =
    filter === 'all'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="work" className="py-20 lg:py-28 bg-[#242321] border-y border-[#383633]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#383633]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C4A477] font-semibold block mb-2">
              Our Visual Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F7F4EF] [text-wrap:balance]">
              Style Inspiration &amp; Ambience
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#AAA49C] max-w-2xl leading-relaxed">
              Browse our aesthetic standards and salon atmosphere. We craft custom looks inspired by your personality, facial contours, and lifestyle.
            </p>
          </div>

          {/* Filter Pills / Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#171717] border border-[#383633]">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#C4A477] text-[#171717] font-semibold'
                  : 'text-[#AAA49C] hover:text-[#F7F4EF]'
              }`}
            >
              All Work
            </button>
            <button
              onClick={() => setFilter('styling')}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer ${
                filter === 'styling'
                  ? 'bg-[#C4A477] text-[#171717] font-semibold'
                  : 'text-[#AAA49C] hover:text-[#F7F4EF]'
              }`}
            >
              Hair Styling
            </button>
            <button
              onClick={() => setFilter('grooming')}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer ${
                filter === 'grooming'
                  ? 'bg-[#C4A477] text-[#171717] font-semibold'
                  : 'text-[#AAA49C] hover:text-[#F7F4EF]'
              }`}
            >
              Men&apos;s Grooming
            </button>
            <button
              onClick={() => setFilter('colour')}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer ${
                filter === 'colour'
                  ? 'bg-[#C4A477] text-[#171717] font-semibold'
                  : 'text-[#AAA49C] hover:text-[#F7F4EF]'
              }`}
            >
              Hair Care
            </button>
            <button
              onClick={() => setFilter('interior')}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer ${
                filter === 'interior'
                  ? 'bg-[#C4A477] text-[#171717] font-semibold'
                  : 'text-[#AAA49C] hover:text-[#F7F4EF]'
              }`}
            >
              Salon Ambience
            </button>
          </div>
        </div>

        {/* Honest Transparency Notice */}
        <div className="mt-6 p-4 bg-[#171717] border border-[#383633] flex items-start gap-3 text-xs text-[#AAA49C]">
          <Info className="w-4 h-4 text-[#C4A477] shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#F7F4EF] font-semibold">Integrity Note:</strong> The portfolio images below
            represent our styling inspiration, standards, and aesthetic direction. We do not manufacture artificial
            client before-and-after transformations. Bring any reference photo to your appointment consultation!
          </p>
        </div>

        {/* Portfolio Gallery Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-[#171717] border border-[#383633] overflow-hidden hover:border-[#C4A477]/60 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#242321]">
                <SafeImage
                  src={item.imageSrc}
                  fallbackSrc="/images/hero_salon.jpg"
                  alt={item.imageAlt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#171717] bg-[#C4A477] px-2.5 py-1">
                    {item.tag}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-serif font-bold text-[#F7F4EF] group-hover:text-[#C4A477] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#AAA49C] leading-relaxed">
                  {item.caption}
                </p>

                <div className="pt-3 border-t border-[#383633]/60 flex items-center justify-between">
                  <span className="text-[11px] text-[#AAA49C] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#C4A477]" />
                    Custom consultation available
                  </span>

                  <a
                    href={BUSINESS_INFO.whatsapp.getUrl(
                      `Hello Exposure Unisex Salon, I am interested in a style similar to "${item.title}". Can we discuss timing and consultation?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#C4A477] hover:text-[#d4b689] font-medium transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire Style</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
