import React, { useState } from 'react';
import { X, Github, ExternalLink, Code2, CheckCircle2, Lightbulb, Shield, Cpu, Play, Terminal } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'preview'>('overview');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      
      {/* Modal Box */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0d1424] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#090e1a] border-b border-slate-800 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              {project.category}
            </span>
            <h3 className="text-lg font-bold text-white tracking-tight truncate max-w-md">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors cursor-pointer"
            aria-label="Close modal"
            id="modal-close-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="px-6 py-2 bg-[#0b101f] border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'overview' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Overview & Problem
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'features' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Key Features & Stack ({project.keyFeatures.length})
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'preview' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Interactive Mock Preview
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-300 text-sm leading-relaxed">
          
          {activeTab === 'overview' && (
            <div className="space-y-6">
              
              {/* Project Image Banner */}
              <div className="relative rounded-xl overflow-hidden border border-slate-800 h-56 sm:h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map(tech => (
                      <span key={tech} className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-medium text-cyan-300 border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Full Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  Project Overview
                </h4>
                <p className="text-slate-200 leading-relaxed text-sm sm:text-base">
                  {project.fullDescription}
                </p>
              </div>

              {/* Problem Solved */}
              {project.problemSolved && (
                <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-cyan-400" />
                    Problem Solved
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm">
                    {project.problemSolved}
                  </p>
                </div>
              )}

              {/* Engineering Takeaways */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-400" />
                  Key Lessons & Architectural Growth
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.learned.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-6">
              
              {/* Features List */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Core Capabilities & Workflow
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.keyFeatures.map((feature, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span className="text-xs font-medium text-slate-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack Grid */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-slate-900 text-cyan-300 border border-slate-700 text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          )}

          {activeTab === 'preview' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono font-semibold text-white">{project.title} Simulated View</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono">Live Session Ready</span>
                </div>

                {/* Mock UI Interactive Preview Box */}
                <div className="p-6 bg-[#080d1a] rounded-lg border border-slate-800 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400">
                    <Play className="w-6 h-6 ml-0.5" />
                  </div>
                  <h5 className="text-sm font-bold text-white">{project.title} Sandbox</h5>
                  <p className="text-xs text-slate-400 max-w-md mx-auto">
                    {project.shortDescription}
                  </p>
                  
                  <div className="pt-2 flex justify-center gap-3">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 text-xs font-bold hover:bg-cyan-400 inline-flex items-center gap-1.5"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Launch Live Application
                      </a>
                    ) : (
                      <span className="px-4 py-2 rounded-lg bg-slate-800 text-slate-400 text-xs font-medium border border-slate-700">
                        Live Demo URL Configurable in Data File
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer with Actions */}
        <div className="px-6 py-4 bg-[#090e1a] border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Category:</span>
            <span className="font-semibold text-slate-200">{project.category}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 border border-slate-700 transition-colors"
                id="modal-github-link"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            ) : (
              <span className="px-3 py-2 rounded-xl bg-slate-900 text-slate-500 text-xs border border-slate-800">
                GitHub Repository Link Pending
              </span>
            )}

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-bold flex items-center gap-2 shadow-md shadow-cyan-500/20 transition-all"
                id="modal-live-link"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            ) : (
              <button
                disabled
                className="px-4 py-2 rounded-xl bg-slate-800/60 text-slate-500 text-xs font-medium border border-slate-800 cursor-not-allowed"
              >
                Demo Configurable
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
