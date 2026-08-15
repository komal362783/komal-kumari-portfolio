import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Mail, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface NavbarProps {
  onCopyEmail: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCopyEmail }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [copied, setCopied] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Pipeline', href: '#pipeline' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Sandbox', href: '#sandbox' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy
      const sections = navLinks.map((l) => l.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    onCopyEmail();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#090D16]/90 backdrop-blur-xl border-b border-white/[0.09] shadow-2xl shadow-black/60'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 transition-colors shadow-sm">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 font-bold tracking-tight text-white text-sm">
                <span>KOMAL</span>
                <span className="text-emerald-400 font-mono text-xs">.DATA</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">Data Analytics Portfolio</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#0E1422]/90 border border-white/[0.08] backdrop-blur-md shadow-lg">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/40"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Quick Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={handleCopy}
              title="Copy Email Address"
              className="px-3 py-1.5 text-xs font-mono rounded-lg border border-slate-700 bg-[#0E1422] text-slate-200 hover:text-white hover:border-emerald-500/50 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-emerald-400" />}
              <span>{copied ? 'Copied' : 'Copy Email'}</span>
            </button>

            <a
              href="#contact"
              className="px-4 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 transition-all shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/35 active:scale-95 cursor-pointer"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#0E1422] border border-white/[0.08] text-slate-200 hover:text-white cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-white/[0.08] bg-[#090D16]/98 backdrop-blur-2xl px-6 py-5 overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/40'
                        : 'text-slate-200 hover:bg-white/[0.05]'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-slate-800 flex flex-col gap-2">
                <button
                  onClick={(e) => {
                    handleCopy(e);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2.5 px-4 text-xs font-mono text-center rounded-xl bg-[#0E1422] border border-slate-700 text-slate-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copy {PERSONAL_INFO.email}</span>
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 px-4 text-xs font-bold text-center rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
