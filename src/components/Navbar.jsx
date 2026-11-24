import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Phone, ChevronRight, Sun, Moon } from 'lucide-react';

export default function Navbar({ theme, toggleTheme, onDownloadResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Experience', href: '#experience' },
    { name: 'Territories', href: '#territories' },
    { name: 'Competencies', href: '#competencies' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#070b14]/90 backdrop-blur-xl border-b border-slate-200/90 dark:border-slate-800/80 shadow-md dark:shadow-2xl py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Brand / Monogram */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-sky-600 via-cyan-500 to-indigo-600 p-[1.5px] shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center font-bold text-sky-400 text-lg tracking-wider">
              SKD
            </div>
          </div>
          <div>
            <div className="font-bold text-base text-slate-900 dark:text-slate-100 tracking-tight group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
              Santosh Kumar Dubey
            </div>
            <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 tracking-wide uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
              Senior Area Manager • Pharma Sales
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400 transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-sky-500 dark:after:bg-sky-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Theme Toggle & CTA Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 border border-slate-300/80 dark:border-slate-700/60 text-slate-700 dark:text-slate-200 transition-all duration-300 shadow-sm hover:scale-105 cursor-pointer flex items-center justify-center"
          >
            {theme === 'dark' ? (
              <Sun size={18} className="text-amber-400 rotate-0 transition-transform duration-300 hover:rotate-90" />
            ) : (
              <Moon size={18} className="text-sky-600 rotate-0 transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          <a
            href="/Santosh_Kumar_Dubey_Resume.pdf"
            download="Santosh_Kumar_Dubey_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 dark:text-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 border border-slate-300 dark:border-slate-700/60 transition-all duration-200 shadow-sm"
          >
            <FileText size={14} className="text-sky-600 dark:text-sky-400" />
            Resume
          </a>
          <a
            href="https://wa.me/919973473449?text=Hello%20Mr.%20Santosh%20Dubey,%20I%20visited%20your%20executive%20portfolio."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 transition-all duration-200 shadow-md shadow-sky-500/25"
          >
            <Phone size={14} />
            Quick Connect
          </a>
        </div>

        {/* Mobile menu and mobile theme toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
          >
            {theme === 'dark' ? (
              <Sun size={18} className="text-amber-400" />
            ) : (
              <Moon size={18} className="text-sky-600" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-[#0a101f]/95 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800 px-6 py-6 mt-3 space-y-4 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-semibold text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 py-2 border-b border-slate-100 dark:border-slate-800/50"
              >
                <span>{link.name}</span>
                <ChevronRight size={16} className="text-slate-400 dark:text-slate-500" />
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                toggleTheme();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700"
            >
              {theme === 'dark' ? (
                <>
                  <Sun size={16} className="text-amber-400" />
                  Switch to Light Theme
                </>
              ) : (
                <>
                  <Moon size={16} className="text-sky-600" />
                  Switch to Dark Theme
                </>
              )}
            </button>
            <a
              href="/Santosh_Kumar_Dubey_Resume.pdf"
              download="Santosh_Kumar_Dubey_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
            >
              <FileText size={16} className="text-sky-600 dark:text-sky-400" />
              Download Resume (PDF)
            </a>
            <a
              href="https://wa.me/919973473449?text=Hello%20Mr.%20Santosh%20Dubey,%20I%20visited%20your%20executive%20portfolio."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-cyan-500"
            >
              <Phone size={16} />
              WhatsApp Message (+91 9973473449)
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
