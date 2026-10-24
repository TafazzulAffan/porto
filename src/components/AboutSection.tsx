import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, Award, BookOpen, CheckCircle2, 
  Sparkles, Code2, Users, Lightbulb, Target, Layers
} from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolioData';

interface AboutSectionProps {
  darkMode: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ darkMode }) => {
  const coreValues = [
    {
      icon: Code2,
      title: 'Clean & Maintainable Code',
      desc: 'Menulis kode yang rapi, terstruktur, berbasis Best Practices TypeScript, modular, dan mudah dikembangkan oleh tim.'
    },
    {
      icon: Target,
      title: 'UI/UX & Performance First',
      desc: 'Mengutamakan pengalaman pengguna yang mulus, desain responsif, kecepatan muat cepat, dan aksesibilitas optimal.'
    },
    {
      icon: Lightbulb,
      title: 'Adaptif & Continuously Learning',
      desc: 'Selalu memperbarui pengetahuan dengan teknologi web modern terbaru, arsitektur cloud, dan perkakas pengembangan modern.'
    },
    {
      icon: Users,
      title: 'Kolaborasi & Komunikasi Tim',
      desc: 'Terbiasa berkolaborasi dalam metodologi Agile/Scrum, aktif berkomunikasi, dan sigap menerima masukan teknis.'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-500 dark:text-blue-400 mb-3">
            <GraduationCap className="w-4 h-4" />
            <span>Tentang & Pendidikan</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Latar Belakang Akademik & Filosofi Kerja
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Fondasi teori Ilmu Komputer yang kuat dari UNESA dipadukan dengan pengalaman praktis membangun aplikasi skala nyata.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Education Highlight Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className={`p-8 rounded-3xl border shadow-xl relative overflow-hidden ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full pointer-events-none" />

              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{educationData.gpa}</span>
                </span>
              </div>

              <h3 className={`text-2xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {educationData.degree}
              </h3>
              <p className="text-sm font-semibold text-blue-500 mt-1">
                {educationData.institution}
              </p>
              <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'} mt-0.5 mb-6`}>
                {educationData.location} • Periode {educationData.period}
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-200/50 dark:border-slate-800/80">
                <h4 className={`text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  Capaian & Fokus Studi UNESA:
                </h4>
                <ul className="space-y-3">
                  {educationData.highlights.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-xs leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span className={`text-xs font-bold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    Lulus Cum Laude / Dengan Pujian
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">Akreditasi Unggul</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Values & Story */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className={`p-8 rounded-3xl border ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Siapa Tafazzul Affan?
              </h3>
              <p className={`text-sm sm:text-base ${darkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed mb-4`}>
                Saya adalah seorang Software Engineer muda yang lulus dari S1 Teknik Informatika Universitas Negeri Surabaya. Kecintaan saya pada pengembangan aplikasi dimulai sejak bangku kuliah, di mana saya aktif mengeksplorasi pembuatan aplikasi web fullstack, dari arsitektur backend hingga komponen interaktif frontend.
              </p>
              <p className={`text-sm sm:text-base ${darkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>
                Bagi saya, menulis kode bukan sekadar membuat fitur bekerja, tetapi juga tentang menciptakan solusi yang efisien, mudah dirawat, dan memberikan nilai nyata bagi pengguna maupun kebutuhan bisnis perusahaan.
              </p>
            </div>

            {/* Core Working Principles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coreValues.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl border transition-all hover:-translate-y-1 ${
                      darkMode
                        ? 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700'
                        : 'bg-white border-slate-200/80 hover:border-slate-300'
                    }`}
                  >
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500 w-fit mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className={`text-sm font-bold mb-1.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {value.title}
                    </h4>
                    <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {value.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
