import React from 'react';
import { 
  Cog, 
  Bot, 
  Target, 
  BarChart3, 
  Sparkles 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const TrustStrip: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Cog: <Cog className="w-5 h-5 text-cyan-500" />,
    Bot: <Bot className="w-5 h-5 text-teal-500" />,
    Target: <Target className="w-5 h-5 text-blue-500" />,
    BarChart3: <BarChart3 className="w-5 h-5 text-indigo-500" />,
    Sparkles: <Sparkles className="w-5 h-5 text-cyan-400" />
  };

  return (
    <section className="bg-white/40 backdrop-blur-xl border-y border-white/60 py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          <div className="flex-shrink-0">
            <span className="text-xs font-bold text-[#64748B] uppercase tracking-widest block font-heading">
              Core Capabilities
            </span>
            <span className="text-sm font-extrabold text-[#0F172A]">
              Practical AI Solutions
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 flex-1">
            {PORTFOLIO_DATA.trustStrip.map((item, idx) => (
              <div
                key={item.title}
                id={`trust-strip-item-${idx}`}
                className="group p-3.5 rounded-2xl bg-white/65 hover:bg-white/95 backdrop-blur-md border border-white/80 hover:border-cyan-300 shadow-xs hover:shadow-md transition-all duration-200 cursor-default"
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="p-1.5 rounded-xl bg-cyan-50 border border-cyan-100 group-hover:scale-110 transition-transform flex-shrink-0">
                    {iconMap[item.icon] || <Sparkles className="w-4 h-4 text-[#06B6D4]" />}
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#0F172A] transition-colors leading-snug">
                    {item.title}
                  </span>
                </div>
                <p className="text-[11px] text-[#64748B] line-clamp-1 group-hover:text-slate-700 transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
