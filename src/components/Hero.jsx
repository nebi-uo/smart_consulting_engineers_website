import React from 'react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden">
      {/* Full Screen Image Layer */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/20 to-transparent z-10"></div>
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="../aboutsecpic.jpg"
          alt="Engineering structural project"
          className="absolute inset-0 w-full h-full object-cover origin-center"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 tracking-tight leading-[1.1]">
            Committed To <br /><span className="text-accent underline decoration-white/20 underline-offset-8">Excellence.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-12 leading-relaxed font-normal tracking-normal opacity-90 max-w-2xl">
            Delivering robust, sustainable, and rigorously compliant structural engineering solutions for global commercial and infrastructure sectors.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link to="/services">
              <Button variant="primary">Our Services</Button>
            </Link>
            <Link to="/contact">
              <button className="cursor-pointer px-8 py-4 rounded-button font-semibold text-sm tracking-wide uppercase transition-colors duration-300 bg-transparent text-white border border-white hover:bg-white hover:text-primary backdrop-blur-sm">
                Consult With Us
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
