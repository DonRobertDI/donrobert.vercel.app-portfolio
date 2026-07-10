import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
function ExperienceCard({ experience, index }) {
  return (
    <motion.div
      className="timeline-entry"
      initial={{ opacity: 0, y: 44, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="timeline-entry__dot" aria-hidden="true" />
      <article className="timeline-card">
        <div className="timeline-card__meta">
          <span>0{index + 1}</span>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{experience.period}</span>
            </div>
            {experience.location && (
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{experience.location}</span>
              </div>
            )}
          </div>
        </div>
        <div className="timeline-card__content">
          <div>
            <p className="eyebrow">{experience.organization}</p>
            <h3>{experience.title}</h3>
          </div>
        {experience.description && (
          <div>
            <p className="timeline-card__description">{experience.description}</p>
            {experience.achievements && experience.achievements.length > 0 && (
              <ul className="timeline-card__list">
                {experience.achievements.map((achievement) => (
                  <li key={achievement}>
                    <span aria-hidden="true">↳</span>{achievement}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        </div>
      </article>
    </motion.div>
  );
}

export default ExperienceCard;
