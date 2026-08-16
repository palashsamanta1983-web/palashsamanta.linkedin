import React from 'react';
import { 
  Briefcase, 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#F8FAFC] relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold tracking-wider uppercase mb-3">
            <Briefcase className="w-3.5 h-3.5 text-cyan-600" />
            BACKGROUND & TRACK RECORD
          </span>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0F172A] tracking-tight">
            Professional Experience
          </h2>

          <p className="mt-4 text-[#64748B] text-base sm:text-lg leading-relaxed">
            Real-world operations and financial correspondent background providing the grounded business understanding required for high-impact AI consulting.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          
          {/* Vertical line indicator */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-slate-200" />

          {PORTFOLIO_DATA.experience.map((item, idx) => {
            const isCurrent = idx === 0;

            return (
              <div 
                key={item.role + item.company}
                id={`exp-card-${idx}`}
                className="relative flex flex-col md:flex-row gap-6 items-start"
              >
                {/* Timeline node icon */}
                <div className="hidden md:flex w-16 h-16 rounded-2xl bg-white border-2 border-cyan-500 shadow-md items-center justify-center text-cyan-600 z-10 flex-shrink-0">
                  {isCurrent ? <Sparkles className="w-7 h-7 text-cyan-500" /> : <Building2 className="w-7 h-7 text-slate-600" />}
                </div>

                {/* Experience Content Card */}
                <div className={`flex-1 rounded-[28px] p-8 border backdrop-blur-xl transition-all duration-300 ${
                  isCurrent 
                    ? 'bg-white/90 border-[#06B6D4] shadow-2xl shadow-slate-200/50 ring-2 ring-cyan-500/20' 
                    : 'bg-white/65 hover:bg-white/85 border-white/80 shadow-xl shadow-slate-200/30'
                }`}>
                  
                  {/* Top metadata */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200">
                        {item.type}
                      </span>
                      {isCurrent && (
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Current Focus
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Role and Company */}
                  <h3 className="text-2xl font-heading font-extrabold text-[#0F172A]">
                    {item.role}
                  </h3>

                  <div className="flex items-center gap-3 text-sm font-bold text-cyan-700 mt-1 mb-4">
                    <span>{item.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-slate-500 font-medium">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[#64748B] text-sm leading-relaxed mb-5 font-normal">
                    {item.description}
                  </p>

                  {/* Key Solutions or Highlights */}
                  {item.keySolutions && (
                    <div className="pt-4 border-t border-slate-200/60">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
                        Key Client Solutions Delivered
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {item.keySolutions.map((sol, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                            <CheckCircle className="w-3.5 h-3.5 text-[#06B6D4] flex-shrink-0" />
                            <span>{sol}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.highlights && (
                    <div className="pt-4 border-t border-slate-200/60">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
                        Operational Grounding
                      </span>
                      <div className="space-y-2">
                        {item.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                            <CheckCircle className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
