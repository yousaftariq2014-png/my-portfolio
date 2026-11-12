import React, { useState } from 'react';
import { Film, Play, Pause, ExternalLink, Sparkles, CheckCircle2, Users, Maximize2, X, Share2, Compass } from 'lucide-react';

export const InteractiveVideoReel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'proof' | 'reel'>('proof');
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const facebookUrl = 'https://www.facebook.com/share/19kLKCKURK/';
  const proofScreenshot = '/assets/aistudio/_5C79D7B0-8D94-41BC-B86F-CA7D11543B50__67ab51e0.png';

  const scenes = [
    {
      title: 'Neon Odyssey (Realify AI)',
      prompt: 'A futuristic atmospheric cyberpunk avenue with holographic billboards reflecting on rain puddles, smooth 35mm lens tracking.',
      bgGradient: 'from-blue-900 via-indigo-950 to-slate-950',
      tag: 'Sci-Fi Cinematic'
    },
    {
      title: 'Echoes of History',
      prompt: 'Dramatic cinematic recreation of ancient architecture with golden dawn sunlight breaking through misty mountain arches.',
      bgGradient: 'from-amber-950 via-stone-900 to-slate-950',
      tag: 'Storytelling Narrative'
    },
    {
      title: 'Lumina Minimalist Commercial',
      prompt: 'Hyper-minimal studio product reveal with soft studio directional lighting, floating particles, and fluid camera orbits.',
      bgGradient: 'from-emerald-950 via-teal-950 to-slate-950',
      tag: 'Commercial & Brand'
    }
  ];

  const currentScene = scenes[activeSceneIndex];

  return (
    <div className="flex flex-col bg-[#0f131c] border border-white/10 rounded-2xl p-4 sm:p-5 shadow-2xl text-white max-w-lg w-full">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between pb-3 border-b border-white/10 mb-4 gap-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center shadow-md">
            <Film className="w-3.5 h-3.5 text-white" />
          </div>
          <div>
            <div className="text-xs font-mono font-bold tracking-wider text-white flex items-center gap-1.5">
              <span>REALIFY AI</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="text-[10px] font-mono text-purple-300">Verified AI Video Brand</div>
          </div>
        </div>

        {/* Direct Facebook Link CTA */}
        <a
          href={facebookUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all duration-150 active:scale-95 shadow-md shadow-blue-600/30 group"
          title="Open official Facebook page"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          <span>Realify AI Facebook</span>
          <ExternalLink className="w-3 h-3 text-blue-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* Mode Switcher Tabs */}
      <div className="grid grid-cols-2 gap-1.5 p-1 rounded-xl bg-black/40 border border-white/5 mb-4 text-xs font-mono">
        <button
          onClick={() => setActiveTab('proof')}
          className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg font-semibold transition-all cursor-pointer ${
            activeTab === 'proof'
              ? 'bg-purple-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <Users className="w-3.5 h-3.5" />
          <span>Facebook Proof (525+ Fans)</span>
        </button>

        <button
          onClick={() => setActiveTab('reel')}
          className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg font-semibold transition-all cursor-pointer ${
            activeTab === 'reel'
              ? 'bg-purple-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <Film className="w-3.5 h-3.5" />
          <span>AI Video Player & Prompts</span>
        </button>
      </div>

      {/* TAB 1: Real Facebook Page Proof */}
      {activeTab === 'proof' && (
        <div className="space-y-3.5">
          {/* Screenshot Showcase Container */}
          <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#090b10] shadow-xl group">
            {/* Top Bar with URL Preview */}
            <div className="px-3 py-2 bg-[#121622] border-b border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
              </div>
              <div className="px-2.5 py-0.5 rounded-md bg-black/50 text-[10px] text-cyan-300 font-mono truncate max-w-[210px] flex items-center gap-1">
                <span>🔒 facebook.com/share/19kLKCKURK</span>
              </div>
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="p-1 rounded hover:bg-white/10 text-slate-300 transition-colors"
                title="Expand screenshot"
              >
                <Maximize2 className="w-3 h-3" />
              </button>
            </div>

            {/* Clickable Image Preview */}
            <div
              onClick={() => setIsLightboxOpen(true)}
              className="relative cursor-pointer overflow-hidden aspect-[16/10] bg-slate-900"
            >
              <img
                src={proofScreenshot}
                alt="Realify AI Facebook Page proof with 525+ followers"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />

              {/* Floating Badge */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-emerald-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>525 Followers · 100% Organic Growth</span>
                </div>
                <span className="text-[10px] font-mono text-slate-300 bg-white/10 px-2 py-1 rounded-md backdrop-blur-md">
                  Click to Zoom
                </span>
              </div>
            </div>
          </div>

          {/* Quick Metrics & Bio Breakdown */}
          <div className="grid grid-cols-3 gap-2 text-center font-mono">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
              <div className="text-base font-bold font-display text-white">525+</div>
              <div className="text-[10px] text-slate-400 uppercase">Organic Followers</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
              <div className="text-base font-bold font-display text-emerald-400">100%</div>
              <div className="text-[10px] text-slate-400 uppercase">AI Video Content</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
              <div className="text-base font-bold font-display text-purple-400">0 to 500+</div>
              <div className="text-[10px] text-slate-400 uppercase">Self-Grown Channel</div>
            </div>
          </div>

          {/* Page Bio Quotation */}
          <div className="p-3 rounded-xl bg-gradient-to-r from-purple-950/40 via-blue-950/30 to-transparent border border-purple-500/20 text-xs font-sans text-slate-200">
            <div className="text-[10px] font-mono uppercase text-purple-300 font-bold mb-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-purple-400" />
              <span>Page Tagline & Vision</span>
            </div>
            <p className="italic text-slate-300 leading-relaxed text-[11px]">
              "Where Imagination Meets Artificial Intelligence 🤖 ✨ · Cinematic AI Videos · Unreal Stories, Realistic Visuals · Next-Level AI Creativity."
            </p>
          </div>

          {/* Action Link Button */}
          <a
            href={facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-xs sm:text-sm transition-all duration-150 active:scale-95 shadow-lg shadow-purple-900/30"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Visit Official Page: facebook.com/share/19kLKCKURK</span>
            <ExternalLink className="w-3.5 h-3.5 shrink-0" />
          </a>
        </div>
      )}

      {/* TAB 2: Interactive Video Player & Prompt Inspector */}
      {activeTab === 'reel' && (
        <div className="space-y-3.5">
          {/* Video Simulation Canvas / Player Box */}
          <div
            className={`w-full h-44 rounded-xl border border-white/10 relative overflow-hidden bg-gradient-to-br ${currentScene.bgGradient} flex flex-col justify-between p-4 shadow-inner`}
          >
            {/* Floating AI Generation Badge */}
            <div className="flex items-center justify-between z-10">
              <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-purple-300 border border-purple-400/30 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" /> {currentScene.tag}
              </span>
              <span className="text-[10px] font-mono text-slate-300 bg-black/50 px-1.5 py-0.5 rounded">
                4K · 60 FPS
              </span>
            </div>

            {/* Ambient Moving Particles or Center Play Toggle */}
            <div className="flex flex-col items-center justify-center my-auto text-center z-10">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-transform active:scale-90 shadow-lg cursor-pointer"
              >
                {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
              </button>
              <span className="text-xs font-bold font-display text-white mt-2 drop-shadow">
                {currentScene.title}
              </span>
            </div>

            {/* Scene Progress Bar */}
            <div className="w-full bg-black/40 h-1 rounded-full overflow-hidden z-10">
              <div
                className={`h-full bg-purple-400 ${isPlaying ? 'w-3/4 animate-pulse' : 'w-1/2'}`}
              />
            </div>

            {/* Background Animated Sheen */}
            <div className="absolute inset-0 bg-radial from-white/10 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Scene Switcher & Prompt Preview */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>AI SCENE PROMPT PREVIEW</span>
              <span>{activeSceneIndex + 1} / {scenes.length}</span>
            </div>

            <p className="text-xs text-slate-300 bg-white/5 p-2.5 rounded-lg border border-white/5 font-sans italic">
              "{currentScene.prompt}"
            </p>

            <div className="grid grid-cols-3 gap-1.5 pt-1">
              {scenes.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSceneIndex(idx)}
                  className={`py-1.5 px-2 rounded-lg text-[10px] font-mono truncate transition-all border cursor-pointer ${
                    activeSceneIndex === idx
                      ? 'bg-purple-500/20 text-purple-300 border-purple-400/50 font-bold'
                      : 'bg-white/5 text-slate-400 border-white/5 hover:text-white'
                  }`}
                >
                  Scene 0{idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Channel link indicator */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>Published on Realify AI</span>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="text-amber-400 hover:underline flex items-center gap-1 font-semibold"
            >
              <span>Watch on Facebook</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}

      {/* Lightbox Modal for high-res screenshot inspection */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#121622] rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-3 bg-[#1a2030] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono font-bold text-white">
                  Realify AI Facebook Page Proof — 525+ Followers
                </span>
              </div>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="overflow-auto p-2 bg-black flex-1 flex items-center justify-center">
              <img
                src={proofScreenshot}
                alt="Full Realify AI Facebook Page screenshot"
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="px-4 py-3 bg-[#1a2030] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="text-slate-300">
                100% Organic Growth through AI Video Generation
              </span>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl flex items-center gap-1.5 shadow-md"
              >
                <span>Open Live Facebook Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
