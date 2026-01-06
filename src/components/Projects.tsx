import { ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Project {
  title: string;
  tags: string[];
  description: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: 'NEXTJOB',
    tags: ['Firebase', 'TypeScript', 'React'],
    description: 'Aplicativo com IA implementada que ajuda profissionais de TI a receberem feedback detalhado e personalizado do currículo.',
    link: '#'
  },
  {
    title: 'EcoSafe',
    tags: ['Firebase', 'TypeScript', 'React', 'Java', 'Spring Boot'],
    description: 'Aplicativo de gerenciamento ambiental focado em monitoramento e controle de práticas sustentáveis.',
    link: '#'
  },
  {
    title: 'Zoog (Mottu)',
    tags: ['TypeScript', 'React'],
    description: 'Aplicativo em contribuição com a Mottu para gerenciamento eficiente de motos nos pátios da empresa.',
    link: '#'
  },
  {
    title: 'Landing Page - Advogada Izandra',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description: 'Landing page profissional e moderna para apresentação de serviços jurídicos.',
    link: '#'
  },
  {
    title: 'Landing Page - Dr. Caio Munuera Ueti',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description: 'Landing page para cirurgião bucomaxilofacial com design elegante e responsivo.',
    link: '#'
  }
];

interface ProjectsProps {
  darkMode: boolean;
}

export function Projects({ darkMode }: ProjectsProps) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="projetos" ref={ref} className={`py-20 px-6 transition-colors duration-300 ${darkMode ? 'bg-[#0a0a0a]' : 'bg-[#F5F0E6]'}`}>
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-[32px] font-semibold mb-12 text-center ${darkMode ? 'text-[#C3A686]' : 'text-[#6D5D4B]'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Meus Projetos
          </h2>
        
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-[#2a2a2a]' : 'bg-white'
                } ${index >= 3 ? 'md:col-span-1' : ''}`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-[#333333]'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {project.title}
                </h3>
              
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
              
                <p className={`text-[16px] mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-[#333333]'}`} style={{ fontFamily: 'Lato, sans-serif' }}>
                  {project.description}
                </p>
              
                {project.link && (
                  <a
                    href={project.link}
                    className={`inline-flex items-center gap-2 transition-colors duration-300 ${darkMode ? 'text-[#C3A686] hover:text-[#B99C7A]' : 'text-[#B99C7A] hover:text-[#A68B6A]'}`}
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  >
                    Ver no GitHub
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}