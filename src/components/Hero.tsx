import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight, Sparkles, Volume2, VolumeX, ShieldCheck, Heart, Award } from 'lucide-react';
import { STUDIO_INFO } from '../data/photographyData';

export const Hero: React.FC = () => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorNodesRef = useRef<OscillatorNode[]>([]);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Soft Indian sitar-like harmonic ambient sound using Web Audio API
  const toggleAmbientSound = () => {
    if (isPlayingAudio) {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.4);
        setTimeout(() => {
          oscillatorNodesRef.current.forEach((osc) => {
            try { osc.stop(); } catch {}
          });
          oscillatorNodesRef.current = [];
          setIsPlayingAudio(false);
        }, 500);
      }
    } else {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
        masterGain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 1.2);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Warm tanpura / sitar drone frequencies (Sa - Pa - Sa octave: C#3 138.59Hz, G#3 207.65Hz, C#4 277.18Hz)
        const freqs = [138.59, 207.65, 277.18, 415.30];
        const newOscs: OscillatorNode[] = [];

        freqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const panner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
          const filter = ctx.createBiquadFilter();

          osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(800 + idx * 200, ctx.currentTime);

          if (panner) {
            panner.pan.setValueAtTime(idx % 2 === 0 ? -0.3 : 0.3, ctx.currentTime);
            osc.connect(filter);
            filter.connect(panner);
            panner.connect(masterGain);
          } else {
            osc.connect(filter);
            filter.connect(masterGain);
          }

          osc.start();
          newOscs.push(osc);
        });

        oscillatorNodesRef.current = newOscs;
        setIsPlayingAudio(true);
      } catch (e) {
        console.error('Audio initialization error:', e);
      }
    }
  };

  useEffect(() => {
    return () => {
      oscillatorNodesRef.current.forEach((osc) => {
        try { osc.stop(); } catch {}
      });
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        try { audioCtxRef.current.close(); } catch {}
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Cinematic Background with Dark Scrim Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2000&q=85"
          alt="Cinematic Bengali Wedding Photography"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000 ease-out animate-subtleZoom"
        />
        {/* Measured Scrim for WCAG 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/80 to-[#08090C]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.8)_100%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-24">
        {/* Top Kicker - Anti-slop clean unboxed typography */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-[#D4AF37]/30 bg-black/40 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-xs font-semibold tracking-wider uppercase text-[#D4AF37] font-display">
            প্রিমিয়াম ওয়েডিং ও ইভেন্ট ফটোগ্রাফি স্টুডিও
          </span>
        </div>

        {/* Main Bengali Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAF9F6] font-bengali leading-[1.25] text-balance max-w-4xl mx-auto">
          {STUDIO_INFO.taglineBn}
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#D8D8D5] font-bengali max-w-3xl mx-auto leading-relaxed">
          {STUDIO_INFO.taglineSubBn}
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <a
            href="#gallery"
            className="w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base font-semibold text-black bg-gradient-to-r from-[#E5C158] via-[#D4AF37] to-[#C5A059] rounded-lg shadow-xl shadow-[#D4AF37]/25 hover:shadow-[#D4AF37]/45 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 group whitespace-nowrap"
          >
            <span>আমাদের গ্যালারি দেখুন</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base font-semibold text-[#FAF9F6] bg-black/50 hover:bg-black/80 border border-[#D4AF37]/40 hover:border-[#D4AF37] rounded-lg backdrop-blur-sm transition-all flex items-center justify-center whitespace-nowrap active:scale-95"
          >
            এখনই যোগাযোগ করুন
          </a>
        </div>

        {/* Trust Badges - Adjacency & Clean metadata without pill boxes */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-bold text-[#D4AF37] font-mono tabular-nums">
              {STUDIO_INFO.experienceYears}
            </span>
            <span className="text-xs sm:text-sm text-[#B0B0AE] mt-1 font-bengali">
              বছরের অভিজ্ঞতা
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-bold text-[#D4AF37] font-mono tabular-nums">
              {STUDIO_INFO.completedEvents}
            </span>
            <span className="text-xs sm:text-sm text-[#B0B0AE] mt-1 font-bengali">
              সফল ইভেন্ট কভারেজ
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-bold text-[#D4AF37] font-mono tabular-nums">
              ৪K ও ড্রোন
            </span>
            <span className="text-xs sm:text-sm text-[#B0B0AE] mt-1 font-bengali">
              সিনেমাটিক আল্ট্রা কোয়ালিটি
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-bold text-[#D4AF37] font-mono tabular-nums">
              ১০০%
            </span>
            <span className="text-xs sm:text-sm text-[#B0B0AE] mt-1 font-bengali">
              সময়মতো ডেলিভারি গ্যারান্টি
            </span>
          </div>
        </div>
      </div>

      {/* Floating Ambient Tone Controller */}
      <div className="absolute bottom-6 right-6 z-20 hidden md:block">
        <button
          onClick={toggleAmbientSound}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-[#D4AF37]/30 hover:border-[#D4AF37] text-xs text-[#D8D8D5] hover:text-[#D4AF37] transition-all backdrop-blur-md"
          title={isPlayingAudio ? 'সাউন্ড বন্ধ করুন' : 'আবহ সঙ্গীত শুনুন (তানপুরা সুর)'}
        >
          {isPlayingAudio ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
              <span className="text-[11px] font-bengali">আবহ সঙ্গীত চালু</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-stone-400" />
              <span className="text-[11px] font-bengali">আবহ সঙ্গীত (ঐচ্ছিক)</span>
            </>
          )}
        </button>
      </div>

      {/* Scroll Down Prompt */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-[#B0B0AE] hover:text-[#D4AF37] transition-colors group"
        aria-label="Scroll down to About section"
      >
        <span className="text-[10px] uppercase font-mono tracking-widest mb-1 group-hover:translate-y-0.5 transition-transform">
          নিচে দেখুন
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#D4AF37]" />
      </a>
    </section>
  );
};
