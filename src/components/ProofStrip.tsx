import React from 'react';
import { TrendingUp, Film, Cpu, Globe, BookOpen, ShieldCheck, Clock, Zap, MessageSquare } from 'lucide-react';
import { CREATOR_INFO } from '../data/portfolioData';

interface ProofStripProps {
  onOpenConsultation: () => void;
  onViewForexProof?: () => void;
  onViewWebProof?: () => void;
  onViewAcademicProof?: () => void;
}

export const ProofStrip: React.FC<ProofStripProps> = ({
  onOpenConsultation,
  onViewForexProof,
  onViewWebProof,
  onViewAcademicProof
}) => {
  const metrics = [
    {
      icon: TrendingUp,
      value: '$50K+ Funded',
      label: 'Certified Prop Trader',
      sub: 'FundedNext 50K · 6 Yrs · Real Payouts',
      accent: 'text-emerald-400',
      border: 'hover:border-emerald-500/40',
      clickable: true,
      action: 'forex'
    },
    {
      icon: BookOpen,
      value: '47 Pages',
      label: 'Academic Research',
      sub: 'BPP & Canterbury · 0% AI Plagiarism',
      accent: 'text-sky-400',
      border: 'hover:border-sky-500/40',
      clickable: true,
      action: 'academic'
    },
    {
      icon: Film,
      value: 'Realify AI',
      label: 'AI Video Production',
      sub: 'Short-Form Narrative & Cinematic Prompts',
      accent: 'text-purple-400',
      border: 'hover:border-purple-500/40',
      clickable: false
    },
    {
      icon: Cpu,
      value: 'Context-Rich',
      label: 'Prompt Architecture',
      sub: 'Iterative Workflows & High-Yield Accuracy',
      accent: 'text-cyan-400',
      border: 'hover:border-cyan-500/40',
      clickable: false
    },
    {
      icon: Globe,
      value: 'Live Web App',
      label: 'Chai Mehfil Cafe',
      sub: 'Production React App · 99+ Speed Score',
      accent: 'text-amber-400',
      border: 'hover:border-amber-500/40',
      clickable: true,
      action: 'web'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 mb-12 sm:mb-16 relative z-20">
      {/* 5-Column Credibility Matrix */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
        {metrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <div
              key={idx}
              onClick={() => {
                if (m.action === 'forex' && onViewForexProof) {
                  onViewForexProof();
                } else if (m.action === 'web' && onViewWebProof) {
                  onViewWebProof();
                } else if (m.action === 'academic' && onViewAcademicProof) {
                  onViewAcademicProof();
                }
              }}
              className={`p-5 rounded-2xl bg-[#121622]/90 backdrop-blur-md border border-white/10 shadow-xl transition-all duration-300 hover:-translate-y-1 ${m.border} group ${m.clickable ? 'cursor-pointer hover:border-amber-400/50' : ''}`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-2xl sm:text-3xl font-black font-display tracking-tight text-white ${m.accent}`}>
                  {m.value}
                </span>
                <div className="p-2 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform">
                  <Icon className={`w-4 h-4 ${m.accent}`} />
                </div>
              </div>
              <div className="text-xs font-bold font-mono text-slate-200 uppercase tracking-wide mb-1 flex items-center justify-between">
                <span>{m.label}</span>
                {m.clickable && (
                  <span className="text-[10px] text-amber-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    View Project ↗
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                {m.sub}
              </p>
            </div>
          );
        })}
      </div>

      {/* Trust & Guarantee Banner */}
      <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-white/5 to-emerald-500/10 border border-white/10 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-slate-300">
          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <ShieldCheck className="w-4 h-4" /> $50K+ Funded & Verified Cash Payouts
          </span>
          <span className="hidden md:inline text-slate-600">·</span>
          <span className="flex items-center gap-1.5 text-cyan-300">
            <Clock className="w-4 h-4" /> &lt; 24h Project Turnaround
          </span>
          <span className="hidden md:inline text-slate-600">·</span>
          <span className="flex items-center gap-1.5 text-amber-300">
            <Zap className="w-4 h-4" /> Free 15-Min Strategy Consult
          </span>
        </div>

        <button
          onClick={onOpenConsultation}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-black hover:bg-amber-400 font-bold text-xs transition-transform active:scale-95 shadow-md shrink-0 cursor-pointer"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Book Free Consultation</span>
        </button>
      </div>
    </div>
  );
};
