import React, { useState } from 'react';
import { Award, ShieldCheck, DollarSign, ExternalLink, X, ZoomIn, CheckCircle2, ChevronRight } from 'lucide-react';

export interface ForexCertificate {
  id: string;
  firm: string;
  title: string;
  type: 'funded-certificate' | 'payout';
  amount?: string;
  date: string;
  issuedTo: string;
  signatory: string;
  description: string;
  image: string;
  badge: string;
  accentColor: string;
}

export const FOREX_CERTIFICATES: ForexCertificate[] = [
  {
    id: 'my-funded-fx-10k',
    firm: 'My Funded FX',
    title: 'Funded Trader Certificate ($10,000)',
    type: 'funded-certificate',
    amount: '$10,000 Account Size',
    date: '17 July 2023',
    issuedTo: 'Hafiz Yousaf Tariq',
    signatory: 'Matthew Leech, CEO',
    description: 'Awarded for successfully completing the evaluation stages and proving strict risk control on a $10,000 funded prop trading account.',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-12_at_3.38.26_AM__1__b5f1681d.jpeg',
    badge: '$10K FUNDED ACCOUNT',
    accentColor: '#eab308'
  },
  {
    id: 'atmos-funded-apr',
    firm: 'Atmos Funded',
    title: 'Atmos Traded Certified (Stage Cleared)',
    type: 'funded-certificate',
    amount: 'Challenge Cleared',
    date: '24 April 2026',
    issuedTo: 'Hafiz Yousaf Tariq',
    signatory: 'Nick Cooke, CEO',
    description: 'Proved strong capital management, solid risk control, and consistent profitability throughout the evaluation period to become an Atmos Funded Trader.',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-12_at_3.38.25_AM__1__25b346ed.jpeg',
    badge: 'ATMOS CERTIFIED',
    accentColor: '#10b981'
  },
  {
    id: 'atmos-funded-may',
    firm: 'Atmos Funded',
    title: 'Atmos Traded Certified (Master Trader)',
    type: 'funded-certificate',
    amount: 'Funded Trader',
    date: '04 May 2026',
    issuedTo: 'Hafiz Yousaf Tariq',
    signatory: 'Nick Cooke, CEO',
    description: 'Officially certified as an Atmos Funded Trader after rigorous evaluation proving consistent risk-adjusted returns.',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-12_at_3.38.25_AM_4266a5f5.jpeg',
    badge: 'ATMOS FUNDED TRADER',
    accentColor: '#10b981'
  },
  {
    id: 'funds-for-traders',
    firm: 'Funds For Traders',
    title: 'Certificate of Recognition (Funded Trader)',
    type: 'funded-certificate',
    amount: 'Evaluation Cleared',
    date: '12 June 2024',
    issuedTo: 'Yousaf',
    signatory: 'Joël Broos (CEO) & Joran van Lekwijk (CFO)',
    description: 'Awarded for outstanding performance in the evaluation process and officially inducted as a Funds For Traders funded prop trader.',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-12_at_3.38.26_AM_c8dfd98b.jpeg',
    badge: 'FUNDS FOR TRADERS',
    accentColor: '#f43f5e'
  },
  {
    id: 'ofp-payout-380',
    firm: 'OFP (Overview Funding Program)',
    title: 'Overall Payouts Certificate ($380.05)',
    type: 'payout',
    amount: '$380.05 Payout',
    date: '19 February 2025',
    issuedTo: 'Yousaf Tariq',
    signatory: 'CTO & CEO, OFP Funding',
    description: 'Verified real cash withdrawal payout earned from profitable strategy execution on the Overview Funding Program.',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-12_at_3.42.05_AM_da60120d.jpeg',
    badge: 'VERIFIED CASH PAYOUT',
    accentColor: '#38bdf8'
  },
  {
    id: 'ofp-payout-133',
    firm: 'OFP (Overview Funding Program)',
    title: 'Overall Payouts Certificate ($133.68)',
    type: 'payout',
    amount: '$133.68 Payout',
    date: '21 January 2025',
    issuedTo: 'Hafiz Yousaf Tariq',
    signatory: 'CTO & CEO, OFP Funding',
    description: 'Official payout certificate confirming real trading profits withdrawn from the OFP funding program.',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-12_at_3.42.32_AM_da601abf.jpeg',
    badge: 'VERIFIED CASH PAYOUT',
    accentColor: '#38bdf8'
  }
];

