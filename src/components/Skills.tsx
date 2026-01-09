import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { translations, Language } from '../translations';

interface SkillCategory {
  titleKey: 'languages' | 'databases' | 'tools' | 'idioms';
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    titleKey: 'languages',
    skills: ['C#', 'Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'TypeScript']
  },
  {
    titleKey: 'databases',
    skills: ['Oracle', 'SQL', 'PostgreSQL']
  },
  {
    titleKey: 'tools',
    skills: ['Spring Boot', 'GIT', 'React', 'Node.js', 'Docker', 'DevOps', 'Linux']
  },
  {
    titleKey: 'idioms',
    skills: ['Inglês – Intermediário B2+', 'Português – Nativo', 'Espanhol – Intermediário', 'Japonês – Básico']
  }
];

interface SkillsProps {
  darkMode: boolean;
  language: Language;
}

export function Skills({ darkMode, language }: SkillsProps) {
  const [ref, isVisible] = useScrollAnimation();
  const t = translations[language].skills;

  return (
    <section id="habilidades" ref={ref} className={`py-20 px-6 transition-colors duration-300 ${darkMode ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-[32px] font-semibold mb-12 text-center ${darkMode ? 'text-[#C3A686]' : 'text-[#6D5D4B]'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t.title}
          </h2>
        
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className={`rounded-xl p-6 ${darkMode ? 'bg-[#2a2a2a]' : 'bg-[#F9F9F9]'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-[#C3A686]' : 'text-[#6D5D4B]'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {t[category.titleKey]}
                </h3>
              
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-4 py-2 rounded-lg border transition-colors duration-300 ${darkMode ? 'bg-[#1a1a1a] text-gray-300 border-[#C3A686] hover:bg-[#2a2a2a]' : 'bg-white text-[#333333] border-[#B99C7A] hover:bg-[#F5F0E6]'}`}
                      style={{ fontFamily: 'Lato, sans-serif' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}