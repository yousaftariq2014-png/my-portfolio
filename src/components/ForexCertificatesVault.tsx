import React, { useState, useEffect, useRef } from 'react';
import { Award, ShieldCheck, DollarSign, ExternalLink, X, ZoomIn, CheckCircle2, ChevronRight, ChevronLeft, Sparkles, Layers, Grid, Play, Pause, Volume2, VolumeX, Crown } from 'lucide-react';

export interface ForexCertificate {
  id: string;
  firm: string;
  title: string;
  type: 'funded-certificate' | 'payout';
  amount?: string;
  date: string;
  issuedTo: string;
  signatory: string;
  description: string;
  image: string;
  badge: string;
  accentColor: string;
  isFlagship?: boolean;
}

export const FOREX_CERTIFICATES: ForexCertificate[] = [
  {
    id: 'fundednext-50k',
    firm: 'FundedNext',
    title: 'FundedNext "Elite Trader" Certificate (50K Stellar)',
    type: 'funded-certificate',
    amount: '$50,000 (50K) Account',
    date: '11 August 2026',
    issuedTo: 'Hafiz Yousaf',
    signatory: 'Abdullah Jayed, CEO FundedNext',
    description: 'Officially recognized as a FundedNext Elite Trader after clearing Phase 1 of the Stellar 2-Step 50K Challenge, validating strong capital preservation and consistent profitability on a $50,000 account.',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-12_at_4.10.31_AM_6b854535.jpeg',
    badge: '🏆 $50K FLAGSHIP ELITE TRADER',
    accentColor: '#f59e0b',
    isFlagship: true
  },
  {
    id: 'my-funded-fx-10k',
    firm: 'My Funded FX',
    title: 'Funded Trader Certificate ($10,000)',
    type: 'funded-certificate',
    amount: '$10,000 Account Size',
    date: '17 July 2023',
    issuedTo: 'Hafiz Yousaf Tariq',
    signatory: 'Matthew Leech, CEO',
    description: 'Awarded for successfully completing the evaluation stages and proving strict risk control on a $10,000 funded prop trading account.',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-12_at_3.38.26_AM__1__b5f1681d.jpeg',
    badge: '$10K FUNDED ACCOUNT',
    accentColor: '#eab308'
  },
  {
    id: 'atmos-funded-apr',
    firm: 'Atmos Funded',
    title: 'Atmos Traded Certified (Stage Cleared)',
    type: 'funded-certificate',
    amount: 'Challenge Cleared',
    date: '24 April 2026',
    issuedTo: 'Hafiz Yousaf Tariq',
    signatory: 'Nick Cooke, CEO',
    description: 'Proved strong capital management, solid risk control, and consistent profitability throughout the evaluation period to become an Atmos Funded Trader.',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-12_at_3.38.25_AM__1__25b346ed.jpeg',
    badge: 'ATMOS CERTIFIED',
    accentColor: '#10b981'
  },
  {
    id: 'atmos-funded-may',
    firm: 'Atmos Funded',
    title: 'Atmos Traded Certified (Master Trader)',
    type: 'funded-certificate',
    amount: 'Funded Trader',
    date: '04 May 2026',
    issuedTo: 'Hafiz Yousaf Tariq',
    signatory: 'Nick Cooke, CEO',
    description: 'Officially certified as an Atmos Funded Trader after rigorous evaluation proving consistent risk-adjusted returns.',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-12_at_3.38.25_AM_4266a5f5.jpeg',
    badge: 'ATMOS FUNDED TRADER',
    accentColor: '#10b981'
  },
  {
    id: 'funds-for-traders',
    firm: 'Funds For Traders',
    title: 'Certificate of Recognition (Funded Trader)',
    type: 'funded-certificate',
    amount: 'Evaluation Cleared',
    date: '12 June 2024',
    issuedTo: 'Yousaf',
    signatory: 'Joël Broos (CEO) & Joran van Lekwijk (CFO)',
    description: 'Awarded for outstanding performance in the evaluation process and officially inducted as a Funds For Traders funded prop trader.',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-12_at_3.38.26_AM_c8dfd98b.jpeg',
    badge: 'FUNDS FOR TRADERS',
    accentColor: '#f43f5e'
  },
  {
    id: 'ofp-payout-380',
    firm: 'OFP (Overview Funding Program)',
    title: 'Overall Payouts Certificate ($380.05)',
    type: 'payout',
    amount: '$380.05 Payout',
    date: '19 February 2025',
    issuedTo: 'Yousaf Tariq',
    signatory: 'CTO & CEO, OFP Funding',
    description: 'Verified real cash withdrawal payout earned from profitable strategy execution on the Overview Funding Program.',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-12_at_3.42.05_AM_da60120d.jpeg',
    badge: 'VERIFIED CASH PAYOUT',
    accentColor: '#38bdf8'
  },
  {
    id: 'ofp-payout-133',
    firm: 'OFP (Overview Funding Program)',
    title: 'Overall Payouts Certificate ($133.68)',
    type: 'payout',
    amount: '$133.68 Payout',
    date: '21 January 2025',
    issuedTo: 'Hafiz Yousaf Tariq',
    signatory: 'CTO & CEO, OFP Funding',
    description: 'Official payout certificate confirming real trading profits withdrawn from the OFP funding program.',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-12_at_3.42.32_AM_da601abf.jpeg',
    badge: 'VERIFIED CASH PAYOUT',
    accentColor: '#38bdf8'
  }
];

