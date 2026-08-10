import React from 'react';
import { GraduationCap, Building2, BookOpen, Calendar, CheckCircle2, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Education: React.FC = () => {
  const edu = portfolioData.education;

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education & <span className="text-cyan-400">Academic Standing</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Formal engineering degree program combining hardware signal fundamentals with core computer science software coursework.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden border-l-4 border-l-cyan-400">
            
            {/* Header Info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider">
                  Degree Program
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {edu.degree}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 pt-1">
                  <span className="flex items-center gap-1.5 font-medium text-slate-200">
                    <Building2 className="w-4 h-4 text-cyan-400" />
                    {edu.institution}
                  </span>
                  <span>•</span>
                  <span className="text-slate-400">
                    {edu.university}
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-start sm:items-end space-y-1 shrink-0">
                <span className="text-xs text-slate-400 font-mono">
                  {edu.duration}
                </span>
              </div>
            </div>

            {/* Academic Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                Engineering Coursework & Focus Areas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {edu.highlights.map((hl, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 leading-relaxed">{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Computer Science Curriculum Tags */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-slate-400 mr-2">Key Modules:</span>
              {['Data Structures', 'Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks', 'OOP'].map(tag => (
                <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-medium text-slate-300">
                  {tag}
                </span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
