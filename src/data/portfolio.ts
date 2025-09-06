import { Skill, Experience, Project, Education, Certification } from '../types';

export const personalInfo = {
  name: "Ravi Kumar",
  title: "Senior Software Engineer",
  experience: "4+ years",
  location: "Noida, India",
  phone: "+91 8295026938",
  email: "k.ravidahiya98@gmail.com",
  linkedin: "ravi-kumar-dahiya",
  summary: "Senior Software Engineer with 4+ years of experience designing high-performance back-end systems. Proficient in Java and Spring Boot with a strong track record in developing scalable microservices and secure REST APIs. Demonstrated success in migrating monolithic applications to microservices architecture, optimizing performance, and driving CI/CD automation."
};

export const achievements = [
  { label: "Scalability Improvement", value: 40, suffix: "%" },
  { label: "Deployment Time Reduction", value: 30, suffix: "%" },
  { label: "Authentication Success Rate", value: 99.9, suffix: "%" },
  { label: "Code Coverage Achieved", value: 90, suffix: "%+" }
];

export const skills: Skill[] = [
  { name: "Java", level: 90, icon: "☕", category: "Programming" },
  { name: "Spring Boot", level: 90, icon: "🚀", category: "Framework" },
  { name: "Spring Framework", level: 85, icon: "🌱", category: "Framework" },
  { name: "Microservices", level: 88, icon: "🏗️", category: "Architecture" },
  { name: "REST APIs", level: 92, icon: "🔗", category: "Development" },
  { name: "PostgreSQL", level: 85, icon: "🐘", category: "Database" },
  { name: "MongoDB", level: 75, icon: "🍃", category: "Database" },
  { name: "Docker", level: 70, icon: "🐳", category: "DevOps" },
  { name: "Kubernetes", level: 68, icon: "⚙️", category: "DevOps" },
  { name: "Jenkins", level: 72, icon: "🔧", category: "DevOps" },
  { name: "JUnit 5", level: 88, icon: "✅", category: "Testing" },
  { name: "Git", level: 90, icon: "📝", category: "Tools" }
];

export const experience: Experience[] = [
  {
    company: "Paytm",
    position: "Senior Software Engineer",
    period: "Apr 2025 - Present",
    location: "Noida, India",
    achievements: [
      "Migrated monolithic architecture to microservices, achieving 40% scalability improvement",
      "Resolved SSO integration with Okta, maintaining 99.9% authentication success rate",
      "Developed critical modules using Spring Framework and advanced Java concepts",
      "Led technical initiatives for performance optimization and system reliability"
    ]
  },
  {
    company: "IDEMIA",
    position: "Software Engineer",
    period: "Oct 2021 - Apr 2025",
    location: "Noida, India",
    achievements: [
      "Built high-performance data processing tools handling 1M+ records in real-time",
      "Successfully migrated database systems from MongoDB to PostgreSQL",
      "Achieved 90%+ code coverage through comprehensive testing and automated CI/CD",
      "Implemented biometric recognition systems with quality inspection features"
    ]
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Campaign Processing as a Service (CPASS)",
    client: "Liberty Latin America",
    description: "Large-scale customer campaign platform for WhatsApp, SMS, email, and push notifications",
    technologies: ["Java", "Spring Boot", "Microservices", "REST APIs"],
    impact: "Improved delivery reliability and customer engagement across multiple channels"
  },
  {
    id: 2,
    title: "Data Decryption Utility",
    client: "MASCOM",
    description: "High-performance data decryption utility designed for processing large datasets",
    technologies: ["Java", "Spring Boot", "MongoDB", "Security"],
    features: ["Swift decryption capabilities", "Secure data handling", "Batch processing"]
  },
  {
    id: 3,
    title: "Consistency Tool",
    client: "MXGA",
    description: "Data consistency detection and resolution between MBSS and IBRS systems",
    technologies: ["Java", "Spring Boot", "Data Processing"],
    impact: "Ensured data integrity and efficient processing across distributed systems"
  },
  {
    id: 4,
    title: "IdManage Platform",
    client: "IDEMIA",
    description: "Scalable user enrollment and authentication platform",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Authentication"],
    features: ["End-to-end digital identity lifecycle management", "Multi-factor authentication"]
  },
  {
    id: 5,
    title: "Biometric Recognition System (IBRS)",
    client: "IDEMIA",
    description: "Automated Biometric Identification System with quality inspection",
    technologies: ["Java", "Machine Learning", "Biometrics"],
    features: ["Quality inspection", "Authentication", "Identity duplication prevention"]
  }
];

export const education: Education[] = [
  {
    degree: "B.Tech, Computer Science Engineering",
    institution: "Hindu College of Engineering",
    period: "2017-2021",
    gpa: "7.67/10"
  }
];

export const certifications: Certification[] = [
  {
    name: "Certified Scrum Product Owner (CSPO)",
    issuer: "Scrum Alliance",
    year: "2024"
  }
];