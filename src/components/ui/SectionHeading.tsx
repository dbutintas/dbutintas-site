import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'mb-3 inline-flex items-center gap-2 text-xs font-display font-semibold uppercase tracking-[0.18em]',
            tone === 'dark' ? 'text-ember-600' : 'text-ember-300'
          )}
        >
          <span className="h-px w-6 bg-current" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'text-balance text-3xl font-bold leading-tight sm:text-4xl',
          tone === 'dark' ? 'text-ink-900' : 'text-white'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-balance text-base leading-relaxed sm:text-lg',
            tone === 'dark' ? 'text-ink-600' : 'text-white/75'
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
