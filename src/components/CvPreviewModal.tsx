import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Download, Printer, GraduationCap, Briefcase, Code2, 
  Mail, Phone, MapPin, Globe, CheckCircle2, Award
} from 'lucide-react';
import { personalInfo, educationData, experienceData, skillsData, recruiterSummary } from '../data/portfolioData';

interface CvPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const CvPreviewModal: React.FC<CvPreviewModalProps> = ({
  isOpen,
  onClose,
  darkMode
}) => {
  const cvRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
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
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className={`relative w-full max-w-4xl rounded-3xl border shadow-2xl overflow-hidden my-8 z-10 max-h-[90vh] flex flex-col ${
            darkMode
              ? 'bg-slate-900 border-slate-800 text-slate-100'
              : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          {/* Top Bar */}
          <div className="p-4 border-b flex items-center justify-between bg-slate-950 text-white flex-shrink-0">
            <div className="flex items-center gap-2">
              <Printer className="w-5 h-5 text-blue-400" />
              <span className="font-bold text-sm">Curriculum Vitae Preview (Tafazzul Affan)</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                id="cv-modal-print-btn"
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-1.5 shadow-md"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Cetak / Simpan PDF</span>
              </button>

              <button
                onClick={onClose}
                id="cv-modal-close-btn"
                className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable CV Paper */}
          <div className="p-6 sm:p-10 overflow-y-auto flex-1 bg-white text-slate-900 print:p-0 print:m-0" ref={cvRef}>
            
            {/* CV Header */}
            <div className="border-b-2 border-slate-900 pb-6 mb-6">
              <h1 className="text-3xl font-black uppercase tracking-tight text-slate-900">
                {personalInfo.name}
              </h1>
              <p className="text-sm font-bold text-blue-600 uppercase tracking-wide mt-1">
                {personalInfo.title} • {personalInfo.degreeShort}
              </p>

              <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-600 mt-3">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  {personalInfo.email}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  {personalInfo.location}
                </span>
                <span className="flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-blue-600" />
                  {personalInfo.github}
                </span>
              </div>
            </div>

            {/* Executive Summary */}
            <div className="mb-6">
              <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Ringkasan Eksekutif
              </h2>
              <p className="text-xs text-slate-700 leading-relaxed">
                {personalInfo.bio} Menguasai arsitektur pengembangan web modern dari frontend (React, TypeScript, Next.js, Tailwind CSS) hingga backend (Node.js, Express, PostgreSQL, MySQL). Memiliki latar belakang akademis kuat dari Universitas Negeri Surabaya dengan predikat Cum Laude (IPK 3.82).
              </p>
            </div>

            {/* Education Section */}
            <div className="mb-6">
              <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Pendidikan Formal
              </h2>
              <div className="flex justify-between items-start text-xs">
                <div>
                  <h3 className="font-bold text-slate-900">{educationData.degree}</h3>
                  <p className="text-blue-600 font-semibold">{educationData.institution}</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-slate-900">{educationData.period}</span>
                  <p className="text-emerald-700 font-bold">IPK: {educationData.gpa}</p>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="mb-6">
              <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Keahlian Teknis
              </h2>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="font-bold text-slate-900 block mb-0.5">Frontend & UI:</span>
                  <p className="text-slate-700">React.js, TypeScript, Next.js, Tailwind CSS, HTML5, CSS3, Motion, State Management (Zustand/Redux).</p>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block mb-0.5">Backend & Database:</span>
                  <p className="text-slate-700">Node.js, Express.js, RESTful API, PostgreSQL, MySQL, MongoDB, Firebase Firestore, Prisma ORM.</p>
                </div>
              </div>
            </div>

            {/* Work & Project Experience */}
            <div className="mb-6">
              <h2 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                Pengalaman Kerja & Akademik
              </h2>
              <div className="space-y-4">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="text-xs">
                    <div className="flex justify-between font-bold text-slate-900">
                      <span>{exp.role} - {exp.company}</span>
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-slate-600 mt-0.5">{exp.description}</p>
                    <ul className="list-disc list-inside mt-1 space-y-0.5 text-slate-700 pl-1">
                      {exp.achievements.map((ach, i) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="p-4 border-t bg-slate-950 text-slate-400 text-xs flex justify-between items-center flex-shrink-0">
            <span>Tafazzul Affan - S1 Teknik Informatika UNESA</span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-all font-semibold"
            >
              Tutup Preview
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