export const ForexCertificatesVault: React.FC = () => {
  // Always default to 0 so FundedNext $50K starts right in the front & center spotlight
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'stage' | 'fanned' | 'grid'>('stage');
  const [activeFilter, setActiveFilter] = useState<'all' | 'funded-certificate' | 'payout'>('all');
  const [selectedCert, setSelectedCert] = useState<ForexCertificate | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const filteredCerts = FOREX_CERTIFICATES.filter(
    (c) => activeFilter === 'all' || c.type === activeFilter
  );

  // Play subtle high-end certificate flip sound
  const playCardSound = () => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioCtx) audioCtxRef.current = new AudioCtx();
      }
      if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      if (audioCtxRef.current) {
        const ctx = audioCtxRef.current;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(540, now);
        osc.frequency.exponentialRampToValueAtTime(320, now + 0.08);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.09);
      }
    } catch {
      // Audio fallback
    }
  };

  const handleNext = () => {
    playCardSound();
    setActiveIndex((prev) => (prev + 1) % filteredCerts.length);
  };

  const handlePrev = () => {
    playCardSound();
    setActiveIndex((prev) => (prev - 1 + filteredCerts.length) % filteredCerts.length);
  };

  const handleSelectIndex = (idx: number) => {
    playCardSound();
    setActiveIndex(idx);
  };

  const handleJumpToFundedNext = () => {
    playCardSound();
    setActiveFilter('all');
    setActiveIndex(0); // FundedNext is index 0
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedCert) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCert, filteredCerts.length]);

  // Auto-play timer
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % filteredCerts.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredCerts.length]);

  // Guard activeIndex within bounds if filter changes
  useEffect(() => {
    if (activeIndex >= filteredCerts.length) {
      setActiveIndex(0);
    }
  }, [filteredCerts.length, activeIndex]);

  const activeCert = filteredCerts[activeIndex] || filteredCerts[0];

  return (
    <div className="bg-[#0c0f17] border border-white/10 rounded-3xl p-4 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Dynamic ambient gold & emerald spotlight backdrop */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-gradient-to-b from-amber-500/15 via-emerald-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header & Track Record Credentials */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6 pb-5 border-b border-white/10 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-[11px] font-mono text-amber-300 mb-2">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-bold tracking-wide uppercase">CERTIFIED $50,000+ PROP TRADER</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white tracking-tight">
            Audited Forex Prop Certificates & Cash Vault
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-sans mt-1 max-w-2xl">
            Live interactive 3D trophy vault featuring cleared challenges across <span className="text-amber-400 font-semibold">FundedNext ($50K Elite)</span>, <span className="text-yellow-400 font-semibold">My Funded FX ($10K)</span>, <span className="text-emerald-400 font-semibold">Atmos Funded</span>, <span className="text-rose-400 font-semibold">Funds For Traders</span>, and verified <span className="text-cyan-400 font-semibold">OFP cash payouts</span>.
          </p>
        </div>

        {/* View Switchers & Audio Controls */}
        <div className="flex flex-wrap items-center gap-2 self-stretch lg:self-auto justify-between lg:justify-end">
          {/* Audio toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/5 cursor-pointer"
            title={soundEnabled ? 'Mute sound' : 'Enable sound'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-amber-400" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Perspective View Switcher */}
          <div className="flex items-center p-1 bg-black/60 rounded-xl border border-white/10 text-xs font-mono">
            <button
              onClick={() => setViewMode('stage')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                viewMode === 'stage'
                  ? 'bg-amber-400 text-black font-bold shadow-md shadow-amber-400/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>3D Stage (FundedNext Front)</span>
            </button>
            <button
              onClick={() => setViewMode('fanned')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                viewMode === 'fanned'
                  ? 'bg-amber-400 text-black font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">3D Deck</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-amber-400 text-black font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Grid</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter Tabs & Quick Jump to FundedNext */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10 text-xs font-mono">
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => { setActiveFilter('all'); setActiveIndex(0); }}
            className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-white/15 text-white border-white/30 font-bold'
                : 'bg-white/5 text-slate-400 border-white/5 hover:text-white'
            }`}
          >
            All Proofs ({FOREX_CERTIFICATES.length})
          </button>
          <button
            onClick={() => { setActiveFilter('funded-certificate'); setActiveIndex(0); }}
            className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
              activeFilter === 'funded-certificate'
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-bold'
                : 'bg-white/5 text-slate-400 border-white/5 hover:text-white'
            }`}
          >
            Funded Certificates ({FOREX_CERTIFICATES.filter(c => c.type === 'funded-certificate').length})
          </button>
          <button
            onClick={() => { setActiveFilter('payout'); setActiveIndex(0); }}
            className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
              activeFilter === 'payout'
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 font-bold'
                : 'bg-white/5 text-slate-400 border-white/5 hover:text-white'
            }`}
          >
            Cash Payouts ({FOREX_CERTIFICATES.filter(c => c.type === 'payout').length})
          </button>
        </div>

        {/* Highlighted Direct Action: Focus FundedNext $50K */}
        <button
          onClick={handleJumpToFundedNext}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-extrabold text-xs shadow-md shadow-amber-500/20 hover:brightness-110 active:scale-95 transition-all cursor-pointer ml-auto"
        >
          <Crown className="w-3.5 h-3.5" />
          <span>Front: FundedNext $50K</span>
        </button>
      </div>

      {/* ======================================================== */}
      {/* MODE 1: 3D ANIMATED STAGE / PODIUM (FUNDEDNEXT FRONT)     */}
      {/* ======================================================== */}
      {viewMode === 'stage' && (
        <div className="relative z-10 flex flex-col items-center">
          {/* 3D Stage Viewport */}
          <div className="w-full relative h-[360px] sm:h-[440px] md:h-[480px] flex items-center justify-center perspective-1200 overflow-hidden select-none">
            {/* Ambient circular floor spotlight */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3/4 max-w-xl h-24 bg-gradient-to-t from-amber-500/30 via-emerald-500/10 to-transparent rounded-[100%] blur-xl pointer-events-none animate-podium-sweep" />

            {/* Carousel Cards */}
            <div className="relative w-full max-w-4xl h-full flex items-center justify-center transform-style-3d">
              {filteredCerts.map((cert, idx) => {
                const diff = (idx - activeIndex + filteredCerts.length) % filteredCerts.length;
                let normalizedDiff = diff;
                if (diff > filteredCerts.length / 2) {
                  normalizedDiff = diff - filteredCerts.length;
                }

                // Determine 3D positioning
                const isCenter = normalizedDiff === 0;
                const isImmediateLeft = normalizedDiff === -1 || (normalizedDiff === filteredCerts.length - 1 && filteredCerts.length === 2);
                const isImmediateRight = normalizedDiff === 1;
                const isFar = Math.abs(normalizedDiff) > 1;

                // Compute exact CSS transform values
                let transformStyle: React.CSSProperties = {};
                let zIndex = 10;
                let opacity = 0;

                if (isCenter) {
                  transformStyle = {
                    transform: 'translateX(0%) translateZ(80px) rotateY(0deg) scale(1)',
                    zIndex: 40,
                    opacity: 1
                  };
                } else if (isImmediateLeft) {
                  transformStyle = {
                    transform: 'translateX(-52%) translateZ(-30px) rotateY(24deg) scale(0.85)',
                    zIndex: 25,
                    opacity: 0.8
                  };
                } else if (isImmediateRight) {
                  transformStyle = {
                    transform: 'translateX(52%) translateZ(-30px) rotateY(-24deg) scale(0.85)',
                    zIndex: 25,
                    opacity: 0.8
                  };
                } else if (normalizedDiff === -2) {
                  transformStyle = {
                    transform: 'translateX(-85%) translateZ(-120px) rotateY(38deg) scale(0.72)',
                    zIndex: 15,
                    opacity: 0.45
                  };
                } else if (normalizedDiff === 2) {
                  transformStyle = {
                    transform: 'translateX(85%) translateZ(-120px) rotateY(-38deg) scale(0.72)',
                    zIndex: 15,
                    opacity: 0.45
                  };
                } else {
                  transformStyle = {
                    transform: `translateX(${normalizedDiff > 0 ? '110%' : '-110%'}) translateZ(-180px) scale(0.6)`,
                    zIndex: 5,
                    opacity: 0,
                    pointerEvents: 'none'
                  };
                }

                return (
                  <div
                    key={cert.id}
                    onClick={() => {
                      if (isCenter) {
                        setSelectedCert(cert);
                      } else {
                        handleSelectIndex(idx);
                      }
                    }}
                    style={transformStyle}
                    className={`absolute w-[280px] sm:w-[380px] md:w-[460px] rounded-2xl transition-all duration-500 ease-out cursor-pointer ${
                      isCenter ? 'animate-gold-aura' : 'hover:brightness-110'
                    }`}
                  >
                    {/* Certificate Card Container */}
                    <div className={`relative rounded-2xl overflow-hidden bg-[#121624] border-2 shadow-2xl flex flex-col transition-colors ${
                      isCenter
                        ? cert.isFlagship
                          ? 'border-amber-400 ring-4 ring-amber-400/20'
                          : 'border-white/30'
                        : 'border-white/10 opacity-90'
                    }`}>
                      {/* Top Header Plaque */}
                      <div className={`px-4 py-2.5 flex items-center justify-between text-xs font-mono border-b ${
                        cert.isFlagship
                          ? 'bg-gradient-to-r from-amber-950 via-[#1e1710] to-[#121624] border-amber-500/40'
                          : 'bg-[#181d2c] border-white/10'
                      }`}>
                        <div className="flex items-center gap-2">
                          {cert.isFlagship ? (
                            <Crown className="w-4 h-4 text-amber-400 animate-bounce" />
                          ) : (
                            <Award className="w-4 h-4 text-emerald-400" />
                          )}
                          <span className="font-bold text-white tracking-wide">{cert.firm}</span>
                        </div>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          cert.isFlagship
                            ? 'bg-amber-400 text-black'
                            : 'bg-white/10 text-slate-300'
                        }`}>
                          {cert.amount}
                        </span>
                      </div>

                      {/* Certificate High-Res Image Area */}
                      <div className="relative aspect-[16/11] bg-black overflow-hidden group">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />

                        {/* Holographic foil light sheen for center card */}
                        {isCenter && (
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none animate-holo-shimmer" />
                        )}

                        {/* Overlay hover prompt */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 text-white font-mono text-xs backdrop-blur-[2px]">
                          <ZoomIn className="w-6 h-6 text-amber-400" />
                          <span className="font-bold">Click to Inspect in 4K</span>
                        </div>

                        {/* Badge Tag */}
                        <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-black/85 backdrop-blur-md border border-white/15 text-[10px] font-mono text-amber-300 font-bold flex items-center gap-1.5 shadow-lg">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{cert.badge}</span>
                        </div>
                      </div>

                      {/* Bottom Info Banner */}
                      <div className="p-3.5 bg-[#121624] flex items-center justify-between text-xs font-mono">
                        <div className="truncate pr-2">
                          <div className="text-white font-bold text-xs truncate">{cert.title}</div>
                          <div className="text-[10px] text-slate-400 truncate">{cert.signatory}</div>
                        </div>
                        <span className="text-amber-400 text-[10px] shrink-0 font-bold">
                          {cert.date}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Left / Right 3D Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-40 w-11 h-11 rounded-2xl bg-black/75 hover:bg-black/95 text-white border border-white/20 flex items-center justify-center transition-all hover:scale-110 active:scale-90 shadow-xl cursor-pointer backdrop-blur-md"
              aria-label="Previous Certificate"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-40 w-11 h-11 rounded-2xl bg-black/75 hover:bg-black/95 text-white border border-white/20 flex items-center justify-center transition-all hover:scale-110 active:scale-90 shadow-xl cursor-pointer backdrop-blur-md"
              aria-label="Next Certificate"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Under-Stage Spotlight Details for Active Certificate */}
          <div className="w-full max-w-3xl mt-4 p-4 sm:p-5 rounded-2xl bg-[#141824] border border-white/10 shadow-xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold font-display text-white flex items-center gap-2">
                    <span>{activeCert.title}</span>
                    {activeCert.isFlagship && (
                      <span className="px-2 py-0.5 rounded-full bg-amber-400 text-black text-[10px] font-mono font-extrabold">
                        FLAGSHIP #1
                      </span>
                    )}
                  </h4>
                  <div className="text-xs font-mono text-emerald-400">
                    Verified Signatory: {activeCert.signatory} · {activeCert.date}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedCert(activeCert)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs transition-all active:scale-95 shadow-md shadow-amber-400/20 cursor-pointer self-stretch sm:self-auto justify-center"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Inspect High-Res</span>
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-sans mt-3 leading-relaxed">
              {activeCert.description}
            </p>

            {/* Quick specifications breakdown */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 mt-3 border-t border-white/5 text-[11px] font-mono">
              <div className="p-2 rounded-lg bg-black/30">
                <span className="text-slate-400 block text-[9px] uppercase">Awarded To</span>
                <span className="text-white font-bold">{activeCert.issuedTo}</span>
              </div>
              <div className="p-2 rounded-lg bg-black/30">
                <span className="text-slate-400 block text-[9px] uppercase">Firm Entity</span>
                <span className="text-amber-300 font-bold">{activeCert.firm}</span>
              </div>
              <div className="p-2 rounded-lg bg-black/30">
                <span className="text-slate-400 block text-[9px] uppercase">Account / Payout</span>
                <span className="text-emerald-400 font-bold">{activeCert.amount}</span>
              </div>
              <div className="p-2 rounded-lg bg-black/30">
                <span className="text-slate-400 block text-[9px] uppercase">Status</span>
                <span className="text-cyan-300 font-bold">100% Verified</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODE 2: 3D HOLOGRAPHIC FAN-OUT DECK                      */}
      {/* ======================================================== */}
      {viewMode === 'fanned' && (
        <div className="relative z-10 py-6 select-none">
          <div className="text-center text-xs font-mono text-slate-400 mb-6">
            Hover or click any certificate in the deck to bring it into spotlight inspection
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
            {filteredCerts.map((cert, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <div
                  key={cert.id}
                  onClick={() => {
                    handleSelectIndex(idx);
                    setSelectedCert(cert);
                  }}
                  className={`relative w-44 sm:w-56 rounded-2xl overflow-hidden bg-[#141824] border-2 cursor-pointer transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 shadow-xl ${
                    isSelected
                      ? 'border-amber-400 ring-4 ring-amber-400/30 -translate-y-2'
                      : cert.isFlagship
                      ? 'border-amber-400/60'
                      : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  {cert.isFlagship && (
                    <div className="bg-amber-400 text-black text-[9px] font-mono font-extrabold text-center py-0.5">
                      ★ FRONT: FUNDEDNEXT 50K
                    </div>
                  )}
                  <div className="aspect-[4/3] bg-black overflow-hidden relative">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-1.5 left-1.5 px-1.5 py-0.5 rounded bg-black/80 text-[9px] font-mono text-amber-300">
                      {cert.amount}
                    </div>
                  </div>
                  <div className="p-2.5">
                    <div className="text-[10px] font-mono text-emerald-400">{cert.firm}</div>
                    <div className="text-xs font-bold text-white truncate">{cert.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODE 3: ALL PROOFS GRID                                  */}
      {/* ======================================================== */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10 pt-2">
          {filteredCerts.map((cert, idx) => (
            <div
              key={cert.id}
              onClick={() => {
                handleSelectIndex(idx);
                setSelectedCert(cert);
              }}
              className={`group rounded-2xl bg-[#141824] border p-4 shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between ${
                cert.isFlagship
                  ? 'border-amber-400/60 hover:border-amber-400 shadow-amber-400/10'
                  : 'border-white/10 hover:border-white/30'
              }`}
            >
              <div>
                {cert.isFlagship && (
                  <div className="mb-2 px-2 py-0.5 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-300 text-[10px] font-mono font-bold inline-flex items-center gap-1">
                    <Crown className="w-3 h-3 text-amber-400" />
                    <span>#1 FLAGSHIP: $50,000 ELITE TRADER</span>
                  </div>
                )}
                <div className="relative rounded-xl overflow-hidden aspect-[16/11] bg-black/80 mb-3 border border-white/5">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-mono font-semibold backdrop-blur-[2px]">
                    <ZoomIn className="w-4 h-4 text-amber-400" />
                    <span>Inspect Certificate</span>
                  </div>
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono font-bold text-amber-300 border border-amber-400/40">
                    {cert.badge}
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                  <span>{cert.firm}</span>
                  <span className="text-emerald-400 font-semibold">{cert.date}</span>
                </div>

                <h4 className="text-sm font-bold font-display text-white group-hover:text-amber-300 transition-colors line-clamp-1 mb-1">
                  {cert.title}
                </h4>

                <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed font-sans mb-3">
                  {cert.description}
                </p>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-amber-400 font-bold">{cert.amount}</span>
                <span className="text-[11px] text-slate-400 flex items-center gap-1 group-hover:text-white transition-colors">
                  <span>View Full</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bottom Horizontal Filmstrip Dock (Click any to instantly slide into stage center) */}
      <div className="mt-8 pt-5 border-t border-white/10 relative z-10">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
          <span className="flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>CERTIFICATE SELECTION DOCK ({activeIndex + 1} of {filteredCerts.length})</span>
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center gap-1 text-[11px] text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              {isAutoPlaying ? <Pause className="w-3 h-3 text-amber-400" /> : <Play className="w-3 h-3 text-emerald-400" />}
              <span>{isAutoPlaying ? 'Pause 3D Rotation' : 'Auto 3D Rotation'}</span>
            </button>
          </div>
        </div>

        {/* Mini Thumbnails */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-thin">
          {filteredCerts.map((cert, idx) => (
            <button
              key={cert.id}
              onClick={() => handleSelectIndex(idx)}
              className={`flex items-center gap-2.5 p-2 rounded-xl transition-all cursor-pointer border shrink-0 text-left ${
                idx === activeIndex
                  ? 'bg-amber-400/15 border-amber-400 ring-2 ring-amber-400/20 text-white shadow-md'
                  : 'bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-10 h-7 rounded-md object-cover bg-black"
                referrerPolicy="no-referrer"
              />
              <div className="text-[11px] font-mono leading-tight">
                <div className={`font-bold ${idx === activeIndex ? 'text-amber-300' : 'text-slate-200'}`}>
                  {cert.firm}
                </div>
                <div className="text-[10px] text-slate-400">{cert.amount}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* FULLSCREEN LIGHTBOX INSPECTION MODAL                      */}
      {/* ======================================================== */}
      {selectedCert && (
        <div
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-[#11141f] border border-white/20 rounded-3xl p-5 sm:p-7 shadow-2xl text-white max-h-[92vh] overflow-y-auto flex flex-col"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-20 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div className="flex flex-wrap items-center gap-2 mb-4 pr-10">
              <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${
                selectedCert.isFlagship
                  ? 'bg-amber-400 text-black border-amber-300'
                  : 'bg-white/10 text-amber-300 border-white/20'
              }`}>
                {selectedCert.badge}
              </span>
              <span className="text-xs font-mono text-emerald-400 font-semibold">
                Verified: {selectedCert.date}
              </span>
            </div>

            {/* Image Full View */}
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-black mb-5 shadow-2xl flex items-center justify-center max-h-[62vh] relative group">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Certificate Details */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                {selectedCert.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 py-3 border-y border-white/10 text-xs font-mono">
                <div className="p-2 rounded-lg bg-white/5">
                  <span className="text-slate-400 block text-[10px]">Prop Firm</span>
                  <span className="text-white font-bold">{selectedCert.firm}</span>
                </div>
                <div className="p-2 rounded-lg bg-white/5">
                  <span className="text-slate-400 block text-[10px]">Awarded To</span>
                  <span className="text-amber-400 font-bold">{selectedCert.issuedTo}</span>
                </div>
                <div className="p-2 rounded-lg bg-white/5">
                  <span className="text-slate-400 block text-[10px]">Signatory</span>
                  <span className="text-white font-semibold">{selectedCert.signatory}</span>
                </div>
                <div className="p-2 rounded-lg bg-white/5">
                  <span className="text-slate-400 block text-[10px]">Account / Payout</span>
                  <span className="text-emerald-400 font-bold">{selectedCert.amount}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {selectedCert.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-mono text-slate-400">
                  {selectedCert.isFlagship ? '★ Highest Evaluated Allocation: $50,000' : 'Audited Challenge Verification'}
                </span>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-6 py-2.5 rounded-xl bg-white text-black font-bold text-xs hover:bg-amber-400 transition-colors cursor-pointer shadow-lg"
                >
                  Close Inspection
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
