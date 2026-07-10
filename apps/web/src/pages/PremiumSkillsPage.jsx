import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import SkillCard from '@/components/SkillCard.jsx';
import PageHero from '@/components/PageHero.jsx';

const skillCategories = [
  { category: 'Frontend', skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Responsive Web Design'] },
  { category: 'Backend', skills: ['PHP', 'Laravel', 'Node.js', 'Express.js', 'REST API Development', 'MVC Architecture'] },
  { category: 'Databases', skills: ['MySQL', 'PostgreSQL', 'Database Design', 'Database Management', 'SQL'] },
  { category: 'Tools and Platforms', skills: ['Git', 'GitHub', 'Visual Studio Code', 'Postman', 'npm', 'Figma', 'Android Studio'] },
  { category: 'Development Skills', skills: ['Full-Stack Web Development', 'API Integration', 'Debugging and Troubleshooting', 'PDF Generation', 'Web Scraping', 'Data Extraction', 'Workflow Automation', 'AI-Assisted Development', 'Technical Documentation', 'Software Development Life Cycle'] },
  { category: 'Soft Skills', skills: ['Problem Solving', 'Analytical Thinking', 'Communication', 'Team Collaboration', 'Adaptability', 'Attention to Detail', 'Time Management', 'Fast Learner'] }
];

function PremiumSkillsPage() {
  return (
    <>
      <Helmet>
        <title>Technical Skills | Don Robert Dimasayao</title>
        <meta name="description" content="Technical skills of Don Robert Dimasayao across frontend development, backend development, databases, tools, automation, and software development practices." />
      </Helmet>
      <PageHero index="02" eyebrow="CAPABILITIES" title="Skills &" accent="expertise." description="A practical overview of the technologies, tools, and development skills I use to build web applications and software projects" />
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
