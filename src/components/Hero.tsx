import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowDown, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';
import { CREATOR_INFO } from '../data/portfolioData';

interface HeroProps {
  onStartProject: () => void;
  onExploreWork: () => void;
  onOpenWittyBio: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartProject,
  onExploreWork,
  onOpenWittyBio
}) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  // Auto flip role every 3.2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      triggerNextRole();
    }, 3200);
    return () => clearInterval(timer);
  }, [currentRoleIndex]);

  const triggerNextRole = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % CREATOR_INFO.roles.length);
      setIsFlipping(false);
    }, 200);
  };

  const triggerPrevRole = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentRoleIndex((prev) => (prev - 1 + CREATOR_INFO.roles.length) % CREATOR_INFO.roles.length);
      setIsFlipping(false);
    }, 200);
  };

  const currentRole = CREATOR_INFO.roles[currentRoleIndex];

  return (
    <section className="relative pt-8 pb-14 sm:pt-14 sm:pb-20 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typography & Flip Board */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Independent Freelancer</span>
            </div>

            {/* Headline */}
            <div className="space-y-1 mb-6">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-white hover:text-amber-400 transition-colors">Yousaf.</span>
              </h1>
              <div className="text-2xl sm:text-4xl md:text-5xl font-medium text-slate-400 font-display">
                I am a
              </div>
            </div>

            {/* Spiral-Bound Interactive Notepad / Flip Card (From Video Frame 00:00 - 00:03) */}
            <div className="w-full max-w-lg mb-8 relative group">
              {/* Spiral rings at top of notepad */}
              <div className="flex justify-between px-6 -mb-2.5 z-20 relative">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-2 h-5 rounded-full bg-gradient-to-r from-slate-400 via-white to-slate-500 shadow-md border border-slate-600" />
                    <div className="w-1.5 h-1.5 rounded-full bg-black/60 -mt-1" />
                  </div>
                ))}
              </div>

              {/* The Notepad Page */}
              <div
                onClick={triggerNextRole}
                className="w-full bg-[#f8fafc] text-slate-900 rounded-2xl p-6 sm:p-8 pt-7 shadow-2xl border border-slate-200 cursor-pointer relative overflow-hidden transition-all duration-300 hover:shadow-amber-500/10 hover:border-amber-400/50 select-none"
              >
                {/* Notebook line texture */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-semibold tracking-wider text-slate-400 uppercase">
                    Role [0{currentRoleIndex + 1} / 0{CREATOR_INFO.roles.length}]
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        triggerPrevRole();
                      }}
                      className="p-1 rounded hover:bg-slate-200 text-slate-600 transition-colors"
                      title="Previous Role"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        triggerNextRole();
                      }}
                      className="p-1 rounded hover:bg-slate-200 text-slate-600 transition-colors"
                      title="Next Role"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Animated Role Text */}
                <div
                  className={`text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-slate-900 transition-all duration-200 flex items-center justify-between ${
                    isFlipping ? 'opacity-0 -translate-y-2 scale-95' : 'opacity-100 translate-y-0 scale-100'
                  }`}
                >
                  <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                    {currentRole}
                  </span>
                  <span className="text-xs font-mono font-normal text-slate-400 hidden sm:inline-block">
                    Click to flip ↷
                  </span>
                </div>

                {/* Progress bar line along bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-200">
                  <div
                    className="h-full bg-amber-500 transition-all duration-300"
                    style={{
                      width: `${((currentRoleIndex + 1) / CREATOR_INFO.roles.length) * 100}%`
                    }}
                  />
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onStartProject}
                className="flex items-center gap-2 px-6 py-3.5 bg-white text-black hover:bg-amber-400 font-bold rounded-xl text-sm transition-all duration-150 shadow-lg shadow-white/5 active:scale-95 cursor-pointer"
              >
                <span>Start a project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreWork}
                className="flex items-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl text-sm border border-white/10 transition-all duration-150 active:scale-95 cursor-pointer"
              >
                <span>See my work</span>
                <ArrowDown className="w-4 h-4 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Portrait with "my witty bio ↗" sticker */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md group">
              {/* Backing aesthetic frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-500/20 via-white/5 to-cyan-500/20 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity" />

              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#161922] shadow-2xl">
                <img
                  src={CREATOR_INFO.portraitImage}
                  alt={CREATOR_INFO.fullName}
                  className="w-full h-[450px] sm:h-[500px] object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Bottom contrast vignette scrim */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

                {/* "my witty bio ↗" interactive tag (From video Frame 00:00 - 00:03) */}
                <button
                  onClick={onOpenWittyBio}
                  className="absolute bottom-5 left-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md text-white text-xs font-mono border border-white/20 transition-all hover:border-amber-400 hover:text-amber-400 shadow-lg cursor-pointer group/tag"
                >
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>my witty bio</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/tag:translate-x-0.5 group-hover/tag:-translate-y-0.5" />
                </button>

                {/* Small indicator */}
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Open for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Ticker Banner (From video Frame 00:03) */}
      <div className="mt-14 w-full border-y border-white/10 bg-[#0f1218]/90 py-3 overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-8 text-xs font-mono tracking-widest text-slate-300 uppercase">
          <span>FOREX MARKET ANALYST (6 YRS)</span>
          <span className="text-amber-400 font-bold">•</span>
          <span>REALIFY AI VIDEO CREATOR</span>
          <span className="text-amber-400 font-bold">•</span>
          <span>AI PROMPT ENGINEER</span>
          <span className="text-amber-400 font-bold">•</span>
          <span>BS COMPUTER SCIENCE GRADUATE</span>
          <span className="text-amber-400 font-bold">•</span>
          <span>AVAILABLE FOR WORK & PROJECTS</span>
          <span className="text-amber-400 font-bold">•</span>
          <span>FOREX MARKET ANALYST (6 YRS)</span>
          <span className="text-amber-400 font-bold">•</span>
          <span>REALIFY AI VIDEO CREATOR</span>
          <span className="text-amber-400 font-bold">•</span>
          <span>AI PROMPT ENGINEER</span>
          <span className="text-amber-400 font-bold">•</span>
          <span>BS COMPUTER SCIENCE GRADUATE</span>
          <span className="text-amber-400 font-bold">•</span>
        </div>
      </div>
    </section>
  );
};
