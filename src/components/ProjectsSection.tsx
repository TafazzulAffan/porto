import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FolderGit2, Search, Filter, Github, ExternalLink, 
  Sparkles, Layers, ArrowUpRight, Eye
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';

interface ProjectsSectionProps {
  darkMode: boolean;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'AI / Machine Learning'];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 relative" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-500 dark:text-blue-400 mb-3">
            <FolderGit2 className="w-4 h-4" />
            <span>Portofolio Proyek</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Proyek Perangkat Lunak Yang Telah Dibangun
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Koleksi aplikasi web nyata beserta tautan repositori GitHub dan live deployment demo.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${
              darkMode ? 'text-slate-400' : 'text-slate-500'
            }`} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari proyek atau teknologi (mis: React, Next.js)..."
              id="projects-search-input"
              className={`w-full pl-10 pr-4 py-2.5 rounded-2xl text-xs sm:text-sm border outline-none transition-all ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 text-white focus:border-blue-500'
                  : 'bg-white border-slate-200 text-slate-900 focus:border-blue-500 shadow-sm'
              }`}
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto justify-start md:justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                id={`project-category-${cat.toLowerCase().replace(/[\s/]+/g, '-')}`}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : darkMode
                    ? 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm'
                }`}
              >
                {cat === 'All' ? 'Semua Proyek' : cat}
              </button>
            ))}
          </div>

        </div>

        {/* Projects Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className={`p-12 text-center rounded-3xl border ${
            darkMode ? 'bg-slate-900/40 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
          }`}>
            <p className="text-sm font-medium">Tidak ada proyek yang sesuai dengan kata kunci pencarian Anda.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-3 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-500 text-white"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`group rounded-3xl border overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
                  darkMode
                    ? 'bg-slate-900/80 border-slate-800/80 hover:border-slate-700 shadow-xl shadow-black/20'
                    : 'bg-white border-slate-200/80 hover:border-slate-300 shadow-md shadow-slate-200/50'
                }`}
              >
                {/* Project Image & Category Banner */}
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase bg-blue-600 text-white shadow-md">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="px-2 py-1 rounded-full text-[10px] font-bold bg-amber-500/90 text-white flex items-center gap-1 shadow-md">
                          <Sparkles className="w-3 h-3" />
                          <span>Featured</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Main Body */}
                  <div className="p-6">
                    <h3 className={`text-lg font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-blue-500 mt-0.5 mb-2">
                      {project.subtitle}
                    </p>
                    <p className={`text-xs leading-relaxed line-clamp-3 mb-4 ${
                      darkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-0.5 rounded text-[10px] font-medium ${
                            darkMode
                              ? 'bg-slate-800 text-slate-300 border border-slate-700/60'
                              : 'bg-slate-100 text-slate-700 border border-slate-200'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${
                          darkMode ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer Action Links (GitHub & Live Demo) */}
                <div className={`px-6 py-4 border-t flex items-center justify-between gap-2 ${
                  darkMode ? 'bg-slate-950/60 border-slate-800/80' : 'bg-slate-50/80 border-slate-200/80'
                }`}>
                  <button
                    onClick={() => setActiveModalProject(project)}
                    id={`project-btn-detail-${project.id}`}
                    className={`text-xs font-semibold flex items-center gap-1 transition-colors ${
                      darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-blue-600'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5 text-blue-500" />
                    <span>Detail Specs</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {/* Direct GitHub Link */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`project-btn-github-${project.id}`}
                      className={`p-2 rounded-xl border transition-all ${
                        darkMode
                          ? 'border-slate-800 bg-slate-900 text-slate-300 hover:text-white hover:border-slate-700'
                          : 'border-slate-200 bg-white text-slate-700 hover:text-slate-900 hover:border-slate-300'
                      }`}
                      title="Lihat Repositori GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>

                    {/* Direct Live Deployment Link */}
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`project-btn-demo-${project.id}`}
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm hover:from-blue-500 hover:to-indigo-500 transition-all flex items-center gap-1"
                      title="Buka Deployment Live Demo"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        )}

        {/* Detail Modal */}
        <ProjectDetailModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
          darkMode={darkMode}
        />

      </div>
    </section>
  );
};