export const ForexCertificatesVault: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'funded-certificate' | 'payout'>('all');
  const [selectedCert, setSelectedCert] = useState<ForexCertificate | null>(null);

  const filteredCerts = FOREX_CERTIFICATES.filter(
    (c) => activeFilter === 'all' || c.type === activeFilter
  );

  return (
    <div className="bg-[#10141f] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10 relative z-10">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 mb-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>AUDITED & CERTIFIED TRACK RECORD</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
            Funded Prop Firm Certificates & Payouts Vault
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 font-sans mt-1">
            Official proof of cleared challenges, funded trader status, and verified cash withdrawals.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1 p-1 bg-black/60 rounded-xl border border-white/10 text-xs font-mono shrink-0">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeFilter === 'all'
                ? 'bg-amber-400 text-black font-bold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All Proofs ({FOREX_CERTIFICATES.length})
          </button>
          <button
            onClick={() => setActiveFilter('funded-certificate')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeFilter === 'funded-certificate'
                ? 'bg-emerald-500 text-black font-bold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Funded Certificates (4)
          </button>
          <button
            onClick={() => setActiveFilter('payout')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeFilter === 'payout'
                ? 'bg-cyan-400 text-black font-bold shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Real Payouts (2)
          </button>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
        {filteredCerts.map((cert) => (
          <div
            key={cert.id}
            onClick={() => setSelectedCert(cert)}
            className="group rounded-2xl bg-[#161a26] border border-white/10 hover:border-amber-400/50 p-4 shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Image Thumbnail with Zoom Overlay */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-black/80 mb-3 border border-white/5">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-mono font-semibold backdrop-blur-[2px]">
                  <ZoomIn className="w-4 h-4 text-amber-400" />
                  <span>Inspect Certificate</span>
                </div>

                {/* Badge Overlay */}
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono font-bold text-amber-300 border border-amber-400/40">
                  {cert.badge}
                </div>
              </div>

              {/* Title & Firm */}
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                <span>{cert.firm}</span>
                <span className="text-emerald-400 font-semibold">{cert.date}</span>
              </div>

              <h4 className="text-sm font-bold font-display text-white group-hover:text-amber-300 transition-colors line-clamp-1 mb-1">
                {cert.title}
              </h4>

              <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed font-sans mb-3">
                {cert.description}
              </p>
            </div>

            {/* Bottom Strip */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-amber-400 font-bold">{cert.amount}</span>
              <span className="text-[11px] text-slate-400 flex items-center gap-1 group-hover:text-white transition-colors">
                <span>View Full</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal for Inspection */}
      {selectedCert && (
        <div
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-[#11141c] border border-white/15 rounded-3xl p-6 shadow-2xl text-white max-h-[92vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-20 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Full View */}
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-black mb-5 shadow-2xl flex items-center justify-center max-h-[60vh]">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto max-h-[58vh] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Certificate Details */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-mono font-bold border border-amber-400/40">
                  {selectedCert.badge}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Issued: {selectedCert.date}
                </span>
              </div>

              <h3 className="text-2xl font-bold font-display text-white">
                {selectedCert.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-white/10 text-xs font-mono">
                <div>
                  <span className="text-slate-400 block text-[10px]">Prop Firm</span>
                  <span className="text-white font-bold">{selectedCert.firm}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Awarded To</span>
                  <span className="text-amber-400 font-bold">{selectedCert.issuedTo}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Signatory</span>
                  <span className="text-white font-semibold">{selectedCert.signatory}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Account / Payout</span>
                  <span className="text-emerald-400 font-bold">{selectedCert.amount}</span>
                </div>
              </div>

              <p className="text-sm text-slate-300 font-sans leading-relaxed">
                {selectedCert.description}
              </p>

              <div className="pt-2 flex items-center justify-end">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2 rounded-xl bg-white text-black font-bold text-xs hover:bg-amber-400 transition-colors cursor-pointer"
                >
                  Close Inspection
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
