import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Award, CheckCircle2, GraduationCap, Briefcase, Mail, 
  Phone, Download, Copy, Printer, Check, Star, ShieldCheck, MapPin, Sparkles
} from 'lucide-react';
import { personalInfo, recruiterSummary, educationData } from '../data/portfolioData';

interface RecruiterFastViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  onOpenCvPreview: () => void;
}

export const RecruiterFastViewModal: React.FC<RecruiterFastViewModalProps> = ({
  isOpen,
  onClose,
  darkMode,
  onOpenCvPreview
}) => {
  const [copiedEmail, setCopiedEmail] = React.useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

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
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className={`relative w-full max-w-3xl rounded-3xl border shadow-2xl overflow-hidden my-8 z-10 max-h-[90vh] flex flex-col ${
            darkMode
              ? 'bg-slate-900 border-slate-800 text-slate-100'
              : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 p-6 text-white relative flex-shrink-0">
            <button
              onClick={onClose}
              id="recruiter-modal-close-btn"
              className="absolute top-5 right-5 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md border border-white/30 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-200" />
                <span>Executive Summary Fast Mode for HRD</span>
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {personalInfo.name}
            </h2>
            <p className="text-amber-100 text-sm font-medium mt-1">
              {recruiterSummary.headline}
            </p>
          </div>

          {/* Modal Content - Scrollable */}
          <div className="p-6 space-y-6 overflow-y-auto flex-1">
            
            {/* Quick Metrics Cards Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className={`p-3.5 rounded-2xl border ${darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <span className="block text-xs text-amber-500 font-semibold mb-1">Status Kerja</span>
                <span className="text-sm font-bold text-emerald-500 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Ready to Hire
                </span>
              </div>

              <div className={`p-3.5 rounded-2xl border ${darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <span className="block text-xs text-amber-500 font-semibold mb-1">Pendidikan</span>
                <span className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  S1 Informatika
                </span>
                <span className="text-[11px] text-blue-400 block">UNESA (IPK 3.82)</span>
              </div>

              <div className={`p-3.5 rounded-2xl border ${darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <span className="block text-xs text-amber-500 font-semibold mb-1">Pengalaman</span>
                <span className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  2+ Tahun
                </span>
                <span className="text-[11px] text-slate-400 block">Proyek & Freelance</span>
              </div>

              <div className={`p-3.5 rounded-2xl border ${darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <span className="block text-xs text-amber-500 font-semibold mb-1">Lokasi Kerja</span>
                <span className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Surabaya / Remote
                </span>
                <span className="text-[11px] text-slate-400 block">Ready Relocation</span>
              </div>
            </div>

            {/* Why Hire Tafazzul - Key Strengths */}
            <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-amber-50/50 border-amber-200/60'}`}>
              <h3 className={`text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2 ${
                darkMode ? 'text-amber-400' : 'text-amber-700'
              }`}>
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>Poin Keunggulan Utama Kandidat</span>
              </h3>
              <ul className="space-y-2.5">
                {recruiterSummary.keyStrengths.map((strength, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className={darkMode ? 'text-slate-200' : 'text-slate-800'}>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Job Roles */}
            <div>
              <h4 className={`text-xs font-bold uppercase tracking-wider mb-2.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Posisi Pekerjaan Yang Diharapkan:
              </h4>
              <div className="flex flex-wrap gap-2">
                {recruiterSummary.preferredRoles.map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-blue-500/20 text-blue-500 dark:text-blue-400"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Education Highlight */}
            <div className={`p-4 rounded-2xl border flex items-start gap-4 ${
              darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {educationData.degree}
                  </h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400">
                    {educationData.gpa}
                  </span>
                </div>
                <p className="text-xs text-blue-400 font-medium">
                  {educationData.institution} • {educationData.period}
                </p>
                <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Lulus dengan predikat Cum Laude. Berfokus pada Rekayasa Perangkat Lunak, Pemrograman Web Fullstack, dan Arsitektur Sistem Terdistribusi.
                </p>
              </div>
            </div>

            {/* Quick Contact & Action Buttons */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-cyan-500/10 border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="p-2.5 rounded-xl bg-blue-500 text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className={`block text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Email Langsung:</span>
                  <span className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {personalInfo.email}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  onClick={handleCopyEmail}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                    copiedEmail
                      ? 'bg-emerald-500 text-white border-emerald-500'
                      : darkMode
                      ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
                      : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  {copiedEmail ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedEmail ? 'Tersalin!' : 'Salin Email'}</span>
                </button>

                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/20 transition-all flex items-center gap-1.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Footer Actions */}
          <div className={`p-4 border-t flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0 ${
            darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <span className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Kandidat siap diproses untuk tahap Interview & Skill Test.
            </span>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                onClick={() => {
                  onClose();
                  onOpenCvPreview();
                }}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20 hover:from-blue-500 hover:to-indigo-500 transition-all flex items-center gap-1.5"
              >
                <Printer className="w-4 h-4" />
                <span>Buka Formatted CV Preview</span>
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
