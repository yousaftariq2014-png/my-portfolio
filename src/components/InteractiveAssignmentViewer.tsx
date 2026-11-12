import React, { useState } from 'react';
import { FileText, Download, ExternalLink, BookOpen, CheckCircle, Award, Sparkles, Eye, ShieldCheck, ChevronRight } from 'lucide-react';

interface AssignmentDoc {
  id: string;
  title: string;
  subtitle: string;
  institution: string;
  institutionBadge: string;
  module: string;
  pages: number;
  wordCount: string;
  referencingStyle: string;
  pdfPath: string;
  gradeExpectation: string;
  abstract: string;
  frameworks: string[];
  keyTopics: string[];
}

export const InteractiveAssignmentViewer: React.FC = () => {
  const documents: AssignmentDoc[] = [
    {
      id: 'nike-consultancy',
      title: 'Business Consultancy Project: Sustainability & Supply Chain Transparency at Nike Inc.',
      subtitle: 'Addressing Scope 3 Carbon Emissions, Labor Standards & Digital Product Passports',
      institution: 'BPP Business School, UK',
      institutionBadge: 'BPP UNIVERSITY',
      module: 'Business Project / Executive Consultancy',
      pages: 28,
      wordCount: '4,800+ Words',
      referencingStyle: 'Harvard Academic Referencing (28 Sources)',
      pdfPath: '/assets/aistudio/Business_Consultancy_Project_5a7b0817.pdf',
      gradeExpectation: 'Distinction / Grade A Standard',
      abstract: 'A comprehensive 28-page master-level corporate consultancy report evaluating Nike Inc. ($52B revenue). Applies Mendelow’s Stakeholder Matrix, PESTLE, Porter’s Five Forces, and SWOT analysis to address ESG pressures, Scope 3 supply chain footprint (over 90% of Nike’s emissions), unpaid wages in Cambodia & Thailand, and mandatory EU Due Diligence compliance. Features 4 strategic recommendations: circular design (Reuse-A-Shoe), blockchain digital product passports, Pakistan Accord binding worker-rights treaties, and GRI/SASB transparency reporting.',
      frameworks: ['Mendelow’s Matrix', 'PESTLE Analysis', 'Porter’s Five Forces', 'SWOT Matrix', 'Scope 3 GHG Auditing'],
      keyTopics: ['ESG Governance', 'Supply Chain Transparency', 'Circular Fashion', 'Pakistan Accord', 'Digital Traceability']
    },
    {
      id: 'tourism-dmo',
      title: 'Destination Management: Strategic Role of DMOs in Sustainable Global & Regional Tourism',
      subtitle: 'Analytical Evaluation Across Europe, the Gulf & Developing Regional Destinations',
      institution: 'Canterbury Christ Church University / GBS',
      institutionBadge: 'CANTERBURY CHRIST CHURCH',
      module: 'Business & Tourism Management',
      pages: 19,
      wordCount: '3,500+ Words',
      referencingStyle: 'Harvard Referencing (30+ Peer-Reviewed Citations)',
      pdfPath: '/assets/aistudio/Business___Tourism_Management_68d2cb49.pdf',
      gradeExpectation: 'Distinction / Grade A Standard',
      abstract: 'An in-depth 19-page critical analysis of Destination Management Organisations (DMOs) bridging the gap between influence and regulatory authority. Integrates Butler’s (1980) Tourism Area Life Cycle (TALC) S-curve, Doxey’s Irridex resident attitudes, and Ritchie & Crouch’s destination competitiveness model. Evaluates real-world empirical case studies across Venice (tourist fee & lagoon caps), Amsterdam (demarketing & tax), Copenhagen (localhood & CopenPay), Saudi Arabia Vision 2030 (Red Sea caps), and Northern Pakistan (Murree capacity crisis). Includes comprehensive data appendices and stakeholder recommendation matrices.',
      frameworks: ['Butler’s TALC Curve', 'Doxey’s Irridex', 'Triple Bottom Line (TBL)', 'Ritchie & Crouch Model', 'Limits of Acceptable Change'],
      keyTopics: ['Overtourism Mitigation', 'Sustainable Governance', 'Community Rights', 'Venice & Amsterdam Case Studies', 'Capacity Planning']
    }
  ];

  const [activeDocId, setActiveDocId] = useState<string>(documents[0].id);
  const activeDoc = documents.find((d) => d.id === activeDocId) || documents[0];

  return (
    <div className="w-full bg-[#121622] border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-2xl text-white">
      {/* Top Header & Proof Metrics */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED ACADEMIC & RESEARCH WORK</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
            Academic Research & Assignment Portfolio
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl font-sans">
            Original, rigorously-researched academic coursework, consultancy reports, and business dissertations with 0% AI plagiarism, flawless Harvard/APA citations, and empirical framework deployment.
          </p>
        </div>

        {/* Confidence Badges */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <span className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>0% Plagiarism Guaranteed</span>
          </span>
          <span className="px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Distinction Standard</span>
          </span>
        </div>
      </div>

      {/* Document Switcher Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
        {documents.map((doc) => {
          const isSelected = activeDoc.id === doc.id;
          return (
            <button
              key={doc.id}
              onClick={() => setActiveDocId(doc.id)}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                isSelected
                  ? 'border-amber-400 bg-amber-400/10 shadow-lg shadow-amber-400/5'
                  : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
              }`}
            >
              {isSelected && (
                <div className="absolute top-0 right-0 w-16 h-16 bg-amber-400/10 rounded-bl-full pointer-events-none" />
              )}
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                <span className="px-2 py-0.5 rounded bg-white/10 text-slate-200 font-semibold">
                  {doc.institutionBadge}
                </span>
                <span className="text-amber-400 font-bold">{doc.pages} PAGES · {doc.wordCount}</span>
              </div>
              <h4 className="text-sm font-bold font-display text-white line-clamp-1">
                {doc.title}
              </h4>
              <p className="text-xs text-slate-400 line-clamp-1 mt-0.5 font-sans">
                {doc.subtitle}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Document Showcase Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#0c0e14] border border-white/10 rounded-2xl p-5 sm:p-7">
        {/* Left Column: Abstract, Frameworks & Details */}
        <div className="lg:col-span-7 space-y-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
              <span>{activeDoc.module}</span>
              <span>•</span>
              <span className="text-slate-400">{activeDoc.institution}</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black font-display text-white leading-tight">
              {activeDoc.title}
            </h4>
            <p className="text-xs sm:text-sm font-mono text-amber-300 mt-1">
              {activeDoc.subtitle}
            </p>
          </div>

          {/* Abstract / Summary */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            <span className="font-bold text-white block mb-1 text-xs uppercase tracking-wider font-mono">
              Executive Synopsis:
            </span>
            {activeDoc.abstract}
          </div>

          {/* Academic Frameworks Used */}
          <div>
            <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              Theoretical Models & Research Frameworks Applied:
            </label>
            <div className="flex flex-wrap gap-2">
              {activeDoc.frameworks.map((fw, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono"
                >
                  ✓ {fw}
                </span>
              ))}
            </div>
          </div>

          {/* Meta specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 border-t border-white/10 text-xs font-mono">
            <div className="bg-white/5 p-2 rounded-lg">
              <span className="text-slate-400 block text-[10px]">PAGES</span>
              <span className="text-white font-bold">{activeDoc.pages} Pages</span>
            </div>
            <div className="bg-white/5 p-2 rounded-lg">
              <span className="text-slate-400 block text-[10px]">WORD COUNT</span>
              <span className="text-amber-400 font-bold">{activeDoc.wordCount}</span>
            </div>
            <div className="bg-white/5 p-2 rounded-lg">
              <span className="text-slate-400 block text-[10px]">CITATIONS</span>
              <span className="text-cyan-400 font-bold">{activeDoc.referencingStyle.split(' ')[0]} Format</span>
            </div>
            <div className="bg-white/5 p-2 rounded-lg">
              <span className="text-slate-400 block text-[10px]">GRADE QUALITY</span>
              <span className="text-emerald-400 font-bold">Distinction</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={activeDoc.pdfPath}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-black font-bold rounded-xl text-xs sm:text-sm transition-all duration-150 shadow-lg shadow-amber-400/20 cursor-pointer active:scale-95"
            >
              <Eye className="w-4 h-4" />
              <span>Open Full Assignment PDF</span>
              <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
            </a>

            <a
              href={activeDoc.pdfPath}
              download
              className="flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl text-xs sm:text-sm border border-white/10 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4 text-slate-300" />
              <span>Download PDF ({activeDoc.pages} Pages)</span>
            </a>
          </div>
        </div>

        {/* Right Column: PDF Preview Mockup & Live Embed */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#1a1f2b] shadow-2xl flex flex-col h-[400px] sm:h-[460px]">
            {/* Mock PDF Toolbar */}
            <div className="px-4 py-2.5 bg-[#151923] border-b border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-rose-400" />
                <span className="truncate max-w-[180px] sm:max-w-[220px] text-slate-200">
                  {activeDoc.title}
                </span>
              </div>
              <span className="text-[11px] bg-white/10 px-2 py-0.5 rounded text-amber-300 font-bold shrink-0">
                Page 1 of {activeDoc.pages}
              </span>
            </div>

            {/* Embedded Iframe Preview */}
            <div className="relative flex-1 bg-white overflow-hidden">
              <iframe
                src={`${activeDoc.pdfPath}#page=1&view=FitH&toolbar=0&navpanes=0`}
                title={activeDoc.title}
                className="w-full h-full border-0 select-none"
              />
              {/* Overlay link to easily click and inspect in full tab */}
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between text-xs">
                <span className="text-slate-300 font-mono text-[11px]">
                  Verified {activeDoc.institutionBadge} coursework submission
                </span>
                <a
                  href={activeDoc.pdfPath}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 bg-amber-400 hover:bg-amber-300 text-black font-bold rounded-lg text-xs flex items-center gap-1 shadow-md cursor-pointer"
                >
                  <span>Expand Fullscreen</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Academic Service Scope Pill */}
          <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/5 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span>Specializing in: Dissertations · Consultancy Projects · Business Proposals</span>
            <span className="text-emerald-400 font-bold shrink-0">Turnaround in 48-72h</span>
          </div>
        </div>
      </div>
    </div>
  );
};
