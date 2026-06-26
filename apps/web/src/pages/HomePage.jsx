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
      title: 'Augmented Reality Anatomy Learning System',
      description: 'Interactive anatomy visualizations for educational purposes using AR technology',
      technologies: ['Unity', 'C#', 'Vuforia', 'ARCore', 'Firebase'],
      features: [
        'Real-time 3D anatomy models',
        'Interactive learning modules',
        'Cross-platform AR support'
      ]
    },
    {
      title: 'Internal Audit Management System',
      description: 'Comprehensive audit management platform with report generation and data analytics',
      technologies: ['Laravel', 'MySQL', 'PHP', 'PDF Export'],
      features: [
        'Automated report generation',
        'Advanced data filtering',
        'SQL query optimization',
        'Form validation system'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Don Robert Dimasayao - Data Scientist & Full-Stack Developer</title>
        <meta name="description" content="Portfolio of Don Robert Dimasayao, a Cum Laude graduate in Computer Science specializing in Data Science, AI, and Full-Stack Development." />
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
                Don Robert Dimasayao
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
                Data Scientist & Full-Stack Developer
              </p>
              <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-8">
                Leveraging AI and technical expertise to build innovative solutions that transform data into actionable insights
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="transition-all duration-200 active:scale-[0.98]">
                  <Link to="/projects">
                    View Projects <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="transition-all duration-200 active:scale-[0.98]">
                  <Link to="/contact">Get in Touch</Link>
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
                  I am a Cum Laude graduate in Computer Science from Bicol University with a strong foundation in software development, database management, and data science. My academic excellence and hands-on experience have equipped me with the skills to tackle complex technical challenges.
                </p>
                <p className="text-lg leading-relaxed mb-8 opacity-90">
                  Currently seeking opportunities in Data Science and Prompt Engineering, I am passionate about leveraging AI technologies and analytical skills to drive innovation and create meaningful impact through data-driven solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl">
                    <Code className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Software Development</h3>
                    <p className="text-sm opacity-80">Full-stack development with modern frameworks and best practices</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl">
                    <Database className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Database Management</h3>
                    <p className="text-sm opacity-80">Expert in database design, optimization, and data validation</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl">
                    <Brain className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Data Science & AI</h3>
                    <p className="text-sm opacity-80">Leveraging AI tools and data analysis for intelligent solutions</p>
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
                  <ProjectCard key={index} project={project} index={index} />
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