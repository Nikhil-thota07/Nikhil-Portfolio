import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Building2, 
  Target,
  Rocket
} from 'lucide-react';
import { careerVisionData } from '../data/portfolioData';

export default function CareerVision() {
  const { title, statement, targetAspiration, roadmap, clarification } = careerVisionData;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-cyan-600/10 via-indigo-600/10 to-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Target className="w-3.5 h-3.5 text-cyan-400" />
            <span>Future Direction & Long-term Ambition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Narrative Vision Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 max-w-4xl mx-auto mb-16 text-center space-y-6">
          <p className="text-slate-200 text-base sm:text-xl font-normal leading-relaxed">
            "{statement}"
          </p>

          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs sm:text-sm text-cyan-300 font-medium">
            <Building2 className="w-4 h-4 text-cyan-400" />
            <span>Target Milestone: Engineering intelligent solutions at leading tech innovators such as Microsoft</span>
          </div>
        </div>

        {/* Subtle Animated Roadmap */}
        <div className="relative max-w-5xl mx-auto">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Rocket className="w-4 h-4 text-cyan-400" />
              <h3 className="text-sm font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                The Learning & Career Roadmap
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">
              Phase progression
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {roadmap.map((item, idx) => {
              const isGoal = idx === roadmap.length - 1;
              const isCurrent = idx === 0;

              return (
                <div
                  key={idx}
                  className={`rounded-2xl p-4 border flex flex-col justify-between transition-all duration-300 ${
                    isGoal
                      ? 'bg-gradient-to-b from-purple-500/20 to-indigo-500/10 border-purple-500/40 shadow-lg shadow-purple-500/10'
                      : isCurrent
                      ? 'bg-cyan-500/10 border-cyan-500/30'
                      : 'bg-white/[0.02] border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-mono font-bold ${isGoal ? 'text-purple-300' : isCurrent ? 'text-cyan-300' : 'text-slate-400'}`}>
                        {item.stage}
                      </span>
                      {idx < roadmap.length - 1 && (
                        <ArrowRight className="w-3 h-3 text-slate-500 hidden lg:block" />
                      )}
                    </div>

                    <h4 className="text-sm font-bold text-white mb-1">
                      {item.name}
                    </h4>
                  </div>

                  <span className={`text-[10px] font-mono mt-3 block ${isGoal ? 'text-purple-400' : isCurrent ? 'text-cyan-400' : 'text-slate-400'}`}>
                    {item.status}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Clarification Alert */}
          <div className="mt-8 text-center text-xs font-mono text-slate-400 max-w-xl mx-auto p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            📌 <strong className="text-slate-300">Important:</strong> {clarification}
          </div>
        </div>

      </div>
    </section>
  );
}
