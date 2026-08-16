import React from 'react';
import { 
  Sparkles, 
  CheckCircle, 
  Compass, 
  HeartHandshake, 
  ShieldCheck, 
  Zap,
  Quote
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold tracking-wider uppercase mb-3">
                <Compass className="w-3.5 h-3.5 text-cyan-600" />
                ABOUT PALASH SAMANTA
              </span>

              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0F172A] tracking-tight">
                Practical AI. Business First.
              </h2>
            </div>

            {/* Core Highlight Quote */}
            <div className="p-6 rounded-[24px] bg-white/75 backdrop-blur-xl border border-white/90 shadow-xl shadow-slate-200/40 text-slate-800">
              <Quote className="w-6 h-6 text-[#06B6D4] mb-2 opacity-80" />
              <p className="text-base sm:text-lg font-heading font-extrabold text-slate-900 leading-snug">
                “{PORTFOLIO_DATA.profile.aboutConcept}”
              </p>
            </div>

            <p className="text-[#64748B] text-base leading-relaxed">
              {PORTFOLIO_DATA.profile.aboutDetails}
            </p>

            {/* Focus Areas List */}
            <div className="pt-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                Core Specialization Areas
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PORTFOLIO_DATA.profile.focusAreas.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/60 backdrop-blur-md border border-white/80 text-sm text-slate-800 font-semibold shadow-xs">
                    <CheckCircle className="w-4 h-4 text-[#06B6D4] flex-shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Personal Brand Philosophy & Trust Card */}
          <div className="lg:col-span-5">
            <div className="rounded-[32px] bg-slate-900/85 backdrop-blur-2xl text-white p-8 sm:p-10 border border-slate-700/60 shadow-2xl relative overflow-hidden">
              
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3.5 pb-5 border-b border-slate-800/80 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-[#06B6D4] font-extrabold text-xl shadow-xs">
                  P
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-lg text-white">
                    Palash Samanta
                  </h3>
                  <span className="text-xs text-slate-400 block font-medium">
                    Burdwan, West Bengal, India
                  </span>
                </div>
              </div>

              {/* Personal Brand Philosophy Section */}
              <div className="space-y-4 mb-6">
                <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block">
                  Personal Philosophy & Mindset
                </span>

                <div className="space-y-3 p-5 rounded-2xl bg-slate-800/70 backdrop-blur-md border border-slate-700/60 text-slate-200 text-sm">
                  {PORTFOLIO_DATA.profile.philosophy.map((line, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#06B6D4]" />
                      <span className="font-semibold italic text-slate-200">{line}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Approach principles */}
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Pragmatic execution:</strong> We only build automations that generate positive business ROI.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Zap className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Zero vendor lock-in:</strong> Designed on stable, maintainable industry-standard tools.</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
