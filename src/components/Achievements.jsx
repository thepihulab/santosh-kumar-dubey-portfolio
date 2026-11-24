import React from 'react';
import confetti from 'canvas-confetti';
import { Trophy, Star, TrendingUp, Sparkles, Medal } from 'lucide-react';

export default function Achievements() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#f59e0b', '#10b981', '#ffffff']
    });
  };

  const awards = [
    {
      title: '6× Consecutive Star Club Winner',
      category: 'Elite Honor',
      metric: '6 Times',
      desc: 'Achieved the most prestigious sales honor in the organization consecutively for 6 terms, recognizing consistent top-tier sales velocity, doctor conversion, and market share growth.',
      icon: Trophy,
      glow: 'border-amber-400/40 dark:border-amber-400/30 hover:border-amber-400/70 shadow-amber-500/10',
      badgeClass: 'badge-tag-gold',
      accent: 'text-amber-600 dark:text-amber-400',
    },
    {
      title: 'Top Area Manager of the Region',
      category: 'Regional Leadership',
      metric: 'FY 2024–25',
      desc: 'Formally recognized as the top-ranking Area Manager across the entire regional operations, leading field teams through rigorous quarterly target cycles.',
      icon: Medal,
      glow: 'border-sky-400/40 dark:border-sky-400/30 hover:border-sky-400/70 shadow-sky-500/10',
      badgeClass: 'badge-tag',
      accent: 'text-sky-600 dark:text-sky-400',
    },
    {
      title: 'Zonal Topper & 3rd Rank in India',
      category: 'All-India National Standing',
      metric: '#3 in India',
      desc: 'Ranked Zonal Topper and achieved 3rd position nationwide in FY 2021–22 among hundreds of Area Managers across India, delivering record-breaking divisional growth.',
      icon: Star,
      glow: 'border-indigo-400/40 dark:border-indigo-400/30 hover:border-indigo-400/70 shadow-indigo-500/10',
      badgeClass: 'badge-tag',
      accent: 'text-indigo-600 dark:text-indigo-400',
    },
    {
      title: 'Triple 106%+ Target Surpass',
      category: 'Target Execution',
      metric: '>106% Delivery',
      desc: 'Achieved over 106% of divisional sales target on three separate occasions as Area Manager, navigating unpredictable market conditions with disciplined strategy.',
      icon: TrendingUp,
      glow: 'border-emerald-400/40 dark:border-emerald-400/30 hover:border-emerald-400/70 shadow-emerald-500/10',
      badgeClass: 'badge-tag-emerald',
      accent: 'text-emerald-600 dark:text-emerald-400',
    },
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden transition-colors duration-300">
      {/* Decorative background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-400/20 text-amber-800 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles size={13} />
              Hall of Excellence
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Distinguished Career Achievements & Honors
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              Consistently outperforming sales quotas, establishing regional dominance, and setting operational benchmarks across North Bihar, Uttar Pradesh, and Madhya Pradesh.
            </p>
          </div>

          <button
            onClick={triggerConfetti}
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-50 dark:bg-slate-900 border border-amber-300 dark:border-amber-500/30 text-xs font-bold text-amber-800 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-500/10 transition-all duration-300 shadow-sm cursor-pointer"
          >
            <Sparkles size={15} />
            Celebrate Milestones 🎉
          </button>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, idx) => {
            const Icon = award.icon;
            return (
              <div
                key={idx}
                onClick={triggerConfetti}
                className={`glass-panel p-6 sm:p-8 border ${award.glow} glass-panel-hover cursor-pointer group relative overflow-hidden transition-all duration-300 bg-white/90 dark:bg-[rgba(14,22,38,0.72)] shadow-sm`}
              >
                {/* Top Row: Metric & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-3 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 ${award.accent}`}>
                    <Icon size={24} />
                  </div>
                  <span className={award.badgeClass}>
                    {award.category}
                  </span>
                </div>

                {/* Big Metric Display */}
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-200 transition-colors">
                  {award.title}
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  Benchmark: <span className="text-slate-800 dark:text-slate-200 font-bold">{award.metric}</span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {award.desc}
                </p>

                {/* Bottom decorative bar */}
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                  <span>Click to celebrate</span>
                  <span className="text-sky-600 dark:text-sky-400 font-bold group-hover:translate-x-1 transition-transform">★ Verified Achievement</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Milestone Banner */}
        <div className="mt-8 glass-panel p-6 sm:p-8 border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-sky-50 via-white to-sky-50 dark:from-slate-900/90 dark:via-slate-900/50 dark:to-slate-900/90 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              <TrendingUp size={24} />
            </div>
            <div>
              <div className="text-base font-bold text-slate-900 dark:text-white">Consistent 105%+ Target Record Across Tenures</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">Maintained high operational momentum across both Lupin Limited (19 yrs) and Dr. Reddy's Laboratories.</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-300 dark:border-emerald-500/20">
            <span>High Performance Verified</span>
          </div>
        </div>

      </div>
    </section>
  );
}
