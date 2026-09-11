import React from 'react';
import { 
  Sparkles, 
  GraduationCap, 
  BookOpen, 
  Compass, 
  Terminal, 
  FolderGit2, 
  BrainCircuit, 
  Lightbulb
} from 'lucide-react';
import { journeyData } from '../data/portfolioData';

export default function Journey() {
  const iconMap = {
    GraduationCap: GraduationCap,
    BookOpen: BookOpen,
    Compass: Compass,
    Terminal: Terminal,
    FolderGit2: FolderGit2,
    BrainCircuit: BrainCircuit,
    Lightbulb: Lightbulb,
    Sparkles: Sparkles,
  };

  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      {/* Glow accent */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Evolution & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My Journey
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            A continuous progression from school curiosities to computer science engineering and aspiring towards AI engineering.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Interactive Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Central Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-500 opacity-30" />

          <div className="space-y-8 sm:space-y-12">
            {journeyData.map((item, index) => {
              const Icon = iconMap[item.icon] || Sparkles;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.step}
                  className={`relative flex items-center ${
                    isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  } flex-row pl-12 sm:pl-0 group`}
                >
                  {/* Center Node / Indicator */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0d111c] border-2 border-cyan-500/50 group-hover:border-cyan-400 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300 flex items-center justify-center z-10">
                    <Icon className="w-4 h-4 text-cyan-400" />
                  </div>

                  {/* Content Card (Left or Right on desktop) */}
                  <div className={`w-full sm:w-1/2 ${isEven ? 'sm:pr-10 sm:text-right' : 'sm:pl-10 sm:text-left'}`}>
                    <div className="glass-panel-interactive p-5 sm:p-6 rounded-2xl border border-white/10 group-hover:border-indigo-500/30">
                      <div className={`flex items-center gap-2 mb-1.5 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white/[0.04] text-cyan-300 border border-white/[0.08]">
                          Step {item.step}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">
                          {item.subtitle}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty Spacer on opposite side for desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
