import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#070b14] relative z-10 py-10 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Brand & Name */}
          <div className="flex flex-col items-center md:items-start space-y-1 text-center md:text-left">
            <span className="text-sm font-bold text-white tracking-tight">
              {portfolioData.personal.name}
            </span>
            <p className="text-slate-400 text-xs">
              Software Developer • B.Tech ECE Student
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              aria-label="GitHub Profile"
              id="footer-github-link"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
              aria-label="LinkedIn Profile"
              id="footer-linkedin-link"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400 border border-slate-800 transition-colors"
              aria-label="Send Email"
              id="footer-email-link"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            id="footer-top-btn"
          >
            <ArrowUp className="w-4 h-4 text-cyan-400" />
            <span className="hidden sm:inline">Back to Top</span>
          </button>

        </div>

        {/* Copyright & Tech Stack tag */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-slate-400">
            © 2026 {portfolioData.personal.name}. All rights reserved.
          </p>
          <p className="text-slate-400 flex items-center gap-1">
            Built with React / Next.js and Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
};
