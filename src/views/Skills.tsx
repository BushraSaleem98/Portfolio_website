
import React from 'react';
import { Award, ExternalLink, Eye, CheckCircle } from 'lucide-react';
import { SKILLS, CERTIFICATES } from '../constants';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Technical Skills Section */}
        <div className="mb-16">
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
                          <div className="absolute inset-0 bg-white/20 w-full h-full -translate-x-full animate-[shimmer_2s_infinite]"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-8">
            <Award className="w-8 h-8 text-fox-500" />
            <h2 className="text-3xl font-bold text-white">Certifications & Awards</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATES.map((cert) => (
              <div key={cert.id} className="group bg-slate-900 rounded-2xl border border-slate-800 p-6 hover:border-fox-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-fox-500/10 transition-colors">
                    <Award className="w-6 h-6 text-fox-400 group-hover:text-fox-500" />
                  </div>
                  <span className="text-xs font-mono text-gray-500">{cert.date}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-fox-500 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-400 mb-6">{cert.issuer}</p>

                {/* Certificate Preview/Thumbnail area */}
                <div className="w-full h-32 bg-slate-800 rounded-lg mb-6 overflow-hidden relative">
                   <img src={cert.imageUrl} alt={cert.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                   {cert.credentialUrl && (
                     <div className="absolute top-2 right-2 bg-green-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center shadow">
                       <CheckCircle className="w-3 h-3 mr-1" /> Verified
                     </div>
                   )}
                </div>

                <a 
                  href={cert.credentialUrl || cert.imageUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-full py-2.5 rounded-lg text-sm font-medium transition-all ${
                    cert.credentialUrl 
                      ? 'bg-fox-600 hover:bg-fox-700 text-white shadow-lg shadow-fox-500/20'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  }`}
                >
                  {cert.credentialUrl ? (
                    <>
                      Verify Credential <ExternalLink className="w-4 h-4 ml-2" />
                    </>
                  ) : (
                    <>
                      View Certificate <Eye className="w-4 h-4 ml-2" />
                    </>
                  )}
                </a>
              </div>
            ))}
          </div>
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
