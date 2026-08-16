import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Copy, 
  Calendar, 
  Mail, 
  Linkedin,
  Clock,
  ArrowRight
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const AuditModal: React.FC<AuditModalProps> = ({ 
  isOpen, 
  onClose, 
  preselectedService = '' 
}) => {
  const [businessName, setBusinessName] = useState('');
  const [industry, setIndustry] = useState('Service Agency / Professional Services');
  const [bottleneck, setBottleneck] = useState(
    preselectedService 
      ? `Interest in: ${preselectedService}` 
      : 'Slow response times & lead follow-up'
  );
  const [teamSize, setTeamSize] = useState('1-10');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const emailSubject = encodeURIComponent(
    `AI Readiness Audit Request - ${businessName || 'My Business'}`
  );

  const emailBodyText = `Hi Palash,

I would like to book a Free 20-Minute AI Readiness Audit for my business.

Details:
- Business Name: ${businessName || 'Not specified'}
- Industry / Business Type: ${industry}
- Primary Operational Bottleneck: ${bottleneck}
- Team Size: ${teamSize}
- Additional Notes: ${notes || 'None'}

Please let me know your available slots this week.

Thanks!`;

  const emailBody = encodeURIComponent(emailBodyText);
  const mailtoUrl = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${emailSubject}&body=${emailBody}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(emailBodyText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-xl w-full p-6 sm:p-8 text-white shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Free 20-Minute Consultation</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
          Book Your AI Readiness Audit
        </h3>

        <p className="text-slate-300 text-sm mt-2 mb-6">
          Fill in a few quick details below. This will generate a tailored audit request directly to <strong className="text-cyan-400 font-semibold">{PORTFOLIO_DATA.profile.email}</strong>.
        </p>

        {/* Interactive Form */}
        <div className="space-y-4 text-sm">
          
          {/* Business Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wide mb-1.5">
              Business / Organization Name
            </label>
            <input
              type="text"
              placeholder="e.g. Acme Consultancy, Studio Design"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm"
            />
          </div>

          {/* Industry Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wide mb-1.5">
                Industry / Domain
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-cyan-400 text-sm"
              >
                <option value="Service Agency / Professional Services">Service Agency / Consulting</option>
                <option value="Finance / Banking / Insurance">Finance / Banking / Accounting</option>
                <option value="Healthcare / Clinics / Wellness">Healthcare / Clinics</option>
                <option value="Real Estate / Property">Real Estate & Construction</option>
                <option value="E-Commerce / Retail">E-Commerce & Retail</option>
                <option value="Other Service Business">Other Service Business</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wide mb-1.5">
                Team Size
              </label>
              <select
                value={teamSize}
                onChange={(e) => setTeamSize(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-cyan-400 text-sm"
              >
                <option value="1-5 employees">1–5 employees</option>
                <option value="6-20 employees">6–20 employees</option>
                <option value="21-50 employees">21–50 employees</option>
                <option value="50+ employees">50+ employees</option>
              </select>
            </div>
          </div>

          {/* Primary Bottleneck */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wide mb-1.5">
              Primary Bottleneck to Solve
            </label>
            <select
              value={bottleneck}
              onChange={(e) => setBottleneck(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-cyan-400 text-sm"
            >
              <option value="Slow response times & lead follow-up">Slow response times & lead follow-up</option>
              <option value="High volume of repetitive support inquiries">High volume of repetitive customer support</option>
              <option value="Manual data entry across spreadsheets & CRM">Manual data entry across spreadsheets & CRM</option>
              <option value="Manual reporting & internal coordination">Manual reporting & internal coordination</option>
              <option value="Need an AI Chatbot / Internal Agent">Custom AI Chatbot or Document Agent</option>
              <option value="Full Workflow Automation Assessment">Full Workflow Automation Assessment</option>
            </select>
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wide mb-1.5">
              Quick Notes (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="What tools do you currently use? (e.g. Gmail, WhatsApp, Excel, HubSpot...)"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm resize-none"
            />
          </div>

        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
          
          <a
            id="audit-modal-send-email-btn"
            href={mailtoUrl}
            onClick={() => {
              setTimeout(onClose, 500);
            }}
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all text-center"
          >
            <Mail className="w-4 h-4" />
            <span>Send Email Request Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            id="audit-modal-copy-btn"
            onClick={handleCopy}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400" />
                <span>Copy Text</span>
              </>
            )}
          </button>

        </div>

        {/* Footer info */}
        <div className="mt-4 text-center">
          <p className="text-xs text-slate-400 flex items-center justify-center gap-1">
            <span>Direct contact:</span>
            <a href={`mailto:${PORTFOLIO_DATA.profile.email}`} className="text-cyan-400 hover:underline">
              {PORTFOLIO_DATA.profile.email}
            </a>
          </p>
        </div>

      </div>
    </div>
  );
};
