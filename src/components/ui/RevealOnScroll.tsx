import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: 'div' | 'li';
}

export function RevealOnScroll({
  children,
  delay = 0,
  y = 24,
  className,
  as = 'div',
}: RevealOnScrollProps) {
  const Tag = motion[as];

  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={cn(className)}
    >
      {children}
    </Tag>
  );
}
