import React from 'react';
import { motion } from 'framer-motion';
function SkillCard({ skill, index }) {
  return (
    <motion.div
      className="skill-chip"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: (index % 5) * 0.035 }}
    >
      <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
      <p>{skill}</p>
    </motion.div>
  );
}

export default SkillCard;
