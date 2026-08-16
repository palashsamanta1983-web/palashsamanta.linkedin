import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Zap, 
  Send, 
  Bot, 
  UserCheck, 
  CheckCircle,
  Play,
  Pause
} from 'lucide-react';
import { PORTFOLIO_DATA, WorkflowScenario } from '../data/portfolioData';

interface DemoProps {
  onOpenAudit: () => void;
}

export const InteractiveAutomationDemo: React.FC<DemoProps> = ({ onOpenAudit }) => {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState<number>(0);
  const [isAutomated, setIsAutomated] = useState<boolean>(false);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const scenario = PORTFOLIO_DATA.workflowScenarios[selectedScenarioIndex];
  const steps = isAutomated ? scenario.after : scenario.before;

  // Auto step simulation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isSimulating) {
      interval = setInterval(() => {
        setActiveStepIndex((prev) => {
          if (prev >= steps.length - 1) {
            setIsSimulating(false);
            return prev;
          }
          return prev + 1;
        });
      }, 1200);
    }
    return () => clearInterval(interval);
  }, [isSimulating, steps.length]);

  const handleToggleAutomation = (targetState: boolean) => {
    setIsAutomated(targetState);
    setActiveStepIndex(0);
    setIsSimulating(true);
  };

  const handleScenarioChange = (index: number) => {
    setSelectedScenarioIndex(index);
    setActiveStepIndex(0);
    setIsSimulating(false);
  };

  return (
    <section id="demo" className="py-24 bg-slate-950 text-white relative overflow-hidden bg-grid-dark-pattern">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            INTERACTIVE SYSTEM COMPARISON
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            See How Automation Changes a Workflow
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Toggle between the traditional manual process and the modern AI-automated system to experience the dramatic difference in operational speed, team time, and client satisfaction.
          </p>
        </div>

        {/* Workflow Showcase Container */}
        <div className="rounded-[32px] bg-slate-900/80 backdrop-blur-2xl border border-slate-700/60 shadow-2xl p-6 sm:p-10 relative">
          
          {/* Top Controls Bar: Scenario Tabs + Mode Switcher */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-8 border-b border-slate-800/80">
            
            {/* Scenario Tabs */}
            <div className="flex items-center gap-2 bg-slate-950/60 backdrop-blur-md p-1.5 rounded-2xl border border-slate-800/80 w-full md:w-auto overflow-x-auto">
              {PORTFOLIO_DATA.workflowScenarios.map((sc, idx) => (
                <button
                  key={sc.id}
                  onClick={() => handleScenarioChange(idx)}
                  className={`text-xs sm:text-sm px-4 py-2 rounded-xl font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    selectedScenarioIndex === idx
                      ? 'bg-[#06B6D4] text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {sc.name}
                </button>
              ))}
            </div>

            {/* Main Interactive "Automate This" / Mode Switcher */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <div className="flex items-center bg-slate-950/70 backdrop-blur-md p-1.5 rounded-2xl border border-slate-800/80">
                <button
                  id="demo-before-btn"
                  onClick={() => handleToggleAutomation(false)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    !isAutomated
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <AlertTriangle className="w-3.5 h-3.5" />
                  BEFORE (Manual)
                </button>

                <button
                  id="demo-after-btn"
                  onClick={() => handleToggleAutomation(true)}
                  className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    isAutomated
                      ? 'bg-[#06B6D4] text-white shadow-xl shadow-cyan-500/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  ✨ Automate This (AFTER)
                </button>
              </div>

              {/* Simulation Play/Restart */}
              <button
                onClick={() => {
                  setActiveStepIndex(0);
                  setIsSimulating(!isSimulating);
                }}
                title="Restart simulation"
                className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white border border-white/15 transition-colors cursor-pointer"
              >
                {isSimulating ? <Pause className="w-4 h-4 text-cyan-400" /> : <RotateCcw className="w-4 h-4" />}
              </button>
            </div>

          </div>

          {/* Status Badge Strip */}
          <div className="my-6 flex flex-wrap items-center justify-between gap-4 p-4.5 rounded-2xl bg-slate-950/50 backdrop-blur-md border border-slate-800/80">
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                isAutomated 
                  ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/40' 
                  : 'bg-rose-950/80 text-rose-400 border border-rose-500/40'
              }`}>
                {isAutomated ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertTriangle className="w-3.5 h-3.5" />}
                {isAutomated ? 'AI-Automated Pipeline Active' : 'Traditional Manual Process'}
              </span>

              <span className="text-xs text-slate-400 hidden sm:inline font-medium">
                {scenario.description}
              </span>
            </div>

            <div className="text-xs font-semibold flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span className="text-slate-300">Metric:</span>
              <span className={isAutomated ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                {isAutomated ? scenario.afterMetric : scenario.beforeMetric}
              </span>
            </div>
          </div>

          {/* Interactive Step-by-Step Flow Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-4 relative">
            {steps.map((step, idx) => {
              const isPassed = idx <= activeStepIndex;
              const isCurrent = idx === activeStepIndex;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4.5 rounded-2xl border transition-all duration-300 cursor-pointer relative flex flex-col justify-between backdrop-blur-md ${
                    isCurrent
                      ? isAutomated
                        ? 'bg-slate-800/90 border-[#06B6D4] ring-2 ring-cyan-500/40 scale-[1.03] shadow-xl shadow-cyan-500/20'
                        : 'bg-slate-800/90 border-rose-400 ring-2 ring-rose-500/40 scale-[1.03]'
                      : isPassed
                      ? isAutomated
                        ? 'bg-slate-900/80 border-teal-500/40'
                        : 'bg-slate-900/80 border-slate-700'
                      : 'bg-slate-950/40 border-slate-800/60 opacity-60'
                  }`}
                >
                  <div>
                    {/* Step Header */}
                    <div className="flex items-center justify-between mb-2.5">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isAutomated 
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        Step {step.step}
                      </span>

                      <span className={`text-[11px] font-mono font-bold ${
                        isAutomated ? 'text-cyan-400' : 'text-rose-400'
                      }`}>
                        {step.time}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h4 className="text-sm font-heading font-bold text-white mb-1.5">
                      {step.label}
                    </h4>

                    {/* Step Detail */}
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>

                  {/* Step status footer */}
                  <div className="mt-4 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                    {step.status === 'bottleneck' && (
                      <span className="text-rose-400 flex items-center gap-1 font-medium">
                        <AlertTriangle className="w-3 h-3" /> Delay
                      </span>
                    )}
                    {step.status === 'automated' && (
                      <span className="text-emerald-400 flex items-center gap-1 font-medium">
                        <Zap className="w-3 h-3" /> Instant
                      </span>
                    )}
                    {step.status === 'neutral' && (
                      <span className="text-slate-400">Trigger</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main Takeaway Banner */}
          <div className="mt-10 p-6 sm:p-8 rounded-[28px] bg-slate-950/70 backdrop-blur-xl border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                The Practical AI Difference
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
                Less repetitive work. Faster response. Better operations.
              </h3>
              <p className="text-sm text-slate-300">
                Ready to transform your service operations into an automated, dependable system?
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
              {!isAutomated && (
                <button
                  onClick={() => handleToggleAutomation(true)}
                  className="px-6 py-3.5 rounded-xl bg-[#06B6D4] hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/25 transition-all cursor-pointer"
                >
                  ✨ Switch to Automated Flow
                </button>
              )}

              <button
                id="demo-audit-cta-btn"
                onClick={onOpenAudit}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 hover:border-white/30 backdrop-blur-md transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Audit My Workflow</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
