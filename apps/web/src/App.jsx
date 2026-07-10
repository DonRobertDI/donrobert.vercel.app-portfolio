import React, { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter as Router, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from '@/components/CustomCursor.jsx';
import PageTransition from '@/components/PageTransition.jsx';
import Preloader from '@/components/Preloader.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import HomePage from '@/pages/PremiumHomePage.jsx';
import ProjectsPage from '@/pages/PremiumProjectsPage.jsx';
import SkillsPage from '@/pages/PremiumSkillsPage.jsx';
import ExperiencePage from '@/pages/PremiumExperiencePage.jsx';
import ContactPage from '@/pages/PremiumContactPage.jsx';

function AppContent() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <CustomCursor />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
              <Route path="/projects" element={<PageTransition><ProjectsPage /></PageTransition>} />
              <Route path="/skills" element={<PageTransition><SkillsPage /></PageTransition>} />
              <Route path="/experience" element={<PageTransition><ExperiencePage /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
              <Route path="*" element={<PageTransition>
                <div className="min-h-[70vh] flex items-center justify-center section-shell">
                <div className="text-center">
                  <p className="eyebrow mb-5">ERROR / 404</p>
                  <h1 className="display-title mb-5">Page not found<span className="text-primary">.</span></h1>
                  <p className="text-muted-foreground text-lg mb-8">The page you're looking for doesn't exist.</p>
                  <a href="/" className="button-primary">Back to home <span aria-hidden="true">↗</span></a>
                </div>
              </div>
              </PageTransition>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('is-loading', !introComplete);
    return () => document.body.classList.remove('is-loading');
  }, [introComplete]);

  return (
    <Router>
      {!introComplete && <Preloader onComplete={() => setIntroComplete(true)} />}
      <AppContent />
    </Router>
  );
}

export default App;
