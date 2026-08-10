export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problemSolved?: string;
  keyFeatures: string[];
  technologies: string[];
  featured?: boolean;
  category: 'Full Stack' | 'Frontend' | 'Machine Learning' | 'Web Utility';
  image: string;
  githubUrl?: string; // If undefined or empty, shown as configurable/coming soon
  liveUrl?: string;
  learned: string[];
  screenshots?: { caption: string; url: string }[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    icon?: string;
    level?: 'Advanced' | 'Intermediate' | 'Core';
    tag?: string;
  }[];
}

export interface JourneyMilestone {
  year: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface EducationInfo {
  degree: string;
  field: string;
  institution: string;
  university: string;
  semester: string;
  duration: string;
  status: string;
  highlights: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    headline: string;
    degree: string;
    semester: string;
    email: string;
    location: string;
    github: string;
    linkedin: string;
    resumeUrl: string;
    bio: string;
    shortAbout: string;
  };
  skills: SkillCategory[];
  projects: Project[];
  journey: JourneyMilestone[];
  education: EducationInfo;
}
