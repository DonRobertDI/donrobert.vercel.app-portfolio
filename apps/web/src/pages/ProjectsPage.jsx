import React from 'react';
import { Helmet } from 'react-helmet';
import ProjectCard from '@/components/ProjectCard.jsx';

function ProjectsPage() {
  const projects = [
    {
      title: 'Anatomy Trainer',
      description: 'An augmented reality learning system created as a thesis project for nursing students. It provides interactive anatomy models and educational activities to support anatomy learning.',
      technologies: ['Unity', 'C#', 'Vuforia', 'Firebase', 'Augmented Reality'],
      features: [
        'Interactive human anatomy models',
        'AR-based visualization',
        'Learning activities and assessments',
        'Student progress-oriented experience'
      ]
    },
    {
      title: 'Christmas Light Mockup Studio',
      description: 'A professional full-stack MVP for a Christmas light installation company. It allows users to manage customers, upload property images, and generate AI-assisted lighting mockups.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'REST API', 'AI Integration'],
      features: [
        'Customer management',
        'Image uploads',
        'AI-generated mockup workflow',
        'Stored customer mockup records',
        'Responsive dashboard'
      ]
    },
    {
      title: 'DataFlow E-commerce Scraper',
      description: 'A web-based data extraction tool designed to collect structured product information from supported e-commerce pages and prepare the results for review or export.',
      technologies: ['Python', 'React', 'Web Scraping', 'Data Extraction', 'REST API'],
      features: [
        'Product URL submission',
        'Structured product-data extraction',
        'Results dashboard',
        'Extraction history',
        'Error handling for unsupported URLs'
      ]
    },
    {
      title: 'Ecom Site Batch Generator',
      description: 'A Node.js automation tool that generates multiple e-commerce landing pages from one reusable HTML template and a JSON configuration file.',
      technologies: ['Node.js', 'JavaScript', 'HTML', 'CSS', 'JSON', 'File System Automation'],
      features: [
        'Reusable HTML template',
        'JSON-driven site content',
        'Batch generation of landing pages',
        'Separate output folder for each site',
        'Reduced repetitive manual work'
      ]
    },
    {
      title: 'Internal Audit Management System',
      description: 'A Laravel-based web application developed during an internship to help digitize and organize an internal audit workflow that previously relied on paper-based processes.',
      technologies: ['Laravel', 'PHP', 'JavaScript', 'MySQL', 'Bootstrap', 'DomPDF'],
      features: [
        'Role-based access control',
        'Audit workflow management',
        'Dashboard and reporting',
        'PDF document generation',
        'Database-backed records'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Projects | Don Robert Dimasayao</title>
        <meta name="description" content="Explore full-stack web development, automation, augmented reality, and internal business system projects by Don Robert Dimasayao." />
      </Helmet>

      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              A showcase of my work in full-stack web development, internal tools, automation, augmented reality, and data extraction systems
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
