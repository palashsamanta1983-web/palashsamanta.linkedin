import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface NavbarProps {
  onOpenAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAudit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section
      const sections = ['home', 'services', 'demo', 'process', 'about', 'experience', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/75 backdrop-blur-xl border-b border-white/60 shadow-lg shadow-slate-900/5 py-3.5'
          : 'bg-white/55 backdrop-blur-lg border-b border-white/40 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Branding */}
          <a
            href="#home"
            id="nav-logo"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 rounded-xl bg-[#06B6D4] flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
              <div className="w-4 h-4 border-2 border-white rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-[#0F172A] font-heading font-extrabold text-lg tracking-tight group-hover:text-cyan-600 transition-colors">
                PALASH SAMANTA
              </span>
              <span className="text-[11px] text-[#64748B] font-semibold tracking-wide flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                AI Automation Consultant
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/60 backdrop-blur-md p-1.5 rounded-full border border-white/80 shadow-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[#0F172A] text-white shadow-xs'
                      : 'text-[#64748B] hover:text-[#0F172A] hover:bg-white/70'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="nav-audit-cta-btn"
              onClick={onOpenAudit}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#06B6D4] hover:bg-cyan-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Free AI Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-audit-btn-header"
              onClick={onOpenAudit}
              className="text-xs px-3.5 py-1.5 rounded-full bg-[#06B6D4] text-white font-bold shadow-md shadow-cyan-500/20"
            >
              Free Audit
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-700 bg-white/70 backdrop-blur-md border border-white/60 hover:bg-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-white/90 border-b border-white/70 backdrop-blur-2xl px-5 pt-3 pb-6 mt-3 space-y-3 shadow-xl"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-${link.id}`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-4 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                  activeSection === link.id
                    ? 'bg-cyan-50 text-cyan-700 font-bold border-l-2 border-cyan-500'
                    : 'text-[#64748B] hover:bg-slate-100/60 hover:text-[#0F172A]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200/60">
            <button
              id="mobile-nav-drawer-audit-btn"
              onClick={() => {
                setIsOpen(false);
                onOpenAudit();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#06B6D4] text-white font-bold text-base shadow-lg shadow-cyan-500/25"
            >
              <Sparkles className="w-5 h-5 text-white" />
              <span>Free 20-Min AI Readiness Audit</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-center text-xs text-[#64748B] mt-2 flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Zero obligation · Practical ROI roadmap</span>
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
