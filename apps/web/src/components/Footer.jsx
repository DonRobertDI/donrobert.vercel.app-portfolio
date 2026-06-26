import React from 'react';
import SocialLinks from '@/components/SocialLinks.jsx';

function Footer() {
  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-semibold">Don Robert Dimasayao</span>
            <p className="text-sm opacity-80">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}

export default Footer;