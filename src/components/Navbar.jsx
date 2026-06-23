import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { projects } from '../data/projects';
import { services } from '../data/services';

function TopBanner() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-primary border-b border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 h-9 flex items-center justify-between">

        <a href="https://maps.google.com/?q=Addis+Ababa+Ethiopia" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
          <MapPin className="w-3 h-3 text-accent shrink-0" />
          <span className="text-[11px] font-medium tracking-wide">Addis Ababa, Ethiopia</span>
        </a>

        <div className="flex items-center gap-6 ml-auto">
          <a href="tel:+251911000000" className="hidden sm:flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors">
            <Phone className="w-3 h-3 text-accent shrink-0" />
            <span className="text-[11px] font-medium tracking-wide">+251 91 117 5793</span>
          </a>

          <a href="mailto:info@smartconsulting.com" className="hidden sm:flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors">
            <Mail className="w-3 h-3 text-accent shrink-0" />
            <span className="text-[11px] font-medium tracking-wide">smartconsultinget@gmail.com</span>
          </a>

          <div className="w-px h-4 bg-white/15"></div>

          <div className="flex items-center gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-[11px] font-semibold text-gray-400 hover:text-accent transition-colors tracking-wider uppercase">Li</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-[11px] font-semibold text-gray-400 hover:text-accent transition-colors tracking-wider uppercase">X</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-[11px] font-semibold text-gray-400 hover:text-accent transition-colors tracking-wider uppercase">Fb</a>
          </div>
        </div>

      </div>
    </div>
  );
}

function NavItem({ item, isScrolled }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimer = React.useRef(null);

  const isDropdown = item === "Projects" || item === "Services";
  const dropdownData = item === "Projects" ? projects : (item === "Services" ? services : []);
  const linkTo = item === "Home" ? "/" : (item === "About Us" ? "/about" : "/" + item.toLowerCase().replace(' ', ''));
  const prefix = item === "Projects" ? "/project" : "/service";
  const linkClass = "text-xs font-semibold uppercase tracking-widest transition-colors duration-200 hover:text-accent " + (isScrolled ? "text-primary" : "text-white");

  function open() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setIsOpen(true);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(function () {
      setIsOpen(false);
    }, 150);
  }

  if (!isDropdown) {
    return <Link to={linkTo} className={linkClass}>{item}</Link>;
  }

  return (
    <div className="relative" onMouseEnter={open} onMouseLeave={scheduleClose}>
      <Link to={linkTo} className={linkClass + " block py-4"}>{item}</Link>

      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white border border-gray-100 shadow-lg flex flex-col py-1">
          {dropdownData.map(function (dropdownItem) {
            return (
              <Link key={dropdownItem.id} to={prefix + "/" + dropdownItem.id} className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-primary/60 hover:text-accent hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors line-clamp-1">
                {dropdownItem.title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 80);
    }
    window.addEventListener('scroll', handleScroll);
    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = ["Home", "About Us", "Projects", "Services"];
  const navClass = "flex items-center justify-between px-6 lg:px-16 fixed top-9 w-full z-40 transition-all duration-300 " + (isScrolled ? "py-4 bg-white border-b border-gray-100" : "py-5 bg-transparent border-b border-white/10");

  return (
    <React.Fragment>
      <TopBanner />

      <nav className={navClass}>

        <Link to="/" className="flex items-center h-12 shrink-0">
          <img src="/mainlogo.svg" alt="Smart Consulting" className="h-8 lg:h-10 w-auto object-contain" />
        </Link>

        <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navItems.map(function (item) {
            return <NavItem key={item} item={item} isScrolled={isScrolled} />;
          })}
        </div>

        <Link to="/contact" className="shrink-0">
          <div className={"text-xs font-semibold uppercase tracking-widest px-6 py-2.5 border transition-colors duration-200 " + (isScrolled ? "border-primary text-primary hover:bg-primary hover:text-white" : "border-white text-white hover:bg-white hover:text-primary")}>
            Contact Us
          </div>
        </Link>

      </nav>
    </React.Fragment>
  );
}

export default Navbar;