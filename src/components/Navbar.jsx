import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, X, Menu, ChevronDown } from 'lucide-react';
import { services } from '../data/services';

const dropdownStyles = `
  .nav-dropdown {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-6px);
    transition: opacity 0.15s ease, transform 0.15s ease, visibility 0.15s ease;
    pointer-events: none;
  }
  .nav-item:hover .nav-dropdown {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    pointer-events: auto;
  }
  .mobile-menu {
    transform: translateX(100%);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .mobile-menu.open {
    transform: translateX(0);
  }
`;

function TopBanner() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-primary border-b border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 h-9 flex items-center justify-between">
        <a href="https://maps.app.goo.gl/orrYkoqSNsmD8NFA9" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
          <MapPin className="w-3 h-3 text-accent shrink-0" />
          <span className="text-[11px] font-medium tracking-wide">Addis Ababa, Ethiopia</span>
        </a>
        <div className="flex items-center gap-6 ml-auto">
          <a href="tel:+251986348686" className="hidden sm:flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors">
            <Phone className="w-3 h-3 text-accent shrink-0" />
            <span className="text-[11px] font-medium tracking-wide">+251 98 634 8686</span>
          </a>
          <a href="tel:+251986348686" className="hidden sm:flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors">
            <Phone className="w-3 h-3 text-accent shrink-0" />
            <span className="text-[11px] font-medium tracking-wide">+251 90 000 0000</span>
          </a>
          <a href="mailto:smartconsultinget@gmail.com" className="hidden sm:flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors">
            <Mail className="w-3 h-3 text-accent shrink-0" />
            <span className="text-[11px] font-medium tracking-wide">smartconsultinget@gmail.com</span>
          </a>
          <div className="w-px h-4 bg-white/15"></div>
          <div className="flex items-center gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-[11px] font-semibold text-gray-400 hover:text-accent transition-colors tracking-wider uppercase"><img src="../linkedin.png" alt="" className='w-5 h-5'/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem({ item, isScrolled }) {
  const isDropdown = item === "Services";
  const linkTo = item === "Home" ? "/" : (item === "About Us" ? "/about" : "/" + item.toLowerCase().replace(' ', ''));
  const linkClass = "text-xs font-semibold uppercase tracking-widest transition-colors duration-200 hover:text-accent block py-5 " + (isScrolled ? "text-primary" : "text-white");

  if (!isDropdown) {
    return <Link to={linkTo} className={linkClass}>{item}</Link>;
  }

  return (
    <div className="nav-item relative">
      <Link to={linkTo} className={linkClass}>{item}</Link>
      <div className="nav-dropdown absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white border-t-2 border-accent shadow-xl">
        {services.map(function(svc, idx) {
          return (
            <Link key={svc.id} to={"/service/" + svc.id} className="flex items-center gap-3 px-5 py-3.5 text-[11px] font-semibold uppercase tracking-wider text-primary/50 hover:text-accent hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0">
              <span className="text-accent/30 font-mono text-[10px]">{String(idx + 1).padStart(2, '0')}</span>
              {svc.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function MobileMenu({ isOpen, onClose }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    onClose();
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setServicesOpen(false);
    }
    return function cleanup() { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Projects", to: "/projects" },
  ];

  return (
    <React.Fragment>
      <div onClick={onClose} className={"fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 lg:hidden " + (isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")} />

      <div className={"mobile-menu fixed top-0 right-0 h-full w-[85vw] max-w-sm z-[70] bg-primary flex flex-col lg:hidden " + (isOpen ? "open" : "")}>

        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <img src="/mainlogo.svg" alt="Smart Consulting" className="h-10 w-auto object-contain" />
          <button onClick={onClose} className="text-white/60 hover:text-white transition-colors p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col">
          <nav className="flex flex-col border-b border-white/10 pb-8 mb-8">
            {navLinks.map(function(link) {
              return (
                <Link key={link.to} to={link.to} className="text-sm font-semibold uppercase tracking-widest text-white/70 hover:text-white py-4 border-b border-white/5 last:border-0 transition-colors">
                  {link.label}
                </Link>
              );
            })}

            <div className="border-b border-white/5">
              <button onClick={function() { setServicesOpen(!servicesOpen); }} className="w-full flex items-center justify-between text-sm font-semibold uppercase tracking-widest text-white/70 hover:text-white py-4 transition-colors">
                Services
                <ChevronDown className={"w-4 h-4 transition-transform duration-200 " + (servicesOpen ? "rotate-180" : "")} />
              </button>
              {servicesOpen && (
                <div className="pb-2 flex flex-col gap-1">
                  {services.map(function(svc, idx) {
                    return (
                      <Link key={svc.id} to={"/service/" + svc.id} className="flex items-center gap-3 pl-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-white/40 hover:text-accent transition-colors">
                        <span className="font-mono text-[10px] text-accent/30">{String(idx + 1).padStart(2, '0')}</span>
                        {svc.title}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          <div className="flex flex-col gap-5">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30">Contact</p>
            <a href="tel:+251986348686" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              <span className="text-sm font-medium">+251 98 634 8686</span>
            </a>
            <a href="mailto:smartconsultinget@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <span className="text-sm font-medium">smartconsultinget@gmail.com</span>
            </a>
            <a href="https://maps.app.goo.gl/orrYkoqSNsmD8NFA9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
              <MapPin className="w-4 h-4 text-accent shrink-0" />
              <span className="text-sm font-medium">Addis Ababa, Ethiopia</span>
            </a>
          </div>
        </div>

        <div className="px-6 py-6 border-t border-white/10">
          <Link to="/contact" onClick={onClose} className="block w-full text-center text-xs font-semibold uppercase tracking-widest py-4 border border-white text-white hover:bg-white hover:text-primary transition-colors duration-200">
            Contact Us
          </Link>
        </div>

      </div>
    </React.Fragment>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      <style>{dropdownStyles}</style>
      <TopBanner />

      <nav className={navClass}>

        <Link to="/" className="flex items-center shrink-0">
          <img src="../mainlogo.svg" alt="Smart Consulting" className="h-10 w-auto object-contain" />
        </Link>

        <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navItems.map(function(item) {
            return <NavItem key={item} item={item} isScrolled={isScrolled} />;
          })}
        </div>

        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden lg:block shrink-0">
            <div className={"text-xs font-semibold uppercase tracking-widest px-6 py-2.5 border transition-colors duration-200 " + (isScrolled ? "border-primary text-primary hover:bg-primary hover:text-white" : "border-white text-white hover:bg-white hover:text-primary")}>
              Contact Us
            </div>
          </Link>

          <button onClick={function() { setMenuOpen(true); }} className={"lg:hidden p-2 transition-colors " + (isScrolled ? "text-primary" : "text-white")} aria-label="Open menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>

      </nav>

      <MobileMenu isOpen={menuOpen} onClose={function() { setMenuOpen(false); }} />
    </React.Fragment>
  );
}

export default Navbar;