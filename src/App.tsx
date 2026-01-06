import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { useState } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#0a0a0a]' : 'bg-white'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Education darkMode={darkMode} />
      <Certifications darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <ScrollToTop darkMode={darkMode} />
    </div>
  );
}