import React, { useState } from 'react';
import { X, Download, FileText, ExternalLink, Check, Copy, AlertCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.origin + portfolioData.personal.resumeUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#0d1424] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#090e1a] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Resume Overview
              </h3>
              <p className="text-xs text-slate-400">
                Pankaj Kumar Sah — Software Developer
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 text-slate-300 text-sm">
          
          {/* Summary Box */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300">
              Technical Profile Highlights
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span><strong>Education:</strong> B.Tech ECE, Academy of Technology (MAKAUT)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span><strong>Primary Stack:</strong> React.js, Node.js, Express.js, MongoDB, MySQL, JavaScript, Java, Python</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span><strong>Key Projects:</strong> ChatGo (Real-time WebSockets), QUICKMART (E-commerce), Smart Resume Analyzer</span>
              </li>
            </ul>
          </div>

          {/* Config Note for Pankaj */}
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-400 leading-relaxed">
              <span className="text-slate-200 font-medium">Editable Config:</span> You can place your actual PDF file in <code className="text-cyan-300 bg-slate-950 px-1.5 py-0.5 rounded">/public/resume-pankaj-kumar-sah.pdf</code> or update <code className="text-cyan-300 bg-slate-950 px-1.5 py-0.5 rounded">resumeUrl</code> in <code className="text-cyan-300 bg-slate-950 px-1.5 py-0.5 rounded">/src/data/portfolio.ts</code>.
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#090e1a] border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleCopyUrl}
            className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5 cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Link Copied!' : 'Copy Resume Link'}</span>
          </button>

          <a
            href={portfolioData.personal.resumeUrl}
            download="Pankaj_Kumar_Sah_Resume.pdf"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 text-xs font-bold flex items-center gap-2 shadow-md shadow-cyan-500/20 cursor-pointer"
            id="modal-download-pdf-btn"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume PDF</span>
          </a>
        </div>

      </div>
    </div>
  );
};
