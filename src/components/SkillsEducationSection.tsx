import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  ShieldCheck 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillsEducationSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Skills Matrix & Animated Pills */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold tracking-wider uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                TECHNICAL & STRATEGIC CAPABILITIES
              </span>

              <h2 className="text-3xl font-heading font-extrabold text-[#0F172A] tracking-tight">
                Specialized AI Skills
              </h2>

              <p className="mt-3 text-[#64748B] text-sm leading-relaxed">
                Core technical proficiencies and system architectural skills applied directly to client workflow automations.
              </p>
            </div>

            {/* Animated Skill Pills Grid */}
            <div className="flex flex-wrap gap-3 pt-2">
              {PORTFOLIO_DATA.skills.map((skill, idx) => (
                <div
                  key={skill.name}
                  id={`skill-pill-${idx}`}
                  className="group inline-flex items-center gap-2.5 px-4.5 py-2.5 rounded-2xl bg-white/65 hover:bg-white/95 backdrop-blur-md border border-white/80 hover:border-cyan-300 shadow-sm hover:shadow-md transition-all duration-200 cursor-default"
                >
                  <span className="w-2 h-2 rounded-full bg-[#06B6D4] group-hover:scale-125 transition-transform" />
                  <span className="text-sm font-bold text-slate-800 group-hover:text-cyan-900 transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-cyan-50/80 border border-cyan-100 text-cyan-800">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-4.5 rounded-2xl bg-cyan-50/70 backdrop-blur-md border border-cyan-200/60 text-xs text-cyan-950 flex items-center gap-3 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-[#06B6D4] flex-shrink-0" />
              <span className="font-medium">
                Focused on reliable, production-tested tools like Zapier, Make, custom AI Webhook pipelines, and OpenAI/Anthropic/Gemini APIs.
              </span>
            </div>
          </div>

          {/* Right Column: Education & Certifications */}
          <div className="lg:col-span-6 space-y-6">
            
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold tracking-wider uppercase mb-3">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-600" />
                ACADEMIC & INDUSTRY CREDENTIALS
              </span>

              <h2 className="text-3xl font-heading font-extrabold text-[#0F172A] tracking-tight">
                Education & Certifications
              </h2>
            </div>

            {/* Education Card */}
            <div className="p-7 rounded-[26px] bg-white/65 hover:bg-white/90 backdrop-blur-xl border border-white/80 shadow-xl shadow-slate-200/40 hover:shadow-2xl transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/60 shadow-xs text-[#06B6D4] flex-shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Higher Education
                  </span>
                  <h3 className="text-lg font-heading font-extrabold text-[#0F172A] mt-0.5">
                    {PORTFOLIO_DATA.education.institution}
                  </h3>
                  <p className="text-sm text-cyan-800 font-bold">
                    {PORTFOLIO_DATA.education.degree}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    {PORTFOLIO_DATA.education.period} · {PORTFOLIO_DATA.education.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="p-7 rounded-[26px] bg-white/65 hover:bg-white/90 backdrop-blur-xl border border-white/80 shadow-xl shadow-slate-200/40 hover:shadow-2xl transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/60 shadow-xs text-teal-600 flex-shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Certifications & Specializations
                  </span>
                  
                  <div className="mt-3 space-y-3.5">
                    {PORTFOLIO_DATA.certifications.map((cert, cIdx) => (
                      <div key={cIdx} className="pb-3 last:pb-0 border-b last:border-b-0 border-slate-200/60">
                        <h4 className="text-sm font-bold text-[#0F172A] flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#06B6D4] flex-shrink-0" />
                          {cert.name}
                        </h4>
                        <p className="text-xs text-[#64748B] ml-6 font-normal">
                          {cert.issuer} — {cert.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
