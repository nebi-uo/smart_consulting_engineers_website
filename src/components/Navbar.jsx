import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { projects } from '../data/projects';
import { services } from '../data/services';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`flex items-center justify-between px-6 lg:px-12 py-3 fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-neutral-white border-b border-gray-100 shadow-sm' : 'bg-transparent backdrop-blur-[2px] border-b border-white/5'}`}>
      <div className="flex items-center z-20">
        <Link to="/" className="group flex items-center h-20 w-auto">
          <img src="/mainlogo.svg" alt="Smart Consulting" className={`h-9 lg:h-20 w-auto object-contain transform origin-left scale-[1.35] md:scale-[1.5] group-hover:scale-[1.4] md:group-hover:scale-[1.55] transition-all duration-500 ${!isScrolled ? 'drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]' : ''}`} />
        </Link>
      </div>

      <div className="hidden lg:flex items-center space-x-14 absolute left-1/2 transform -translate-x-1/2">
        {["Home", "About Us", "Projects", "Services"].map(item => {
          const isDropdown = item === "Projects" || item === "Services";
          const dropdownData = item === "Projects" ? projects : item === "Services" ? services : [];

          return (
            <div key={item} className="relative group py-4">
              <Link
                to={item === "Home" ? "/" : item === "About Us" ? "/about" : `/${item.toLowerCase().replace(' ', '')}`}
                className={`cursor-pointer font-sans text-sm font-semibold uppercase tracking-wide py-2 border-b-2 border-transparent transition-all duration-300 group-hover:text-accent group-hover:border-accent/40 ${isScrolled ? 'text-primary drop-shadow-none' : 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]'}`}
              >
                {item}
              </Link>

              {isDropdown && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                  <div className="w-64 bg-white shadow-2xl rounded-sm border border-gray-100 overflow-hidden flex flex-col py-2">
                    {dropdownData.map(dropdownItem => {
                      const linkPrefix = item === "Projects" ? "/project" : "/service";
                      return (
                        <Link
                          key={dropdownItem.id}
                          to={`${linkPrefix}/${dropdownItem.id}`}
                          className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-primary/70 hover:text-accent hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors line-clamp-1"
                        >
                          {dropdownItem.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="z-20">
        <Link to="/contact">
          <div className={`font-sans cursor-pointer rounded-button font-semibold text-sm uppercase tracking-wide px-8 py-3 transition-all duration-300 border ${isScrolled ? 'border-primary text-primary hover:bg-primary hover:text-white' : 'border-white/80 text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] hover:bg-white hover:text-primary hover:border-white'}`}>
            Contact Us
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
