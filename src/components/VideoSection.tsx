import React, { useState } from 'react';
import { Play, Clapperboard, X, Eye, Clock, Sparkles } from 'lucide-react';
import { VIDEOS_DATA, STUDIO_INFO } from '../data/photographyData';
import { VideoItem } from '../types';
import { StudioImage } from './StudioImage';

export const VideoSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <section id="videos" className="py-24 bg-[#08090C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border border-[#D4AF37]/30 bg-black/40">
            <Clapperboard className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#D4AF37] font-display">
              CINEMATIC MOTION PICTURES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF9F6] font-bengali">
            সিনেমাটিক ভিডিও শোকেস
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto my-4 rounded-full" />
          <p className="text-sm sm:text-base text-stone-400 font-bengali leading-relaxed">
            শুধু স্থির ছবি নয়, জীবনের স্মরণীয় আবেগকে জীবন্ত চলচ্চিত্রের মতো ক্যামেরাবন্দী করি। ৪K আল্ট্রা রেজোলিউশন ও নিখুঁত অডিও মিক্সিং।
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VIDEOS_DATA.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="group cursor-pointer bg-[#101217] border border-white/5 hover:border-[#D4AF37]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/80 flex flex-col justify-between"
            >
              {/* Thumbnail Container with Play Overlay */}
              <div className="relative overflow-hidden aspect-16/9 bg-black">
                <StudioImage
                  src={video.thumbnailUrl}
                  alt={video.titleBn}
                  fallbackTitle={video.titleBn}
                  aspectRatioClass="aspect-16/9"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                {/* Play Button Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#D4AF37] text-black flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#E5C158] transition-all">
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/80 text-white font-mono text-[11px] px-2 py-0.5 rounded backdrop-blur-sm border border-white/10 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#D4AF37]" />
                  <span>{video.duration}</span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-[#D4AF37]/90 text-black font-semibold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded shadow">
                  {video.categoryBn}
                </div>
              </div>

              {/* Video Info Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-bengali group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {video.titleBn}
                  </h3>
                  <p className="text-xs font-mono text-stone-400 mt-1 line-clamp-1">
                    {video.titleEn}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-stone-400">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{video.viewsBn}</span>
                  </span>
                  <span className="text-[#D4AF37] font-semibold font-bengali group-hover:underline">
                    ভিডিও প্লে করুন
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube Channel Invitation Strip */}
        <div className="mt-16 text-center p-8 rounded-2xl bg-[#12141A] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-lg font-bold text-white font-bengali">
              আরও ভিডিও দেখতে চান?
            </h4>
            <p className="text-xs sm:text-sm text-stone-400 font-bengali mt-1">
              আমাদের অফিসিয়াল ইউটিউব চ্যানেলে রয়েছে ২০০+ ওয়েডিং সিনেমা ও প্রি-ওয়েডিং টিজার।
            </p>
          </div>

          <a
            href={STUDIO_INFO.socialLinks.youtube}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-[#FF0000] hover:bg-[#D90000] text-white font-semibold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center gap-2 shrink-0"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>ইউটিউব চ্যানেল সাবস্ক্রাইব করুন</span>
          </a>
        </div>

      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-[#101217] border border-[#D4AF37]/50 rounded-2xl overflow-hidden shadow-2xl">
            {/* Top Bar */}
            <div className="p-4 bg-[#0A0C10] border-b border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#D4AF37] uppercase">
                  {activeVideo.categoryBn} · {activeVideo.duration}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white font-bengali line-clamp-1">
                  {activeVideo.titleBn}
                </h3>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-2 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close Video Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Container */}
            <div className="relative aspect-16/9 bg-black">
              {/* Safe embedded demo player or realistic cinematic fallback player */}
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.embedId}?autoplay=1&rel=0&modestbranding=1`}
                title={activeVideo.titleBn}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Modal Bottom CTA */}
            <div className="p-4 bg-[#0A0C10] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400">
              <span className="font-bengali">
                আপনার বিশেষ দিনের জন্য সিনেমাটিক ভিডিওগ্রাফি বুক করতে চান?
              </span>
              <a
                href="#contact"
                onClick={() => setActiveVideo(null)}
                className="px-4 py-2 bg-[#D4AF37] text-black font-semibold rounded-md hover:bg-[#E5C158] transition-colors"
              >
                বুকিং অনুসন্ধান পাঠান
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
