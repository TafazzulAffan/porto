import { Project, Skill, Experience, Education, RecruiterSummary } from '../types';

export const personalInfo = {
  name: 'Tafazzul Affan',
  title: 'Full Stack Developer & Software Engineer',
  degree: 'S1 Teknik Informatika - Universitas Negeri Surabaya (UNESA)',
  degreeShort: 'S1 Teknik Informatika UNESA',
  bio: 'Lulusan S1 Teknik Informatika UNESA yang berfokus pada pengembangan aplikasi web modern, sistem terdistribusi, dan UI/UX yang optimal. Berpengalaman membangun aplikasi Full Stack end-to-end yang responsif, cepat, dan scalable.',
  location: 'Surabaya, Indonesia (Open for On-Site & Remote)',
  email: 'tafazzul.affan@gmail.com',
  github: 'https://github.com/tafazzulaffan',
  linkedin: 'https://linkedin.com/in/tafazzulaffan',
  whatsapp: 'https://wa.me/6281234567890',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
  availableForHire: true,
};

export const recruiterSummary: RecruiterSummary = {
  headline: 'Software Engineer & Full Stack Developer Siap Kerja (S1 Teknik Informatika UNESA)',
  experienceYears: '2+ Tahun Pengalaman Proyek & Freelance',
  status: 'Open to Work (Full-time / Contract / Remote / Hybrid)',
  preferredRoles: ['Full Stack Developer', 'Frontend Developer (React/Next.js)', 'Backend Engineer (Node.js)', 'Software Engineer'],
  keyStrengths: [
    'Pemahaman mendalam Fondasi Ilmu Komputer & Algoritma dari UNESA',
    'Spesialis React, TypeScript, Next.js, Node.js & Express.js',
    'Pengalaman merancang RESTful API, Database PostgreSQL, MySQL, & Firestore',
    'Kemampuan problem solving yang kuat & adaptif terhadap teknologi baru',
    'Pengalaman kolaborasi tim agile, Git version control & CI/CD dasar'
  ],
  educationBadge: 'S1 Teknik Informatika UNESA (IPK 3.82 / Dengan Pujian)',
  locationPreference: 'Surabaya, Jakarta, Bandung, / Full Remote Work'
};

export const educationData: Education = {
  degree: 'S1 Teknik Informatika (Bachelor of Computer Science)',
  institution: 'Universitas Negeri Surabaya (UNESA)',
  location: 'Surabaya, Indonesia',
  period: '2020 - 2024',
  gpa: '3.82 / 4.00 (Cum Laude / Dengan Pujian)',
  highlights: [
    'Fokus Studi: Rekayasa Perangkat Lunak, Pemrograman Web, Pemrograman Terdistribusi, & UI/UX Design.',
    'Skripsi / Tugas Akhir: Pengembangan Sistem Manajemen Pembelajaran Terintegrasi Berbasis Microservices dan Real-Time Analytics.',
    'Aktif sebagai Asisten Laboratorium Komputer dan Pengajar Workshop Web Development untuk Mahasiswa.',
    'Pemenang Hackathon Komputer & Prestasi Akademik Program Studi.'
  ]
};

