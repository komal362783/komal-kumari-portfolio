import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, BarChart2, Database, Table, Code2 } from 'lucide-react';
import { SANDBOX_DATA, SQL_EXAMPLES } from '../../data/sandboxData';
import type { SqlQueryExample } from '../../data/sandboxData';
import { ScrollReveal } from '../ui/ScrollReveal';

export const DataSandbox: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'chart' | 'sql'>('chart');
  const [selectedDatasetIndex, setSelectedDatasetIndex] = useState(0);
  const [selectedMetric, setSelectedMetric] = useState<'sales' | 'profit' | 'sentimentScore'>('sales');
  const [selectedSqlExample, setSelectedSqlExample] = useState<SqlQueryExample>(SQL_EXAMPLES[0]);

  const dataset = SANDBOX_DATA[selectedDatasetIndex];
  const maxVal = Math.max(...dataset.dataPoints.map((d) => d[selectedMetric]));

  const handleRunQuery = (ex: SqlQueryExample) => {
    setSelectedSqlExample(ex);
  };

  return (
    <section id="sandbox" className="py-20 lg:py-28 relative bg-[#090D16] border-y border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with ScrollReveal */}
        <ScrollReveal direction="up" distance={25} className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 text-xs font-mono font-semibold mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>INTERACTIVE LAB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Live Analytics & Query Sandbox
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
            Interactive simulator showcasing practical SQL query execution patterns and dynamic visual chart rendering.
          </p>
        </ScrollReveal>

        {/* Tab Switcher */}
        <ScrollReveal direction="up" delay={0.1} distance={20} className="mb-8">
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#0E1422] border border-white/[0.09] w-fit shadow-md">
            <button
              onClick={() => setActiveTab('chart')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                activeTab === 'chart'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <BarChart2 className="w-4 h-4 text-emerald-400" />
              <span>Interactive Chart Visualizer</span>
            </button>

            <button
              onClick={() => setActiveTab('sql')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                activeTab === 'sql'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Database className="w-4 h-4 text-cyan-400" />
              <span>SQL Query Playground</span>
            </button>
          </div>
        </ScrollReveal>

        {/* Tab 1: Interactive Chart Visualizer */}
        {activeTab === 'chart' && (
          <ScrollReveal direction="up" delay={0.15} distance={30}>
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.09] bg-[#0E1422]/95 shadow-xl">
              {/* Top Controls */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-300 mr-1 font-semibold">Dataset:</span>
                  {SANDBOX_DATA.map((ds, idx) => (
                    <button
                      key={ds.id}
                      onClick={() => setSelectedDatasetIndex(idx)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                        selectedDatasetIndex === idx
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold'
                          : 'bg-[#141C30] text-slate-300 border border-slate-700 hover:text-white'
                      }`}
                    >
                      {ds.name}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-slate-300 font-semibold">Metric:</span>
                  {(['sales', 'profit', 'sentimentScore'] as const).map((metric) => (
                    <button
                      key={metric}
                      onClick={() => setSelectedMetric(metric)}
                      className={`px-2.5 py-1 rounded-md text-xs font-mono capitalize transition-all cursor-pointer font-semibold ${
                        selectedMetric === metric
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                          : 'bg-[#090D16] text-slate-300 border border-slate-700'
                      }`}
                    >
                      {metric === 'sentimentScore' ? 'Sentiment (0-100)' : metric}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom SVG Data Visualization Canvas */}
              <div className="space-y-4">
                <div className="text-xs font-mono text-slate-300 flex items-center justify-between font-semibold">
                  <span>{dataset.description}</span>
                  <span className="text-emerald-400">Normalized Scale</span>
                </div>

                <div className="space-y-3.5 pt-2">
                  {dataset.dataPoints.map((item) => {
                    const val = item[selectedMetric];
                    const percentage = Math.round((val / maxVal) * 100);

                    return (
                      <div key={item.category} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-white font-bold">{item.category}</span>
                          <span className="text-emerald-300 font-bold">
                            {selectedMetric === 'sales' || selectedMetric === 'profit'
                              ? `$${val.toLocaleString()}`
                              : `${val} / 100`}
                          </span>
                        </div>

                        <div className="w-full h-3 rounded-full bg-[#090D16] border border-slate-700 overflow-hidden p-0.5">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${percentage}%` }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            className={`h-full rounded-full ${
                              selectedMetric === 'profit'
                                ? 'bg-gradient-to-r from-emerald-400 to-teal-300'
                                : selectedMetric === 'sentimentScore'
                                ? 'bg-gradient-to-r from-cyan-400 to-emerald-300'
                                : 'bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400'
                            }`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Data Summary Bar */}
                <div className="mt-8 pt-4 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-[#090D16] border border-slate-700 shadow-sm">
                    <div className="text-[10px] font-mono text-slate-300 uppercase font-semibold">Categories</div>
                    <div className="text-base font-extrabold text-white font-mono mt-0.5">
                      {dataset.dataPoints.length}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#090D16] border border-slate-700 shadow-sm">
                    <div className="text-[10px] font-mono text-slate-300 uppercase font-semibold">Total Sales</div>
                    <div className="text-base font-extrabold text-cyan-300 font-mono mt-0.5">
                      ${dataset.dataPoints.reduce((acc, d) => acc + d.sales, 0).toLocaleString()}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#090D16] border border-slate-700 shadow-sm">
                    <div className="text-[10px] font-mono text-slate-300 uppercase font-semibold">Total Profit</div>
                    <div className="text-base font-extrabold text-emerald-300 font-mono mt-0.5">
                      ${dataset.dataPoints.reduce((acc, d) => acc + d.profit, 0).toLocaleString()}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#090D16] border border-slate-700 shadow-sm">
                    <div className="text-[10px] font-mono text-slate-300 uppercase font-semibold">Avg Sentiment</div>
                    <div className="text-base font-extrabold text-teal-300 font-mono mt-0.5">
                      {Math.round(
                        dataset.dataPoints.reduce((acc, d) => acc + d.sentimentScore, 0) /
                          dataset.dataPoints.length
                      )}
                      %
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Tab 2: SQL Query Playground */}
        {activeTab === 'sql' && (
          <ScrollReveal direction="up" delay={0.15} distance={30}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left: Query Presets Selector */}
              <div className="lg:col-span-4 space-y-2.5">
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-300 font-bold mb-2">
                  Foundational Query Clauses:
                </div>
                {SQL_EXAMPLES.map((ex) => (
                  <button
                    key={ex.id}
                    onClick={() => handleRunQuery(ex)}
                    className={`w-full p-3.5 rounded-xl text-left transition-all border cursor-pointer shadow-sm ${
                      selectedSqlExample.id === ex.id
                        ? 'bg-[#141C30] border-emerald-500/60 shadow-md shadow-emerald-500/10'
                        : 'bg-[#0E1422] border-white/[0.08] hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-extrabold font-mono text-white">
                        {ex.label}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/35 font-bold">
                        {ex.concept}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 line-clamp-2">
                      {ex.explanation}
                    </p>
                  </button>
                ))}
              </div>

              {/* Right: Code Terminal & Live Result Table */}
              <div className="lg:col-span-8 space-y-4">
                {/* SQL Code Box */}
                <div className="rounded-2xl bg-[#090D16] border border-slate-700 p-4 shadow-xl">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs font-mono">
                    <div className="flex items-center gap-2 text-white font-medium">
                      <Code2 className="w-4 h-4 text-emerald-400" />
                      <span>query_executor.sql</span>
                    </div>
                    <span className="text-emerald-300 text-[11px] flex items-center gap-1 font-mono font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>PostgreSQL Dialect</span>
                    </span>
                  </div>

                  <pre className="text-xs font-mono text-emerald-200 leading-relaxed p-3 bg-[#060910] rounded-xl border border-slate-900 overflow-x-auto">
                    <code>{selectedSqlExample.query}</code>
                  </pre>
                </div>

                {/* Live Simulated Result Table */}
                <div className="glass-card rounded-2xl p-4 sm:p-5 border border-white/[0.09] bg-[#0E1422]/95 shadow-xl">
                  <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-300">
                    <div className="flex items-center gap-2 font-bold text-white">
                      <Table className="w-4 h-4 text-emerald-400" />
                      <span>Result Set ({selectedSqlExample.resultRows.length} rows returned)</span>
                    </div>
                    <span className="text-[11px] text-emerald-400 font-mono font-semibold">Simulated result (demo)</span>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-slate-700">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-[#141C30] text-white border-b border-slate-700">
                        <tr>
                          {selectedSqlExample.resultHeaders.map((header) => (
                            <th key={header} className="px-3.5 py-2.5 font-bold uppercase tracking-wider text-emerald-300 text-[11px]">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800 bg-[#090D16]">
                        {selectedSqlExample.resultRows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-800/40 transition-colors">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="px-3.5 py-2 text-slate-200 whitespace-nowrap">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

      </div>
    </section>
  );
};
