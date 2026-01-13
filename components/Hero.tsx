import React, { useRef } from 'react';
import { useScroll } from '../hooks/useScroll';

const Hero: React.FC = () => {
  const scrollY = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);

  // Animation values
  const opacity = Math.max(0, 1 - scrollY / 700);
  const scale = Math.max(0.8, 1 - scrollY / 2000);
  const textTranslate = scrollY * 0.5;

  return (
    <section id="home" ref={containerRef} className="relative h-[120vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image that reveals */}
      <div
        className="absolute inset-0 z-0 w-full h-full"
        style={{
          transform: `scale(${1 + scrollY * 0.0005})`, // Subtle zoom in on scroll
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
        <img
          src="https://picsum.photos/1920/1080?grayscale&blur=2"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center flex flex-col items-center px-4">
        <h1
          className="font-serif text-[10vw] md:text-[12vw] leading-[0.8] tracking-tighter mix-blend-overlay opacity-90 whitespace-nowrap"
          style={{
            transform: `translateY(${textTranslate}px) scale(${scale})`,
            opacity: opacity
          }}
        >
          Shahu Photography
        </h1>
        <p
          className="mt-8 text-sm md:text-base uppercase tracking-[0.3em] font-light max-w-lg mx-auto"
          style={{
            transform: `translateY(${textTranslate * 0.8}px)`,
            opacity: opacity
          }}
        >
          Heartfelt Stories, One Frame at a Time • Since 2017
        </p>

        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60"
          style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
        >
          <div className="w-[1px] h-12 bg-white/50 animate-pulse"></div>
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;