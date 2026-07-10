import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export const reveal = {
  hidden: { opacity: 0, y: 36, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease } }
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } }
};

export function Reveal({ children, className = '', delay = 0, amount = 0.18 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={reveal}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function PageTransition({ children }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -14, filter: 'blur(8px)' }}
      transition={{ duration: reduceMotion ? 0.15 : 0.55, ease }}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
