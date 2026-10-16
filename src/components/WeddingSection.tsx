import React, { useState } from 'react';
import { Camera, Film, Heart, Sparkles, BookOpen, Aperture, CheckCircle2, ArrowRight } from 'lucide-react';
import { WEDDING_RITUALS_TABS, STUDIO_INFO } from '../data/photographyData';
import { StudioImage } from './StudioImage';

export const WeddingSection: React.FC = () => {
  const [activeRitual, setActiveRitual] = useState(0);

  const weddingFeatures = [
    {
      titleBn: 'ক্যান্ডিড ফটোগ্রাফি',
      titleEn: 'Candid Photography',
      icon: Heart,
      descBn: 'অপ্রস্তুত মুহূর্তের অকৃত্রিম চোখের জল, লাজুক চাহনি ও স্বতঃস্ফূর্ত হাসির গল্পগাঁথা।'
    },
    {
      titleBn: 'ট্র্যাডিশনাল ফটোগ্রাফি',
      titleEn: 'Traditional Photography',
      icon: Camera,
      descBn: 'পরিবারের গুরুজনদের সাথে আনুষ্ঠানিক ফটো ফ্রেম ও প্রতিটি শাস্ত্রীয় নিয়মের সুবিন্যস্ত কভারেজ।'
    },
    {
      titleBn: 'সিনেমাটিক ভিডিওগ্রাফি',
      titleEn: 'Cinematic Videography',
      icon: Film,
      descBn: 'চলচ্চিত্রের মতো কালার গ্রেডিং, স্লো-মোশন ও আবেগঘন আবহ সঙ্গীতে তৈরি ওয়েডিং ফিল্ম।'
    },
    {
      titleBn: 'প্রিমিয়াম ওয়েডিং অ্যালবাম',
      titleEn: 'Handcrafted Wedding Album',
      icon: BookOpen,
      descBn: 'ইতালিয়ান সিল্ক পেপার, মেটালিক গ্লাস কভার ও আজীবন স্মৃতি ধারণের রাজকীয় প্রিন্ট কোয়ালিটি।'
    },
    {
      titleBn: 'প্রি-ওয়েডিং শ্যুট',
      titleEn: 'Pre-Wedding Shoot',
      icon: Sparkles,
      descBn: 'ঐতিহাসিক রাজবাড়ি, নদীঘাট বা শৈল্পিক স্টুডিওতে বিয়ের আগের একান্ত রসায়নের ফটো ফ্রেম।'
    },
    {
      titleBn: 'ড্রোন এরিয়াল কভারেজ',
      titleEn: 'Aerial Drone Coverage',
      icon: Aperture,
      descBn: 'আকাশ থেকে বিয়ের আলোকসজ্জা, বরযাত্রীর শোভাযাত্রা ও বিলাসবহুল ভেন্যুর পাখির চোখের দৃশ্য।'
    }
  ];

  const ritualImages = [
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85', // Gaye holud
    'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85', // Subho drishti
    'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=1200&q=85', // Sindoor
    'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85', // Boubhat
  ];

  return (
    <section className="py-24 bg-[#0A0C10] relative overflow-hidden border-t border-b border-[#D4AF37]/20">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border border-[#D4AF37]/30 bg-black/40">
            <Heart className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#D4AF37] font-display">
              ROYAL BENGALI WEDDING EXPERIENCE
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#FAF9F6] font-bengali leading-tight">
            আপনার বিয়ের গল্প, আমাদের ক্যামেরায়
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto my-4 rounded-full" />
          <p className="text-base text-stone-300 font-bengali leading-relaxed">
            বাঙালির বিয়ের প্রতিটি ক্ষণে রয়েছে গভীর ভাবাবেগ। সেই শুভদৃষ্টি থেকে বিদায়ের অশ্রু—আমরা প্রতিটি মুহূর্তকে জীবন্ত করে তুলে ধরি।
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {weddingFeatures.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                className="bg-[#12141A] border border-white/5 hover:border-[#D4AF37]/40 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-4 group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-bengali group-hover:text-[#D4AF37] transition-colors">
                  {feat.titleBn}
                </h3>
                <p className="text-xs font-mono uppercase tracking-wider text-stone-400 mt-0.5 mb-2">
                  {feat.titleEn}
                </p>
                <p className="text-sm text-stone-400 font-bengali leading-relaxed">
                  {feat.descBn}
                </p>
              </div>
            );
          })}
        </div>

        {/* Ritual Timeline Interactive Showcase */}
        <div className="bg-[#101218] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Tabs / Steps */}
            <div className="w-full lg:w-1/2 space-y-4">
              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
                  RITUAL HIGHLIGHTS
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-bengali mt-1">
                  বাঙালি বিয়ের প্রধান পর্বসমূহ
                </h3>
              </div>

              <div className="space-y-3">
                {WEDDING_RITUALS_TABS.map((ritual, idx) => (
                  <button
                    key={ritual.id}
                    onClick={() => setActiveRitual(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3 ${
                      activeRitual === idx
                        ? 'bg-[#181B22] border-[#D4AF37] shadow-lg shadow-black/50'
                        : 'bg-[#12141A] border-white/5 hover:border-white/20 text-stone-400'
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono shrink-0 mt-0.5 ${
                        activeRitual === idx
                          ? 'bg-[#D4AF37] text-black font-bold'
                          : 'bg-white/10 text-stone-400'
                      }`}
                    >
                      0{idx + 1}
                    </div>
                    <div>
                      <h4
                        className={`text-base font-bold font-bengali ${
                          activeRitual === idx ? 'text-[#FAF9F6]' : 'text-stone-300'
                        }`}
                      >
                        {ritual.nameBn}
                      </h4>
                      <p className="text-xs font-bengali text-stone-400 mt-1">
                        {ritual.descBn}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Interactive Image Preview */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl aspect-4/3">
                <StudioImage
                  src={ritualImages[activeRitual] || ritualImages[0]}
                  alt={WEDDING_RITUALS_TABS[activeRitual].nameBn}
                  fallbackTitle={WEDDING_RITUALS_TABS[activeRitual].nameBn}
                  aspectRatioClass="aspect-4/3"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
                    {WEDDING_RITUALS_TABS[activeRitual].subtextBn}
                  </span>
                  <p className="text-lg font-bold font-bengali mt-1">
                    {WEDDING_RITUALS_TABS[activeRitual].nameBn}
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
