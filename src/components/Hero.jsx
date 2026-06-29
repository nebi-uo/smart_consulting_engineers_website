import React from 'react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-primary/40 z-10" />
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          src="../herosec.png"
          alt="Engineering structural project"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-16 mt-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 tracking-tight leading-[1.05]">
            Committed To<br />
            <span className="text-accent">Excellence.</span>
          </h1>
          <p className="text-base md:text-lg text-gray-200 mb-10 leading-relaxed max-w-xl">
            Delivering robust, sustainable, and innovative engineering solutions across commercial and infrastructure sectors.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/services">
              <Button variant="primary">Our Services</Button>
            </Link>
            <Link to="/contact">
              <button className="cursor-pointer px-7 py-3.5 text-xs font-semibold tracking-widest uppercase transition-colors duration-200 bg-transparent text-white border border-white hover:bg-white hover:text-primary">
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