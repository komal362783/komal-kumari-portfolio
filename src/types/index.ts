export interface Project {
  id: string;
  title: string;
  category: string;
  filterTags: string[];
  shortDescription: string;
  technologies: string[];
  keyCapabilities: string[];
  githubUrl: string;
  isSyntheticData?: boolean;
  caseStudy: {
    problem: string;
    approach: string[];
    tools: string[];
    analysisHighlights: string[];
    insights: string[];
  };
}

export interface SkillCategory {
  id: string;
  categoryName: string;
  iconName: string;
  skills: {
    name: string;
    levelDescription?: string;
    highlight?: boolean;
  }[];
  sqlSpecialTopics?: string[]; // Specific for SQL basic topics
}

export interface SoftSkill {
  name: string;
  description: string;
  iconName: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  type: string;
  duration: string;
  location: string;
  description: string;
  deliverables: string[];
  technologies: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badgeType: 'enterprise' | 'technical' | 'foundational';
  verificationNote?: string;
}

export interface PipelineStep {
  stepNumber: number;
  id: string;
  title: string;
  tagline: string;
  description: string;
  techniques: string[];
  toolsUsed: string[];
  sampleLogic: string;
}
