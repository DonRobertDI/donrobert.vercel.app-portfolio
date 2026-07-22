import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import SkillCard from '@/components/SkillCard.jsx';
import PageHero from '@/components/PageHero.jsx';

const skillCategories = [
  {
    category: 'Frontend Development',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React',
      'Vite',
      'Tailwind CSS',
      'Responsive Web Design',
      'React Router',
      'Framer Motion'
    ]
  },
  {
    category: 'Backend and APIs',
    skills: [
      'Node.js',
      'Express.js',
      'PHP',
      'Laravel',
      'FastAPI',
      'REST API Development',
      'API Integration',
      'MVC Architecture'
    ]
  },
  {
    category: 'Databases and Application Platforms',
    skills: [
      'MySQL',
      'SQLite',
      'Firebase',
      'SQL',
      'Database Design',
      'Database Management',
      'C#',
      'Unity'
    ]
  },
  {
    category: 'Automation and Data Workflows',
    skills: [
      'Make.com',
      'Workflow Automation',
      'Workflow Routing',
      'Document Automation',
      'Google Forms',
      'Google Sheets',
      'Google Docs',
      'Google Drive',
      'AI-Assisted Development',
      'Web Scraping',
      'Data Extraction',
      'Data Validation',
      'CSV and PDF Export'
    ]
  },
  {
    category: 'Development Tools and Deployment',
    skills: [
      'Git',
      'GitHub',
      'Visual Studio Code',
      'Postman',
      'npm',
      'Figma',
      'Playwright',
      'Vercel',
      'Railway',
      'Android Studio'
    ]
  },
  {
    category: 'Professional Strengths',
    skills: [
      'Problem Solving',
      'Analytical Thinking',
      'Attention to Detail',
      'Clear Communication',
      'Reliability',
      'Adaptability',
      'Iterative Testing',
      'Technical Documentation',
      'Time Management',
      'Team Collaboration'
    ]
  }
];

function PremiumSkillsPage() {
  return (
    <>
      <Helmet>
        <title>Skills &amp; Tools | Don Robert Dimasayao</title>
        <meta name="description" content="Development, automation, data, and software tools used by Don Robert Dimasayao across web applications, workflow automation, data extraction, and academic projects." />
      </Helmet>
      <PageHero index="02" eyebrow="CAPABILITIES" title="Skills &" accent="tools." description="Technologies and workflows I have used across web development, automation, data extraction, and software projects" />
      <section className="section-pad page-content">
        <div className="section-shell skills-list">
          {skillCategories.map((category, categoryIndex) => (
            <motion.section key={category.category} className="skill-category" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
              <div className="skill-category__heading"><span>/ 0{categoryIndex + 1}</span><h2>{category.category}</h2><span>{String(category.skills.length).padStart(2, '0')} skills</span></div>
              <div className="skill-category__grid">
                {category.skills.map((skill, skillIndex) => <SkillCard key={skill} skill={skill} index={skillIndex} />)}
              </div>
            </motion.section>
          ))}
        </div>
      </section>
    </>
  );
}

export default PremiumSkillsPage;
