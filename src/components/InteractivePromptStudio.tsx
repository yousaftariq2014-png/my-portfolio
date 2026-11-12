import React, { useState } from 'react';
import { Sparkles, Copy, Check, Terminal, Sliders, Cpu, Zap, Play, RotateCcw, DollarSign, Eye } from 'lucide-react';

export const InteractivePromptStudio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'video' | 'forex' | 'code'>('video');
  const [temperature, setTemperature] = useState(0.3);
  const [showSimulatedOutput, setShowSimulatedOutput] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const promptPresets = {
    video: {
      title: 'Realify AI Cinematic Video Architecture',
      task: 'Text-to-Video scene generation with camera pacing & mood grading',
      modelRecommendation: 'Runway Gen-3 / Midjourney v6',
      tokens: 174,
      prompt: `[ROLE]: Cinematic Director & Visual Stylist for Realify AI
[SCENE]: Cyberpunk rain-slicked metropolis at dusk, ultra-realistic volumetric neon reflections on wet asphalt.
[CAMERA]: Low-angle slow dolly forward with 35mm anamorphic lens, shallow depth of field, gentle lens flare.
[LIGHTING]: High-contrast cyan and amber rim lighting, moody atmospheric haze, 8k resolution, cinematic color grade.
[MOTION]: Fluid crowd movement in background, steady rain particles, hyper-smooth 24fps motion cadence.
[NEGATIVE]: Cartoonish, oversaturated, plastic skin, jittery frame drops, low resolution.`,
      tags: ['Runway Gen-3', '35mm Anamorphic', 'Volumetric Light'],
      simulatedOutput: `Generated Scene Vector #01:
• Composition: Low-angle tracking shot, 35mm anamorphic distortion factor 1.33x
• Volumetric Haze: Raymarched density 0.42, dual-point cyan rim light (480nm)
• Particle Physics: 1,200 rain droplets/sec with dynamic wet-surface reflectivity
• Output Pacing: 24.00 FPS cadence ready for Realify AI Reels export.`
    },
    forex: {
      title: 'Forex Multi-Timeframe Catalyst Prompt',
      task: 'Evaluating currency pair structure, key supply/demand zones, and news sentiment',
      modelRecommendation: 'Claude 3.5 Sonnet / GPT-4o',
      tokens: 162,
      prompt: `[ACT AS]: Senior Quantitative Forex Analyst & Risk Officer
[CURRENCY PAIR]: EUR/USD
[TIMEFRAMES]: Daily Trend Direction, 4H Market Structure, 15M Entry Setup
[INSTRUCTION]:
1. Identify high-probability order blocks and liquidity sweep levels.
2. Calculate risk/reward ratio assuming a maximum 1% capital risk.
3. Formulate an invalidation criterion where the trade thesis is instantly aborted.
4. Output structured table: Support, Resistance, Confluence Factors, Entry, Invalidation SL.`,
      tags: ['1% Risk Rule', 'Order Blocks', 'EUR/USD Structure'],
      simulatedOutput: `| Metric | Level | Thesis |
|---|---|---|
| Key Supply Zone | 1.0890 - 1.0910 | 4H Bearish Order Block with FVG |
| Liquidity Sweep | 1.0845 | London Open Session Low swept |
| Entry Trigger | 1.0858 | 15M Market Structure Shift confirmation |
| Stop Loss (SL) | 1.0838 (20 pips) | Invalidated below structural swing low |
| Risk / Reward | 1 : 3.4 | Capital Risk strictly capped at 1.0% |`
    },
    code: {
      title: 'Clean Web Architecture Prompt',
      task: 'Zero-bloat TypeScript & Tailwind UI generation with clean accessibility',
      modelRecommendation: 'Gemini 2.5 Flash / Claude 3.5',
      tokens: 148,
      prompt: `[OBJECTIVE]: Generate production-grade, accessible React component with Tailwind CSS.
[CONSTRAINTS]:
- Zero-pill metadata discipline, unboxed text with typographic separators (·).
- WCAG AA contrast standards, keyboard accessible with focus-visible rings.
- Tabular figures (tabular-nums) for all metrics and counters.
- Clean functional state hooks with TypeScript interfaces.`,
      tags: ['TypeScript', 'Tailwind v4', 'WCAG AA', 'Zero Technical Debt'],
      simulatedOutput: `export interface MetricCardProps {
  label: string;
  value: string | number;
  delta: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ label, value, delta }) => (
  <div className="p-4 rounded-xl bg-white/5 border border-white/10 font-mono">
    <div className="text-xs text-slate-400 uppercase">{label}</div>
    <div className="text-2xl font-bold text-white tabular-nums mt-1">{value}</div>
    <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1">↑ {delta}</div>
  </div>
);`
    }
  };

  const currentPreset = promptPresets[activeCategory];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentPreset.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSimulate = () => {
    setIsGenerating(true);
    setShowSimulatedOutput(false);
    setTimeout(() => {
      setIsGenerating(false);
      setShowSimulatedOutput(true);
    }, 700);
  };

  // Cost calculation estimation per 1,000 runs
  const costPer1k = ((currentPreset.tokens / 1000) * 0.003).toFixed(4);

  return (
    <div className="flex flex-col bg-[#0d1017] border border-white/10 rounded-3xl p-4 sm:p-6 shadow-2xl text-white max-w-lg w-full relative overflow-hidden">
      {/* Top Header & Presets */}
      <div className="flex flex-wrap items-center justify-between pb-3.5 border-b border-white/10 mb-4 gap-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-md">
            <Cpu className="w-4 h-4 text-black font-bold" />
          </div>
          <div>
            <div className="text-xs font-mono font-bold tracking-wider text-white flex items-center gap-1.5">
              <span>NEURAL PROMPT BENCH</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </div>
            <div className="text-[10px] font-mono text-cyan-300">Deterministic Prompt Engineering</div>
          </div>
        </div>

        {/* Category switcher */}
        <div className="flex gap-1 bg-black/60 p-1 rounded-xl border border-white/10 text-xs font-mono">
          <button
            onClick={() => { setActiveCategory('video'); setShowSimulatedOutput(false); }}
            className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
              activeCategory === 'video' ? 'bg-cyan-400 text-black font-bold shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            AI Video
          </button>
          <button
            onClick={() => { setActiveCategory('forex'); setShowSimulatedOutput(false); }}
            className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
              activeCategory === 'forex' ? 'bg-amber-400 text-black font-bold shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Forex
          </button>
          <button
            onClick={() => { setActiveCategory('code'); setShowSimulatedOutput(false); }}
            className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
              activeCategory === 'code' ? 'bg-purple-400 text-black font-bold shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Code
          </button>
        </div>
      </div>

      {/* Preset Title & Task Info */}
      <div className="mb-3">
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
          <span className="text-cyan-300 font-bold uppercase">Optimal Model: {currentPreset.modelRecommendation}</span>
          <span className="text-amber-400 font-bold">~{currentPreset.tokens} Tokens</span>
        </div>
        <h4 className="text-sm font-bold font-display text-white">{currentPreset.title}</h4>
        <p className="text-[11px] font-mono text-slate-400 mt-0.5">{currentPreset.task}</p>
      </div>

      {/* Live Parameter Tuning Slider (Temperature) */}
      <div className="p-3 rounded-xl bg-black/40 border border-white/5 mb-3 space-y-2 text-xs font-mono">
        <div className="flex items-center justify-between text-[11px]">
          <span className="flex items-center gap-1.5 text-slate-300">
            <Sliders className="w-3.5 h-3.5 text-cyan-400" />
            <span>Temperature: <strong className="text-amber-400">{temperature.toFixed(2)}</strong></span>
          </span>
          <span className="text-[10px] text-slate-400">
            {temperature < 0.4 ? 'Strict & Deterministic' : temperature < 0.7 ? 'Balanced Precision' : 'Creative Exploratory'}
          </span>
        </div>
        <input
          type="range"
          min="0.0"
          max="1.0"
          step="0.05"
          value={temperature}
          onChange={(e) => setTemperature(parseFloat(e.target.value))}
          className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-white/10 rounded-lg"
        />
      </div>

      {/* Code / Prompt Terminal Box */}
      <div className="relative bg-[#090b10] rounded-xl border border-white/10 p-3.5 mb-3 font-mono text-[11px] text-slate-300 leading-relaxed overflow-x-auto max-h-48 overflow-y-auto">
        <pre className="whitespace-pre-wrap">{currentPreset.prompt}</pre>
      </div>

      {/* Simulated Output Panel */}
      {showSimulatedOutput && (
        <div className="p-3.5 rounded-xl bg-[#111927] border border-cyan-500/30 mb-3 animate-in fade-in duration-300">
          <div className="flex items-center justify-between text-[10px] font-mono text-cyan-300 mb-1.5 font-bold">
            <span className="flex items-center gap-1">
              <Zap className="w-3 h-3 text-cyan-400" />
              <span>SIMULATED ZERO-HALLUCINATION INFERENCE</span>
            </span>
            <span className="text-emerald-400">Latency: 380ms</span>
          </div>
          <pre className="text-[10px] font-mono text-slate-200 whitespace-pre-wrap leading-relaxed overflow-x-auto max-h-36">
            {currentPreset.simulatedOutput}
          </pre>
        </div>
      )}

      {/* Metrics Strip */}
      <div className="grid grid-cols-3 gap-2 py-2 mb-3 border-y border-white/5 text-[10px] font-mono text-center">
        <div>
          <span className="text-slate-400 block">Est. Cost / 1k</span>
          <span className="text-emerald-400 font-bold">${costPer1k}</span>
        </div>
        <div>
          <span className="text-slate-400 block">Hallucination Rate</span>
          <span className="text-cyan-300 font-bold">0.00%</span>
        </div>
        <div>
          <span className="text-slate-400 block">Output Format</span>
          <span className="text-amber-300 font-bold">Structured JSON / MD</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between gap-2">
        <button
          onClick={handleSimulate}
          disabled={isGenerating}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-all active:scale-95 cursor-pointer border border-white/10"
        >
          {isGenerating ? (
            <>
              <RotateCcw className="w-3.5 h-3.5 animate-spin text-cyan-400" />
              <span>Running...</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 text-cyan-400" />
              <span>Test Output</span>
            </>
          )}
        </button>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs transition-transform active:scale-95 shadow-md shadow-cyan-500/20 cursor-pointer"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-black" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Copied Prompt!' : 'Copy Prompt'}</span>
        </button>
      </div>
    </div>
  );
};

