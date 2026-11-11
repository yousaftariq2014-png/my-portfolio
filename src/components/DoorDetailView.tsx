import React from 'react';
import { ArrowLeft, ExternalLink, Smartphone, Sparkles, Layers, CheckCircle2, TrendingUp } from 'lucide-react';
import { ServiceDoor } from '../types';
import { PlayableBrickBreaker } from './PlayableBrickBreaker';
import { InteractiveDice } from './InteractiveDice';
import { InteractiveForexTerminal } from './InteractiveForexTerminal';
import { InteractiveVideoReel } from './InteractiveVideoReel';
import { InteractivePromptStudio } from './InteractivePromptStudio';

interface DoorDetailViewProps {
  door: ServiceDoor;
  onBackToDoors: () => void;
  onOpenContact: () => void;
}

export const DoorDetailView: React.FC<DoorDetailViewProps> = ({
  door,
  onBackToDoors,
  onOpenContact
}) => {
  return (
    <div className="py-10 sm:py-16 bg-[#0b0d12] text-white min-h-screen animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Bar / Back button (From video Frame 00:07) */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
          <button
            onClick={onBackToDoors}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold transition-all border border-white/10 active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to the doors</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: door.colorTheme.glowColor }}
            />
            <span className="uppercase">{door.shortTitle} DOSSIER</span>
          </div>
        </div>

        {/* Studio Header (From video Frame 00:07) */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono mb-3" style={{ color: door.colorTheme.glowColor }}>
            <Layers className="w-3.5 h-3.5" /> Core Competency
          </div>
          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white mb-4">
            {door.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            {door.description}
          </p>
        </div>

        {/* Project List */}
        <div className="space-y-16 sm:space-y-24">
          {door.projects.map((proj, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={proj.id}
                className="bg-[#121620] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
              >
                {/* Subtle top accent gradient */}
                <div
                  className="absolute top-0 inset-x-0 h-1"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${door.colorTheme.glowColor}, transparent)`
                  }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Text Details Column */}
                  <div className={`lg:col-span-7 ${!isEven && 'lg:order-2'} space-y-5`}>
                    {/* Category unboxed metadata (anti-slop clean text) */}
                    <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-slate-400">
                      <span className="font-bold text-amber-400">{proj.category}</span>
                      <span>·</span>
                      <span>VERIFIED SKILL</span>
                    </div>

                    {/* Project Title */}
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white mb-1">
                        {proj.title}
                      </h2>
                      <p className="text-sm font-mono text-cyan-300">
                        {proj.subtitle}
                      </p>
                    </div>

                    {/* Paragraph */}
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                      {proj.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 py-2">
                      {proj.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2
                            className="w-4 h-4 shrink-0 mt-0.5"
                            style={{ color: door.colorTheme.glowColor }}
                          />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stats strip */}
                    {proj.stats && (
                      <div className="grid grid-cols-3 gap-3 py-3 border-y border-white/10">
                        {proj.stats.map((s, sIdx) => (
                          <div key={sIdx}>
                            <div className="text-[11px] font-mono text-slate-400">{s.label}</div>
                            <div className="text-lg font-bold font-display text-white tabular-nums mt-0.5">
                              {s.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      {proj.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-mono text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons (From video Frame 00:07 - 00:08) */}
                    <div className="flex flex-wrap items-center gap-3 pt-3">
                      <button
                        onClick={onOpenContact}
                        className="flex items-center gap-2 px-5 py-2.5 bg-white text-black hover:bg-amber-400 font-bold rounded-xl text-xs sm:text-sm transition-all duration-150 active:scale-95 cursor-pointer"
                      >
                        <span>Connect with Yousaf</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>

                      {proj.type === 'forex-terminal' && (
                        <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 pl-2">
                          <TrendingUp className="w-3.5 h-3.5" />
                          <span>6-Year Strategy Discipline</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Visual / Interactive Column */}
                  <div className={`lg:col-span-5 ${!isEven && 'lg:order-1'} flex justify-center`}>
                    {/* Mode 1: Interactive Forex Terminal & Risk Calculator */}
                    {proj.type === 'forex-terminal' && (
                      <InteractiveForexTerminal />
                    )}

                    {/* Mode 2: Interactive Realify AI Video Studio */}
                    {proj.type === 'video-studio' && (
                      <InteractiveVideoReel />
                    )}

                    {/* Mode 3: Interactive Prompt Lab */}
                    {proj.type === 'prompt-studio' && (
                      <InteractivePromptStudio />
                    )}

                    {/* Mode 4: Playable Brick Breaker Game */}
                    {proj.type === 'game' && (
                      <div className="w-full max-w-sm">
                        <PlayableBrickBreaker />
                      </div>
                    )}

                    {/* Mode 5: Interactive 3D Dice */}
                    {proj.type === 'dice' && (
                      <div className="w-full max-w-sm">
                        <InteractiveDice />
                      </div>
                    )}

                    {/* Mode 6: Desktop Image / Web Project */}
                    {(proj.type === 'desktop' || (!proj.type && proj.image)) && proj.image && (
                      <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-[#161a24] shadow-xl group">
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Back Button */}
        <div className="mt-16 text-center">
          <button
            onClick={onBackToDoors}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black hover:bg-amber-400 font-bold text-sm transition-all shadow-xl active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All 4 Doors</span>
          </button>
        </div>
      </div>
    </div>
  );
};
