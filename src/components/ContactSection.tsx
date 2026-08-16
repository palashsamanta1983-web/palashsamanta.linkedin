import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy, 
  Sparkles, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenAudit: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenAudit }) => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`AI Automation Inquiry from ${name || 'Website Visitor'}`);
    const body = encodeURIComponent(
      `Hi Palash,\n\nName: ${name}\nEmail: ${email}\n\nMessage / Inquiry:\n${message}\n\nLooking forward to hearing from you!`
    );
    window.location.href = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-[#F8FAFC] relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold tracking-wider uppercase mb-3">
            <Mail className="w-3.5 h-3.5 text-cyan-600" />
            START A CONVERSATION
          </span>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0F172A] tracking-tight">
            Let's Find Your Best AI Automation Opportunity.
          </h2>

          <p className="mt-4 text-[#64748B] text-base sm:text-lg leading-relaxed">
            Have a repetitive business problem? Let's explore whether AI automation can solve it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Details & Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Email Card */}
            <div className="p-6 rounded-[24px] bg-white/65 hover:bg-white/90 backdrop-blur-xl border border-white/80 shadow-xl shadow-slate-200/40 hover:shadow-2xl transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/60 text-[#06B6D4] shadow-xs flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <a
                      id="contact-email-link"
                      href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                      className="text-sm sm:text-base font-bold text-slate-900 hover:text-cyan-600 transition-colors break-all"
                    >
                      {PORTFOLIO_DATA.profile.email}
                    </a>
                  </div>
                </div>

                <button
                  id="contact-copy-email-btn"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="p-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200/80 shadow-xs transition-colors cursor-pointer"
                >
                  {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {copied && (
                <p className="text-xs font-bold text-emerald-600 mt-2 text-right">
                  Copied to clipboard!
                </p>
              )}
            </div>

            {/* LinkedIn Card */}
            <div className="p-6 rounded-[24px] bg-white/65 hover:bg-white/90 backdrop-blur-xl border border-white/80 shadow-xl shadow-slate-200/40 hover:shadow-2xl transition-all">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/60 text-blue-600 shadow-xs flex-shrink-0">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      LinkedIn Profile
                    </span>
                    <a
                      id="contact-linkedin-link"
                      href={PORTFOLIO_DATA.profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-bold text-slate-900 hover:text-cyan-600 transition-colors"
                    >
                      Palash Samanta
                    </a>
                  </div>
                </div>

                <a
                  href={PORTFOLIO_DATA.profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-bold transition-colors shadow-xs"
                >
                  <span>Connect</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-[24px] bg-white/65 backdrop-blur-xl border border-white/80 shadow-xl shadow-slate-200/40">
              <div className="flex items-center gap-3.5">
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/60 text-teal-600 shadow-xs flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Location
                  </span>
                  <p className="text-sm sm:text-base font-bold text-slate-900">
                    {PORTFOLIO_DATA.profile.location}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">
                    Available for both remote worldwide consulting & local consultations
                  </p>
                </div>
              </div>
            </div>

            {/* Quick 20-Min Audit Banner */}
            <div className="p-7 rounded-[28px] bg-slate-900/85 backdrop-blur-2xl text-white border border-slate-700/60 shadow-xl">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                Fastest Response
              </span>
              <h3 className="font-heading font-extrabold text-lg text-white mb-2">
                Need an immediate operational assessment?
              </h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Book a 20-minute slot to review your bottlenecks and get a prioritized automation plan.
              </p>
              <button
                id="contact-audit-trigger-btn"
                onClick={onOpenAudit}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#06B6D4] hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-cyan-500/25 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Free 20-Min Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Quick Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/75 backdrop-blur-2xl rounded-[32px] p-8 sm:p-10 border border-white/90 shadow-2xl shadow-slate-200/50">
              <div className="flex items-center gap-2 text-cyan-700 text-xs font-bold uppercase tracking-wider mb-2">
                <MessageSquare className="w-4 h-4 text-[#06B6D4]" />
                <span>Send a Direct Message</span>
              </div>

              <h3 className="text-2xl font-heading font-extrabold text-[#0F172A] mb-2">
                Tell Me About Your Business Challenge
              </h3>

              <p className="text-[#64748B] text-sm mb-6 font-normal">
                Fill out this quick form and it will prepare a pre-filled email to <strong className="text-slate-800 font-semibold">{PORTFOLIO_DATA.profile.email}</strong>.
              </p>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4.5 py-3.5 rounded-xl bg-white/80 backdrop-blur-md border border-slate-200/80 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#06B6D4] focus:bg-white text-sm shadow-xs transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@business.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4.5 py-3.5 rounded-xl bg-white/80 backdrop-blur-md border border-slate-200/80 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#06B6D4] focus:bg-white text-sm shadow-xs transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    What would you like to automate? *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your current manual tasks, response delays, or tools (e.g., 'We take 4 hours to reply to leads on our website and want an automated qualifier...')"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4.5 py-3.5 rounded-xl bg-white/80 backdrop-blur-md border border-slate-200/80 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#06B6D4] focus:bg-white text-sm shadow-xs transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-500 font-medium">
                    🔒 Direct connection · No spam ever
                  </span>

                  <button
                    id="contact-form-submit-btn"
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#06B6D4] hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Palash</span>
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
