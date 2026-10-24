import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, Phone, MapPin, Send, Github, Linkedin, 
  CheckCircle2, Sparkles, MessageSquare, Copy, Check
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ContactSectionProps {
  darkMode: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    }, 5000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="py-20 relative" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-rose-500/10 border border-rose-500/20 text-rose-500 dark:text-rose-400 mb-3">
            <Mail className="w-4 h-4" />
            <span>Hubungi Saya</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Mari Berdiskusi & Bekerja Sama
          </h2>
          <p className={`mt-3 text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Apakah Anda seorang HRD, Recruiter, atau Engineering Manager? Saya siap mendiskusikan peluang kerja dan kolaborasi proyek.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Direct Email Card */}
            <div className={`p-6 rounded-3xl border transition-all ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-rose-500/10 text-rose-500">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1 ${
                    copiedEmail
                      ? 'bg-emerald-500 text-white border-emerald-500'
                      : darkMode
                      ? 'bg-slate-800 border-slate-700 text-slate-300'
                      : 'bg-slate-100 border-slate-200 text-slate-700'
                  }`}
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Tersalin!' : 'Salin Email'}</span>
                </button>
              </div>
              <span className={`block text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Email Respon Cepat:
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className={`text-base sm:text-lg font-bold ${darkMode ? 'text-white hover:text-rose-400' : 'text-slate-900 hover:text-rose-600'} transition-colors`}
              >
                {personalInfo.email}
              </a>
            </div>

            {/* WhatsApp Direct Chat Card */}
            <div className={`p-6 rounded-3xl border transition-all ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 w-fit mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <span className={`block text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                WhatsApp & Telepon:
              </span>
              <a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-bold text-emerald-500 hover:underline inline-flex items-center gap-2 mt-1"
              >
                <span>Hubungi via WhatsApp</span>
              </a>
            </div>

            {/* Location & Status Card */}
            <div className={`p-6 rounded-3xl border ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500 w-fit mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <span className={`block text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Lokasi Dominan & Ketersediaan:
              </span>
              <p className={`text-sm font-bold mt-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Surabaya, Jawa Timur, Indonesia
              </p>
              <p className="text-xs text-blue-400 font-medium mt-1">
                Open for Remote, Hybrid, & Relocation
              </p>
            </div>

          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className={`p-8 rounded-3xl border shadow-xl ${
              darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Kirim Pesan Langsung
              </h3>
              <p className={`text-xs sm:text-sm mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Isi formulir di bawah ini untuk mengirim pesan langsung mengenai tawaran pekerjaan atau diskusi proyek.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 mx-auto" />
                  <h4 className="font-bold text-lg">Pesan Berhasil Terkirim!</h4>
                  <p className="text-xs text-emerald-400">
                    Terima kasih telah menghubungi Tafazzul Affan. Pesan Anda telah diterima dan akan dibalas secepatnya.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs font-bold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        Nama Anda / HRD *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Masukkan nama lengkap"
                        id="contact-form-name"
                        className={`w-full px-4 py-3 rounded-2xl text-xs sm:text-sm border outline-none transition-all ${
                          darkMode
                            ? 'bg-slate-950 border-slate-800 text-white focus:border-rose-500'
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-rose-500'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-bold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        Email Perusahaan / Kontak *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contoh@perusahaan.com"
                        id="contact-form-email"
                        className={`w-full px-4 py-3 rounded-2xl text-xs sm:text-sm border outline-none transition-all ${
                          darkMode
                            ? 'bg-slate-950 border-slate-800 text-white focus:border-rose-500'
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-rose-500'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-xs font-bold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        Nama Perusahaan / Institusi
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="PT Tech Innovation"
                        id="contact-form-company"
                        className={`w-full px-4 py-3 rounded-2xl text-xs sm:text-sm border outline-none transition-all ${
                          darkMode
                            ? 'bg-slate-950 border-slate-800 text-white focus:border-rose-500'
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-rose-500'
                        }`}
                      />
                    </div>

                    <div>
                      <label className={`block text-xs font-bold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        Subjek Pesan
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Penawaran Posisi Full Stack Developer"
                        id="contact-form-subject"
                        className={`w-full px-4 py-3 rounded-2xl text-xs sm:text-sm border outline-none transition-all ${
                          darkMode
                            ? 'bg-slate-950 border-slate-800 text-white focus:border-rose-500'
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-rose-500'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-xs font-bold mb-1.5 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      Isi Pesan / Detail Lowongan *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tuliskan detail tawaran pekerjaan atau diskusi proyek di sini..."
                      id="contact-form-message"
                      className={`w-full px-4 py-3 rounded-2xl text-xs sm:text-sm border outline-none transition-all ${
                        darkMode
                          ? 'bg-slate-950 border-slate-800 text-white focus:border-rose-500'
                          : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-rose-500'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-form-submit-btn"
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-rose-500 via-rose-600 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-bold text-sm shadow-lg shadow-rose-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Pesan Ke Tafazzul</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
