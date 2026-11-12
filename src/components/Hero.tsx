import React from 'react';
import { ArrowUpRight, ArrowDown, Sparkles, Calendar } from 'lucide-react';
import { CREATOR_INFO } from '../data/portfolioData';
import { RealisticFlipCalendar } from './RealisticFlipCalendar';

interface HeroProps {
  onStartProject: () => void;
  onBookStrategyCall: () => void;
  onExploreWork: () => void;
  onOpenWittyBio: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartProject,
  onBookStrategyCall,
  onExploreWork,
  onOpenWittyBio
}) => {
  return (
    <section className="relative pt-8 pb-14 sm:pt-14 sm:pb-20 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typography & Realistic Upward Flip Desk Calendar */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs font-mono text-slate-300 mb-6 max-w-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="truncate">Full-Stack Web Architect & AI Systems Engineer</span>
            </div>

            {/* Headline */}
            <div className="space-y-1 mb-4">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-white hover:text-amber-400 transition-colors">Yousaf.</span>
              </h1>
              <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-slate-400 font-display">
                I build products as a
              </div>
            </div>

            {/* Realistic Upward-Flipping Desk Calendar */}
            <RealisticFlipCalendar />

            {/* Value Proposition & Client ROI Hook */}
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mb-6 font-normal">
              I help founders, businesses, and creators build <span className="text-white font-semibold underline decoration-amber-400/50 underline-offset-4">high-converting web applications</span>, <span className="text-amber-400 font-semibold">automated AI systems</span>, and <span className="text-emerald-400 font-semibold">disciplined digital platforms</span> that turn visitors into paying customers.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3.5 mb-6 w-full">
              <button
                onClick={onStartProject}
                className="flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 bg-white text-black hover:bg-amber-400 font-bold rounded-xl text-sm transition-all duration-150 shadow-lg shadow-white/5 active:scale-95 cursor-pointer w-full sm:w-auto"
              >
                <span>Start a project</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </button>

              <button
                onClick={onBookStrategyCall}
                className="flex items-center justify-center gap-2 px-5 py-3.5 bg-gradient-to-r from-amber-400/20 via-amber-400/10 to-transparent hover:bg-amber-400/25 text-amber-300 font-semibold rounded-xl text-sm border border-amber-400/30 transition-all duration-150 shadow-sm active:scale-95 cursor-pointer w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Book 15-Min Call</span>
              </button>

              <button
                onClick={onExploreWork}
                className="flex items-center justify-center gap-2 px-5 py-3.5 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl text-sm border border-white/10 transition-all duration-150 active:scale-95 cursor-pointer w-full sm:w-auto"
              >
                <span>See my work</span>
                <ArrowDown className="w-4 h-4 text-slate-400 shrink-0" />
              </button>
            </div>

            {/* Client Confidence Micro-Proof Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 w-full max-w-xl pt-4 border-t border-white/10 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2.5 bg-white/[0.03] sm:bg-transparent p-2 sm:p-0 rounded-lg sm:rounded-none">
                <span className="text-amber-400 font-bold text-base shrink-0">⚡</span>
                <div className="min-w-0">
                  <div className="text-white font-semibold truncate">Sub-second Speed</div>
                  <div className="text-[10px] text-slate-400 truncate">99+ Lighthouse Score</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 bg-white/[0.03] sm:bg-transparent p-2 sm:p-0 rounded-lg sm:rounded-none">
                <span className="text-emerald-400 font-bold text-base shrink-0">🛡️</span>
                <div className="min-w-0">
                  <div className="text-white font-semibold truncate">$50K+ Funded</div>
                  <div className="text-[10px] text-slate-400 truncate">Strict Risk Discipline</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 bg-white/[0.03] sm:bg-transparent p-2 sm:p-0 rounded-lg sm:rounded-none">
                <span className="text-cyan-400 font-bold text-base shrink-0">🤝</span>
                <div className="min-w-0">
                  <div className="text-white font-semibold truncate">Direct Access</div>
                  <div className="text-[10px] text-slate-400 truncate">Zero Agency Middlemen</div>
                </div>
              </div>
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
                  className="w-full h-[400px] sm:h-[480px] md:h-[500px] object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Bottom contrast vignette scrim */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

                {/* "my witty bio ↗" interactive tag */}
                <button
                  onClick={onOpenWittyBio}
                  className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 hover:bg-black/95 backdrop-blur-md text-white text-xs font-mono border border-white/20 transition-all hover:border-amber-400 hover:text-amber-400 shadow-lg cursor-pointer group/tag"
                >
                  <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                  <span>my witty bio</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/tag:translate-x-0.5 group-hover/tag:-translate-y-0.5 shrink-0" />
                </button>

                {/* High-demand availability indicator */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2.5 sm:px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] sm:text-[11px] font-mono text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 shadow-lg max-w-[85%] truncate">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="truncate">Open for 2 Selected Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Ticker Banner */}
      <div className="mt-14 w-full border-y border-white/10 bg-[#0f1218]/90 py-3 overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-8 text-xs font-mono tracking-widest text-slate-300 uppercase">
          <span>HIGH-CONVERTING REACT & WEB APPS</span>
          <span className="text-amber-400 font-bold">•</span>
          <span>ACADEMIC & CONSULTANCY RESEARCH WRITING</span>
          <span className="text-amber-400 font-bold">•</span>
          <span>SUB-SECOND PAGE SPEEDS (99+ SCORE)</span>
          <span className="text-amber-400 font-bold">•</span>
          <span>AI AUTOMATION & REALIFY AI FOUNDER</span>
          <span className="text-amber-400 font-bold">•</span>
          <span>$50,000+ FUNDED TRADING CAPITAL DISCIPLINE</span>
          <span className="text-amber-400 font-bold">•</span>
          <span>SOFTWARE & FULL-STACK ENGINEER</span>
          <span className="text-amber-400 font-bold">•</span>
          <span>100% CODE OWNERSHIP & ZERO LOCK-IN</span>
          <span className="text-amber-400 font-bold">•</span>
          <span>HIGH-CONVERTING REACT & WEB APPS</span>
          <span className="text-amber-400 font-bold">•</span>
          <span>ACADEMIC & CONSULTANCY RESEARCH WRITING</span>
          <span className="text-amber-400 font-bold">•</span>
          <span>SUB-SECOND PAGE SPEEDS (99+ SCORE)</span>
          <span className="text-amber-400 font-bold">•</span>
          <span>AI AUTOMATION & REALIFY AI FOUNDER</span>
          <span className="text-amber-400 font-bold">•</span>
          <span>$50,000+ FUNDED TRADING CAPITAL DISCIPLINE</span>
          <span className="text-amber-400 font-bold">•</span>
        </div>
      </div>
    </section>
  );
};
