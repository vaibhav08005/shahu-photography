import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-6 transition-all duration-500 flex justify-between items-center ${scrolled ? 'backdrop-blur-md bg-black/20' : ''}`}>
        <a href="#home" className="text-2xl font-serif italic font-bold tracking-tighter hover-trigger cursor-pointer z-50">
          Shahu Photography
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hover-trigger z-50 text-white mix-blend-difference flex items-center gap-2 uppercase text-xs tracking-widest font-medium"
        >
          {isOpen ? 'Close' : 'Menu'}
          <div className="relative w-6 h-6">
            <div className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}>
              <Menu size={24} strokeWidth={1} />
            </div>
            <div className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}>
              <X size={24} strokeWidth={1} />
            </div>
          </div>
        </button>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div className={`fixed inset-0 bg-[#0f0f0f] z-40 transition-transform duration-[800ms] cubic-bezier(0.77, 0, 0.175, 1) ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="h-full flex flex-col justify-center items-center">
          <ul className="text-center space-y-8">
            {[
              { name: 'Home', id: '#home' },
              { name: 'Portfolio', id: '#portfolio' },
              { name: 'Studio', id: '#studio' },
              { name: 'About Us', id: '#about' },
              { name: 'Visit Us', id: '#contact' }
            ].map((item, index) => (
              <li key={item.name} className="overflow-hidden">
                <a
                  href={item.id}
                  onClick={() => setIsOpen(false)}
                  className={`block font-serif text-5xl md:text-7xl italic text-gray-400 hover:text-white transition-colors duration-300 transform translate-y-full ${isOpen ? 'translate-y-0' : ''}`}
                  style={{ transitionDelay: `${index * 100 + 300}ms`, transitionDuration: '700ms', transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)' }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;