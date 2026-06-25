import { Briefcase } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { translations, Language } from '../translations';

interface ExperienceProps {
  darkMode: boolean;
  language: Language;
}

export function Experience({ darkMode, language }: ExperienceProps) {
  const [ref, isVisible] = useScrollAnimation();
  const t = translations[language].experience;

  return (
    <section id="experiencia" ref={ref} className={`py-20 px-6 transition-colors duration-300 ${darkMode ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-[32px] font-semibold mb-12 text-center ${darkMode ? 'text-[#C3A686]' : 'text-[#6D5D4B]'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t.title}
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className={`relative pl-8 border-l-2 ${darkMode ? 'border-[#C3A686]' : 'border-[#B99C7A]'}`}>
              <div className={`absolute left-[-13px] top-0 w-6 h-6 rounded-full flex items-center justify-center ${darkMode ? 'bg-[#C3A686]' : 'bg-[#B99C7A]'}`}>
                <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-[#1a1a1a]' : 'bg-white'}`}></div>
              </div>

              <div className={`rounded-xl p-6 shadow-md ml-6 ${darkMode ? 'bg-[#2a2a2a]' : 'bg-[#F5F0E6]'}`}>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-[#C3A686]/20' : 'bg-white'}`}>
                    <Briefcase className={`w-8 h-8 ${darkMode ? 'text-[#C3A686]' : 'text-[#B99C7A]'}`} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-[#333333]'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {t.role}
                      </h3>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${darkMode ? 'bg-[#C3A686]/20 text-[#C3A686]' : 'bg-[#B99C7A]/20 text-[#6D5D4B]'}`}>
                        {t.badge}
                      </span>
                    </div>
                    <p className={`font-semibold mb-2 ${darkMode ? 'text-[#C3A686]' : 'text-[#B99C7A]'}`} style={{ fontFamily: 'Lato, sans-serif' }}>
                      {t.company}
                    </p>
                    <p className={`mb-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} style={{ fontFamily: 'Lato, sans-serif' }}>
                      {t.period} · {t.location}
                    </p>
                    <p className={`text-[15px] leading-relaxed ${darkMode ? 'text-gray-300' : 'text-[#333333]'}`} style={{ fontFamily: 'Lato, sans-serif' }}>
                      {t.description}
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
