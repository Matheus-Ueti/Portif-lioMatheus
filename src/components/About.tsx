import { useScrollAnimation } from '../hooks/useScrollAnimation';
import profileImage from '../assets/caf8cbf5-39bc-453e-ad5a-417f45abbf5a.jpeg';
import { translations, Language } from '../translations';

interface AboutProps {
  darkMode: boolean;
  language: Language;
}

export function About({ darkMode, language }: AboutProps) {
  const [ref, isVisible] = useScrollAnimation();
  const t = translations[language].about;

  return (
    <section id="sobre" ref={ref} className={`py-20 px-6 transition-colors duration-300 ${darkMode ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-[32px] font-semibold mb-12 text-center ${darkMode ? 'text-[#C3A686]' : 'text-[#6D5D4B]'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t.title}
          </h2>
        
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className={`text-[16px] leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-[#333333]'}`} style={{ fontFamily: 'Lato, sans-serif' }}>
                {t.paragraph1}
              </p>
              <p className={`text-[16px] leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-[#333333]'}`} style={{ fontFamily: 'Lato, sans-serif' }}>
                {t.paragraph2}
              </p>
              <p className={`text-[16px] font-semibold ${darkMode ? 'text-[#C3A686]' : 'text-[#B99C7A]'}`} style={{ fontFamily: 'Lato, sans-serif' }}>
                {t.availability}
              </p>
            </div>
          
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Matheus Munuera"
                  className="w-[28rem] h-[28rem] object-cover rounded-full shadow-xl aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}