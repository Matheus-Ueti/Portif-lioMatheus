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
import { Language } from './translations';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState<Language>('pt');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#0a0a0a]' : 'bg-white'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} language={language} toggleLanguage={toggleLanguage} />
      <Hero darkMode={darkMode} language={language} />
      <About darkMode={darkMode} language={language} />
      <Projects darkMode={darkMode} language={language} />
      <Skills darkMode={darkMode} language={language} />
      <Education darkMode={darkMode} language={language} />
      <Certifications darkMode={darkMode} language={language} />
      <Contact darkMode={darkMode} language={language} />
      <ScrollToTop darkMode={darkMode} />
    </div>
  );
}