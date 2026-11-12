import React, { useState } from 'react';
import { X, Download, Copy, Check, ExternalLink, Briefcase, GraduationCap, Cpu, Phone, Mail, Award, CheckCircle2 } from 'lucide-react';
import { RESUME_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadPdf = () => {
    // Download the official uploaded CV PDF
    const link = document.createElement('a');
    link.href = RESUME_DATA.contact.pdfUrl;
    link.download = 'Yousaf_Tariq_CV_Premium.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#11141c] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 text-white max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold font-display text-white">Curriculum Vitae</h2>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              OFFICIAL CV
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPdf}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold transition-colors shadow-md"
              title="Download official PDF"
            >
              <Download className="w-3.5 h-3.5" />
              Download PDF
            </button>
            <a
              href={RESUME_DATA.contact.pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              PDF View
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Header */}
        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <img
            src="/assets/aistudio/WhatsApp_Image_2026-11-10_at_8.22.41_PM_ad2ea340.jpeg"
            alt={RESUME_DATA.name}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover object-[center_20%] border-2 border-amber-400 shadow-lg shrink-0"
          />
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white mb-1">
              {RESUME_DATA.name}
            </h1>
            <p className="text-amber-400 font-semibold text-xs sm:text-sm font-mono mb-2">
              {RESUME_DATA.title}
            </p>
            <div className="flex flex-wrap gap-y-1 gap-x-4 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1 text-slate-300">
                <Phone className="w-3 h-3 text-emerald-400" />
                {RESUME_DATA.contact.phone}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1 text-slate-300">
                <Mail className="w-3 h-3 text-cyan-400" />
                {RESUME_DATA.contact.email}
              </span>
              <span>·</span>
              <a
                href="https://www.facebook.com/share/19kLKCKURK/"
                target="_blank"
                rel="noreferrer"
                className="text-purple-400 hover:text-purple-300 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Facebook: {RESUME_DATA.contact.facebook}</span>
                <span className="text-[10px]">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="mb-6 space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Professional Summary
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-sm text-slate-300 leading-relaxed font-sans">
            {RESUME_DATA.summary}
          </div>
        </div>

        {/* Professional Experience */}
        <div className="mb-6 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
            <Briefcase className="w-4 h-4 text-amber-400" /> Professional Experience
          </div>
          <div className="space-y-4 pl-2 border-l border-white/10">
            {RESUME_DATA.experience.map((exp, idx) => (
              <div key={idx} className="relative pl-4">
                <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-amber-400 border-2 border-[#11141c]" />
                <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                  <h3 className="font-semibold text-white text-sm">{exp.role}</h3>
                  <span className="text-xs font-mono text-emerald-400 font-bold">{exp.period}</span>
                </div>
                <div className="text-xs text-cyan-400 mb-2 font-mono">{exp.org}</div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-amber-400 shrink-0">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Prop Firm Certifications & Verified Payouts */}
        <div className="mb-6 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
            <Award className="w-4 h-4 text-emerald-400" /> Prop Firm Certifications & Verified Payouts
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {RESUME_DATA.certifications.map((cert, cIdx) => (
              <div key={cIdx} className="p-3 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] font-mono text-slate-400">{cert.firm}</span>
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {cert.badge}
                    </span>
                  </div>
                  <h5 className="font-semibold text-white text-xs leading-snug">{cert.title}</h5>
                </div>
                <div className="text-[11px] font-mono text-amber-400 mt-2">
                  Issued: {cert.date}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical & Digital Skills */}
        <div className="mb-6 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
            <Cpu className="w-4 h-4 text-purple-400" /> Technical & Digital Skills
          </div>
          <div className="space-y-3">
            {RESUME_DATA.digitalSkills.map((skill, sIdx) => (
              <div key={sIdx} className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                <h4 className="text-xs font-bold font-mono text-amber-400 uppercase tracking-wide mb-1.5">
                  {skill.area}
                </h4>
                <ul className="space-y-1 text-xs text-slate-300">
                  {skill.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-slate-500">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-6 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
            <GraduationCap className="w-4 h-4 text-cyan-400" /> Education
          </div>
          <div className="space-y-2">
            {RESUME_DATA.education.map((edu, eIdx) => (
              <div key={eIdx} className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                <div>
                  <h5 className="font-semibold text-white text-xs">{edu.degree}</h5>
                  <span className="text-[11px] font-mono text-slate-400">{edu.institution}</span>
                </div>
                <span className="text-xs font-mono font-bold text-amber-400 bg-black/40 px-2 py-0.5 rounded">
                  {edu.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Core Competencies & Strengths */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 uppercase mb-2">
              <Award className="w-3.5 h-3.5 text-emerald-400" /> Core Competencies
            </div>
            <div className="flex flex-wrap gap-1.5">
              {RESUME_DATA.coreCompetencies.map((c, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-white/10 text-slate-200 text-[11px] font-mono">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 uppercase mb-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Key Strengths
            </div>
            <div className="flex flex-wrap gap-1.5">
              {RESUME_DATA.strengths.map((s, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-white/10 text-slate-200 text-[11px] font-mono">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
