
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal, Shield, Brain, Zap, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: <Shield className="w-4 h-4" /> },
    { name: 'Journey', path: '/journey', icon: <Terminal className="w-4 h-4" /> },
    { name: 'Skills', path: '/skills', icon: <Brain className="w-4 h-4" /> },
    { name: 'Projects', path: '/projects', icon: <Zap className="w-4 h-4" /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-cyber-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl">🦊</span>
              <span className="font-mono text-xl font-bold text-white tracking-tighter">
                Cyber<span className="text-fox-500">Fox</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-fox-500/10 text-fox-500 border border-fox-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
              
              {/* Contact Button */}
              <Link 
                to="/contact"
                className="ml-4 flex items-center space-x-2 px-4 py-2 rounded-full bg-fox-600 hover:bg-fox-700 text-white text-sm font-medium transition-all shadow-lg shadow-fox-500/20"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </Link>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-cyber-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-2 block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'bg-fox-500/10 text-fox-500'
                    : 'text-gray-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            
            <Link 
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2 block px-3 py-2 rounded-md text-base font-medium text-white bg-fox-600 hover:bg-fox-700 mt-4"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
