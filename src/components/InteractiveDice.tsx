import React, { useState } from 'react';
import { Dices, Sparkles, RefreshCw } from 'lucide-react';

export const InteractiveDice: React.FC = () => {
  const [die1, setDie1] = useState(4);
  const [die2, setDie2] = useState(6);
  const [isRolling, setIsRolling] = useState(false);
  const [history, setHistory] = useState<number[]>([10, 7, 12]);

  const rollDice = () => {
    if (isRolling) return;
    setIsRolling(true);

    let rollCount = 0;
    const interval = setInterval(() => {
      setDie1(Math.floor(Math.random() * 6) + 1);
      setDie2(Math.floor(Math.random() * 6) + 1);
      rollCount++;
      if (rollCount > 8) {
        clearInterval(interval);
        const final1 = Math.floor(Math.random() * 6) + 1;
        const final2 = Math.floor(Math.random() * 6) + 1;
        setDie1(final1);
        setDie2(final2);
        setHistory((prev) => [final1 + final2, ...prev.slice(0, 4)]);
        setIsRolling(false);
      }
    }, 70);
  };

  // Helper to render die pips cleanly
  const renderPips = (val: number) => {
    const pips: React.ReactNode[] = [];
    const positions: Record<number, number[]> = {
      1: [4],
      2: [0, 8],
      3: [0, 4, 8],
      4: [0, 2, 6, 8],
      5: [0, 2, 4, 6, 8],
      6: [0, 2, 3, 5, 6, 8]
    };

    const active = positions[val] || [];
    for (let i = 0; i < 9; i++) {
      const isPresent = active.includes(i);
      pips.push(
        <div
          key={i}
          className={`w-2.5 h-2.5 rounded-full transition-opacity ${
            isPresent ? 'bg-slate-900 opacity-100 shadow-sm' : 'opacity-0'
          }`}
        />
      );
    }
    return pips;
  };

  return (
    <div className="flex flex-col items-center bg-[#13161f] border border-white/10 rounded-2xl p-5 shadow-xl text-white">
      <div className="flex items-center justify-between w-full mb-4 text-xs font-mono text-slate-400">
        <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
          <Dices className="w-4 h-4" /> 3D DICE ENGINE
        </span>
        <span>TOTAL: <strong className="text-white text-sm">{die1 + die2}</strong></span>
      </div>

      {/* 3D Dice Display Arena */}
      <div
        onClick={rollDice}
        className="w-full h-44 bg-gradient-to-b from-[#181d29] to-[#0d1017] rounded-xl border border-white/5 flex items-center justify-center gap-6 cursor-pointer relative overflow-hidden group select-none shadow-inner"
      >
        {/* Ambient lighting inside cup */}
        <div className="absolute inset-0 bg-radial from-violet-500/10 via-transparent to-transparent pointer-events-none" />

        {/* Die 1 */}
        <div
          className={`w-16 h-16 bg-gradient-to-br from-white to-slate-200 rounded-xl p-2.5 grid grid-cols-3 grid-rows-3 gap-0.5 shadow-2xl border border-white/40 transform transition-all duration-300 ${
            isRolling ? 'rotate-180 scale-95 blur-[0.5px]' : 'group-hover:-translate-y-1'
          }`}
          style={{
            boxShadow: '0 12px 24px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.8)'
          }}
        >
          {renderPips(die1)}
        </div>

        {/* Die 2 (tinted coral / accent) */}
        <div
          className={`w-16 h-16 bg-gradient-to-br from-rose-100 to-rose-200 rounded-xl p-2.5 grid grid-cols-3 grid-rows-3 gap-0.5 shadow-2xl border border-rose-200/50 transform transition-all duration-300 ${
            isRolling ? '-rotate-180 scale-95 blur-[0.5px]' : 'group-hover:translate-y-1'
          }`}
          style={{
            boxShadow: '0 12px 24px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.8)'
          }}
        >
          {renderPips(die2)}
        </div>

        {/* Shaker hint */}
        <div className="absolute bottom-2 text-[10px] font-mono text-slate-400 flex items-center gap-1 group-hover:text-cyan-300 transition-colors">
          <Sparkles className="w-3 h-3" /> Click anywhere to shake
        </div>
      </div>

      {/* Controller & Roll History */}
      <div className="flex items-center justify-between w-full mt-4">
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
          <span>RECENT:</span>
          <div className="flex gap-1">
            {history.map((val, idx) => (
              <span
                key={idx}
                className="w-5 h-5 rounded bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 text-[10px]"
              >
                {val}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={rollDice}
          disabled={isRolling}
          className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-semibold rounded-lg shadow-md transition-transform active:scale-95 disabled:opacity-50"
        >
          <RefreshCw className={`w-3 h-3 ${isRolling ? 'animate-spin' : ''}`} />
          Roll Dice
        </button>
      </div>
    </div>
  );
};
