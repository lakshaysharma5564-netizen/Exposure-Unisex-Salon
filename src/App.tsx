import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { WhyChoose } from './components/WhyChoose';
import { Testimonials } from './components/Testimonials';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedCategory, setPreselectedCategory] = useState<string>('');

  const handleOpenBooking = (category?: string) => {
    setPreselectedCategory(category || '');
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setPreselectedCategory('');
  };

  return (
    <div className="min-h-screen bg-[#171717] text-[#F7F4EF] selection:bg-[#C4A477] selection:text-[#171717]">
      {/* 1. Premium Sticky Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main id="main-content">
        {/* 2. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Introduction Section */}
        <Introduction />

        {/* 4. Services Menu */}
        <Services onSelectCategoryForBooking={(cat) => handleOpenBooking(cat)} />

        {/* 5. Our Work / Visual Portfolio */}
        <Portfolio />

        {/* 6. Why Choose Exposure */}
        <WhyChoose />

        {/* 7. Community Testimonials & Feedback */}
        <Testimonials />

        {/* 8. Location & Direct Contact Section */}
        <Location onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 9. Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedCategory={preselectedCategory}
      />

      {/* Fixed Mobile Bottom CTA Bar (Call Now | WhatsApp) */}
      <MobileBottomBar />
    </div>
  );
}
