import React, { useState, useEffect, useCallback } from 'react';
import { 
  ZoomIn, ChevronLeft, ChevronRight, X, Camera, MapPin, 
  Share2, Heart, Download, MessageCircle, Sparkles 
} from 'lucide-react';
import { GALLERY_ITEMS, STUDIO_INFO } from '../data/photographyData';
import { GalleryItem } from '../types';
import { StudioImage } from './StudioImage';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'সব' },
    { id: 'wedding', label: 'বিয়ে' },
    { id: 'prewedding', label: 'প্রি-ওয়েডিং' },
    { id: 'event', label: 'ইভেন্ট' },
    { id: 'portrait', label: 'পোর্ট্রেট' },
    { id: 'baby', label: 'বেবি' },
    { id: 'other', label: 'অন্যান্য' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handleNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev! + 1) % filteredItems.length));
    }
  }, [lightboxIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev! - 1 + filteredItems.length) % filteredItems.length));
    }
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev]);

  return (
    <section id="gallery" className="py-24 bg-[#08090C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] mb-2">
            OUR CURATED PORTFOLIO
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF9F6] font-bengali">
            প্রিমিয়াম ফটো গ্যালারি
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto my-4 rounded-full" />
          <p className="text-sm sm:text-base text-stone-400 font-bengali leading-relaxed">
            আলো ও আবেগের মেলবন্ধনে ক্যামেরাবন্দী প্রতিটি ফ্রেম। যেকোনো ছবিতে ক্লিক করে বড় আকারে বিস্তারিত এক্সিফ সহ দেখুন।
          </p>

          {/* Category Tabs (Buttons, Anti-slop zero pills) */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setLightboxIndex(null);
                }}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#D4AF37] text-black font-semibold shadow-md shadow-[#D4AF37]/20'
                    : 'bg-[#12141A] text-stone-300 hover:text-white hover:bg-[#1A1E26] border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative cursor-pointer overflow-hidden rounded-xl border border-white/10 hover:border-[#D4AF37]/60 bg-[#12141A] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/80"
              >
                <div className="relative overflow-hidden aspect-4/3">
                  <StudioImage
                    src={item.imageUrl}
                    alt={item.titleBn}
                    fallbackTitle={item.titleBn}
                    aspectRatioClass="aspect-4/3"
                  />

                  {/* Dark Vignette Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center justify-between text-[#D4AF37] text-xs font-mono mb-1">
                        <span>{item.categoryLabelBn}</span>
                        <span className="flex items-center gap-1">
                          <ZoomIn className="w-3.5 h-3.5" />
                          <span>বড় করুন</span>
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white font-bengali">
                        {item.titleBn}
                      </h3>

                      <div className="flex items-center gap-2 text-xs text-stone-300 font-bengali mt-1">
                        <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span className="line-clamp-1">{item.locationBn}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtitle Bar below Image */}
                <div className="p-3 bg-[#0E1015] flex items-center justify-between border-t border-white/5 text-xs text-stone-400">
                  <span className="font-bengali text-stone-300 font-medium">{item.titleBn}</span>
                  <span className="font-mono text-[11px] text-[#D4AF37]/90">{item.cameraInfo}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && currentItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-fadeIn p-2 sm:p-6">
          {/* Top Bar inside Lightbox */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest bg-black/50 px-3 py-1 rounded-md border border-[#D4AF37]/30">
                {currentItem.categoryLabelBn} · {lightboxIndex + 1} / {filteredItems.length}
              </span>
              <span className="text-sm font-bengali text-stone-300 hidden sm:inline">
                {currentItem.titleBn}
              </span>
            </div>

            <button
              onClick={() => setLightboxIndex(null)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-black transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 hover:bg-[#D4AF37] text-white hover:text-black transition-all border border-white/10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 hover:bg-[#D4AF37] text-white hover:text-black transition-all border border-white/10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Media Container */}
          <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col lg:flex-row items-center gap-6 bg-[#0E1015] border border-[#D4AF37]/30 rounded-2xl overflow-hidden p-3 sm:p-5 shadow-2xl">
            {/* Image Preview */}
            <div className="w-full lg:w-3/5 max-h-[60vh] lg:max-h-[75vh] flex items-center justify-center overflow-hidden rounded-xl bg-black">
              <img
                src={currentItem.imageUrl}
                alt={currentItem.titleBn}
                referrerPolicy="no-referrer"
                className="max-h-[60vh] lg:max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Details Panel */}
            <div className="w-full lg:w-2/5 space-y-4 text-left p-2 sm:p-4">
              <div>
                <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
                  {currentItem.titleEn}
                </span>
                <h3 className="text-2xl font-bold text-white font-bengali mt-1">
                  {currentItem.titleBn}
                </h3>
              </div>

              <p className="text-sm text-stone-300 font-bengali leading-relaxed">
                {currentItem.storyBn}
              </p>

              {/* Technical EXIF Metadata */}
              <div className="space-y-2 p-3 rounded-xl bg-black/50 border border-white/5 font-mono text-xs">
                <div className="flex items-center justify-between text-stone-400">
                  <span className="flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5 text-[#D4AF37]" />
                    ক্যামেরা:
                  </span>
                  <span className="text-white">{currentItem.cameraInfo}</span>
                </div>
                <div className="flex items-center justify-between text-stone-400">
                  <span>লেন্স:</span>
                  <span className="text-white">{currentItem.lensInfo}</span>
                </div>
                <div className="flex items-center justify-between text-stone-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    স্থান:
                  </span>
                  <span className="text-white font-bengali">{currentItem.locationBn}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2">
                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(
                    `নমস্কার আলো ছবি স্টুডিও, আপনাদের গ্যালারির "${currentItem.titleBn}" ছবিটির মতো স্টাইলে আমাদের ইভেন্ট শুট করাতে আগ্রহী। বিস্তারিত জানতে চাই।`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-black font-semibold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>এই স্টাইলে বুক করতে হোয়াটসঅ্যাপ করুন</span>
                </a>

                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: currentItem.titleBn,
                        text: `আলো ছবি স্টুডিও গ্যালারি: ${currentItem.titleBn}`,
                        url: window.location.href,
                      }).catch(() => {});
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert('লিঙ্ক কপি হয়েছে!');
                    }
                  }}
                  className="w-full py-2 bg-white/5 hover:bg-white/10 text-stone-300 font-mono text-xs rounded-lg flex items-center justify-center gap-2 transition-all border border-white/5"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>শেয়ার করুন</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
