import React from 'react';
import SectionTitle from './ui/SectionTitle';
import Button from './ui/Button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutUsSection = () => (
  <section className="py-32 px-6 lg:px-12 border-b border-gray-100 max-w-[1600px] mx-auto overflow-hidden">
    <div className="flex flex-col lg:flex-row gap-20 items-center">
      {/* Sharp Single Image Left */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-1/2 relative bg-gray-100"
      >
        <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4"></div>
        <div className="w-full bg-gray-200 relative overflow-hidden z-10 border border-gray-200">
          <img
            src="../aboutpageimage.png"
            alt="Engineering structural analysis"
            className="w-full h-auto block"
          />
        </div>
        {/* Accent static line */}
        <div className="absolute top-1/2 -right-12 w-24 h-px bg-accent z-20 hidden lg:block"></div>
      </motion.div>

      {/* Clean Premium Text Right */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-1/2 flex flex-col justify-center py-8"
      >
        <SectionTitle title="About Us" className="!mb-10" />
        <h3 className="text-3xl lg:text-4xl font-display font-bold text-primary mb-8 leading-tight tracking-tight">
          Setting the global standard in civil infrastructure since 2020.
        </h3>
        <p className="text-neutral-dark leading-relaxed mb-8 font-normal text-lg opacity-72">
          SMART Consulting Engineers PLC, established in 2020 and based in Addis Ababa, delivers expert civil engineering and infrastructure consultancy services. Backed by experienced professionals, the firm specializes in the planning, design, and supervision of roads, bridges, and related projects, providing reliable, high-quality solutions across both urban and rural environments.
        </p>

        <div className="flex gap-16 pt-10 border-t border-gray-200">
          <div>
            <div className="text-5xl font-display font-bold text-primary mb-2 flex items-baseline gap-1 tracking-tight">
              6 <span className="text-accent text-3xl font-sans font-bold">+</span>
            </div>
            <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Years Experience</div>
          </div>
          <div className="w-px bg-gray-200"></div>
          <div>
            <div className="text-5xl font-display font-bold text-primary mb-2 flex items-baseline gap-1 tracking-tight">
              400 <span className="text-accent text-3xl font-sans font-bold">+</span>
            </div>
            <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Global Projects</div>
          </div>
        </div>

        <div className="mt-14">
          <Link to="/about">
            <Button variant="outline">Learn More</Button>
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutUsSection;
