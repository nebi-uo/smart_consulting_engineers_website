import React from 'react';

const LogoStrip = () => {
  const PlaceholderLogo = () => (
    <div className="flex items-center space-x-2 opacity-60 grayscale hover:grayscale-0 transition-all cursor-pointer">
      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">L</div>
      <span className="font-sans font-semibold text-lg text-primary tracking-tight">Logoipsum</span>
    </div>
  );

  return (
    <div className="border-y border-gray-200 py-10 bg-white">
      <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-between items-center gap-8">
        {[1, 2, 3, 4, 5].map((_, i) => <PlaceholderLogo key={i} />)}
      </div>
    </div>
  );
};

export default LogoStrip;
