import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Key, Compass } from 'lucide-react';
import { ServiceDoor } from '../types';

interface DoorPortalTransitionProps {
  door: ServiceDoor | null;
}

export const DoorPortalTransition: React.FC<DoorPortalTransitionProps> = ({ door }) => {
  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    if (!door) return;

    // Play cinematic portal entry sound via Web Audio API
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const now = ctx.currentTime;

      // 1. Heavy resonant sub-bass thud (footstep through threshold)
      const subOsc = ctx.createOscillator();
      const subGain = ctx.createGain();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(110, now);
      subOsc.frequency.exponentialRampToValueAtTime(32, now + 0.35);

      subGain.gain.setValueAtTime(0.35, now);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      subOsc.connect(subGain);
      subGain.connect(ctx.destination);
      subOsc.start(now);
      subOsc.stop(now + 0.42);

      // 2. Whoosh / Air rush (camera accelerating into portal)
      const bufferSize = ctx.sampleRate * 0.45;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * Math.sin((i / bufferSize) * Math.PI);
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(250, now);
      filter.frequency.exponentialRampToValueAtTime(3200, now + 0.38);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.01, now);
      noiseGain.gain.linearRampToValueAtTime(0.18, now + 0.25);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.48);

      whiteNoise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(ctx.destination);
      whiteNoise.start(now);

      // 3. Shimmering chord (portal energy resonance)
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
        const chime = ctx.createOscillator();
        const chimeGain = ctx.createGain();
        chime.type = 'triangle';
        chime.frequency.setValueAtTime(freq, now + 0.1 + idx * 0.03);

        chimeGain.gain.setValueAtTime(0.001, now);
        chimeGain.gain.linearRampToValueAtTime(0.06, now + 0.15 + idx * 0.03);
        chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.65);

        chime.connect(chimeGain);
        chimeGain.connect(ctx.destination);
        chime.start(now + 0.1);
        chime.stop(now + 0.7);
      });
    } catch {
      // Audio autoplay gracefully handled
    }

    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        try {
          audioCtxRef.current.close();
        } catch {
          // Ignore
        }
      }
    };
  }, [door]);

  if (!door) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black/90 backdrop-blur-md select-none pointer-events-auto">
      {/* Dynamic radial flare background centered on portal */}
      <div
        className="absolute inset-0 transition-opacity duration-300 opacity-60 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${door.colorTheme.glowColor}55 0%, rgba(0,0,0,0.95) 70%)`
        }}
      />

      {/* Speed lines / light streak particles rushing forward */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(16)].map((_, i) => {
          const angle = (i / 16) * 360;
          return (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-1 origin-center"
              style={{
                height: '45vh',
                transform: `rotate(${angle}deg) translateY(-20px)`,
                background: `linear-gradient(to top, transparent, ${door.colorTheme.glowColor}88, white)`,
                animation: `portalStreak 0.65s cubic-bezier(0.1, 0.7, 0.1, 1) forwards`,
                animationDelay: `${(i % 4) * 0.04}s`
              }}
            />
          );
        })}
      </div>

      {/* 3D Zooming Door Portal Chamber */}
      <div className="relative flex flex-col items-center justify-center animate-door-portal-zoom transform-style-3d">
        {/* Arched Door Frame */}
        <div
          className="relative w-[160px] sm:w-[220px] aspect-[1/2.2] rounded-t-full p-2.5 shadow-[0_0_80px_rgba(0,0,0,0.9)]"
          style={{
            backgroundColor: '#1a1f2c',
            border: `3px solid ${door.colorTheme.glowColor}`,
            boxShadow: `0 0 70px ${door.colorTheme.glowColor}99, inset 0 0 30px ${door.colorTheme.glowColor}66`
          }}
        >
          {/* Inner Dimensional Chamber / Portal Vortex */}
          <div
            className="absolute inset-2 rounded-t-full overflow-hidden flex flex-col items-center justify-center"
            style={{
              background: `radial-gradient(circle at 50% 60%, white 0%, ${door.colorTheme.glowColor} 45%, #050608 90%)`
            }}
          >
            {/* Concentric Energy Rings */}
            <div
              className="absolute w-36 h-36 rounded-full border border-white/60 animate-ping pointer-events-none"
              style={{ animationDuration: '0.8s' }}
            />
            <div
              className="absolute w-24 h-24 rounded-full border-2 border-white/80 animate-pulse pointer-events-none"
            />

            {/* Glowing Center Portal Core */}
            <div className="relative z-10 flex flex-col items-center text-center p-3">
              <Compass
                className="w-8 h-8 text-white animate-spin mb-1 drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]"
                style={{ animationDuration: '3s' }}
              />
              <span className="text-[11px] font-mono font-black tracking-widest text-white uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                ENTER
              </span>
            </div>
          </div>

          {/* Swinging Door Leaf - Swung fully wide open into room (rotateY -95deg) */}
          <div
            className="w-full h-full rounded-t-full origin-left relative select-none"
            style={{
              backgroundColor: door.colorTheme.doorColor,
              border: `2px solid ${door.colorTheme.doorBorder}`,
              transform: 'perspective(600px) rotateY(-96deg)',
              boxShadow: '12px 10px 40px rgba(0,0,0,0.9)'
            }}
          >
            {/* Inset panel */}
            <div className="absolute top-3 inset-x-2 h-1/3 rounded-t-full border border-black/40 bg-black/20" />
            <div className="absolute bottom-3 inset-x-2 h-2/5 rounded-md border border-black/40 bg-black/20" />

            {/* Plaque */}
            <div className="absolute top-1/2 -translate-y-5 inset-x-1.5 flex justify-center">
              <div
                className="w-full py-1 rounded border text-center shadow-md"
                style={{
                  backgroundColor: door.colorTheme.plaqueBg,
                  borderColor: '#eab308'
                }}
              >
                <span className="text-[9px] font-mono font-extrabold text-amber-950 uppercase truncate block">
                  {door.title}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* HUD Subtitle & Feedback */}
        <div className="mt-8 text-center space-y-2 relative z-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono text-white shadow-xl">
            <span
              className="w-2 h-2 rounded-full animate-ping"
              style={{ backgroundColor: door.colorTheme.glowColor }}
            />
            <span className="font-bold tracking-wider uppercase text-amber-300">
              ENTERING PORTAL
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black font-display text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            {door.title}
          </h2>

          <p className="text-xs sm:text-sm font-mono text-slate-300 max-w-md mx-auto">
            {door.tagline}
          </p>
        </div>
      </div>
    </div>
  );
};
