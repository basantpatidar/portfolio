'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { TrendingUp } from 'lucide-react';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { FadeIn } from '@/app/components/ui/FadeIn';
import { cn } from '@/app/lib/utils';

import { trpNodes,           trpEdges,           trpMeta           } from '@/app/data/diagrams/trp';
import { walmartSearchNodes, walmartSearchEdges, walmartSearchMeta } from '@/app/data/diagrams/walmart-search';
import { walmartHealthNodes, walmartHealthEdges, walmartHealthMeta } from '@/app/data/diagrams/walmart-health';

// Lazy-load ReactFlow — it's heavy and not needed until this section scrolls into view
const FlowDiagram = dynamic(
  () => import('@/app/components/diagrams/FlowDiagram').then((m) => m.FlowDiagram),
  { ssr: false, loading: () => <DiagramSkeleton /> }
);

function DiagramSkeleton() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-blue-400/30 border-t-blue-400 rounded-full animate-spin" />
    </div>
  );
}

const tabs = [
  {
    id: 'trp',
    label: 'T. Rowe Price',
    nodes: trpNodes,
    edges: trpEdges,
    meta: trpMeta,
  },
  {
    id: 'walmart-search',
    label: 'Walmart Search',
    nodes: walmartSearchNodes,
    edges: walmartSearchEdges,
    meta: walmartSearchMeta,
  },
  {
    id: 'walmart-health',
    label: 'Walmart Health',
    nodes: walmartHealthNodes,
    edges: walmartHealthEdges,
    meta: walmartHealthMeta,
  },
] as const;

type TabId = (typeof tabs)[number]['id'];

export function SystemsGallery() {
  const [active, setActive] = useState<TabId>('trp');

  const current = tabs.find((t) => t.id === active)!;

  return (
    <section id="systems" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionHeader
            number="02"
            title="Systems Gallery"
            subtitle="Interactive architecture diagrams from production systems I've built and scaled."
          />
        </FadeIn>

        <FadeIn delay={100}>
          {/* Terminal-style tab switcher */}
          <div className="flex flex-wrap gap-1 mb-6 p-1 rounded-lg bg-slate-900 border border-slate-800 w-fit font-mono text-xs">
            <span className="px-3 py-2 text-slate-600 select-none">~/systems</span>
            <span className="px-1 py-2 text-slate-700 select-none">$</span>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={cn(
                  'px-4 py-2 rounded-md transition-all duration-200 font-mono text-xs',
                  active === tab.id
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                    : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800'
                )}
              >
                [{tab.label}]
              </button>
            ))}
          </div>

          {/* Main panel */}
          <div className="grid lg:grid-cols-5 gap-4 items-start">

            {/* Diagram — 3 of 5 columns */}
            <div className="lg:col-span-3 card-glass border border-slate-700/50 overflow-hidden">
              <div className="h-[420px] md:h-[500px] w-full">
                <FlowDiagram
                  key={active}               /* remount on tab change for clean fitView */
                  nodes={current.nodes}
                  edges={current.edges}
                />
              </div>
            </div>

            {/* Side panel — 2 of 5 columns */}
            <div className="lg:col-span-2 space-y-4">

              {/* Title + description */}
              <div className="card-glass border border-slate-700/50 p-5">
                <p className="font-mono text-xs text-blue-400 mb-1">{current.meta.period}</p>
                <h3 className="text-lg font-bold text-slate-100 mb-3 leading-snug">
                  {current.meta.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {current.meta.description}
                </p>
              </div>

              {/* Impact metrics */}
              <div className="card-glass border border-slate-700/50 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp size={14} className="text-blue-400" />
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Impact</span>
                </div>
                <ul className="space-y-2">
                  {current.meta.impact.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-slate-300">
                      <span className="text-blue-400 shrink-0 mt-0.5">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech used */}
              <div className="card-glass border border-slate-700/50 p-5">
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {current.meta.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-xs font-mono bg-slate-800 text-slate-400 border border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
