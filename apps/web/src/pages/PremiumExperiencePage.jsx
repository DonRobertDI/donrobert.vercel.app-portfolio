import React from 'react';
import { Helmet } from 'react-helmet';
import { GraduationCap } from 'lucide-react';
import ExperienceCard from '@/components/ExperienceCard.jsx';
import PageHero from '@/components/PageHero.jsx';
import { Reveal } from '@/components/PageTransition.jsx';

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
        <meta name="description" content="Experience and education of Don Robert Dimasayao, covering virtual assistance, e-commerce operations, AI data annotation, and web development." />
      </Helmet>
      <PageHero index="03" eyebrow="JOURNEY" title="Experience &" accent="education." description="My experience in virtual assistance, AI data annotation, and web development, alongside my education" />
      <div className="section-pad page-content"><div className="section-shell experience-layout">
        <TimelineSection index="01 / WORK" title="Professional Experience" entries={experiences} />
        <TimelineSection index="02 / STUDY" title="Education" icon={GraduationCap} entries={education} />
      </div></div>
    </>
  );
}

export default PremiumExperiencePage;
