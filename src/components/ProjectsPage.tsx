import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { projectId } from '../utils/supabase/info';
import { motion, AnimatePresence } from 'motion/react';
import React from "react";

// Gjakova, Kosovo
import projectLivingKitchen from '../assets/gjakova/project-living-kitchen.png';
import projectLivingRoom from '../assets/gjakova/project-living-room.png';
import projectLivingDining from '../assets/gjakova/project-living-dining.png';
import image00004 from '../assets/gjakova/image00004.jpeg';
import image00005 from '../assets/gjakova/image00005.jpeg';
import image00006 from '../assets/gjakova/image00006.jpeg';
import image00007 from '../assets/gjakova/image00007.jpeg';
import image00008 from '../assets/gjakova/image00008.jpeg';
import image00009 from '../assets/gjakova/image00009.jpeg';
import image00010 from '../assets/gjakova/image00010.jpeg';
import image00011 from '../assets/gjakova/image00011.jpeg';
import image00012 from '../assets/gjakova/image00012.jpeg';
import image00013 from '../assets/gjakova/image00013.jpeg';
import image00014 from '../assets/gjakova/image00014.jpeg';
import image00015 from '../assets/gjakova/image00015.jpeg';
import image00016 from '../assets/gjakova/image00016.jpeg';
import image00017 from '../assets/gjakova/image00017.jpeg';
import image00018 from '../assets/gjakova/image00018.jpeg';
import image00019 from '../assets/gjakova/image00019.jpeg';
import image00020 from '../assets/gjakova/image00020.jpeg';
import image00021 from '../assets/gjakova/image00021.jpeg';
import image00022 from '../assets/gjakova/image00022.jpeg';
import image00023 from '../assets/gjakova/image00023.jpeg';
import image00024 from '../assets/gjakova/image00024.jpeg';
import image00025 from '../assets/gjakova/image00025.jpeg';
import image00026 from '../assets/gjakova/image00026.jpeg';
import image00027 from '../assets/gjakova/image00027.jpeg';
import image00028 from '../assets/gjakova/image00028.jpeg';
import image00029 from '../assets/gjakova/image00029.jpeg';
import image00030 from '../assets/gjakova/image00030.jpeg';
import image00031 from '../assets/gjakova/image00031.jpeg';
import image00032 from '../assets/gjakova/image00032.jpeg';
// Zurich, Switzerland
import projectKitchen from '../assets/zurich/project-kitchen.png';
import projectBathroom from '../assets/zurich/project-bathroom.png';
import image00064 from '../assets/zurich/image00064.jpeg';
import image00065 from '../assets/zurich/image00065.jpeg';
import image00066 from '../assets/zurich/image00066.jpeg';
import image00067 from '../assets/zurich/image00067.jpeg';
import image00068 from '../assets/zurich/image00068.jpeg';
import image00069 from '../assets/zurich/image00069.jpeg';
import image00070 from '../assets/zurich/image00070.jpeg';
import image00071 from '../assets/zurich/image00071.jpeg';
import image00072 from '../assets/zurich/image00072.jpeg';
import image00073 from '../assets/zurich/image00073.jpeg';
import image00074 from '../assets/zurich/image00074.jpeg';
import image00075 from '../assets/zurich/image00075.jpeg';
import image00076 from '../assets/zurich/image00076.jpeg';
import image00077 from '../assets/zurich/image00077.jpeg';
// Prishtina, Kosovo
import prishtinaImage1 from '../assets/prishtina/IMG_8992.jpeg';
import prishtinaImage2 from '../assets/prishtina/IMG_8993.jpeg';
import prishtinaImage3 from '../assets/prishtina/IMG_8994.jpeg';
import prishtinaImage4 from '../assets/prishtina/IMG_8995.jpeg';
import prishtinaImage5 from '../assets/prishtina/IMG_8996.jpeg';
import prishtinaImage6 from '../assets/prishtina/IMG_8997.jpeg';
import prishtinaImage7 from '../assets/prishtina/IMG_8998.jpeg';
import prishtinaImage8 from '../assets/prishtina/IMG_8999.jpeg';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  createdAt: string;
}

