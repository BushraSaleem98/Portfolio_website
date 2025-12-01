import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";                 // Correct file you provided
import Journey from "./views/Journey";
import BlogPostView from "./views/BlogPostView";
import Portfolio from "./views/Portfolio";
import Contact from "./views/Contact";
import Footer from "./components/Footer";

import Skills from "./views/Skills";             // Missing route fixed
import Projects from "./views/Projects";         // Missing route fixed

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journey" element={<Journey />} />

        {/* Added missing routes */}
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        
        {/* Blog dynamic route */}
        <Route path="/journey/:slug" element={<BlogPostView />} />

        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
