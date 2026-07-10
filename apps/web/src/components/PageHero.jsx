import React from 'react';
import { motion } from 'framer-motion';

function PageHero({ index, eyebrow, title, accent, description }) {
  return (
    <section className="page-hero">
      <div className="page-hero__grid" aria-hidden="true" />
      <div className="page-hero__orb" aria-hidden="true" />
      <div className="section-shell page-hero__inner">
        <motion.div initial={{ opacity: 0, y: 34, filter: 'blur(12px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}>
          <p className="eyebrow">{index} / {eyebrow}</p>
          <h1>{title}<br /><span>{accent}</span></h1>
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.16 }}>{description}</motion.p>
      </div>
    </section>
  );
}

export default PageHero;
