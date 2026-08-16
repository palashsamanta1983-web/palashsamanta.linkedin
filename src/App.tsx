import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ProblemSection } from './components/ProblemSection';
import { ServicesSection } from './components/ServicesSection';
import { InteractiveAutomationDemo } from './components/InteractiveAutomationDemo';
import { ApproachSection } from './components/ApproachSection';
import { RoiCalculator } from './components/RoiCalculator';
import { AuditSection } from './components/AuditSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsEducationSection } from './components/SkillsEducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AuditModal } from './components/AuditModal';

export default function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [selectedServiceForAudit, setSelectedServiceForAudit] = useState('');

  const handleOpenAudit = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForAudit(serviceName);
    } else {
      setSelectedServiceForAudit('');
    }
    setIsAuditModalOpen(true);
  };

  const handleCloseAudit = () => {
    setIsAuditModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans selection:bg-cyan-500 selection:text-white relative overflow-x-hidden">
      {/* Frosted Glass Ambient Lighting Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-5%] right-[-5%] w-[550px] h-[550px] bg-cyan-200/40 rounded-full blur-[140px]" />
        <div className="absolute top-[25%] left-[-5%] w-[450px] h-[450px] bg-blue-200/35 rounded-full blur-[120px]" />
        <div className="absolute top-[55%] right-[-8%] w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-10%] left-[15%] w-[600px] h-[600px] bg-indigo-100/30 rounded-full blur-[150px]" />
      </div>

      {/* Sticky Header Navigation */}
      <Navbar onOpenAudit={() => handleOpenAudit()} />

      {/* Main Content Sections */}
      <main className="flex-grow relative z-10">
        {/* 1. Hero Section */}
        <Hero onOpenAudit={() => handleOpenAudit()} />

        {/* 2. Trust Strip */}
        <TrustStrip />

        {/* 3. Problem Section */}
        <ProblemSection onOpenAudit={() => handleOpenAudit()} />

        {/* 4. Interactive Automation Demo (Central interactive experience) */}
        <InteractiveAutomationDemo onOpenAudit={() => handleOpenAudit()} />

        {/* 5. Services Section */}
        <ServicesSection onOpenAudit={(svc) => handleOpenAudit(svc)} />

        {/* 6. Operational ROI Calculator */}
        <RoiCalculator onOpenAudit={() => handleOpenAudit()} />

        {/* 7. Methodology & Approach */}
        <ApproachSection onOpenAudit={() => handleOpenAudit()} />

        {/* 8. Free AI Readiness Audit Callout */}
        <AuditSection onOpenAudit={() => handleOpenAudit()} />

        {/* 9. About Section & Philosophy */}
        <AboutSection />

        {/* 10. Experience Timeline */}
        <ExperienceSection />

        {/* 11. Skills, Education & Certifications */}
        <SkillsEducationSection />

        {/* 12. Contact Section */}
        <ContactSection onOpenAudit={() => handleOpenAudit()} />
      </main>

      {/* Footer */}
      <Footer onOpenAudit={() => handleOpenAudit()} />

      {/* Interactive AI Readiness Audit Modal */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={handleCloseAudit}
        preselectedService={selectedServiceForAudit}
      />
    </div>
  );
}
