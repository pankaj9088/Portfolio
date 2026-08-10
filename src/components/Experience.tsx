import React from 'react';
import { Compass, Calendar, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Growth Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Development <span className="text-cyan-400">Journey</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A milestone-based overview of my self-driven software development journey, technical projects, and continuous growth across programming, system design, and full-stack application development.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-slate-800 transform -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {portfolioData.journey.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.year}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Center Node Marker */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#0d1424] border-2 border-cyan-400 flex items-center justify-center text-cyan-300 shadow-lg shadow-cyan-500/30 z-10 hidden sm:flex">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  </div>

                  {/* Year Tag Column */}
                  <div className={`w-full sm:w-1/2 px-4 mb-3 sm:mb-0 ${isEven ? 'sm:text-right' : 'sm:text-left'}`}>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-sm font-bold font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.year}
                    </span>
                  </div>

                  {/* Content Card Column */}
                  <div className="w-full sm:w-1/2 px-4">
                    <div className="glass-panel rounded-2xl p-6 space-y-4 hover:border-slate-700 transition-all duration-300 group">
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="pt-2 border-t border-slate-800/80 space-y-2">
                        {item.highlights.map((hl, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
