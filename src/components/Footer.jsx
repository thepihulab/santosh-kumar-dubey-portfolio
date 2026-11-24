import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-100 dark:bg-[#05080f] py-14 text-slate-600 dark:text-slate-400 text-xs sm:text-sm transition-colors duration-300">
      <div className="container-custom space-y-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 via-cyan-500 to-indigo-600 p-[1.5px] shadow-lg shadow-sky-500/20">
              <div className="w-full h-full bg-slate-900 rounded-[9px] flex items-center justify-center font-bold text-sky-400 text-base">
                SKD
              </div>
            </div>
            <div>
              <div className="font-bold text-base text-slate-900 dark:text-white">Santosh Kumar Dubey</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Senior Area Manager • Dr. Reddy's Laboratories</div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-slate-600 dark:text-slate-300">
            <a href="#about" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">About</a>
            <a href="#achievements" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Achievements</a>
            <a href="#experience" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Experience</a>
            <a href="#territories" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Territories</a>
            <a href="#competencies" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Competencies</a>
            <a href="#contact" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Contact</a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-white hover:border-sky-400 dark:hover:border-sky-500/50 transition-all cursor-pointer shadow-sm"
            title="Scroll to Top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-xs">
          <div>
            © {new Date().getFullYear()} Santosh Kumar Dubey. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
            Executive Pharmaceutical Sales Portfolio
          </div>
        </div>

      </div>
    </footer>
  );
}
