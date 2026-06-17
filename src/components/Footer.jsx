import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-primary text-white pt-24 pb-12 mt-auto border-t-[8px] border-accent">
    <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

      <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-display font-bold text-white mb-2 tracking-tight">
            SMART<span className="text-accent">.</span>
          </h2>
          <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-8">
            Consulting Engineers PLC
          </span>
          <p className="text-gray-300 text-base leading-relaxed max-w-xs opacity-80">
            The global structural foundation for long-term commercial success and infrastructural safety.
          </p>
        </div>
      </div>

      <div>
        <h4 className="text-xs uppercase font-semibold tracking-wider mb-8 text-white">Company</h4>
        <ul className="space-y-4 text-gray-300 text-sm font-normal opacity-80">
          <li><Link to="/about" className="cursor-pointer hover:text-white transition-colors inline-block">About Us</Link></li>
          <li><Link to="/projects" className="cursor-pointer hover:text-white transition-colors inline-block">Projects</Link></li>
          <li><Link to="/services" className="cursor-pointer hover:text-white transition-colors inline-block">Services</Link></li>
          <li><Link to="/contact" className="cursor-pointer hover:text-white transition-colors inline-block">Contact</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="text-xs uppercase font-semibold tracking-wider mb-8 text-white">Expertise</h4>
        <ul className="space-y-4 text-gray-300 text-sm font-normal opacity-80">
          <li><Link to="/service/structural-engineering" className="cursor-pointer hover:text-white transition-colors inline-block">Structural Engineering</Link></li>
          <li><Link to="/service/project-management-advisory" className="cursor-pointer hover:text-white transition-colors inline-block">Project Management</Link></li>
          <li><Link to="/service/civil-infrastructure-planning" className="cursor-pointer hover:text-white transition-colors inline-block">Civil Planning</Link></li>
          <li><Link to="/service/site-inspection-supervision" className="cursor-pointer hover:text-white transition-colors inline-block">Site Inspections</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="text-xs uppercase font-semibold tracking-wider mb-8 text-white">Connect</h4>
        <div className="flex gap-4">
          <a href="#" className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all text-sm font-semibold">IN</a>
          <a href="#" className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all text-sm font-semibold">X</a>
          <a href="#" className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all text-sm font-semibold">FB</a>
        </div>
      </div>

    </div>

    <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs font-semibold text-gray-400 uppercase tracking-wider gap-6">
      <p>&copy; {new Date().getFullYear()} Smart Engineering. All rights reserved.</p>
      <div className="flex gap-8">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default Footer;
