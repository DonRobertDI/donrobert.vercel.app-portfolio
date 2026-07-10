import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
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
