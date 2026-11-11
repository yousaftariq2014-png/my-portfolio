import React from 'react';
import { ArrowUpRight, ArrowDown, Sparkles } from 'lucide-react';
import { CREATOR_INFO } from '../data/portfolioData';
import { RealisticFlipCalendar } from './RealisticFlipCalendar';

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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Full-Stack Web Architect & AI Systems Engineer</span>
            </div>

            {/* Headline */}
            <div className="space-y-1 mb-4">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-white hover:text-amber-400 transition-colors">Yousaf.</span>
              </h1>
              <div className="text-2xl sm:text-4xl md:text-5xl font-medium text-slate-400 font-display">
                I build products as a
              </div>
            </div>

            {/* Realistic Upward-Flipping Desk Calendar */}
            <RealisticFlipCalendar />

            {/* Value Proposition & Client ROI Hook */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mb-6 font-normal">
              I help founders, businesses, and creators build <span className="text-white font-semibold underline decoration-amber-400/50 underline-offset-4">high-converting web applications</span>, <span className="text-amber-400 font-semibold">automated AI systems</span>, and <span className="text-emerald-400 font-semibold">disciplined digital platforms</span> that turn visitors into paying customers.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
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

            {/* Client Confidence Micro-Proof Strip */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-xl pt-4 border-t border-white/10 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-bold text-sm">⚡</span>
                <div>
                  <div className="text-white font-semibold">Sub-second Speed</div>
                  <div className="text-[10px] text-slate-400">99+ Lighthouse Score</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold text-sm">🛡️</span>
                <div>
                  <div className="text-white font-semibold">$50K+ Funded</div>
                  <div className="text-[10px] text-slate-400">Strict Risk Discipline</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold text-sm">🤝</span>
                <div>
                  <div className="text-white font-semibold">Direct Access</div>
                  <div className="text-[10px] text-slate-400">Zero Agency Middlemen</div>
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
                  className="w-full h-[450px] sm:h-[500px] object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Bottom contrast vignette scrim */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

                {/* "my witty bio ↗" interactive tag */}
                <button
                  onClick={onOpenWittyBio}
                  className="absolute bottom-5 left-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md text-white text-xs font-mono border border-white/20 transition-all hover:border-amber-400 hover:text-amber-400 shadow-lg cursor-pointer group/tag"
                >
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>my witty bio</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/tag:translate-x-0.5 group-hover/tag:-translate-y-0.5" />
                </button>

                {/* High-demand availability indicator */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-mono text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Open for 2 Selected Projects</span>
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
          <span>SUB-SECOND PAGE SPEEDS (99+ SCORE)</span>
          <span className="text-amber-400 font-bold">•</span>
          <span>AI AUTOMATION & REALIFY AI FOUNDER</span>
          <span className="text-amber-400 font-bold">•</span>
          <span>$50,000+ FUNDED TRADING CAPITAL DISCIPLINE</span>
          <span className="text-amber-400 font-bold">•</span>
          <span>BS COMPUTER SCIENCE GRADUATE</span>
          <span className="text-amber-400 font-bold">•</span>
          <span>100% CODE OWNERSHIP & ZERO LOCK-IN</span>
          <span className="text-amber-400 font-bold">•</span>
          <span>HIGH-CONVERTING REACT & WEB APPS</span>
          <span className="text-amber-400 font-bold">•</span>
          <span>SUB-SECOND PAGE SPEEDS (99+ SCORE)</span>
          <span className="text-amber-400 font-bold">•</span>
          <span>AI AUTOMATION & REALIFY AI FOUNDER</span>
          <span className="text-amber-400 font-bold">•</span>
          <span>$50,000+ FUNDED TRADING CAPITAL DISCIPLINE</span>
          <span className="text-amber-400 font-bold">•</span>
          <span>BS COMPUTER SCIENCE GRADUATE</span>
          <span className="text-amber-400 font-bold">•</span>
        </div>
      </div>
    </section>
  );
};