const DEFAULT_PROJECTS: Project[] = [
  { id: 'default-1', title: 'Open-Plan Living & Kitchen', description: 'Open-plan living and kitchen with a stone fireplace, light-toned seating, and herringbone wood flooring.', imageUrl: projectLivingKitchen, category: 'Gjakova, Kosovo', createdAt: new Date().toISOString() },
  { id: 'default-2', title: 'Contemporary Living Room', description: 'Living room with modular sofas, built-in TV and entertainment unit, and a stone-clad fireplace.', imageUrl: projectLivingRoom, category: 'Gjakova, Kosovo', createdAt: new Date().toISOString() },
  { id: 'default-3', title: 'Living & Dining Space', description: 'Open-plan living and dining with TV wall, media console, sectional sofa, and tall display cabinet.', imageUrl: projectLivingDining, category: 'Gjakova, Kosovo', createdAt: new Date().toISOString() },
  { id: 'default-4', title: 'Kitchen & Dining', description: 'Modern kitchen with marble island, bar stools, light cabinetry, and wavy pendant light over herringbone flooring.', imageUrl: image00004, category: 'Gjakova, Kosovo', createdAt: new Date().toISOString() },
  { id: 'default-5', title: 'Marble Island Kitchen', description: 'Spacious kitchen with two-tier marble island, bar seating, display cabinet, and contemporary pendant lighting.', imageUrl: image00005, category: 'Gjakova, Kosovo', createdAt: new Date().toISOString() },
  { id: 'default-6', title: 'Kitchen with Stone Island', description: 'Open kitchen with stone-topped island, ribbed accent wall, and modern looped pendant above herringbone floor.', imageUrl: image00006, category: 'Gjakova, Kosovo', createdAt: new Date().toISOString() },
  { id: 'default-7', title: 'Dining Room', description: 'Dining room with long table, upholstered chairs, three ribbed pendant lights, and abstract wall art.', imageUrl: image00007, category: 'Gjakova, Kosovo', createdAt: new Date().toISOString() },
  { id: 'default-8', title: 'Curved Sofa Living Room', description: 'Minimalist living room with curved off-white sofa, round coffee table, and abstract wall art on paneled walls.', imageUrl: image00008, category: 'Gjakova, Kosovo', createdAt: new Date().toISOString() },
  { id: 'default-9', title: 'Wine Display & Living', description: 'Living area with illuminated wine shelving, round coffee table, and olive tree in a neutral setting.', imageUrl: image00009, category: 'Gjakova, Kosovo', createdAt: new Date().toISOString() },
  { id: 'default-10', title: 'Entry with Slatted Panels', description: 'Minimalist entry with slatted wall panels, floating console, ottomans, and warm display niche lighting.', imageUrl: image00010, category: 'Gjakova, Kosovo', createdAt: new Date().toISOString() },
  { id: 'default-11', title: 'Entryway Cabinetry', description: 'Modern entry with light grey cabinetry, illuminated display shelves with vases, and warm base lighting.', imageUrl: image00011, category: 'Gjakova, Kosovo', createdAt: new Date().toISOString() },
  { id: 'default-12', title: 'Double Vanity Bathroom', description: 'Minimalist bathroom with floating double vanity, twin sinks, wall-mounted toilet, and freestanding bathtub.', imageUrl: image00012, category: 'Gjakova, Kosovo', createdAt: new Date().toISOString() },
  { id: 'default-13', title: 'Oval Bathtub Bathroom', description: 'Bathroom with white oval bathtub, rain shower, recessed lit shelf, and light stone tiling.', imageUrl: image00013, category: 'Gjakova, Kosovo', createdAt: new Date().toISOString() },
  { id: 'default-14', title: 'Bathroom with Towel Shelves', description: 'Bathroom with hanging bathrobes, illuminated recessed shelves for towels and books, and towel bar.', imageUrl: image00014, category: 'Gjakova, Kosovo', createdAt: new Date().toISOString() },
  { id: 'default-15', title: 'Bedroom with Wood Feature Wall', description: 'Bedroom with upholstered bed, wooden panel headboard wall, oval bedside lamps, and channel-tufted bench.', imageUrl: image00015, category: 'Gjakova, Kosovo', createdAt: new Date().toISOString() },
  { id: 'default-16', title: 'Dressing & Vanity Area', description: 'Dressing area with built-in wardrobe, vanity desk, watches on display, and pendant light over herringbone floor.', imageUrl: image00016, category: 'Gjakova, Kosovo', createdAt: new Date().toISOString() },
  { id: 'default-17', title: 'Walk-in Closet', description: 'Walk-in closet with glass-door wardrobe, wood paneling, and integrated LED lighting on clothing and shoes.', imageUrl: image00017, category: 'Gjakova, Kosovo', createdAt: new Date().toISOString() },
  { id: 'default-18', title: 'Bedroom with TV Wall', description: 'Bedroom with large bed, wooden feature wall with mounted TV, and built-in wardrobes.', imageUrl: image00018, category: 'Gjakova, Kosovo', createdAt: new Date().toISOString() },
  { id: 'default-19', title: 'Bathroom with Wood Paneling', description: 'Bathroom with floating vanity, wood-paneled shower, wall-mounted toilet, and recessed lit shelves.', imageUrl: image00019, category: 'Gjakova, Kosovo', createdAt: new Date().toISOString() },
  { id: 'default-20', title: 'Bathroom with Shower Niche', description: 'Bathroom with floating vanity, walk-in shower, lit niche shelves, and wall-mounted toilet.', imageUrl: image00020, category: 'Gjakova, Kosovo', createdAt: new Date().toISOString() },
  { id: 'default-21', title: 'Master Bedroom', description: 'Master bedroom with beige headboard, floating nightstands, geometric abstract art, and ambient strip lighting.', imageUrl: image00021, category: 'Gjakova, Kosovo', createdAt: new Date().toISOString() },
  { id: 'default-22', title: 'Bedroom with Integrated Wardrobe', description: 'Bedroom with bed, illuminated shelving, central vanity mirror, and glass display cabinet for accessories.', imageUrl: image00022, category: 'Gjakova, Kosovo', createdAt: new Date().toISOString() },
  { id: 'default-23', title: 'Bedroom with Desk Nook', description: 'Bedroom with upholstered bed, full-height mirror, built-in wardrobe, and integrated desk with chair.', imageUrl: image00023, category: 'Gjakova, Kosovo', createdAt: new Date().toISOString() },
  { id: 'default-24', title: 'Bedroom with Panel Headboard', description: 'Bedroom with padded headboard, vertical panel feature wall, cylindrical table lamps, and grey rug.', imageUrl: image00024, category: 'Gjakova, Kosovo', createdAt: new Date().toISOString() },
  { id: 'default-25', title: 'Bedroom with Slatted Wall', description: 'Bedroom with grey bed, slatted accent wall, vanity with mirror, and illuminated display cabinet.', imageUrl: image00025, category: 'Gjakova, Kosovo', createdAt: new Date().toISOString() },
  { id: 'default-26', title: 'Vanity & Mirror', description: 'Bedroom vanity with large mirror reflecting the bed, display cabinet, abstract art, and herringbone floor.', imageUrl: image00026, category: 'Gjakova, Kosovo', createdAt: new Date().toISOString() },
  { id: 'default-27', title: 'Handbag Display Hallway', description: 'Hallway with full-height mirror and illuminated glass cabinet displaying a curated handbag collection.', imageUrl: image00027, category: 'Gjakova, Kosovo', createdAt: new Date().toISOString() },
  { id: 'default-28', title: 'Bedroom & Wardrobe Hall', description: 'Bedroom with TV and bed next to a corridor of glass-fronted wardrobes and an end mirror.', imageUrl: image00028, category: 'Gjakova, Kosovo', createdAt: new Date().toISOString() },
  { id: 'default-29', title: 'Double Vanity & Shower', description: 'Bathroom with double vanity, large mirror, wall-mounted toilet, and glass shower enclosure.', imageUrl: image00029, category: 'Gjakova, Kosovo', createdAt: new Date().toISOString() },
  { id: 'default-30', title: 'Walk-in Shower Bathroom', description: 'Bathroom with walk-in shower, recessed lit shelves, floating vanity, and wall-mounted toilet.', imageUrl: image00030, category: 'Gjakova, Kosovo', createdAt: new Date().toISOString() },
  { id: 'default-31', title: 'Bathroom Linen Niche', description: 'Bathrobes on hooks and recessed shelves with towels, books, and toiletries in warm lighting.', imageUrl: image00031, category: 'Gjakova, Kosovo', createdAt: new Date().toISOString() },
  { id: 'default-32', title: 'Laundry Room', description: 'Modern laundry with taupe cabinetry, integrated washer and dryer, open shelving, and hanging area.', imageUrl: image00032, category: 'Gjakova, Kosovo', createdAt: new Date().toISOString() },
];