export const skillsData: Skill[] = [
  // Frontend
  { name: 'React.js', level: 92, category: 'Frontend', iconName: 'Code2', popular: true },
  { name: 'TypeScript', level: 88, category: 'Frontend', iconName: 'FileCode2', popular: true },
  { name: 'Next.js', level: 85, category: 'Frontend', iconName: 'Globe', popular: true },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend', iconName: 'Palette', popular: true },
  { name: 'HTML5 & Modern CSS3', level: 96, category: 'Frontend', iconName: 'Layout' },
  { name: 'Framer Motion / Motion', level: 85, category: 'Frontend', iconName: 'Sparkles' },
  { name: 'State Management (Zustand/Redux)', level: 88, category: 'Frontend', iconName: 'Cpu' },

  // Backend
  { name: 'Node.js', level: 90, category: 'Backend', iconName: 'Server', popular: true },
  { name: 'Express.js', level: 92, category: 'Backend', iconName: 'Terminal', popular: true },
  { name: 'RESTful API Design', level: 94, category: 'Backend', iconName: 'Network', popular: true },
  { name: 'Authentication (JWT / OAuth)', level: 86, category: 'Backend', iconName: 'ShieldCheck' },
  { name: 'GraphQL Basics', level: 75, category: 'Backend', iconName: 'Layers' },

  // Database & Cloud
  { name: 'PostgreSQL', level: 88, category: 'Database & Cloud', iconName: 'Database', popular: true },
  { name: 'MySQL', level: 90, category: 'Database & Cloud', iconName: 'Database' },
  { name: 'MongoDB', level: 82, category: 'Database & Cloud', iconName: 'HardDrive' },
  { name: 'Firebase & Firestore', level: 85, category: 'Database & Cloud', iconName: 'Cloud' },
  { name: 'Prisma ORM', level: 84, category: 'Database & Cloud', iconName: 'Table' },

  // Tools & Methods
  { name: 'Git & GitHub Workflow', level: 92, category: 'Tools & Methods', iconName: 'GitBranch', popular: true },
  { name: 'Docker & Containerization', level: 78, category: 'Tools & Methods', iconName: 'Box' },
  { name: 'Vite & Webpack', level: 90, category: 'Tools & Methods', iconName: 'Zap' },
  { name: 'Figma (UI/UX Prototyping)', level: 85, category: 'Tools & Methods', iconName: 'Figma' },
  { name: 'Agile / Scrum Methodologies', level: 88, category: 'Tools & Methods', iconName: 'CheckCircle2' }
];

