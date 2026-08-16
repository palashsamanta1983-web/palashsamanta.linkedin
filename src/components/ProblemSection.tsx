import React, { useState } from 'react';
import { 
  Clock, 
  MessageSquareWarning, 
  UserX, 
  FileSpreadsheet, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Zap,
  HelpCircle,
  TrendingDown
} from 'lucide-react';
import { PORTFOLIO_DATA, ProblemCardData } from '../data/portfolioData';

interface ProblemSectionProps {
  onOpenAudit: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenAudit }) => {
  const [activeCardId, setActiveCardId] = useState<string | null>(PORTFOLIO_DATA.problemCards[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock':
        return <Clock className="w-6 h-6 text-rose-500" />;
      case 'MessageSquareWarning':
        return <MessageSquareWarning className="w-6 h-6 text-amber-500" />;
      case 'UserX':
        return <UserX className="w-6 h-6 text-orange-500" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-6 h-6 text-purple-500" />;
      default:
        return <TrendingDown className="w-6 h-6 text-rose-500" />;
    }
  };

  return (
    <section id="problems" className="py-24 bg-[#F8FAFC] relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            IDENTIFYING BOTTLENECKS
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Your business may not need more people. <br className="hidden sm:inline"/>
            <span className="text-cyan-700">It may need better systems.</span>
          </h2>

          <p className="mt-4 text-[#64748B] text-base sm:text-lg leading-relaxed">
            Repetitive operational tasks and manual coordination consume hundreds of hours every month. 
            Click any problem card below to see the practical AI automation opportunity that replaces manual friction.
          </p>
        </div>

        {/* 4 Interactive Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PORTFOLIO_DATA.problemCards.map((card) => {
            const isRevealed = activeCardId === card.id;

            return (
              <div
                key={card.id}
                id={`problem-card-${card.id}`}
                onClick={() => setActiveCardId(activeCardId === card.id ? null : card.id)}
                className={`group relative rounded-[28px] backdrop-blur-xl border transition-all duration-300 p-7 cursor-pointer shadow-xl shadow-slate-200/40 hover:shadow-2xl ${
                  isRevealed
                    ? 'bg-white/90 border-[#06B6D4] ring-2 ring-cyan-500/20'
                    : 'bg-white/60 hover:bg-white/85 border-white/80 hover:border-cyan-200'
                }`}
              >
                {/* Card Top: Problem Definition */}
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/60 shadow-xs group-hover:scale-105 transition-transform flex-shrink-0">
                    {getIcon(card.iconName)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-heading font-extrabold text-[#0F172A] group-hover:text-cyan-900 transition-colors">
                        {card.title}
                      </h3>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200/60">
                        Operational Drag
                      </span>
                    </div>

                    <p className="mt-2 text-[#64748B] text-sm leading-relaxed font-normal">
                      {card.problem}
                    </p>
                  </div>
                </div>

                {/* AI Opportunity Box (Interactive Reveal) */}
                <div className="mt-6 pt-5 border-t border-slate-200/60">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
                      <span className="text-xs font-bold text-cyan-800 uppercase tracking-wide">
                        AI Opportunity
                      </span>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-cyan-50 text-[#06B6D4] border border-cyan-200/60">
                      {card.aiOpportunity.tag}
                    </span>
                  </div>

                  <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/90 p-4.5 group-hover:bg-cyan-50/50 transition-colors shadow-xs">
                    <h4 className="text-sm font-bold text-[#0F172A] flex items-center gap-1.5 font-heading">
                      <Zap className="w-4 h-4 text-[#06B6D4]" />
                      {card.aiOpportunity.title}
                    </h4>

                    <p className="mt-1.5 text-xs text-[#64748B] leading-relaxed">
                      {card.aiOpportunity.description}
                    </p>

                    <div className="mt-3.5 flex items-center justify-between pt-2.5 border-t border-slate-200/60 text-xs">
                      <span className="font-bold text-emerald-700 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        {card.aiOpportunity.impact}
                      </span>
                      
                      <span className="text-[#06B6D4] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        See Solution <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner Call to Action */}
        <div className="mt-12 p-6 sm:p-8 rounded-[32px] bg-slate-900/85 backdrop-blur-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl border border-slate-700/60">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 shadow-xs">
              <HelpCircle className="w-6 h-6 text-[#06B6D4]" />
            </div>
            <div>
              <h4 className="text-lg font-heading font-extrabold text-white">
                Recognize these bottlenecks in your business?
              </h4>
              <p className="text-slate-300 text-sm mt-0.5">
                Let's run a 20-minute operational audit to identify your highest-ROI automation quick wins.
              </p>
            </div>
          </div>

          <button
            id="problem-section-audit-btn"
            onClick={onOpenAudit}
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#06B6D4] hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/25 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Book 20-Min Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
