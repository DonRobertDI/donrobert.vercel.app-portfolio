import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

function Preloader({ onComplete }) {
  const reduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const duration = reduceMotion ? 350 : 1900;
    const startedAt = performance.now();
    let frame;

    const tick = (now) => {
      const elapsed = now - startedAt;
      const nextProgress = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(nextProgress);

      if (nextProgress < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        window.setTimeout(() => setVisible(false), reduceMotion ? 50 : 260);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reduceMotion]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { y: '-100%' }}
          transition={{ duration: reduceMotion ? 0.2 : 0.85, ease: [0.76, 0, 0.24, 1] }}
          role="status"
          aria-live="polite"
          aria-label={`Loading portfolio, ${progress} percent`}
        >
          <div className="preloader__glow" aria-hidden="true" />
          <div className="preloader__grid" aria-hidden="true" />

          <div className="preloader__content">
            <div className="preloader__meta">
              <span>PORTFOLIO / 2026</span>
              <span>PH</span>
            </div>

            <div className="overflow-hidden">
              <motion.p
                className="preloader__eyebrow"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                INITIALIZING EXPERIENCE
              </motion.p>
            </div>

            <motion.h1
              className="preloader__mark"
              initial={{ opacity: 0, y: 24, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              DRD<span>.</span>
            </motion.h1>

            <div className="preloader__track" aria-hidden="true">
              <motion.div
                className="preloader__bar"
                animate={{ scaleX: progress / 100 }}
                transition={{ duration: 0.12, ease: 'linear' }}
              />
            </div>

            <div className="preloader__progress" aria-hidden="true">
              <span>DON ROBERT DIMASAYAO</span>
              <span>{String(progress).padStart(3, '0')}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Preloader;
