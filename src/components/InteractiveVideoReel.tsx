import React, { useState } from 'react';
import { Film, Play, Pause, ExternalLink, Sparkles, Layers, Sliders } from 'lucide-react';

export const InteractiveVideoReel: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);

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
    <div className="flex flex-col bg-[#0f131c] border border-white/10 rounded-2xl p-5 shadow-2xl text-white max-w-md w-full">
      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
        <div className="flex items-center gap-2">
          <Film className="w-4 h-4 text-purple-400" />
          <span className="text-xs font-mono font-bold tracking-wider text-slate-300">
            REALIFY AI STUDIO
          </span>
        </div>

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 text-[11px] font-mono text-amber-400 hover:underline"
        >
          <span>Facebook Page</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

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
            className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-transform active:scale-90 shadow-lg"
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
      <div className="mt-4 space-y-2">
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
              className={`py-1.5 px-2 rounded-lg text-[10px] font-mono truncate transition-all border ${
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
    </div>
  );
};
