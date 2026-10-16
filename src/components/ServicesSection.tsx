import React, { useState } from 'react';
import { 
  Camera, Video, Heart, Aperture, Smile, Gift, Cake, Sparkles, 
  Baby, HeartHandshake, User, IdCard, Users, Film, Tv, Clapperboard, 
  BookOpen, Sliders, ChevronRight, X, Check, Phone, MessageCircle 
} from 'lucide-react';
import { SERVICES_DATA, STUDIO_INFO } from '../data/photographyData';
import { ServiceItem } from '../types';

const ICON_MAP: Record<string, React.ElementType> = {
  Camera,
  Video,
  Heart,
  Aperture,
  Smile,
  Gift,
  Cake,
  Sparkles,
  Baby,
  HeartHandshake,
  User,
  IdCard,
  Users,
  Film,
  Tv,
  Clapperboard,
  BookOpen,
  Sliders
};

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'wedding' | 'personal' | 'event' | 'production'>('all');

  const filterTabs = [
    { id: 'all', label: 'সব পরিষেবা (১৭টি)' },
    { id: 'wedding', label: 'বিয়ে ও কাপল' },
    { id: 'personal', label: 'বেবি ও ব্যক্তিগত' },
    { id: 'event', label: 'ইভেন্ট ও ভিডিও' },
    { id: 'production', label: 'অ্যালবাম ও পোস্ট-প্রোডাকশন' },
  ];

  const filteredServices = SERVICES_DATA.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="services" className="py-24 bg-[#08090C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] mb-2">
            OUR SPECIALIZED SERVICES
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF9F6] font-bengali">
            আমাদের বিশেষ পরিষেবাসমূহ
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto my-4 rounded-full" />
          <p className="text-sm sm:text-base text-stone-400 font-bengali leading-relaxed">
            বিয়ে থেকে জন্মদিন, অন্নপ্রাশন থেকে সিনেমাটিক ড্রোন—আপনার প্রতিটি উদযাপনের জন্য রয়েছে আমাদের প্রফেশনাল ও সুসজ্জিত কভারেজ।
          </p>

          {/* Filter Tabs (Functional Button Controls with Clean Styling) */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                  activeFilter === tab.id
                    ? 'bg-[#D4AF37] text-black font-semibold shadow-md shadow-[#D4AF37]/20'
                    : 'bg-[#12141A] text-stone-300 hover:text-white hover:bg-[#1A1E26] border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = ICON_MAP[service.iconName] || Camera;
            return (
              <div
                key={service.id}
                className="group relative bg-[#101217] border border-white/5 hover:border-[#D4AF37]/40 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {service.highlight && (
                      <span className="text-[11px] font-mono tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded border border-[#D4AF37]/20">
                        জনপ্রিয়
                      </span>
                    )}
                  </div>

                  {/* Title & English Subtitle */}
                  <h3 className="text-xl font-bold text-[#FAF9F6] font-bengali group-hover:text-[#D4AF37] transition-colors">
                    {service.nameBn}
                  </h3>
                  <p className="text-[11px] font-mono tracking-wider text-[#A0A09D] uppercase mt-0.5 mb-3">
                    {service.nameEn}
                  </p>

                  {/* Short Bengali Description */}
                  <p className="text-sm text-stone-400 font-bengali leading-relaxed line-clamp-3">
                    {service.descriptionBn}
                  </p>
                </div>

                {/* Card Action Button */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-stone-500 font-mono">
                    {service.equipmentBn.split('+')[0]?.trim()}
                  </span>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:text-[#E5C158] group-hover:translate-x-1 transition-all focus:outline-none"
                  >
                    <span>বিস্তারিত দেখুন</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#12141A] border border-[#D4AF37]/40 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4">
                <p className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
                  {selectedService.nameEn}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-bengali mt-1">
                  {selectedService.nameBn}
                </h3>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#D4AF37] font-mono mb-2">
                  কাজের বিবরণ ও শৈলী
                </h4>
                <p className="text-stone-300 font-bengali text-sm sm:text-base leading-relaxed">
                  {selectedService.fullDetailsBn}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#D4AF37] font-mono mb-3">
                  কী কী পাচ্ছেন (DELIVERABLES)
                </h4>
                <ul className="space-y-2">
                  {selectedService.deliverablesBn.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-stone-300 font-bengali">
                      <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#090A0E] border border-white/5">
                <h4 className="text-xs uppercase tracking-wider text-stone-400 font-mono">
                  ব্যবহৃত ক্যামেরা ও লেন্স
                </h4>
                <p className="text-sm font-mono text-[#FAF9F6] mt-1">
                  {selectedService.equipmentBn}
                </p>
              </div>

              {/* Action Buttons in Modal */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/10">
                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(
                    `নমস্কার আলো ছবি স্টুডিও, আমি আপনাদের "${selectedService.nameBn}" পরিষেবা সম্পর্কে বিস্তারিত জানতে চাই।`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:flex-1 py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold rounded-lg flex items-center justify-center gap-2 text-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>হোয়াটসঅ্যাপে বুকিং কথা বলুন</span>
                </a>

                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto py-3 px-6 bg-[#D4AF37] hover:bg-[#E5C158] text-black font-semibold rounded-lg text-sm transition-all text-center"
                >
                  কোটেশন চান
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
