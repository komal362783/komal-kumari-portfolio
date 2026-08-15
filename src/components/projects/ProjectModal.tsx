import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Layers, AlertCircle, Sparkles, ArrowUpRight } from 'lucide-react';
import type { Project } from '../../types';
import { Badge } from '../ui/Badge';
import { GithubIcon } from '../ui/Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0E1422] border border-emerald-500/40 rounded-2xl shadow-2xl shadow-black/90 z-10 p-6 sm:p-8 custom-scrollbar"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-[#141C30] border border-slate-700 text-slate-300 hover:text-white hover:border-emerald-400 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="pr-12 mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge variant="emerald" size="sm">
                {project.category}
              </Badge>
              {project.isSyntheticData && (
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/35 text-amber-300 flex items-center gap-1 font-semibold">
                  <AlertCircle className="w-3 h-3" />
                  <span>Synthetic Dataset (Labeled)</span>
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-200 mt-2 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Action Button Strip */}
          <div className="flex items-center gap-3 pb-6 mb-6 border-b border-slate-800">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-500/20"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Source on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Case Study Content Grid */}
          <div className="space-y-6">
            
            {/* Problem Statement */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#090D16] border border-slate-700">
              <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Problem Statement</span>
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed font-normal">
                {project.caseStudy.problem}
              </p>
            </div>

            {/* Structured Approach / Workflow */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-400" />
                <span>Technical Approach & Pipeline Stages</span>
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {project.caseStudy.approach.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-[#141C30]/80 border border-white/[0.06] text-xs sm:text-sm text-slate-200"
                  >
                    <span className="text-emerald-400 font-mono font-bold text-xs flex-shrink-0 mt-0.5">
                      0{idx + 1}.
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Analysis Highlights */}
            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#10192A] to-[#0A101C] border border-emerald-500/30">
              <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-300 font-bold mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Key Analytical Findings & Capabilities</span>
              </h3>
              <div className="space-y-2">
                {project.caseStudy.analysisHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Insights & Recommendations */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
                Actionable Insights:
              </h3>
              <div className="space-y-2">
                {project.caseStudy.insights.map((insight, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-[#090D16] border border-slate-700 text-xs text-emerald-200 font-mono"
                  >
                    💡 {insight}
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Applied */}
            <div className="pt-4 border-t border-slate-800">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-3">
                Technologies & Libraries Applied:
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-[#141C30] border border-slate-700 text-slate-200 font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