const ZURICH_PROJECTS: Project[] = [
  { id: 'zurich-2', title: 'Contemporary Kitchen', description: 'Kitchen with marble island and bar stools, marble backsplash, dark wood paneling, and pendant lights.', imageUrl: projectKitchen, category: 'Zurich, Switzerland', createdAt: new Date().toISOString() },
  { id: 'zurich-3', title: 'Minimalist Bathroom', description: 'Bathroom with wall-mounted toilet, integrated strip lighting, towel bars, and recessed shelving with rolled towels.', imageUrl: projectBathroom, category: 'Zurich, Switzerland', createdAt: new Date().toISOString() },
  { id: 'zurich-4', title: 'Entry with Slatted Wall', description: 'Entry with slatted accent wall, dark floating shelf with vase and lamp, and taupe storage unit with base lighting.', imageUrl: image00064, category: 'Zurich, Switzerland', createdAt: new Date().toISOString() },
  { id: 'zurich-5', title: 'Marble Island Kitchen', description: 'Kitchen with marble island and bar stools, marble backsplash, dark wood walls, and black pendant lights.', imageUrl: image00065, category: 'Zurich, Switzerland', createdAt: new Date().toISOString() },
  { id: 'zurich-6', title: 'Stone Bathroom', description: 'Bathroom with stone tiling, wall-mounted toilet, vertical strip lighting, towel rails, and built-in shelving.', imageUrl: image00066, category: 'Zurich, Switzerland', createdAt: new Date().toISOString() },
  { id: 'zurich-7', title: 'Open Living & Dining', description: 'Open-plan living and dining with TV wall, marble coffee table, sectional sofa, and drum pendant lights.', imageUrl: image00067, category: 'Zurich, Switzerland', createdAt: new Date().toISOString() },
  { id: 'zurich-8', title: 'Living Room with Art', description: 'Living room with L-shaped sofa, marble coffee table, dark wood paneling, and abstract art.', imageUrl: image00068, category: 'Zurich, Switzerland', createdAt: new Date().toISOString() },
  { id: 'zurich-9', title: 'Living with Central Fireplace', description: 'Open-plan living and kitchen divided by a floor-to-ceiling marble fireplace and firewood stack.', imageUrl: image00069, category: 'Zurich, Switzerland', createdAt: new Date().toISOString() },
  { id: 'zurich-10', title: 'Hallway with Mirror', description: 'Hallway with full-height mirror, fluted walls, and upholstered bench in neutral tones.', imageUrl: image00070, category: 'Zurich, Switzerland', createdAt: new Date().toISOString() },
  { id: 'zurich-11', title: 'Lounge with Backlit Shelves', description: 'Living space with round armchair, dark coffee table, and tall backlit shelving unit with decorative objects.', imageUrl: image00071, category: 'Zurich, Switzerland', createdAt: new Date().toISOString() },
  { id: 'zurich-12', title: 'Marble Staircase', description: 'Staircase with marble steps, under-step LED lighting, dark glass railing, and recessed wall handrail.', imageUrl: image00072, category: 'Zurich, Switzerland', createdAt: new Date().toISOString() },
  { id: 'zurich-13', title: 'Dining Room', description: 'Dining room with marble table, grey upholstered chairs, drum pendant lights, and triptych artwork.', imageUrl: image00073, category: 'Zurich, Switzerland', createdAt: new Date().toISOString() },
  { id: 'zurich-14', title: 'Curved Sofa Living Room', description: 'Living room with curved boucle sofa, round coffee table, sculptural floor lamp, and textured block wall art.', imageUrl: image00074, category: 'Zurich, Switzerland', createdAt: new Date().toISOString() },
  { id: 'zurich-15', title: 'Sectional Living Room', description: 'Living room with modular sectional, marble coffee table, abstract art, and floor lamps by the windows.', imageUrl: image00075, category: 'Zurich, Switzerland', createdAt: new Date().toISOString() },
  { id: 'zurich-16', title: 'Open-Plan with Pivot Door', description: 'Open living and dining with curved sofa, TV console, dark glass pivot door, and neutral palette.', imageUrl: image00076, category: 'Zurich, Switzerland', createdAt: new Date().toISOString() },
  { id: 'zurich-17', title: 'Marble Staircase Entry', description: 'Entry with multi-level marble staircase, integrated step lighting, and glass railing.', imageUrl: image00077, category: 'Zurich, Switzerland', createdAt: new Date().toISOString() },
];

