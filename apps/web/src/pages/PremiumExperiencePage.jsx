import React from 'react';
import { Helmet } from 'react-helmet';
import { GraduationCap } from 'lucide-react';
import ExperienceCard from '@/components/ExperienceCard.jsx';
import PageHero from '@/components/PageHero.jsx';
import { Reveal } from '@/components/PageTransition.jsx';

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

function TimelineSection({ index, title, icon: Icon, entries }) {
  return (
    <section className="experience-section">
      <Reveal className="experience-section__heading">
        <span>{index}</span>
        <h2>{title}</h2>
        {Icon && <Icon aria-hidden="true" />}
      </Reveal>
      <div className="timeline-list">
        {entries.map((entry, entryIndex) => <ExperienceCard key={entry.title} experience={entry} index={entryIndex} />)}
      </div>
    </section>
  );
}

function PremiumExperiencePage() {
  return (
    <>
      <Helmet>
        <title>Experience and Education | Don Robert Dimasayao</title>
        <meta name="description" content="Experience and education of Don Robert Dimasayao, a junior full-stack web developer with Laravel internship experience and a Computer Science background." />
      </Helmet>
      <PageHero index="03" eyebrow="JOURNEY" title="Experience &" accent="education." description="My internship experience, education, and hands-on software development background" />
      <div className="section-pad page-content"><div className="section-shell experience-layout">
        <TimelineSection index="01 / WORK" title="Professional Experience" entries={experiences} />
        <TimelineSection index="02 / STUDY" title="Education" icon={GraduationCap} entries={education} />
      </div></div>
    </>
  );
}

export default PremiumExperiencePage;
