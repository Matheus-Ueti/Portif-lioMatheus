import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detectar seção ativa
      const sections = ['hero', 'sobre', 'projetos', 'habilidades', 'formacao', 'certificacoes', 'contato'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'hero', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'formacao', label: 'Formação' },
    { id: 'certificacoes', label: 'Certificações' },
    { id: 'contato', label: 'Contato' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? 'bg-[#1a1a1a]/95 backdrop-blur-md shadow-lg'
            : 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className={`font-bold text-xl ${darkMode ? 'text-[#C3A686]' : 'text-[#6D5D4B]'}`}
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            MM
          </button>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors duration-300 ${
                  activeSection === item.id
                    ? darkMode
                      ? 'text-[#C3A686] font-semibold'
                      : 'text-[#B99C7A] font-semibold'
                    : darkMode
                    ? 'text-gray-300 hover:text-[#C3A686]'
                    : 'text-[#333333] hover:text-[#B99C7A]'
                }`}
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg transition-colors duration-300 ${
              darkMode ? 'bg-[#2a2a2a] text-[#C3A686]' : 'bg-[#F5F0E6] text-[#B99C7A]'
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
}