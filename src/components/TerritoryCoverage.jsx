import React, { useState } from 'react';
import { MapPin, Globe2, Navigation, Building, Compass } from 'lucide-react';

export default function TerritoryCoverage() {
  const [activeRegion, setActiveRegion] = useState('north-bihar');

  const regions = {
    'north-bihar': {
      title: 'North Bihar Division (Current Mandate)',
      organization: "Dr. Reddy's Laboratories • Aqura SG",
      headquarters: 'Muzaffarpur, Bihar',
      headline: 'Supervising 10 High-Volume North Bihar Districts with 5 Medical Representatives',
      districts: [
        { name: 'Muzaffarpur', status: 'Divisional HQ & Key Medical Hub', doctors: 'Extensive Super-Speciality & General Physicians' },
        { name: 'Darbhanga', status: 'Major Medical College & Hospital Belt', doctors: 'Key Opinion Leaders & Clinical Specialists' },
        { name: 'Madhubani', status: 'Active Rural & Semi-Urban Distribution', doctors: 'General Practitioners & Retail Chemist Hub' },
        { name: 'Sitamarhi', status: 'High-Velocity Border Market', doctors: 'Physicians & Pharmacy Distributors' },
        { name: 'Bettiah', status: 'West Champaran Commercial Center', doctors: 'Specialist Consultants & Chemist Outlets' },
        { name: 'Motihari', status: 'East Champaran Core Territory', doctors: 'Historic Foundation & Strong Doctor Network' },
        { name: 'Samastipur', status: 'High Density Prescription Zone', doctors: 'General & Chronic Medicine Clinics' },
        { name: 'Chhapra', status: 'Saran District Headquarters', doctors: 'Multi-Speciality Clinics & Stockists' },
        { name: 'Siwan', status: 'Fast-Growing Commercial Pharma Market', doctors: 'High Prescription Audit Density' },
        { name: 'Gopalganj', status: 'Strategic Western North Bihar Pocket', doctors: 'Physicians & Primary Health Networks' },
      ]
    },
    'bihar-state': {
      title: 'Extended Bihar Markets (Lupin Limited)',
      organization: 'Lupin Limited • Multiple Field Roles',
      headquarters: 'Muzaffarpur & Motihari',
      headline: 'Decade-long coverage of primary commercial corridors across Central & North Bihar',
      districts: [
        { name: 'Patna', status: 'Capital City Tertiary Care Market', doctors: 'Leading Consultants & Institutional Detailing' },
        { name: 'Begusarai', status: 'Industrial Health & Clinic Hub', doctors: 'General Physicians & Key Chemist Associations' },
        { name: 'Kishanganj', status: 'Eastern Bihar Medical Hub', doctors: 'MGM Medical College & Local Practitioners' },
        { name: 'Arrah (Bhojpur)', status: 'High Prescription Volume Belt', doctors: 'Senior Physicians & Wholesalers' },
        { name: 'Siwan & Gopalganj', status: 'Long-term customer retention', doctors: 'Strong personal relationships over a decade' },
      ]
    },
    'uttar-pradesh': {
      title: 'Uttar Pradesh Markets (2020 – 2025)',
      organization: 'Lupin Limited • Extended Field Leadership',
      headquarters: 'Varanasi Corridor',
      headline: 'Extended management across 6 pivotal Eastern UP districts, driving cross-state sales velocity',
      districts: [
        { name: 'Varanasi', status: 'Eastern UP Medical Capital', doctors: 'BHU IMS, Senior Consultants & Major Hospitals' },
        { name: 'Ghazipur', status: 'High Potential District Center', doctors: 'Key General Practitioners & Retail Chemist Chains' },
        { name: 'Mau', status: 'Fast Growing Healthcare Pocket', doctors: 'Private Nursing Homes & Physicians' },
        { name: 'Ballia', status: 'Easternmost UP Belt', doctors: 'Extensive Doctor Detailing Coverage' },
        { name: 'Bhadohi', status: 'Commercial Industrial District', doctors: 'Local Practitioners & Primary Healthcare' },
        { name: 'Chandauli', status: 'Varanasi Satellite Market', doctors: 'Key Stockist & Retail Pharmacist Network' },
      ]
    },
    'madhya-pradesh': {
      title: 'Madhya Pradesh Foundation (Cadila & Lupin)',
      organization: 'Cadila Pharma & Lupin Limited (2004 – 2008+)',
      headquarters: 'Balaghat & Mahakoshal Region',
      headline: 'The foundational training ground where pharmaceutical sales fundamentals were mastered',
      districts: [
        { name: 'Balaghat', status: 'Career Launch Territory', doctors: 'Pioneered doctor call detailing & chemist relations' },
        { name: 'Jabalpur', status: 'Regional Medical & Distribution Hub', doctors: 'Tertiary Hospitals & Senior Consultants' },
        { name: 'Chhindwara', status: 'Major Commercial Center', doctors: 'General Physicians & Specialty Practices' },
        { name: 'Seoni', status: 'Key Connecting Corridor', doctors: 'Retail Chemists & Community Doctors' },
      ]
    }
  };

  const current = regions[activeRegion];

  return (
    <section id="territories" className="py-24 relative overflow-hidden transition-colors duration-300">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-300 dark:border-cyan-400/20 text-cyan-700 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Globe2 size={13} />
            Geographic Footprint
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Comprehensive Multi-State Territory Leadership
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Deep, ground-tested understanding of prescriber behavior, doctor consultation habits, and distributor ecosystems across Bihar, Uttar Pradesh, and Madhya Pradesh.
          </p>
        </div>

        {/* Region Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveRegion('north-bihar')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
              activeRegion === 'north-bihar'
                ? 'bg-sky-600 text-white shadow-lg shadow-sky-500/25'
                : 'glass-panel text-slate-700 dark:text-slate-400 hover:text-sky-600 dark:hover:text-white bg-white dark:bg-transparent border-slate-200 dark:border-slate-800'
            }`}
          >
            <MapPin size={15} />
            North Bihar (Current HQ)
          </button>

          <button
            onClick={() => setActiveRegion('bihar-state')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
              activeRegion === 'bihar-state'
                ? 'bg-sky-600 text-white shadow-lg shadow-sky-500/25'
                : 'glass-panel text-slate-700 dark:text-slate-400 hover:text-sky-600 dark:hover:text-white bg-white dark:bg-transparent border-slate-200 dark:border-slate-800'
            }`}
          >
            <Building size={15} />
            Bihar-Wide Tenure
          </button>

          <button
            onClick={() => setActiveRegion('uttar-pradesh')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
              activeRegion === 'uttar-pradesh'
                ? 'bg-sky-600 text-white shadow-lg shadow-sky-500/25'
                : 'glass-panel text-slate-700 dark:text-slate-400 hover:text-sky-600 dark:hover:text-white bg-white dark:bg-transparent border-slate-200 dark:border-slate-800'
            }`}
          >
            <Compass size={15} />
            Uttar Pradesh (2020–25)
          </button>

          <button
            onClick={() => setActiveRegion('madhya-pradesh')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
              activeRegion === 'madhya-pradesh'
                ? 'bg-sky-600 text-white shadow-lg shadow-sky-500/25'
                : 'glass-panel text-slate-700 dark:text-slate-400 hover:text-sky-600 dark:hover:text-white bg-white dark:bg-transparent border-slate-200 dark:border-slate-800'
            }`}
          >
            <Navigation size={15} />
            Madhya Pradesh (Origins)
          </button>
        </div>

        {/* Region Card */}
        <div className="glass-panel p-6 sm:p-10 border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-[rgba(14,22,38,0.72)] shadow-sm space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800/80 pb-6">
            <div>
              <div className="text-xs uppercase font-extrabold tracking-wider text-sky-600 dark:text-sky-400 mb-1">
                {current.organization}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {current.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                {current.headline}
              </p>
            </div>

            <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 shrink-0">
              <MapPin size={16} className="text-rose-500 dark:text-rose-400" />
              <span>Base: <strong>{current.headquarters}</strong></span>
            </div>
          </div>

          {/* District Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {current.districts.map((dist, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80 hover:border-sky-500/50 transition-colors group shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-sky-400"></span>
                    {dist.name}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    District #{idx + 1}
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {dist.status}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {dist.doctors}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
