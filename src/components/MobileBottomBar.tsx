import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const MobileBottomBar: React.FC = () => {
  return (
    <aside
      aria-label="Mobile quick actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#171717]/95 backdrop-blur-md border-t border-[#383633] px-3 py-2 flex items-center justify-between gap-2 shadow-2xl"
    >
      <a
        href={BUSINESS_INFO.phone.primaryTel}
        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-[#242321] border border-[#383633] text-[#F7F4EF] text-xs font-semibold uppercase tracking-wider active:bg-[#2e2d2a] transition-colors"
      >
        <Phone className="w-3.5 h-3.5 text-[#C4A477]" />
        <span>Call Now</span>
      </a>
      <a
        href={BUSINESS_INFO.whatsapp.getUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-[#C4A477] text-[#171717] text-xs font-semibold uppercase tracking-wider active:bg-[#b09063] transition-colors"
      >
        <MessageCircle className="w-3.5 h-3.5 fill-current" />
        <span>WhatsApp</span>
      </a>
    </aside>
  );
};
