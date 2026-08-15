import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitCommit, ArrowRight, CheckCircle2, Code2, Wrench, Sparkles, Database, Filter, BarChart, Lightbulb, Compass } from 'lucide-react';
import { PIPELINE_STEPS } from '../../data/portfolioData';
import { ScrollReveal } from '../ui/ScrollReveal';

export const DataPipeline: React.FC = () => {
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);
  const activeStep = PIPELINE_STEPS[selectedStepIndex];

  const stepIcons = [Database, Filter, BarChart, Sparkles, Lightbulb, Compass];

  return (
    <section id="pipeline" className="py-20 lg:py-28 relative bg-[#0B101C] border-y border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={25} className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 text-xs font-mono font-semibold mb-3">
            <GitCommit className="w-3.5 h-3.5" />
            <span>METHODOLOGY & WORKFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Work With Data
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
            A disciplined 6-stage analytical pipeline converting raw unstructured inputs into confident business decisions.
          </p>
        </ScrollReveal>

        {/* Pipeline Stepper Navigation (Interactive) */}
        <ScrollReveal direction="up" delay={0.1} distance={25} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {PIPELINE_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx];
            const isSelected = selectedStepIndex === idx;

            return (
              <button
                key={step.id}
                onClick={() => setSelectedStepIndex(idx)}
                className={`relative flex flex-col items-start p-4 rounded-xl text-left transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#141C30] border-emerald-500/60 shadow-lg shadow-emerald-500/10 scale-[1.02]'
                    : 'bg-[#0E1422] border-white/[0.08] hover:border-slate-600 hover:bg-[#141C30]'
                } border group cursor-pointer`}
              >
                {/* Step number badge */}
                <div className="flex items-center justify-between w-full mb-3">
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                    isSelected
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'bg-white/[0.06] text-slate-300'
                  }`}>
                    STAGE 0{step.stepNumber}
                  </span>

                  <Icon className={`w-4 h-4 transition-colors ${
                    isSelected ? 'text-emerald-400' : 'text-slate-400 group-hover:text-white'
                  }`} />
                </div>

                <div className="text-sm font-bold text-white mb-0.5 tracking-tight">
                  {step.title}
                </div>
                <div className="text-[11px] text-slate-300 font-mono line-clamp-1">
                  {step.tagline}
                </div>

                {isSelected && (
                  <motion.div
                    layoutId="pipelineActiveUnderline"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-b-xl"
                  />
                )}
              </button>
            );
          })}
        </ScrollReveal>

        {/* Step Deep-Dive Inspector Panel */}
        <ScrollReveal direction="up" delay={0.2} distance={30}>
          <div className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10 border border-emerald-500/30 relative overflow-hidden bg-[#0E1422]/95 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Left Details */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300">
                      STAGE 0{activeStep.stepNumber} OF 06
                    </span>
                    <span className="text-xs font-mono text-cyan-300 font-medium">
                      {activeStep.tagline}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                      {activeStep.title} Phase
                    </h3>
                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                      {activeStep.description}
                    </p>
                  </div>

                  {/* Key Techniques Applied */}
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-emerald-300 font-bold mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Techniques & Best Practices</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeStep.techniques.map((tech, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 p-2.5 rounded-lg bg-[#090D16] border border-white/[0.08] text-xs font-semibold text-white shadow-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Primary Tools */}
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-bold mb-2 flex items-center gap-2">
                      <Wrench className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Tools Leveraged</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeStep.toolsUsed.map((tool) => (
                        <span
                          key={tool}
                          className="text-xs font-mono px-3 py-1 rounded-lg bg-[#141C30] border border-cyan-500/30 text-cyan-200 font-semibold"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Details: Interactive Code/Logic Inspector */}
                <div className="lg:col-span-5">
                  <div className="rounded-xl bg-[#090D16] border border-slate-700 p-4 shadow-xl">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs font-mono text-slate-300">
                      <div className="flex items-center gap-2 font-medium text-white">
                        <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{activeStep.id}_logic.py</span>
                      </div>
                      <span className="text-[10px] text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/40 font-mono font-bold">
                        SYNTAX VALIDATED
                      </span>
                    </div>

                    <pre className="text-xs font-mono text-emerald-200 leading-relaxed overflow-x-auto p-3 bg-[#060910] rounded-lg border border-slate-900">
                      <code>{activeStep.sampleLogic}</code>
                    </pre>

                    <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                      <button
                        onClick={() => setSelectedStepIndex((prev) => (prev > 0 ? prev - 1 : PIPELINE_STEPS.length - 1))}
                        className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                      >
                        ← Previous Stage
                      </button>
                      <button
                        onClick={() => setSelectedStepIndex((prev) => (prev < PIPELINE_STEPS.length - 1 ? prev + 1 : 0))}
                        className="text-emerald-300 hover:text-emerald-200 transition-colors flex items-center gap-1 font-bold cursor-pointer"
                      >
                        <span>Next Stage</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
