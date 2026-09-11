import React, { useState } from 'react';
import { 
  ArrowRight, 
  Linkedin, 
  Sparkles, 
  Terminal, 
  Brain, 
  Code, 
  Flame, 
  CheckCircle2, 
  Compass,
  Layers
} from 'lucide-react';
import { personalData } from '../data/portfolioData';
import nikhilPhoto from '../assets/nikhil.jpeg';

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden">
      {/* Soft ambient background glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/15 to-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Core Message */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Indicator Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-medium mb-6 shadow-sm shadow-emerald-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalData.status}</span>
            </div>

            {/* Name & Academic Identity */}
            <div className="space-y-2 mb-4">
              <h2 className="text-sm uppercase tracking-[0.25em] text-cyan-400 font-semibold font-mono">
                Developer Portfolio
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                  {personalData.name}
                </span>
              </h1>
            </div>

            {/* Role Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {personalData.roles.map((role, idx) => (
                <span
                  key={role}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-white/[0.04] border border-white/[0.08] text-slate-300"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Main Tagline & Headline */}
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4 tracking-tight">
              "{personalData.tagline}"
            </h3>

            {/* Supporting Bio Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
              {personalData.heroDescription}
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-cyan-500/40 hover:text-cyan-300 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4 text-[#0077b5]" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>

            {/* Quick Education Badge */}
            <div className="mt-10 pt-6 border-t border-white/[0.07] w-full max-w-xl flex items-center gap-3 text-xs text-slate-400">
              <Compass className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>
                <strong className="text-slate-300">NRCM Hyderabad:</strong> First-Year B.Tech in CSE (Artificial Intelligence & Machine Learning)
              </span>
            </div>

          </div>

          {/* Right Column: Visual Card (Profile Photo + Python/AI Code Terminal) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Visual Container */}
            <div className="relative w-full max-w-md">
              
              {/* Decorative Gradient Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 rounded-3xl opacity-30 blur-lg group-hover:opacity-60 transition duration-1000 animate-pulse-slow" />

              {/* Main Card */}
              <div className="relative rounded-2xl bg-[#0d111c]/90 border border-white/10 p-6 backdrop-blur-xl shadow-2xl space-y-5">
                
                {/* Profile Photo Area */}
                <div className="flex items-center gap-4 pb-4 border-b border-white/[0.08]">
                  <div className="relative group">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl p-1 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-500 shadow-md shadow-cyan-500/20">
                      <div className="w-full h-full rounded-[14px] overflow-hidden bg-slate-900 flex items-center justify-center">
                        {!imgError ? (
                          <img
                            src={nikhilPhoto}
                            alt="Nikhil Thota"
                            onError={() => setImgError(true)}
                            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-tr from-[#111827] to-[#1e293b] text-cyan-300">
                            <span className="font-bold text-2xl">NT</span>
                            <span className="text-[10px] text-slate-400 mt-0.5 font-mono">Nikhil</span>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Active verified badge */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-md border-2 border-[#0d111c]" title="Active Student">
                      <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-white flex items-center gap-1.5">
                      Nikhil Thota
                      <span className="text-xs font-mono font-normal text-cyan-400">• 1st Year</span>
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      B.Tech CSE (AI & ML) @ NRCM
                    </p>
                    <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-cyan-500/10 text-[11px] font-mono text-cyan-300 border border-cyan-500/20">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      <span>Python &middot; Exploring AI/ML</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Interactive Python Snippet */}
                <div className="rounded-xl bg-[#06080e] border border-white/[0.08] p-3.5 font-mono text-xs overflow-hidden">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.06] text-slate-500 text-[11px]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="ml-1 text-slate-400 font-sans text-[11px]">nikhil_mindset.py</span>
                    </div>
                    <span className="text-cyan-400/80 text-[10px]">Python 3.14</span>
                  </div>

                  <div className="space-y-1 text-slate-300 leading-relaxed">
                    <p>
                      <span className="text-purple-400">class</span>{' '}
                      <span className="text-cyan-300">StudentDeveloper</span>:
                    </p>
                    <p className="pl-4">
                      <span className="text-purple-400">def</span>{' '}
                      <span className="text-blue-300">__init__</span>(self):
                    </p>
                    <p className="pl-8">
                      self.name = <span className="text-emerald-300">"Nikhil Thota"</span>
                    </p>
                    <p className="pl-8">
                      self.language = <span className="text-amber-300">"Python (Working Knowledge)"</span>
                    </p>
                    <p className="pl-8">
                      self.learning = [<span className="text-emerald-300">"AI"</span>, <span className="text-emerald-300">"ML"</span>, <span className="text-emerald-300">"DSA"</span>]
                    </p>
                    <p className="pl-8">
                      self.target = <span className="text-indigo-300">"AI Engineer"</span>
                    </p>
                    <p className="pl-4 mt-1">
                      <span className="text-purple-400">def</span>{' '}
                      <span className="text-blue-300">daily_routine</span>(self):
                    </p>
                    <p className="pl-8 text-cyan-300">
                      return <span className="text-emerald-300">"Learn. Build. Dance. Repeat."</span>
                    </p>
                  </div>
                </div>

                {/* Live Core Pillars Bar */}
                <div className="grid grid-cols-3 gap-2 pt-1 text-center text-xs">
                  <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                    <span className="block font-bold text-cyan-400">Python</span>
                    <span className="text-[10px] text-slate-400">Known Skill</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                    <span className="block font-bold text-purple-400">AI & ML</span>
                    <span className="text-[10px] text-slate-400">Exploring</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                    <span className="block font-bold text-amber-400">Dance</span>
                    <span className="text-[10px] text-slate-400">Choreography</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
