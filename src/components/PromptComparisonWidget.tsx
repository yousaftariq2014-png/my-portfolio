import React, { useState } from 'react';
import { Sparkles, ArrowRight, Check, X, Sliders, Zap } from 'lucide-react';

export const PromptComparisonWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'engineered' | 'raw'>('engineered');

  return (
    <div className="bg-[#121622] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 mb-1">
            <Zap className="w-3.5 h-3.5" /> High-Retention Video & AI Proof
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
            Raw Prompting vs. Yousaf's AI Architecture
          </h3>
        </div>

        {/* Interactive Segmented Switcher */}
        <div className="flex items-center gap-1 p-1 bg-black/50 rounded-xl border border-white/10 text-xs font-mono">
          <button
            onClick={() => setActiveTab('engineered')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'engineered'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ★ Yousaf's Realify AI Prompt
          </button>
          <button
            onClick={() => setActiveTab('raw')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'raw'
                ? 'bg-rose-500/20 text-rose-300 font-bold border border-rose-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Generic Amateur Prompt
          </button>
        </div>
      </div>

      {/* Comparison Body */}
      {activeTab === 'engineered' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center animate-in fade-in duration-200">
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <Check className="w-4 h-4" /> MULTI-LAYERED PROMPT MATRIX
              </span>
              <span className="text-slate-400">Yield: 4K Commercial Grade</span>
            </div>

            <div className="p-4 rounded-xl bg-black/60 border border-cyan-500/30 font-mono text-xs text-cyan-200 leading-relaxed max-h-48 overflow-y-auto">
              <p className="text-amber-300 mb-1">[DIRECTOR]: Realify AI Cinematic Engine</p>
              <p className="text-slate-300 mb-1">[SCENE]: Night rain over neon metropolis, hyper-realistic water reflections with anamorphic lens flare.</p>
              <p className="text-slate-300 mb-1">[CAMERA]: 35mm low-angle smooth forward tracking, 24fps film cadence, volumetric rim illumination.</p>
              <p className="text-slate-400 text-[11px]">[NEGATIVE]: Plastic texture, distorted hands, erratic motion, artifacts, oversaturated bloom.</p>
            </div>

            <div className="grid grid-cols-3 gap-2 text-xs font-mono pt-1">
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                <span className="text-slate-400 block text-[10px]">Viewer Retention</span>
                <span className="text-emerald-400 font-bold text-sm">+85% Watch Time</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                <span className="text-slate-400 block text-[10px]">Generation Cost</span>
                <span className="text-cyan-400 font-bold text-sm">3x Fewer Re-rolls</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                <span className="text-slate-400 block text-[10px]">Consistency</span>
                <span className="text-amber-400 font-bold text-sm">Character Locked</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/80 to-slate-900 border border-cyan-500/30 shadow-xl text-center space-y-3">
              <span className="inline-block p-2 rounded-xl bg-cyan-500/20 text-cyan-400 text-xs font-mono font-bold">
                REALIFY AI RESULT
              </span>
              <h4 className="text-lg font-bold font-display text-white">
                Cinematic, Crisp & Viral-Ready
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Every camera move, lighting shift, and character motion is engineered deliberately to grip social media attention within the first 2 seconds.
              </p>
              <div className="pt-2">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-semibold border border-emerald-500/20">
                  Ready for Realify AI Channels
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center animate-in fade-in duration-200">
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-rose-400 font-bold flex items-center gap-1">
                <X className="w-4 h-4" /> CASUAL UNSTRUCTURED PROMPT
              </span>
              <span className="text-slate-500">Yield: Generic AI Slop</span>
            </div>

            <div className="p-4 rounded-xl bg-black/60 border border-rose-500/30 font-mono text-xs text-rose-300 leading-relaxed">
              <p>"make a cool cyberpunk video with neon city and rain fast"</p>
            </div>

            <div className="grid grid-cols-3 gap-2 text-xs font-mono pt-1">
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 opacity-60">
                <span className="text-slate-500 block text-[10px]">Viewer Retention</span>
                <span className="text-rose-400 font-bold text-sm">High Drop-off</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 opacity-60">
                <span className="text-slate-500 block text-[10px]">Generation Cost</span>
                <span className="text-rose-400 font-bold text-sm">Wasted Credits</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 opacity-60">
                <span className="text-slate-500 block text-[10px]">Visuals</span>
                <span className="text-rose-400 font-bold text-sm">Unstable / Morphing</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="p-5 rounded-2xl bg-[#151722] border border-rose-500/20 text-center space-y-3">
              <span className="inline-block p-2 rounded-xl bg-rose-500/20 text-rose-300 text-xs font-mono font-bold">
                COMMON PITFALL
              </span>
              <h4 className="text-lg font-bold font-display text-white">
                Fails to Grab Client Interest
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Without camera syntax, lighting tokens, and negative anchors, AI models hallucinate jittery artifacts that look cheap and amateurish.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
