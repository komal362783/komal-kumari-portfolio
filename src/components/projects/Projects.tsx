import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2 } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/portfolioData';
import type { Project } from '../../types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterOptions = [
    'All',
    'Power BI',
    'Python',
    'SQL',
    'EDA',
    'NLP',
    'Visualization',
  ];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.filterTags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 lg:py-28 relative bg-[#090D16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with ScrollReveal */}
        <ScrollReveal direction="up" distance={30} className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 text-xs font-mono font-semibold mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>CASE STUDIES & REPOSITORIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Analytics Projects
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
            Real data workflows, exploratory analyses, sentiment mining, and business intelligence dashboards with reproducible codebases.
          </p>
        </ScrollReveal>

        {/* Animated Filter Bar */}
        <ScrollReveal direction="up" delay={0.1} distance={20} className="mb-10">
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#0E1422] border border-white/[0.08] w-fit shadow-md">
            {filterOptions.map((filter) => {
              const isSelected = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative px-4 py-2 text-xs font-mono rounded-xl transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'text-emerald-300 font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeFilterBg"
                      className="absolute inset-0 bg-emerald-500/20 border border-emerald-500/40 rounded-xl"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{filter}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                onOpenModal={(proj) => setSelectedProject(proj)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Case-Study Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
