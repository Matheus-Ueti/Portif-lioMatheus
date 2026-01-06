import { Mail, Phone, Download } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ContactProps {
  darkMode: boolean;
}

export function Contact({ darkMode }: ContactProps) {
  const [ref, isVisible] = useScrollAnimation();

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/curriculo.doc';
    link.download = 'Matheus_Munuera_Curriculo.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contato" ref={ref} className={`py-20 px-6 transition-colors duration-300 ${darkMode ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-[32px] font-semibold mb-6 ${darkMode ? 'text-[#C3A686]' : 'text-[#6D5D4B]'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Vamos Conversar?
          </h2>
        
          <p className={`text-[16px] mb-12 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-[#333333]'}`} style={{ fontFamily: 'Lato, sans-serif' }}>
            Estou aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato.
          </p>
        
          <div className="grid md:grid-cols-2 gap-6 mb-10 max-w-2xl mx-auto">
            <a
              href="mailto:matheusueti@gmail.com"
              className={`flex items-center gap-3 p-4 rounded-lg transition-all duration-300 group ${darkMode ? 'bg-[#2a2a2a] hover:bg-[#C3A686]' : 'bg-[#F5F0E6] hover:bg-[#B99C7A]'}`}
            >
              <Mail className={`w-6 h-6 transition-colors duration-300 ${darkMode ? 'text-[#C3A686] group-hover:text-[#0a0a0a]' : 'text-[#B99C7A] group-hover:text-white'}`} />
              <div className="text-left">
                <p className={`text-sm transition-colors duration-300 ${darkMode ? 'text-gray-400 group-hover:text-[#0a0a0a]/80' : 'text-[#6D5D4B] group-hover:text-white/80'}`} style={{ fontFamily: 'Lato, sans-serif' }}>
                  E-mail
                </p>
                <p className={`transition-colors duration-300 ${darkMode ? 'text-white group-hover:text-[#0a0a0a]' : 'text-[#333333] group-hover:text-white'}`} style={{ fontFamily: 'Lato, sans-serif' }}>
                  matheusueti@gmail.com
                </p>
              </div>
            </a>
          
            <a
              href="tel:+5515998125180"
              className={`flex items-center gap-3 p-4 rounded-lg transition-all duration-300 group ${darkMode ? 'bg-[#2a2a2a] hover:bg-[#C3A686]' : 'bg-[#F5F0E6] hover:bg-[#B99C7A]'}`}
            >
              <Phone className={`w-6 h-6 transition-colors duration-300 ${darkMode ? 'text-[#C3A686] group-hover:text-[#0a0a0a]' : 'text-[#B99C7A] group-hover:text-white'}`} />
              <div className="text-left">
                <p className={`text-sm transition-colors duration-300 ${darkMode ? 'text-gray-400 group-hover:text-[#0a0a0a]/80' : 'text-[#6D5D4B] group-hover:text-white/80'}`} style={{ fontFamily: 'Lato, sans-serif' }}>
                  Telefone
                </p>
                <p className={`transition-colors duration-300 ${darkMode ? 'text-white group-hover:text-[#0a0a0a]' : 'text-[#333333] group-hover:text-white'}`} style={{ fontFamily: 'Lato, sans-serif' }}>
                  (15) 99812-5180
                </p>
              </div>
            </a>
          </div>
        
          <button
            onClick={handleDownloadCV}
            className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg transition-colors duration-300 ${darkMode ? 'bg-[#C3A686] text-[#0a0a0a] hover:bg-[#B99C7A]' : 'bg-[#B99C7A] text-white hover:bg-[#A68B6A]'}`}
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            <Download className="w-5 h-5" />
            Baixar meu Currículo (.doc)
          </button>
        </div>
      </div>
      
      <footer className={`mt-16 pt-8 border-t text-center ${darkMode ? 'border-[#2a2a2a]' : 'border-[#F5F0E6]'}`}>
        <p className={darkMode ? 'text-gray-400' : 'text-[#6D5D4B]'} style={{ fontFamily: 'Lato, sans-serif' }}>
          © 2026 Matheus Munuera. Todos os direitos reservados.
        </p>
      </footer>
    </section>
  );
}