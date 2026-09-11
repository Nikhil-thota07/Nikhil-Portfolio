import React from 'react';
import { 
  GraduationCap, 
  Code2, 
  Lightbulb, 
  Music, 
  MapPin, 
  Sparkles
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      color: 'from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30',
      title: 'First-Year B.Tech in CSE (AI & ML)',
      subtitle: 'NRCM Hyderabad',
      detail: 'Learning core fundamentals of computer science and artificial intelligence.'
    },
    {
      icon: Code2,
      color: 'from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30',
      title: 'Python Working Knowledge',
      subtitle: 'Primary Language',
      detail: 'Writing functional scripts, solving algorithmic logic, and testing concepts.'
    },
    {
      icon: Lightbulb,
      color: 'from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/30',
      title: 'Hackathons & Innovation',
      subtitle: 'Beyond The Classroom',
      detail: 'Eager to brainstorm real-world prototypes with collaborative teams.'
    },
    {
      icon: Music,
      color: 'from-pink-500/20 to-rose-500/20 text-pink-400 border-pink-500/30',
      title: 'Choreographer & Instructor',
      subtitle: 'Creative Discipline',
      detail: 'Several years of dance experience cultivating communication and stage presence.'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover My Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Natural Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 relative">
              <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                <p>
                  I'm <strong className="text-white font-semibold">Nikhil Thota</strong>, a first-year B.Tech student specializing in{' '}
                  <span className="text-cyan-300 font-medium">Computer Science and Engineering with Artificial Intelligence & Machine Learning</span>{' '}
                  at Narsimha Reddy College of Engineering and Management (NRCM), Hyderabad.
                </p>

                <p>
                  I currently have a <span className="text-amber-300 font-medium">working knowledge of Python</span> and enjoy learning by actually building things. I'm exploring AI, Machine Learning, problem solving, and modern technology while gradually expanding my technical skills.
                </p>

                <p>
                  For me, college isn't just about completing a degree. It's about experimenting, creating projects, participating in hackathons, meeting people, and continuously improving.
                </p>

                <p className="text-slate-200 border-l-2 border-indigo-500 pl-4 py-1 italic bg-indigo-500/5 rounded-r-lg">
                  Alongside technology, I have a strong creative side through dance and choreography, which has helped me develop confidence, communication, discipline, and creativity.
                </p>
              </div>

              {/* Location pin badge */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="inline-flex items-center gap-1.5 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  Hyderabad, Telangana, India
                </span>
                <span className="font-mono text-cyan-400/90">NRCM &middot; 1st Year</span>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Highlight Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel-interactive p-5 rounded-2xl border border-white/10 group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} border flex items-center justify-center shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-xs font-mono text-slate-400 block mb-1">
                        {item.subtitle}
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
