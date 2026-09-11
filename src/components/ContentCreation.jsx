import React, { useState } from 'react';
import { 
  Sparkles, 
  Youtube, 
  Cpu, 
  School, 
  BookMarked, 
  Film, 
  Smile, 
  Video, 
  ExternalLink,
  BellRing
} from 'lucide-react';
import { contentCreationData, personalData } from '../data/portfolioData';

export default function ContentCreation() {
  const { title, channelName, tagline, description, topics, ctaText, placeholderNote } = contentCreationData;
  const [copied, setCopied] = useState(false);

  const iconMap = {
    Cpu: Cpu,
    School: School,
    BookMarked: BookMarked,
    Film: Film,
    Smile: Smile,
    Sparkles: Sparkles,
  };

  const handleAction = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-red-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/25 text-red-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Youtube className="w-3.5 h-3.5 text-red-400" />
            <span>Digital Media & Perspectives</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            {tagline}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-red-500 via-purple-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Content Creation Showcase Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 max-w-5xl mx-auto relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Channel Story */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] text-xs font-mono text-slate-300 border border-white/[0.08]">
                <span>Personal Channel Journey</span>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-red-400 font-semibold tracking-wider uppercase">
                  YouTube Creator
                </span>
                <h3 className="text-3xl sm:text-4xl font-black text-white">
                  "{channelName}"
                </h3>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {description}
              </p>

              {/* Topics Grid */}
              <div className="pt-2">
                <span className="text-[11px] font-mono text-slate-400 block mb-2 uppercase tracking-wide">
                  Themes & Video Topics I Explore:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {topics.map((item, idx) => {
                    const Icon = iconMap[item.icon] || Sparkles;
                    return (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-2"
                      >
                        <Icon className="w-3.5 h-3.5 text-red-400 shrink-0" />
                        <span className="text-xs font-medium text-slate-300">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Card Preview */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full rounded-2xl bg-[#080b13] border border-white/10 p-6 text-center space-y-4 shadow-xl">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-red-600 to-rose-500 mx-auto flex items-center justify-center text-white shadow-lg shadow-red-600/30">
                  <Youtube className="w-8 h-8" />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white">Just Nikhil Things</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Content Creation & Student Journey
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[11px] text-slate-400 font-mono">
                  <span>{placeholderNote}</span>
                </div>

                {/* Channel Link Button / Placeholder */}
                <button
                  onClick={handleAction}
                  className="w-full py-3 px-4 rounded-xl text-xs font-semibold bg-white/[0.05] hover:bg-white/[0.09] text-white border border-white/10 hover:border-red-500/40 flex items-center justify-center gap-2 transition-all"
                >
                  <BellRing className="w-3.5 h-3.5 text-red-400" />
                  <span>{copied ? 'Channel Link Placeholder Ready!' : ctaText}</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
