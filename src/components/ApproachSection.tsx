import React, { useState } from 'react';
import { 
  Search, 
  Target, 
  Wrench, 
  BarChart, 
  ArrowRight, 
  CheckCircle, 
  Sparkles,
  FileCheck2
} from 'lucide-react';
import { PORTFOLIO_DATA, ApproachStep } from '../data/portfolioData';

interface ApproachSectionProps {
  onOpenAudit: () => void;
}

export const ApproachSection: React.FC<ApproachSectionProps> = ({ onOpenAudit }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-6 h-6 text-cyan-600" />;
      case 1:
        return <Target className="w-6 h-6 text-teal-600" />;
      case 2:
        return <Wrench className="w-6 h-6 text-blue-600" />;
      case 3:
        return <BarChart className="w-6 h-6 text-indigo-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-600" />;
    }
  };

  return (
    <section id="process" className="py-24 bg-[#F8FAFC] relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            METHODOLOGY
          </span>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0F172A] tracking-tight leading-tight">
            From Business Problem → AI Solution
          </h2>

          <p className="mt-4 text-[#64748B] text-base sm:text-lg leading-relaxed">
            A practical, four-step framework designed to deliver rapid operational ROI without disruptive restructuring or fragile complexity.
          </p>
        </div>

        {/* 4 Steps Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.approachSteps.map((step, idx) => {
            const isActive = activeStepIndex === idx;

            return (
              <div
                key={step.number}
                id={`approach-step-${step.number}`}
                onClick={() => setActiveStepIndex(idx)}
                className={`group rounded-[28px] p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between border backdrop-blur-xl ${
                  isActive
                    ? 'bg-white/95 border-[#06B6D4] ring-2 ring-cyan-500/20 shadow-2xl shadow-slate-200/60'
                    : 'bg-white/65 hover:bg-white/90 border-white/80 hover:border-cyan-200 shadow-xl shadow-slate-200/40'
                }`}
              >
                <div>
                  {/* Top Header: Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-heading font-extrabold text-slate-300 group-hover:text-[#06B6D4] transition-colors">
                      {step.number}
                    </span>

                    <div className="p-3.5 rounded-2xl bg-white border border-slate-200/60 shadow-xs group-hover:bg-cyan-50 group-hover:border-cyan-200 transition-colors">
                      {getStepIcon(idx)}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-heading font-extrabold text-[#0F172A] mb-1">
                    {step.title}
                  </h3>

                  <span className="text-xs font-bold text-cyan-700 block mb-3">
                    {step.tagline}
                  </span>

                  <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Activities List */}
                  <div className="space-y-2 pt-3 border-t border-slate-200/60">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Core Activities
                    </span>
                    {step.activities.map((act, actIdx) => (
                      <div key={actIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-[#06B6D4] mt-0.5 flex-shrink-0" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverable Footer */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 bg-white/70 backdrop-blur-md -mx-7 -mb-7 p-5 rounded-b-[28px]">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Key Deliverable
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F172A]">
                    <FileCheck2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span className="line-clamp-1">{step.deliverable}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Audit Callout Banner */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/70 backdrop-blur-xl p-3 sm:pr-6 rounded-2xl border border-white/80 shadow-xl shadow-slate-200/40">
            <span className="text-sm text-slate-700 font-semibold px-3">
              Want to see what Step 01 (Identify) looks like for your specific business?
            </span>
            <button
              id="approach-cta-btn"
              onClick={onOpenAudit}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#06B6D4] hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-cyan-500/20 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Get Free 20-Min Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
