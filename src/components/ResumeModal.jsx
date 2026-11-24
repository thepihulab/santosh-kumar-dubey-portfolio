import React from 'react';
import { X, Printer, Download, Phone, Mail, MapPin } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 dark:bg-black/80 backdrop-blur-md overflow-y-auto">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#090e1a] border border-slate-300 dark:border-slate-700/80 rounded-2xl shadow-2xl max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#070b14]/90">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-500/20 text-sky-700 dark:text-sky-400 flex items-center justify-center font-bold text-xs">
              SKD
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Executive Curriculum Vitae</h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Santosh Kumar Dubey • Senior Area Manager</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Santosh_Kumar_Dubey_Resume.pdf"
              download="Santosh_Kumar_Dubey_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-sm cursor-pointer"
            >
              <Download size={14} />
              Download PDF
            </a>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs transition-colors shadow-sm cursor-pointer"
            >
              <Printer size={14} />
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 text-slate-800 dark:text-slate-200 bg-white dark:bg-[#070b14] print:bg-white print:text-black">
          
          {/* Header of Resume */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">SANTOSH KUMAR DUBEY</h1>
              <div className="text-base font-bold text-sky-600 dark:text-sky-400 mt-1">
                Senior Area Manager | Pharmaceutical Sales & Marketing
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mt-3 font-semibold">
                <span className="flex items-center gap-1.5"><MapPin size={13} className="text-rose-500 dark:text-rose-400" /> Muzaffarpur, Bihar</span>
                <span className="flex items-center gap-1.5"><Phone size={13} className="text-sky-600 dark:text-sky-400" /> +91 9973473449</span>
                <span className="flex items-center gap-1.5"><Mail size={13} className="text-cyan-600 dark:text-cyan-400" /> santoshdubeymotihari@gmail.com</span>
              </div>
            </div>
            
            <div className="w-20 h-24 rounded-lg overflow-hidden border border-slate-300 dark:border-slate-700 shrink-0 hidden sm:block">
              <img src="/images/portrait-headshot.jpg" alt="Santosh Kumar Dubey" className="w-full h-full object-cover object-top" />
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-sky-700 dark:text-sky-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Professional Summary
            </h4>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Results-driven pharmaceutical sales professional with over 23 years of progressive experience in pharmaceutical sales, territory management, and field leadership across the Bihar, Uttar Pradesh, and Madhya Pradesh markets. Currently serving as Senior Area Manager at Dr. Reddy's Laboratories in the Aqura SG – General Medicine division, based at Muzaffarpur and supervising the North Bihar territories with a team of five Medical Representatives. Proven track record of achieving sales targets, building strong customer relationships, and leading field teams, supported by six consecutive Star Club qualifications, three instances of achieving above 106% of target as Area Manager, ranking as Zonal Topper and third in India in FY 2021–22, and recognition as Top Area Manager of the Region in FY 2024–25.
            </p>
          </div>

          {/* Key Achievements */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-amber-700 dark:text-amber-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Key Career Achievements
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <strong className="text-slate-900 dark:text-white block font-bold">★ Star Club:</strong>
                <span className="text-slate-600 dark:text-slate-400">Qualified for the Star Club six consecutive times, reflecting consistent top-level sales performance.</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <strong className="text-slate-900 dark:text-white block font-bold">★ Regional Top Area Manager:</strong>
                <span className="text-slate-600 dark:text-slate-400">Recognised as Top Area Manager of the Region in FY 2024–25.</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <strong className="text-slate-900 dark:text-white block font-bold">★ All India Rank #3 & Zonal Topper:</strong>
                <span className="text-slate-600 dark:text-slate-400">Ranked as Zonal Topper and third across India in FY 2021–22.</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <strong className="text-slate-900 dark:text-white block font-bold">★ Target Achievement:</strong>
                <span className="text-slate-600 dark:text-slate-400">Achieved more than 106% of target on three occasions as Area Manager.</span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-5">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-sky-700 dark:text-sky-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Professional Experience
            </h4>

            {/* Dr Reddy */}
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row justify-between text-slate-900 dark:text-white font-bold">
                <span>Senior Area Manager • Dr. Reddy’s Laboratories</span>
                <span className="text-sky-700 dark:text-sky-400 text-xs font-bold">14 March 2025 – Present</span>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 italic font-medium">Aqura SG – General Medicine division | Headquarters: Muzaffarpur, Bihar</div>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300 text-xs">
                <li>Supervise North Bihar territories: Muzaffarpur, Darbhanga, Madhubani, Sitamarhi, Bettiah, Motihari, Samastipur, Chhapra, Siwan, and Gopalganj.</li>
                <li>Manage and guide a team of 5 Medical Representatives with clear target setting, daily field coaching, and comprehensive coverage.</li>
                <li>Plan territory-wise business strategies and drive achievement of divisional sales goals.</li>
              </ul>
            </div>

            {/* Lupin AM */}
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row justify-between text-slate-900 dark:text-white font-bold">
                <span>Senior Area Manager / Area Manager • Lupin Limited</span>
                <span className="text-slate-500 dark:text-slate-400 text-xs font-bold">April 2015 – March 2025 (10 Years)</span>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 italic font-medium">Headquarters: Muzaffarpur, Bihar (with UP & MP coverage)</div>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300 text-xs">
                <li>Promoted to Area Manager on 9 April 2015 and later elevated to Senior Area Manager.</li>
                <li>Led sales operations across Bihar (Patna, Muzaffarpur, Siwan, Begusarai, Gopalganj, Sitamarhi, Kishanganj, Arrah) and MP (Balaghat, Chhindwara, Seoni, Jabalpur).</li>
                <li>From 2020 to 2025, also handled UP markets: Varanasi, Ghazipur, Mau, Ballia, Bhadohi, and Chandauli.</li>
                <li>Achieved 105% of target as Area Manager at Lupin Limited.</li>
              </ul>
            </div>

            {/* Lupin MR */}
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row justify-between text-slate-900 dark:text-white font-bold">
                <span>Medical Representative • Lupin Limited</span>
                <span className="text-slate-500 dark:text-slate-400 text-xs font-bold">February 2006 – April 2015</span>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 italic font-medium">Headquarters: Balaghat (MP) & Motihari (Bihar)</div>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300 text-xs">
                <li>Physician detailing, scientific product presentations, and customer call cycles.</li>
                <li>Consistently exceeded sales targets and built extensive doctor customer base leading to management promotion.</li>
              </ul>
            </div>

            {/* Cadila MR */}
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row justify-between text-slate-900 dark:text-white font-bold">
                <span>Medical Representative • Cadila Pharma</span>
                <span className="text-slate-500 dark:text-slate-400 text-xs font-bold">9 September 2004 – 14 February 2006</span>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 italic font-medium">Headquarters: Balaghat, Madhya Pradesh</div>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300 text-xs">
                <li>Began career promoting ethical pharmaceuticals to doctors and chemists through structured field visits.</li>
              </ul>
            </div>
          </div>

          {/* Education & Personal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-slate-200 dark:border-slate-800 text-xs">
            <div className="space-y-2">
              <h4 className="text-xs uppercase font-extrabold tracking-widest text-sky-700 dark:text-sky-400">
                Education
              </h4>
              <div><strong className="text-slate-900 dark:text-white">B.Sc. (Honours), Chemistry (2002)</strong> - Bhim Rao Ambedkar University, Muzaffarpur</div>
              <div><strong className="text-slate-900 dark:text-white">Intermediate, Science - Biology (1997)</strong> - BIEC, Patna</div>
              <div><strong className="text-slate-900 dark:text-white">Matriculation (1995)</strong> - BSEB, Patna</div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs uppercase font-extrabold tracking-widest text-sky-700 dark:text-sky-400">
                Personal Information
              </h4>
              <div><strong className="text-slate-900 dark:text-white">Languages:</strong> Hindi, English, Bhojpuri</div>
              <div><strong className="text-slate-900 dark:text-white">Current Location:</strong> Muzaffarpur, Bihar</div>
              <div><strong className="text-slate-900 dark:text-white">Contact:</strong> +91 9973473449 | santoshdubeymotihari@gmail.com</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
