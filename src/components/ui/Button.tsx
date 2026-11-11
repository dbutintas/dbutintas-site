import type { MouseEventHandler, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

type Variant = 'primary' | 'secondary' | 'ghost' | 'light' | 'whatsApp';
type Size = 'md' | 'sm';
type Preset = 'whatsapp';

interface ButtonProps {
  variant?: Variant;
  preset?: Preset;
  size?: Size;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: ReactNode;
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: MouseEventHandler;
}

const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-400 focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:opacity-50 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  primary: 'bg-ember text-white shadow-card hover:bg-ember-600',
  secondary: 'bg-ink-800 text-white shadow-card hover:bg-ink-700',
  ghost: 'bg-transparent text-ink-800 border border-ink-800/15 hover:border-ink-800/40',
  light: 'bg-white text-ink-800 shadow-card hover:bg-paper-100',
  whatsApp: "bg-emerald-500 text-white hover:bg-emerald-600",
};

const sizes: Record<Size, string> = {
  md: 'px-6 py-3 text-sm sm:text-base',
  sm: 'px-4 py-2 text-sm',
};

const presets: Record<Preset, { variant: Variant; icon: ReactNode }> = {
  whatsapp: { variant: 'whatsApp', icon: <WhatsAppIcon /> },
};

const MotionLink = motion.create(Link);

export function Button({
  variant,
  preset,
  size = 'md',
  icon,
  iconPosition = 'right',
  className,
  children,
  to,
  href,
  target,
  rel,
  type = 'button',
  disabled,
  onClick,
}: ButtonProps) {
  const presetConfig = preset ? presets[preset] : undefined;
  const resolvedVariant = variant ?? presetConfig?.variant ?? 'primary';
  const resolvedIcon = presetConfig?.icon ?? icon;

  const classes = cn(base, variants[resolvedVariant], sizes[size], className);

  const content = (
    <>
      {resolvedIcon && iconPosition === 'left' && (
        <span className="shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5">
          {resolvedIcon}
        </span>
      )}
      <span>{children}</span>
      {resolvedIcon && iconPosition === 'right' && (
        <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
          {resolvedIcon}
        </span>
      )}
    </>
  );

  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.2, ease: 'easeOut' as const },
  };

  if (to) {
    return (
      <MotionLink to={to} className={classes} onClick={onClick} {...motionProps}>
        {content}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={classes}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
