import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface HeroProps {
  isDark: boolean;
}

export function Hero({ isDark }: HeroProps) {
  const navigate = useNavigate();

  const handleViewWork = () => {
    navigate('/projects');
    window.scrollTo(0, 0);
  };

  return (
    <section id="hero" className={`min-h-screen flex items-center justify-center ${
      isDark ? "bg-neutral-800" : "bg-neutral-100"
    } pt-20`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`text-4xl md:text-6xl lg:text-7xl mb-6 ${isDark ? "text-white" : "text-neutral-900"}`}
        >
          simplistic.studio
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className={`${isDark ? "text-neutral-300" : "text-neutral-600"} max-w-2xl mx-auto mb-12`}
        >
          Creating timeless spaces through minimalist design and thoughtful architecture. 
          We transform visions into reality with clean lines, natural materials, and refined elegance.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          onClick={handleViewWork}
          className={`px-8 py-4 ${
            isDark ? "bg-white text-neutral-900 hover:bg-neutral-100" : "bg-neutral-900 text-white hover:bg-neutral-800"
          } transition-colors`}
        >
          View Our Work
        </motion.button>
      </div>
    </section>
  );
}