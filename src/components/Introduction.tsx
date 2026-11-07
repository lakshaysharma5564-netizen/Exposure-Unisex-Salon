import React from 'react';
import { Users, Sparkles, Clock, Compass } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const Introduction: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#242321] border-y border-[#383633]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-[#C4A477] font-semibold block mb-2">
            About Our Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F7F4EF] leading-tight [text-wrap:balance]">
            More Than a Salon. A Personal Style Experience.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#AAA49C] leading-relaxed">
            At Exposure Unisex Salon, grooming is not a rushed chore—it is an individual expression of confidence.
            We have designed our space to offer men and women throughout Nangal Raya and Janakpuri a comfortable,
            welcoming environment where modern styling meets genuine care.
          </p>
        </div>

        {/* 4 Editorial Core Pillars */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-[#171717] border border-[#383633] space-y-3">
            <div className="w-10 h-10 flex items-center justify-center bg-[#242321] text-[#C4A477]">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif font-semibold text-[#F7F4EF]">
              Welcoming Unisex Space
            </h3>
            <p className="text-sm text-[#AAA49C] leading-relaxed">
              Equally attuned to men seeking precision beard sculpting and women looking for bespoke hair styling and vibrant colouring.
            </p>
          </div>

          <div className="p-6 bg-[#171717] border border-[#383633] space-y-3">
            <div className="w-10 h-10 flex items-center justify-center bg-[#242321] text-[#C4A477]">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif font-semibold text-[#F7F4EF]">
              Individual Consultation
            </h3>
            <p className="text-sm text-[#AAA49C] leading-relaxed">
              Every haircut and grooming service starts with a conversation about your facial profile, hair density, and everyday routine.
            </p>
          </div>

          <div className="p-6 bg-[#171717] border border-[#383633] space-y-3">
            <div className="w-10 h-10 flex items-center justify-center bg-[#242321] text-[#C4A477]">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif font-semibold text-[#F7F4EF]">
              Neighbourhood Destination
            </h3>
            <p className="text-sm text-[#AAA49C] leading-relaxed">
              Conveniently located at 1656 Nangal Raya Extension, easily accessible for residents across Janakpuri, Sagarpur, and West Delhi.
            </p>
          </div>

          <div className="p-6 bg-[#171717] border border-[#383633] space-y-3">
            <div className="w-10 h-10 flex items-center justify-center bg-[#242321] text-[#C4A477]">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif font-semibold text-[#F7F4EF]">
              Comfortable Ambience
            </h3>
            <p className="text-sm text-[#AAA49C] leading-relaxed">
              Clean workstations, spacious interiors, and courteous attention ensure you feel refreshed and at ease during every visit.
            </p>
          </div>
        </div>

        {/* Local Target Audience Callout Banner */}
        <div className="mt-12 p-6 bg-[#1f1e1c] border border-[#383633] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-wider text-[#C4A477] font-semibold">
              Serving West Delhi Neighborhoods
            </p>
            <p className="text-sm text-[#AAA49C]">
              Proudly welcoming clients from {BUSINESS_INFO.targetAreas.join(' · ')} and surrounding communities.
            </p>
          </div>
          <a
            href={BUSINESS_INFO.googleMaps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-[#F7F4EF] hover:text-[#C4A477] underline underline-offset-4 font-semibold whitespace-nowrap transition-colors"
          >
            Get Driving Directions →
          </a>
        </div>
      </div>
    </section>
  );
};
