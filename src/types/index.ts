export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface Project {
  id: number;
  title: string;
  client: string;
  description: string;
  technologies: string[];
  impact?: string;
  features?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}