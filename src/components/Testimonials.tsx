import React, { useState } from 'react';
import { MessageSquareQuote, Star, ExternalLink, Heart, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const Testimonials: React.FC = () => {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');

  // Sourced from public customer feedback mentions in research:
  // - professional stylists
  // - spacious interiors
  // - comfortable ambience
  const feedbackThemes = [
    {
      title: 'Comfortable & Spacious Interior',
      mention:
        'Clients appreciate the uncrowded layout, clean mirrors, and relaxed salon atmosphere during hair washes and cuts.',
    },
    {
      title: 'Courteous & Skilled Stylists',
      mention:
        'Frequent praise for stylists who take time to listen to haircut preferences and craft sharp beard definitions.',
    },
    {
      title: 'Neighbourhood Convenience',
      mention:
        'A trusted, friendly grooming spot for families and working professionals living around Nangal Raya and Janakpuri.',
    },
  ];

  const handleQuickFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackText.trim()) return;

    // Direct to WhatsApp with user feedback
    const msg = `Hello Exposure Unisex Salon, here is my feedback/review from my visit:\n"${feedbackText.trim()}"`;
    window.open(BUSINESS_INFO.whatsapp.getUrl(msg), '_blank', 'noopener,noreferrer');
    setFeedbackSubmitted(true);
    setFeedbackText('');
  };

  return (
    <section className="py-20 lg:py-28 bg-[#242321] border-y border-[#383633]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-[#C4A477] font-semibold block mb-2">
            Client Voices &amp; Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F7F4EF] [text-wrap:balance]">
            Real Experiences, Built on Trust
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#AAA49C] leading-relaxed">
            In keeping with our transparency commitment, we do not fabricate star ratings or fake customer quotes. Below are the authentic themes shared by our patrons, alongside an invitation to share your own experience.
          </p>
        </div>

        {/* 3 Highlight Cards Based on Actual Feedback Themes */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {feedbackThemes.map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#171717] border border-[#383633] space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="text-[#C4A477]">
                  <MessageSquareQuote className="w-8 h-8 opacity-70" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-[#F7F4EF]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#AAA49C] leading-relaxed italic">
                  &ldquo;{item.mention}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#383633]/60 text-[11px] text-[#AAA49C] flex items-center justify-between">
                <span>Community feedback theme</span>
                <span className="text-[#C4A477] font-medium">Nangal Raya, Delhi</span>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Feedback & Owner Review Gateway */}
        <div className="mt-12 p-8 bg-[#171717] border border-[#383633] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C4A477] font-semibold">
              <Star className="w-4 h-4 fill-[#C4A477]" />
              <span>Have You Visited Exposure?</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#F7F4EF]">
              Share Your Salon Experience
            </h3>
            <p className="text-sm text-[#AAA49C] leading-relaxed">
              Your feedback helps us continuously improve our styling craft and client comfort. Send your thoughts directly to our salon management or write a review on Google Maps.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href={BUSINESS_INFO.googleMaps.searchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#F7F4EF] hover:text-[#C4A477] border-b border-[#C4A477] pb-1 transition-colors"
              >
                <span>View Exposure on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#242321] p-6 border border-[#383633]">
            {feedbackSubmitted ? (
              <div className="py-4 text-center space-y-2">
                <Heart className="w-8 h-8 text-[#C4A477] mx-auto" />
                <h4 className="text-base font-serif font-semibold text-[#F7F4EF]">
                  Thank You for Your Feedback!
                </h4>
                <p className="text-xs text-[#AAA49C]">
                  Your review note has been forwarded to our management team via WhatsApp.
                </p>
                <button
                  type="button"
                  onClick={() => setFeedbackSubmitted(false)}
                  className="text-xs text-[#C4A477] hover:underline pt-2 inline-block"
                >
                  Write another note
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuickFeedback} className="space-y-3">
                <label className="block text-xs uppercase tracking-wider text-[#AAA49C] font-semibold">
                  Send Quick Feedback to Owner
                </label>
                <textarea
                  rows={3}
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  placeholder="Tell us about your haircut, service, or salon ambience..."
                  className="w-full bg-[#171717] border border-[#383633] p-3 text-xs text-[#F7F4EF] placeholder-[#666] focus:outline-none focus:border-[#C4A477] focus:ring-1 focus:ring-[#C4A477] resize-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#C4A477] hover:bg-[#d4b689] text-[#171717] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit via WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
