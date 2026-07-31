import { ExternalLink, GitBranch, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import { SectionHeader } from '@/app/components/ui/SectionHeader';
import { FadeIn } from '@/app/components/ui/FadeIn';

const domains = [
  {
    label: 'Marketplace Payments',
    company: 'Walmart',
    description: 'Seller-payments platform processing 2.5M+ daily requests across commission, settlement, and reconciliation.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/20',
  },
  {
    label: 'Financial Services',
    company: 'T. Rowe Price',
    description: 'Mutual fund platforms processing millions of daily trades across 300+ funds.',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20',
  },
  {
    label: 'Healthcare',
    company: 'Walmart Health & Wellness',
    description: 'Event-driven microservices saving 2,500+ hours of pharmacy labor every day.',
    color: 'text-green-400',
    bg: 'bg-green-400/10',
    border: 'border-green-400/20',
  },
];

const quickFacts = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Wayne, New Jersey',
  },
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'MS Information Systems\nPace University, NY — 2019',
  },
  {
    icon: Briefcase,
    label: 'Experience',
    value: '8+ years in enterprise software',
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionHeader
            number="01"
            title="About Me"
            subtitle="A little context behind the numbers."
          />
        </FadeIn>

        <div className="grid md:grid-cols-5 gap-10 items-start">

          {/* Narrative — takes 3 of 5 columns */}
          <div className="md:col-span-3 space-y-6">
            <FadeIn delay={100}>
              <p className="text-slate-300 text-lg leading-relaxed">
                I'm a Senior Full-Stack Developer who specializes in building distributed systems
                that handle real enterprise load — not toy scale, but{' '}
                <span className="text-slate-100 font-medium">millions of daily requests</span>{' '}
                and financial platforms where downtime is not an option.
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-slate-400 leading-relaxed">
                My career has taken me across three demanding domains. At{' '}
                <span className="text-slate-200 font-medium">Walmart</span>, I currently build the
                seller-payments platform behind Walmart Marketplace — commission, settlement, and
                reconciliation across four countries — and previously led a healthcare migration
                that saved thousands of hours of pharmacy labor nationwide. At{' '}
                <span className="text-slate-200 font-medium">T. Rowe Price</span>, I built and
                modernized the microservices backbone behind mutual fund transactions — millions of
                trades a day, 300+ funds, strict financial compliance.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="text-slate-400 leading-relaxed">
                I lead with architecture — I'm comfortable owning technical design documents,
                driving discussions across 30+ person organizations, and making the right call
                between pragmatism and elegance. Java and Spring Boot are my home base, but I'm
                equally at ease in the cloud (AWS, Azure), the data layer (Kafka, Cassandra,
                Cosmos DB), or the frontend (React, Angular).
              </p>
            </FadeIn>

            {/* Domain cards */}
            <FadeIn delay={400}>
              <div className="grid gap-3 pt-2">
                {domains.map((d) => (
                  <div
                    key={d.label}
                    className={`card-glass p-4 flex gap-4 items-start border ${d.border}`}
                  >
                    <div className={`mt-0.5 w-[168px] px-2 py-0.5 rounded text-xs font-mono font-semibold text-center whitespace-nowrap ${d.bg} ${d.color} shrink-0`}>
                      {d.label}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">{d.company}</p>
                      <p className="text-sm text-slate-400 leading-snug">{d.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Quick facts — takes 2 of 5 columns */}
          <div className="md:col-span-2 space-y-4">
            <FadeIn delay={200} direction="left">
              <div className="card-glass p-6 space-y-5">
                {quickFacts.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex gap-3 items-start">
                    <Icon size={16} className="text-blue-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500 font-mono mb-0.5">{label}</p>
                      <p className="text-sm text-slate-300 whitespace-pre-line leading-snug">{value}</p>
                    </div>
                  </div>
                ))}

                <div className="pt-2 border-t border-slate-800 flex gap-3">
                  <a
                    href="https://linkedin.com/in/basantpatidar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={15} />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/basantpatidar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    <GitBranch size={15} />
                    GitHub
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Currently working badge */}
            <FadeIn delay={350} direction="left">
              <div className="card-glass p-4 border border-green-400/20">
                <div className="flex items-center gap-2 mb-2">
                  <span className="pulse-dot" />
                  <span className="text-xs font-mono text-green-400">Currently at</span>
                </div>
                <p className="text-sm font-semibold text-slate-200">Walmart Inc.</p>
                <p className="text-xs text-slate-500 mt-0.5">Senior Software Developer · Sep 2025 – Present</p>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
