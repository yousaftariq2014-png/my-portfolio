import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, DollarSign, ShieldAlert, BarChart3, RefreshCw, Activity, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export const InteractiveForexTerminal: React.FC = () => {
  const [activePair, setActivePair] = useState<'EURUSD' | 'GBPUSD' | 'XAUUSD'>('EURUSD');
  const [timeframe, setTimeframe] = useState<'15M' | '1H' | '4H' | '1D'>('1H');
  const [accountBalance, setAccountBalance] = useState<number>(10000);
  const [riskPercent, setRiskPercent] = useState<number>(1);
  const [stopLossPips, setStopLossPips] = useState<number>(25);

  // Live price tick simulation
  const [currentPrice, setCurrentPrice] = useState(1.0845);
  const [priceChange, setPriceChange] = useState(+0.0032);
  const [priceDirection, setPriceDirection] = useState<'up' | 'down'>('up');

  // Initial pair data
  useEffect(() => {
    const basePrices = {
      EURUSD: 1.0845,
      GBPUSD: 1.2730,
      XAUUSD: 2645.50
    };
    setCurrentPrice(basePrices[activePair]);
  }, [activePair]);

  // Live subtle price tick
  useEffect(() => {
    const timer = setInterval(() => {
      const delta = (Math.random() - 0.48) * (activePair === 'XAUUSD' ? 0.35 : 0.0003);
      setCurrentPrice((prev) => {
        const next = +(prev + delta).toFixed(activePair === 'XAUUSD' ? 2 : 4);
        setPriceDirection(delta >= 0 ? 'up' : 'down');
        setPriceChange(delta);
        return next;
      });
    }, 1800);
    return () => clearInterval(timer);
  }, [activePair]);

  // Risk Math
  const dollarRisk = (accountBalance * (riskPercent / 100));
  // Pip value approx $10 per standard lot for EURUSD
  const pipValuePerLot = activePair === 'XAUUSD' ? 10 : 10;
  const calculatedLots = stopLossPips > 0 ? (dollarRisk / (stopLossPips * pipValuePerLot)).toFixed(2) : '0.00';

  // Static mock candles data to render a clean SVG chart
  const candles = [
    { o: 40, h: 65, l: 30, c: 55, up: true },
    { o: 55, h: 70, l: 45, c: 62, up: true },
    { o: 62, h: 68, l: 48, c: 50, up: false },
    { o: 50, h: 58, l: 35, c: 38, up: false },
    { o: 38, h: 52, l: 32, c: 48, up: true },
    { o: 48, h: 75, l: 42, c: 70, up: true },
    { o: 70, h: 82, l: 60, c: 78, up: true },
    { o: 78, h: 85, l: 65, c: 68, up: false },
    { o: 68, h: 74, l: 55, c: 60, up: false },
    { o: 60, h: 80, l: 58, c: 76, up: true },
    { o: 76, h: 90, l: 72, c: 85, up: true },
    { o: 85, h: 95, l: 80, c: 88, up: true },
  ];

  return (
    <div className="flex flex-col bg-[#0f131c] border border-white/10 rounded-2xl p-5 shadow-2xl text-white max-w-md w-full">
      {/* Header with live ticker */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-wider text-slate-300">
            MARKET TERMINAL
          </span>
        </div>

        {/* Pair Switcher */}
        <div className="flex gap-1 bg-white/5 p-1 rounded-lg border border-white/5 text-[11px] font-mono">
          {(['EURUSD', 'GBPUSD', 'XAUUSD'] as const).map((pair) => (
            <button
              key={pair}
              onClick={() => setActivePair(pair)}
              className={`px-2 py-0.5 rounded transition-colors ${
                activePair === pair ? 'bg-amber-400 text-black font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              {pair === 'XAUUSD' ? 'XAU (Gold)' : pair}
            </button>
          ))}
        </div>
      </div>

      {/* Live Quote Display */}
      <div className="flex items-center justify-between mb-4 bg-white/5 p-3 rounded-xl border border-white/5">
        <div>
          <span className="text-[11px] font-mono text-slate-400 block mb-0.5">CURRENT PRICE</span>
          <div className="text-2xl font-black font-mono tracking-tight flex items-center gap-2">
            <span>{currentPrice}</span>
            <span
              className={`text-xs px-1.5 py-0.5 rounded flex items-center font-bold ${
                priceDirection === 'up' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
              }`}
            >
              {priceDirection === 'up' ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
              {priceChange > 0 ? `+${priceChange}` : priceChange}
            </span>
          </div>
        </div>

        {/* Timeframe pill */}
        <div className="flex gap-1 text-[10px] font-mono">
          {(['15M', '1H', '4H', '1D'] as const).map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-1.5 py-1 rounded ${timeframe === tf ? 'bg-white/20 text-white font-bold' : 'text-slate-500 hover:text-slate-300'}`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      {/* Candlestick Chart Area (SVG) */}
      <div className="w-full h-36 bg-[#0a0d14] rounded-xl border border-white/5 p-2 relative overflow-hidden flex items-end justify-between mb-4">
        {/* Subtle price grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between p-2 pointer-events-none opacity-20">
          <div className="border-b border-dashed border-slate-600 w-full" />
          <div className="border-b border-dashed border-slate-600 w-full" />
          <div className="border-b border-dashed border-slate-600 w-full" />
        </div>

        {/* Candles */}
        <svg className="w-full h-full" viewBox="0 0 240 100" preserveAspectRatio="none">
          {/* Trendline */}
          <path
            d="M 10 70 L 60 55 L 120 45 L 180 30 L 230 15"
            fill="none"
            stroke="#eab308"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            opacity="0.6"
          />

          {candles.map((c, i) => {
            const x = 10 + i * 19;
            const wickY1 = 100 - c.h;
            const wickY2 = 100 - c.l;
            const bodyY = 100 - Math.max(c.o, c.c);
            const bodyHeight = Math.max(3, Math.abs(c.o - c.c));
            const color = c.up ? '#10b981' : '#f43f5e';

            return (
              <g key={i}>
                {/* Wick */}
                <line x1={x + 4} y1={wickY1} x2={x + 4} y2={wickY2} stroke={color} strokeWidth="1.2" />
                {/* Body */}
                <rect x={x} y={bodyY} width={8} height={bodyHeight} fill={color} rx="1" />
              </g>
            );
          })}
        </svg>

        <div className="absolute top-2 left-2 text-[9px] font-mono text-amber-400/80 bg-black/60 px-1.5 py-0.5 rounded">
          PRICE ACTION · EMA 20
        </div>
      </div>

      {/* Risk Management & Lot Size Calculator (Discipline Pillar from CV) */}
      <div className="bg-white/5 p-3 rounded-xl border border-white/5 space-y-2.5">
        <div className="flex items-center justify-between text-xs font-mono text-slate-300">
          <span className="flex items-center gap-1 text-emerald-400 font-semibold">
            <ShieldAlert className="w-3.5 h-3.5" /> RISK CALCULATOR
          </span>
          <span className="text-[11px] text-slate-400">Capital Protection Rule</span>
        </div>

        <div className="grid grid-cols-3 gap-2 text-xs font-mono">
          <div>
            <label className="text-[10px] text-slate-400 block mb-1">Balance</label>
            <input
              type="number"
              value={accountBalance}
              onChange={(e) => setAccountBalance(Math.max(100, Number(e.target.value)))}
              className="w-full bg-black/50 border border-white/10 rounded px-2 py-1 text-xs text-white focus:outline-none focus:border-amber-400"
            />
          </div>
          <div>
            <label className="text-[10px] text-slate-400 block mb-1">Risk %</label>
            <select
              value={riskPercent}
              onChange={(e) => setRiskPercent(Number(e.target.value))}
              className="w-full bg-black/50 border border-white/10 rounded px-1.5 py-1 text-xs text-white focus:outline-none focus:border-amber-400"
            >
              <option value={0.5}>0.5%</option>
              <option value={1}>1.0%</option>
              <option value={1.5}>1.5%</option>
              <option value={2}>2.0%</option>
            </select>
          </div>
          <div>
            <label className="text-[10px] text-slate-400 block mb-1">SL (Pips)</label>
            <input
              type="number"
              value={stopLossPips}
              onChange={(e) => setStopLossPips(Math.max(1, Number(e.target.value)))}
              className="w-full bg-black/50 border border-white/10 rounded px-2 py-1 text-xs text-white focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>

        {/* Result Callout */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs font-mono">
          <div>
            <span className="text-slate-400 text-[10px]">RISK AMOUNT: </span>
            <strong className="text-rose-400">${dollarRisk.toFixed(2)}</strong>
          </div>
          <div>
            <span className="text-slate-400 text-[10px]">POSITION SIZE: </span>
            <strong className="text-amber-400">{calculatedLots} Lots</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