const PRISHTINA_PROJECTS: Project[] = [
  { id: 'prishtina-1', title: 'Contemporary Architecture', description: 'Modern architectural design showcasing minimalist principles and functional beauty.', imageUrl: prishtinaImage1, category: 'Prishtina, Kosovo', createdAt: new Date().toISOString() },
  { id: 'prishtina-2', title: 'Refined Interior Space', description: 'Sophisticated interior with thoughtful design and elegant finishes.', imageUrl: prishtinaImage2, category: 'Prishtina, Kosovo', createdAt: new Date().toISOString() },
  { id: 'prishtina-3', title: 'Modern Design Project', description: 'Contemporary design project featuring clean aesthetics and functional elegance.', imageUrl: prishtinaImage3, category: 'Prishtina, Kosovo', createdAt: new Date().toISOString() },
  { id: 'prishtina-4', title: 'Elegant Living Area', description: 'Beautiful living space with modern furnishings and sophisticated design.', imageUrl: prishtinaImage4, category: 'Prishtina, Kosovo', createdAt: new Date().toISOString() },
  { id: 'prishtina-5', title: 'Contemporary Space', description: 'Modern interior design with minimalist approach and refined details.', imageUrl: prishtinaImage5, category: 'Prishtina, Kosovo', createdAt: new Date().toISOString() },
  { id: 'prishtina-6', title: 'Sophisticated Design', description: 'Elegant design project showcasing contemporary architecture and interior excellence.', imageUrl: prishtinaImage6, category: 'Prishtina, Kosovo', createdAt: new Date().toISOString() },
  { id: 'prishtina-7', title: 'Modern Interior', description: 'Contemporary interior space with clean lines and sophisticated design elements.', imageUrl: prishtinaImage7, category: 'Prishtina, Kosovo', createdAt: new Date().toISOString() },
  { id: 'prishtina-8', title: 'Refined Architecture', description: 'Beautiful architectural design featuring modern aesthetics and functional elegance.', imageUrl: prishtinaImage8, category: 'Prishtina, Kosovo', createdAt: new Date().toISOString() },
];

