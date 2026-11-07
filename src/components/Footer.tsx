import React from 'react';
import { Phone, MapPin, MessageCircle, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO, SERVICE_CATEGORIES } from '../data/salonData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121212] border-t border-[#383633] text-[#AAA49C] pb-16 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-2xl font-serif font-bold text-[#F7F4EF] tracking-tight block">
              Exposure <span className="font-sans font-light text-xs tracking-widest text-[#C4A477] uppercase ml-1">Unisex Salon</span>
            </span>
            <p className="text-xs uppercase tracking-widest text-[#C4A477] font-semibold">
              &ldquo;{BUSINESS_INFO.tagline}&rdquo;
            </p>
            <p className="text-xs sm:text-sm text-[#AAA49C] leading-relaxed max-w-sm">
              Contemporary unisex salon providing dedicated haircutting, beard grooming, hair washes, and tailored styling for women and men across Nangal Raya and Janakpuri.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C4A477] hover:bg-[#d4b689] text-[#171717] font-semibold text-xs uppercase tracking-widest transition-colors cursor-pointer"
              >
                <span>Book Appointment</span>
              </button>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#F7F4EF] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-[#F7F4EF] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F7F4EF] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F7F4EF] transition-colors">
                  Services Menu
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#F7F4EF] transition-colors">
                  Visual Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F7F4EF] transition-colors">
                  Location &amp; Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Menu (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#F7F4EF] font-semibold">
              Salon Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICE_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <a href="#services" className="hover:text-[#F7F4EF] transition-colors flex items-center justify-between">
                    <span>{cat.title}</span>
                    {!cat.isConfirmed && (
                      <span className="text-[10px] text-amber-400 font-mono">*proposed</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-[#666] pt-1">
              *Services marked as proposed are subject to final salon owner verification.
            </p>
          </div>

          {/* Contact & Location Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#F7F4EF] font-semibold">
              Contact &amp; Address
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C4A477] shrink-0 mt-0.5" />
                <span>
                  1656, Nangal Raya Extension, Block WZ,
                  <br />
                  Nangal Raya, Janakpuri,
                  <br />
                  New Delhi, Delhi 110046
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C4A477] shrink-0" />
                <a href={BUSINESS_INFO.phone.primaryTel} className="hover:text-[#F7F4EF] tabular-nums">
                  {BUSINESS_INFO.phone.primaryDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#AAA49C] shrink-0" />
                <a href={BUSINESS_INFO.phone.alternativeTel} className="hover:text-[#F7F4EF] tabular-nums">
                  {BUSINESS_INFO.phone.alternativeDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsapp.getUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  WhatsApp Consultation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Legal Notice */}
        <div className="mt-14 pt-8 border-t border-[#242321] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777]">
          <p>
            &copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </p>

          <p className="text-center sm:text-right text-[11px]">
            Information is strictly verified against official business listings. Contact forms prepare direct WhatsApp communications.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#AAA49C] hover:text-[#C4A477] transition-colors p-1"
            aria-label="Scroll to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