export const experienceData: Experience[] = [
  {
    id: 'exp-1',
    role: 'Full Stack Web Developer (Project & Freelance)',
    company: 'Independent Client Projects',
    period: '2023 - Sekarang',
    location: 'Surabaya / Remote',
    type: 'Full-time',
    description: 'Membangun dan mendesain berbagai solusi web kustom untuk klien bisnis, UMKM, dan platform digital edtech.',
    achievements: [
      'Berhasil mengembangkan 8+ web app kustom dari tahap requirement gathering hingga deployment ke Cloud.',
      'Meningkatkan performa kecepatan muat halaman web sebesar 45% menggunakan strategi SSR/SSG & code splitting.',
      'Mengintegrasikan payment gateway dan antarmuka manajemen stok terpusat untuk aplikasi e-commerce.'
    ],
    techUsed: ['React', 'Next.js', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Vercel']
  },
  {
    id: 'exp-2',
    role: 'Software Developer Intern',
    company: 'PT Tech Solution Hub Surabaya',
    period: 'Juli 2023 - Desember 2023',
    location: 'Surabaya, Jawa Timur',
    type: 'Internship',
    description: 'Bekerja bersama tim engineer senior dalam mengembangkan dashboard internal dan sistem layanan pelanggan enterprise.',
    achievements: [
      'Merancang 15+ endpoint REST API baru dengan dokumentasi OpenAPI / Swagger yang terstruktur.',
      'Mengoptimalkan query database MySQL yang memangkas waktu respons API sebesar 30%.',
      'Mengimplementasikan sistem audit log real-time menggunakan WebSockets.'
    ],
    techUsed: ['TypeScript', 'Express.js', 'MySQL', 'React', 'Tailwind CSS', 'Postman']
  },
  {
    id: 'exp-3',
    role: 'Asisten Laboratorium Computer Science',
    company: 'Jurusan Teknik Informatika UNESA',
    period: 'Agustus 2022 - Juni 2023',
    location: 'UNESA Kampus Ketintang, Surabaya',
    type: 'Academic / Lab',
    description: 'Mendampingi praktikum mahasiswa dalam mata kuliah Pemrograman Web, Pemrograman Berbasis Objek, dan Struktur Data.',
    achievements: [
      'Membimbing 120+ mahasiswa dalam pengerjaan tugas praktikum dan kuis pemrograman.',
      'Menyusun modul modul pembelajaran pembuatan REST API menggunakan Node.js & Express.',
      'Menjadi juri dan mentor dalam kompetisi coding internal kampus.'
    ],
    techUsed: ['Node.js', 'JavaScript', 'HTML/CSS', 'MySQL', 'Git & GitHub']
  }
];

export const projectsData: Project[] = [
  {
    id: 'proj-1',
    title: 'EduLearn UNESA - Academic LMS Portal',
    subtitle: 'Sistem Learning Management System & Analitik Perkuliahan',
    description: 'Platform LMS terpadu untuk pengelolaan materi, pengumpulan tugas, kuis interaktif, dan pemantauan statistik akademik mahasiswa secara real-time.',
    longDescription: 'EduLearn UNESA dirancang untuk mengatasi kebutuhan platform pembelajaran modern yang cepat dan intuitif. Sistem ini dilengkapi modul absensi digital, ruang diskusi interaktif, pengumpulan tugas dengan deteksi kemiripan dasar, serta visualisasi nilai berbasis chart.',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop',
    githubUrl: 'https://github.com/tafazzulaffan/edulearn-unesa-lms',
    demoUrl: 'https://edulearn-unesa.demo.app',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Chart.js'],
    featured: true,
    highlights: [
      'Manajemen peran bertingkat (Dosen, Mahasiswa, Admin)',
      'Pengumpulan tugas dengan preview file PDF & link drive secara langsung',
      'Dashboard analitik performa kelas dan progres materi',
      'Desain responsif ramah seluler dengan skor Lighthouse 98'
    ],
    architecture: ['React SPA Frontend', 'Express REST API Backend', 'PostgreSQL Relational DB', 'JWT Authentication', 'Tailwind CSS UI']
  },
  {
    id: 'proj-2',
    title: 'NexTrade - Financial & Crypto Analytics Dashboard',
    subtitle: 'Dashboard Real-Time Pantauan Saham & Kripto',
    description: 'Dashboard finansial modern dengan visualisasi grafik harga interaktif, streaming harga live via WebSockets, dan pengelolaan portofolio.',
    longDescription: 'NexTrade menyajikan antarmuka visual mewah berbasis dark mode yang disesuaikan untuk kenyamanan para trader. Dilengkapi filter indikator teknikal dasar, daftar pantauan kustom (watchlist), serta kalkulator estimasi profit/loss.',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop',
    githubUrl: 'https://github.com/tafazzulaffan/nextrade-analytics-dashboard',
    demoUrl: 'https://nextrade-analytics.demo.app',
    tags: ['TypeScript', 'React', 'Recharts', 'Framer Motion', 'Tailwind CSS', 'WebSockets'],
    featured: true,
    highlights: [
      'Visualisasi candlestick & line chart interaktif berbasis Recharts',
      'Pembaruan harga saham & crypto secara live tanpa perlu reload',
      'Simulasi transaksi buy/sell dengan riwayat portofolio interaktif',
      'Micro-interactions & animasi transisi yang sangat halus'
    ],
    architecture: ['React + Vite + TypeScript', 'Tailwind CSS v4', 'Recharts Library', 'Framer Motion Engine', 'Local & State Persistence']
  },
  {
    id: 'proj-3',
    title: 'SmartInventory - ERP & Warehouse System',
    subtitle: 'Sistem Inventaris Gudang & Monitoring Stok Enterprise',
    description: 'Aplikasi manajemen stok barang multi-gudang dilengkapi fitur pemindaian kode bar, riwayat masuk-keluar barang, dan laporan otomatis.',
    longDescription: 'SmartInventory membantu perusahaan skala menengah memantau ketersediaan barang secara akurat. Sistem ini memiliki alarm peringatan otomatis saat stok di bawah ambang batas minimum dan pencetakan label inventaris.',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    githubUrl: 'https://github.com/tafazzulaffan/smart-inventory-erp',
    demoUrl: 'https://smart-inventory-system.demo.app',
    tags: ['Next.js', 'Express', 'MongoDB', 'Firebase Auth', 'Tailwind CSS'],
    featured: true,
    highlights: [
      'Multi-warehouse tracking & perpindahan stok antarlokasi',
      'Ekspor laporan otomatis ke format Excel / CSV & PDF',
      'Notifikasi otomatis via email saat stok hampir habis',
      'Fitur pencarian cepat dan pemfilteran kategori barang'
    ],
    architecture: ['Next.js App Router', 'Express API Layer', 'MongoDB NoSQL Database', 'Firebase Authentication', 'Tailwind Styling']
  },
  {
    id: 'proj-4',
    title: 'AI Resume & Portfolio Customizer',
    subtitle: 'Engine AI Pembuat & Analisis CV Berbasis Gemini API',
    description: 'Aplikasi web berbantuan AI untuk menganalisis kesesuaian CV dengan lowongan kerja dan memuat portofolio kustom secara otomatis.',
    longDescription: 'Memanfaatkan Gemini 3.6 Flash API untuk melakukan parsing teks CV, menghitung skor Match Score terhadap Job Description, serta memberikan saran perbaikan poin-poin pengalaman agar lebih menarik bagi kriteria HRD.',
    category: 'AI / Machine Learning',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
    githubUrl: 'https://github.com/tafazzulaffan/ai-resume-portfolio-customizer',
    demoUrl: 'https://ai-portfolio-builder.demo.app',
    tags: ['React', 'Node.js', 'Gemini AI API', 'Express', 'Tailwind CSS'],
    featured: true,
    highlights: [
      'Pemeriksaan tata bahasa & pencocokan kata kunci ATS secara cerdas',
      'Rekomendasi instan untuk pembenahan bagian pengalaman kerja',
      'Pratinjau CV interaktif yang dapat langsung di-download ke PDF',
      'Integrasi aman menggunakan Server-Side Gemini API'
    ],
    architecture: ['React Client', 'Express Server-Side API', '@google/genai SDK', 'Tailwind UI', 'PDF Generator Engine']
  },
  {
    id: 'proj-5',
    title: 'TaskFlow - Agile Kanban Workspace',
    subtitle: 'Aplikasi Manajemen Tugas & Kolaborasi Tim',
    description: 'Ruang kerja visual berbasis papan Kanban interaktif dengan drag-and-drop, penyemat label, batas waktu, dan pelacak produktivitas.',
    longDescription: 'TaskFlow memudahkan tim software pengembang dalam mengelola tugas harian. Pengguna dapat menggeser kartu tugas antar kolom (To Do, In Progress, Review, Done), menambahkan sub-task, dan melihat progres dalam bar persentase.',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    githubUrl: 'https://github.com/tafazzulaffan/taskflow-agile-kanban',
    demoUrl: 'https://taskflow-kanban.demo.app',
    tags: ['React', 'Zustand', 'HTML5 Drag&Drop', 'Tailwind CSS', 'Lucide Icons'],
    featured: false,
    highlights: [
      'Interaksi Drag and Drop intuitif dan responsif',
      'Penyimpanan state lokal yang aman tanpa takut kehilangan data',
      'Filter tugas berdasarkan prioritas (High, Medium, Low) dan assignee',
      'Desain bersih mengutamakan fokus kerja pengguna'
    ],
    architecture: ['React 19', 'Zustand State Store', 'Tailwind CSS System', 'Lucide React Icons']
  },
  {
    id: 'proj-6',
    title: 'RestoOrder - QR Code Digital Menu & Kitchen Display',
    subtitle: 'Sistem Pemesanan Restoran & Layanan Kasir Realtime',
    description: 'Sistem pemesanan makanan via scan QR meja dengan antarmuka dapur live dan konfirmasi status pesanan secara langsung.',
    longDescription: 'RestoOrder memodernisasi cara restoran melayani pelanggan. Pelanggan dapat memilih menu dari HP mereka, sementara staf dapur melihat pesanan masuk di layar Dapur (KDS) secara otomatis tanpa antrean fisik.',
    category: 'Backend',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
    githubUrl: 'https://github.com/tafazzulaffan/resto-order-system',
    demoUrl: 'https://resto-order-system.demo.app',
    tags: ['Node.js', 'Express', 'MySQL', 'Socket.io', 'React', 'Tailwind'],
    featured: false,
    highlights: [
      'Fitur QR Code generator otomatis per nomor meja',
      'Komunikasi dua arah realtime dapur & pembeli via Socket.io',
      'Laporan penjualan harian & statistik menu terlaris',
      'Sistem pembayaran simulasi QRIS & tunai'
    ],
    architecture: ['Node.js + Express', 'Socket.io Websocket Server', 'MySQL Database', 'React Merchant & Customer App']
  }
];

export const samplePromptsForHR = [
  'Mengapa Tafazzul Affan adalah kandidat yang tepat untuk perusahaan kami?',
  'Bagaimana riwayat pendidikan Tafazzul di UNESA?',
  'Apa saja proyek Full Stack utama yang sudah dikerjakan Tafazzul?',
  'Bagaimana tingkat penguasaan React, TypeScript, dan Node.js Tafazzul?',
  'Apakah Tafazzul siap bekerja secara On-Site atau Remote?'
];
