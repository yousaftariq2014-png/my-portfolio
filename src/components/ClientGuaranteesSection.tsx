import React from 'react';
import { ShieldCheck, Code, Wrench, Zap, Clock, ArrowUpRight, CheckCircle2, Calendar } from 'lucide-react';

interface ClientGuaranteesSectionProps {
  onStartProject: () => void;
  onBookCall: () => void;
}

export const ClientGuaranteesSection: React.FC<ClientGuaranteesSectionProps> = ({
  onStartProject,
  onBookCall
}) => {
  const guarantees = [
    {
      icon: ShieldCheck,
      number: '01',
      title: 'Milestone-Based Payments',
      subtitle: 'Zero Financial Risk',
      description: 'You only release payment as agreed deliverables are completed, demonstrated live, and approved by you. No upfront hostage fees.',
      accent: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
    },
    {
      icon: Code,
      number: '02',
      title: '100% Code & IP Ownership',
      subtitle: 'Zero Vendor Lock-In',
      description: 'Full GitHub repository handover, Figma source files, environment configurations, and production keys. You own every pixel and line of code.',
      accent: 'text-amber-400',
      badgeBg: 'bg-amber-500/10 border-amber-500/20 text-amber-400'
    },
    {
      icon: Wrench,
      number: '03',
      title: '30-Day Post-Launch Warranty',
      subtitle: 'Guaranteed Stability',
      description: '30 days of complimentary bug fixes, cross-browser patching, and performance monitoring after launch to ensure zero downtime.',
      accent: 'text-cyan-400',
      badgeBg: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
    },
    {
      icon: Zap,
      number: '04',
      title: 'Sub-Second Speed SLA',
      subtitle: 'High-Conversion Architecture',
      description: 'Guaranteed 90+ Google Lighthouse performance score on modern web deployments. Faster page speeds directly boost your conversion rate.',
      accent: 'text-purple-400',
      badgeBg: 'bg-purple-500/10 border-purple-500/20 text-purple-400'
    },
    {
      icon: Clock,
      number: '05',
      title: '72-Hour Sprint Demos',
      subtitle: 'Direct Founder Access',
      description: 'No account managers or middleman delays. Direct WhatsApp communication and recorded walkthroughs every 3 days so you are always in control.',
      accent: 'text-rose-400',
      badgeBg: 'bg-rose-500/10 border-rose-500/20 text-rose-400'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#090b0f] text-white relative overflow-hidden border-t border-white/5">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CLIENT PEACE-OF-MIND CHARTER</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-white mb-4 leading-tight">
            Zero Risk. 100% Transparency. <br />
            <span className="text-slate-400">Direct Accountability.</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Hiring an independent full-stack engineer should give you more agility and quality, not anxiety. Every project comes backed by 5 non-negotiable guarantees designed to protect your investment.
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {guarantees.map((g) => {
            const Icon = g.icon;
            return (
              <div
                key={g.number}
                className="bg-[#11141c] border border-white/10 hover:border-white/20 rounded-2xl p-6 sm:p-7 transition-all duration-200 hover:-translate-y-1 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-500 tracking-wider">
                      GUARANTEE {g.number}
                    </span>
                  </div>

                  <div className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono border mb-2 ${g.badgeBg}`}>
                    {g.subtitle}
                  </div>

                  <h3 className="text-xl font-bold font-display text-white mb-2">
                    {g.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                    {g.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs font-mono text-slate-500">
                  <CheckCircle2 className={`w-3.5 h-3.5 ${g.accent}`} />
                  <span>Contractually Promised</span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Direct CTA Card */}
          <div className="bg-gradient-to-br from-[#1a1f2c] via-[#121620] to-[#0c0e14] border border-amber-400/30 rounded-2xl p-6 sm:p-7 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-5">
                <ShieldCheck className="w-5 h-5" />
              </div>

              <div className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono border border-amber-400/30 bg-amber-400/10 text-amber-300 mb-2">
                READY TO SHIP?
              </div>

              <h3 className="text-xl font-bold font-display text-white mb-2">
                Have a project in mind?
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Let's discuss technical scope, explore feasibility, and prepare a milestone estimate with zero obligation.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 space-y-2.5">
              <button
                onClick={onStartProject}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white text-black hover:bg-amber-400 font-bold rounded-xl text-xs sm:text-sm transition-all duration-150 cursor-pointer shadow-lg active:scale-95"
              >
                <span>Start a Project Proposal</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onBookCall}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 font-semibold rounded-xl text-xs border border-amber-400/30 transition-all cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>Book 15-Min Strategy Call</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
