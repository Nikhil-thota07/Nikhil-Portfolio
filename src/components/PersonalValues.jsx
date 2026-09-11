import React from 'react';
import { Sparkles, Lightbulb, Hammer, Palette, TrendingUp } from 'lucide-react';
import { personalValuesData } from '../data/portfolioData';

export default function PersonalValues() {
  const iconMap = [Lightbulb, Hammer, Palette, TrendingUp];
  const gradientMap = [
    'from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30',
    'from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30',
    'from-pink-500/20 to-purple-500/20 text-pink-400 border-pink-500/30',
    'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30',
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What Drives Me
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            The foundational principles guiding every experiment, routine, and code line I write.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* 4 Elegant Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalValuesData.map((val, idx) => {
            const Icon = iconMap[idx] || Sparkles;
            return (
              <div
                key={val.number}
                className="glass-panel-interactive rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between group hover:border-cyan-500/40 relative overflow-hidden"
              >
                {/* Subtle top indicator bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 opacity-40 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono font-extrabold text-2xl bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                      {val.number}
                    </span>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradientMap[idx]} border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {val.keyword}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-slate-200 mb-3 italic">
                    "{val.quote}"
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
