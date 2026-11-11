import React, { useState } from 'react';
import { X, Check, Send, Sparkles } from 'lucide-react';
import { ServiceId } from '../types';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: ServiceId;
}

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({
  isOpen,
  onClose,
  defaultService
}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>(
    defaultService ? [defaultService] : ['web-development']
  );
  const [budget, setBudget] = useState('$5k – $10k');
  const [timeline, setTimeline] = useState('2 – 4 Weeks');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const services = [
    { id: 'forex-trading', label: 'Forex Market Analysis & Strategy' },
    { id: 'ai-video', label: 'AI Video Creation (Realify AI)' },
    { id: 'prompt-engineering', label: 'AI Prompt Engineering & Workflows' },
    { id: 'web-development', label: 'Web Development & UI' }
  ];

  const budgetOptions = ['$3k – $5k', '$5k – $10k', '$10k – $25k', '$25k+'];
  const timelineOptions = ['Urgent (< 2 wks)', '2 – 4 Weeks', '1 – 2 Months', 'Flexible'];

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? (prev.length > 1 ? prev.filter((s) => s !== id) : prev) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#11141c] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 text-white max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/30">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-display text-white mb-2">Message Dispatched!</h3>
            <p className="text-slate-300 text-sm max-w-md mb-6 leading-relaxed">
              Thanks for reaching out, <span className="text-amber-400 font-semibold">{name || 'friend'}</span>. I will review your project details and get back to you at <span className="text-white underline">{email || 'your email'}</span> within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-white text-black font-semibold rounded-xl hover:bg-slate-200 transition-colors text-sm"
            >
              Back to Portfolio
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 mb-2 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Start a collaboration
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white">
                Tell me about your project.
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Choose the services you need and ballpark scope. Let's create something extraordinary.
              </p>
            </div>

            {/* Service selector */}
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                1. What do you need help with?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {services.map((s) => {
                  const isChecked = selectedServices.includes(s.id);
                  return (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => toggleService(s.id)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs font-medium transition-all text-left ${
                        isChecked
                          ? 'border-amber-400 bg-amber-400/10 text-white shadow-sm'
                          : 'border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-white/20'
                      }`}
                    >
                      <span>{s.label}</span>
                      <span
                        className={`w-4 h-4 rounded flex items-center justify-center text-[10px] border ${
                          isChecked
                            ? 'bg-amber-400 text-black border-amber-400 font-bold'
                            : 'border-white/20'
                        }`}
                      >
                        {isChecked && '✓'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                2. Approximate Budget
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {budgetOptions.map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => setBudget(opt)}
                    className={`py-2 px-3 rounded-lg border text-xs font-mono transition-all text-center ${
                      budget === opt
                        ? 'border-cyan-400 bg-cyan-400/10 text-cyan-300 font-semibold'
                        : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                3. Expected Timeline
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {timelineOptions.map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => setTimeline(opt)}
                    className={`py-2 px-2.5 rounded-lg border text-xs font-mono transition-all text-center truncate ${
                      timeline === opt
                        ? 'border-violet-400 bg-violet-400/10 text-violet-300 font-semibold'
                        : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Vance"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-amber-400 focus:outline-none text-sm text-white placeholder-slate-500"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-amber-400 focus:outline-none text-sm text-white placeholder-slate-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                Brief Project Overview
              </label>
              <textarea
                rows={3}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Tell me a bit about what you want to build, key goals, and any reference links..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 focus:border-amber-400 focus:outline-none text-sm text-white placeholder-slate-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-bold rounded-xl shadow-lg shadow-amber-500/20 transition-all text-sm active:scale-[0.99]"
            >
              <Send className="w-4 h-4" />
              Send Project Proposal
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
