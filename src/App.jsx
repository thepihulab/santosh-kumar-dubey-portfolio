import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import TerritoryCoverage from './components/TerritoryCoverage';
import Competencies from './components/Competencies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('skd-portfolio-theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem('skd-portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070b14] text-slate-800 dark:text-slate-100 flex flex-col selection:bg-sky-500/30 selection:text-sky-800 dark:selection:text-sky-200 transition-colors duration-300">
      {/* Fixed Executive Navigation with Theme Toggle */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onDownloadResume={() => setResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onDownloadResume={() => setResumeOpen(true)} />
        <About />
        <Achievements />
        <Experience />
        <TerritoryCoverage />
        <Competencies />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Complete Executive Resume Modal with Print/PDF export */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        theme={theme}
      />
    </div>
  );
}
