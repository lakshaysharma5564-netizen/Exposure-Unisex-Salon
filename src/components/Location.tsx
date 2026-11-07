import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, MessageCircle, AlertCircle, Calendar } from 'lucide-react';
import { BUSINESS_INFO, SERVICE_CATEGORIES } from '../data/salonData';

interface LocationProps {
  onOpenBooking: () => void;
}

export const Location: React.FC<LocationProps> = ({ onOpenBooking }) => {
  const [inlineForm, setInlineForm] = useState({
    name: '',
    phone: '',
    service: 'Hair Styling',
    date: '',
    time: 'Morning (10:00 AM – 1:00 PM)',
    notes: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleInlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inlineForm.name.trim()) {
      setFormError('Please enter your name.');
      return;
    }
    const cleanPhone = inlineForm.phone.replace(/[\s\-\+]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setFormError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setFormError('');
    const msg = [
      `Hello Exposure Unisex Salon,`,
      `I would like to enquire about an appointment:`,
      `• Name: ${inlineForm.name.trim()}`,
      `• Mobile: ${inlineForm.phone.trim()}`,
      `• Service: ${inlineForm.service}`,
      inlineForm.date ? `• Preferred Date: ${inlineForm.date}` : null,
      `• Preferred Time: ${inlineForm.time}`,
      inlineForm.notes.trim() ? `• Notes: ${inlineForm.notes.trim()}` : null,
      ``,
      `Please confirm slot availability. Thank you!`,
    ]
      .filter(Boolean)
      .join('\n');

    window.open(BUSINESS_INFO.whatsapp.getUrl(msg), '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#171717]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-[#C4A477] font-semibold block mb-2">
            Visit &amp; Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F7F4EF] [text-wrap:balance]">
            Find Us in Nangal Raya
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#AAA49C] leading-relaxed">
            Conveniently located in Nangal Raya Extension (Block WZ), Janakpuri, New Delhi. Drop in or book your preferred slot in advance.
          </p>
        </div>

        {/* 2-Column Split: Business Info & Actions | Map Preview & Booking Form */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Business Details Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="p-6 sm:p-8 bg-[#242321] border border-[#383633] space-y-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#171717] text-[#C4A477]">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-serif font-bold text-[#F7F4EF]">
                  Exposure Unisex Salon
                </h3>
                <p className="text-sm text-[#F7F4EF] font-medium leading-relaxed pt-1">
                  1656, Nangal Raya Extension, Block WZ,
                  <br />
                  Nangal Raya, Janakpuri,
                  <br />
                  New Delhi, Delhi 110046, India.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={BUSINESS_INFO.googleMaps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#C4A477] hover:bg-[#d4b689] text-[#171717] text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
                <a
                  href={BUSINESS_INFO.googleMaps.searchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#383633] hover:border-[#AAA49C] text-[#F7F4EF] text-xs font-medium uppercase tracking-wider transition-colors"
                >
                  <span>Open Maps</span>
                </a>
              </div>
            </div>

            {/* Contact Numbers Card */}
            <div className="p-6 sm:p-8 bg-[#242321] border border-[#383633] space-y-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#171717] text-[#C4A477]">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#F7F4EF]">
                Telephone &amp; WhatsApp
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between border-b border-[#383633]/60 pb-2">
                  <span className="text-[#AAA49C]">Primary Mobile &amp; WhatsApp:</span>
                  <a
                    href={BUSINESS_INFO.phone.primaryTel}
                    className="font-semibold text-[#F7F4EF] hover:text-[#C4A477] tabular-nums transition-colors"
                  >
                    {BUSINESS_INFO.phone.primaryDisplay}
                  </a>
                </div>

                <div className="flex items-center justify-between border-b border-[#383633]/60 pb-2">
                  <span className="text-[#AAA49C]">Landline Contact:</span>
                  <a
                    href={BUSINESS_INFO.phone.alternativeTel}
                    className="font-semibold text-[#F7F4EF] hover:text-[#C4A477] tabular-nums transition-colors"
                  >
                    {BUSINESS_INFO.phone.alternativeDisplay}
                  </a>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={BUSINESS_INFO.phone.primaryTel}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#171717] border border-[#383633] hover:border-[#C4A477] text-[#F7F4EF] text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C4A477]" />
                  <span>Call Primary</span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsapp.getUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-[#171717] text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Card (with Owner Verification Notice) */}
            <div className="p-6 sm:p-8 bg-[#242321] border border-[#383633] space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C4A477] font-semibold">
                  <Clock className="w-4 h-4" />
                  <span>Salon Hours</span>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-amber-300 border border-amber-400/40 px-2 py-0.5">
                  Awaiting Verification
                </span>
              </div>

              <div className="text-sm">
                <p className="text-[#F7F4EF] font-semibold text-base">
                  Approx. 9:30 AM – 9:00 PM
                </p>
                <p className="text-xs text-[#AAA49C] mt-1">
                  Monday through Sunday (Public listings vary between 9:00 AM and 9:30 AM opening).
                </p>
              </div>

              <div className="p-3 bg-[#171717] border border-[#383633] text-[11px] text-[#AAA49C] flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p>
                  Salon hours are listed as reported by public records and require salon owner verification. We recommend calling ahead or booking via WhatsApp before visiting.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Appointment Form & Interactive Map (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Direct Appointment Form Card */}
            <div className="p-6 sm:p-8 bg-[#242321] border border-[#383633]">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#C4A477] font-semibold block mb-1">
                    Direct Booking
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-[#F7F4EF]">
                    Send Appointment Enquiry
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#C4A477] hover:underline cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Open Full Scheduler</span>
                </button>
              </div>

              <p className="text-xs sm:text-sm text-[#AAA49C] mb-6">
                Fill in your details below to generate a pre-formatted WhatsApp booking message. Our staff will confirm your slot.
              </p>

              {formSubmitted ? (
                <div className="p-6 bg-[#171717] border border-[#383633] text-center space-y-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#C4A477]/10 text-[#C4A477]">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-serif text-[#F7F4EF]">Enquiry Generated!</h4>
                  <p className="text-xs text-[#AAA49C] max-w-sm mx-auto">
                    Your appointment enquiry has been prepared and sent to WhatsApp. Our team will verify chair availability and reply promptly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-[#C4A477] hover:underline pt-2 block mx-auto"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInlineSubmit} className="space-y-4">
                  {formError && (
                    <div className="p-3 bg-red-950/40 border border-red-500/50 text-red-200 text-xs">
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#AAA49C] mb-1 font-medium">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={inlineForm.name}
                        onChange={(e) => setInlineForm({ ...inlineForm, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full bg-[#171717] border border-[#383633] px-3.5 py-2.5 text-sm text-[#F7F4EF] placeholder-[#666] focus:outline-none focus:border-[#C4A477]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#AAA49C] mb-1 font-medium">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={inlineForm.phone}
                        onChange={(e) => setInlineForm({ ...inlineForm, phone: e.target.value })}
                        placeholder="e.g. 99114 11248"
                        className="w-full bg-[#171717] border border-[#383633] px-3.5 py-2.5 text-sm text-[#F7F4EF] placeholder-[#666] focus:outline-none focus:border-[#C4A477]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#AAA49C] mb-1 font-medium">
                        Service Category
                      </label>
                      <select
                        value={inlineForm.service}
                        onChange={(e) => setInlineForm({ ...inlineForm, service: e.target.value })}
                        className="w-full bg-[#171717] border border-[#383633] px-3 py-2.5 text-sm text-[#F7F4EF] focus:outline-none focus:border-[#C4A477]"
                      >
                        {SERVICE_CATEGORIES.map((cat) => (
                          <option key={cat.id} value={cat.title}>
                            {cat.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#AAA49C] mb-1 font-medium">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        value={inlineForm.date}
                        onChange={(e) => setInlineForm({ ...inlineForm, date: e.target.value })}
                        className="w-full bg-[#171717] border border-[#383633] px-3 py-2.5 text-sm text-[#F7F4EF] focus:outline-none focus:border-[#C4A477]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#AAA49C] mb-1 font-medium">
                      Preferred Time Slot
                    </label>
                    <select
                      value={inlineForm.time}
                      onChange={(e) => setInlineForm({ ...inlineForm, time: e.target.value })}
                      className="w-full bg-[#171717] border border-[#383633] px-3 py-2.5 text-sm text-[#F7F4EF] focus:outline-none focus:border-[#C4A477]"
                    >
                      <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                      <option value="Afternoon (1:00 PM – 5:00 PM)">Afternoon (1:00 PM – 5:00 PM)</option>
                      <option value="Evening (5:00 PM – 8:30 PM)">Evening (5:00 PM – 8:30 PM)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#AAA49C] mb-1 font-medium">
                      Additional Message (Optional)
                    </label>
                    <input
                      type="text"
                      value={inlineForm.notes}
                      onChange={(e) => setInlineForm({ ...inlineForm, notes: e.target.value })}
                      placeholder="Special requests or haircut references"
                      className="w-full bg-[#171717] border border-[#383633] px-3.5 py-2 text-sm text-[#F7F4EF] placeholder-[#666] focus:outline-none focus:border-[#C4A477]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-6 bg-[#C4A477] hover:bg-[#d4b689] text-[#171717] font-semibold text-xs uppercase tracking-widest transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Embedded Google Maps Container (No API key needed, embeds standard public search) */}
            <div className="bg-[#242321] border border-[#383633] overflow-hidden">
              <div className="p-4 border-b border-[#383633] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#AAA49C]">
                  <MapPin className="w-3.5 h-3.5 text-[#C4A477]" />
                  <span>Google Maps Location</span>
                </div>
                <a
                  href={BUSINESS_INFO.googleMaps.searchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#C4A477] hover:underline flex items-center gap-1 font-medium"
                >
                  <span>Open Full Map</span>
                  <Navigation className="w-3 h-3" />
                </a>
              </div>
              <div className="relative w-full h-[280px] bg-[#171717]">
                <iframe
                  title="Exposure Unisex Salon Google Maps Location"
                  src="https://maps.google.com/maps?q=Exposure+Unisex+Salon+1656+Nangal+Raya+Janakpuri+Delhi+110046&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter grayscale contrast-125 opacity-80 hover:opacity-100 hover:filter-none transition-all duration-300"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
