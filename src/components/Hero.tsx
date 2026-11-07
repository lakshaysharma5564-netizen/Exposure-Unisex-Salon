import React from 'react';
import { ArrowDown, Calendar, MessageCircle, Phone, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';
import { SafeImage } from './SafeImage';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const scrollToServices = () => {
    const el = document.querySelector('#services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center pt-24 pb-16 lg:py-0 overflow-hidden bg-[#171717]"
    >
      {/* Background Ambient Lighting & Texture */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-[#C4A477]/10 blur-[120px]" />
        <div className="absolute bottom-0 -left-40 w-[450px] h-[450px] rounded-full bg-[#242321] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Narrative & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Location & Unisex Descriptor */}
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C4A477] font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#C4A477]" />
              <span>Nangal Raya, Janakpuri · New Delhi</span>
              <span className="text-[#383633]">·</span>
              <span className="text-[#AAA49C]">Unisex Salon</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#F7F4EF] leading-[1.12] tracking-tight [text-wrap:balance]">
              Your Style.{' '}
              <span className="italic font-normal text-[#C4A477]">Your Identity.</span>{' '}
              Your Exposure.
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#AAA49C] max-w-xl font-normal leading-relaxed">
              Discover professional hair styling and grooming experiences designed around your individual style in a spacious, welcoming salon atmosphere.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#C4A477] hover:bg-[#d4b689] text-[#171717] font-semibold text-xs uppercase tracking-widest transition-colors shadow-lg cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Appointment</span>
              </button>

              <button
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[#383633] hover:border-[#AAA49C] text-[#F7F4EF] font-medium text-xs uppercase tracking-widest transition-colors cursor-pointer"
              >
                <span>Explore Services</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#C4A477]" />
              </button>
            </div>

            {/* Direct Contact & Verified Highlights Bar */}
            <div className="pt-6 border-t border-[#383633]/60 flex flex-wrap items-center gap-6 text-xs text-[#AAA49C]">
              <a
                href={BUSINESS_INFO.phone.primaryTel}
                className="inline-flex items-center gap-2 hover:text-[#C4A477] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C4A477]" />
                <span className="tabular-nums font-medium">{BUSINESS_INFO.phone.primaryDisplay}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsapp.getUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#C4A477] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Direct WhatsApp Enquiry</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Focal Carrier (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame */}
              <div className="absolute -inset-3 border border-[#C4A477]/25 pointer-events-none hidden sm:block" />

              <div className="relative overflow-hidden bg-[#242321] shadow-2xl">
                <SafeImage
                  src="/images/hero_salon.jpg"
                  fallbackSrc="/images/hero_salon.jpg"
                  alt="Exposure Unisex Salon contemporary interior with styling chairs and illuminated mirrors"
                  priority={true}
                  className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent opacity-60" />
                
                {/* Floating Image Caption */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#171717]/90 backdrop-blur-md border border-[#383633]">
                  <p className="text-xs uppercase tracking-widest text-[#C4A477] font-semibold">
                    Spacious &amp; Modern Ambience
                  </p>
                  <p className="text-[11px] text-[#AAA49C] mt-0.5">
                    Dedicated hair styling and men&apos;s grooming stations in Nangal Raya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
