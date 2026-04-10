'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/app/lib/utils';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
  direction?: 'up' | 'left' | 'none';
}

export function FadeIn({ children, className, delay = 0, direction = 'up' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const initial =
    direction === 'up'   ? 'opacity-0 translate-y-8' :
    direction === 'left' ? 'opacity-0 -translate-x-8' :
                           'opacity-0';

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'transition-all duration-700 ease-out',
        visible ? 'opacity-100 translate-x-0 translate-y-0' : initial,
        className
      )}
    >
      {children}
    </div>
  );
}
