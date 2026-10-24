import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import { personalInfo, recruiterSummary, educationData, skillsData, experienceData, projectsData } from './src/data/portfolioData.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini AI Client securely on the server
  const apiKey = process.env.GEMINI_API_KEY;
  const ai = new GoogleGenAI({
    apiKey: apiKey || '',
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });

  // System instruction with Tafazzul Affan's full background
  const systemInstruction = `
You are Tafazzul Affan's Virtual AI Portfolio Assistant, representing Tafazzul Affan (a graduate of S1 Teknik Informatika at Universitas Negeri Surabaya - UNESA) to HRDs, recruiters, and technical hiring managers.

Your goal is to answer questions about Tafazzul's skills, work experience, education, projects, contact information, and hiring suitability in a professional, polite, enthusiastic, and highly articulate tone (primarily in Indonesian, or English if asked in English).

Key Information about Tafazzul Affan:
- Full Name: ${personalInfo.name}
- Title: ${personalInfo.title}
- Degree: ${personalInfo.degree}
- Education: ${educationData.degree} at ${educationData.institution} (${educationData.period}), GPA: ${educationData.gpa}. Highlights: ${educationData.highlights.join('; ')}
- Location & Availability: ${personalInfo.location}. Status: ${recruiterSummary.status}.
- Email: ${personalInfo.email}
- GitHub: ${personalInfo.github} | LinkedIn: ${personalInfo.linkedin}
- Summary & Strengths: ${recruiterSummary.headline}. Core Strengths: ${recruiterSummary.keyStrengths.join('; ')}
- Technical Skills:
  ${skillsData.map(s => `- ${s.name} (${s.category}, Level: ${s.level}%)`).join('\n  ')}
- Work & Practical Experience:
  ${experienceData.map(e => `* ${e.role} at ${e.company} (${e.period}): ${e.description}. Achievements: ${e.achievements.join('; ')}`).join('\n  ')}
- Featured Projects:
  ${projectsData.map(p => `* ${p.title} (${p.category}): ${p.description}. Tech: ${p.tags.join(', ')}. GitHub: ${p.githubUrl}, Live Demo: ${p.demoUrl}`).join('\n  ')}

Guidelines:
1. Always maintain a professional, helpful, confident, and welcoming tone.
2. Highlight Tafazzul's solid computer science foundation from UNESA, strong practical full-stack coding abilities (React, TypeScript, Next.js, Node.js, Express, PostgreSQL, Tailwind CSS), and readiness to contribute immediately to software engineering teams.
3. If asked about contact info or hiring process, provide Tafazzul's email (${personalInfo.email}) and invite them to click the 'Kontak Saya' or 'Recruiter Fast View' button in the app.
4. Keep answers clean, well-formatted with concise bullet points if needed.
`;

  // API Endpoint for AI Chat Assistant
  app.post('/api/chat', async (req, res) => {
    try {
      const { message, history } = req.body;

      if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Pesan tidak boleh kosong.' });
      }

      if (!apiKey) {
        // Fallback response if GEMINI_API_KEY is not set yet in environment
        return res.json({
          reply: `Halo! Terima kasih atas pertanyaannya. Tafazzul Affan adalah lulusan S1 Teknik Informatika UNESA (IPK 3.82) dengan keahlian utama dalam React, TypeScript, Node.js, Express, dan PostgreSQL. Beliau siap bekerja sebagai Full Stack Developer. Untuk pertanyaan lebih rinci atau mendownload CV, silakan gunakan tombol 'Recruiter Fast View' atau hubungi langsung via email di ${personalInfo.email}.`
        });
      }

      // Call Gemini 3.6 Flash
      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: [
          ...((history && Array.isArray(history)) ? history : []),
          { role: 'user', parts: [{ text: message }] }
        ],
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const reply = response.text || 'Maaf, saya tidak dapat memproses tanggapan saat ini.';
      return res.json({ reply });
    } catch (error: any) {
      console.error('Gemini API Error:', error);
      return res.status(500).json({
        error: 'Gagal mendapatkan tanggapan dari AI Assistant.',
        details: error?.message || 'Unknown error'
      });
    }
  });

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', name: personalInfo.name });
  });

  // Vite middleware for development vs static serve for production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Portfolio server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
