import React from 'react';
import { Mail, Github } from 'lucide-react';

function SocialLinks({ className = "" }) {
  const links = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/DonRobertDI',
      label: 'Visit GitHub profile'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:dimasayaodonrobert@gmail.com',
      label: 'Send an email'
    }
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {links.map((link) => {
        const Icon = link.icon;

        return (
          <a
            key={link.name}
            href={link.href}
            target={link.name !== 'Email' ? '_blank' : undefined}
            rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
            aria-label={link.label}
            className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
          >
            <Icon className="w-5 h-5" />
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;