import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={cn(
        'rounded-2xl border border-ink-900/5 bg-white shadow-soft',
        hover && 'hover:shadow-lift',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
