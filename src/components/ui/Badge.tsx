import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: ReactNode;
  tone?: 'ember' | 'cobalt' | 'ink' | 'light';
  className?: string;
}

const tones: Record<NonNullable<BadgeProps['tone']>, string> = {
  ember: 'bg-ember-50 text-ember-600',
  cobalt: 'bg-cobalt-50 text-cobalt-600',
  ink: 'bg-ink-900/5 text-ink-700',
  light: 'bg-white/15 text-white',
};

export function Badge({ children, tone = 'ember', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-display font-semibold uppercase tracking-wide',
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
