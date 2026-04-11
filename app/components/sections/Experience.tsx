'use client';

import { useState } from 'react';
import { ChevronDown, MapPin, Calendar } from 'lucide-react';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { FadeIn } from '@/app/components/ui/FadeIn';
import { experience } from '@/app/data/experience';
import { cn } from '@/app/lib/utils';

export function Experience() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) =>
    setExpanded((prev) => (prev === id ? null : id));

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionHeader
            number="03"
            title="Experience"
            subtitle="The roles, the systems, and the scale behind the work."
          />
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-blue-400/60 via-slate-700 to-transparent" />

          <div className="space-y-6">
            {experience.map((role, i) => {
              const isOpen = expanded === role.id;

              return (
                <FadeIn key={role.id} delay={i * 80}>
                  <div className="relative pl-12 md:pl-16">
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-2 top-5 flex items-center justify-center w-8 h-8">
                      {role.current ? (
                        <span className="pulse-dot" />
                      ) : (
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-600 border border-slate-500" />
                      )}
                    </div>

                    {/* Card */}
                    <div
                      className={cn(
                        'card-glass border transition-colors duration-200 overflow-hidden',
                        isOpen ? 'border-blue-400/30' : 'border-slate-700/50 hover:border-slate-600/50'
                      )}
                    >
                      {/* Always-visible header — clickable */}
                      <button
                        onClick={() => toggle(role.id)}
                        className="w-full text-left p-5 md:p-6"
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            {/* Company + current badge */}
                            <div className="flex items-center gap-2 flex-wrap mb-1">
                              <span className="text-lg font-bold text-slate-100">
                                {role.company}
                              </span>
                              {role.current && (
                                <span className="px-2 py-0.5 rounded-full text-xs font-mono font-semibold bg-green-400/10 text-green-400 border border-green-400/20">
                                  Current
                                </span>
                              )}
                            </div>

                            {/* Title */}
                            <p className="text-blue-400 font-medium text-sm mb-2">
                              {role.title}
                            </p>

                            {/* Meta */}
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 font-mono mb-3">
                              <span className="flex items-center gap-1">
                                <Calendar size={11} />
                                {role.period}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin size={11} />
                                {role.location}
                              </span>
                            </div>

                            {/* Summary — always visible */}
                            <p className="text-sm text-slate-400 leading-relaxed">
                              {role.summary}
                            </p>
                          </div>

                          {/* Chevron */}
                          <ChevronDown
                            size={18}
                            className={cn(
                              'text-slate-500 shrink-0 mt-1 transition-transform duration-300',
                              isOpen && 'rotate-180 text-blue-400'
                            )}
                          />
                        </div>

                        {/* Tech badges — always visible */}
                        <div className="flex flex-wrap gap-1.5 mt-4">
                          {role.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 rounded text-xs font-mono bg-slate-800 text-slate-400 border border-slate-700"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </button>

                      {/* Expandable bullet points */}
                      <div
                        className={cn(
                          'transition-all duration-500 ease-in-out overflow-hidden',
                          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                        )}
                      >
                        <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0 border-t border-slate-800">
                          <ul className="mt-4 space-y-3">
                            {role.bullets.map((bullet, j) => (
                              <li key={j} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                                <span className="text-blue-400 font-mono shrink-0 mt-0.5">▹</span>
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
