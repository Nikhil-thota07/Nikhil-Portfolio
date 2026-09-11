import React from 'react';
import { 
  Sparkles, 
  Cpu, 
  Brain, 
  Code2, 
  Globe, 
  CheckCircle2, 
  BookOpen, 
  ArrowUpRight,
  TrendingUp,
  Terminal
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const { currentlyKnown, currentlyLearning } = skillsData;

  // Icon map for learning cards
  const iconMap = {
    Cpu: Cpu,
    Brain: Brain,
    Code2: Code2,
    Globe: Globe,
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[110px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What I Know & What I'm Learning
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            An honest reflection of my present technical abilities and the areas I'm actively mastering as a first-year student.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* 1. CURRENTLY KNOWN: Spotlight Card */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <h3 className="text-sm font-mono uppercase tracking-widest text-amber-400 font-semibold">
              Currently Known &middot; Primary Language
            </h3>
          </div>

          <div className="relative rounded-3xl p-1 bg-gradient-to-r from-amber-500/30 via-cyan-500/20 to-indigo-500/30 shadow-xl shadow-amber-500/5">
            <div className="rounded-[22px] bg-[#0c101a] border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left info */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-2xl shadow-inner">
                      {currentlyKnown.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
                          {currentlyKnown.title}
                        </h4>
                        <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-amber-500/15 border border-amber-500/30 text-amber-300">
                          {currentlyKnown.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 font-mono">
                        {currentlyKnown.category}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-300 text-base leading-relaxed">
                    "{currentlyKnown.description}"
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {currentlyKnown.highlights.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 text-[11px] font-mono text-slate-400 bg-amber-500/5 border-l-2 border-amber-500/60 pl-3 py-1.5 rounded-r">
                    📌 {currentlyKnown.disclaimer}
                  </div>
                </div>

                {/* Right snippet / metrics */}
                <div className="lg:col-span-5 bg-[#06080e] rounded-2xl border border-white/[0.08] p-5 font-mono text-xs space-y-3">
                  <div className="flex items-center justify-between text-slate-500 border-b border-white/[0.06] pb-2 text-[11px]">
                    <span className="text-slate-400 font-sans">python_toolkit.py</span>
                    <span className="text-amber-400">Working Knowledge</span>
                  </div>
                  <div className="space-y-1.5 text-slate-300 leading-relaxed text-[11px]">
                    <p className="text-slate-500"># Primary focus during year 1</p>
                    <p><span className="text-cyan-400">current_focus</span> = &#123;</p>
                    <p className="pl-4"><span className="text-indigo-300">"scripting"</span>: True,</p>
                    <p className="pl-4"><span className="text-indigo-300">"logic_building"</span>: True,</p>
                    <p className="pl-4"><span className="text-indigo-300">"exploring_ai"</span>: True,</p>
                    <p className="pl-4"><span className="text-indigo-300">"expert_claim"</span>: <span className="text-rose-400">False</span></p>
                    <p>&#125;</p>
                    <p className="text-emerald-400 pt-1">print("Learning Python day by day!")</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* 2. CURRENTLY LEARNING: 4 Dedicated Cards */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <h3 className="text-sm font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                Currently Learning &middot; Growth Journey
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">
              Actively studying & exploring
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {currentlyLearning.map((item) => {
              const Icon = iconMap[item.icon] || Cpu;
              return (
                <div
                  key={item.id}
                  className="glass-panel-interactive rounded-2xl p-5 border border-white/10 flex flex-col justify-between group hover:border-cyan-500/40 relative overflow-hidden"
                >
                  {/* Subtle top indicator bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-60 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Focus Tags */}
                  <div className="pt-3 border-t border-white/[0.06]">
                    <span className="text-[10px] font-mono text-slate-400 block mb-2">
                      Study Areas:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.focus.map((f, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[10px] bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Growth philosophy note */}
          <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center text-xs text-slate-400 max-w-2xl mx-auto">
            💡 <strong className="text-slate-300">Growth Mindset:</strong> I do not claim mastery over AI, ML, DSA, or Web Development. These reflect the core subjects and technologies I am currently studying and testing through real code.
          </div>
        </div>

      </div>
    </section>
  );
}
