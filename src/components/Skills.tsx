import React, { useState } from 'react';
import { Cpu, Code, Layout, Server, Database, Lock, Wrench, BookOpen, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming': return <Code className="w-4 h-4 text-cyan-400" />;
      case 'frontend': return <Layout className="w-4 h-4 text-blue-400" />;
      case 'backend': return <Server className="w-4 h-4 text-emerald-400" />;
      case 'database': return <Database className="w-4 h-4 text-amber-400" />;
      case 'auth-realtime': return <Lock className="w-4 h-4 text-purple-400" />;
      case 'tools': return <Wrench className="w-4 h-4 text-sky-400" />;
      case 'cs-core': return <BookOpen className="w-4 h-4 text-rose-400" />;
      default: return <Cpu className="w-4 h-4 text-cyan-400" />;
    }
  };

  const categories = portfolioData.skills;

  const filteredCategories = selectedCategory === 'all' 
    ? categories 
    : categories.filter(c => c.id === selectedCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & <span className="text-cyan-400">Tech Stack</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A comprehensive overview of programming languages, full-stack frameworks, databases, and core computer science concepts.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 font-bold'
                : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            All Skills
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Categories & Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="glass-panel rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-all duration-300 group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                      {getCategoryIcon(cat.id)}
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono font-medium text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                    {cat.skills.length} items
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Badges List */}
                <div className="space-y-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800/80 flex items-center justify-between hover:bg-slate-800/60 hover:border-slate-700 transition-all duration-200"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span className="text-xs font-semibold text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      
                      {skill.tag && (
                        <span className="text-[10px] font-medium text-slate-400 px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700/60">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
