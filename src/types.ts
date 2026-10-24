export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: 'Full Stack' | 'Frontend' | 'Backend' | 'AI / Machine Learning';
  image: string;
  githubUrl: string;
  demoUrl: string;
  tags: string[];
  featured: boolean;
  highlights: string[];
  architecture?: string[];
}

export interface Skill {
  name: string;
  level: number; // 0 - 100
  category: 'Frontend' | 'Backend' | 'Database & Cloud' | 'Tools & Methods';
  iconName: string;
  popular?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Internship' | 'Academic / Lab';
  description: string;
  achievements: string[];
  techUsed: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  highlights: string[];
}

export interface RecruiterSummary {
  headline: string;
  experienceYears: string;
  status: string;
  preferredRoles: string[];
  keyStrengths: string[];
  educationBadge: string;
  locationPreference: string;
}
