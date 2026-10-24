import React from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, Calendar, MapPin, CheckCircle2, 
  Building2, GraduationCap, ChevronRight
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

interface ExperienceSectionProps {
  darkMode: boolean;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ darkMode }) => {
  return (
    <section className="py-20 relative" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 dark:text-emerald-400 mb-3">
            <Briefcase className="w-4 h-4" />
            <span>Riwayat Pengalaman</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Pengalaman Kerja & Kontribusi
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Pengalaman praktis menggarap proyek software, magang di industri, dan kontribusi akademik di UNESA.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className={`absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 ${
            darkMode ? 'bg-slate-800' : 'bg-slate-200'
          }`} />

          <div className="space-y-12">
            {experienceData.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative flex flex-col sm:flex-row items-center"
                >
                  {/* Timeline Dot Icon */}
                  <div className={`absolute left-4 sm:left-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-2xl p-2 border shadow-lg flex items-center justify-center ${
                    darkMode
                      ? 'bg-slate-900 border-slate-700 text-blue-400'
                      : 'bg-white border-slate-300 text-blue-600'
                  }`}>
                    {exp.type === 'Academic / Lab' ? (
                      <GraduationCap className="w-5 h-5 text-amber-500" />
                    ) : (
                      <Briefcase className="w-5 h-5 text-blue-500" />
                    )}
                  </div>

                  {/* Experience Content Box */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                    isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:ml-auto'
                  }`}>
                    <div className={`p-6 rounded-3xl border shadow-md transition-all hover:shadow-xl ${
                      darkMode
                        ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}>
                      
                      {/* Period Badge & Type */}
                      <div className={`flex flex-wrap items-center gap-2 mb-2 ${
                        isEven ? 'sm:justify-end' : 'justify-start'
                      }`}>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-500 border border-blue-500/20 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{exp.period}</span>
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          exp.type === 'Full-time' ? 'bg-emerald-500/10 text-emerald-500' :
                          exp.type === 'Internship' ? 'bg-indigo-500/10 text-indigo-500' : 'bg-amber-500/10 text-amber-500'
                        }`}>
                          {exp.type}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className={`text-lg font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {exp.role}
                      </h3>
                      <p className="text-xs font-semibold text-blue-500 flex items-center gap-1 mt-0.5 mb-2 justify-start sm:justify-start">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>{exp.company}</span>
                        <span className="text-slate-400">• {exp.location}</span>
                      </p>

                      <p className={`text-xs leading-relaxed mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                        {exp.description}
                      </p>

                      {/* Key Achievements List */}
                      <div className="space-y-2 mb-4">
                        {exp.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className={`flex items-start gap-2 text-xs ${
                            isEven ? 'sm:flex-row-reverse sm:text-right' : 'flex-row text-left'
                          }`}>
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>{ach}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Tags */}
                      <div className={`flex flex-wrap gap-1.5 ${isEven ? 'sm:justify-end' : 'justify-start'}`}>
                        {exp.techUsed.map((tech) => (
                          <span
                            key={tech}
                            className={`px-2 py-0.5 rounded text-[10px] font-medium ${
                              darkMode
                                ? 'bg-slate-800 text-slate-300 border border-slate-700/50'
                                : 'bg-slate-100 text-slate-700 border border-slate-200'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
