import React from 'react';
import { Helmet } from 'react-helmet';
import ProjectCard from '@/components/ProjectCard.jsx';

function ProjectsPage() {
  const projects = [
    {
      title: 'Augmented Reality Anatomy Learning System',
      description: 'An innovative educational platform that uses augmented reality to provide interactive 3D anatomy visualizations. Built with Unity and ARCore, this system enables students to explore human anatomy in an immersive and engaging way.',
      technologies: ['Unity', 'C#', 'Vuforia', 'ARCore', 'Firebase'],
      features: [
        'Real-time 3D anatomy model rendering',
        'Interactive learning modules with quizzes',
        'Cross-platform AR support (Android/iOS)',
        'Cloud-based progress tracking with Firebase',
        'Multi-user collaboration features'
      ]
    },
    {
      title: 'Internal Audit Management System',
      description: 'A comprehensive web-based platform for managing internal audits, generating reports, and analyzing audit data. Developed using Laravel and MySQL, this system streamlines the entire audit workflow from planning to reporting.',
      technologies: ['Laravel', 'MySQL', 'PHP', 'PDF Export', 'JavaScript'],
      features: [
        'Automated audit report generation with PDF export',
        'Advanced SQL queries for data analysis',
        'Dynamic data filtering and search functionality',
        'Comprehensive form validation system',
        'Role-based access control',
        'Audit trail and activity logging'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Projects - Don Robert Dimasayao</title>
        <meta name="description" content="Explore the portfolio of projects by Don Robert Dimasayao, including AR learning systems and audit management platforms." />
      </Helmet>

      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              A showcase of my work in software development, AR technology, and data management systems
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;