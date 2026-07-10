import React from 'react';
import { Helmet } from 'react-helmet';
import { GraduationCap } from 'lucide-react';
import ExperienceCard from '@/components/ExperienceCard.jsx';

function ExperiencePage() {
  const experiences = [
    {
      title: 'Web Developer Intern',
      organization: 'Department of Science and Technology',
      period: 'Jun 2025 - Jul 2025',
      location: 'Philippines',
      description: 'Completed a 240-hour internship supporting technical and administrative operations while contributing to the development and maintenance of a Laravel-based internal web application.',
      achievements: [
        'Helped develop and maintain a Laravel-based internal audit management system',
        'Assisted in digitizing a previously paper-based workflow',
        'Worked with PHP, Laravel, JavaScript, MySQL, and database-backed forms',
        'Implemented or supported role-based access, dashboards, reports, and PDF generation',
        'Assisted with debugging, database management, technical documentation, and general IT tasks',
        'Collaborated with staff to understand process requirements and improve the system'
      ]
    }
  ];

  const education = [
    {
      title: 'Bachelor of Science in Computer Science',
      organization: 'Bicol University Polangui',
      period: 'Aug 2022 - Jun 2026',
      location: 'Polangui, Albay, Philippines',
      description: 'Completed a Bachelor of Science in Computer Science with experience in software development, database systems, web technologies, augmented reality, and full-stack application development.',
      achievements: [
        'Developed Anatomy Trainer as a thesis project',
        'Built web applications using frontend and backend technologies',
        'Studied databases, software engineering, algorithms, and system development',
        'Gained experience with technical documentation and project presentation'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Experience and Education | Don Robert Dimasayao</title>
        <meta name="description" content="Experience and education of Don Robert Dimasayao, a junior full-stack web developer with Laravel internship experience and a Computer Science background." />
      </Helmet>

      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Experience & Education</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              My internship experience, education, and hands-on software development background
            </p>
          </div>

          <div className="space-y-16">
            <section>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <span>Professional Experience</span>
              </h2>
              <div className="space-y-6">
                {experiences.map((experience, index) => (
                  <ExperienceCard key={experience.title} experience={experience} index={index} />
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
                  <ExperienceCard key={edu.title} experience={edu} index={index} />
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
