import React from 'react';

const SectionTitle = ({ title, subtitle, className = '', light = false }) => (
  <div className={`mb-16 ${className}`}>
    <div className="flex items-center gap-4 mb-8">
      <div className={`w-12 h-[2px] ${light ? 'bg-white' : 'bg-accent'}`}></div>
      <span className={`${light ? 'text-white' : 'text-accent'} text-xs font-bold uppercase tracking-wider opacity-90`}>
        Discover
      </span>
    </div>
    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight ${light ? 'text-white' : 'text-primary'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-8 text-lg md:text-xl max-w-2xl font-normal leading-relaxed ${light ? 'text-gray-300 opacity-90' : 'text-neutral-dark opacity-72'}`}>
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionTitle;
