import React, { useState } from 'react';
import { 
  Calculator, 
  Clock, 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  DollarSign, 
  Users,
  CheckCircle2
} from 'lucide-react';

interface RoiCalculatorProps {
  onOpenAudit: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenAudit }) => {
  const [teamSize, setTeamSize] = useState<number>(5);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(8);
  const [hourlyRate, setHourlyRate] = useState<number>(30); // in USD/hr benchmark equivalent

  // Calculations
  const weeklyHoursWasted = teamSize * hoursPerWeek;
  const monthlyHoursWasted = Math.round(weeklyHoursWasted * 4.33);
  const annualHoursWasted = weeklyHoursWasted * 52;
  const potentialAutomatedPercentage = 0.70; // 70% of repetitive tasks can be automated with practical AI
  const annualHoursReclaimed = Math.round(annualHoursWasted * potentialAutomatedPercentage);
  const annualCostSaved = Math.round(annualHoursReclaimed * hourlyRate);

  return (
    <section id="roi-calculator" className="py-20 bg-white/40 backdrop-blur-xl border-y border-white/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50/80 backdrop-blur-md border border-cyan-200 text-cyan-800 text-xs font-bold tracking-wider uppercase mb-3">
                <Calculator className="w-3.5 h-3.5 text-[#06B6D4]" />
                OPERATIONAL IMPACT ESTIMATOR
              </span>

              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0F172A] tracking-tight">
                How Much Time & Cost Can AI Automation Save You?
              </h2>

              <p className="mt-3 text-[#64748B] text-sm sm:text-base leading-relaxed">
                Adjust your team size and estimated weekly repetitive hours to see the realistic operational capacity AI can unlock for your business.
              </p>
            </div>

            {/* Slider 1: Team Size */}
            <div className="bg-white/65 backdrop-blur-xl p-5 rounded-[22px] border border-white/80 shadow-sm space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor="team-size-slider" className="font-bold text-slate-800 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#06B6D4]" />
                  Operational Team Members
                </label>
                <span className="font-heading font-extrabold text-lg text-cyan-700 bg-cyan-100/60 px-3 py-0.5 rounded-lg border border-cyan-200/50">
                  {teamSize} {teamSize === 1 ? 'Person' : 'People'}
                </span>
              </div>
              <input
                id="team-size-slider"
                type="range"
                min="1"
                max="50"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                <span>1 solo</span>
                <span>25 team</span>
                <span>50+ enterprise</span>
              </div>
            </div>

            {/* Slider 2: Repetitive Hours Per Person */}
            <div className="bg-white/65 backdrop-blur-xl p-5 rounded-[22px] border border-white/80 shadow-sm space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor="hours-slider" className="font-bold text-slate-800 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-teal-600" />
                  Repetitive Hours / Person / Week
                </label>
                <span className="font-heading font-extrabold text-lg text-teal-700 bg-teal-100/60 px-3 py-0.5 rounded-lg border border-teal-200/50">
                  {hoursPerWeek} hrs / wk
                </span>
              </div>
              <input
                id="hours-slider"
                type="range"
                min="2"
                max="25"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                <span>2 hrs (Light)</span>
                <span>12 hrs (Moderate)</span>
                <span>25 hrs (Heavy drag)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Impact Results Box */}
          <div className="lg:col-span-6">
            <div className="rounded-[32px] bg-slate-900/85 backdrop-blur-2xl text-white p-8 sm:p-10 border border-slate-700/60 shadow-2xl relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-6 border-b border-slate-800/80">
                <div>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                    Estimated Annual Return
                  </span>
                  <h3 className="text-xl font-heading font-extrabold text-white mt-0.5">
                    Operational Capacity Reclaimed
                  </h3>
                </div>

                <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 shadow-xs">
                  <Sparkles className="w-6 h-6" />
                </div>
              </div>

              {/* Big Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 my-8">
                
                {/* Metric 1 */}
                <div className="p-5 rounded-2xl bg-slate-800/70 backdrop-blur-md border border-slate-700/60">
                  <span className="text-xs text-slate-400 font-medium block mb-1">
                    Hours Reclaimed / Year
                  </span>
                  <span className="text-3xl sm:text-4xl font-heading font-extrabold text-[#06B6D4]">
                    {annualHoursReclaimed.toLocaleString()}
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-1">
                    ~{Math.round(annualHoursReclaimed / 52)} hours saved weekly
                  </span>
                </div>

                {/* Metric 2 */}
                <div className="p-5 rounded-2xl bg-slate-800/70 backdrop-blur-md border border-slate-700/60">
                  <span className="text-xs text-slate-400 font-medium block mb-1">
                    Est. Value Unlocked
                  </span>
                  <span className="text-3xl sm:text-4xl font-heading font-extrabold text-emerald-400">
                    ${annualCostSaved.toLocaleString()}
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-1">
                    Redirected to high-value client work
                  </span>
                </div>

              </div>

              {/* Key Advantage Points */}
              <div className="space-y-2 mb-8 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Eliminates manual copy-pasting, lead routing, and report delays</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Accelerates customer enquiry response times from hours to seconds</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                id="calculator-audit-cta-btn"
                onClick={onOpenAudit}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#06B6D4] hover:bg-cyan-400 text-slate-950 font-bold text-base shadow-xl shadow-cyan-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
              >
                <span>Identify My Opportunities (Free 20-Min Audit)</span>
                <ArrowRight className="w-5 h-5" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
