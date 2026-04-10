'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/app/lib/utils';

const navLinks = [
  { label: 'About',      href: '#about'      },
  { label: 'Systems',    href: '#systems'    },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Contact',    href: '#contact'    },
];

export function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [activeSection, setActive] = useState('');

  // Shadow navbar on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight active section via IntersectionObserver
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 shadow-lg shadow-black/20'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-mono text-base font-bold text-blue-400 hover:text-blue-300 transition-colors tracking-tight"
        >
          Basant Patidar
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors duration-200',
                    activeSection === id
                      ? 'text-blue-400'
                      : 'text-slate-400 hover:text-slate-100'
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-slate-100 transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800">
          <ul className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className={cn(
                      'text-sm font-medium transition-colors',
                      activeSection === id
                        ? 'text-blue-400'
                        : 'text-slate-400 hover:text-slate-100'
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
