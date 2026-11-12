import React, { useState } from 'react';
import { Film, ExternalLink, Sparkles, CheckCircle2, Users, Maximize2, X, Share2, Copy, Check, Eye, Play, ThumbsUp, MessageSquare, Clapperboard, Flame, Award } from 'lucide-react';

interface ViralVideoItem {
  id: string;
  title: string;
  type: 'Reel' | 'Video';
  url: string;
  badge: string;
  highlightStat: string;
  styleTag: string;
  themeColor: string;
  glowColor: string;
  promptSnippet: string;
  aspectDesc: string;
  description: string;
}

export const InteractiveVideoReel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'reels' | 'proof' | 'prompts'>('reels');
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [copiedLinkIndex, setCopiedLinkIndex] = useState<number | null>(null);

  const facebookMainUrl = 'https://www.facebook.com/share/19kLKCKURK/';
  const proofScreenshot = '/assets/aistudio/_5C79D7B0-8D94-41BC-B86F-CA7D11543B50__67ab51e0.png';

  // The 4 authentic videos created by Yousaf on Realify AI with high views, likes & shares
  const viralVideos: ViralVideoItem[] = [
    {
      id: 'reel-1',
      title: 'Cinematic AI Sci-Fi Transformation',
      type: 'Reel',
      url: 'https://www.facebook.com/share/r/19ho5ETZ34/',
      badge: '🔥 Top Viral Reel',
      highlightStat: 'High Views & Shares',
      styleTag: 'Sci-Fi Cinematic',
      themeColor: '#8b5cf6',
      glowColor: 'rgba(139, 92, 246, 0.4)',
      promptSnippet: 'A futuristic atmospheric cyberpunk avenue with volumetric holographic billboards reflecting in rain puddles, smooth 35mm anamorphic lens tracking, 8k cinematic render.',
      aspectDesc: '9:16 Vertical Reel',
      description: 'One of the top-performing AI reels on Realify AI with high viral engagement, organic reach, and shares.'
    },
    {
      id: 'video-2',
      title: 'Epic AI Visual Storytelling & Atmosphere',
      type: 'Video',
      url: 'https://www.facebook.com/share/v/1E4cXWsv4j/',
      badge: '⭐ High Engagement Video',
      highlightStat: 'Top Likes & Reach',
      styleTag: 'Narrative Storytelling',
      themeColor: '#f59e0b',
      glowColor: 'rgba(245, 158, 11, 0.4)',
      promptSnippet: 'Dramatic cinematic recreation with golden dawn rays cutting through ancient misty canyon arches, ultra-realistic environmental particle lighting and fluid camera motion.',
      aspectDesc: '16:9 Widescreen Video',
      description: 'Cinematic AI video published on Realify AI featuring seamless environmental generation, dramatic lighting, and deep audience retention.'
    },
    {
      id: 'reel-3',
      title: 'Unreal Realism & High-Velocity Motion',
      type: 'Reel',
      url: 'https://www.facebook.com/share/r/1Fg7MaLH9U/',
      badge: '🚀 Organic Viral Spike',
      highlightStat: 'Most Shared Reel',
      styleTag: 'Dynamic Motion',
      themeColor: '#10b981',
      glowColor: 'rgba(16, 185, 129, 0.4)',
      promptSnippet: 'High-velocity fluid transitions, zero-motion artifacting, hyper-detailed physics and photorealistic motion blur synched to dramatic audio pacing.',
      aspectDesc: '9:16 Vertical Reel',
      description: 'Viral short-form reel that drove massive share-counts and new follower acquisition across the Realify AI page.'
    },
    {
      id: 'reel-4',
      title: 'Next-Level AI Creativity & Visual FX',
      type: 'Reel',
      url: 'https://www.facebook.com/share/r/1CbrFsatff/',
      badge: '✨ Audience Favorite',
      highlightStat: 'Top Comments & Likes',
      styleTag: 'Creative FX & Concept',
      themeColor: '#ec4899',
      glowColor: 'rgba(236, 72, 153, 0.4)',
      promptSnippet: 'Intricate surreal concept animation, macro atmospheric particles, ethereal neon color grading, high-contrast studio cinematic composition.',
      aspectDesc: '9:16 Vertical Reel',
      description: 'Creative visual masterpiece created with custom multi-pass prompting, garnering high audience engagement and retention.'
    }
  ];

  const currentVideo = viralVideos[selectedVideoIndex];

  const handleCopyLink = (url: string, index: number) => {
    navigator.clipboard.writeText(url);
    setCopiedLinkIndex(index);
    setTimeout(() => setCopiedLinkIndex(null), 2000);
  };

  return (
    <div className="flex flex-col bg-[#0e111a] border border-white/10 rounded-3xl p-4 sm:p-6 shadow-2xl text-white max-w-xl w-full relative overflow-hidden">
      {/* Background ambient neon glow */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-colors duration-500 opacity-20"
        style={{ backgroundColor: currentVideo.themeColor }}
      />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-white/10 mb-4 gap-2 relative z-10">
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center shadow-lg transition-colors"
            style={{ backgroundColor: currentVideo.themeColor }}
          >
            <Film className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="text-xs font-mono font-bold tracking-wider text-white flex items-center gap-1.5">
              <span>REALIFY AI CINEMA STUDIO</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="text-[10px] font-mono text-purple-300">525+ Followers · 4 Viral Productions</div>
          </div>
        </div>

        {/* Direct Facebook Page Link */}
        <a
          href={facebookMainUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all duration-150 active:scale-95 shadow-md shadow-blue-600/30 group"
          title="Open official Facebook page"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          <span>Realify AI Page</span>
          <ExternalLink className="w-3 h-3 text-blue-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* 3-Way Mode Switcher Tabs */}
      <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-black/60 border border-white/5 mb-4 text-xs font-mono relative z-10">
        <button
          onClick={() => setActiveTab('reels')}
          className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg font-semibold transition-all cursor-pointer ${
            activeTab === 'reels'
              ? 'bg-purple-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <Flame className="w-3.5 h-3.5 text-amber-400" />
          <span className="truncate">Viral Reels ({viralVideos.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('proof')}
          className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg font-semibold transition-all cursor-pointer ${
            activeTab === 'proof'
              ? 'bg-purple-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <Users className="w-3.5 h-3.5" />
          <span className="truncate">Page Proof (525+)</span>
        </button>

        <button
          onClick={() => setActiveTab('prompts')}
          className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg font-semibold transition-all cursor-pointer ${
            activeTab === 'prompts'
              ? 'bg-purple-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span className="truncate">Prompt Architecture</span>
        </button>
      </div>

      {/* ======================================================= */}
      {/* TAB 1: YOUSAF'S AUTHENTIC VIRAL REELS SHOWCASE          */}
      {/* ======================================================= */}
      {activeTab === 'reels' && (
        <div className="space-y-4 relative z-10">
          {/* Quick Reel Selector Bar (Reel 1, Video 2, Reel 3, Reel 4) */}
          <div className="grid grid-cols-4 gap-1.5">
            {viralVideos.map((video, idx) => {
              const isSelected = selectedVideoIndex === idx;
              return (
                <button
                  key={video.id}
                  onClick={() => setSelectedVideoIndex(idx)}
                  className={`py-2 px-1.5 rounded-xl border text-center transition-all cursor-pointer ${
                    isSelected
                      ? 'border-white/40 bg-white/15 text-white shadow-lg'
                      : 'border-white/5 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <div className="text-[10px] font-mono uppercase font-bold flex items-center justify-center gap-1">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: video.themeColor }}
                    />
                    <span>{video.type} {idx + 1}</span>
                  </div>
                  <div className="text-[9px] font-mono text-slate-400 truncate mt-0.5">
                    {idx === 0 && 'Sci-Fi'}
                    {idx === 1 && 'Epic Dawn'}
                    {idx === 2 && 'Velocity'}
                    {idx === 3 && 'Surreal'}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Featured Reel Cinema Stage Card */}
          <div
            className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#0b0e17] shadow-2xl p-5 flex flex-col justify-between transition-all"
            style={{
              boxShadow: `0 20px 40px -15px ${currentVideo.glowColor}`
            }}
          >
            {/* Top Tag & Stats */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <span
                className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold flex items-center gap-1.5 shadow-sm"
                style={{
                  backgroundColor: `${currentVideo.themeColor}22`,
                  color: currentVideo.themeColor,
                  border: `1px solid ${currentVideo.themeColor}55`
                }}
              >
                <span>{currentVideo.badge}</span>
              </span>

              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>100% Realify AI Original</span>
              </span>
            </div>

            {/* Video Stage Visual Simulation Box */}
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#131726] to-[#07090e] p-5 my-2 flex flex-col items-center justify-center text-center min-h-[200px]">
              {/* Dynamic Animated Pulse Ring */}
              <div
                className="absolute w-36 h-36 rounded-full border border-white/10 animate-ping opacity-30 pointer-events-none"
                style={{ animationDuration: '2.5s' }}
              />

              {/* Pulsing Play Orb & Launch on Facebook */}
              <a
                href={currentVideo.url}
                target="_blank"
                rel="noreferrer"
                className="group relative z-10 w-16 h-16 rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-2xl cursor-pointer"
                style={{
                  backgroundColor: currentVideo.themeColor,
                  boxShadow: `0 0 35px ${currentVideo.themeColor}88`
                }}
              >
                <Play className="w-7 h-7 text-white fill-current ml-1" />
                <span className="absolute -bottom-6 text-[10px] font-mono font-bold text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/80 px-2 py-0.5 rounded">
                  Watch on Facebook
                </span>
              </a>

              {/* Title & Description */}
              <div className="relative z-10 mt-5 max-w-sm">
                <h4 className="text-base sm:text-lg font-black font-display text-white">
                  {currentVideo.title}
                </h4>
                <p className="text-xs text-slate-300 font-sans mt-1">
                  {currentVideo.description}
                </p>
              </div>

              {/* Audio Waveform simulation bar */}
              <div className="flex items-center gap-1 mt-4 opacity-70">
                {[4, 10, 16, 8, 22, 14, 28, 12, 20, 15, 26, 9, 18, 7, 24, 13, 6].map((h, i) => (
                  <div
                    key={i}
                    className="w-1 rounded-full transition-all"
                    style={{
                      height: `${h}px`,
                      backgroundColor: currentVideo.themeColor
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Performance Metrics Strip */}
            <div className="grid grid-cols-3 gap-2 my-3 text-center font-mono">
              <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                <div className="text-[10px] text-slate-400">PERFORMANCE</div>
                <div className="text-xs font-bold text-amber-400 mt-0.5">{currentVideo.highlightStat}</div>
              </div>
              <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                <div className="text-[10px] text-slate-400">FORMAT</div>
                <div className="text-xs font-bold text-slate-200 mt-0.5">{currentVideo.aspectDesc}</div>
              </div>
              <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                <div className="text-[10px] text-slate-400">GENRE</div>
                <div className="text-xs font-bold text-purple-300 mt-0.5">{currentVideo.styleTag}</div>
              </div>
            </div>

            {/* Action Buttons: Watch on Facebook & Copy Link */}
            <div className="flex items-center gap-2 pt-2 border-t border-white/10">
              <a
                href={currentVideo.url}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition-all duration-150 shadow-lg shadow-blue-600/30 active:scale-95 cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Watch this Reel on Facebook</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>

              <button
                onClick={() => handleCopyLink(currentVideo.url, selectedVideoIndex)}
                className="px-3.5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs border border-white/10 transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
                title="Copy Reel link"
              >
                {copiedLinkIndex === selectedVideoIndex ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-300" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* All 4 Videos Quick Grid with Direct Links */}
          <div className="space-y-2 pt-2">
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
              <span>All 4 Viral Realify AI Productions</span>
              <span className="text-amber-400">High Views & Likes</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {viralVideos.map((item, idx) => {
                const isSelected = selectedVideoIndex === idx;
                return (
                  <div
                    key={item.id}
                    className={`p-3 rounded-xl border transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'border-white/30 bg-white/10'
                        : 'border-white/5 bg-white/5 hover:border-white/15 hover:bg-white/10'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                        <span
                          className="font-bold uppercase"
                          style={{ color: item.themeColor }}
                        >
                          {item.type} 0{idx + 1}
                        </span>
                        <span className="text-slate-400">{item.highlightStat}</span>
                      </div>
                      <h5 className="text-xs font-bold text-white line-clamp-1">
                        {item.title}
                      </h5>
                    </div>

                    <div className="flex items-center justify-between gap-2 mt-2.5 pt-2 border-t border-white/5">
                      <button
                        onClick={() => setSelectedVideoIndex(idx)}
                        className="text-[10px] font-mono text-slate-300 hover:text-white cursor-pointer"
                      >
                        Preview Specs
                      </button>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-blue-400 hover:text-blue-300"
                      >
                        <span>Open Video</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ======================================================= */}
      {/* TAB 2: OFFICIAL FACEBOOK CHANNEL PROOF (525+ FOLLOWERS) */}
      {/* ======================================================= */}
      {activeTab === 'proof' && (
        <div className="space-y-3.5 relative z-10">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#090b10] shadow-xl group">
            {/* Top Bar with URL Preview */}
            <div className="px-3 py-2 bg-[#121622] border-b border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
              </div>
              <div className="px-2.5 py-0.5 rounded-md bg-black/50 text-[10px] text-cyan-300 font-mono truncate max-w-[210px] flex items-center gap-1">
                <span>🔒 facebook.com/share/19kLKCKURK</span>
              </div>
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="p-1 rounded hover:bg-white/10 text-slate-300 transition-colors cursor-pointer"
                title="Expand screenshot"
              >
                <Maximize2 className="w-3 h-3" />
              </button>
            </div>

            {/* Clickable Image Preview */}
            <div
              onClick={() => setIsLightboxOpen(true)}
              className="relative cursor-pointer overflow-hidden aspect-[16/10] bg-slate-900"
            >
              <img
                src={proofScreenshot}
                alt="Realify AI Facebook Page proof with 525+ followers"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />

              <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-emerald-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>525 Followers · 100% Organic Growth</span>
                </div>
                <span className="text-[10px] font-mono text-slate-300 bg-white/10 px-2 py-1 rounded-md backdrop-blur-md">
                  Click to Zoom
                </span>
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-2 text-center font-mono">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
              <div className="text-base font-bold font-display text-white">525+</div>
              <div className="text-[10px] text-slate-400 uppercase">Organic Followers</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
              <div className="text-base font-bold font-display text-emerald-400">100%</div>
              <div className="text-[10px] text-slate-400 uppercase">AI Video Content</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
              <div className="text-base font-bold font-display text-purple-400">Self-Grown</div>
              <div className="text-[10px] text-slate-400 uppercase">Zero Ad Spend</div>
            </div>
          </div>

          {/* Action Link Button */}
          <a
            href={facebookMainUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-xs sm:text-sm transition-all duration-150 active:scale-95 shadow-lg shadow-purple-900/30"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Open Official Realify AI Page</span>
            <ExternalLink className="w-3.5 h-3.5 shrink-0" />
          </a>
        </div>
      )}

      {/* ======================================================= */}
      {/* TAB 3: PROMPT ARCHITECTURE & SCENE DIRECTOR              */}
      {/* ======================================================= */}
      {activeTab === 'prompts' && (
        <div className="space-y-3.5 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>ACTIVE REEL PROMPT</span>
              <span>{selectedVideoIndex + 1} / {viralVideos.length}</span>
            </div>

            <p className="text-xs text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5 font-sans italic leading-relaxed">
              "{currentVideo.promptSnippet}"
            </p>

            <div className="grid grid-cols-4 gap-1.5 pt-1">
              {viralVideos.map((v, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedVideoIndex(idx)}
                  className={`py-2 px-1 rounded-xl text-[10px] font-mono truncate transition-all border cursor-pointer ${
                    selectedVideoIndex === idx
                      ? 'bg-purple-500/20 text-purple-300 border-purple-400/50 font-bold'
                      : 'bg-white/5 text-slate-400 border-white/5 hover:text-white'
                  }`}
                >
                  Prompt 0{idx + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Lightbox Modal for Page Proof */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#121622] rounded-3xl overflow-hidden border border-white/20 shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-3 bg-[#1a2030] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono font-bold text-white">
                  Realify AI Facebook Page Proof — 525+ Followers
                </span>
              </div>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="overflow-auto p-2 bg-black flex-1 flex items-center justify-center">
              <img
                src={proofScreenshot}
                alt="Full Realify AI Facebook Page screenshot"
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="px-4 py-3 bg-[#1a2030] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="text-slate-300">
                100% Organic Growth through AI Video Generation
              </span>
              <a
                href={facebookMainUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl flex items-center gap-1.5 shadow-md"
              >
                <span>Open Live Facebook Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
