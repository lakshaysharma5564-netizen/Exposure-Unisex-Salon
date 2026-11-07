import React, { useState } from 'react';
import { Check, Calendar, MessageCircle, AlertCircle } from 'lucide-react';
import { SERVICE_CATEGORIES, BUSINESS_INFO } from '../data/salonData';
import { SafeImage } from './SafeImage';

interface ServicesProps {
  onSelectCategoryForBooking: (categoryTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectCategoryForBooking }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredCategories =
    activeTab === 'all'
      ? SERVICE_CATEGORIES
      : SERVICE_CATEGORIES.filter((cat) => cat.id === activeTab);

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#171717]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#383633]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C4A477] font-semibold block mb-2">
              Our Service Menu
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F7F4EF] [text-wrap:balance]">
              Tailored Grooming &amp; Styling
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#AAA49C] max-w-2xl leading-relaxed">
              Explore our core styling services and proposed beauty treatments. Pricing is determined during personal consultation based on hair length, texture, and custom requirements.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#242321] border border-[#383633]">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#C4A477] text-[#171717] font-semibold'
                  : 'text-[#AAA49C] hover:text-[#F7F4EF]'
              }`}
            >
              All Categories
            </button>
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-[#C4A477] text-[#171717] font-semibold'
                    : 'text-[#AAA49C] hover:text-[#F7F4EF]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Stack */}
        <div className="mt-14 space-y-16">
          {filteredCategories.map((category, index) => (
            <article
              key={category.id}
              className="bg-[#242321] border border-[#383633] overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Category Cover Image (4 cols) */}
                <div className="lg:col-span-4 relative min-h-[260px] lg:min-h-full">
                  <SafeImage
                    src={category.imageSrc}
                    fallbackSrc="/images/hero_salon.jpg"
                    alt={category.imageAlt}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#242321] via-transparent to-transparent lg:hidden" />
                </div>

                {/* Category Content & Items (8 cols) */}
                <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    {/* Header with Confirmation Status */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-[#C4A477] font-semibold">
                          0{index + 1}.
                        </span>
                        <h3 className="text-2xl font-serif font-bold text-[#F7F4EF]">
                          {category.title}
                        </h3>
                      </div>

                      {/* Explicit Status Badge */}
                      {category.isConfirmed ? (
                        <span className="text-[11px] uppercase tracking-wider text-[#C4A477] font-medium border border-[#C4A477]/40 px-2.5 py-0.5">
                          Verified Service
                        </span>
                      ) : (
                        <span className="text-[11px] uppercase tracking-wider text-amber-300 font-medium border border-amber-400/40 px-2.5 py-0.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          Requires Owner Confirmation
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-[#AAA49C] mb-6">
                      {category.subtitle}
                    </p>

                    {/* Notice for Proposed Services */}
                    {!category.isConfirmed && category.confirmationNotice && (
                      <div className="mb-6 p-3 bg-[#171717] border border-amber-400/30 text-amber-200/90 text-xs flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
                        <p>{category.confirmationNotice}</p>
                      </div>
                    )}

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.items.map((item) => (
                        <div
                          key={item.id}
                          className="p-4 bg-[#171717] border border-[#383633] space-y-2 hover:border-[#C4A477]/60 transition-colors"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="text-sm font-semibold text-[#F7F4EF]">
                              {item.name}
                            </h4>
                          </div>
                          <p className="text-xs text-[#AAA49C] leading-relaxed">
                            {item.description}
                          </p>
                          <ul className="pt-2 border-t border-[#383633]/50 space-y-1">
                            {item.highlights.map((h, i) => (
                              <li key={i} className="text-[11px] text-[#AAA49C] flex items-center gap-1.5">
                                <Check className="w-3 h-3 text-[#C4A477]" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category Action Strip */}
                  <div className="mt-8 pt-6 border-t border-[#383633] flex flex-wrap items-center justify-between gap-4">
                    <p className="text-xs text-[#AAA49C] italic">
                      Pricing provided transparently during styling consultation. No hidden fees.
                    </p>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onSelectCategoryForBooking(category.title)}
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#171717] bg-[#C4A477] hover:bg-[#d4b689] transition-colors cursor-pointer"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Enquire for {category.title}</span>
                      </button>

                      <a
                        href={BUSINESS_INFO.whatsapp.getUrl(
                          `Hello Exposure Unisex Salon, I would like to enquire about ${category.title} services and availability.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-[#383633] hover:border-[#AAA49C] text-[#AAA49C] hover:text-[#F7F4EF] transition-colors"
                        aria-label={`Ask about ${category.title} on WhatsApp`}
                      >
                        <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
