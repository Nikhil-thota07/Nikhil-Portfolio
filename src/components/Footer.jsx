import React from 'react';
import { Linkedin, Github, Youtube, ArrowUp, Heart, Sparkles } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#05070c] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Roles */}
          <div className="text-center md:text-left space-y-1.5">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-mono font-extrabold text-lg text-white tracking-widest">
                NIKHIL THOTA
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            </div>
            <p className="text-xs text-slate-400 font-mono">
              CSE (AI & ML) Student | Python Developer | Aspiring AI Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalData.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-[#0077b5]/20 border border-white/[0.08] hover:border-[#0077b5]/40 text-slate-400 hover:text-cyan-300 flex items-center justify-center transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalData.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 text-slate-400 hover:text-white flex items-center justify-center transition-all"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalData.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Channel Just Nikhil Things"
              className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-red-500/20 border border-white/[0.08] hover:border-red-500/40 text-slate-400 hover:text-red-400 flex items-center justify-center transition-all"
            >
              <Youtube className="w-4 h-4" />
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-10 h-10 rounded-xl bg-white/[0.03] hover:bg-cyan-500/20 border border-white/[0.08] hover:border-cyan-500/40 text-slate-400 hover:text-cyan-300 flex items-center justify-center transition-all ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright notice */}
        <div className="mt-8 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© 2026 Nikhil Thota. Built with curiosity & code.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <span className="text-cyan-400">React</span>
            <span>&</span>
            <span className="text-indigo-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
