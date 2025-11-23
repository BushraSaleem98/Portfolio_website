
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import FoxChat from './components/FoxChat';
import Home from './views/Home';
import Journey from './views/Journey';
import BlogPostView from './views/BlogPostView';
import Skills from './views/Skills';
import Projects from './views/Projects';
import Contact from './views/Contact';
import { SOCIAL_LINKS } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const Footer = () => (
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

      <div className="flex items-center space-x-6">
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
        <a 
          href={`mailto:${SOCIAL_LINKS.email}`}
          className="p-2 bg-slate-800 rounded-full text-gray-400 hover:text-white hover:bg-red-500 transition-all duration-300"
          aria-label="Email"
        >
          <Mail className="w-5 h-5" />
        </a>
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

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-cyber-900 text-slate-100 font-sans selection:bg-fox-500/30 selection:text-fox-200">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/journey/:id" element={<BlogPostView />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <FoxChat />
      </div>
    </Router>
  );
};

export default App;
