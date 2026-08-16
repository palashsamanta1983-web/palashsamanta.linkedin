import React from 'react';
import { 
  ArrowUp, 
  Linkedin, 
  Mail, 
  MapPin, 
  Sparkles,
  Heart
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAudit }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="main-footer" className="bg-slate-950/90 backdrop-blur-2xl text-white border-t border-slate-800/80 relative overflow-hidden">
      
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Slogan Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#06B6D4] to-blue-600 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-cyan-500/20">
                P
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl tracking-wider block text-white">
                  PALASH SAMANTA
                </span>
                <span className="text-xs text-[#06B6D4] font-bold tracking-wide flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#06B6D4]" />
                  AI Automation Consultant
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm italic max-w-md font-medium">
              “Business Problems → AI Automation → Better Operations”
            </p>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md font-normal">
              Helping service businesses identify and implement practical AI automation opportunities that reduce repetitive work, improve customer response times, and lower operational costs.
            </p>

            <div className="flex items-center gap-3.5 pt-2">
              <a
                id="footer-linkedin-link"
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 hover:text-cyan-300 border border-white/15 backdrop-blur-md transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                id="footer-email-link"
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                aria-label="Email"
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 hover:text-cyan-300 border border-white/15 backdrop-blur-md transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>

              <div className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Burdwan, WB, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest block font-heading">
              Navigation
            </span>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-[#06B6D4] font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct CTA */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest block font-heading">
              Ready to Scale?
            </span>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Get a personalized 20-minute audit of your business operations.
            </p>
            <button
              id="footer-audit-cta-btn"
              onClick={onOpenAudit}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#06B6D4] hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-cyan-500/25 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Free AI Audit</span>
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© 2026 Palash Samanta. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              id="back-to-top-btn"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-[#06B6D4] transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
