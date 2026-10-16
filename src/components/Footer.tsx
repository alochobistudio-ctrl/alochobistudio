import React from 'react';
import { Camera, Phone, Mail, MapPin, Heart, ArrowUp } from 'lucide-react';
import { STUDIO_INFO, SERVICES_DATA } from '../data/photographyData';

export const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'হোম', href: '#home' },
    { label: 'আমাদের সম্পর্কে', href: '#about' },
    { label: 'পরিষেবা', href: '#services' },
    { label: 'গ্যালারি', href: '#gallery' },
    { label: 'প্যাকেজ', href: '#packages' },
    { label: 'ভিডিও', href: '#videos' },
    { label: 'যোগাযোগ', href: '#contact' },
  ];

  const highlightedServices = SERVICES_DATA.slice(0, 8);

  return (
    <footer className="bg-[#050608] text-[#D8D8D5] border-t border-white/10 relative overflow-hidden">
      {/* Decorative Golden Line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/5">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full border border-[#D4AF37]/50 bg-black/60 flex items-center justify-center text-[#D4AF37] group-hover:scale-105 transition-transform">
                <Camera className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-white font-bengali">
                  {STUDIO_INFO.nameBn}
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#D4AF37] font-medium font-display uppercase -mt-1">
                  ALO CHOBI STUDIO
                </span>
              </div>
            </a>

            <p className="text-sm font-bengali text-[#FAF9F6] italic font-medium">
              “আপনার স্মৃতির গল্প, আমাদের ক্যামেরায়।”
            </p>

            <p className="text-xs text-stone-400 font-bengali leading-relaxed max-w-sm">
              কলকাতা ও পূর্ব ভারতের অন্যতম শীর্ষস্থানীয় ওয়েডিং ও সিনেমাটিক স্টুডিও। দীর্ঘ ১২+ বছর ধরে নিষ্ঠার সাথে মানুষের আনন্দঘন মুহূর্তকে চিরস্থায়ী করে রাখার কারিগর।
            </p>

            {/* Social Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={STUDIO_INFO.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#D4AF37] hover:text-black flex items-center justify-center text-xs font-mono transition-colors"
                aria-label="Facebook"
              >
                FB
              </a>
              <a
                href={STUDIO_INFO.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#D4AF37] hover:text-black flex items-center justify-center text-xs font-mono transition-colors"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href={STUDIO_INFO.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#D4AF37] hover:text-black flex items-center justify-center text-xs font-mono transition-colors"
                aria-label="YouTube"
              >
                YT
              </a>
              <a
                href={`https://wa.me/${STUDIO_INFO.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#25D366] hover:text-black flex items-center justify-center text-xs font-mono transition-colors"
                aria-label="WhatsApp"
              >
                WA
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
              কুইক লিঙ্ক
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#D4AF37] transition-colors font-bengali"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Services Col */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
              আমাদের পরিষেবা
            </h4>
            <ul className="space-y-2 text-xs">
              {highlightedServices.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-stone-400 hover:text-[#D4AF37] transition-colors font-bengali flex items-center justify-between"
                  >
                    <span>{service.nameBn}</span>
                    <span className="text-[10px] font-mono text-stone-600 uppercase">
                      {service.category}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Col */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
              যোগাযোগের তথ্য
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="font-bengali leading-relaxed text-stone-300">
                  {STUDIO_INFO.addressBn}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={`tel:${STUDIO_INFO.phone}`}
                  className="font-mono text-stone-300 hover:text-[#D4AF37]"
                >
                  {STUDIO_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={`mailto:${STUDIO_INFO.email}`}
                  className="font-mono text-stone-300 hover:text-[#D4AF37]"
                >
                  {STUDIO_INFO.email}
                </a>
              </li>
              <li className="p-3 rounded-lg bg-[#111318] border border-white/5 text-stone-400 font-bengali">
                স্টুডিও খোলা: প্রতিদিন ১০:০০ AM - ৯:৩০ PM
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Zero-slop Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p className="font-bengali">
            © 2026 আলো ছবি স্টুডিও. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <span>Kolkata, West Bengal</span>
            <span>·</span>
            <span>Bengali Wedding Cinematography</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
