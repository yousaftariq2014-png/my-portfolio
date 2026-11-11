import React, { useState } from 'react';
import { Sparkles, Copy, Check, Terminal, FileCode, Sliders } from 'lucide-react';

export const InteractivePromptStudio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'video' | 'forex' | 'code'>('video');
  const [copied, setCopied] = useState(false);

  const promptPresets = {
    video: {
      title: 'Realify AI Cinematic Video Prompt Architecture',
      task: 'Text-to-Video scene generation with camera pacing & mood grading',
      prompt: `[ROLE]: Cinematic Director & Visual Stylist for Realify AI
[SCENE]: Cyberpunk rain-slicked metropolis at dusk, ultra-realistic volumetric neon reflections on wet asphalt.
[CAMERA]: Low-angle slow dolly forward with 35mm anamorphic lens, shallow depth of field, gentle lens flare.
[LIGHTING]: High-contrast cyan and amber rim lighting, moody atmospheric haze, 8k resolution, cinematic color grade.
[MOTION]: Fluid crowd movement in background, steady rain particles, hyper-smooth 24fps motion cadence.
[NEGATIVE]: Cartoonish, oversaturated, plastic skin, jittery frame drops, low resolution.`,
      tags: ['Midjourney / Runway Gen-3', 'Camera Angles', 'Volumetric Lighting']
    },
    forex: {
      title: 'Forex Multi-Timeframe Catalyst Prompt',
      task: 'Evaluating currency pair structure, key supply/demand zones, and news sentiment',
      prompt: `[ACT AS]: Senior Quantitative Forex Analyst & Risk Officer
[CURRENCY PAIR]: EUR/USD
[TIMEFRAMES]: Daily Trend Direction, 4H Market Structure, 15M Entry Setup
[INSTRUCTION]:
1. Identify high-probability order blocks and liquidity sweep levels.
2. Calculate risk/reward ratio assuming a maximum 1% capital risk.
3. Formulate an invalidation criterion where the trade thesis is instantly aborted.
4. Output structured table: Support, Resistance, Confluence Factors, Entry, Invalidation SL.`,
      tags: ['Risk Control', 'Price Action', 'Liquidity Analysis']
    },
    code: {
      title: 'Clean Web Architecture Prompt',
      task: 'Zero-bloat TypeScript & Tailwind UI generation with clean accessibility',
      prompt: `[OBJECTIVE]: Generate production-grade, accessible React component with Tailwind CSS.
[CONSTRAINTS]:
- Zero-pill metadata discipline, unboxed text with typographic separators (·).
- WCAG AA contrast standards, keyboard accessible with focus-visible rings.
- Tabular figures (tabular-nums) for all metrics and counters.
- Clean functional state hooks with TypeScript interfaces.`,
      tags: ['React', 'TypeScript', 'Clean Architecture']
    }
  };

  const currentPreset = promptPresets[activeCategory];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentPreset.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="flex flex-col bg-[#0f131c] border border-white/10 rounded-2xl p-5 shadow-2xl text-white max-w-md w-full">
      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-mono font-bold tracking-wider text-slate-300">
            PROMPT LAB
          </span>
        </div>

        {/* Category switcher */}
        <div className="flex gap-1 bg-white/5 p-1 rounded-lg border border-white/5 text-[11px] font-mono">
          <button
            onClick={() => setActiveCategory('video')}
            className={`px-2 py-0.5 rounded transition-colors ${
              activeCategory === 'video' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            AI Video
          </button>
          <button
            onClick={() => setActiveCategory('forex')}
            className={`px-2 py-0.5 rounded transition-colors ${
              activeCategory === 'forex' ? 'bg-amber-400 text-black font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Forex
          </button>
          <button
            onClick={() => setActiveCategory('code')}
            className={`px-2 py-0.5 rounded transition-colors ${
              activeCategory === 'code' ? 'bg-violet-400 text-black font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Code
          </button>
        </div>
      </div>

      <div className="mb-3">
        <h4 className="text-sm font-bold font-display text-white">{currentPreset.title}</h4>
        <p className="text-[11px] font-mono text-slate-400">{currentPreset.task}</p>
      </div>

      {/* Code / Prompt Terminal Box */}
      <div className="relative bg-[#090b10] rounded-xl border border-white/10 p-3.5 mb-4 font-mono text-[11px] text-slate-300 leading-relaxed overflow-x-auto max-h-48 overflow-y-auto">
        <pre className="whitespace-pre-wrap">{currentPreset.prompt}</pre>
      </div>

      {/* Tags and Copy Button */}
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1 text-[10px] font-mono text-slate-400">
          {currentPreset.tags.map((t, idx) => (
            <span key={idx} className="px-2 py-0.5 rounded bg-white/5 border border-white/5">
              {t}
            </span>
          ))}
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs transition-transform active:scale-95 shadow-md shadow-cyan-500/20"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-black" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Copied!' : 'Copy Prompt'}</span>
        </button>
      </div>
    </div>
  );
};
