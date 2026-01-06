import { useScrollAnimation } from '../hooks/useScrollAnimation';
import certOracle from 'figma:asset/a8762439858a819ca8b11a84426676a0a8e44284.png';
import certSocial from 'figma:asset/7b34a4a5c29f2f20590114481bf599cddd9c6167.png';
import certJava from 'figma:asset/93b3e5e20854df09d028a1fd1a9d5509b3115e8a.png';
import certLinux from 'figma:asset/8db994931827480c3d2b39bd37f7f8f83880a2ba.png';
import certGit from 'figma:asset/2d3d6bef85f61538b4659af77563879bd0ec12d1.png';
import certVideo from 'figma:asset/7220eb429b73221c699eafa9c260e73898b8b30f.png';
import { useState } from 'react';

interface Certification {
  title: string;
  image: string;
  institution: string;
  hours: string;
}

const certifications: Certification[] = [
  {
    title: 'Banco de dados Oracle',
    image: certOracle,
    institution: 'FIAP - Nano Course',
    hours: '60 horas'
  },
  {
    title: 'Formação Social e Sustentabilidade',
    image: certSocial,
    institution: 'FIAP - Nano Course',
    hours: '80 horas'
  },
  {
    title: 'Java Development',
    image: certJava,
    institution: 'FIAP - Nano Course',
    hours: '60 horas'
  },
  {
    title: 'Linux Fundamentos',
    image: certLinux,
    institution: 'FIAP - Nano Course',
    hours: '40 horas'
  },
  {
    title: 'Git e GitHub: Dominando Controle de Versão de Código',
    image: certGit,
    institution: 'Alura',
    hours: '8 horas'
  },
  {
    title: 'Workshop de vídeo com IA',
    image: certVideo,
    institution: 'Human Academy',
    hours: '12 horas'
  }
];

interface CertificationsProps {
  darkMode: boolean;
}

export function Certifications({ darkMode }: CertificationsProps) {
  const [ref, isVisible] = useScrollAnimation();
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section id="certificacoes" ref={ref} className={`py-20 px-6 transition-colors duration-300 ${darkMode ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-[32px] font-semibold mb-12 text-center ${darkMode ? 'text-[#C3A686]' : 'text-[#6D5D4B]'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Certificações
          </h2>
        
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  darkMode ? 'bg-[#2a2a2a]' : 'bg-[#F5F0E6]'
                }`}
                onClick={() => setSelectedCert(cert.image)}
              >
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                
                <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-[#333333]'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {cert.title}
                </h3>
                
                <p className={`text-sm mb-1 ${darkMode ? 'text-gray-400' : 'text-[#6D5D4B]'}`} style={{ fontFamily: 'Lato, sans-serif' }}>
                  {cert.institution}
                </p>
                
                <p className={`text-sm ${darkMode ? 'text-[#C3A686]' : 'text-[#B99C7A]'}`} style={{ fontFamily: 'Lato, sans-serif' }}>
                  {cert.hours}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal para visualizar certificado em tamanho completo */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div className="max-w-4xl w-full">
            <img
              src={selectedCert}
              alt="Certificado"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}