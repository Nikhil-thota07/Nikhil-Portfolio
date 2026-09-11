import React from 'react';
import { 
  Sparkles, 
  Music, 
  Flame, 
  Users, 
  HeartHandshake, 
  ShieldCheck, 
  Layers, 
  Tv, 
  Radio, 
  Crown,
  Activity
} from 'lucide-react';
import { beyondCodeData } from '../data/portfolioData';

export default function BeyondCode() {
  const { title, subtitle, intro, connection, styles, skillsTransferred } = beyondCodeData;

  return (
    <section id="beyond-code" className="py-24 relative overflow-hidden">
      {/* Dynamic artistic glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-pink-600/10 via-purple-600/10 to-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Creative Theme */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/25 text-pink-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Music className="w-3.5 h-3.5 animate-bounce" />
            <span>Creative Dimension & Expression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mt-3 font-normal">
            "{subtitle}"
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Story Intro Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 mb-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/[0.04] text-xs font-mono text-purple-300 border border-white/[0.08]">
                <Crown className="w-3.5 h-3.5 text-amber-400" />
                <span>Dance Instructor & Choreographer &middot; Multi-Year Experience</span>
              </div>

              <p>
                {intro}
              </p>

              <p className="text-slate-200 border-l-2 border-pink-500 pl-4 py-1 italic bg-pink-500/5 rounded-r">
                {connection}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-b from-pink-500/10 via-purple-500/5 to-indigo-500/10 border border-pink-500/20 text-center space-y-2">
              <div className="w-16 h-16 rounded-full bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-pink-300 shadow-lg shadow-pink-500/20 mb-2">
                <Flame className="w-8 h-8 text-pink-400 animate-pulse" />
              </div>
              <h4 className="text-lg font-bold text-white">Dual Mindset</h4>
              <p className="text-xs text-slate-300">
                Analytical rigor in code &middot; Uninhibited creativity in choreography.
              </p>
            </div>
          </div>
        </div>

        {/* Dance Styles Mosaic */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Activity className="w-4 h-4 text-pink-400" />
            <h3 className="text-sm font-mono uppercase tracking-widest text-pink-400 font-semibold">
              Choreography Genres & Styles
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {styles.map((style, idx) => (
              <div
                key={idx}
                className="glass-panel-interactive p-4 rounded-2xl border border-white/10 text-center group hover:border-pink-500/40 flex flex-col items-center justify-center min-h-[110px]"
              >
                <span className="text-xs sm:text-sm font-bold text-white group-hover:text-pink-300 transition-colors block mb-1">
                  {style.name}
                </span>
                <span className="text-[10px] text-slate-400 leading-tight block font-mono">
                  {style.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* How Dance Shapes My Engineering Mindset (Transferred Soft Skills) */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <h3 className="text-sm font-mono uppercase tracking-widest text-purple-400 font-semibold">
              The Transferred Discipline: How Dance Sharpens My Engineering
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillsTransferred.map((item, idx) => (
              <div
                key={idx}
                className="glass-panel-interactive p-5 rounded-2xl border border-white/10 group hover:border-purple-500/40"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-pink-500/20 to-purple-500/20 text-pink-300 flex items-center justify-center font-mono font-bold text-xs border border-pink-500/30">
                    0{idx + 1}
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-pink-300 transition-colors">
                    {item.name}
                  </h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
