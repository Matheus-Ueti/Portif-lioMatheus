import { ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { translations, Language } from '../translations';

interface Project {
  title: string;
  tags: string[];
  descriptionKey: 'nextjob' | 'ecosafe' | 'zoog' | 'landing1' | 'landing2';
  link?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: 'NEXTJOB',
    tags: ['Firebase', 'TypeScript', 'React'],
    descriptionKey: 'nextjob',
    link: 'https://www.linkedin.com/in/matheus-ueti-1721892b7/',
    image: '/src/assets/projects/nextjob.png'
  },
  {
    title: 'EcoSafe',
    tags: ['Firebase', 'TypeScript', 'React', 'Java', 'Spring Boot'],
    descriptionKey: 'ecosafe',
    link: 'https://www.linkedin.com/in/matheus-ueti-1721892b7/',
    image: '/src/assets/projects/ecosafe.png'
  },
  {
    title: 'Zoog (Mottu)',
    tags: ['TypeScript', 'React'],
    descriptionKey: 'zoog',
    link: 'https://www.linkedin.com/in/matheus-ueti-1721892b7/',
    image: '/src/assets/projects/zoog.png'
  },
  {
    title: 'Landing Page - Advogada Izandra',
    tags: ['HTML', 'CSS', 'JavaScript'],
    descriptionKey: 'landing1',
    link: 'https://www.linkedin.com/in/matheus-ueti-1721892b7/',
    image: '/src/assets/projects/advogada-izandra.png'
  },
  {
    title: 'Landing Page - Dr. Caio Munuera Ueti',
    tags: ['HTML', 'CSS', 'JavaScript'],
    descriptionKey: 'landing2',
    link: 'https://www.linkedin.com/in/matheus-ueti-1721892b7/',
    image: '/src/assets/projects/dr-caio.png'
  }
];

interface ProjectsProps {
  darkMode: boolean;
  language: Language;
}

export function Projects({ darkMode, language }: ProjectsProps) {
  const [ref, isVisible] = useScrollAnimation();
  const t = translations[language].projects;

  return (
    <section id="projetos" ref={ref} className={`py-20 px-6 transition-colors duration-300 ${darkMode ? 'bg-[#0a0a0a]' : 'bg-[#F5F0E6]'}`}>
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-[32px] font-semibold mb-12 text-center ${darkMode ? 'text-[#C3A686]' : 'text-[#6D5D4B]'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t.title}
          </h2>
        
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-[#2a2a2a]' : 'bg-white'
                } ${index >= 3 ? 'md:col-span-1' : ''}`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-[#333333]'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {project.title}
                  </h3>
                  <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-[#333333]'}`} style={{ fontFamily: 'Lato, sans-serif' }}>
                    {t[project.descriptionKey]}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-[#C3A686]/20 text-[#C3A686]' : 'bg-[#F5F0E6] text-[#6D5D4B]'}`}
                        style={{ fontFamily: 'Lato, sans-serif' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
              
                  {project.link && (
                    <a
                      href={project.link}
                      className={`inline-flex items-center gap-2 transition-colors duration-300 ${darkMode ? 'text-[#C3A686] hover:text-[#B99C7A]' : 'text-[#B99C7A] hover:text-[#A68B6A]'}`}
                      style={{ fontFamily: 'Lato, sans-serif' }}
                    >
                      {t.viewGithub}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}