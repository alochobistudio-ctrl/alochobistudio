import React from 'react';
import { Award, Camera, Sliders, Clock, Heart, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US_DATA } from '../data/photographyData';

const ICON_MAP: Record<string, React.ElementType> = {
  Award,
  Camera,
  Sliders,
  Clock,
  Heart,
  ShieldCheck
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A0C10] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] mb-2">
            THE ALO CHOBI ADVANTAGE
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF9F6] font-bengali">
            কেন আমাদের বেছে নেবেন?
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto my-4 rounded-full" />
          <p className="text-sm sm:text-base text-stone-400 font-bengali leading-relaxed">
            স্মৃতি একবারই তৈরি হয়, তাকে দ্বিতীয়বার ফেরত আনা যায় না। তাই সঠিক স্টুডিও নির্বাচন করা আপনার জীবনের সবচেয়ে মূল্যবান সিদ্ধান্ত।
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US_DATA.map((item) => {
            const Icon = ICON_MAP[item.icon] || Award;
            return (
              <div
                key={item.id}
                className="bg-[#12141A] border border-white/5 hover:border-[#D4AF37]/40 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/70 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-[#D4AF37] bg-black/40 px-2.5 py-1 rounded border border-white/5">
                      {item.metric}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-bengali mb-2">
                    {item.titleBn}
                  </h3>

                  <p className="text-sm text-stone-400 font-bengali leading-relaxed">
                    {item.descBn}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-2 text-xs text-[#D4AF37]/80 font-bengali">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>১০০% প্রফেশনাল মান নিশ্চিত</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
