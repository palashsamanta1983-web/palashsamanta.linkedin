import React, { useState } from 'react';
import { 
  GitBranch, 
  Bot, 
  Target, 
  Cpu, 
  Layers, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Sparkles,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import { PORTFOLIO_DATA, ServiceData } from '../data/portfolioData';

interface ServicesSectionProps {
  onOpenAudit: (initialService?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenAudit }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('workflow-automation');

  const mainServices = PORTFOLIO_DATA.services.slice(0, 4);
  const fifthService = PORTFOLIO_DATA.services[4];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'GitBranch':
        return <GitBranch className="w-6 h-6 text-cyan-600" />;
      case 'Bot':
        return <Bot className="w-6 h-6 text-teal-600" />;
      case 'Target':
        return <Target className="w-6 h-6 text-blue-600" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-indigo-600" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-cyan-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-600" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            PRACTICAL CONSULTING SERVICES
          </span>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0F172A] tracking-tight leading-tight">
            AI Automation Solutions That Solve <br className="hidden sm:inline"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700">
              Real Business Problems
            </span>
          </h2>

          <p className="mt-4 text-[#64748B] text-base sm:text-lg leading-relaxed">
            Every service is engineered around measurable operational outcomes: reducing manual repetitive tasks, speeding up client communications, and keeping ongoing maintenance simple.
          </p>
        </div>

        {/* 4 Primary Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {mainServices.map((service) => {
            const isSelected = selectedServiceId === service.id;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                onClick={() => setSelectedServiceId(service.id)}
                className={`group rounded-[28px] p-8 border transition-all duration-300 relative flex flex-col justify-between cursor-pointer backdrop-blur-xl ${
                  isSelected
                    ? 'bg-slate-900/90 text-white border-cyan-500/60 shadow-2xl shadow-slate-900/20'
                    : 'bg-white/65 hover:bg-white/95 text-[#0F172A] border-white/80 hover:border-cyan-200 shadow-xl shadow-slate-200/40 hover:shadow-2xl'
                }`}
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-2xl font-heading font-extrabold ${isSelected ? 'text-[#06B6D4]' : 'text-slate-400'}`}>
                      {service.number}
                    </span>

                    <div className={`p-3.5 rounded-2xl ${isSelected ? 'bg-slate-800/80 border border-slate-700 text-[#06B6D4]' : 'bg-white border border-slate-200/60 shadow-xs'}`}>
                      {getServiceIcon(service.iconName)}
                    </div>
                  </div>

                  {/* Title & Summary */}
                  <h3 className={`text-2xl font-heading font-extrabold mb-3 ${isSelected ? 'text-white' : 'text-[#0F172A]'}`}>
                    {service.title}
                  </h3>

                  <p className={`text-base leading-relaxed mb-6 ${isSelected ? 'text-slate-300' : 'text-[#64748B]'}`}>
                    {service.summary}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-200/40">
                    <span className={`text-xs font-bold uppercase tracking-wider block ${isSelected ? 'text-[#06B6D4]' : 'text-slate-500'}`}>
                      Key Deliverables
                    </span>
                    
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isSelected ? 'text-[#06B6D4]' : 'text-[#06B6D4]'}`} />
                        <span className={isSelected ? 'text-slate-200 font-medium' : 'text-slate-750 font-medium'}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Impact & Action Footer */}
                <div className={`pt-4 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto ${isSelected ? 'border-slate-800' : 'border-slate-200/80'}`}>
                  <div className="flex items-center gap-2 text-xs">
                    <Clock className={`w-4 h-4 ${isSelected ? 'text-[#06B6D4]' : 'text-slate-400'}`} />
                    <span className={isSelected ? 'text-slate-300 font-semibold' : 'text-[#64748B] font-semibold'}>
                      {service.timeframe}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenAudit(service.title);
                    }}
                    className={`inline-flex items-center gap-2 text-sm font-bold transition-all px-5 py-2.5 rounded-xl cursor-pointer ${
                      isSelected
                        ? 'bg-[#06B6D4] hover:bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/25'
                        : 'text-cyan-800 hover:text-cyan-950 bg-white hover:bg-cyan-50 border border-slate-200 shadow-xs'
                    }`}
                  >
                    <span>Inquire Solution</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* 5th Service Card: Business Process Optimization */}
        <div className="rounded-[32px] bg-slate-900/85 backdrop-blur-2xl text-white p-8 sm:p-10 border border-slate-700/60 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 uppercase tracking-wider">
                  Specialized Service
                </span>
                <span className="text-xs text-slate-400 font-medium">Foundation for all automation</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white flex items-center gap-3">
                <Layers className="w-7 h-7 text-[#06B6D4] flex-shrink-0" />
                {fifthService.title}
              </h3>

              <p className="text-slate-300 text-base leading-relaxed max-w-2xl">
                {fifthService.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {fifthService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#06B6D4] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end gap-4 border-t lg:border-t-0 lg:border-l border-slate-800/80 pt-6 lg:pt-0 lg:pl-8">
              <div className="text-left lg:text-right">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">
                  Outcome
                </span>
                <span className="text-sm font-bold text-emerald-400">
                  Maximum ROI & Zero Wasted Software
                </span>
              </div>

              <button
                id="service-fifth-audit-btn"
                onClick={() => onOpenAudit(fifthService.title)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#06B6D4] hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/25 transition-all cursor-pointer"
              >
                <span>Request Process Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
