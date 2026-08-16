import React, { useState } from 'react';
import { 
  ArrowRight, 
  ChevronDown, 
  Sparkles, 
  CheckCircle, 
  Zap, 
  Layers, 
  Cpu, 
  TrendingUp, 
  AlertCircle,
  Activity,
  Clock,
  Send
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit }) => {
  const [activeStage, setActiveStage] = useState<number>(2); // 0: Problem, 1: AI Opportunity, 2: Automation, 3: Better Operations
  const [scenarioIndex, setScenarioIndex] = useState<number>(0);

  const heroScenarios = [
    {
      title: "Lead Follow-Up",
      problem: "Enquiries sit in inbox for 4+ hours, losing deals to fast competitors.",
      aiOpportunity: "Instant AI extraction & qualification via Webhook & LLM pipeline.",
      automation: "Auto-qualified lead synced to CRM + Instant WhatsApp & email booking link.",
      betterOperations: "100% response in < 15 seconds, 3x increase in qualified bookings."
    },
    {
      title: "Customer Support",
      problem: "Staff copy-pasting same 10 FAQ answers daily, creating tickets backlog.",
      aiOpportunity: "Custom company knowledge-base assistant with smart escalation.",
      automation: "Instant 24/7 AI answering with human handoff for high-value client issues.",
      betterOperations: "75% ticket reduction for routine queries, zero human wait time."
    },
    {
      title: "Operations & Reporting",
      problem: "15 hours/week spent compiling spreadsheets and updating team tasks manually.",
      aiOpportunity: "Multi-platform database sync & automated scheduled AI executive digest.",
      automation: "Instant cross-tool data synchronization with error monitoring.",
      betterOperations: "90% reduction in manual data entry, zero data loss."
    }
  ];

  const currentScenario = heroScenarios[scenarioIndex];

  const workflowStages = [
    {
      id: 'problem',
      step: '01',
      title: 'Business Problem',
      icon: AlertCircle,
      color: 'bg-rose-50 border-rose-200/60 text-rose-600',
      badgeBg: 'bg-rose-100/60 text-rose-700 border-rose-200',
      content: currentScenario.problem
    },
    {
      id: 'opportunity',
      step: '02',
      title: 'AI Opportunity',
      icon: Sparkles,
      color: 'bg-cyan-50 border-cyan-200/60 text-[#06B6D4]',
      badgeBg: 'bg-cyan-100/60 text-cyan-800 border-cyan-200',
      content: currentScenario.aiOpportunity
    },
    {
      id: 'automation',
      step: '03',
      title: 'Automation',
      icon: Cpu,
      color: 'bg-blue-50 border-blue-200/60 text-blue-600',
      badgeBg: 'bg-blue-100/60 text-blue-800 border-blue-200',
      content: currentScenario.automation
    },
    {
      id: 'operations',
      step: '04',
      title: 'Better Operations',
      icon: TrendingUp,
      color: 'bg-emerald-50 border-emerald-200/60 text-emerald-600',
      badgeBg: 'bg-emerald-100/60 text-emerald-800 border-emerald-200',
      content: currentScenario.betterOperations
    }
  ];

  const handleScrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] pt-36 pb-20 md:pt-40 md:pb-24 text-[#0F172A] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Hero Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Tag / Availability Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50/80 backdrop-blur-md border border-cyan-200/70 text-[#06B6D4] text-xs sm:text-sm font-bold tracking-wider uppercase shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#06B6D4]" />
                AI AUTOMATION CONSULTANT
              </span>
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-emerald-200/60 text-emerald-700 text-xs sm:text-sm font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>● Available for new projects</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#0F172A] leading-[1.1] tracking-tight">
              Turn Repetitive Work <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-500 to-blue-600">
                Into Smart Systems.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-[#64748B] text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
              {PORTFOLIO_DATA.profile.supportingMessage}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="hero-primary-audit-btn"
                onClick={onOpenAudit}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#06B6D4] hover:bg-cyan-500 text-white font-bold text-base shadow-xl shadow-cyan-200/60 hover:shadow-cyan-300/80 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Get Free 20-Min AI Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-secondary-services-btn"
                onClick={handleScrollToServices}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/60 hover:bg-white/90 backdrop-blur-md text-[#0F172A] border border-white/80 font-bold text-base shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <span>Explore Services</span>
                <ChevronDown className="w-4 h-4 text-[#06B6D4]" />
              </button>
            </div>

            {/* Micro-trust indicators */}
            <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-[#64748B]">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#06B6D4] flex-shrink-0" />
                <span>Zero AI hype — practical ROI only</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#06B6D4] flex-shrink-0" />
                <span>Custom-tailored to your stack</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#06B6D4] flex-shrink-0" />
                <span>Burdwan, India · Global Remote</span>
              </div>
            </div>

          </div>

          {/* Right Column: Frosted Glass Interactive AI Transformation Flow Diagram */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="bg-white/65 backdrop-blur-2xl border border-white/80 rounded-[32px] p-6 sm:p-7 shadow-2xl shadow-slate-200/60 relative overflow-hidden">
              
              {/* Card Header & Scenario Selector */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/60 mb-5">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-cyan-50 text-[#06B6D4] text-[10px] font-bold rounded-full border border-cyan-100 uppercase tracking-wider">
                    LIVE PIPELINE
                  </span>
                </div>

                {/* Scenario switcher */}
                <div className="flex items-center gap-1 bg-slate-100/80 backdrop-blur-md p-1 rounded-xl border border-white/60">
                  {heroScenarios.map((sc, idx) => (
                    <button
                      key={sc.title}
                      onClick={() => setScenarioIndex(idx)}
                      className={`text-xs px-2.5 py-1 rounded-lg transition-all font-semibold ${
                        scenarioIndex === idx
                          ? 'bg-[#06B6D4] text-white shadow-xs'
                          : 'text-[#64748B] hover:text-[#0F172A]'
                      }`}
                    >
                      {sc.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Connected Stages Flow */}
              <div className="space-y-3 relative">
                {workflowStages.map((stage, idx) => {
                  const Icon = stage.icon;
                  const isActive = activeStage === idx;
                  const isLast = idx === workflowStages.length - 1;

                  return (
                    <div key={stage.id} className="relative">
                      {/* Step card */}
                      <button
                        onClick={() => setActiveStage(idx)}
                        className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-300 ${
                          isActive
                            ? `bg-white/95 border-[#06B6D4] shadow-lg shadow-cyan-500/10 scale-[1.01]`
                            : `bg-white/40 border-white/60 hover:bg-white/70 hover:border-slate-300`
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-xl ${stage.color} border flex-shrink-0 mt-0.5 shadow-xs`}>
                            <Icon className="w-4 h-4" />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-sm font-bold text-[#0F172A] font-heading">
                                {stage.title}
                              </span>
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${stage.badgeBg}`}>
                                Step {stage.step}
                              </span>
                            </div>

                            <p className={`text-xs mt-1 leading-relaxed ${isActive ? 'text-[#0F172A] font-medium' : 'text-[#64748B] line-clamp-1'}`}>
                              {stage.content}
                            </p>
                          </div>
                        </div>
                      </button>

                      {/* Connecting line */}
                      {!isLast && (
                        <div className="flex items-center justify-center my-0.5">
                          <div className="h-3 w-[2px] bg-gradient-to-b from-[#06B6D4] to-slate-200" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bottom Live Result Banner */}
              <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-[#64748B] font-semibold">
                  <Zap className="w-3.5 h-3.5 text-[#06B6D4]" />
                  Operational Impact:
                </span>
                <span className="font-bold text-[#06B6D4] bg-cyan-50/80 px-3 py-1 rounded-lg border border-cyan-100">
                  {scenarioIndex === 0 ? "⚡ Response in < 15s" : scenarioIndex === 1 ? "🤖 75% Support Automated" : "⏱️ 15 hrs saved / wk"}
                </span>
              </div>

            </div>

            {/* Micro Location & Status Frosted Sub-Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/50 backdrop-blur-xl border border-white/80 p-4 rounded-2xl shadow-sm">
                <div className="text-[10px] font-bold text-[#64748B] tracking-wider uppercase mb-0.5">LOCATION</div>
                <div className="text-sm font-bold text-[#0F172A]">Burdwan, WB, India</div>
              </div>
              <div className="bg-white/50 backdrop-blur-xl border border-white/80 p-4 rounded-2xl shadow-sm">
                <div className="text-[10px] font-bold text-[#64748B] tracking-wider uppercase mb-0.5">AVAILABILITY</div>
                <div className="text-sm font-bold text-emerald-600 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Open for Q3/Q4 Projects
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
