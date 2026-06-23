import React from 'react';

const Card = ({ title, description, icon, bgImage }) => (
  <div className="group flex flex-col overflow-hidden cursor-pointer border border-gray-100 bg-white h-full">
    
    {/* Image — top half, clean crop */}
    <div className="h-52 overflow-hidden shrink-0">
      <img
        src={bgImage || 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=800'}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>

    {/* Text — solid panel, no overlay, no gradient */}
    <div className="bg-primary p-8 flex flex-col flex-grow">
      {icon && <div className="text-accent mb-4 shrink-0">{icon}</div>}
      <h3 className="font-sans font-bold text-white text-lg tracking-tight leading-snug mb-3">{title}</h3>
      <div className="w-8 h-[2px] bg-accent mb-4" />
      <p className="text-gray-300 text-sm leading-relaxed opacity-90">{description}</p>
    </div>
  </div>
);

export default Card;