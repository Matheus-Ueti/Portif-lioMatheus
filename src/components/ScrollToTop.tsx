import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface ScrollToTopProps {
  darkMode: boolean;
}

export function ScrollToTop({ darkMode }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-40 ${
        darkMode
          ? 'bg-[#C3A686] text-[#1a1a1a] hover:bg-[#B99C7A]'
          : 'bg-[#B99C7A] text-white hover:bg-[#A68B6A]'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}
