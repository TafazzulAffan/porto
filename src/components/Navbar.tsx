import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Sun, Moon, Briefcase, GraduationCap, 
  Code2, FolderGit2, Mail, Bot, Award, FileText
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenRecruiterView: () => void;
  onOpenAiAssistant: () => void;
  onOpenCvPreview: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  onOpenRecruiterView,
  onOpenAiAssistant,
  onOpenCvPreview,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#about', icon: GraduationCap },
    { name: 'Keahlian', href: '#skills', icon: Code2 },
    { name: 'Pengalaman', href: '#experience', icon: Briefcase },
    { name: 'Proyek', href: '#projects', icon: FolderGit2 },
    { name: 'Kontak', href: '#contact', icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
            : 'bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-md shadow-slate-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a 
            href="#" 
            className="flex items-center gap-3 group focus:outline-none"
            id="nav-brand-logo"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-400 p-[2px] shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
              <div className={`w-full h-full rounded-[10px] ${darkMode ? 'bg-slate-950' : 'bg-white'} flex items-center justify-center`}>
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400 text-lg">
                  TA
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'} group-hover:text-blue-500 transition-colors`}>
                {personalInfo.name}
              </span>
              <span className="text-xs text-blue-500 font-medium tracking-wide">
                S1 Informatika UNESA
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/5 dark:bg-slate-800/40 p-1.5 rounded-full border border-slate-200/50 dark:border-slate-800/80">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25'
                      : darkMode
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Action Buttons & Controls */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Recruiter Fast Mode Button */}
            <button
              onClick={onOpenRecruiterView}
              id="nav-btn-recruiter-fast-mode"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center gap-1.5 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Award className="w-4 h-4 animate-pulse" />
              <span>HRD Fast Mode</span>
            </button>

            {/* Ask AI Assistant Button */}
            <button
              onClick={onOpenAiAssistant}
              id="nav-btn-ai-assistant"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-indigo-600/10 hover:bg-indigo-600/20 text-indigo-500 dark:text-indigo-400 border border-indigo-500/30 hover:border-indigo-500/50 transition-all flex items-center gap-1.5"
            >
              <Bot className="w-4 h-4 text-indigo-500" />
              <span>Ask AI Assistant</span>
            </button>

            {/* CV Preview Button */}
            <button
              onClick={onOpenCvPreview}
              id="nav-btn-cv-preview"
              className={`p-2.5 rounded-xl text-xs font-semibold border transition-all ${
                darkMode 
                  ? 'border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800' 
                  : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200'
              }`}
              title="Preview / Unduh CV"
            >
              <FileText className="w-4 h-4" />
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              id="nav-btn-theme-toggle"
              className={`p-2.5 rounded-xl border transition-all ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 text-amber-400 hover:bg-slate-800'
                  : 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
              title={darkMode ? 'Beralih ke Light Mode' : 'Beralih ke Dark Mode'}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenRecruiterView}
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-500 text-white flex items-center gap-1 shadow-sm"
              id="mobile-btn-hr-fast"
            >
              <Award className="w-3.5 h-3.5" />
              <span>HRD</span>
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'bg-slate-900 text-amber-400' : 'bg-slate-100 text-slate-700'}`}
              id="mobile-btn-theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg ${darkMode ? 'bg-slate-900 text-slate-300' : 'bg-slate-100 text-slate-700'}`}
              id="mobile-btn-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden border-b ${
              darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
            } px-4 pt-2 pb-6 space-y-3`}
          >
            <div className="grid grid-cols-1 gap-1 pt-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium ${
                      darkMode ? 'text-slate-300 hover:bg-slate-900' : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-blue-500" />
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-800/40 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAiAssistant();
                }}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-indigo-600/10 text-indigo-400 text-xs font-semibold border border-indigo-500/20"
              >
                <Bot className="w-4 h-4" />
                <span>Ask AI</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCvPreview();
                }}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold border ${
                  darkMode ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-slate-100 border-slate-200 text-slate-800'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Lihat CV</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
