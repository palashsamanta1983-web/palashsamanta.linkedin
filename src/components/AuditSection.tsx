import React from 'react';
import { 
  Calendar, 
  Sparkles, 
  ArrowRight, 
  Linkedin, 
  CheckCircle2, 
  Mail, 
  Clock,
  ShieldCheck
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface AuditSectionProps {
  onOpenAudit: () => void;
}

export const AuditSection: React.FC<AuditSectionProps> = ({ onOpenAudit }) => {
  const emailSubject = encodeURIComponent("Free 20-Min AI Readiness Audit Request - Palash Samanta");
  const emailBody = encodeURIComponent(
    `Hi Palash,\n\nI would like to book a Free 20-Minute AI Readiness Audit for my business.\n\nBusiness Name:\nType of Service / Industry:\nOur Biggest Operational Bottleneck:\nPreferred Days / Times:\n\nLooking forward to speaking with you!\n`
  );
  const directMailtoUrl = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <section id="audit" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden bg-grid-dark-pattern">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-[32px] bg-slate-900/85 backdrop-blur-2xl border border-slate-700/60 p-8 sm:p-12 lg:p-14 shadow-2xl relative">
          
          <div className="text-center max-w-3xl mx-auto space-y-6">
            
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              100% FREE · NO OBLIGATION
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Not Sure Where AI Can Help Your Business?
            </h2>

            {/* Supporting text */}
            <p className="text-slate-300 text-base sm:text-xl leading-relaxed">
              I'll identify your biggest AI automation opportunities and show you where you can save time and reduce operational costs.
            </p>

            {/* What you get in 20 minutes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
              <div className="p-5 rounded-2xl bg-slate-800/70 backdrop-blur-md border border-slate-700/60 shadow-xs">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm mb-1.5">
                  <Clock className="w-4 h-4" />
                  <span>1. Bottleneck Audit</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Review your manual tasks and see where time is leaking.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-800/70 backdrop-blur-md border border-slate-700/60 shadow-xs">
                <div className="flex items-center gap-2 text-teal-400 font-bold text-sm mb-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>2. Practical AI Map</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Identify zero-maintenance tools with fastest ROI.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-800/70 backdrop-blur-md border border-slate-700/60 shadow-xs">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>3. Action Roadmap</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  A clear plan you can execute immediately with confidence.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="audit-section-modal-trigger-btn"
                onClick={onOpenAudit}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-xl bg-[#06B6D4] hover:bg-cyan-400 text-slate-950 font-bold text-base shadow-xl shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Book My Free 20-Min AI Readiness Audit</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                id="audit-section-mailto-link"
                href={directMailtoUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md font-semibold text-sm transition-all"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Direct Email Request</span>
              </a>
            </div>

            {/* LinkedIn Link */}
            <div className="pt-4 flex items-center justify-center">
              <a
                id="audit-section-linkedin-link"
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-300 text-sm font-medium transition-colors"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span>Or connect with me on LinkedIn →</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
