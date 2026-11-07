import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Phone, User, Scissors, MessageCircle, AlertCircle, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, SERVICE_CATEGORIES } from '../data/salonData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCategory?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedCategory = '',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    category: preselectedCategory || 'Hair Styling',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM – 1:00 PM)',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync preselectedCategory when modal opens
  useEffect(() => {
    if (preselectedCategory) {
      setFormData((prev) => ({ ...prev, category: preselectedCategory }));
    }
  }, [preselectedCategory, isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Set default minimum date to today
      const today = new Date().toISOString().split('T')[0];
      setFormData((prev) => ({
        ...prev,
        preferredDate: prev.preferredDate || today,
      }));
    } else {
      document.body.style.overflow = '';
      setIsSubmitted(false);
      setErrors({});
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    const cleanPhone = formData.phone.replace(/[\s\-\+]/g, '');
    const indianMobileRegex = /^(?:91)?[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your mobile number.';
    } else if (!indianMobileRegex.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number (e.g. 99114 11248).';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build pre-filled WhatsApp message
    const message = [
      `Hello Exposure Unisex Salon,`,
      `I would like to enquire about an appointment:`,
      `• Name: ${formData.fullName.trim()}`,
      `• Mobile: ${formData.phone.trim()}`,
      `• Service: ${formData.category}`,
      `• Preferred Date: ${formData.preferredDate}`,
      `• Preferred Time: ${formData.preferredTime}`,
      formData.notes.trim() ? `• Notes: ${formData.notes.trim()}` : null,
      ``,
      `Please confirm availability and appointment slot. Thank you!`,
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = BUSINESS_INFO.whatsapp.getUrl(message);

    // Open WhatsApp in new tab/app
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg bg-[#242321] border border-[#383633] rounded-none shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#AAA49C] hover:text-[#F7F4EF] p-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A477] transition-colors"
          aria-label="Close appointment modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#C4A477]/10 text-[#C4A477] mb-2">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif text-[#F7F4EF]">
              Enquiry Prepared for WhatsApp
            </h3>
            <p className="text-sm text-[#AAA49C] leading-relaxed max-w-md mx-auto">
              Your appointment details have been formatted and directed to our official salon WhatsApp at{' '}
              <span className="text-[#F7F4EF] font-medium">{BUSINESS_INFO.phone.primaryDisplay}</span>.
            </p>
            <div className="p-4 bg-[#171717] border border-[#383633] text-left text-xs text-[#AAA49C] space-y-1.5">
              <p className="font-semibold text-[#C4A477]">Important Note:</p>
              <p>
                This request is an appointment enquiry. Final confirmation depends on salon schedule and chair availability.
                Our team will reply to you on WhatsApp shortly.
              </p>
            </div>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={BUSINESS_INFO.phone.primaryTel}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#171717] bg-[#C4A477] hover:bg-[#d4b689] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Salon Directly
              </a>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#F7F4EF] border border-[#383633] hover:border-[#AAA49C] transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-[#C4A477] font-semibold block mb-1">
                Exposure Unisex Salon
              </span>
              <h2 id="booking-modal-title" className="text-2xl sm:text-3xl font-serif text-[#F7F4EF]">
                Request an Appointment
              </h2>
              <p className="text-xs sm:text-sm text-[#AAA49C] mt-1.5">
                Share your preferred service and schedule. We will confirm your timing directly via WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#AAA49C] mb-1.5 font-medium">
                  Your Full Name <span className="text-[#C4A477]">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 w-4 h-4 text-[#AAA49C]" />
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your name"
                    className={`w-full bg-[#171717] border pl-10 pr-4 py-2.5 text-sm text-[#F7F4EF] placeholder-[#666] focus:outline-none focus:ring-1 focus:ring-[#C4A477] transition-colors ${
                      errors.fullName ? 'border-red-500' : 'border-[#383633] focus:border-[#C4A477]'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.fullName}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#AAA49C] mb-1.5 font-medium">
                  Mobile Number (WhatsApp) <span className="text-[#C4A477]">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3 w-4 h-4 text-[#AAA49C]" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 99114 11248"
                    className={`w-full bg-[#171717] border pl-10 pr-4 py-2.5 text-sm text-[#F7F4EF] placeholder-[#666] focus:outline-none focus:ring-1 focus:ring-[#C4A477] transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-[#383633] focus:border-[#C4A477]'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.phone}
                  </p>
                )}
              </div>

              {/* Service Category */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#AAA49C] mb-1.5 font-medium">
                  Service Category <span className="text-[#C4A477]">*</span>
                </label>
                <div className="relative">
                  <Scissors className="absolute left-3.5 top-3 w-4 h-4 text-[#AAA49C]" />
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-[#171717] border border-[#383633] pl-10 pr-4 py-2.5 text-sm text-[#F7F4EF] focus:outline-none focus:border-[#C4A477] focus:ring-1 focus:ring-[#C4A477] transition-colors"
                  >
                    {SERVICE_CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.title}>
                        {cat.title} {!cat.isConfirmed ? '(Consultation)' : ''}
                      </option>
                    ))}
                    <option value="General Styling Consultation">General Styling Consultation</option>
                  </select>
                </div>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#AAA49C] mb-1.5 font-medium">
                    Preferred Date <span className="text-[#C4A477]">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-3 w-4 h-4 text-[#AAA49C]" />
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className={`w-full bg-[#171717] border pl-10 pr-3 py-2.5 text-sm text-[#F7F4EF] focus:outline-none focus:ring-1 focus:ring-[#C4A477] transition-colors ${
                        errors.preferredDate ? 'border-red-500' : 'border-[#383633] focus:border-[#C4A477]'
                      }`}
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.preferredDate}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#AAA49C] mb-1.5 font-medium">
                    Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3.5 top-3 w-4 h-4 text-[#AAA49C]" />
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full bg-[#171717] border border-[#383633] pl-10 pr-3 py-2.5 text-sm text-[#F7F4EF] focus:outline-none focus:border-[#C4A477] focus:ring-1 focus:ring-[#C4A477] transition-colors"
                    >
                      <option value="Morning (10:00 AM – 1:00 PM)">Morning (10 AM – 1 PM)</option>
                      <option value="Afternoon (1:00 PM – 5:00 PM)">Afternoon (1 PM – 5 PM)</option>
                      <option value="Evening (5:00 PM – 8:30 PM)">Evening (5 PM – 8:30 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#AAA49C] mb-1.5 font-medium">
                  Specific Requests / Notes <span className="text-[#666]">(Optional)</span>
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Haircut + beard trim, or colour consultation"
                  className="w-full bg-[#171717] border border-[#383633] p-3 text-sm text-[#F7F4EF] placeholder-[#666] focus:outline-none focus:border-[#C4A477] focus:ring-1 focus:ring-[#C4A477] transition-colors resize-none"
                />
              </div>

              {/* Disclosure Note */}
              <p className="text-[11px] text-[#AAA49C] leading-relaxed pt-1">
                Submitting opens WhatsApp with your pre-filled details. Appointments are subject to confirmation by the salon staff.
              </p>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-6 bg-[#C4A477] hover:bg-[#d4b689] text-[#171717] font-semibold text-xs uppercase tracking-widest transition-colors shadow-lg cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  Proceed to WhatsApp Enquiry
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
