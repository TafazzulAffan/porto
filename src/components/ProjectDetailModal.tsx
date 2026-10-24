import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Github, ExternalLink, CheckCircle2, Layers, 
  Sparkles, Code2, Cpu, ArrowUpRight
} from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  darkMode: boolean;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  darkMode
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className={`relative w-full max-w-3xl rounded-3xl border shadow-2xl overflow-hidden my-8 z-10 max-h-[90vh] flex flex-col ${
            darkMode
              ? 'bg-slate-900 border-slate-800 text-slate-100'
              : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          {/* Header Image Banner */}
          <div className="relative h-60 sm:h-72 w-full flex-shrink-0 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            <button
              onClick={onClose}
              id="project-modal-close-btn"
              className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/60 hover:bg-slate-950 text-white backdrop-blur-md transition-all z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-6 right-6">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500 text-white shadow-md inline-block mb-2">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 space-y-6 overflow-y-auto flex-1">
            
            {/* Action Buttons Header */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all flex items-center gap-2 ${
                  darkMode
                    ? 'bg-slate-800 border-slate-700 text-white hover:bg-slate-700'
                    : 'bg-slate-100 border-slate-300 text-slate-900 hover:bg-slate-200'
                }`}
              >
                <Github className="w-4 h-4 text-blue-400" />
                <span>GitHub Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20 hover:from-blue-500 hover:to-indigo-500 transition-all flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Deployment Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Description */}
            <div>
              <h3 className={`text-sm font-bold uppercase tracking-wider mb-2 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Deskripsi & Tujuan Proyek
              </h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {project.longDescription}
              </p>
            </div>

            {/* Key Features & Highlights */}
            <div>
              <h3 className={`text-sm font-bold uppercase tracking-wider mb-3 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Fitur Kunci & Keunggulan
              </h3>
              <ul className="space-y-2.5">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="w-4.5 h-4.5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className={darkMode ? 'text-slate-200' : 'text-slate-800'}>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture Stack */}
            {project.architecture && (
              <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  <Layers className="w-4 h-4 text-blue-500" />
                  <span>Gambaran Arsitektur Sistem</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.architecture.map((arch, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-xl text-xs font-medium border ${
                        darkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-300 text-slate-700'
                      }`}
                    >
                      {arch}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Tags */}
            <div>
              <h3 className={`text-xs font-bold uppercase tracking-wider mb-2 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Teknologi Yang Digunakan:
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className={`p-4 border-t flex items-center justify-between flex-shrink-0 ${
            darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <span className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Dibuat oleh Tafazzul Affan • S1 Informatika UNESA
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-white hover:bg-slate-700 transition-all"
            >
              Tutup
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
