import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  const [showEmail, setShowEmail] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowEmail(prev => !prev);
    window.location.href = `mailto:${SOCIAL_LINKS.email}`; // opens mail client if available
  };

  return (
    <footer className="bg-cyber-900 border-t border-slate-800 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-2">
            Cyber<span className="text-fox-500">Fox</span>
          </h3>
          <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
            Bushra Saleem | Data Analyst & Cybersecurity Specialist. 
            Leveraging analytical precision to identify threats and secure digital infrastructure.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          <a 
            href={SOCIAL_LINKS.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 bg-slate-800 rounded-full text-gray-400 hover:text-white hover:bg-fox-600 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href={SOCIAL_LINKS.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 bg-slate-800 rounded-full text-gray-400 hover:text-white hover:bg-[#0077b5] transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <div className="relative">
            <button
              onClick={handleEmailClick}
              className="p-2 bg-slate-800 rounded-full text-gray-400 hover:text-white hover:bg-red-500 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </button>
            {showEmail && (
              <p className="absolute mt-10 w-max left-1/2 transform -translate-x-1/2 bg-slate-800 text-gray-200 text-xs px-2 py-1 rounded shadow-lg">
                {SOCIAL_LINKS.email}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-600">
        <p>© {new Date().getFullYear()} Bushra Saleem. All rights reserved.</p>
        <div className="flex items-center space-x-4 mt-2 sm:mt-0">
          <span>System Status: <span className="text-green-500">Operational</span></span>
          <span>Encryption: <span className="text-fox-500">Active</span></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
