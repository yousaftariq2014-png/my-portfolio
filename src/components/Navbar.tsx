import React, { useState, useEffect } from 'react';
import { Clock, ArrowUpRight, Menu, X, Calendar } from 'lucide-react';
import { ServiceId } from '../types';

interface NavbarProps {
  onSelectDoor: (id: ServiceId) => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
  onBookCall: () => void;
  onNavigateHome: () => void;
  onNavigateStory: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onSelectDoor,
  onOpenResume,
  onOpenContact,
  onBookCall,
  onNavigateHome,
  onNavigateStory
}) => {
  const [timeStr, setTimeStr] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      };
      const formatted = new Intl.DateTimeFormat('en-US', options).format(now);
      setTimeStr(`${formatted} LOCAL`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks: { label: string; action: () => void }[] = [
    { label: 'Home', action: onNavigateHome },
    { label: 'Forex Trading', action: () => onSelectDoor('forex-trading') },
    { label: 'AI Video', action: () => onSelectDoor('ai-video') },
    { label: 'Prompt Eng.', action: () => onSelectDoor('prompt-engineering') },
    { label: 'Web & CS', action: () => onSelectDoor('web-development') },
    { label: 'My story', action: onNavigateStory },
    { label: 'Contact', action: onOpenContact }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0d0f12]/90 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={onNavigateHome}
          className="text-xl font-black font-display tracking-tight text-white hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
        >
          <span>Yousaf</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
        </button>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-slate-300">
          {navLinks.map((item, idx) => (
            <button
              key={idx}
              onClick={item.action}
              className="hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0 relative py-1 group"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-amber-400 transition-all duration-200 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Zone 3: Live Time & Actions */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          {timeStr && (
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
              <Clock className="w-3 h-3 text-amber-400 animate-pulse" />
              <span>{timeStr}</span>
            </div>
          )}

          <button
            onClick={onOpenResume}
            className="hidden md:inline-flex items-center gap-1 text-xs font-medium text-slate-300 hover:text-white px-2.5 py-1.5 rounded-lg hover:bg-white/5 transition-colors whitespace-nowrap"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </button>

          <button
            onClick={onBookCall}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-amber-300 bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 rounded-lg transition-all duration-150 active:scale-95 whitespace-nowrap cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>Book Call</span>
          </button>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-black bg-white hover:bg-amber-400 rounded-lg transition-all duration-150 shadow-sm active:scale-95 whitespace-nowrap cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#11141c] border-b border-white/10 px-6 py-5 space-y-3 animate-in slide-in-from-top-2 duration-150">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-slate-400">
            <span>CURRENT TIME:</span>
            <span className="text-white">{timeStr}</span>
          </div>
          <div className="flex flex-col space-y-2.5">
            {navLinks.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  item.action();
                  setMobileMenuOpen(false);
                }}
                className="text-left py-1 text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                onBookCall();
                setMobileMenuOpen(false);
              }}
              className="py-2.5 text-center text-xs font-medium text-amber-300 bg-amber-400/10 border border-amber-400/30 rounded-lg hover:bg-amber-400/20 flex items-center justify-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>Book 15-Min Call</span>
            </button>
            <button
              onClick={() => {
                onOpenContact();
                setMobileMenuOpen(false);
              }}
              className="py-2.5 text-center text-xs font-semibold text-black bg-white hover:bg-amber-400 rounded-lg"
            >
              Start Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
