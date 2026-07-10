import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' }
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    try {
      return localStorage.getItem('portfolio-theme') !== 'light';
    } catch {
      return true;
    }
  });
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', isDark);
    try {
      localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
    } catch {
      // The theme still works when storage is unavailable.
    }
  }, [isDark]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener('scroll', updateProgress);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const onKeyDown = (event) => event.key === 'Escape' && setIsMenuOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <Link to="/" className="brand" aria-label="Don Robert Dimasayao, home">
            DRD<span>.</span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navLinks.map((link, index) => {
              const active = location.pathname === link.path;
              return (
                <Link key={link.path} to={link.path} className={`nav-link ${active ? 'is-active' : ''}`}>
                  <span className="nav-link__index">0{index + 1}</span>
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          <div className="header-actions">
            <button
              type="button"
              onClick={() => setIsDark((current) => !current)}
              className="icon-button"
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            >
              {isDark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
            </button>

            <button
              type="button"
              className="menu-button"
              onClick={() => setIsMenuOpen(true)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span>Menu</span>
              <Menu aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="scroll-progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${scrollProgress})` }} />
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <motion.div
              className="mobile-menu__panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="mobile-menu__top">
                <span className="brand">DRD<span>.</span></span>
                <button type="button" className="icon-button" onClick={() => setIsMenuOpen(false)} aria-label="Close menu" autoFocus>
                  <X aria-hidden="true" />
                </button>
              </div>

              <nav className="mobile-menu__nav" aria-label="Mobile navigation">
                {navLinks.map((link, index) => (
                  <Link key={link.path} to={link.path} className={location.pathname === link.path ? 'is-active' : ''}>
                    <span>0{index + 1}</span>
                    <strong>{link.name}</strong>
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                ))}
              </nav>

              <div className="mobile-menu__footer">
                <span>Available for opportunities</span>
                <span>Philippines / PHT</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
