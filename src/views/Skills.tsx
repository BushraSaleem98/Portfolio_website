import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skill Arsenal</h2>
          <p className="text-gray-400">A live tracker of my technical proficiency levels.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map(category => (
            <div key={category} className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="w-2 h-6 bg-fox-500 mr-3 rounded-full"></span>
                {category}
              </h3>
              <div className="space-y-6">
                {SKILLS.filter(s => s.category === category).map(skill => (
                  <div key={skill.id}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      <span className="text-sm font-bold text-fox-400">{skill.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-fox-600 to-fox-400 h-2.5 rounded-full transition-all duration-1000 ease-out relative"
                        style={{ width: `${skill.progress}%` }}
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-white/20 w-full h-full -translate-x-full animate-[shimmer_2s_infinite]"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Charts placeholder or D3 visualization could go here */}
        <div className="mt-12 p-8 bg-slate-800/30 rounded-2xl border border-dashed border-slate-700 text-center">
            <p className="text-gray-500 italic">More granular analytics and certification badges coming soon...</p>
        </div>
      </div>
      
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Skills;
