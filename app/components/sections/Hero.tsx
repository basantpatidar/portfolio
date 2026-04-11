'use client';

import { useEffect, useState } from 'react';
import { ArrowDown, Mail } from 'lucide-react';
import { AnimatedCounter } from '@/app/components/ui/AnimatedCounter';
import { stats } from '@/app/data/stats';

const TYPEWRITER_TEXT = 'Senior Software Engineer';

export function Hero() {
  const [typed, setTyped]     = useState('');
  const [done, setDone]       = useState(false);

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const delay = 60; // ms per character
    const startDelay = 600; // wait before starting

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setTyped(TYPEWRITER_TEXT.slice(0, i));
        if (i >= TYPEWRITER_TEXT.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, delay);
      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center dot-grid overflow-hidden"
    >
      {/* Gradient fade at bottom to blend into next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />

      {/* Radial glow behind text */}
      <div className="absolute inset-0 flex items-center justify-start pointer-events-none">
        <div className="w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl -translate-x-1/4" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-32 w-full">

        {/* Location badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/60 text-slate-400 text-xs font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Wayne, New Jersey · Open to opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-100 leading-none mb-4">
          Basant Patidar
        </h1>

        {/* Typewriter subtitle */}
        <p className="text-xl md:text-2xl font-mono text-blue-400 mb-6 h-8">
          {typed}
          {!done && <span className="typewriter-cursor" />}
        </p>

        {/* Tagline */}
        <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed mb-12">
          8+ years shipping enterprise-scale distributed systems — from mutual fund platforms processing
          {' '}<span className="text-slate-200 font-medium">millions of daily transactions</span> to
          e-commerce search handling{' '}
          <span className="text-slate-200 font-medium">100M+ queries a day</span>.
        </p>

        {/* Stat counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="card-glass p-5 flex flex-col gap-1"
            >
              <span className="text-3xl md:text-4xl font-extrabold text-blue-400 font-mono tabular-nums">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-xs text-slate-400 leading-snug">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#systems"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-medium text-sm transition-colors duration-200"
          >
            View My Work
            <ArrowDown size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-slate-100 font-medium text-sm transition-colors duration-200"
          >
            Get in Touch
            <Mail size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
