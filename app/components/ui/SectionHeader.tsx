import { cn } from '@/app/lib/utils';

interface Props {
  number: string;   // e.g. "01"
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ number, title, subtitle, className }: Props) {
  return (
    <div className={cn('mb-12', className)}>
      <p className="font-mono text-blue-400 text-sm mb-2">{number}.</p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-slate-400 max-w-2xl leading-relaxed">{subtitle}</p>
      )}
      <div className="mt-4 h-px w-16 bg-blue-400/50 rounded-full" />
    </div>
  );
}
