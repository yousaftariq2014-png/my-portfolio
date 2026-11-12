import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Video, Check, ArrowRight, ShieldCheck, Sparkles, Globe, MessageSquare } from 'lucide-react';
import { CREATOR_INFO } from '../data/portfolioData';

interface StrategyCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenProjectProposal?: () => void;
}

export const StrategyCallModal: React.FC<StrategyCallModalProps> = ({
  isOpen,
  onClose,
  onOpenProjectProposal
}) => {
  // Generate next 7 available business days
  const [availableDays, setAvailableDays] = useState<{ dayName: string; dateStr: string; fullDate: string }[]>([]);
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('03:00 PM');
  const [timeZone, setTimeZone] = useState('Local Time');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Full-Stack Web App');
  const [projectNote, setProjectNote] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setTimeZone(tz);
    } catch {
      setTimeZone('GMT+5 (PKT)');
    }

    const days = [];
    const today = new Date();
    let added = 0;
    let offset = 1;

    while (added < 6) {
      const d = new Date(today);
      d.setDate(today.getDate() + offset);
      // Skip Sundays
      if (d.getDay() !== 0) {
        const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
        const dateStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        const fullDate = d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
        days.push({ dayName, dateStr, fullDate });
        added++;
      }
      offset++;
    }
    setAvailableDays(days);
  }, []);

  if (!isOpen) return null;

  const timeSlots = [
    '10:30 AM',
    '01:00 PM',
    '03:00 PM',
    '05:30 PM',
    '08:00 PM',
    '09:30 PM'
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  const selectedDateInfo = availableDays[selectedDayIndex] || { fullDate: 'Selected Date', dateStr: '', dayName: '' };

  const whatsappConfirmationUrl = `https://wa.me/923114134668?text=${encodeURIComponent(
    `Hi Yousaf, I just scheduled a 15-minute Strategy Call for ${selectedDateInfo.fullDate} at ${selectedTimeSlot} (${timeZone}). Name: ${name}, Project: ${projectType}. Looking forward to connecting!`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0f1218] border border-white/10 rounded-2xl shadow-2xl text-white max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-20 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isBooked ? (
          /* Booking Confirmation State */
          <div className="p-6 sm:p-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/30">
              <Check className="w-8 h-8" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Call Slot Reserved
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-2">
              You're on the Calendar, {name || 'Friend'}!
            </h3>

            <p className="text-slate-300 text-sm max-w-md mb-6 leading-relaxed">
              A calendar invitation has been prepared for <span className="text-amber-400 font-semibold">{email}</span>. Yousaf will meet you on Google Meet.
            </p>

            {/* Call Details Card */}
            <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-xl p-4 mb-6 text-left space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-white/10 text-slate-400">
                <span className="text-slate-300 font-semibold">15-Min Strategy Session</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <Video className="w-3 h-3" /> Google Meet
                </span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{selectedDateInfo.fullDate}</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{selectedTimeSlot} ({timeZone})</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Globe className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Focus: <strong className="text-slate-200">{projectType}</strong></span>
              </div>
            </div>

            {/* Quick WhatsApp 1-Click Confirmation */}
            <div className="w-full max-w-md space-y-3">
              <a
                href={whatsappConfirmationUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm Instantly via WhatsApp (+92 311 4134668)</span>
              </a>

              <button
                onClick={() => {
                  setIsBooked(false);
                  onClose();
                }}
                className="w-full py-2.5 px-4 bg-white/5 hover:bg-white/10 text-slate-300 font-medium rounded-xl text-xs transition-colors"
              >
                Close & Return to Portfolio
              </button>
            </div>
          </div>
        ) : (
          /* Booking Scheduler Form */
          <div className="p-6 sm:p-8">
            {/* Header */}
            <div className="mb-6 pr-8">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-mono text-amber-400 mb-2">
                <Video className="w-3.5 h-3.5" />
                <span>1-on-1 Video Consultation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white">
                Book a 15-Minute Strategy Call
              </h2>
              <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                No high-pressure sales pitch. We'll audit your project requirements, explore technical feasibility, and map out realistic timeline & budget.
              </p>
            </div>

            {/* Value Highlights Pill Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6 text-xs bg-white/5 p-3 rounded-xl border border-white/5">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">01.</span>
                <span className="text-slate-300">Technical Architecture Review</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">02.</span>
                <span className="text-slate-300">Milestone & Cost Breakdown</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">03.</span>
                <span className="text-slate-300">Actionable Execution Plan</span>
              </div>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-5">
              {/* Step 1: Select Day */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>1. Select Day</span>
                  </label>
                  <span className="text-[11px] font-mono text-slate-500">
                    {timeZone}
                  </span>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {availableDays.map((d, idx) => {
                    const isSelected = selectedDayIndex === idx;
                    return (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => setSelectedDayIndex(idx)}
                        className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'border-amber-400 bg-amber-400 text-black font-bold shadow-md shadow-amber-400/20'
                            : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10'
                        }`}
                      >
                        <div className="text-[10px] uppercase font-mono tracking-wider opacity-80">
                          {d.dayName}
                        </div>
                        <div className="text-sm font-bold mt-0.5">
                          {d.dateStr}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Select Time Slot */}
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>2. Select Time (15 Minutes)</span>
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {timeSlots.map((slot) => {
                    const isSelected = selectedTimeSlot === slot;
                    return (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`py-2 px-1 text-center rounded-lg border text-xs font-mono transition-all cursor-pointer ${
                          isSelected
                            ? 'border-cyan-400 bg-cyan-400/20 text-cyan-300 font-bold ring-1 ring-cyan-400'
                            : 'border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-white/20'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Project Type */}
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  3. What is the primary focus?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    'Full-Stack Web App',
                    'Academic Research / Coursework',
                    'AI Workflow / Automation',
                    'Forex / Prop Strategy',
                    'Brand & UI Design'
                  ].map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setProjectType(type)}
                      className={`p-2 rounded-lg border text-xs font-medium text-left truncate transition-all cursor-pointer ${
                        projectType === type
                          ? 'border-amber-400 bg-amber-400/10 text-white font-semibold'
                          : 'border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-white/20'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. David Vance"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-amber-400 focus:outline-none text-xs sm:text-sm text-white placeholder-slate-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                    Your Email (For Calendar Invite) *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="david@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-amber-400 focus:outline-none text-xs sm:text-sm text-white placeholder-slate-500"
                  />
                </div>
              </div>

              {/* Optional Note */}
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                  Anything specific you'd like to review? (Optional)
                </label>
                <input
                  type="text"
                  value={projectNote}
                  onChange={(e) => setProjectNote(e.target.value)}
                  placeholder="e.g. Looking to rebuild current MVP on Next.js / integrate Gemini API"
                  className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 focus:border-amber-400 focus:outline-none text-xs sm:text-sm text-white placeholder-slate-500"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-extrabold rounded-xl shadow-xl shadow-amber-500/20 transition-all text-sm active:scale-[0.99] cursor-pointer"
              >
                <span>Confirm Call · {selectedDateInfo.dayName}, {selectedTimeSlot}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Footer Trust Markers */}
              <div className="flex flex-col sm:flex-row items-center justify-between pt-2 text-[11px] font-mono text-slate-500 border-t border-white/5 gap-2">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>100% Free Consultation · Zero Obligation</span>
                </div>
                {onOpenProjectProposal && (
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenProjectProposal();
                    }}
                    className="text-amber-400 hover:underline cursor-pointer"
                  >
                    Prefer to send a written brief instead? →
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
