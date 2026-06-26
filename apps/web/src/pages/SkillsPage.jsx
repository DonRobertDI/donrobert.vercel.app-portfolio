import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import SkillCard from '@/components/SkillCard.jsx';

function SkillsPage() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['C++', 'Java', 'C#', 'PHP', 'SQL']
    },
    {
      category: 'Web Development',
      skills: ['Laravel', 'HTML', 'CSS', 'MySQL', 'JavaScript']
    },
    {
      category: 'AI & Productivity Tools',
      skills: ['ChatGPT', 'Generative AI', 'AI-Assisted Research', 'AI Content Creation', 'Prompt Engineering']
    },
    {
      category: 'Software Development',
      skills: ['Git/GitHub', 'Visual Studio Code', 'SDLC', 'Debugging', 'Version Control']
    },
    {
      category: 'Data & Analytics',
      skills: ['Data Management', 'Data Analysis', 'Database Design', 'Data Validation', 'Report Generation']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Skills - Don Robert Dimasayao</title>
        <meta name="description" content="Technical skills and expertise of Don Robert Dimasayao in programming, web development, AI tools, and data analytics." />
      </Helmet>

      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and areas of expertise
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