import React, { useState } from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';

interface StudioImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  aspectRatioClass?: string;
}

export const StudioImage: React.FC<StudioImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle = 'আলো ছবি স্টুডিও',
  aspectRatioClass = 'aspect-4/3'
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div
        className={`w-full ${aspectRatioClass} bg-gradient-to-br from-[#12141A] via-[#1A1D24] to-[#0D0F14] border border-[#D4AF37]/20 flex flex-col items-center justify-center p-6 text-center text-[#D4AF37] relative overflow-hidden select-none ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0,transparent_70%)] pointer-events-none" />
        <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mb-3">
          <Camera className="w-6 h-6 text-[#D4AF37]" />
        </div>
        <p className="text-sm font-medium text-[#F4F4F0] line-clamp-1">{fallbackTitle}</p>
        <p className="text-xs text-[#D4AF37]/80 mt-1 font-mono tracking-wider">ALO CHOBI STUDIO</p>
      </div>
    );
  }

  return (
    <div className={`relative w-full overflow-hidden bg-[#121418] ${aspectRatioClass} ${className}`}>
      {/* Subtle loader shimmer placeholder until image loads */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#121418] via-[#1C1F26] to-[#121418] animate-pulse flex items-center justify-center">
          <ImageIcon className="w-6 h-6 text-[#D4AF37]/30 animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-all duration-700 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
      />
    </div>
  );
};
