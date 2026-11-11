import {
  HeartHandshake,
  ShieldCheck,
  Palette,
  BadgePercent,
  Zap,
  ThumbsUp,
  type LucideIcon,
} from 'lucide-react';

export const iconRegistry: Record<string, LucideIcon> = {
  HeartHandshake,
  ShieldCheck,
  Palette,
  BadgePercent,
  Zap,
  ThumbsUp,
};

export function resolveIcon(name: string): LucideIcon {
  return iconRegistry[name] ?? Palette;
}
