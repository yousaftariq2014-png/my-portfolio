import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { CREATOR_INFO } from '../data/portfolioData';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  // International WhatsApp format for Pakistan: 923114134668
  const whatsappUrl = `https://wa.me/923114134668?text=${encodeURIComponent(
    `Hi Yousaf, I reviewed your portfolio and would like to discuss a project / collaboration.`
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Speech bubble badge */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#121622] text-white border border-emerald-500/40 px-3.5 py-2 rounded-2xl shadow-2xl animate-in slide-in-from-right-4 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <div className="text-[11px] font-mono leading-tight">
            <span className="text-emerald-400 font-bold block">Quick Response</span>
            <span className="text-slate-300">Chat with Yousaf directly</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="p-1 rounded text-slate-400 hover:text-white transition-colors ml-1"
            title="Dismiss hint"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main WhatsApp CTA Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/20 group cursor-pointer"
        aria-label="Direct WhatsApp chat with Yousaf Tariq"
        title="Direct WhatsApp chat (+92 311 4134668)"
      >
        <MessageCircle className="w-7 h-7 fill-white/20 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};
