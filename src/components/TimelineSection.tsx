import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Calendar, MapPin, Award, CheckCircle2, Sparkles, ChevronRight } from 'lucide-react';
import { TIMELINE_MILESTONES } from '../data/portfolioData';

export const TimelineSection: React.FC = () => {
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-play time machine
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setSelectedYearIndex((prev) => (prev + 1) % TIMELINE_MILESTONES.length);
      }, 3500);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const activeMilestone = TIMELINE_MILESTONES[selectedYearIndex];

  return (
    <section id="my-story" className="py-20 sm:py-28 bg-[#090b0e] relative overflow-hidden border-t border-white/5">
      {/* Background time warp star particles */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-10 w-1.5 h-1.5 bg-amber-400 rounded-full particle" />
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-cyan-400 rounded-full particle" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full particle" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-1/4 right-10 w-2 h-2 bg-emerald-400 rounded-full particle" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Time Machine Dial & Year Display (From video Frame 00:12 - 00:14) */}
          <div className="lg:col-span-5 sticky top-24 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 mb-2 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>My Story</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white leading-tight">
                Let's go back in time.
              </h2>
              <p className="text-sm text-slate-400 mt-2">
                A non-linear journey of engineering, visual design, and deliberate problem solving.
              </p>
            </div>

            {/* Giant Year HUD Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#11151f] border border-white/10 shadow-2xl relative overflow-hidden">
              {/* Giant Year Digits */}
              <div className="text-6xl sm:text-7xl md:text-8xl font-black font-display text-white tracking-tighter drop-shadow-md transition-all duration-300">
                {activeMilestone.year}
              </div>

              {/* Date interval label */}
              <div className="flex items-center gap-2 mt-2 text-xs font-mono text-cyan-400">
                <Calendar className="w-3.5 h-3.5" />
                <span>{activeMilestone.dateRange}</span>
              </div>

              {/* Interactive Scrubber & Timeline Bar */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>CHRONOLOGY</span>
                  <span>{selectedYearIndex + 1} / {TIMELINE_MILESTONES.length}</span>
                </div>

                {/* Scrubber slider bar */}
                <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 via-amber-400 to-rose-400 transition-all duration-300"
                    style={{
                      width: `${((selectedYearIndex + 1) / TIMELINE_MILESTONES.length) * 100}%`
                    }}
                  />
                </div>

                {/* Year button pills */}
                <div className="grid grid-cols-4 gap-2 pt-2">
                  {TIMELINE_MILESTONES.map((m, idx) => (
                    <button
                      key={m.year}
                      onClick={() => {
                        setSelectedYearIndex(idx);
                        setIsPlaying(false);
                      }}
                      className={`py-2 rounded-xl text-xs font-mono font-semibold transition-all border ${
                        selectedYearIndex === idx
                          ? 'bg-white text-black border-white shadow-md'
                          : 'bg-white/5 text-slate-400 border-white/5 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {m.year}
                    </button>
                  ))}
                </div>

                {/* Audio/Time Player Controls */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs transition-transform active:scale-95 shadow-md shadow-amber-400/20"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                    <span>{isPlaying ? 'Pause Journey' : 'Auto Play Time Machine'}</span>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedYearIndex(0);
                      setIsPlaying(false);
                    }}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                    title="Reset to Present"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Milestone Details Card (From video Frame 00:13 - 00:14) */}
          <div className="lg:col-span-7 space-y-6">
            {TIMELINE_MILESTONES.map((milestone, idx) => {
              const isSelected = selectedYearIndex === idx;

              return (
                <div
                  key={milestone.year}
                  onClick={() => setSelectedYearIndex(idx)}
                  className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 cursor-pointer relative ${
                    isSelected
                      ? 'bg-[#141824] border-amber-400/50 shadow-2xl scale-[1.01]'
                      : 'bg-[#10131b]/60 border-white/5 hover:border-white/20 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold text-amber-400">
                      {milestone.dateRange}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {milestone.location}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-1">
                    {milestone.role}
                  </h3>

                  <div className="text-sm font-mono text-cyan-300 mb-4">
                    {milestone.company}
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed mb-5">
                    {milestone.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2 mb-5">
                    {milestone.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                    {milestone.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[11px] font-mono text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
