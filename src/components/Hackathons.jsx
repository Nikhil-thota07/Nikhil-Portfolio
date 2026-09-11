import React from 'react';
import { 
  Sparkles, 
  Lightbulb, 
  Users, 
  Wrench, 
  Target, 
  ArrowRight, 
  Layers, 
  Zap,
  Clock,
  Compass
} from 'lucide-react';
import { hackathonData } from '../data/portfolioData';

export default function Hackathons() {
  const { title, tagline, description, interests, featuredIdea, cta } = hackathonData;

  const iconMap = [Zap, Lightbulb, Users, Wrench, Target];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Collaboration & Prototyping</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            {tagline}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Column: Hackathon Philosophy & 5 Focus Areas */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-400" />
                Why I Love Hackathon Culture
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {interests.map((item, idx) => {
                  const Icon = iconMap[idx] || Sparkles;
                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-3"
                    >
                      <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">{item.title}</h4>
                        <p className="text-[11px] text-slate-400 leading-tight mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Call to action prompt */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-500/15 via-indigo-500/15 to-purple-500/15 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold text-white">{cta}</h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Ready to team up for upcoming college hackathons or build an MVP together.
                </p>
              </div>
              <a
                href="#contact"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-xs shadow-md shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5"
              >
                <span>Connect & Brainstorm</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Featured Concept Spotlight (Smart Canteen) */}
          <div className="lg:col-span-6">
            <div className="glass-panel-interactive h-full p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between relative overflow-hidden">
              
              {/* Subtle badge */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    {featuredIdea.status}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" /> In Concept Stage
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-white mb-3">
                  {featuredIdea.name}
                </h3>

                <div className="space-y-4 text-sm text-slate-300">
                  <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/15">
                    <span className="text-xs font-mono font-bold text-rose-300 block mb-1 uppercase tracking-wide">
                      The Problem:
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {featuredIdea.problem}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/15">
                    <span className="text-xs font-mono font-bold text-emerald-300 block mb-1 uppercase tracking-wide">
                      The Proposed Solution:
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {featuredIdea.solution}
                    </p>
                  </div>

                  {/* Architecture blocks */}
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                    <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-wider">
                      Conceptual Architecture Flow:
                    </span>
                    <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-mono">
                      <div className="p-2 rounded bg-white/[0.04] border border-white/[0.08] text-slate-300">
                        Camera Feed / Sensor
                      </div>
                      <div className="p-2 rounded bg-white/[0.04] border border-white/[0.08] text-cyan-300">
                        Python Queue Estimator
                      </div>
                      <div className="p-2 rounded bg-white/[0.04] border border-white/[0.08] text-emerald-300">
                        Live Student App Wait-Time
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-slate-400 italic text-center">
                📌 Exploring this solution as a first-year student innovation project.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
