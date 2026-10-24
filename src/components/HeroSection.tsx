import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, Download, Award, Sparkles, Github, 
  Linkedin, Mail, GraduationCap, CheckCircle2, Code2, FolderCheck
} from 'lucide-react';
import { personalInfo, recruiterSummary } from '../data/portfolioData';

interface HeroSectionProps {
  darkMode: boolean;
  onOpenRecruiterView: () => void;
  onOpenCvPreview: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  darkMode,
  onOpenRecruiterView,
  onOpenCvPreview
}) => {
  // Dynamic typing animation text for key roles
  const roles = [
    'Full Stack Web Developer',
    'Lulusan S1 Informatika UNESA',
    'React & TypeScript Specialist',
    'Node.js & REST API Engineer',
    'UI/UX & Interactive Design Enthusiast'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 35 : 70;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" id="hero">
      {/* Background Lighting & Grid Effects */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 ${
          darkMode ? 'bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400' : 'bg-gradient-to-tr from-blue-400 via-indigo-300 to-cyan-300'
        }`} />
        <div className={`absolute top-1/3 right-10 w-96 h-96 rounded-full blur-3xl opacity-15 ${
          darkMode ? 'bg-indigo-500' : 'bg-blue-300'
        }`} />
        
        {/* Subtle SVG Grid overlay */}
        <div className={`absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] ${
          darkMode ? 'opacity-30' : 'opacity-40'
        }`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-500 dark:text-blue-400 mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Siap Bekerja • Open to Full-Time / Contract / Remote</span>
            </div>

            {/* Greeting & Name */}
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            } leading-tight mb-4`}>
              Halo, Saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400">{personalInfo.name}</span>
            </h1>

            {/* Dynamic Animated Subtitle */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className={`text-lg sm:text-xl md:text-2xl font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                {displayText}
              </span>
              <span className="inline-block w-0.5 h-6 bg-blue-500 ml-1 animate-pulse" />
            </div>

            {/* Concise Bio */}
            <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'} max-w-2xl leading-relaxed mb-8`}>
              Lulusan <strong className={darkMode ? 'text-slate-200' : 'text-slate-800'}>S1 Teknik Informatika UNESA</strong> (IPK 3.82) yang berdedikasi membangun aplikasi web modern yang responsive, performan, dan estetik. Menguasai ekosistem React, TypeScript, Next.js, Node.js, dan arsitektur database modern.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              {/* HRD Fast View Highlight Button */}
              <button
                onClick={onOpenRecruiterView}
                id="hero-btn-hr-fast-mode"
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-semibold text-sm shadow-xl shadow-amber-500/20 hover:shadow-amber-500/35 transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Award className="w-4 h-4" />
                <span>Ringkasan HRD (Fast Mode)</span>
              </button>

              {/* View Projects */}
              <a
                href="#projects"
                id="hero-btn-view-projects"
                className={`w-full sm:w-auto px-6 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                  darkMode
                    ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20'
                    : 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/10'
                }`}
              >
                <span>Lihat Proyek Saya</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Preview / Download CV */}
              <button
                onClick={onOpenCvPreview}
                id="hero-btn-preview-cv"
                className={`w-full sm:w-auto px-5 py-3.5 rounded-2xl font-semibold text-sm border transition-all flex items-center justify-center gap-2 ${
                  darkMode
                    ? 'border-slate-800 bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:text-white'
                    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Download className="w-4 h-4 text-blue-500" />
                <span>Download / Preview CV</span>
              </button>
            </div>

            {/* Social Links & Direct Email */}
            <div className="flex items-center gap-4 pt-2 border-t border-slate-200/40 dark:border-slate-800/60 w-full">
              <span className={`text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Tautan Cepat:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-xl border transition-all ${
                    darkMode ? 'border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:border-slate-700' : 'border-slate-200 bg-white text-slate-700 hover:text-slate-900 hover:border-slate-300'
                  }`}
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-xl border transition-all ${
                    darkMode ? 'border-slate-800 bg-slate-900 text-slate-300 hover:text-blue-400 hover:border-blue-500/40' : 'border-slate-200 bg-white text-slate-700 hover:text-blue-600 hover:border-blue-300'
                  }`}
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className={`p-2.5 rounded-xl border transition-all ${
                    darkMode ? 'border-slate-800 bg-slate-900 text-slate-300 hover:text-rose-400 hover:border-rose-500/40' : 'border-slate-200 bg-white text-slate-700 hover:text-rose-600 hover:border-rose-300'
                  }`}
                  title="Kirim Email Langsung"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Visual Avatar Card & Interactive Metrics */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              
              {/* Outer Glowing Glass Card Frame */}
              <div className={`p-6 rounded-3xl border shadow-2xl relative overflow-hidden backdrop-blur-xl ${
                darkMode
                  ? 'bg-slate-900/70 border-slate-800/80 shadow-black/40'
                  : 'bg-white/80 border-slate-200/80 shadow-slate-200/80'
              }`}>
                {/* Decorative Top Banner Pattern */}
                <div className="h-32 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 p-4 flex items-end justify-between relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none" />
                  <span className="text-white/90 text-xs font-semibold uppercase tracking-wider bg-black/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    S1 Informatika UNESA
                  </span>
                  <div className="flex items-center gap-1.5 text-white bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full text-xs">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>Cum Laude</span>
                  </div>
                </div>

                {/* Profile Avatar & Quick Stats Overlay */}
                <div className="flex flex-col items-center -mt-14 px-2">
                  <div className="w-28 h-28 rounded-2xl p-1 bg-gradient-to-tr from-blue-500 via-indigo-500 to-cyan-400 shadow-xl relative group">
                    <img
                      src={personalInfo.avatar}
                      alt={personalInfo.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute -bottom-1 -right-1 p-1 bg-emerald-500 rounded-lg text-white shadow-md">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className={`mt-4 text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs font-medium text-blue-500 mt-0.5">
                    {personalInfo.degreeShort}
                  </p>

                  {/* Highlights Grid Inside Card */}
                  <div className="grid grid-cols-2 gap-3 w-full mt-6">
                    <div className={`p-3 rounded-xl border text-center ${
                      darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}>
                      <span className="block text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                        3.82
                      </span>
                      <span className={`text-[11px] font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        IPK Cum Laude
                      </span>
                    </div>

                    <div className={`p-3 rounded-xl border text-center ${
                      darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}>
                      <span className="block text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-400">
                        8+
                      </span>
                      <span className={`text-[11px] font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        Proyek Selesai
                      </span>
                    </div>
                  </div>

                  {/* Key Tech Badges Row */}
                  <div className="w-full mt-5 pt-4 border-t border-slate-200/50 dark:border-slate-800/80">
                    <span className={`text-xs font-semibold block mb-2 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      Tech Stack Utama:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {['React', 'TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind'].map((tech) => (
                        <span
                          key={tech}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-medium ${
                            darkMode
                              ? 'bg-slate-800 text-slate-300 border border-slate-700/60'
                              : 'bg-slate-100 text-slate-700 border border-slate-200'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Badge Decorative Element */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className={`absolute -top-4 -left-4 p-3 rounded-2xl border shadow-xl flex items-center gap-3 backdrop-blur-md ${
                  darkMode ? 'bg-slate-900/90 border-slate-800 text-white' : 'bg-white/90 border-slate-200 text-slate-900'
                }`}
              >
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-500">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold">Full Stack Engineer</span>
                  <span className="block text-[10px] text-blue-400">Ready to Deploy</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                className={`absolute -bottom-4 -right-4 p-3 rounded-2xl border shadow-xl flex items-center gap-3 backdrop-blur-md ${
                  darkMode ? 'bg-slate-900/90 border-slate-800 text-white' : 'bg-white/90 border-slate-200 text-slate-900'
                }`}
              >
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold">Teknik Informatika</span>
                  <span className="block text-[10px] text-amber-500">UNESA Surabaya</span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
