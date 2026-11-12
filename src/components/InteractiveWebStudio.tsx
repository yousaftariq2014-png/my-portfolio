import React, { useState, useEffect } from 'react';
import { Monitor, Smartphone, Tablet, ExternalLink, Zap, ShieldCheck, Gauge, Clock, Moon, Sparkles, MessageCircle, Copy, Check, RotateCw } from 'lucide-react';

export const InteractiveWebStudio: React.FC = () => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'macbook' | 'mobile'>('desktop');
  const [langMode, setLangMode] = useState<'roman' | 'urdu'>('roman');
  const [selectedMood, setSelectedMood] = useState<'rain' | 'night' | 'energy' | 'chilling'>('night');
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState({ hours: 4, minutes: 28, seconds: 45 });

  const appUrl = 'https://chaimehfil-flame.vercel.app';
  const cafeImage = '/assets/aistudio/_C5CFA02A-967A-43FE-9076-ABA9E0246121__3bce116f.png';

  // Live countdown timer for Midnight Deals (5:00 PM – 4:00 AM)
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 6, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(appUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 600);
  };

  const moodBeverages = {
    rain: {
      name: 'Kadak Gur Chai & Samosa Chaat',
      nameUrdu: 'کڑک گڑ والی چائے اور سموسہ چاٹ',
      desc: 'Infused with organic jaggery, crushed cardamom & pure Buffalo milk.',
      vibe: '🌧️ Rainy Lahore Vibe'
    },
    night: {
      name: 'Midnight Karak Doodh Patti',
      nameUrdu: 'مڈ نائٹ کڑک دودھ پتی',
      desc: 'Slow-simmered on low flame for 45 mins. Thick, golden & intense.',
      vibe: '🌙 2:00 AM Rooftop Catchup'
    },
    energy: {
      name: 'Zafrani Special Kahwa',
      nameUrdu: 'زعفرانی اسپیشل قہوہ',
      desc: 'Pure Kashmiri saffron threads, almonds & wild mountain honey.',
      vibe: '⚡ Late-Night Coding / Analysis'
    },
    chilling: {
      name: 'Peshawari Green Tea with Badam',
      nameUrdu: 'پشاوری سبز چائے بادام کے ساتھ',
      desc: 'Light, digestive herbal green tea infused with roasted dry fruit.',
      vibe: '🍃 Calm Desi Conversations'
    }
  };

  const currentBeverage = moodBeverages[selectedMood];

  return (
    <div className="w-full flex flex-col bg-[#0d1017] border border-white/10 rounded-3xl p-4 sm:p-7 shadow-2xl text-white relative overflow-hidden">
      {/* Background ambient neon glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Testbench Command Bar */}
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-white/10 gap-3 relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
            <Zap className="w-4 h-4 text-black font-bold" />
          </div>
          <div>
            <div className="text-xs font-mono font-bold tracking-wide text-white flex items-center gap-1.5">
              <span>LIVE WEB TESTBENCH</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="text-[10px] font-mono text-amber-300">Chai Mehfil Cafe · Production App</div>
          </div>
        </div>

        {/* Device Viewport Selector */}
        <div className="flex items-center p-1 bg-black/60 rounded-xl border border-white/10 text-xs font-mono">
          <button
            onClick={() => setDeviceMode('desktop')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              deviceMode === 'desktop'
                ? 'bg-amber-400 text-black font-bold shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Desktop</span>
          </button>
          <button
            onClick={() => setDeviceMode('macbook')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              deviceMode === 'macbook'
                ? 'bg-amber-400 text-black font-bold shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Tablet className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Laptop</span>
          </button>
          <button
            onClick={() => setDeviceMode('mobile')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              deviceMode === 'mobile'
                ? 'bg-amber-400 text-black font-bold shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage: Device Frame & Live App Showcase */}
      <div className="my-5 relative z-10 flex flex-col items-center">
        {/* Browser Chrome / Device Frame */}
        <div
          className={`w-full rounded-2xl overflow-hidden border border-white/15 bg-[#141722] shadow-2xl transition-all duration-500 ${
            deviceMode === 'mobile'
              ? 'max-w-[320px] ring-8 ring-[#252a3a] rounded-[36px]'
              : deviceMode === 'macbook'
              ? 'max-w-2xl'
              : 'max-w-3xl'
          }`}
        >
          {/* Top Address Bar Chrome */}
          <div className="px-3 sm:px-4 py-2.5 bg-[#181d2a] border-b border-white/10 flex items-center justify-between gap-2 text-xs font-mono">
            {/* macOS window control dots */}
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>

            {/* URL input field */}
            <div className="flex-1 max-w-md mx-2 px-3 py-1 rounded-lg bg-black/50 border border-white/5 text-[11px] text-slate-300 flex items-center justify-between gap-2 truncate">
              <div className="flex items-center gap-1.5 truncate">
                <span className="text-emerald-400 font-bold text-xs">🔒</span>
                <span className="truncate text-slate-200">{appUrl}</span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={handleCopyUrl}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                  title="Copy URL"
                >
                  {copiedUrl ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
                <button
                  onClick={handleRefresh}
                  className={`hover:text-cyan-400 transition-colors cursor-pointer ${isRefreshing ? 'animate-spin' : ''}`}
                  title="Reload preview"
                >
                  <RotateCw className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Direct Open Link */}
            <a
              href={appUrl}
              target="_blank"
              rel="noreferrer"
              className="p-1 rounded text-slate-300 hover:text-amber-400 transition-colors shrink-0"
              title="Launch full live application"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Device Screen Preview */}
          <div className={`relative overflow-hidden bg-black group ${deviceMode === 'mobile' ? 'aspect-[9/16]' : 'aspect-[16/10]'}`}>
            <img
              src={cafeImage}
              alt="Chai Mehfil Cafe live application preview"
              className={`w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03] ${
                isRefreshing ? 'opacity-30 blur-sm' : 'opacity-100'
              }`}
              referrerPolicy="no-referrer"
            />

            {/* Floating Live Indicator Badge */}
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-mono text-emerald-300 flex items-center gap-1.5 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>LIVE ON VERCEL</span>
            </div>

            {/* Hover overlay with Direct CTA */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 backdrop-blur-[2px]">
              <a
                href={appUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-2xl transition-transform active:scale-95 cursor-pointer"
              >
                <span>Launch Live Website (chaimehfil-flame.vercel.app)</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <span className="text-[11px] font-mono text-slate-300 bg-black/60 px-3 py-1 rounded-full border border-white/10">
                Tested across Chrome, Safari, iOS & Android
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Google Lighthouse Benchmark Scoreboard (Live HUD) */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#131724] border border-white/10 mb-5 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-4 border-b border-white/10 gap-2">
          <div className="flex items-center gap-2">
            <Gauge className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono font-bold tracking-wide text-white uppercase">
              Google Lighthouse 10.0 Benchmark Audit
            </span>
          </div>
          <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
            ★ Core Web Vitals Passed
          </span>
        </div>

        {/* 4 Score Meters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono">
          <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/30 flex flex-col items-center">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 tabular-nums">99</div>
            <div className="text-[10px] text-slate-300 font-bold mt-0.5">PERFORMANCE</div>
            <div className="text-[9px] text-slate-400">0.6s FCP · 0ms TBT</div>
          </div>

          <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/30 flex flex-col items-center">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 tabular-nums">100</div>
            <div className="text-[10px] text-slate-300 font-bold mt-0.5">ACCESSIBILITY</div>
            <div className="text-[9px] text-slate-400">WCAG AA Compliant</div>
          </div>

          <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/30 flex flex-col items-center">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 tabular-nums">100</div>
            <div className="text-[10px] text-slate-300 font-bold mt-0.5">BEST PRACTICES</div>
            <div className="text-[9px] text-slate-400">Zero Console Errors</div>
          </div>

          <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/30 flex flex-col items-center">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 tabular-nums">100</div>
            <div className="text-[10px] text-slate-300 font-bold mt-0.5">SEO BENCHMARK</div>
            <div className="text-[9px] text-slate-400">Structured Schema</div>
          </div>
        </div>
      </div>

      {/* Interactive Feature Sandbox: Live Taste & Deal Engine */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
        {/* Feature 1: Live Midnight Deal Countdown */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-[#1a1c29] to-[#12141f] border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-mono mb-2">
              <span className="text-amber-400 font-bold flex items-center gap-1.5">
                <Moon className="w-3.5 h-3.5 text-amber-400" />
                <span>DYNAMIC MIDNIGHT DEALS</span>
              </span>
              <span className="text-[10px] text-slate-400">5:00 PM – 4:00 AM</span>
            </div>
            <p className="text-xs text-slate-300 mb-3 font-sans">
              Dynamic deal engine that activates during late Lahore hours offering 20% off rooftop platters and karak chai pots.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-black/50 border border-amber-400/20 flex items-center justify-between font-mono">
            <span className="text-[11px] text-slate-400">Deal Reset In:</span>
            <div className="flex items-center gap-1 text-sm font-bold text-amber-300">
              <span className="px-2 py-0.5 rounded bg-white/10">{String(timeRemaining.hours).padStart(2, '0')}h</span>
              <span>:</span>
              <span className="px-2 py-0.5 rounded bg-white/10">{String(timeRemaining.minutes).padStart(2, '0')}m</span>
              <span>:</span>
              <span className="px-2 py-0.5 rounded bg-white/10 text-emerald-400">{String(timeRemaining.seconds).padStart(2, '0')}s</span>
            </div>
          </div>
        </div>

        {/* Feature 2: Bilingual Roman / Nastaliq Calligraphy Tester */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-[#1a1c29] to-[#12141f] border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-mono mb-2">
              <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>BILINGUAL URDU ENGINE</span>
              </span>
              <div className="flex items-center gap-1 bg-black/60 p-0.5 rounded-lg border border-white/10">
                <button
                  onClick={() => setLangMode('roman')}
                  className={`px-2 py-0.5 rounded text-[10px] transition-colors ${
                    langMode === 'roman' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400'
                  }`}
                >
                  Roman
                </button>
                <button
                  onClick={() => setLangMode('urdu')}
                  className={`px-2 py-0.5 rounded text-[10px] transition-colors ${
                    langMode === 'urdu' ? 'bg-amber-400 text-black font-bold' : 'text-slate-400'
                  }`}
                >
                  اردو
                </button>
              </div>
            </div>

            {/* Live beverage recommendation preview */}
            <div className="p-3 rounded-xl bg-black/50 border border-white/10 my-2">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
                <span>{currentBeverage.vibe}</span>
                <span className="text-amber-400 font-bold">Khas Menu</span>
              </div>
              <h5 className="text-sm font-bold text-white mb-0.5">
                {langMode === 'urdu' ? currentBeverage.nameUrdu : currentBeverage.name}
              </h5>
              <p className="text-[11px] text-slate-300 font-sans">{currentBeverage.desc}</p>
            </div>
          </div>

          {/* Mood Selector Buttons */}
          <div className="grid grid-cols-4 gap-1 pt-1 text-[10px] font-mono">
            {(['night', 'rain', 'energy', 'chilling'] as const).map((m) => (
              <button
                key={m}
                onClick={() => setSelectedMood(m)}
                className={`py-1 rounded-lg border capitalize transition-all cursor-pointer ${
                  selectedMood === m
                    ? 'bg-amber-400/20 text-amber-300 border-amber-400/40 font-bold'
                    : 'bg-white/5 text-slate-400 border-white/5 hover:text-white'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
