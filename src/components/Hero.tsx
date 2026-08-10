import React, { useState } from 'react';
import { ArrowRight, FileText, Github, Linkedin, Terminal, Sparkles, Code, Server, Database, CheckCircle, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

interface HeroProps {
  onOpenResumeModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [activeCodeTab, setActiveCodeTab] = useState<'stack' | 'about' | 'config'>('stack');
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    const codeSnippet = `const developer = {
  name: "${portfolioData.personal.name}",
  role: "${portfolioData.personal.role}",
  status: "8th Semester B.Tech ECE Student",
  location: "West Bengal, India",
  primaryStack: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL"],
  interests: ["Software Architecture", "REST APIs", "WebSockets", "DSA"]
};`;
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-cyan-300 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Software Engineer & Web Dev Roles</span>
            </div>

            {/* Greeting & Headline */}
            <div className="space-y-2">
              <p className="text-base sm:text-lg font-medium text-slate-300 tracking-wide">
                Hi, I'm <span className="text-slate-100 font-semibold">{portfolioData.personal.name}</span> 👋
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Software <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                  Developer
                </span>
              </h1>
            </div>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              I build modern, responsive and scalable web applications using React, Node.js, Express, MongoDB and modern web technologies.
            </p>

            {/* Education Badge */}
            <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-400">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">
                🎓 B.Tech Electronics & Communication Engineering
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">
                🏫 Academy of Technology
              </span>
            </div>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 active:scale-[0.98] group cursor-pointer"
                id="hero-view-projects-btn"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all duration-200 shadow-sm cursor-pointer"
                id="hero-download-resume-btn"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Let's Connect Social Row */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-4 w-full">
              <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Let's Connect:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-medium transition-colors"
                  aria-label="GitHub Profile"
                  id="hero-github-link"
                >
                  <Github className="w-4 h-4 text-slate-300" />
                  <span>GitHub</span>
                </a>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 text-xs font-medium transition-colors"
                  aria-label="LinkedIn Profile"
                  id="hero-linkedin-link"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Animated Developer Terminal Visual */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Decorative Glow frame */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/30 to-blue-600/30 blur-xl opacity-75 animate-pulse-slow pointer-events-none" />

              {/* Developer Terminal Box */}
              <div className="relative rounded-2xl bg-[#0d1424] border border-slate-800/90 shadow-2xl overflow-hidden glass-panel">
                
                {/* Terminal Header */}
                <div className="px-4 py-3 bg-[#0a0f1d] border-b border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      developer.config.ts
                    </span>
                  </div>

                  {/* Terminal Tabs */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setActiveCodeTab('stack')}
                      className={`px-2 py-1 text-[11px] font-mono rounded cursor-pointer ${
                        activeCodeTab === 'stack' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Stack
                    </button>
                    <button
                      onClick={() => setActiveCodeTab('about')}
                      className={`px-2 py-1 text-[11px] font-mono rounded cursor-pointer ${
                        activeCodeTab === 'about' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Bio
                    </button>
                    <button
                      onClick={handleCopyCode}
                      className="p-1 rounded text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                      title="Copy Snippet"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Code Window Body */}
                <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-slate-300 bg-[#0d1424]/90">
                  {activeCodeTab === 'stack' ? (
                    <div className="space-y-2">
                      <p className="text-slate-500">// Software Developer Profile</p>
                      <p><span className="text-purple-400">export const</span> <span className="text-cyan-300">developer</span> = &#123;</p>
                      <p className="pl-4"><span className="text-sky-300">name</span>: <span className="text-amber-300">"{portfolioData.personal.name}"</span>,</p>
                      <p className="pl-4"><span className="text-sky-300">role</span>: <span className="text-amber-300">"{portfolioData.personal.role}"</span>,</p>
                      <p className="pl-4"><span className="text-sky-300">coreTech</span>: [</p>
                      <p className="pl-8 text-emerald-400">"React.js", "Node.js", "Express.js",</p>
                      <p className="pl-8 text-emerald-400">"MongoDB", "MySQL", "Socket.IO",</p>
                      <p className="pl-8 text-emerald-400">"JavaScript", "Java", "Python"</p>
                      <p className="pl-4">],</p>
                      <p className="pl-4"><span className="text-sky-300">status</span>: <span className="text-emerald-300">"Ready for Opportunities"</span></p>
                      <p>&#125;;</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <p className="text-slate-500">// Academic & Engineering Focus</p>
                      <p><span className="text-purple-400">interface</span> <span className="text-cyan-300">EngineerProfile</span> &#123;</p>
                      <p className="pl-4"><span className="text-sky-300">university</span>: <span className="text-amber-300">"MAKAUT (Academy of Technology)"</span>;</p>
                      <p className="pl-4"><span className="text-sky-300">strengths</span>: <span className="text-amber-300">"Problem Solving & Clean Architecture"</span>;</p>
                      <p className="pl-4"><span className="text-sky-300">coreCS</span>: <span className="text-amber-300">["DSA", "OOP", "DBMS", "OS", "CN"]</span>;</p>
                      <p>&#125;</p>
                    </div>
                  )}
                </div>

                {/* Live Tech Badges Footer */}
                <div className="px-4 py-3 bg-[#080d18] border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[11px] text-slate-400 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                      <CheckCircle className="w-3.5 h-3.5" />
                      Build Status: Green
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400 font-mono">
                    <span className="flex items-center gap-1"><Code className="w-3 h-3 text-cyan-400" /> React</span>
                    <span className="flex items-center gap-1"><Server className="w-3 h-3 text-green-400" /> Node</span>
                    <span className="flex items-center gap-1"><Database className="w-3 h-3 text-emerald-400" /> Mongo</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
