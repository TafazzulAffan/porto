import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Code2, Server, Database, Box, Sparkles, CheckCircle2, 
  Layers, Terminal, FileCode2, Globe, Palette, Layout, Cpu, 
  Network, ShieldCheck, HardDrive, Cloud, Table, GitBranch, Zap, Figma
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { Skill } from '../types';

interface SkillsSectionProps {
  darkMode: boolean;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database & Cloud', 'Tools & Methods'];

  const filteredSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter(skill => skill.category === selectedCategory);

  // Helper map for dynamic icon lookup
  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return Code2;
      case 'FileCode2': return FileCode2;
      case 'Globe': return Globe;
      case 'Palette': return Palette;
      case 'Layout': return Layout;
      case 'Sparkles': return Sparkles;
      case 'Cpu': return Cpu;
      case 'Server': return Server;
      case 'Terminal': return Terminal;
      case 'Network': return Network;
      case 'ShieldCheck': return ShieldCheck;
      case 'Layers': return Layers;
      case 'Database': return Database;
      case 'HardDrive': return HardDrive;
      case 'Cloud': return Cloud;
      case 'Table': return Table;
      case 'GitBranch': return GitBranch;
      case 'Box': return Box;
      case 'Zap': return Zap;
      case 'Figma': return Figma;
      default: return CheckCircle2;
    }
  };

  return (
    <section className="py-20 relative" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 dark:text-indigo-400 mb-3">
            <Code2 className="w-4 h-4" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Keahlian Teknis & Penguasaan Tool
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Penguasaan teknologi modern yang diimplementasikan secara profesional dalam berbagai arsitektur proyek.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              id={`skills-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                  : darkMode
                  ? 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category === 'All' ? 'Semua Keahlian' : category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, idx) => {
            const IconComponent = getSkillIcon(skill.iconName);
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-xl group ${
                  darkMode
                    ? 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                    : 'bg-white border-slate-200/80 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 border border-blue-500/20 text-blue-500 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {skill.name}
                      </h3>
                      <span className={`text-[11px] font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  {skill.popular && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/10 border border-amber-500/20 text-amber-500">
                      Core Stack
                    </span>
                  )}
                </div>

                {/* Skill Level Progress Bar */}
                <div className="mt-3">
                  <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
                    <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>Tingkat Penguasaan</span>
                    <span className="text-blue-500 font-bold">{skill.level}%</span>
                  </div>
                  <div className={`w-full h-2 rounded-full overflow-hidden ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
