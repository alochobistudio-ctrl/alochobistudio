import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, MessageCircle } from 'lucide-react';
import { STUDIO_FAQS, STUDIO_INFO } from '../data/photographyData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-[#08090C] border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border border-[#D4AF37]/30 bg-black/40">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#D4AF37] font-display">
              COMMON INQUIRIES
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-bengali">
            সাধারণ কিছু প্রশ্নোত্তর (FAQs)
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 font-bengali mt-2">
            বুকিং ও সার্ভিসের ব্যাপারে ক্লায়েন্টদের সচরাচর জিজ্ঞাসিত প্রশ্নের উত্তর।
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {STUDIO_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#111319] border border-white/5 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bengali text-white hover:text-[#D4AF37] transition-colors focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-semibold">
                    {faq.qBn}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-300 font-bengali leading-relaxed border-t border-white/5 animate-fadeIn">
                    {faq.aBn}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Consultation CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#141720] via-[#1A1D26] to-[#141720] border border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white font-bengali">
              অন্য কোনো প্রশ্ন আছে বা তারিখ ফাঁকা আছে কি জানতে চান?
            </h4>
            <p className="text-xs text-stone-400 font-bengali mt-0.5">
              আমাদের টিম সব সময় আপনাকে সাহায্য করতে প্রস্তুত।
            </p>
          </div>
          <a
            href={`tel:${STUDIO_INFO.phone}`}
            className="px-5 py-2.5 bg-[#D4AF37] hover:bg-[#E5C158] text-black font-semibold text-xs uppercase tracking-wider rounded-lg shrink-0 flex items-center gap-2 transition-all font-sans"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>সরাসরি কথা বলুন</span>
          </a>
        </div>

      </div>
    </section>
  );
};
