import React from 'react';
import SectionTitle from './ui/SectionTitle';
import Button from './ui/Button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutUsSection = () => (
  <section className="py-24 px-6 lg:px-16 border-b border-gray-100 max-w-[1600px] mx-auto overflow-hidden">
    <div className="flex flex-col lg:flex-row gap-16 items-center">

      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full lg:w-1/2 relative"
      >
        <div className="absolute inset-0 bg-primary translate-x-3 translate-y-3" />
        <div className="relative z-10 border border-gray-200">
          <img
            src="/aboutpageimage.png"
            alt="Engineering structural analysis"
            className="w-full h-auto block"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full lg:w-1/2 flex flex-col justify-center"
      >
        <SectionTitle title="About Us" className="!mb-8" />
        <h3 className="text-2xl lg:text-3xl font-display font-bold text-primary mb-6 leading-tight tracking-tight">
          Setting the standard in civil infrastructure since 2020.
        </h3>
        <p className="text-neutral-dark leading-relaxed mb-6 text-base opacity-80">
          SMART Consulting Engineers PLC, established in 2020 and based in Addis Ababa, delivers expert civil engineering and infrastructure consultancy services. The firm specializes in planning, design, and supervision of roads, bridges, and related projects across urban and rural environments.
        </p>

        <div className="flex gap-12 pt-8 border-t border-gray-200">
          <div>
            <div className="text-4xl font-display font-bold text-primary mb-1 tracking-tight">
              6<span className="text-accent text-2xl">+</span>
            </div>
            <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Years Experience</div>
          </div>
          <div className="w-px bg-gray-200" />
          <div>
            <div className="text-4xl font-display font-bold text-primary mb-1 tracking-tight">
              100<span className="text-accent text-2xl">+</span>
            </div>
            <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Projects Completed</div>
          </div>
        </div>

        <div className="mt-10">
          <Link to="/about">
            <Button variant="outline">Learn More</Button>
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutUsSection;