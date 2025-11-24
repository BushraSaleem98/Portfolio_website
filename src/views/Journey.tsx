import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const Journey: React.FC = () => {
  // Create a reversed copy of posts so Newest is at Top
  const displayPosts = [...BLOG_POSTS].reverse();

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Fox's Trail</h2>
          <p className="text-gray-400">Documenting every step, stumble, and success along the way.</p>
        </div>

        {/* The "Top" of this list is the LATEST post */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-fox-500/50 before:to-transparent">
          {displayPosts.map((post, index) => {
             // Calculate number: Top item gets highest number, Bottom item gets 1.
             // Length (4) - index (0) = 4.
             // Length (4) - index (3) = 1.
             const stepNumber = displayPosts.length - index;
             
             return (
              <div key={post.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                
                {/* Timeline Dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-cyber-900 bg-fox-500 text-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative">
                  <span className="font-bold text-xs">{stepNumber}</span>
                </div>

                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] overflow-hidden rounded-2xl bg-slate-800 border border-slate-700 hover:border-fox-500/50 transition-all duration-300 shadow-lg">
                  
                  {/* Image Section (if exists) */}
                  {post.imageUrl && (
                    <div className="w-full h-48 overflow-hidden">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wider 
                        ${post.category === 'CTF' ? 'bg-purple-900 text-purple-200' : 
                          post.category === 'Project' ? 'bg-blue-900 text-blue-200' : 
                          post.category === 'Career' ? 'bg-emerald-900 text-emerald-200' :
                          'bg-fox-900/50 text-fox-200'}`}>
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-xs space-x-2">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-fox-400 transition-colors">{post.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                      <div className="flex items-center text-gray-500 text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </div>
                      <Link 
                        to={`/journey/${post.id}`}
                        className="text-fox-500 text-sm font-medium hover:text-fox-400 flex items-center"
                      >
                        Read Full Log <span className="ml-1">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Journey;
