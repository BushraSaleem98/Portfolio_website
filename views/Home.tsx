import React from 'react';
import { ArrowRight, ShieldCheck, Lock, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
        </div>
        
        {/* Orange Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fox-500/20 rounded-full filter blur-[100px] animate-pulse"></div>
        
        <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
          <div className="mb-8 inline-block p-4 rounded-full bg-fox-500/10 border border-fox-500/30 backdrop-blur-sm">
             <span className="text-4xl">🦊</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-fox-400 to-fox-600">Cyber Security</span> Journey
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mb-10">
            Tracking my path from script kiddie to security researcher. 
            Explore my projects, read my learning logs, and watch my skills grow in real-time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/journey" 
              className="group px-8 py-3 bg-fox-500 hover:bg-fox-600 text-white rounded-full font-medium transition-all duration-300 flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]"
            >
              Start Journey
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/projects" 
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 hover:border-fox-500/50 rounded-full font-medium transition-all duration-300"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-24 bg-cyber-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <ShieldCheck className="w-8 h-8 text-fox-400" />, 
                title: "Progress Tracking", 
                desc: "Visualizing skill acquisition in network defense, offensive security, and tool mastery." 
              },
              { 
                icon: <Terminal className="w-8 h-8 text-fox-400" />, 
                title: "CTF Writeups", 
                desc: "Detailed breakdowns of Capture The Flag challenges I've solved and lessons learned." 
              },
              { 
                icon: <Lock className="w-8 h-8 text-fox-400" />, 
                title: "Security Research", 
                desc: "Documentation of my experiments with malware analysis, cryptography, and secure coding." 
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-fox-500/30 transition-colors duration-300 group">
                <div className="mb-4 p-3 bg-slate-800 rounded-lg w-fit group-hover:bg-fox-900/30 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;