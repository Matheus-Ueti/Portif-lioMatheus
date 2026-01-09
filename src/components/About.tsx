import { useScrollAnimation } from '../hooks/useScrollAnimation';
import profileImage from '../assets/caf8cbf5-39bc-453e-ad5a-417f45abbf5a.jpeg';

interface AboutProps {
  darkMode: boolean;
}

export function About({ darkMode }: AboutProps) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="sobre" ref={ref} className={`py-20 px-6 transition-colors duration-300 ${darkMode ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-[32px] font-semibold mb-12 text-center ${darkMode ? 'text-[#C3A686]' : 'text-[#6D5D4B]'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Sobre Mim
          </h2>
        
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className={`text-[16px] leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-[#333333]'}`} style={{ fontFamily: 'Lato, sans-serif' }}>
                Busco uma oportunidade para aprimorar minhas competências como Desenvolvedor Full Stack Júnior. Sou um profissional proativo, com grande facilidade de aprendizado e excelente comunicação interpessoal.
              </p>
              <p className={`text-[16px] leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-[#333333]'}`} style={{ fontFamily: 'Lato, sans-serif' }}>
                Busco uma posição estável, com preferência por um modelo de trabalho que ofereça flexibilidade.
              </p>
              <p className={`text-[16px] font-semibold ${darkMode ? 'text-[#C3A686]' : 'text-[#B99C7A]'}`} style={{ fontFamily: 'Lato, sans-serif' }}>
                ✓ Disponibilidade para mudança e trabalho em outros estados
              </p>
            </div>
          
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Matheus Munuera"
                  className="w-96 h-96 object-cover rounded-full shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}