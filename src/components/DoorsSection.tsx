import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Key, DoorOpen, MousePointer } from 'lucide-react';
import { SERVICE_DOORS } from '../data/portfolioData';
import { ServiceDoor, ServiceId } from '../types';

interface DoorsSectionProps {
  onEnterDoor: (door: ServiceDoor) => void;
}

export const DoorsSection: React.FC<DoorsSectionProps> = ({ onEnterDoor }) => {
  // activeDoorId controls which door is physically swinging open (null when mouse is not hovering)
  const [activeDoorId, setActiveDoorId] = useState<ServiceId | null>(null);

  // inspectedDoor preserves the last hovered door for the right-hand dossier
  const [inspectedDoor, setInspectedDoor] = useState<ServiceDoor | null>(null);

  const activeDoor = activeDoorId ? SERVICE_DOORS.find((d) => d.id === activeDoorId) || null : null;
  const displayDoor = activeDoor || inspectedDoor;

  const handleDoorClick = (door: ServiceDoor) => {
    // Direct click on door enters into the full detail view
    onEnterDoor(door);
  };

  return (
    <section id="doors-section" className="py-16 sm:py-24 relative overflow-hidden bg-[#0d0f12]">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[140px] opacity-25 pointer-events-none transition-colors duration-500"
        style={{
          backgroundColor: displayDoor ? displayDoor.colorTheme.glowColor : '#f59e0b'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-amber-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Disciplines</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-white mb-4">
            Magic happens behind the doors
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans max-w-xl mx-auto flex items-center justify-center gap-1.5">
            <MousePointer className="w-4 h-4 text-amber-400 inline shrink-0" />
            <span>Hover to swing door open (closes on mouse leave). Click to enter.</span>
          </p>
        </div>

        {/* 2-Column Desktop Grid: Doors on Left, Discipline Inspector on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left / Center: The 4 Doors in 3D Perspective */}
          <div className="lg:col-span-7 flex justify-center">
            <div
              onMouseLeave={() => setActiveDoorId(null)}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-5 w-full max-w-2xl py-6 px-3 bg-[#131722]/60 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl"
            >
              {SERVICE_DOORS.map((door) => {
                const isOpen = activeDoorId === door.id;

                return (
                  <div
                    key={door.id}
                    onMouseEnter={() => {
                      setActiveDoorId(door.id);
                      setInspectedDoor(door);
                    }}
                    onMouseLeave={() => {
                      setActiveDoorId(null);
                    }}
                    onTouchStart={() => {
                      if (activeDoorId !== door.id) {
                        setActiveDoorId(door.id);
                        setInspectedDoor(door);
                      } else {
                        onEnterDoor(door);
                      }
                    }}
                    onClick={() => handleDoorClick(door)}
                    className="flex flex-col items-center cursor-pointer group"
                    title={`Click to enter ${door.title}`}
                  >
                    {/* Arched Door Frame Container */}
                    <div
                      className="relative w-full aspect-[1/2.3] max-w-[135px] rounded-t-full p-1.5 transition-all duration-300 group-hover:scale-[1.03]"
                      style={{
                        backgroundColor: '#1e2330',
                        border: `2px solid ${isOpen ? door.colorTheme.glowColor : '#2e374d'}`,
                        boxShadow: isOpen
                          ? `0 0 35px ${door.colorTheme.glowColor}66, inset 0 0 15px ${door.colorTheme.glowColor}33`
                          : '0 10px 25px rgba(0,0,0,0.4)'
                      }}
                    >
                      {/* Inner Portal Light / Secret Room (Revealed when door swings open) */}
                      <div
                        className="absolute inset-1.5 rounded-t-full overflow-hidden flex flex-col items-center justify-center transition-all duration-500"
                        style={{
                          background: `radial-gradient(ellipse at center, ${door.colorTheme.glowColor}99 0%, #050608 85%)`
                        }}
                      >
                        {/* Light beams inside doorway with click-to-enter prompt */}
                        {isOpen && (
                          <div
                            className="w-full h-full opacity-90 animate-pulse flex flex-col items-center justify-center text-center p-2 cursor-pointer z-10"
                            style={{
                              background: `linear-gradient(180deg, transparent 0%, ${door.colorTheme.glowColor}44 70%, white 100%)`
                            }}
                          >
                            <span className="text-[10px] font-mono font-black tracking-widest text-white uppercase drop-shadow-md">
                              ENTER
                            </span>
                            <ArrowRight className="w-4 h-4 text-white mt-1 drop-shadow-md animate-bounce" />
                            <span className="text-[8px] font-mono text-black bg-white/90 px-1 py-0.5 rounded font-bold mt-1">
                              CLICK
                            </span>
                          </div>
                        )}
                      </div>

                      {/* 3D Perspective Swinging Door Leaf (Swings open on hover, closes on mouse leave) */}
                      <div
                        className="w-full h-full rounded-t-full transition-transform duration-500 origin-left relative select-none"
                        style={{
                          backgroundColor: door.colorTheme.doorColor,
                          border: `1.5px solid ${door.colorTheme.doorBorder}`,
                          transform: isOpen ? 'perspective(800px) rotateY(-74deg)' : 'perspective(800px) rotateY(0deg)',
                          boxShadow: isOpen
                            ? '8px 5px 25px rgba(0,0,0,0.85)'
                            : 'inset 0 2px 6px rgba(255,255,255,0.1), inset 0 -2px 6px rgba(0,0,0,0.6)'
                        }}
                      >
                        {/* Wood Panel Inset - Arch Top */}
                        <div className="absolute top-2 inset-x-2 h-1/3 rounded-t-full border border-black/40 bg-black/15 shadow-inner" />

                        {/* Wood Panel Inset - Lower Bottom */}
                        <div className="absolute bottom-3 inset-x-2 h-2/5 rounded-md border border-black/40 bg-black/15 shadow-inner" />

                        {/* Golden Brass Plaque with Door Name */}
                        <div className="absolute top-1/2 -translate-y-6 inset-x-1.5 z-20 flex justify-center">
                          <div
                            className="w-full py-1 px-1 rounded border shadow-md flex items-center justify-center text-center transition-colors"
                            style={{
                              backgroundColor: door.colorTheme.plaqueBg,
                              borderColor: '#eab308'
                            }}
                          >
                            <span className="text-[8px] sm:text-[9px] font-mono font-extrabold tracking-tight text-amber-950 uppercase leading-none drop-shadow-sm truncate">
                              {door.title}
                            </span>
                          </div>
                        </div>

                        {/* Golden Brass Handle & Keyhole */}
                        <div className="absolute top-[56%] right-2 flex flex-col items-center gap-0.5 group-hover:brightness-110">
                          {/* Handle plate */}
                          <div className="w-2.5 h-5 rounded-sm bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 shadow-md border border-amber-600 flex flex-col items-center justify-center">
                            {/* Keyhole */}
                            <div className="w-1 h-1.5 rounded-full bg-black/80" />
                          </div>
                          {/* Lever handle */}
                          <div className="w-4 h-1 rounded bg-amber-300 shadow -mt-3.5 mr-3 border border-amber-500" />
                        </div>
                      </div>
                    </div>

                    {/* Floor Door Label */}
                    <div className="mt-3 text-center">
                      <span
                        className={`text-xs font-semibold tracking-wide transition-colors ${
                          isOpen ? 'text-white font-bold' : 'text-slate-400 group-hover:text-slate-200'
                        }`}
                      >
                        {door.shortTitle}
                      </span>
                      <div
                        className={`h-0.5 w-6 mx-auto mt-1 rounded-full transition-all ${
                          isOpen ? 'bg-amber-400 w-10' : 'bg-transparent'
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Service Breakdown Card */}
          <div className="lg:col-span-5">
            {displayDoor ? (
              /* When a door is hovered or was recently inspected */
              <div className="bg-[#131722] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden animate-in fade-in duration-200">
                {/* Top ambient color edge */}
                <div
                  className="absolute top-0 inset-x-0 h-1.5 transition-colors duration-500"
                  style={{ backgroundColor: displayDoor.colorTheme.glowColor }}
                />

                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    DISCIPLINE DOSSIER
                  </span>
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold"
                    style={{
                      backgroundColor: `${displayDoor.colorTheme.glowColor}22`,
                      color: displayDoor.colorTheme.glowColor
                    }}
                  >
                    {activeDoorId === displayDoor.id ? 'Door Opened' : 'Inspecting'} · {displayDoor.projects.length} Showcases
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-3">
                  {displayDoor.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 font-sans leading-relaxed mb-6">
                  {displayDoor.description}
                </p>

                {/* Checked specs list */}
                <div className="space-y-2.5 mb-8">
                  {displayDoor.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: displayDoor.colorTheme.glowColor }}
                      />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Enter Door CTA Button */}
                <button
                  onClick={() => onEnterDoor(displayDoor)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-black transition-all shadow-lg active:scale-98 group cursor-pointer"
                  style={{
                    backgroundColor: displayDoor.colorTheme.glowColor
                  }}
                >
                  <span>Enter {displayDoor.shortTitle} Door</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            ) : (
              /* When NO door has been hovered yet: Shows the invitation prompt */
              <div className="bg-[#131722]/80 border border-dashed border-white/15 rounded-3xl p-8 sm:p-10 shadow-2xl text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[380px]">
                <div className="w-16 h-16 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mb-4 shadow-inner">
                  <DoorOpen className="w-8 h-8" />
                </div>

                <span className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
                  HOVER OR TAP TO EXPLORE
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-3">
                  Choose a Door to Open
                </h3>

                <p className="text-sm text-slate-300 font-sans max-w-sm mb-6 leading-relaxed">
                  Hover your mouse over any door to open it in 3D. When you move the mouse away, the door will automatically close. Click to step inside.
                </p>

                <div className="grid grid-cols-2 gap-2 w-full max-w-xs text-xs font-mono text-slate-400">
                  {SERVICE_DOORS.map((d) => (
                    <button
                      key={d.id}
                      onClick={() => onEnterDoor(d)}
                      onMouseEnter={() => {
                        setActiveDoorId(d.id);
                        setInspectedDoor(d);
                      }}
                      className="py-2 px-2.5 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white border border-white/5 transition-colors text-center truncate"
                    >
                      {d.shortTitle}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
