import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

function SkillCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-primary/50">
        <CardContent className="p-4 text-center">
          <p className="font-medium">{skill}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default SkillCard;