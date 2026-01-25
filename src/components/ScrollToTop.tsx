import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface ScrollToTopProps {
  isDark: boolean;
}

export function ScrollToTop({ isDark }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollY > 200);
    };

    // Check immediately
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-[9999] p-4 rounded-full shadow-2xl transition-all duration-300 ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      } ${
        isDark
          ? 'bg-white text-neutral-900 hover:bg-neutral-100'
          : 'bg-neutral-900 text-white hover:bg-neutral-800'
      } hover:scale-110 active:scale-95`}
      aria-label="Scroll to top"
      style={{ 
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9999
      }}
    >
      <ArrowUp size={24} />
    </button>
  );
}
