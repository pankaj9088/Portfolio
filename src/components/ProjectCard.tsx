import React from 'react';
import { Github, ExternalLink, Eye, Star, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  return (
    <div 
      className={`glass-panel rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-slate-700 hover:shadow-xl hover:shadow-cyan-500/5 group ${
        project.featured ? 'border-cyan-500/40 ring-1 ring-cyan-500/20' : ''
      }`}
    >
      <div>
        {/* Project Image Banner */}
        <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-transparent to-transparent opacity-90" />

          {/* Badges Overlay */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-[11px] font-semibold text-slate-300 border border-slate-700/80">
              {project.category}
            </span>

            {project.featured && (
              <span className="px-2.5 py-1 rounded-md bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-[11px] flex items-center gap-1 shadow-md shadow-amber-500/20">
                <Star className="w-3 h-3 fill-slate-950" />
                Featured Project
              </span>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
          <div className="space-y-1.5">
            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Technologies Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800 text-[11px] font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Buttons Footer */}
      <div className="p-6 pt-0 border-t border-slate-800/60 mt-4 flex flex-wrap items-center justify-between gap-2">
        <button
          onClick={() => onViewDetails(project)}
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 hover:text-cyan-200 border border-slate-800 hover:border-slate-700 text-xs font-semibold transition-all cursor-pointer"
          id={`project-details-btn-${project.id}`}
        >
          <Eye className="w-4 h-4" />
          <span>View Details</span>
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              title="GitHub Repo"
              aria-label="GitHub Repo"
              id={`project-github-link-${project.id}`}
            >
              <Github className="w-4 h-4" />
            </a>
          ) : (
            <span 
              className="p-2.5 rounded-xl bg-slate-900/50 text-slate-600 border border-slate-800/50 cursor-not-allowed"
              title="GitHub link configurable"
            >
              <Github className="w-4 h-4" />
            </span>
          )}

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 transition-colors"
              title="Live Demo"
              aria-label="Live Demo"
              id={`project-live-link-${project.id}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <span 
              className="p-2.5 rounded-xl bg-slate-900/50 text-slate-600 border border-slate-800/50 cursor-not-allowed"
              title="Live Demo configurable"
            >
              <ExternalLink className="w-4 h-4 text-slate-600" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
