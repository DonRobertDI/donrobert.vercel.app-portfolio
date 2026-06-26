import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
              <CardDescription className="text-base">{project.description}</CardDescription>
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-all duration-200"
                aria-label={`View ${project.title} project`}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col gap-4">
          <div>
            <h4 className="text-sm font-semibold mb-2 opacity-80">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          {project.features && project.features.length > 0 && (
            <div className="mt-auto">
              <h4 className="text-sm font-semibold mb-2 opacity-80">Key Features</h4>
              <ul className="space-y-1">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="text-sm opacity-90 flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;