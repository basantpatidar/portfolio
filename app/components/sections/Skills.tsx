import {
  Server,
  Cloud,
  Database,
  Monitor,
  Activity,
  FlaskConical,
  Bot,
  type LucideIcon,
} from 'lucide-react';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { FadeIn } from '@/app/components/ui/FadeIn';
import { skillGroups } from '@/app/data/skills';

const iconMap: Record<string, LucideIcon> = {
  Server,
  Cloud,
  Database,
  Monitor,
  Activity,
  FlaskConical,
  Bot,
};

// Accent color per category — keeps clusters visually distinct
const colorMap: Record<string, { icon: string; badge: string; border: string }> = {
  Backend:                { icon: 'text-blue-400',   badge: 'bg-blue-400/10 text-blue-300 border-blue-400/20',   border: 'group-hover:border-blue-400/40'   },
  'Cloud & Infra':        { icon: 'text-orange-400', badge: 'bg-orange-400/10 text-orange-300 border-orange-400/20', border: 'group-hover:border-orange-400/40' },
  'Data & Messaging':     { icon: 'text-yellow-400', badge: 'bg-yellow-400/10 text-yellow-300 border-yellow-400/20', border: 'group-hover:border-yellow-400/40' },
  Frontend:               { icon: 'text-purple-400', badge: 'bg-purple-400/10 text-purple-300 border-purple-400/20', border: 'group-hover:border-purple-400/40' },
  'DevOps & Monitoring':  { icon: 'text-green-400',  badge: 'bg-green-400/10 text-green-300 border-green-400/20',  border: 'group-hover:border-green-400/40'  },
  'Testing & Methodology':{ icon: 'text-pink-400',   badge: 'bg-pink-400/10 text-pink-300 border-pink-400/20',    border: 'group-hover:border-pink-400/40'   },
  'AI-Assisted Engineering': { icon: 'text-violet-400', badge: 'bg-violet-400/10 text-violet-300 border-violet-400/20', border: 'group-hover:border-violet-400/40' },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionHeader
            number="04"
            title="Skills"
            subtitle="Technologies I've used in production at enterprise scale."
          />
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => {
            const Icon  = iconMap[group.icon];
            const color = colorMap[group.category] ?? colorMap['Backend'];

            return (
              <FadeIn key={group.category} delay={i * 80}>
                <div
                  className={`group card-glass h-full p-6 border border-slate-700/50 transition-colors duration-300 ${color.border}`}
                >
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`p-2 rounded-lg bg-slate-800 ${color.icon}`}>
                      <Icon size={18} />
                    </div>
                    <h3 className="font-semibold text-slate-200 text-sm">
                      {group.category}
                    </h3>
                  </div>

                  {/* Skill badges */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 rounded-md text-xs font-mono border ${color.badge} transition-colors duration-200`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
