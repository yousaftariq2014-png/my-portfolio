import React from 'react';
import { X, Sparkles, Coffee, Code2, Heart } from 'lucide-react';
import { CREATOR_INFO } from '../data/portfolioData';

interface WittyBioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WittyBioModal: React.FC<WittyBioModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#161922] border-2 border-amber-400/40 rounded-2xl shadow-2xl p-6 text-white transform rotate-[-1deg] transition-all">
        {/* Top adhesive tape effect */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-amber-400/30 backdrop-blur-md rounded shadow-sm rotate-1 border border-amber-300/40" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 mb-3 text-amber-400 font-mono text-xs">
          <Sparkles className="w-4 h-4" />
          <span>CONFIDENTIAL CREATOR LOG</span>
        </div>

        <h3 className="text-xl font-bold font-display text-white mb-3">
          Behind the Pixels
        </h3>

        <p className="text-sm text-slate-300 leading-relaxed mb-5 font-sans">
          "{CREATOR_INFO.wittyBio}"
        </p>

        <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-5">
          <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center gap-2 text-slate-300">
            <Coffee className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Pour-over addict</span>
          </div>
          <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center gap-2 text-slate-300">
            <Code2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>60fps or riot</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-white/10 text-[11px] text-slate-400 font-mono">
          <span className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-rose-500 fill-current" /> by Yousaf
          </span>
          <button
            onClick={onClose}
            className="text-amber-400 hover:underline font-semibold"
          >
            Got it, close ✕
          </button>
        </div>
      </div>
    </div>
  );
};
