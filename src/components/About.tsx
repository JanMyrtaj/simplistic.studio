import { motion } from 'framer-motion';
import lightModeImage from "figma:asset/a6d0b198006faf3ea52b58400921362066c2e49b.png";
import darkModeImage from "figma:asset/700cf7d7da9dfcdcabc90929331ff17dee081720.png";

interface AboutProps {
  isDark: boolean;
}

export function About({ isDark }: AboutProps) {
  return (
    <section id="about" className={`py-24 ${isDark ? "bg-neutral-800" : "bg-neutral-100"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className={`${isDark ? "text-white" : "text-neutral-900"} mb-6`}>
              About simplistic.studio
            </h2>
            <div className={`space-y-4 ${isDark ? "text-neutral-300" : "text-neutral-600"}`}>
              <p>
                We are a contemporary architecture studio specializing in minimalist design that celebrates simplicity, 
                functionality, and timeless elegance. Our philosophy centers on creating spaces that breathe, 
                allowing natural materials and clean lines to speak for themselves.
              </p>
              <p>
                With a keen eye for detail and a deep understanding of spatial dynamics, we craft environments 
                that enhance daily living while maintaining a sense of calm and sophistication. Every project 
                is approached with fresh perspective, ensuring unique solutions tailored to our clients' vision.
              </p>
              <p>
                Our work seamlessly blends modern aesthetics with practical functionality, creating interiors 
                that are not only visually stunning but also comfortable and livable for years to come.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-96 lg:h-[500px] overflow-hidden rounded-lg"
          >
            <img 
              src={isDark ? darkModeImage : lightModeImage} 
              alt="Simplistic.studio Architecture Banner" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}