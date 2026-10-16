import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { STUDIO_INFO } from '../data/photographyData';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-11 h-11 rounded-full bg-[#12141A]/90 hover:bg-[#D4AF37] text-white hover:text-black border border-[#D4AF37]/40 shadow-xl backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

      {/* Call Floating Button */}
      <a
        href={`tel:${STUDIO_INFO.phone}`}
        aria-label="Direct Phone Call"
        className="w-12 h-12 rounded-full bg-[#D4AF37] hover:bg-[#E5C158] text-black shadow-xl shadow-[#D4AF37]/30 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group relative"
      >
        <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        <span className="absolute right-14 bg-black/90 text-white text-[11px] font-mono px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10 hidden sm:inline">
          সরাসরি কল করুন
        </span>
      </a>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(
          'নমস্কার আলো ছবি স্টুডিও, আমি আপনাদের ফটোগ্রাফি ও ভিডিওগ্রাফি সার্ভিস সম্পর্কে জানতে চাই।'
        )}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Direct WhatsApp Chat"
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black shadow-xl shadow-[#25D366]/30 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group relative animate-pulse hover:animate-none"
      >
        <MessageCircle className="w-6 h-6 fill-black" />
        <span className="absolute right-15 bg-black/90 text-[#25D366] text-[11px] font-bold px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-[#25D366]/30 hidden sm:inline">
          হোয়াটসঅ্যাপে চ্যাট করুন
        </span>
      </a>
    </div>
  );
};
