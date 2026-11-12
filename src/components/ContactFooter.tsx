import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Mail, Heart, Github, Twitter, Linkedin, Dribbble, Globe, Calendar } from 'lucide-react';
import { CREATOR_INFO } from '../data/portfolioData';
import { ServiceId } from '../types';

interface ContactFooterProps {
  onStartProject: () => void;
  onBookStrategyCall: () => void;
  onSelectDoor: (id: ServiceId) => void;
  onNavigateHome: () => void;
  onNavigateStory: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({
  onStartProject,
  onBookStrategyCall,
  onSelectDoor,
  onNavigateHome,
  onNavigateStory
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CREATOR_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <footer id="contact" className="bg-[#07080b] text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Block (From video Frame 00:15) */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-emerald-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>AVAILABLE FOR WORK</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-white mb-6 leading-tight">
            Got a project? <br />
            <span className="text-slate-300 hover:text-white transition-colors">
              Let's build it together.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed mb-8 max-w-2xl">
            I'm taking on select freelance engagements: web platforms, native iOS apps, and brand design systems. Tell me what you're crafting and I'll get back to you within 24 hours.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onStartProject}
              className="flex items-center gap-2 px-7 py-4 bg-white text-black hover:bg-amber-400 font-bold rounded-xl text-sm transition-all duration-150 shadow-xl shadow-white/5 active:scale-95 cursor-pointer"
            >
              <span>Start a project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={onBookStrategyCall}
              className="flex items-center gap-2 px-6 py-4 bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 font-semibold rounded-xl text-sm border border-amber-400/30 transition-all duration-150 active:scale-95 cursor-pointer shadow-lg shadow-amber-500/5"
            >
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Book 15-Min Call</span>
            </button>

            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 px-6 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl text-sm border border-white/10 transition-all duration-150 active:scale-95 cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
              <span>{copied ? 'Email Copied!' : 'Copy Email Address'}</span>
            </button>
          </div>
        </div>

        {/* Navigation & Directory Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-white/10 text-xs">
          {/* Col 1: Disciplines */}
          <div className="space-y-3">
            <div className="font-mono text-slate-400 uppercase tracking-wider text-[11px]">
              Disciplines
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onSelectDoor('forex-trading')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Forex Market Analysis (6 Yrs)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectDoor('ai-video')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  AI Video (Realify AI)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectDoor('prompt-engineering')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  AI Prompt Engineering
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectDoor('web-development')}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Web Engineering & Apps
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <div className="font-mono text-slate-400 uppercase tracking-wider text-[11px]">
              Navigation
            </div>
            <ul className="space-y-2">
              <li>
                <button onClick={onNavigateHome} className="text-slate-300 hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={onNavigateStory} className="text-slate-300 hover:text-white transition-colors">
                  My Story
                </button>
              </li>
              <li>
                <button onClick={onStartProject} className="text-slate-300 hover:text-white transition-colors">
                  Project Inquiries
                </button>
              </li>
              <li>
                <a href={`mailto:${CREATOR_INFO.email}`} className="text-slate-300 hover:text-white transition-colors">
                  Direct Email
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact & Channels */}
          <div className="space-y-3">
            <div className="font-mono text-slate-400 uppercase tracking-wider text-[11px]">
              Direct Contact
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href={`tel:${CREATOR_INFO.phone}`}
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-400" /> Phone: {CREATOR_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CREATOR_INFO.email}`}
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" /> {CREATOR_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-purple-400 hover:text-purple-300 transition-colors font-medium"
                >
                  <Globe className="w-3.5 h-3.5" /> Facebook: Realify AI
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Status & Availability */}
          <div className="space-y-3">
            <div className="font-mono text-slate-400 uppercase tracking-wider text-[11px]">
              Availability
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              Accepting 2 new client engagements for Q1/Q2. Remote collaboration worldwide.
            </p>
            <div className="pt-1 text-[11px] font-mono text-cyan-400">
              {CREATOR_INFO.location}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Signature */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} {CREATOR_INFO.fullName}. Built with precision.
          </div>
          <div className="flex items-center gap-1">
            <span>Portfolio Flex Edition</span>
            <span>·</span>
            <span className="text-amber-400">60 FPS Native</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
