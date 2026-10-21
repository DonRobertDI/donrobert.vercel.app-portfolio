import React from 'react';
import { Helmet } from 'react-helmet';
import { GraduationCap } from 'lucide-react';
import ExperienceCard from '@/components/ExperienceCard.jsx';

function ExperiencePage() {
  const experiences = [
  {
  "title": "AI Content Evaluator / Data Annotator",
  "organization": "Innodata via MCRI Global Corporation · Freelance",
  "period": "Aug 2026 - Oct 2026",
  "location": "Remote",
  "description": "Contributed to AI training tasks through software interface annotation, evidence-based description review, and guideline-driven quality checks.",
  "achievements": [
    "Annotated software interfaces with bounding boxes and descriptions of each control’s appearance, functionality, and user intention",
    "Reviewed screenshots and recordings to identify missing controls, inaccurate labels, and bounding-box issues",
    "Checked AI-generated descriptions against visible evidence and corrected inconsistencies",
    "Applied task-specific rubrics to maintain consistent labeling and clear written documentation"
  ]
},
  {
  "title": "Virtual Assistant — Library Operations",
  "organization": "Primeway Commerce",
  "period": "Aug 2026 - Oct 2026",
  "location": "Remote",
  "description": "Supported e-commerce operations through product uploads, funnel building, competitor research, localization, and process documentation.",
  "achievements": [
    "Maintained product information, uploaded products, organized creative assets, and recorded task updates",
    "Built and checked funnels, advertorials, and sales pages, including product details, pricing, links, and checkout flows",
    "Prepared and reviewed English, Dutch, and Danish content and images for label, quantity, currency, and visual consistency",
    "Researched competitor ads and landing pages and organized swipe sources and creative batches",
    "Created illustrated SOPs and a training website for ad swiping and Double Down ad creation workflows"
  ]
},
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
        <meta name="description" content="Experience and education of Don Robert Dimasayao, covering virtual assistance, e-commerce operations, AI data annotation, and web development." />
      </Helmet>

      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Experience & Education</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              My experience in virtual assistance, AI data annotation, and web development, alongside my education
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
