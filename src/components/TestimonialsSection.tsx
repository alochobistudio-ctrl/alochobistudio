import React from 'react';
import { Star, Quote, Heart, MapPin } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/photographyData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#08090C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border border-[#D4AF37]/30 bg-black/40">
            <Heart className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#D4AF37] font-display">
              CLIENT TESTIMONIALS & LOVE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF9F6] font-bengali">
            ক্লায়েন্টদের ভালোবাসার কথা
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto my-4 rounded-full" />
          <p className="text-sm sm:text-base text-stone-400 font-bengali leading-relaxed">
            ১৫০০+ পরিবারের বিশ্বাস ও মুখে সন্তুষ্টির হাসিই আমাদের কাজের সবচেয়ে বড় অনুপ্রেরণা। দেখে নিন আমাদের কিছু সাম্প্রতিক ক্লায়েন্টের রিভিউ।
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="relative bg-[#101217] border border-white/5 hover:border-[#D4AF37]/40 rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:shadow-black/60 flex flex-col justify-between"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-[#D4AF37]/20 pointer-events-none">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                  <span className="text-xs font-mono text-stone-400 ml-2">
                    5.0 / 5.0
                  </span>
                </div>

                {/* Review Prose */}
                <p className="text-sm sm:text-base text-stone-300 font-bengali leading-relaxed italic mb-6">
                  “{item.reviewBn}”
                </p>
              </div>

              {/* Client Info Block */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatarUrl}
                    alt={item.clientNameBn}
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-full object-cover border border-[#D4AF37]/30"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white font-bengali">
                      {item.clientNameBn}
                    </h4>
                    <p className="text-xs text-[#D4AF37] font-bengali">
                      {item.eventBn}
                    </p>
                  </div>
                </div>

                <div className="text-right text-xs text-stone-400">
                  <div className="flex items-center gap-1 justify-end">
                    <MapPin className="w-3 h-3 text-[#D4AF37]" />
                    <span className="font-bengali">{item.locationBn}</span>
                  </div>
                  <span className="text-[11px] font-mono text-stone-400">{item.dateBn}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
