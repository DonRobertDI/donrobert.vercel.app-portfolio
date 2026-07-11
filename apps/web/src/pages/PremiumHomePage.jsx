import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Brain, Code, Database } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard.jsx';
import { Reveal, reveal, stagger } from '@/components/PageTransition.jsx';

const featuredProjects = [
  {
    title: 'Anatomy Trainer',
    description: 'An augmented reality learning system designed to help nursing students study human anatomy through interactive 3D models and learning activities.',
    liveUrl: 'https://anatomytrainer.web.app/login',
    demoCredentials: {
      email: 'dimasayaodonrobert@gmail.com',
      password: 'bqbqsa05'
    },
    technologies: ['Unity', 'C#', 'Vuforia', 'Firebase', 'Augmented Reality'],
    features: ['Interactive 3D anatomy models', 'Augmented reality visualization', 'Learning modules and assessments', 'Student-focused educational interface']
  },
  {
    title: 'Christmas Light Mockup Studio',
    description: 'A full-stack internal business tool for managing customers and generating AI-assisted Christmas light installation mockups from uploaded property images.',
    liveUrl: 'https://mockup-studioserver-production.up.railway.app/',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'REST API', 'Database', 'AI Integration'],
    features: ['Customer record management', 'Image upload workflow', 'AI-assisted mockup generation', 'Saved mockup history', 'Responsive business dashboard']
  }
];

const disciplines = [
  { icon: Code, number: '01', title: 'Full-Stack Development', description: 'Frontend and backend development for practical web applications' },
  { icon: Database, number: '02', title: 'Database & API Work', description: 'Database-backed systems, REST APIs, and workflow integrations' },
  { icon: Brain, number: '03', title: 'AI-Assisted Automation', description: 'Automation scripts and AI-assisted workflows for real tasks' }
];

function PremiumHomePage() {
  return (
    <>
      <Helmet>
        <title>Don Robert Dimasayao | Junior Full-Stack Web Developer</title>
        <meta name="description" content="Portfolio of Don Robert Dimasayao, a junior full-stack web developer building web applications, internal tools, automation scripts, API integrations, and AI-assisted solutions." />
      </Helmet>

      <div className="home-page">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orb hero-orb--one" aria-hidden="true" />
          <div className="hero-orb hero-orb--two" aria-hidden="true" />
          <div className="hero-noise" aria-hidden="true" />

          <div className="section-shell hero-layout">
            <motion.div className="hero-copy" variants={stagger} initial="hidden" animate="visible">
              <motion.div className="hero-status" variants={reveal}>
                <span aria-hidden="true" />
                Available for junior developer opportunities
              </motion.div>
              <motion.p className="hero-kicker" variants={reveal}>HELLO, I&apos;M</motion.p>
              <motion.h1 id="hero-title" variants={reveal}>
                Don Robert
                <span>Dimasayao<span className="text-primary">.</span></span>
              </motion.h1>

              <motion.div className="hero-intro" variants={reveal}>
                <p className="hero-role">Junior Full-Stack<br />Web Developer</p>
                <div>
                  <p>I build practical web applications, internal business tools, automation scripts, and AI-assisted solutions using modern frontend and backend technologies.</p>
                  <div className="hero-actions">
                    <Link to="/projects" className="button-primary">View projects <ArrowRight aria-hidden="true" /></Link>
                    <Link to="/contact" className="button-secondary">Contact me</Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <div className="hero-side" aria-hidden="true">
              <span className="hero-side__line" />
              <p>SCROLL TO EXPLORE</p>
              <ArrowDown />
            </div>

            <div className="hero-footnote">
              <span>PHILIPPINES / PHT</span>
              <span>WEB DEVELOPMENT / AUTOMATION / AI</span>
            </div>
          </div>
        </section>

        <section className="about-section section-pad">
          <div className="section-shell">
            <Reveal className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">01 / ABOUT</p>
                <h2>Practical thinking.<br /><span>Purposeful builds.</span></h2>
              </div>
              <p>I am a Computer Science graduate who enjoys turning real-world processes into functional and maintainable software. My experience includes full-stack development, database management, API integration, workflow automation, debugging, and responsive interface development.</p>
            </Reveal>

            <Reveal className="about-statement">
              <span className="about-statement__index">/ APPROACH</span>
              <p>I have hands-on experience building full-stack web applications, internal business systems, automation tools, API integrations, and AI-assisted projects using technologies such as <strong>Laravel, PHP, JavaScript, React, Node.js, Express, MySQL, PostgreSQL, REST APIs, Git, and GitHub.</strong></p>
            </Reveal>

            <div className="discipline-grid">
              {disciplines.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article key={item.title} className="discipline-card" initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.65, delay: index * 0.1 }}>
                    <div><span>{item.number}</span><Icon aria-hidden="true" /></div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="work-section section-pad">
          <div className="section-shell">
            <Reveal className="section-heading section-heading--inline">
              <div><p className="eyebrow">02 / FEATURED PROJECTS</p><h2>Selected <span>work.</span></h2></div>
              <Link to="/projects" className="text-link">View all projects <ArrowRight aria-hidden="true" /></Link>
            </Reveal>

            <div className="project-grid project-grid--featured">
              {featuredProjects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default PremiumHomePage;
