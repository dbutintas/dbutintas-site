import { resolveIcon } from '../../utils/icons';
import { Card } from './Card';

interface IconCardProps {
  icon: string;
  title: string;
  description: string;
}

export function IconCard({ icon, title, description }: IconCardProps) {
  const Icon = resolveIcon(icon);

  return (
    <Card className="h-full p-6 sm:p-7">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-ember-50 text-ember-600">
        <Icon size={22} strokeWidth={1.75} />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-ink-900">{title}</h3>
      <p className="text-sm leading-relaxed text-ink-600">{description}</p>
    </Card>
  );
}
