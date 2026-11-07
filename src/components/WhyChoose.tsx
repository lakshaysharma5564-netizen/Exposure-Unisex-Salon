import React from 'react';
import { CheckCircle2, ShieldCheck, HeartHandshake, Compass, Home } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const WhyChoose: React.FC = () => {
  const trustPoints = [
    {
      icon: HeartHandshake,
      title: 'Dedicated Unisex Salon Positioning',
      description:
        'A balanced, respectful salon environment offering equal attention, privacy, and dedicated styling expertise for both women and men.',
    },
    {
      icon: ShieldCheck,
      title: 'Core Hair & Grooming Expertise',
      description:
        'Specializing in the essentials that matter every day: precision cuts, custom hair wash, beard architecture, and professional colouring.',
    },
    {
      icon: Compass,
      title: 'Accessible Nangal Raya Location',
      description:
        'Situated right in Nangal Raya Extension (Block WZ), conveniently serving Janakpuri, Sagarpur, and West Delhi residents without lengthy travel.',
    },
    {
      icon: CheckCircle2,
      title: 'Attentive Personal Consultation',
      description:
        'We never rush through styling. Every session begins with a conversation to ensure your cut complements your daily maintenance routine.',
    },
    {
      icon: Home,
      title: 'Clean & Comfortable Ambience',
      description:
        'Spacious layout with hygienic styling chairs, well-illuminated mirrors, and an unhurried atmosphere where you can genuinely unwind.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#171717]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-[#C4A477] font-semibold block mb-2">
            Why Choose Exposure
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F7F4EF] [text-wrap:balance]">
            Crafted Around Your Everyday Style
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#AAA49C] leading-relaxed">
            Our values are anchored in honest service, genuine attention, and a welcoming neighbourhood space. Here is what you can expect every time you visit.
          </p>
        </div>

        {/* 5 Points Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-[#242321] border border-[#383633] space-y-4 hover:border-[#C4A477]/60 transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#171717] border border-[#383633] text-[#C4A477]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-[#F7F4EF]">
                  {point.title}
                </h3>
                <p className="text-sm text-[#AAA49C] leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}

          {/* Quick Connect Card */}
          <div className="p-8 bg-gradient-to-br from-[#242321] to-[#171717] border border-[#C4A477]/40 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#C4A477] font-semibold">
                Have a Question?
              </span>
              <h3 className="text-xl font-serif font-bold text-[#F7F4EF]">
                Speak Directly with Our Team
              </h3>
              <p className="text-xs sm:text-sm text-[#AAA49C] leading-relaxed">
                Need advice on haircut styles, beard grooming, or scheduling a visit? We are always happy to help.
              </p>
            </div>

            <div className="pt-4 flex flex-col gap-2.5">
              <a
                href={BUSINESS_INFO.phone.primaryTel}
                className="inline-flex items-center justify-center py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#171717] bg-[#C4A477] hover:bg-[#d4b689] transition-colors"
              >
                Call: {BUSINESS_INFO.phone.primaryDisplay}
              </a>
              <a
                href={BUSINESS_INFO.whatsapp.getUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#F7F4EF] border border-[#383633] hover:border-[#AAA49C] transition-colors"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
