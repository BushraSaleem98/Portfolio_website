import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import FoxChat from './components/FoxChat';
import Home from './views/Home';
import Journey from './views/Journey';
import BlogPostView from './views/BlogPostView';
import Skills from './views/Skills';
import Projects from './views/Projects';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const Footer = () => (
  <footer className="bg-cyber-900 border-t border-slate-800 py-8 mt-auto">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} CyberFox Journey. Built with React & Tailwind.
      </p>
      <div className="mt-2 flex justify-center space-x-4 text-xs text-slate-600">
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
          </Routes>
        </main>

        <Footer />
        <FoxChat />
      </div>
    </Router>
  );
};

export default App;