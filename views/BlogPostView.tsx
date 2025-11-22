
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const BlogPostView: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.id === id);

  // Helper function to render text with **bold** support
  const renderRichText = (text: string) => {
    // Split by **text** pattern
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        // Remove asterisks and render bold
        return <strong key={index} className="text-white font-bold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h2 className="text-2xl font-bold mb-4">Log Not Found</h2>
        <button onClick={() => navigate('/journey')} className="text-fox-500 hover:underline">
          Return to Journey
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-cyber-900">
      <article className="max-w-3xl mx-auto bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
        
        {/* Header Image */}
        {post.imageUrl && (
          <div className="w-full h-64 sm:h-80 overflow-hidden relative">
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
             <img 
               src={post.imageUrl} 
               alt={post.title} 
               className="w-full h-full object-cover"
             />
          </div>
        )}

        <div className="p-8 sm:p-12 relative z-20 -mt-20">
          {/* Meta Tags */}
          <div className="flex flex-wrap gap-4 mb-6">
            <Link 
              to="/journey" 
              className="inline-flex items-center text-sm text-fox-400 hover:text-fox-300 transition-colors bg-slate-800/80 backdrop-blur px-3 py-1 rounded-full border border-slate-700"
            >
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to Trail
            </Link>
            <span className="inline-flex items-center text-sm text-gray-300 bg-slate-800/80 backdrop-blur px-3 py-1 rounded-full border border-slate-700">
               <Calendar className="w-4 h-4 mr-2 text-fox-500" /> {post.date}
            </span>
             <span className="inline-flex items-center text-sm text-gray-300 bg-slate-800/80 backdrop-blur px-3 py-1 rounded-full border border-slate-700">
               <Clock className="w-4 h-4 mr-2 text-fox-500" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 leading-tight">
            {post.title}
          </h1>

          {/* Content Renderer */}
          <div className="space-y-6 text-gray-300 leading-relaxed">
            {post.content.map((block, idx) => {
              switch (block.type) {
                case 'heading':
                  return (
                    <h2 key={idx} className="text-2xl font-bold text-white mt-8 mb-4 border-l-4 border-fox-500 pl-4">
                      {block.value}
                    </h2>
                  );
                case 'image':
                  return (
                    <div key={idx} className="my-8">
                      <div className="rounded-xl overflow-hidden border border-slate-700 shadow-lg bg-slate-800/50 p-2">
                         <img 
                           src={block.value as string} 
                           alt={block.alt || 'Blog Illustration'} 
                           className="w-auto max-h-64 mx-auto rounded-lg"
                         />
                      </div>
                      {block.alt && <p className="text-center text-xs text-gray-500 mt-2 italic">{block.alt}</p>}
                    </div>
                  );
                case 'list':
                  return (
                    <ul key={idx} className="list-disc list-inside space-y-2 ml-4 border-l border-slate-700 pl-4 py-2">
                      {(block.value as string[]).map((item, i) => (
                        <li key={i} className="text-gray-300">
                          <span className="text-fox-400 mr-2">▹</span>
                          {renderRichText(item)}
                        </li>
                      ))}
                    </ul>
                  );
                case 'paragraph':
                default:
                  return (
                    <p key={idx} className="text-lg">
                      {renderRichText(block.value as string)}
                    </p>
                  );
              }
            })}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostView;
