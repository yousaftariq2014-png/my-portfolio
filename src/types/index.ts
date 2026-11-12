export type ServiceId = 'forex-trading' | 'ai-video' | 'prompt-engineering' | 'web-development' | 'academic-writing';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  highlights: string[];
  image?: string;
  tags: string[];
  externalUrl?: string;
  caseStudyUrl?: string;
  type?: 'forex-terminal' | 'video-studio' | 'prompt-studio' | 'web-demo' | 'desktop' | 'phone' | 'game' | 'dice' | 'pdf-viewer';
  stats?: { label: string; value: string }[];
  promptTemplate?: string;
  challenge?: string;
  solution?: string;
  impactMetrics?: { label: string; value: string }[];
  pdfUrl?: string;
  pagesCount?: number;
}

export interface ServiceDoor {
  id: ServiceId;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  features: string[];
  colorTheme: {
    doorColor: string;
    doorBorder: string;
    glowColor: string;
    accentColor: string;
    plaqueBg: string;
  };
  projects: Project[];
}

export interface TimelineMilestone {
  year: number;
  dateRange: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
}
