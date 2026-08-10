import React from 'react';
import { User, GraduationCap, Code2, Cpu, CheckCircle2, Terminal, Flame, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-cyan-400" />,
      title: 'B.Tech Student (ECE)',
      description: 'Student at Academy of Technology (MAKAUT) with strong analytical foundations.'
    },
    {
      icon: <Code2 className="w-5 h-5 text-blue-400" />,
      title: 'Software Developer',
      description: 'Proficient in building end-to-end applications using React, Node.js, Express, and MongoDB.'
    },
    {
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      title: 'Core CS & Problem Solving',
      description: 'Strong foundation in DSA, OOP, DBMS, Computer Networks, and Operating Systems.'
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-purple-400" />,
      title: 'Clean Code Focus',
      description: 'Dedicated to writing maintainable, well-structured, and modular code for scalable apps.'
    }
  ];

  const technologies = [
    'React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 
    'JavaScript (ES6+)', 'Java', 'Python', 'Tailwind CSS', 'Socket.IO'
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Passionate Engineering Student & <span className="text-cyan-400">Software Developer</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Bridging electronic engineering analytical problem solving with modern software engineering.
          </p>
        </div>

        {/* About Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Side: Story & Tech Badges */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am <span className="text-white font-semibold">{portfolioData.personal.name}</span>, a <span className="text-cyan-300 font-medium">Software Developer</span> with a strong interest in building practical, scalable, and user-focused software applications. I specialize in <span className="text-slate-100 font-medium">Java, Python, and JavaScript</span>, along with modern technologies such as <span className="text-slate-100 font-medium">React, Node.js, Express.js, MongoDB, and MySQL</span>.
              </p>
              
              <p>
                My experience includes developing real-time communication platforms, e-commerce applications, authentication systems, and intelligent web applications. I enjoy turning ideas into reliable software solutions while focusing on <span className="text-slate-100 font-medium">problem solving, clean architecture, maintainable code, and continuous learning</span>.
              </p>

              <p>
                I am passionate about exploring new technologies and creating software that solves real-world problems and delivers a smooth user experience.
              </p>
            </div>

            {/* Core Tech Pills */}
            <div className="pt-4 border-t border-slate-800/80 space-y-3">
              <span className="text-xs font-semibold uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-cyan-400" />
                Primary Technical Toolkit:
              </span>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-slate-900/90 text-slate-200 border border-slate-800 text-xs font-medium hover:border-cyan-500/40 hover:text-cyan-300 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: 4 Core Pillars Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-5 flex flex-col justify-between space-y-3 glass-card-hover group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
