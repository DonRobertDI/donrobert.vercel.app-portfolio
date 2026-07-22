import React from 'react';
import { Helmet } from 'react-helmet';
import ProjectCard from '@/components/ProjectCard.jsx';
import PageHero from '@/components/PageHero.jsx';

const projects = [
  {
    title: 'Anatomy Trainer',
    description: 'An augmented reality learning system created as a thesis project for nursing students. It provides interactive anatomy models and educational activities to support anatomy learning.',
    liveUrl: 'https://anatomytrainer.web.app/login',
    demoCredentials: {
      email: 'dimasayaodonrobert@gmail.com',
      password: 'bqbqsa05'
    },
    technologies: ['Unity', 'C#', 'Vuforia', 'Firebase', 'Augmented Reality'],
    features: ['Interactive human anatomy models', 'AR-based visualization', 'Learning activities and assessments', 'Student progress-oriented experience']
  },
  {
    title: 'Christmas Light Mockup Studio',
    description: 'A professional full-stack MVP for a Christmas light installation company. It allows users to manage customers, upload property images, and generate AI-assisted lighting mockups.',
    liveUrl: 'https://mockup-studioserver-production.up.railway.app/',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'REST API', 'AI Integration'],
    features: ['Customer management', 'Image uploads', 'AI-generated mockup workflow', 'Stored customer mockup records', 'Responsive dashboard']
  },
  {
    title: 'DataFlow E-commerce Scraper',
    description: 'A web-based data extraction tool designed to collect structured product information from supported e-commerce pages and prepare the results for review or export.',
    liveUrl: 'https://dataflow-scraper-web.vercel.app/',
    technologies: ['Python', 'React', 'Web Scraping', 'Data Extraction', 'REST API'],
    features: ['Product URL submission', 'Structured product-data extraction', 'Results dashboard', 'Extraction history', 'Error handling for unsupported URLs']
  },
  {
    title: 'Ecom Site Batch Generator',
    description: 'A Node.js automation tool that generates multiple e-commerce landing pages from one reusable HTML template and a JSON configuration file.',
    liveUrl: 'https://ecom-site-batch-generator.vercel.app/',
    technologies: ['Node.js', 'JavaScript', 'HTML', 'CSS', 'JSON', 'File System Automation'],
    features: ['Reusable HTML template', 'JSON-driven site content', 'Batch generation of landing pages', 'Separate output folder for each site', 'Reduced repetitive manual work']
  },
  {
    title: 'AI Resume Tailor – Developer & VA',
    description: 'A Make.com workflow that processes job descriptions through separate Developer and Virtual Assistant routes, maps role-targeted resume content into Google Docs templates, and creates organized PDF and DOCX resume files.',
    liveUrl: 'https://us2.make.com/public/shared-scenario/fO97JbrfxsB/ai-resume-tailor-developer-va',
    actionLabel: 'View Automation',
    technologies: ['Make.com', 'Google Forms', 'Google Sheets', 'Google Docs', 'Google Drive', 'Workflow Automation'],
    features: ['Form-based job application input', 'Separate Developer and Virtual Assistant workflow routes', 'Role-specific resume template selection', 'Automated document field mapping', 'PDF and DOCX resume generation', 'Consistent file naming and Google Drive storage']
  },
  {
    title: 'Internal Audit Management System',
    description: 'A Laravel-based web application developed during an internship to help digitize and organize an internal audit workflow that previously relied on paper-based processes.',
    technologies: ['Laravel', 'PHP', 'JavaScript', 'MySQL', 'Bootstrap', 'DomPDF'],
    features: ['Role-based access control', 'Audit workflow management', 'Dashboard and reporting', 'PDF document generation', 'Database-backed records']
  }
];

function PremiumProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Projects | Don Robert Dimasayao</title>
        <meta name="description" content="Explore full-stack web development, automation, augmented reality, and internal business system projects by Don Robert Dimasayao." />
      </Helmet>
      <PageHero index="01" eyebrow="PROJECTS" title="Selected" accent="work." description="A showcase of my work in full-stack web development, internal tools, automation, augmented reality, and data extraction systems" />
      <section className="section-pad page-content">
        <div className="section-shell project-grid">
          {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
        </div>
      </section>
    </>
  );
}

export default PremiumProjectsPage;
