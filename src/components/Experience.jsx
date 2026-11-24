import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, Users, Award, CheckCircle2, Building2 } from 'lucide-react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "Dr. Reddy's Laboratories",
      role: "Senior Area Manager",
      period: "14 March 2025 – Present",
      division: "Aqura SG – General Medicine Division",
      headquarters: "Muzaffarpur, Bihar",
      teamSize: "5 Medical Representatives",
      territories: "Muzaffarpur, Darbhanga, Madhubani, Sitamarhi, Bettiah, Motihari, Samastipur, Chhapra, Siwan, Gopalganj",
      description: "Spearheading field operations, territory business strategies, and sales delivery for the Aqura SG – General Medicine division across 10 vital North Bihar districts.",
      achievements: [
        "Directly supervise and coach a team of 5 Medical Representatives with daily field accompaniment and performance reviews.",
        "Formulate and execute customized territory-wise growth strategies for high-priority general medicine product portfolios.",
        "Drive consistent doctor detailing and maintain robust engagement with leading physicians, key opinion leaders, and retail chemists.",
        "Institute disciplined progress tracking and corrective field action plans to exceed monthly and quarterly division targets."
      ],
      tag: "Current Role",
      badgeClass: "badge-tag"
    },
    {
      company: "Lupin Limited",
      role: "Senior Area Manager / Area Manager",
      period: "April 2015 – March 2025 (10 Years)",
      division: "Field Sales & Operations",
      headquarters: "Muzaffarpur, Bihar (with UP & MP oversight)",
      teamSize: "Supervised Multiple Field Teams",
      territories: "Bihar: Muzaffarpur, Patna, Siwan, Begusarai, Gopalganj, Sitamarhi, Kishanganj, Arrah | UP: Varanasi, Ghazipur, Mau, Ballia, Bhadohi, Chandauli | MP: Balaghat, Chhindwara, Seoni, Jabalpur",
      description: "Promoted to Area Manager on 9 April 2015 at Muzaffarpur and subsequently elevated to Senior Area Manager. Delivered a decade of stellar growth across Bihar and Uttar Pradesh markets.",
      achievements: [
        "Achieved 105% of sales target across the Area Manager tenure in fiercely competitive market segments.",
        "Led expansion from 2020 to 2025 across Uttar Pradesh markets (Varanasi, Ghazipur, Mau, Ballia, Bhadohi, Chandauli) alongside Bihar operations.",
        "Secured Star Club accreditation consecutively and finished as Zonal Topper & #3 across all India in FY 2021–22.",
        "Recruited, mentored, and retained top-tier Medical Representatives, consistently elevating low-performing headquarters to profitability."
      ],
      tag: "10-Year Leadership Tenure",
      badgeClass: "badge-tag-gold"
    },
    {
      company: "Lupin Limited",
      role: "Medical Representative",
      period: "February 2006 – April 2015 (9+ Years)",
      division: "Field Medical Detailing",
      headquarters: "Balaghat (MP) & Motihari (Bihar)",
      teamSize: "Individual Territory Contributor",
      territories: "Balaghat, Madhya Pradesh & Motihari, Bihar",
      description: "Carried out grassroots physician detailing, product presentations, and chemist prescription tracking to build a solid brand presence in assigned territories.",
      achievements: [
        "Earned reputation as a top-performing Medical Representative, leading to promotion into field management on 9 April 2015.",
        "Built extensive, trust-based relationships with physicians, surgeons, pediatricians, and general practitioners.",
        "Exceeded annual sales objectives by driving strong prescription audit trends and distributor coordination.",
        "Mastered ground sales dynamics in both Madhya Pradesh and Bihar, forming the deep bedrock of future management success."
      ],
      tag: "Foundational Excellence",
      badgeClass: "badge-tag"
    },
    {
      company: "Cadila Pharma",
      role: "Medical Representative",
      period: "9 September 2004 – 14 February 2006",
      division: "Field Sales",
      headquarters: "Balaghat, Madhya Pradesh",
      teamSize: "Territory Sales Contributor",
      territories: "Balaghat District & Surrounding MP Belts",
      description: "Began pharmaceutical career promoting ethical formulations to doctors and chemists through structured field visits and product detailing.",
      achievements: [
        "Learned and perfected the fundamentals of territory coverage, route scheduling, and doctor call productivity.",
        "Established key distributor and retail chemist networks across Balaghat and adjacent sub-markets.",
        "Developed disciplined sales reporting habits and customer objection handling skills that fueled rapid career acceleration."
      ],
      tag: "Career Inception",
      badgeClass: "badge-tag"
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-100/70 dark:bg-slate-950/60 transition-colors duration-300">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 dark:bg-sky-500/10 border border-slate-300 dark:border-sky-400/20 text-sky-700 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase size={13} />
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            23+ Years of Continuous Progression & Leadership
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            From ground-level physician detailing to managing multi-district regional divisions across premier pharmaceutical enterprises.
          </p>
        </div>

        {/* Desktop Interactive Tabs & Detail View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Organization List */}
          <div className="lg:col-span-5 space-y-3">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer text-left ${
                  activeTab === idx
                    ? 'bg-sky-50/90 dark:bg-slate-900 border-sky-500 dark:border-sky-400/50 shadow-md shadow-sky-500/10 translate-x-2'
                    : 'bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-900/70 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={exp.badgeClass}>
                    {exp.tag}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Calendar size={13} />
                    {exp.period.split('(')[0]}
                  </span>
                </div>

                <div className="text-lg font-bold text-slate-900 dark:text-white mb-0.5">
                  {exp.role}
                </div>
                <div className="text-sm font-bold text-sky-600 dark:text-sky-400 mb-2">
                  {exp.company}
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <MapPin size={13} className="text-slate-400 dark:text-slate-500 shrink-0" />
                  <span className="truncate">{exp.headquarters}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Detailed Career Dossier */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 border-slate-200 dark:border-slate-800/90 bg-white/95 dark:bg-[rgba(14,22,38,0.72)] shadow-sm space-y-6 relative">
              
              {/* Header Box */}
              <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs uppercase font-extrabold tracking-wider text-sky-600 dark:text-sky-400">
                    {experiences[activeTab].division}
                  </span>
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-400 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
                    {experiences[activeTab].period}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {experiences[activeTab].role}
                </h3>
                <div className="text-lg font-bold text-sky-600 dark:text-sky-300 flex items-center gap-2">
                  <Building2 size={18} />
                  {experiences[activeTab].company}
                </div>
              </div>

              {/* Scope & Team Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1.5 mb-1">
                    <Users size={14} className="text-sky-600 dark:text-sky-400" />
                    Team & Leadership Scope
                  </div>
                  <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    {experiences[activeTab].teamSize}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1.5 mb-1">
                    <MapPin size={14} className="text-amber-500 dark:text-amber-400" />
                    Operational Base
                  </div>
                  <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    {experiences[activeTab].headquarters}
                  </div>
                </div>
              </div>

              {/* Narrative Summary */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {experiences[activeTab].description}
              </p>

              {/* Territory Span */}
              <div className="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/20 border border-sky-200 dark:border-sky-800/30">
                <div className="text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1.5 flex items-center gap-1.5">
                  <MapPin size={14} />
                  Territory & Market Coverage
                </div>
                <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-300 font-medium leading-relaxed">
                  {experiences[activeTab].territories}
                </div>
              </div>

              {/* Key Deliverables & Achievements */}
              <div className="space-y-3 pt-2">
                <div className="text-xs uppercase font-extrabold tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <Award size={15} className="text-amber-500 dark:text-amber-400" />
                  Key Responsibilities & Deliverables
                </div>
                <ul className="space-y-2.5">
                  {experiences[activeTab].achievements.map((item, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={16} className="text-sky-600 dark:text-sky-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
