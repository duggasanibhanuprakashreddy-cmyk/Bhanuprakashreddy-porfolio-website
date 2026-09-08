export interface Project {
  id: string;
  title: string;
  badge: string;
  badgeType: 'cyan' | 'purple' | 'blue';
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  iconName: string;
}

export interface SkillItem {
  name: string;
  tag: string;
  level?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  accentColor: 'cyan' | 'purple' | 'blue';
  items: SkillItem[];
}

export interface TimelineItem {
  id: string;
  period: string;
  location?: string;
  title: string;
  organization?: string;
  description: string;
  tags: string[];
  status?: string;
  accentColor: 'cyan' | 'purple';
}

export interface Certification {
  id: string;
  title: string;
  description: string;
  organization: string;
  partnerBadge: string;
  iconName: string;
  accentColor: 'cyan' | 'purple' | 'blue';
}

export interface LearningStage {
  step: string;
  title: string;
  status: string;
  statusType: 'completed' | 'proficient' | 'active' | 'in-progress' | 'future';
}
