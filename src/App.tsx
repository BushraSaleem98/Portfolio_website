import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import FoxChat from './components/FoxChat';
import Footer from './components/Footer';
import Home from './views/Home';
import Journey from './views/Journey';
import BlogPostView from './views/BlogPostView';
import Skills from './views/Skills';
import Projects from './views/Projects';
import Contact from './views/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

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
