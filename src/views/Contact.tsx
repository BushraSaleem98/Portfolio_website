
import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* GitHub Card */}
          <a 
            href={SOCIAL_LINKS.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-fox-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6 text-white group-hover:bg-fox-500 group-hover:text-white transition-colors duration-300">
              <Github className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">GitHub</h3>
            <p className="text-sm text-gray-500 mb-6">Check out my code repositories and contributions.</p>
            <span className="mt-auto flex items-center text-fox-500 text-sm font-medium">
              View Profile <ExternalLink className="w-3 h-3 ml-2" />
            </span>
          </a>

          {/* LinkedIn Card */}
          <a 
            href={SOCIAL_LINKS.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-fox-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6 text-white group-hover:bg-[#0077b5] group-hover:text-white transition-colors duration-300">
              <Linkedin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
            <p className="text-sm text-gray-500 mb-6">Connect with me professionally.</p>
            <span className="mt-auto flex items-center text-fox-500 text-sm font-medium">
              Connect <ExternalLink className="w-3 h-3 ml-2" />
            </span>
          </a>

          {/* Email Card */}
          <a 
            href={`mailto:${SOCIAL_LINKS.email}`} 
            className="group relative bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-fox-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6 text-white group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-sm text-gray-500 mb-6">Send me a message directly.</p>
            <span className="mt-auto flex items-center text-fox-500 text-sm font-medium">
              Send Mail <ExternalLink className="w-3 h-3 ml-2" />
            </span>
          </a>
        </div>

        <div className="mt-20 p-8 bg-slate-900/50 border border-slate-800 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Looking for a collaboration?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Whether it's a security audit, a data analysis project, or just a chat about the latest in InfoSec, I'd love to hear from you.
          </p>
          <a 
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-fox-600 hover:bg-fox-700 rounded-full transition-colors shadow-lg shadow-fox-500/20"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
