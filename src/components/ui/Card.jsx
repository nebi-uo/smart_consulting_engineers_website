import React from 'react';

const Card = ({ title, description, icon, bgImage }) => (
  <div className="group relative h-[420px] overflow-hidden bg-gray-900 cursor-pointer">
    <img
      src={bgImage || 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=800'}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-50 group-hover:opacity-75"
    />

    <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-primary/95 via-primary/80 to-transparent pt-20 transition-all duration-300 overflow-hidden flex flex-col justify-end h-full">
      <div className="flex items-center gap-6 mb-4">
        {icon && <div className="text-accent">{icon}</div>}
        <h3 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight flex items-center mb-1">{title}</h3>
      </div>
      <div className="w-12 h-[2px] bg-accent mb-6"></div>
      <p className="text-gray-200 text-base leading-relaxed opacity-90">{description}</p>
    </div>
  </div>
);

export default Card;
