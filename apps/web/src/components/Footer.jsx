import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SocialLinks from '@/components/SocialLinks.jsx';

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="site-footer">
      <div className="section-shell">
        <div className="site-footer__cta">
          <div>
            <p className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</p>
            <h2>Let&apos;s build something<br /><span>useful together.</span></h2>
          </div>
          <Link to="/contact" className="footer-cta" aria-label="Go to contact page">
            Start a conversation <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>

        <div className="site-footer__bottom">
          <div>
            <span className="brand">DRD<span>.</span></span>
            <p>&copy; {new Date().getFullYear()} Don Robert Dimasayao</p>
          </div>
          <SocialLinks />
          <button type="button" onClick={scrollToTop} className="back-to-top">
            Back to top <span aria-hidden="true">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
