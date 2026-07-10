import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ProjectCard.jsx';

function HomePage() {
  const featuredProjects = [
    {
      title: 'Anatomy Trainer',
      description: 'An augmented reality learning system designed to help nursing students study human anatomy through interactive 3D models and learning activities.',
      technologies: ['Unity', 'C#', 'Vuforia', 'Firebase', 'Augmented Reality'],
      features: [
        'Interactive 3D anatomy models',
        'Augmented reality visualization',
        'Learning modules and assessments',
        'Student-focused educational interface'
      ]
    },
    {
      title: 'Christmas Light Mockup Studio',
      description: 'A full-stack internal business tool for managing customers and generating AI-assisted Christmas light installation mockups from uploaded property images.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'REST API', 'Database', 'AI Integration'],
      features: [
        'Customer record management',
        'Image upload workflow',
        'AI-assisted mockup generation',
        'Saved mockup history',
        'Responsive business dashboard'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Don Robert Dimasayao | Junior Full-Stack Web Developer</title>
        <meta name="description" content="Portfolio of Don Robert Dimasayao, a junior full-stack web developer building web applications, internal tools, automation scripts, API integrations, and AI-assisted solutions." />
      </Helmet>

      <div className="min-h-screen">
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1585812939961-fab9fb9a8434)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 bg-background/90"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Hi, I'm Don Robert
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
                Junior Full-Stack Web Developer
              </p>
              <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-8">
                I build practical web applications, internal business tools, automation scripts, and AI-assisted solutions using modern frontend and backend technologies.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="transition-all duration-200 active:scale-[0.98]">
                  <Link to="/projects">
                    View Projects <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="transition-all duration-200 active:scale-[0.98]">
                  <Link to="/contact">Contact Me</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Me</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg leading-relaxed mb-6 opacity-90">
                  I am a Computer Science graduate who enjoys turning real-world processes into functional and maintainable software. My experience includes full-stack development, database management, API integration, workflow automation, debugging, and responsive interface development.
                </p>
                <p className="text-lg leading-relaxed mb-8 opacity-90">
                  I have hands-on experience building full-stack web applications, internal business systems, automation tools, API integrations, and AI-assisted projects using technologies such as Laravel, PHP, JavaScript, React, Node.js, Express, MySQL, PostgreSQL, REST APIs, Git, and GitHub.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl">
                    <Code className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Full-Stack Development</h3>
                    <p className="text-sm opacity-80">Frontend and backend development for practical web applications</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl">
                    <Database className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Database & API Work</h3>
                    <p className="text-sm opacity-80">Database-backed systems, REST APIs, and workflow integrations</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl">
                    <Brain className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">AI-Assisted Automation</h3>
                    <p className="text-sm opacity-80">Automation scripts and AI-assisted workflows for real tasks</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredProjects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} />
                ))}
              </div>
              <div className="text-center mt-12">
                <Button asChild variant="outline" size="lg" className="transition-all duration-200 active:scale-[0.98]">
                  <Link to="/projects">
                    View All Projects <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;
