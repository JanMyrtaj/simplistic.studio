import { Ruler, Home, Lightbulb, Palette } from "lucide-react";
import { motion } from 'framer-motion';

const services = [
  {
    icon: Ruler,
    title: "Architectural Design",
    description: "Complete architectural services from concept to construction, focusing on minimalist principles and sustainable solutions."
  },
  {
    icon: Home,
    title: "Interior Design",
    description: "Thoughtfully curated interior spaces that balance aesthetics with functionality, creating harmonious living environments."
  },
  {
    icon: Lightbulb,
    title: "Space Planning",
    description: "Strategic spatial organization that maximizes efficiency and flow while maintaining clean, uncluttered aesthetics."
  },
  {
    icon: Palette,
    title: "Design Consultation",
    description: "Expert guidance on material selection, color palettes, and design direction to bring your vision to life."
  }
];

interface ServicesProps {
  isDark: boolean;
}

export function Services({ isDark }: ServicesProps) {
  return (
    <section id="services" className={`py-24 ${isDark ? "bg-neutral-900" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className={isDark ? "text-white" : "text-neutral-900"}>
            Our Services
          </h2>
          <p className={`${isDark ? "text-neutral-300" : "text-neutral-600"} max-w-2xl mx-auto`}>
            Comprehensive design solutions tailored to create exceptional spaces that reflect your unique style and needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="text-center"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${
                isDark ? "bg-neutral-800 text-white" : "bg-neutral-100 text-neutral-900"
              } mb-6`}>
                <service.icon size={32} />
              </div>
              <h3 className={`${isDark ? "text-white" : "text-neutral-900"} mb-3`}>
                {service.title}
              </h3>
              <p className={isDark ? "text-neutral-300" : "text-neutral-600"}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}