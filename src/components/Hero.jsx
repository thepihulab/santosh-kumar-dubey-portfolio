import React from 'react';
import { Award, TrendingUp, ShieldCheck, MapPin, ArrowRight, Download, PhoneCall, Sparkles } from 'lucide-react';

export default function Hero({ onDownloadResume }) {
  const stats = [
    { label: 'Years Field Leadership', value: '23+', icon: ShieldCheck, color: 'text-sky-600 dark:text-sky-400' },
    { label: 'Star Club Accreditations', value: '6×', icon: Award, color: 'text-amber-600 dark:text-amber-400' },
    { label: 'Peak Target Achievement', value: '106%+', icon: TrendingUp, color: 'text-emerald-600 dark:text-emerald-400' },
    { label: 'National Rank (FY 21–22)', value: '#3 in India', icon: Sparkles, color: 'text-cyan-600 dark:text-cyan-400' },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Executive Bio & Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-400/20 text-sky-700 dark:text-sky-300 text-xs font-semibold tracking-wide backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping"></span>
              Senior Area Manager • Dr. Reddy’s Laboratories
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Santosh Kumar <span className="gradient-text-blue">Dubey</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300">
                Pharmaceutical Sales & Field Operations Leader
              </p>
            </div>

            {/* Lead Paragraph */}
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Driving sustainable revenue growth, comprehensive territory coverage, and doctor-chemist engagement across 
              <strong className="text-slate-900 dark:text-slate-200 font-bold"> Bihar, Uttar Pradesh, and Madhya Pradesh</strong>. 
              Currently spearheading field operations for the Aqura SG – General Medicine division at Dr. Reddy's Laboratories.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#experience"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-500 via-cyan-500 to-sky-600 hover:from-sky-400 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5"
              >
                Explore Track Record
                <ArrowRight size={16} />
              </a>
              <a
                href="/Santosh_Kumar_Dubey_Resume.pdf"
                download="Santosh_Kumar_Dubey_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 transition-all duration-300 shadow-sm hover:-translate-y-0.5"
              >
                <Download size={16} className="text-sky-600 dark:text-sky-400" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-white transition-colors"
              >
                <PhoneCall size={15} />
                Get in Touch
              </a>
            </div>

            {/* Current Base Location */}
            <div className="pt-3 flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <MapPin size={14} className="text-rose-500 dark:text-rose-400" />
              <span>Headquarters: <strong className="text-slate-800 dark:text-slate-300 font-bold">Muzaffarpur, Bihar</strong> (Managing 10 North Bihar Territories)</span>
            </div>
          </div>

          {/* Right Column: Hero Portrait Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-sky-500/30 via-indigo-500/20 to-amber-500/30 rounded-3xl blur-xl opacity-75 animate-pulse-glow"></div>
              
              {/* Image Frame Card */}
              <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-[#0c1424] border border-slate-200 dark:border-slate-700/60 shadow-xl dark:shadow-2xl p-2.5 group">
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-100 dark:bg-slate-900">
                  <img
                    src="/images/hero-seated.jpg"
                    alt="Santosh Kumar Dubey - Senior Area Manager"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle gradient vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 dark:opacity-70"></div>
                </div>

                {/* Floating Badge 1 - Top Left */}
                <div className="absolute top-5 left-5 glass-panel px-3.5 py-2 border-slate-200 dark:border-sky-400/30 shadow-xl flex items-center gap-2.5 animate-float bg-white/95 dark:bg-[rgba(14,22,38,0.85)]">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 dark:bg-sky-500/20 flex items-center justify-center text-sky-600 dark:text-sky-400">
                    <Award size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">Recognition</div>
                    <div className="text-xs font-extrabold text-slate-900 dark:text-white">Top Area Manager (24–25)</div>
                  </div>
                </div>

                {/* Floating Badge 2 - Bottom Right */}
                <div className="absolute bottom-5 right-5 glass-panel px-3.5 py-2.5 border-slate-200 dark:border-amber-400/30 shadow-xl flex items-center gap-2.5 bg-white/95 dark:bg-[rgba(14,22,38,0.85)]">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-amber-700 dark:text-amber-300 tracking-wider">Cadila • Lupin • Dr. Reddy's</div>
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200">23+ Years Pharma Journey</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Grid Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-5 sm:p-6 glass-panel-hover border-slate-200/90 dark:border-slate-800/80 relative overflow-hidden group bg-white/80 dark:bg-[rgba(14,22,38,0.72)] shadow-sm dark:shadow-none"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 ${item.color}`}>
                    <Icon size={20} />
                  </div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
                    Metric #{idx + 1}
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
