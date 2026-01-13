import React, { useRef, useEffect, useState } from 'react';
import { Project } from '../types';
import GenreGallery from './GenreGallery';

const projects: Project[] = [
  { id: 1, title: "Eternal Vows", category: "Wedding", year: "2023", image: "https://picsum.photos/600/800?random=1" },
  { id: 2, title: "New Beginnings", category: "Pre-Wedding", year: "2024", image: "https://picsum.photos/600/800?random=10" },
  { id: 3, title: "Waiting for You", category: "Maternity", year: "2023", image: "https://picsum.photos/600/800?random=3" },
  { id: 4, title: "Tiny Toes", category: "Newborn", year: "2024", image: "https://picsum.photos/600/800?random=4" },
  { id: 5, title: "Classic Portraits", category: "Portrait", year: "2023", image: "https://picsum.photos/600/800?random=5" },
  { id: 6, title: "Style & Grace", category: "Fashion", year: "2024", image: "https://picsum.photos/600/800?random=6" },
];

const HorizontalGallery: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      const distance = -sectionTop;
      const totalDistance = sectionHeight - windowHeight;

      let percentage = distance / totalDistance;
      percentage = Math.max(0, Math.min(1, percentage));

      setProgress(percentage);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div id="portfolio" ref={sectionRef} className="relative h-[400vh] bg-[#0a0a0a]">
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">

          {/* Section Header */}
          <div className="absolute top-10 left-10 md:left-20 z-10 mix-blend-difference pointer-events-none">
            <h2 className="text-4xl md:text-6xl font-serif italic mb-2">Our Work</h2>
            <p className="text-xs uppercase tracking-widest opacity-70">Creative Captures for Every Occasion</p>
          </div>

          {/* The Moving Track */}
          <div
            ref={trackRef}
            className="flex gap-10 md:gap-20 px-[20vw] items-center will-change-transform"
            style={{
              transform: `translateX(${-progress * 60}%)`,
              transition: 'transform 0.1s linear'
            }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="relative shrink-0 group hover-trigger cursor-pointer"
                onClick={() => setSelectedCategory(project.category)}
                style={{
                  // Parallax effect on y-axis for odd/even items for organic feel
                  transform: `translateY(${index % 2 === 0 ? '0' : '40px'})`
                }}
              >
                <div className="relative w-[70vw] md:w-[25vw] aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 ease-out border border-white/5 group-hover:border-white/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                  {/* Hover Overlay Text */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                    <div className="bg-black/50 backdrop-blur-sm px-6 py-3 border border-white/20 rounded-full">
                      <span className="text-xs uppercase tracking-widest text-white">View Gallery</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-between items-end border-b border-white/20 pb-4 group-hover:border-white/50 transition-colors">
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest mb-1 text-gray-400 group-hover:text-white transition-colors">{project.category}</span>
                    <h3 className="text-2xl md:text-3xl font-serif italic">{project.title}</h3>
                  </div>
                  <span className="text-sm font-light opacity-50 group-hover:opacity-100 transition-opacity">{project.year}</span>
                </div>
              </div>
            ))}

            {/* End Card */}
            <div className="shrink-0 w-[30vw] flex items-center justify-center">
              <div className="text-center opacity-50">
                <p className="font-serif text-4xl italic mb-4">View All Services</p>
                <div className="w-16 h-[1px] bg-white mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Genre Gallery Overlay */}
      {selectedCategory && (
        <GenreGallery
          category={selectedCategory}
          onClose={() => setSelectedCategory(null)}
        />
      )}
    </>
  );
};

export default HorizontalGallery;