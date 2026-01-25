import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { projectId } from '../utils/supabase/info';
import { motion } from 'motion/react';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  createdAt: string;
}

interface ProjectsPageProps {
  isDark: boolean;
}

export function ProjectsPage({ isDark }: ProjectsPageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const serverUrl = `https://${projectId}.supabase.co/functions/v1/make-server-548e39aa`;
      const response = await fetch(`${serverUrl}/projects`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        if (data.projects && Array.isArray(data.projects) && data.projects.length > 0) {
          // Validate project structure
          const validProjects = data.projects.filter((p: Project) => 
            p && 
            typeof p.id === 'string' && 
            typeof p.title === 'string' && 
            typeof p.imageUrl === 'string' &&
            typeof p.description === 'string'
          );
          setProjects(validProjects);
        }
      }
    } catch (err) {
      // Silently fall back to empty projects - backend may not be available
    } finally {
      setIsLoading(false);
    }
  };

  const nextProject = () => {
    if (projects.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }
  };

  const prevProject = () => {
    if (projects.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }
  };

  if (isLoading) {
    return (
      <div className={`min-h-screen ${isDark ? "bg-neutral-900" : "bg-white"} pt-20 flex items-center justify-center`}>
        <div className={`${isDark ? "text-white" : "text-neutral-900"}`}>Loading projects...</div>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className={`min-h-screen ${isDark ? "bg-neutral-900" : "bg-white"} pt-20`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h1 className={`mb-4 ${isDark ? "text-white" : "text-neutral-900"}`}>
              Our Projects
            </h1>
            <p className={`${isDark ? "text-neutral-300" : "text-neutral-600"} max-w-2xl mx-auto`}>
              No projects yet. Check back soon for our latest work.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const currentProject = projects[currentIndex];

  return (
    <div className={`min-h-screen ${isDark ? "bg-neutral-900" : "bg-white"} pt-20`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className={`mb-4 ${isDark ? "text-white" : "text-neutral-900"}`}>
            Our Projects
          </h1>
          <p className={`${isDark ? "text-neutral-300" : "text-neutral-600"} max-w-2xl mx-auto`}>
            Explore our portfolio of carefully crafted spaces that embody minimalist elegance and functional beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image on the left with navigation arrows */}
          <motion.div 
            key={`image-${currentIndex}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <img
              src={currentProject.imageUrl}
              alt={currentProject.title}
              className="w-full h-auto object-cover"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23ddd" width="800" height="600"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage not available%3C/text%3E%3C/svg%3E';
              }}
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevProject}
              className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full ${
                isDark ? "bg-white/90 text-neutral-900 hover:bg-white" : "bg-neutral-900/90 text-white hover:bg-neutral-900"
              } transition-colors shadow-lg`}
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextProject}
              className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full ${
                isDark ? "bg-white/90 text-neutral-900 hover:bg-white" : "bg-neutral-900/90 text-white hover:bg-neutral-900"
              } transition-colors shadow-lg`}
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image counter */}
            <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full ${
              isDark ? "bg-white/90 text-neutral-900" : "bg-neutral-900/90 text-white"
            }`}>
              {currentIndex + 1} / {projects.length}
            </div>
          </motion.div>

          {/* Description on the right */}
          <motion.div 
            key={`description-${currentIndex}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <div>
              <span className={`${isDark ? "text-neutral-400" : "text-neutral-500"} uppercase tracking-wider`}>
                {currentProject.category}
              </span>
              <h2 className={`${isDark ? "text-white" : "text-neutral-900"} mt-3 mb-4`}>
                {currentProject.title}
              </h2>
            </div>

            <p className={`${isDark ? "text-neutral-300" : "text-neutral-600"} leading-relaxed`}>
              {currentProject.description}
            </p>

            <div className={`border-t ${isDark ? "border-neutral-800" : "border-neutral-200"} pt-6 mt-6`}>
              <h3 className={`${isDark ? "text-white" : "text-neutral-900"} mb-3`}>
                Project Highlights
              </h3>
              <ul className={`space-y-2 ${isDark ? "text-neutral-300" : "text-neutral-600"}`}>
                <li>• Minimalist design philosophy</li>
                <li>• Premium natural materials</li>
                <li>• Optimal space utilization</li>
                <li>• Timeless aesthetic appeal</li>
              </ul>
            </div>

            {/* Navigation dots */}
            <div className="flex gap-2 pt-4">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? `w-8 ${isDark ? "bg-white" : "bg-neutral-900"}`
                      : `w-2 ${isDark ? "bg-neutral-700" : "bg-neutral-300"}`
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}