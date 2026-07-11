import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy, ExternalLink } from 'lucide-react';

function CopyCredentialButton({ label, value }) {
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    if (!feedback) return undefined;

    const timeout = window.setTimeout(() => setFeedback(''), 1800);
    return () => window.clearTimeout(timeout);
  }, [feedback]);

  const copyValue = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setFeedback('Copied');
    } catch {
      setFeedback('Copy failed');
    }
  };

  return (
    <button
      type="button"
      className="project-card__copy"
      onClick={copyValue}
      aria-label={`Copy demo ${label}`}
      title={`Copy ${label}`}
    >
      {feedback === 'Copied' ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
      <span aria-live="polite">{feedback || 'Copy'}</span>
    </button>
  );
}

function DemoCredentials({ credentials }) {
  return (
    <div className="project-card__credentials">
      <div className="project-card__credentials-heading">
        <strong>Demo Credentials</strong>
        <span>For portfolio demonstration only.</span>
      </div>

      <dl>
        <div>
          <dt>Email</dt>
          <dd>{credentials.email}</dd>
          <CopyCredentialButton label="email" value={credentials.email} />
        </div>
        <div>
          <dt>Password</dt>
          <dd>{credentials.password}</dd>
          <CopyCredentialButton label="password" value={credentials.password} />
        </div>
      </dl>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="project-card-wrap"
      initial={{ opacity: 0, y: 54, filter: 'blur(12px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.8, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <article className="project-card">
        <div className="project-card__top">
          <span className="project-card__number">/ 0{index + 1}</span>
          <span className="project-card__type">SELECTED WORK</span>
          <div className="project-card__icon">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
                aria-label={`View ${project.title} project`}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <div className="project-card__body">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>

        {project.features && project.features.length > 0 && (
          <ul className="project-card__features">
            {project.features.map((feature) => (
              <li key={feature}><span aria-hidden="true">↳</span>{feature}</li>
            ))}
          </ul>
        )}

        {project.liveUrl && (
          <div className="project-card__actions">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary project-card__live"
              aria-label={`Open live demo for ${project.title}`}
            >
              Live Demo
              <ExternalLink aria-hidden="true" />
            </a>
          </div>
        )}

        {project.demoCredentials && <DemoCredentials credentials={project.demoCredentials} />}

        <div className="project-card__tech" aria-label="Technologies">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </article>
    </motion.div>
  );
}

export default ProjectCard;
