import React, { useState, useEffect } from 'react';
import { Camera, Phone, Menu, X, MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../data/photographyData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'হোম', href: '#home' },
    { label: 'আমাদের সম্পর্কে', href: '#about' },
    { label: 'পরিষেবা', href: '#services' },
    { label: 'গ্যালারি', href: '#gallery' },
    { label: 'প্যাকেজ', href: '#packages' },
    { label: 'ভিডিও', href: '#videos' },
    { label: 'যোগাযোগ', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090A0E]/95 backdrop-blur-md border-b border-[#D4AF37]/20 py-3 shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Wordmark (Single Text Element Anchor) */}
            <a
              href="#home"
              className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              <div className="w-10 h-10 rounded-full border border-[#D4AF37]/40 bg-black/60 flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37] group-hover:scale-105 transition-all duration-300">
                <Camera className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#FAF9F6] font-bengali group-hover:text-[#D4AF37] transition-colors">
                  {STUDIO_INFO.nameBn}
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#D4AF37] font-medium font-display uppercase -mt-1">
                  ALO CHOBI STUDIO
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[#D8D8D5] hover:text-[#D4AF37] transition-colors relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action & Direct Contact */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href={`tel:${STUDIO_INFO.phone}`}
                className="hidden xl:flex items-center gap-2 text-xs text-[#D8D8D5] hover:text-[#D4AF37] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-mono">{STUDIO_INFO.phoneDisplay}</span>
              </a>

              <a
                href="#contact"
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#E5C158] via-[#D4AF37] to-[#C5A059] rounded-md shadow-lg shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/40 hover:brightness-110 active:scale-95 transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                যোগাযোগ করুন
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={`https://wa.me/${STUDIO_INFO.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-[#25D366] hover:bg-white/10 rounded-full"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#D8D8D5] hover:text-[#D4AF37] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-md"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-black/95 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between animate-fadeIn">
          <div className="flex flex-col space-y-4">
            <div className="pb-4 border-b border-[#D4AF37]/20">
              <p className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
                ALO CHOBI STUDIO
              </p>
              <h2 className="text-xl font-bold text-white mt-1">আলো ছবি স্টুডিও</h2>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-[#EAEAE8] hover:text-[#D4AF37] py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 space-y-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block text-center py-3 bg-[#D4AF37] text-black font-semibold uppercase tracking-wider rounded-lg shadow-md"
            >
              যোগাযোগ করুন
            </a>
            <div className="flex items-center justify-between text-xs text-stone-400 pt-2">
              <a href={`tel:${STUDIO_INFO.phone}`} className="flex items-center gap-1 hover:text-[#D4AF37]">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                {STUDIO_INFO.phoneDisplay}
              </a>
              <span className="text-[#D4AF37]">শ্যামবাজার, কলকাতা</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
