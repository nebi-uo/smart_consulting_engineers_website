import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 mt-auto border-t-[8px] border-accent">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

        <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-2 tracking-tight">SMART<span className="text-accent">.</span></h2>
            <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-8">Consulting Engineers PLC</span>
            <p className="text-gray-300 text-base leading-relaxed max-w-xs opacity-80">Committed To Excellence</p>
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
            <li><Link to="/service/feasibility-study" className="cursor-pointer hover:text-white transition-colors inline-block">Feasibility & Planning</Link></li>
            <li><Link to="/service/site-investigation" className="cursor-pointer hover:text-white transition-colors inline-block">Site Investigation</Link></li>
            <li><Link to="/service/engineering-design" className="cursor-pointer hover:text-white transition-colors inline-block">Engineering Design</Link></li>
            <li><Link to="/service/project-management" className="cursor-pointer hover:text-white transition-colors inline-block">Project Management and Advisory</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase font-semibold tracking-wider mb-8 text-white">Connect</h4>
          <div className="flex gap-4">
            <a href="#"><img src="../linkedin.png" alt="" className='w-10 h-10'/></a>
          </div>
        </div>

      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs font-semibold text-gray-400 uppercase tracking-wider gap-6">
        <p>&copy; {new Date().getFullYear()} Smart Engineering. All rights reserved.</p>
        <p>
          Designed and Built by{" "}
          <a href="https://anvior-synergy.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors normal-case">ANvior Synergy</a>
        </p>
      </div>

    </footer>
  );
}

export default Footer;