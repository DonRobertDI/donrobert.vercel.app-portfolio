import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

function ExperienceCard({ experience, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-xl">{experience.title}</CardTitle>
          <CardDescription className="text-base font-medium text-primary">
            {experience.organization}
          </CardDescription>
          <div className="flex flex-wrap gap-4 text-sm opacity-80 mt-2">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{experience.period}</span>
            </div>
            {experience.location && (
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{experience.location}</span>
              </div>
            )}
          </div>
        </CardHeader>
        {experience.description && (
          <CardContent>
            <p className="opacity-90">{experience.description}</p>
            {experience.achievements && experience.achievements.length > 0 && (
              <ul className="mt-4 space-y-2">
                {experience.achievements.map((achievement) => (
                  <li key={achievement} className="text-sm opacity-90 flex items-start gap-2">
                    <span className="text-primary mt-1">&bull;</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        )}
      </Card>
    </motion.div>
  );
}

export default ExperienceCard;
