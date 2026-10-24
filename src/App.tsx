import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RecruiterFastViewModal } from './components/RecruiterFastViewModal';
import { AiAssistantWidget } from './components/AiAssistantWidget';
import { CvPreviewModal } from './components/CvPreviewModal';
import { Bot, Award, FileText } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [recruiterModalOpen, setRecruiterModalOpen] = useState(false);
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false);
  const [cvPreviewOpen, setCvPreviewOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle dark mode class on <html> element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Sticky Top Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenRecruiterView={() => setRecruiterModalOpen(true)}
        onOpenAiAssistant={() => setAiAssistantOpen(true)}
        onOpenCvPreview={() => setCvPreviewOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Page Sections */}
      <main id="main-content">
        <HeroSection
          darkMode={darkMode}
          onOpenRecruiterView={() => setRecruiterModalOpen(true)}
          onOpenCvPreview={() => setCvPreviewOpen(true)}
        />

        <AboutSection darkMode={darkMode} />

        <SkillsSection darkMode={darkMode} />

        <ExperienceSection darkMode={darkMode} />

        <ProjectsSection darkMode={darkMode} />

        <ContactSection darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />

      {/* Recruiter Fast View Modal */}
      <RecruiterFastViewModal
        isOpen={recruiterModalOpen}
        onClose={() => setRecruiterModalOpen(false)}
        darkMode={darkMode}
        onOpenCvPreview={() => setCvPreviewOpen(true)}
      />

      {/* AI Assistant Widget Modal */}
      <AiAssistantWidget
        isOpen={aiAssistantOpen}
        onClose={() => setAiAssistantOpen(false)}
        darkMode={darkMode}
      />

      {/* CV Preview Modal */}
      <CvPreviewModal
        isOpen={cvPreviewOpen}
        onClose={() => setCvPreviewOpen(false)}
        darkMode={darkMode}
      />

      {/* Floating Sticky Quick Action Pill on Bottom Right */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-2">
        <button
          onClick={() => setAiAssistantOpen(true)}
          id="floating-btn-ai-chat"
          className="p-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white shadow-xl shadow-indigo-600/30 flex items-center gap-2 text-xs font-bold transition-all transform hover:scale-105"
          title="Tanya AI Assistant Tafazzul"
        >
          <Bot className="w-5 h-5 text-cyan-300" />
          <span className="hidden sm:inline">Ask AI</span>
        </button>
      </div>

    </div>
  );
}
