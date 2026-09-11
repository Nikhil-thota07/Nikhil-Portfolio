import React from 'react';
import { 
  Sparkles, 
  Lightbulb, 
  Terminal, 
  Clock, 
  PlusCircle, 
  ArrowUpRight, 
  Github, 
  ExternalLink,
  Code2,
  FolderGit2,
  Cpu
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const { currentBuilding, futureNote } = projectsData;

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Project Lab</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Things I'm Building
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mt-3 font-normal">
            Learning becomes meaningful when I turn ideas into code and experiments.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Current Active Projects & Concepts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {currentBuilding.map((project) => (
            <div
              key={project.id}
              className="glass-panel-interactive rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between group hover:border-cyan-500/40 relative"
            >
              <div>
                {/* Status bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-white/[0.06]">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                    <Lightbulb className="w-3.5 h-3.5 text-cyan-400" />
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Status: <span className="text-indigo-300">{project.status}</span>
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400/90 mb-4">
                  {project.tagline}
                </p>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key feature highlights */}
                <div className="space-y-2 mb-6 bg-white/[0.02] p-4 rounded-xl border border-white/[0.05]">
                  <span className="text-[11px] font-mono text-slate-400 block mb-1 uppercase tracking-wider">
                    Highlights & Concept Scope:
                  </span>
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom footer: tech stack + status notice */}
              <div className="pt-4 border-t border-white/[0.06]">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="text-[11px] font-mono text-slate-400 italic">
                    {project.isIdea ? "Concept Architecture" : "In Active Scripting"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FUTURE PROJECTS ("Coming Soon" Area) */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 border border-white/10">
          <div className="rounded-[22px] bg-[#0c101b] p-6 sm:p-10 backdrop-blur-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 pb-6 border-b border-white/10">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Next Milestones</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Future Projects & Explorations
                </h3>
                <p className="text-slate-300 text-sm max-w-xl">
                  "{futureNote}"
                </p>
              </div>

              <div className="text-xs font-mono text-slate-400 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center">
                <span>No Fake Repositories &middot; Honest Learning</span>
              </div>
            </div>

            {/* Placeholder Project Card Template */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Future Slot 1: AI / Computer Vision Experiment */}
              <div className="rounded-2xl border-2 border-dashed border-white/15 p-6 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    Coming Soon &middot; AI/ML
                  </span>
                  <PlusCircle className="w-4 h-4 text-slate-400" />
                </div>
                <h4 className="text-base font-bold text-white mb-1.5">
                  AI / Computer Vision Project Slot
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Placeholder reserved for an upcoming AI or machine learning project as I build proficiency with model development and data evaluation.
                </p>
                <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1 opacity-60"><Github className="w-3.5 h-3.5" /> Repo (Coming Soon)</span>
                  <span className="flex items-center gap-1 opacity-60"><ExternalLink className="w-3.5 h-3.5" /> Demo</span>
                </div>
              </div>

              {/* Future Slot 2: Full-Stack Web + Python API */}
              <div className="rounded-2xl border-2 border-dashed border-white/15 p-6 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    Coming Soon &middot; Web + Python
                  </span>
                  <PlusCircle className="w-4 h-4 text-slate-400" />
                </div>
                <h4 className="text-base font-bold text-white mb-1.5">
                  Interactive Web Application Slot
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Placeholder designated for a full-stack tool connecting a Python backend logic engine with a modern React interactive frontend.
                </p>
                <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1 opacity-60"><Github className="w-3.5 h-3.5" /> Repo (Coming Soon)</span>
                  <span className="flex items-center gap-1 opacity-60"><ExternalLink className="w-3.5 h-3.5" /> Live Preview</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
