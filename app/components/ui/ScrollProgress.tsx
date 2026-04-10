'use client';

import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const scrollable = scrollHeight - clientHeight;
      setWidth(scrollable > 0 ? (scrollTop / scrollable) * 100 : 0);
    };

    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div
      id="scroll-progress"
      style={{ width: `${width}%` }}
    />
  );
}
