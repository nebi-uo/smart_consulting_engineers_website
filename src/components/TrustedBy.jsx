import React from 'react';
import { motion } from 'framer-motion';

const TrustedBy = () => {
  const logos = [
    { id: 1, src: '../aser.png', alt: 'Partner Brand 1' },
    { id: 2, src: '../denzay.png', alt: 'Partner Brand 2' },
    { id: 3, src: '../casta.png', alt: 'Partner Brand 3' },
    { id: 4, src: '../era.png', alt: 'Partner Brand 4' },
    { id: 5, src: '../oro.png', alt: 'Partner Brand 5' },
    { id: 6, src: '../part-6.png', alt: 'Partner Brand 6' },
    { id: 7, src: '../dca.jpg', alt: 'Partner Brand 7' },
    { id: 8, src: '../dmc.jpg', alt: 'Partner Brand 8' },
    { id: 9, src: '../low.jpg', alt: 'Partner Brand 9' },
    { id: 10, src: '../beaeka.jpg', alt: 'Partner Brand 10' },
    { id: 11, src: '../cross.jpg', alt: 'Partner Brand 11' },
  ];

  return (
    <>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>

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
            {/* Gradient fade masks */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none hidden md:block"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none hidden md:block"></div>

            {/*
              Scrolling track:
              - Contains logos duplicated once (2× total)
              - translateX(-50%) moves exactly one full copy's width,
                landing back at a visually identical position → seamless loop
            */}
            <div className="flex items-center gap-16 w-max animate-marquee">
              {[...logos, ...logos].map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="h-25 w-32 relative shrink-0 transition-all duration-300 opacity-70 hover:opacity-100 cursor-pointer flex items-center justify-center"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => (e.target.style.display = 'none')}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default TrustedBy;