import React from 'react';
import { Helmet } from 'react-helmet';
import { GraduationCap } from 'lucide-react';
import ExperienceCard from '@/components/ExperienceCard.jsx';

function ExperiencePage() {
  const experiences = [
    {
      title: 'Laravel Developer Intern',
      organization: 'DOST-PES',
      period: 'Jun 2025 - Jul 2025',
      location: 'Philippines',
      description: 'Completed a 240-hour intensive internship program focused on Laravel development and web application architecture.',
      achievements: [
        'Developed and maintained web applications using Laravel framework',
        'Implemented database schemas and optimized SQL queries',
        'Collaborated with team members on project planning and execution',
        'Gained hands-on experience with modern web development practices'
      ]
    }
  ];

  const education = [
    {
      title: 'Bachelor of Science in Computer Science',
      organization: 'Bicol University',
      period: '2022 - 2026',
      location: 'Polangui, Albay, Philippines',
      description: 'Graduated Cum Laude with a strong foundation in computer science fundamentals, software engineering, and data structures.',
      achievements: [
        'Achieved Cum Laude honors',
        'Specialized in software development and database management',
        'Completed capstone projects in AR technology and web development',
        'Active participation in programming competitions and hackathons'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Experience - Don Robert Dimasayao</title>
        <meta name="description" content="Professional experience and educational background of Don Robert Dimasayao, including internships and academic achievements." />
      </Helmet>

      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Experience & Education</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              My professional journey and academic achievements
            </p>
          </div>

          <div className="space-y-16">
            <section>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <span>Professional Experience</span>
              </h2>
              <div className="space-y-6">
                {experiences.map((experience, index) => (
                  <ExperienceCard key={index} experience={experience} index={index} />
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-primary" />
                <span>Education</span>
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <ExperienceCard key={index} experience={edu} index={index} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExperiencePage;