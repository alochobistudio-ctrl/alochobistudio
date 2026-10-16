import React from 'react';
import { Camera, Film, Award, Clock, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { STUDIO_INFO } from '../data/photographyData';
import { StudioImage } from './StudioImage';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      title: 'ক্রিয়েটিভ স্টোরিটেলিং',
      desc: 'প্রতিটি বিয়ের একটি নিজস্ব প্রেমের উপাখ্যান থাকে। আমরা কৃত্রিম পোজের বাইরে গিয়ে আপনার স্বাভাবিক হাসি, চোখের জল ও অনুভূতির গল্প আঁকি।'
    },
    {
      title: 'সর্বাধুনিক প্রযুক্তি ও ড্রোন',
      desc: 'Sony Cinema Line (FX3), Canon EOS R5 এবং DJI Mavic 3 Pro সিনেমাটিক ড্রোনের মাধ্যমে ৪K ৬০FPS ক্রিস্টাল ক্লিয়ার ভিজ্যুয়াল।'
    },
    {
      title: 'আন্তর্জাতিক অ্যালবামের মান',
      desc: 'ইতালিয়ান সিল্ক পেপার ও নন-টিয়ার মেটালিক শিট ব্যবহার করে তৈরি করা হয় ওয়াটারপ্রুফ ফটো অ্যালবাম, যা বহু বছর অমলিন থাকে।'
    },
    {
      title: 'সময়নিষ্ঠ ডেলিভারি অঙ্গীকার',
      desc: 'আমরা ক্লায়েন্টের অপেক্ষার মূল্য বুঝি। নির্দিষ্ট সময়ের মধ্যে সমস্ত এডিটেড মাস্টার ফাইল ও অ্যালবাম সুরক্ষিতভাবে পৌঁছে দিই।'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#090A0E] relative overflow-hidden">
      {/* Decorative Gold Ambient Lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Column: Split Editorial Frames */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative">
              {/* Main Photo Frame */}
              <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl shadow-black/80">
                <StudioImage
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85"
                  alt="আলো ছবি স্টুডিও পোর্ট্রেট"
                  fallbackTitle="বাঙালি ওয়েডিং স্পেশালিস্ট"
                  aspectRatioClass="aspect-4/5"
                />
              </div>

              {/* Floating Award / Trust Box */}
              <div className="absolute -bottom-6 -right-4 sm:right-4 bg-[#12141A]/95 border border-[#D4AF37]/40 rounded-xl p-4 shadow-xl backdrop-blur-md max-w-[240px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider">সেরা স্বীকৃতি</p>
                    <p className="text-sm font-bold text-white font-bengali">কলকাতা বেস্ট ওয়েডিং টিম</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gear Strip */}
            <div className="pt-6 grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-[#111318] border border-white/5 rounded-lg">
                <p className="text-xs text-stone-400 font-mono">ক্যামেরা</p>
                <p className="text-xs font-semibold text-white mt-0.5">Sony FX3 / R5</p>
              </div>
              <div className="p-3 bg-[#111318] border border-white/5 rounded-lg">
                <p className="text-xs text-stone-400 font-mono">ড্রোন</p>
                <p className="text-xs font-semibold text-white mt-0.5">Mavic 3 Cine</p>
              </div>
              <div className="p-3 bg-[#111318] border border-white/5 rounded-lg">
                <p className="text-xs text-stone-400 font-mono">লাইটিং</p>
                <p className="text-xs font-semibold text-white mt-0.5">Profoto B10X</p>
              </div>
            </div>
          </div>

          {/* Right Text Column: Editorial Prose & Offerings */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>আমাদের পরিচয় ও আদর্শ</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF9F6] font-bengali leading-tight">
                আলো ছবি স্টুডিও সম্পর্কে
              </h2>
              <div className="w-20 h-1 bg-[#D4AF37] rounded-full mt-3" />
            </div>

            <p className="text-base sm:text-lg text-[#D8D8D5] font-bengali leading-relaxed">
              <strong className="text-[#FAF9F6] font-semibold">“আলো ছবি স্টুডিও” (ALO CHOBI STUDIO)</strong> হলো কলকাতার একটি স্বনামধন্য ও আধুনিক ফটোগ্রাফি এবং সিনেমাটোগ্রাফি প্রোডাকশন হাউস। দীর্ঘ এক দশকেরও বেশি সময় ধরে আমরা বাঙালি ও ভারতীয় বিবাহ, অন্নপ্রাশন, জন্মদিন ও পারিবারিক উৎসবের অমূল্য স্মৃতিকে শৈল্পিক দৃষ্টিভঙ্গিতে সংরক্ষণ করে আসছি।
            </p>

            <p className="text-sm sm:text-base text-stone-400 font-bengali leading-relaxed">
              আমাদের মূল দর্শন হলো—ছবি শুধু একটি স্থির ফ্রেম নয়, এটি সময়ের জীবন্ত দলিল। বিয়ে মানে শুধুই রীতিনীতি নয়, এটি দুটি পরিবারের মিলন ও হাজারো না-বলা আবেগের সম্মেলন। আমরা ক্রিয়েটিভ স্টোরিটেলিং, হাই-এন্ড স্কিন রিটাচিং, সিনেমাটিক ড্রোন ফ্রেম এবং প্রিমিয়াম অ্যালবাম ডিজাইনের মাধ্যমে আপনার জীবনের বিশেষ মুহূর্তটিকে রূপকথার মতো চিরস্থায়ী করে রাখি।
            </p>

            {/* In-depth Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#111319] border border-white/5 hover:border-[#D4AF37]/30 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white font-bengali">
                        {item.title}
                      </h4>
                      <p className="text-xs text-stone-400 font-bengali mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action / Direct Quote */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#E5C158] rounded-md transition-all font-sans"
              >
                আমাদের পরিষেবাগুলো জানুন
              </a>
              <a
                href="#packages"
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#D8D8D5] hover:text-white border border-white/20 hover:border-[#D4AF37] rounded-md transition-all font-sans"
              >
                প্যাকেজ বিবরণী
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
