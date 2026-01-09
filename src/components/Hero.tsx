import { Linkedin, Github } from 'lucide-react';
import { translations, Language } from '../translations';

interface HeroProps {
  darkMode: boolean;
  language: Language;
}

export function Hero({ darkMode, language }: HeroProps) {
  const t = translations[language].hero;
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={`min-h-screen flex items-center justify-center px-6 py-20 transition-colors duration-300 ${darkMode ? 'bg-[#0a0a0a]' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className={`font-bold text-[48px] mb-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-[#333333]'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {t.name}
        </h1>
        <p className={`text-[32px] font-semibold mb-6 transition-colors duration-300 ${darkMode ? 'text-[#C3A686]' : 'text-[#6D5D4B]'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {t.title}
        </p>
        <p className={`text-[16px] max-w-2xl mx-auto mb-8 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-[#333333]'}`} style={{ fontFamily: 'Lato, sans-serif' }}>
          {t.description}
        </p>
        
        <div className="flex gap-4 justify-center mb-8">
          <button
            onClick={() => scrollToSection('projetos')}
            className={`px-8 py-3 rounded-lg transition-all duration-300 ${darkMode ? 'bg-[#C3A686] text-[#0a0a0a] hover:bg-[#B99C7A]' : 'bg-[#B99C7A] text-white hover:bg-[#A68B6A]'}`}
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            {t.viewProjects}
          </button>
          <button
            onClick={() => scrollToSection('contato')}
            className={`px-8 py-3 border-2 rounded-lg transition-all duration-300 ${darkMode ? 'border-[#C3A686] text-[#C3A686] hover:bg-[#C3A686] hover:text-[#0a0a0a]' : 'border-[#B99C7A] text-[#B99C7A] hover:bg-[#B99C7A] hover:text-white'}`}
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            {t.contact}
          </button>
        </div>

        <div className="flex gap-6 justify-center">
          <a
            href="https://www.linkedin.com/in/matheus-munuera-ueti-1721892b7/"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-colors duration-300 ${darkMode ? 'hover:bg-[#2a2a2a]' : 'hover:bg-[#F5F0E6]'}`}
            aria-label="LinkedIn"
          >
            <Linkedin className={`w-6 h-6 ${darkMode ? 'text-[#C3A686]' : 'text-[#B99C7A]'}`} />
          </a>
          <a
            href="https://github.com/Matheus-Ueti"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-colors duration-300 ${darkMode ? 'hover:bg-[#2a2a2a]' : 'hover:bg-[#F5F0E6]'}`}
            aria-label="GitHub"
          >
            <Github className={`w-6 h-6 ${darkMode ? 'text-[#C3A686]' : 'text-[#B99C7A]'}`} />
          </a>
        </div>
      </div>
    </section>
  );
}