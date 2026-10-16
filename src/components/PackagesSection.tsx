import React, { useState } from 'react';
import { Check, Sparkles, MessageCircle, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { PACKAGES_DATA, STUDIO_INFO } from '../data/photographyData';
import { PackageItem } from '../types';

export const PackagesSection: React.FC = () => {
  const [selectedPackageForModal, setSelectedPackageForModal] = useState<PackageItem | null>(null);

  // Custom Quote Estimator state
  const [eventType, setEventType] = useState('wedding');
  const [eventDays, setEventDays] = useState('1');
  const [needDrone, setNeedDrone] = useState(true);
  const [needVideo, setNeedVideo] = useState(true);
  const [needAlbum, setNeedAlbum] = useState(true);

  const getCustomInquiryText = () => {
    const daysLabel = eventDays === '1' ? '১ দিন' : eventDays === '2' ? '২ দিন' : '৩+ দিন';
    const eventName = eventType === 'wedding' ? 'বিবাহ অনুষ্ঠান' : eventType === 'prewedding' ? 'প্রি-ওয়েডিং' : 'অন্নপ্রাশন / জন্মদিন';
    return `নমস্কার আলো ছবি স্টুডিও, আমি একটি কাস্টম প্যাকেজের কোটেশন জানতে চাই।\n- অনুষ্ঠানের ধরন: ${eventName}\n- দিন সংখ্যা: ${daysLabel}\n- সিনেমাটিক ভিডিও: ${needVideo ? 'হ্যাঁ' : 'না'}\n- ড্রোন কভারেজ: ${needDrone ? 'হ্যাঁ' : 'না'}\n- প্রিমিয়াম অ্যালবাম: ${needAlbum ? 'হ্যাঁ' : 'না'}\nদয়া করে প্যাকেজের মূল্য ও প্রাপ্যতা জানান।`;
  };

  return (
    <section id="packages" className="py-24 bg-[#090A0E] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] mb-2">
            INVESTMENT & SERVICE TIERS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF9F6] font-bengali">
            আমাদের প্যাকেজসমূহ
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto my-4 rounded-full" />
          <p className="text-sm sm:text-base text-stone-400 font-bengali leading-relaxed">
            আপনার প্রয়োজন ও বাজেট অনুযায়ী সাজানো তিনটি প্রধান সেবামূলক প্যাকেজ। স্বচ্ছ আলোচনা ও কোনো গোপনীয় খরচ ছাড়া বুক করুন।
          </p>
        </div>

        {/* 3 Packages Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {PACKAGES_DATA.map((pkg) => {
            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-2xl p-7 transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-gradient-to-b from-[#141720] to-[#0E1015] border-2 border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/10 -translate-y-2'
                    : 'bg-[#101217] border border-white/10 hover:border-[#D4AF37]/40'
                }`}
              >
                {/* Popular Highlight Badge */}
                {pkg.badgeBn && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#E5C158] via-[#D4AF37] to-[#C5A059] text-black text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                    {pkg.badgeBn}
                  </div>
                )}

                <div>
                  {/* Package Titles */}
                  <div className="border-b border-white/10 pb-5 mb-6">
                    <p className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
                      {pkg.nameEn}
                    </p>
                    <h3 className="text-2xl font-bold text-white font-bengali mt-1">
                      {pkg.nameBn}
                    </h3>
                    <p className="text-xs text-stone-400 font-bengali mt-2 leading-relaxed">
                      {pkg.taglineBn}
                    </p>
                  </div>

                  {/* Price Tag Replacement strictly complying with the rule */}
                  <div className="mb-6 p-4 rounded-xl bg-black/40 border border-[#D4AF37]/20 text-center">
                    <span className="text-sm font-semibold text-[#D4AF37] font-bengali block">
                      মূল্য জানতে যোগাযোগ করুন
                    </span>
                    <span className="text-[11px] text-stone-400 font-bengali mt-0.5 block">
                      (অনুষ্ঠানের ভেন্যু ও তারিখের ওপর নির্ভর করে)
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-mono uppercase tracking-wider text-stone-300">
                      প্যাকেজে অন্তর্ভুক্ত সুবিধাসমূহ:
                    </p>
                    {pkg.featuresBn.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-stone-300 font-bengali leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-white/5 space-y-2">
                  <button
                    onClick={() => setSelectedPackageForModal(pkg)}
                    className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-black bg-[#D4AF37] hover:bg-[#E5C158] rounded-lg shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
                  >
                    <span>প্যাকেজ সম্পর্কে জানুন</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(
                      `নমস্কার আলো ছবি স্টুডিও, আমি আপনাদের "${pkg.nameBn}" (${pkg.nameEn}) সম্পর্কে আলোচনা ও মূল্য জানতে আগ্রহী।`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 px-4 text-xs font-medium text-stone-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-all flex items-center justify-center gap-2 border border-white/5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>সরাসরি হোয়াটসঅ্যাপে জানুন</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Quote Estimator / Interactive Requirement Builder */}
        <div className="bg-[#12141A] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
                CUSTOM REQUIREMENT
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-bengali mt-1">
                আপনার প্রয়োজন অনুযায়ী কাস্টমাইজ করুন
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 font-bengali mt-2">
                নির্দিষ্ট কোনো চাহিদা থাকলে নিচের অপশনগুলো নির্বাচন করে আমাদের সরাসরি মেসেজ পাঠাতে পারেন।
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {/* Event Type */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-2">
                  ইভেন্টের ধরন
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full bg-[#0A0C10] border border-white/15 focus:border-[#D4AF37] rounded-lg px-3.5 py-2.5 text-sm text-white font-bengali focus:outline-none"
                >
                  <option value="wedding">বিবাহ অনুষ্ঠান (Wedding)</option>
                  <option value="prewedding">প্রি-ওয়েডিং শ্যুট (Pre-Wedding)</option>
                  <option value="annaprashan">অন্নপ্রাশন ও মুখে ভাত</option>
                  <option value="birthday">জন্মদিনের পার্টি (Birthday)</option>
                  <option value="corporate">কর্পোরেট / অন্যান্য ইভেন্ট</option>
                </select>
              </div>

              {/* Event Duration */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-2">
                  অনুষ্ঠানের মেয়াদ / দিন
                </label>
                <select
                  value={eventDays}
                  onChange={(e) => setEventDays(e.target.value)}
                  className="w-full bg-[#0A0C10] border border-white/15 focus:border-[#D4AF37] rounded-lg px-3.5 py-2.5 text-sm text-white font-bengali focus:outline-none"
                >
                  <option value="1">১ দিন (একক অনুষ্ঠান)</option>
                  <option value="2">২ দিন (বিয়ে + রিসেপশন)</option>
                  <option value="3">৩+ দিন (হলুদ + বিয়ে + বউভাত)</option>
                </select>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <label className="flex items-center gap-3 p-3.5 rounded-xl bg-black/40 border border-white/10 cursor-pointer hover:border-[#D4AF37]/50 transition-colors">
                <input
                  type="checkbox"
                  checked={needDrone}
                  onChange={(e) => setNeedDrone(e.target.checked)}
                  className="w-4 h-4 accent-[#D4AF37] rounded"
                />
                <span className="text-xs sm:text-sm font-bengali text-stone-200">
                  ৪K ড্রোন সিনেমা
                </span>
              </label>

              <label className="flex items-center gap-3 p-3.5 rounded-xl bg-black/40 border border-white/10 cursor-pointer hover:border-[#D4AF37]/50 transition-colors">
                <input
                  type="checkbox"
                  checked={needVideo}
                  onChange={(e) => setNeedVideo(e.target.checked)}
                  className="w-4 h-4 accent-[#D4AF37] rounded"
                />
                <span className="text-xs sm:text-sm font-bengali text-stone-200">
                  সিনেমাটিক ভিডিওগ্রাফি
                </span>
              </label>

              <label className="flex items-center gap-3 p-3.5 rounded-xl bg-black/40 border border-white/10 cursor-pointer hover:border-[#D4AF37]/50 transition-colors">
                <input
                  type="checkbox"
                  checked={needAlbum}
                  onChange={(e) => setNeedAlbum(e.target.checked)}
                  className="w-4 h-4 accent-[#D4AF37] rounded"
                />
                <span className="text-xs sm:text-sm font-bengali text-stone-200">
                  লাক্সারি ফটো অ্যালবাম
                </span>
              </label>
            </div>

            {/* Send Custom Plan CTA */}
            <div className="text-center">
              <a
                href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(getCustomInquiryText())}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#E5C158] via-[#D4AF37] to-[#C5A059] text-black font-semibold text-sm rounded-lg shadow-lg hover:brightness-110 active:scale-95 transition-all font-bengali"
              >
                <MessageCircle className="w-4 h-4" />
                <span>এই পছন্দের ভিত্তিতে মূল্য জানতে যোগাযোগ করুন</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Package Detail Modal */}
      {selectedPackageForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#12141A] border border-[#D4AF37]/40 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setSelectedPackageForModal(null)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-white"
            >
              ✕
            </button>

            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
              {selectedPackageForModal.nameEn}
            </span>
            <h3 className="text-2xl font-bold text-white font-bengali mt-1">
              {selectedPackageForModal.nameBn}
            </h3>
            <p className="text-xs text-stone-400 font-bengali mt-1">
              {selectedPackageForModal.suitableForBn}
            </p>

            <div className="mt-6 space-y-2.5">
              <h4 className="text-xs font-mono uppercase text-stone-300">ইনক্লুশন তালিকা:</h4>
              {selectedPackageForModal.featuresBn.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-stone-300 font-bengali">
                  <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-2">
              <a
                href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(
                  `নমস্কার, আমি "${selectedPackageForModal.nameBn}" সম্পর্কে বিস্তারিত আলোচনা ও বুকিং তথ্য জানতে চাই।`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>হোয়াটসঅ্যাপে মূল্য ও প্রাপ্যতা নিশ্চিত করুন</span>
              </a>
              <button
                onClick={() => setSelectedPackageForModal(null)}
                className="w-full py-2 text-xs text-stone-400 hover:text-white"
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
