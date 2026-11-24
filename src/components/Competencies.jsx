import React from 'react';
import { TrendingUp, Users, HeartHandshake, BarChart3, ShieldCheck, Compass, Lightbulb } from 'lucide-react';

export default function Competencies() {
  const competencies = [
    {
      title: 'Sales Performance & Revenue Growth',
      category: 'Strategic Execution',
      level: '98%',
      desc: 'Proven track record of consistently surpassing demanding sales quotas, managing budget allocations, and delivering double-digit revenue expansion across competitive pharmaceutical portfolios.',
      icon: TrendingUp,
      metrics: ['6× Star Club Accreditations', '106%+ Target Achievements', 'Top Area Manager FY 24–25']
    },
    {
      title: 'Territory Planning & Route Optimization',
      category: 'Operations',
      level: '96%',
      desc: 'Mastery in mapping multi-district territories, formulating optimal doctor call cycles, headquarters supervision, and eliminating coverage blind spots.',
      icon: Compass,
      metrics: ['10 North Bihar Districts', 'UP & MP Multi-State Span', 'Strategic Route Mapping']
    },
    {
      title: 'Field Team Leadership & Coaching',
      category: 'People & Mentorship',
      level: '95%',
      desc: 'Supervising, motivating, and upskilling teams of Medical Representatives through regular joint field visits, scientific detailing guidance, and daily performance debriefs.',
      icon: Users,
      metrics: ['Supervision of 5+ MRs', 'Regular Joint Field Detailing', 'Talent Retention & Morale']
    },
    {
      title: 'Doctor & Key Opinion Leader Engagement',
      category: 'Relationship Capital',
      level: '99%',
      desc: 'Deep personal rapport with leading physicians, consultants, hospital departments, and retail chemists built carefully over 23 years of ethical, reliable communication.',
      icon: HeartHandshake,
      metrics: ['Tier-1 KOL Endorsements', 'Retail Chemist Affiliations', 'Hospital Institution Detailing']
    },
    {
      title: 'Market Intelligence & Data Analytics',
      category: 'Analytical Acumen',
      level: '92%',
      desc: 'Interpreting secondary sales data, prescription audit trends, competitor stock movements, and converting raw sales numbers into actionable tactical field initiatives.',
      icon: BarChart3,
      metrics: ['Prescription Audit Analysis', 'Competitor Trend Tracking', 'Tactical Field Course-Correction']
    },
    {
      title: 'High-Pressure Execution & Resilience',
      category: 'Core Tenacity',
      level: '97%',
      desc: 'Thriving in volatile and challenging market shifts, leading teams calmly through rigorous quarter-ends, supply chain transitions, and high-stakes divisional launches.',
      icon: ShieldCheck,
      metrics: ['Calm Leadership Under Pressure', 'Zero-Excuse Execution', '23-Year Unbroken Record']
    }
  ];

  return (
    <section id="competencies" className="py-24 relative overflow-hidden bg-slate-100/70 dark:bg-slate-950/40 transition-colors duration-300">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-400/20 text-emerald-800 dark:text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <Lightbulb size={13} />
            Professional Mastery
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Core Competencies & Leadership Pillars
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            The strategic skills, operational rigor, and interpersonal relationship capital refined across more than two decades in pharmaceutical field leadership.
          </p>
        </div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 sm:p-7 border-slate-200 dark:border-slate-800/80 bg-white/90 dark:bg-[rgba(14,22,38,0.72)] glass-panel-hover flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sky-600 dark:text-sky-400 group-hover:scale-110 group-hover:bg-sky-50 dark:group-hover:bg-sky-500/10 transition-all">
                      <Icon size={22} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Sub-metrics tags */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 space-y-2">
                  <div className="text-[11px] font-bold text-slate-500 dark:text-slate-500 uppercase tracking-wider">Key Indicators</div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.metrics.map((m, mIdx) => (
                      <span
                        key={mIdx}
                        className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800"
                      >
                        ✓ {m}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
