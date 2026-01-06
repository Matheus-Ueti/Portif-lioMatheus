import { GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface EducationProps {
  darkMode: boolean;
}

export function Education({ darkMode }: EducationProps) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="formacao" ref={ref} className={`py-20 px-6 transition-colors duration-300 ${darkMode ? 'bg-[#0a0a0a]' : 'bg-[#F5F0E6]'}`}>
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-[32px] font-semibold mb-12 text-center ${darkMode ? 'text-[#C3A686]' : 'text-[#6D5D4B]'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Formação
          </h2>
        
          <div className="max-w-3xl mx-auto">
            <div className={`relative pl-8 pb-8 border-l-2 ${darkMode ? 'border-[#C3A686]' : 'border-[#B99C7A]'}`}>
              <div className={`absolute left-[-13px] top-0 w-6 h-6 rounded-full flex items-center justify-center ${darkMode ? 'bg-[#C3A686]' : 'bg-[#B99C7A]'}`}>
                <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-[#0a0a0a]' : 'bg-white'}`}></div>
              </div>
            
              <div className={`rounded-xl p-6 shadow-md ml-6 ${darkMode ? 'bg-[#2a2a2a]' : 'bg-white'}`}>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-[#C3A686]/20' : 'bg-[#F5F0E6]'}`}>
                    <GraduationCap className={`w-8 h-8 ${darkMode ? 'text-[#C3A686]' : 'text-[#B99C7A]'}`} />
                  </div>
                
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-[#333333]'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Análise e Desenvolvimento de Sistemas
                    </h3>
                    <p className={`font-semibold mb-2 ${darkMode ? 'text-[#C3A686]' : 'text-[#B99C7A]'}`} style={{ fontFamily: 'Lato, sans-serif' }}>
                      FIAP
                    </p>
                    <p className={darkMode ? 'text-gray-300' : 'text-[#333333]'} style={{ fontFamily: 'Lato, sans-serif' }}>
                      Concluído em <span className="font-semibold">12/2025</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}