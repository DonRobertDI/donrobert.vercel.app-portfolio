import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import SkillCard from '@/components/SkillCard.jsx';

function SkillsPage() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Responsive Web Design']
    },
    {
      category: 'Backend',
      skills: ['PHP', 'Laravel', 'Node.js', 'Express.js', 'REST API Development', 'MVC Architecture']
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'Database Design', 'Database Management', 'SQL']
    },
    {
      category: 'Tools and Platforms',
      skills: ['Git', 'GitHub', 'Visual Studio Code', 'Postman', 'npm', 'Figma', 'Android Studio']
    },
    {
      category: 'Development Skills',
      skills: ['Full-Stack Web Development', 'API Integration', 'Debugging and Troubleshooting', 'PDF Generation', 'Web Scraping', 'Data Extraction', 'Workflow Automation', 'AI-Assisted Development', 'Technical Documentation', 'Software Development Life Cycle']
    },
    {
      category: 'Soft Skills',
      skills: ['Problem Solving', 'Analytical Thinking', 'Communication', 'Team Collaboration', 'Adaptability', 'Attention to Detail', 'Time Management', 'Fast Learner']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Technical Skills | Don Robert Dimasayao</title>
        <meta name="description" content="Technical skills of Don Robert Dimasayao across frontend development, backend development, databases, tools, automation, and software development practices." />
      </Helmet>

      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              A practical overview of the technologies, tools, and development skills I use to build web applications and software projects
            </p>
          </div>

          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary">
                  {category.category}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard
                      key={skill}
                      skill={skill}
                      index={skillIndex}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsPage;
