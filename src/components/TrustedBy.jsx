import React from 'react';
import { motion } from 'framer-motion';

const TrustedBy = () => {
  // Swap these placeholder mapped objects out with your actual partner logo imports or paths
  const logos = [
    { id: 1, src: '/partner-1.png', alt: 'Partner Brand 1' },
    { id: 2, src: '/partner-2.png', alt: 'Partner Brand 2' },
    { id: 3, src: '/partner-3.png', alt: 'Partner Brand 3' },
    { id: 4, src: '/partner-4.png', alt: 'Partner Brand 4' },
    { id: 5, src: '/partner-5.png', alt: 'Partner Brand 5' },
    { id: 6, src: '/partner-6.png', alt: 'Partner Brand 6' }
  ];

  return (
    <section className="py-10 bg-neutral-white border-b border-gray-100 overflow-hidden relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-8 lg:px-12 flex flex-col md:flex-row items-center gap-8 z-10 relative"
      >
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider w-full md:w-auto shrink-0 z-10 bg-white md:pr-12 md:py-2 flex items-center gap-4">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          Trusted Global Partners
        </div>

        {/* Marquee Container */}
        <div className="flex-1 overflow-hidden relative">
          {/* Subtle gradient masks for smooth fade in/out */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none hidden md:block"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none hidden md:block"></div>

          {/* Scrolling track */}
          <div className="flex items-center gap-16 min-w-[200%] animate-[marquee_25s_linear_infinite]">
            {/* Double the logos for seamless loop */}
            {[...logos, ...logos].map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="h-10 w-32 relative shrink-0 transition-all duration-300 opacity-70 hover:opacity-100 cursor-pointer flex items-center justify-center">

                {/* Fallback dashed box when your image paths aren't found yet */}
                <div className="absolute inset-0 bg-gray-50 border border-dashed border-gray-200 flex items-center justify-center -z-10">
                  <span className="text-[8px] text-gray-400 font-bold uppercase tracking-widest text-center px-2">Logo {item.id}<br />Space</span>
                </div>

                {/* The actual image tag - it hides cleanly if your image is missing */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TrustedBy;
