import React from 'react';
import { GraduationCap, Languages, Target, Compass, CheckCircle2, HeartHandshake, Shield, BookOpen } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      title: 'Strategic Territory Planning',
      desc: 'Formulating data-driven route coverage and headquarters distribution plans to ensure 100% doctor detailing frequency and chemist availability.',
      icon: Target,
    },
    {
      title: 'Doctor & KOL Engagement',
      desc: 'Cultivating authentic, long-standing relationships with key opinion leaders, senior consultants, physicians, and retail chemists across 20+ districts.',
      icon: HeartHandshake,
    },
    {
      title: 'Field Team Mentorship',
      desc: 'Hands-on coaching of Medical Representatives in joint field visits, objection handling, detailing scientific product features, and exceeding monthly targets.',
      icon: Compass,
    },
    {
      title: 'Adaptability Across Markets',
      desc: 'Demonstrated leadership across diverse regulatory, economic, and competitive conditions across North Bihar, Uttar Pradesh, and Madhya Pradesh.',
      icon: Shield,
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-100/70 dark:bg-slate-950/40 transition-colors duration-300">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700/80 text-sky-700 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider">
            Executive Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            23 Years of Ground Realities, Strategic Vision & Results
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            From stepping into the field as a dedicated Medical Representative in 2004 to orchestrating entire regional sales divisions as Senior Area Manager, my career is defined by discipline, relationships, and uncompromising delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait & Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-[#0c1424] border border-slate-200 dark:border-slate-700/60 shadow-xl dark:shadow-2xl p-2.5 group">
              <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-slate-100 dark:bg-slate-900">
                <img
                  src="/images/profile-suit.jpg"
                  alt="Santosh Kumar Dubey - Formal Portrait"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 dark:from-[#070b14]/90 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <div className="text-lg font-bold">Santosh Kumar Dubey</div>
                  <div className="text-xs text-sky-300 font-medium">Cadila Pharma • Lupin Ltd • Dr. Reddy’s Laboratories</div>
                </div>
              </div>
            </div>

            {/* Quick Education & Languages card */}
            <div className="glass-panel p-6 border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-[rgba(14,22,38,0.72)] shadow-sm space-y-4">
              <div className="flex items-center gap-3 text-sky-600 dark:text-sky-400 font-bold text-sm uppercase tracking-wide border-b border-slate-200 dark:border-slate-800 pb-3">
                <GraduationCap size={18} />
                <span>Academic Foundation</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-sky-600 dark:text-sky-400 mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block">B.Sc. (Honours), Chemistry (2002)</strong>
                    <span className="text-slate-500 dark:text-slate-400">Bhim Rao Ambedkar University, Muzaffarpur, Bihar</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-sky-600 dark:text-sky-400 mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block">Intermediate, Science - Biology (1997)</strong>
                    <span className="text-slate-500 dark:text-slate-400">Bihar Intermediate Education Council (BIEC), Patna</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-sky-600 dark:text-sky-400 mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block">Matriculation (1995)</strong>
                    <span className="text-slate-500 dark:text-slate-400">Bihar School Examination Board (BSEB), Patna</span>
                  </div>
                </li>
              </ul>

              {/* Languages */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300">
                  <Languages size={15} className="text-cyan-600 dark:text-cyan-400" />
                  Languages:
                </span>
                <span className="font-bold text-slate-900 dark:text-slate-200">Hindi • English • Bhojpuri</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Key Strengths Grid */}
          <div className="lg:col-span-7 space-y-8">
            <div className="glass-panel p-8 border-slate-200 dark:border-slate-800/80 bg-white/90 dark:bg-[rgba(14,22,38,0.72)] shadow-sm space-y-5 relative">
              <div className="text-xs uppercase font-extrabold tracking-widest text-sky-600 dark:text-sky-400 flex items-center gap-2">
                <BookOpen size={15} />
                Executive Philosophy
              </div>
              <blockquote className="font-editorial text-xl sm:text-2xl text-slate-900 dark:text-slate-100 italic leading-snug">
                "In pharmaceutical sales, sustained success is never an accident of market circumstances. It is forged by showing up consistently in the clinic, speaking with scientific credibility, and mentoring field representatives to treat every territory with absolute ownership."
              </blockquote>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Over the past 23 years, I have navigated complex therapeutic divisions ranging from Acute to General Medicine and Chronic portfolios. My work spans from grassroots physician detailing at Balaghat, MP and Motihari, Bihar to currently supervising high-stakes field teams across 10 North Bihar districts for Dr. Reddy's Laboratories.
              </p>
            </div>

            {/* Strengths Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="glass-panel p-5 border-slate-200 dark:border-slate-800/80 bg-white/90 dark:bg-[rgba(14,22,38,0.72)] glass-panel-hover group shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-400/20 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-sky-100 dark:group-hover:bg-sky-500/20 transition-all">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
