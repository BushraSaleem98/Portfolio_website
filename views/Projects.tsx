import React from 'react';
import { Github, ExternalLink, Layers } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Operations & Labs</h2>
            <p className="text-gray-400">Practical applications of my security research.</p>
          </div>
          <div className="mt-4 md:mt-0">
             <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-sm text-white rounded-lg border border-slate-700 transition-colors flex items-center">
                <Layers className="w-4 h-4 mr-2" /> Filter by Tech
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:shadow-2xl hover:shadow-fox-500/10 hover:-translate-y-1 transition-all duration-300">
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 text-xs font-bold rounded-full 
                    ${project.status === 'Completed' ? 'bg-green-900/80 text-green-300 border border-green-700' : 
                      project.status === 'In Progress' ? 'bg-amber-900/80 text-amber-300 border border-amber-700' : 
                      'bg-slate-800/80 text-slate-400 border border-slate-600'}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-fox-500 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 h-12 line-clamp-2">{project.description}</p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-2 py-1 text-xs bg-slate-800 text-fox-300 rounded border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <a href={project.githubUrl} className="flex items-center text-gray-400 hover:text-white transition-colors text-sm">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  <a href="#" className="flex items-center text-fox-500 hover:text-fox-400 transition-colors text-sm font-medium">
                    View Demo
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
          
          {/* Add New Project Placeholder */}
          <div className="border-2 border-dashed border-slate-800 rounded-2xl flex flex-col items-center justify-center p-8 text-center hover:border-fox-500/30 hover:bg-slate-900/50 transition-all cursor-pointer group">
            <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-fox-500/10 transition-colors">
               <span className="text-2xl text-gray-600 group-hover:text-fox-500">+</span>
            </div>
            <h3 className="text-lg font-medium text-gray-300">New Project</h3>
            <p className="text-sm text-gray-500 mt-1">Documentation in progress...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;