interface ProjectsPageProps {
  isDark: boolean;
}

export function ProjectsPage({ isDark }: ProjectsPageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zurichIndex, setZurichIndex] = useState(0);
  const [prishtinaIndex, setPrishtinaIndex] = useState(0);
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
          setProjects(validProjects.length > 0 ? validProjects : DEFAULT_PROJECTS);
        } else {
          setProjects(DEFAULT_PROJECTS);
        }
      } else {
        setProjects(DEFAULT_PROJECTS);
      }
    } catch (err) {
      setProjects(DEFAULT_PROJECTS);
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

  const nextZurich = () => {
    setZurichIndex((prev) => (prev + 1) % ZURICH_PROJECTS.length);
  };

  const prevZurich = () => {
    setZurichIndex((prev) => (prev - 1 + ZURICH_PROJECTS.length) % ZURICH_PROJECTS.length);
  };

  const nextPrishtina = () => {
    setPrishtinaIndex((prev) => (prev + 1) % PRISHTINA_PROJECTS.length);
  };

  const prevPrishtina = () => {
    setPrishtinaIndex((prev) => (prev - 1 + PRISHTINA_PROJECTS.length) % PRISHTINA_PROJECTS.length);
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

        {/* 
          PROJECT SECTIONS ORDER:
          Sections are displayed in order from top to bottom.
          To add a new section, insert it HERE (right after this comment) so it appears first.
          Current order: Prishtina → Gjakova → Zurich
        */}

        {/* Prishtina section — FIRST */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-20">
          <div className="relative w-full overflow-hidden rounded-lg bg-neutral-200/20" style={{ aspectRatio: '5/4', minHeight: 240 }}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`prishtina-image-${prishtinaIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={PRISHTINA_PROJECTS[prishtinaIndex].imageUrl}
                  alt={PRISHTINA_PROJECTS[prishtinaIndex].title}
                  className="block w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23ddd" width="800" height="600"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage not available%3C/text%3E%3C/svg%3E';
                  }}
                />
              </motion.div>
            </AnimatePresence>
            <button
              onClick={prevPrishtina}
              className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full z-10 ${
                isDark ? "bg-white/90 text-neutral-900 hover:bg-white" : "bg-neutral-900/90 text-white hover:bg-neutral-900"
              } transition-colors shadow-lg`}
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextPrishtina}
              className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full z-10 ${
                isDark ? "bg-white/90 text-neutral-900 hover:bg-white" : "bg-neutral-900/90 text-white hover:bg-neutral-900"
              } transition-colors shadow-lg`}
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>
            <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full z-10 ${
              isDark ? "bg-white/90 text-neutral-900" : "bg-neutral-900/90 text-white"
            }`}>
              {prishtinaIndex + 1} / {PRISHTINA_PROJECTS.length}
            </div>
          </div>
          <div className="overflow-hidden min-h-[220px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`prishtina-description-${prishtinaIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="space-y-6"
              >
                <div>
                  <span className={`${isDark ? "text-neutral-400" : "text-neutral-500"} uppercase tracking-wider`}>
                    {PRISHTINA_PROJECTS[prishtinaIndex].category}
                  </span>
                  <h2 className={`${isDark ? "text-white" : "text-neutral-900"} mt-3 mb-4`}>
                    {PRISHTINA_PROJECTS[prishtinaIndex].title}
                  </h2>
                </div>
                <p className={`${isDark ? "text-neutral-300" : "text-neutral-600"} leading-relaxed`}>
                  {PRISHTINA_PROJECTS[prishtinaIndex].description}
                </p>
                <div className="flex gap-2 pt-4">
                  {PRISHTINA_PROJECTS.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setPrishtinaIndex(index)}
                      className={`h-2 rounded-full transition-all duration-200 ${
                        index === prishtinaIndex
                          ? `w-8 ${isDark ? "bg-white" : "bg-neutral-900"}`
                          : `w-2 ${isDark ? "bg-neutral-700" : "bg-neutral-300"}`
                      }`}
                      aria-label={`Go to project ${index + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Gjakova section — SECOND */}
        <div className={`mt-24 mb-8 pt-20 pb-8 border-t ${isDark ? "border-neutral-700" : "border-neutral-200"}`} style={{ marginTop: '6rem', paddingTop: '5rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full overflow-hidden rounded-lg bg-neutral-200/20" style={{ aspectRatio: '5/4', minHeight: 240 }}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`image-${currentIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={currentProject.imageUrl}
                    alt={currentProject.title}
                    className="block w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23ddd" width="800" height="600"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage not available%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </motion.div>
              </AnimatePresence>
              <button
                onClick={prevProject}
                className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full z-10 ${
                  isDark ? "bg-white/90 text-neutral-900 hover:bg-white" : "bg-neutral-900/90 text-white hover:bg-neutral-900"
                } transition-colors shadow-lg`}
                aria-label="Previous project"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextProject}
                className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full z-10 ${
                  isDark ? "bg-white/90 text-neutral-900 hover:bg-white" : "bg-neutral-900/90 text-white hover:bg-neutral-900"
                } transition-colors shadow-lg`}
                aria-label="Next project"
              >
                <ChevronRight size={24} />
              </button>
              <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full z-10 ${
                isDark ? "bg-white/90 text-neutral-900" : "bg-neutral-900/90 text-white"
              }`}>
                {currentIndex + 1} / {projects.length}
              </div>
            </div>
            <div className="overflow-hidden min-h-[220px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`description-${currentIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
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
                  <div className="flex gap-2 pt-4">
                    {projects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 rounded-full transition-all duration-200 ${
                          index === currentIndex
                            ? `w-8 ${isDark ? "bg-white" : "bg-neutral-900"}`
                            : `w-2 ${isDark ? "bg-neutral-700" : "bg-neutral-300"}`
                        }`}
                        aria-label={`Go to project ${index + 1}`}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Zurich section — THIRD */}
        <div className={`mt-24 mb-8 pt-20 pb-8 border-t ${isDark ? "border-neutral-700" : "border-neutral-200"}`} style={{ marginTop: '6rem', paddingTop: '5rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full overflow-hidden rounded-lg bg-neutral-200/20" style={{ aspectRatio: '5/4', minHeight: 240 }}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`zurich-image-${zurichIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={ZURICH_PROJECTS[zurichIndex].imageUrl}
                    alt={ZURICH_PROJECTS[zurichIndex].title}
                    className="block w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23ddd" width="800" height="600"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage not available%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </motion.div>
              </AnimatePresence>
              <button
                onClick={prevZurich}
                className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full z-10 ${
                  isDark ? "bg-white/90 text-neutral-900 hover:bg-white" : "bg-neutral-900/90 text-white hover:bg-neutral-900"
                } transition-colors shadow-lg`}
                aria-label="Previous project"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextZurich}
                className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full z-10 ${
                  isDark ? "bg-white/90 text-neutral-900 hover:bg-white" : "bg-neutral-900/90 text-white hover:bg-neutral-900"
                } transition-colors shadow-lg`}
                aria-label="Next project"
              >
                <ChevronRight size={24} />
              </button>
              <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full z-10 ${
                isDark ? "bg-white/90 text-neutral-900" : "bg-neutral-900/90 text-white"
              }`}>
                {zurichIndex + 1} / {ZURICH_PROJECTS.length}
              </div>
            </div>
            <div className="overflow-hidden min-h-[220px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`zurich-description-${zurichIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="space-y-6"
                >
              <div>
                <span className={`${isDark ? "text-neutral-400" : "text-neutral-500"} uppercase tracking-wider`}>
                  {ZURICH_PROJECTS[zurichIndex].category}
                </span>
                <h2 className={`${isDark ? "text-white" : "text-neutral-900"} mt-3 mb-4`}>
                  {ZURICH_PROJECTS[zurichIndex].title}
                </h2>
              </div>
              <p className={`${isDark ? "text-neutral-300" : "text-neutral-600"} leading-relaxed`}>
                {ZURICH_PROJECTS[zurichIndex].description}
              </p>
              <div className="flex gap-2 pt-4">
                {ZURICH_PROJECTS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setZurichIndex(index)}
                    className={`h-2 rounded-full transition-all duration-200 ${
                      index === zurichIndex
                        ? `w-8 ${isDark ? "bg-white" : "bg-neutral-900"}`
                        : `w-2 ${isDark ? "bg-neutral-700" : "bg-neutral-300"}`
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}