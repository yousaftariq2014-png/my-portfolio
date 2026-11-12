import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, RotateCw, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { CREATOR_INFO } from '../data/portfolioData';

interface RealisticFlipCalendarProps {
  onRoleChange?: (role: string) => void;
}

export const RealisticFlipCalendar: React.FC<RealisticFlipCalendarProps> = ({ onRoleChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'up' | 'down'>('up');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const roles = [
    {
      title: 'Full-Stack Web Architect',
      subtitle: 'High-Converting Web Apps · Sub-Second Load Times',
      detail: 'Clean React/Next.js Code · Zero-Bug Launch · Semantic SEO & 99+ Speed',
      badge: 'WEB ARCHITECT',
      accentColor: '#f97316'
    },
    {
      title: 'Certified Prop Trader',
      subtitle: '$50K+ Funded Capital · Strict 1% Risk Rule',
      detail: 'FundedNext (50K) · My Funded FX (10K) · Real Cash Payouts with OFP',
      badge: '$50K ELITE TRADER',
      accentColor: '#10b981'
    },
    {
      title: 'AI Systems & Video Founder',
      subtitle: 'Creator of Realify AI · 525+ Organic Facebook Followers',
      detail: 'Concept-to-Video Pipelines · Grown 100% Organically · fb.com/share/19kLKCKURK',
      badge: 'REALIFY AI FOUNDER',
      accentColor: '#c084fc'
    },
    {
      title: 'AI Prompt Engineer',
      subtitle: 'Context-Rich Production Workflows',
      detail: 'Autonomous Agent Prompts · Multimodal Pipelines · Precision Outputs',
      badge: 'PROMPT SYSTEMS',
      accentColor: '#38bdf8'
    },
    {
      title: 'Academic & Research Writer',
      subtitle: 'Distinction-Grade Business Coursework & Dissertations',
      detail: 'BPP & UK Universities · 0% Plagiarism · Harvard & APA Referencing',
      badge: 'RESEARCH WRITER',
      accentColor: '#0ea5e9'
    }
  ];

  // Play realistic paper rustle sound via Web Audio API
  const playPaperRustle = () => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Generate a soft noise burst simulating paper sliding and lifting
      const bufferSize = ctx.sampleRate * 0.06; // 60ms
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.4));
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      // Bandpass filter to make it sound like crisp cardstock paper
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1800;
      filter.Q.value = 1.2;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.055);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      whiteNoise.start();
    } catch {
      // Audio autoplay restrictions gracefully handled
    }
  };

  const flipToNext = () => {
    if (isFlipping) return;
    setPrevIndex(currentIndex);
    setFlipDirection('up');
    setIsFlipping(true);
    playPaperRustle();

    const next = (currentIndex + 1) % roles.length;
    setCurrentIndex(next);
    if (onRoleChange) onRoleChange(roles[next].title);

    setTimeout(() => {
      setIsFlipping(false);
    }, 650);
  };

  const flipToPrev = () => {
    if (isFlipping) return;
    setPrevIndex(currentIndex);
    setFlipDirection('down');
    setIsFlipping(true);
    playPaperRustle();

    const prev = (currentIndex - 1 + roles.length) % roles.length;
    setCurrentIndex(prev);
    if (onRoleChange) onRoleChange(roles[prev].title);

    setTimeout(() => {
      setIsFlipping(false);
    }, 650);
  };

  // Auto flip every 3.8 seconds if idle
  useEffect(() => {
    const timer = setInterval(() => {
      flipToNext();
    }, 3800);
    return () => clearInterval(timer);
  }, [currentIndex, isFlipping]);

  const currentRole = roles[currentIndex];
  const oldRole = roles[prevIndex];

  return (
    <div className="w-full max-w-xl mb-8 relative select-none">
      {/* Wooden / Charcoal Calendar Stand Backboard */}
      <div className="relative rounded-3xl p-3 bg-gradient-to-b from-[#222834] via-[#161a22] to-[#0c0e13] border-2 border-[#333d52] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]">
        
        {/* Desk Calendar Stand Header Bar */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-1.5 mb-2 border-b border-white/10 text-[10px] sm:text-[11px] font-mono text-slate-400 gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
            <span className="font-bold tracking-wider text-slate-200 truncate">
              CALENDAR · 2026
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Audio Toggle */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-1 rounded text-slate-400 hover:text-white transition-colors cursor-pointer"
              title={soundEnabled ? 'Mute paper turn sound' : 'Enable paper turn sound'}
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-amber-400" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>

            {/* Stepper Buttons */}
            <div className="flex items-center gap-1 bg-white/5 rounded-md p-0.5 border border-white/10 shrink-0">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  flipToPrev();
                }}
                disabled={isFlipping}
                className="p-1 rounded hover:bg-white/10 text-slate-300 disabled:opacity-40 transition-colors cursor-pointer"
                title="Flip to previous page"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <span className="text-[10px] font-mono px-1 sm:px-1.5 text-amber-400 whitespace-nowrap">
                0{currentIndex + 1} / 0{roles.length}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  flipToNext();
                }}
                disabled={isFlipping}
                className="p-1 rounded hover:bg-white/10 text-slate-300 disabled:opacity-40 transition-colors cursor-pointer"
                title="Flip to next page"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Realistic Metallic Twin-Wire Coil Binder (Top of pages) */}
        <div className="relative z-30 flex justify-between px-3 sm:px-6 -mb-3 pointer-events-none overflow-hidden max-w-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex flex-col items-center shrink-0">
              {/* Top metallic loop */}
              <div
                className="w-2 sm:w-2.5 h-5 sm:h-6 rounded-full bg-gradient-to-r from-slate-500 via-white to-slate-600 shadow-md border border-slate-700"
                style={{
                  boxShadow: '0 4px 6px rgba(0,0,0,0.5), inset 0 1px 2px rgba(255,255,255,0.9)'
                }}
              />
              {/* Punched hole cutout shadow */}
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-black/80 -mt-1 shadow-inner border border-black/40" />
            </div>
          ))}
        </div>

        {/* 3D Perspective Flip Container */}
        <div
          onClick={flipToNext}
          className="relative w-full min-h-[185px] sm:min-h-[195px] rounded-2xl cursor-pointer perspective-1600 transform-style-3d overflow-visible"
        >
          {/* BASE PAGE (UNDERNEATH) - Always shows the target currentRole */}
          <div
            className="w-full h-full bg-[#fdfdfd] text-slate-900 rounded-2xl p-4 sm:p-6 sm:p-7 pt-5 sm:pt-6 shadow-xl border border-slate-300 relative overflow-hidden flex flex-col justify-between"
            style={{
              backgroundImage: 'radial-gradient(#e2e8f0 1.2px, transparent 1.2px)',
              backgroundSize: '16px 16px'
            }}
          >
            {/* Perforated tear line below binder */}
            <div className="absolute top-2.5 left-3 right-3 sm:left-4 sm:right-4 border-b border-dashed border-slate-300/80 pointer-events-none" />

            {/* Top row metadata */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-rose-600 uppercase flex items-center gap-1">
                <span>●</span> {currentRole.badge}
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono font-semibold text-slate-400">
                PAGE 0{currentIndex + 1}
              </span>
            </div>

            {/* Role Title */}
            <div className="my-2">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-display tracking-tight text-slate-900 leading-tight">
                {currentRole.title}
              </h3>
              <p className="text-[11px] sm:text-xs md:text-sm font-mono font-semibold text-slate-600 mt-1">
                {currentRole.subtitle}
              </p>
            </div>

            {/* Bottom detail row */}
            <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-500 gap-2">
              <span className="truncate max-w-[70%] sm:max-w-[80%]">{currentRole.detail}</span>
              <span className="text-amber-600 font-bold shrink-0 flex items-center gap-1">
                Flip up ⤸
              </span>
            </div>

            {/* Shadow overlay that softens as top page lifts away */}
            {isFlipping && flipDirection === 'up' && (
              <div
                className="absolute inset-0 bg-black/20 pointer-events-none transition-opacity duration-500"
                style={{ opacity: 0 }}
              />
            )}
          </div>

          {/* FLIPPING PAGE (TOP LEAF) - Only active during isFlipping */}
          {isFlipping && (
            <div
              className={`absolute inset-0 w-full h-full rounded-2xl p-4 sm:p-6 sm:p-7 pt-5 sm:pt-6 bg-[#f8fafc] text-slate-900 border border-slate-300 shadow-2xl flex flex-col justify-between z-20 pointer-events-none origin-top ${
                flipDirection === 'up' ? 'animate-calendar-flip-up' : 'animate-calendar-flip-down'
              }`}
              style={{
                backgroundImage: 'radial-gradient(#cbd5e1 1.2px, transparent 1.2px)',
                backgroundSize: '16px 16px',
                backfaceVisibility: 'hidden'
              }}
            >
              {/* Perforated tear line */}
              <div className="absolute top-2.5 left-3 right-3 sm:left-4 sm:right-4 border-b border-dashed border-slate-300/80 pointer-events-none" />

              {/* Dynamic Curvature Gradient Shadow on the lifting paper */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.08) 40%, transparent 100%)'
                }}
              />

              {/* Old Role Content being flipped up */}
              <div className="flex items-center justify-between pt-1 relative z-10">
                <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-rose-600 uppercase flex items-center gap-1">
                  <span>●</span> {oldRole.badge}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono font-semibold text-slate-400">
                  PAGE 0{prevIndex + 1}
                </span>
              </div>

              <div className="my-2 relative z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-display tracking-tight text-slate-900 leading-tight">
                  {oldRole.title}
                </h3>
                <p className="text-[11px] sm:text-xs md:text-sm font-mono font-semibold text-slate-600 mt-1">
                  {oldRole.subtitle}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-500 relative z-10 gap-2">
                <span className="truncate max-w-[70%] sm:max-w-[80%]">{oldRole.detail}</span>
                <span className="text-slate-400 shrink-0">Turning...</span>
              </div>
            </div>
          )}

          {/* Under-page paper thickness edge effect */}
          <div className="absolute -bottom-1 inset-x-2 h-1.5 bg-slate-300/80 rounded-b-xl -z-10 shadow-sm" />
          <div className="absolute -bottom-2 inset-x-4 h-1.5 bg-slate-400/60 rounded-b-xl -z-20 shadow-sm" />
        </div>

        {/* Calendar Footer Indicator Bar */}
        <div className="mt-3 flex items-center justify-between px-2 text-[10px] font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>REALISTIC UPWARD PAGE FLIP</span>
          </div>
          <div className="flex gap-1.5">
            {roles.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === i ? 'w-5 bg-amber-400' : 'w-1.5 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
