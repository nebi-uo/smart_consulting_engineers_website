import React from 'react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const ProjectsSection = () => {
  const featuredProjects = projects.slice(0, 4);

  return (
    <section className="py-24 bg-primary overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 text-white">

        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 pb-10 border-b border-white/15">
          <div className="max-w-xl">
            <div className="w-10 h-[2px] bg-accent mb-5" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight">
              Signature<br />Projects
            </h2>
          </div>
          <div className="mt-8 lg:mt-0">
            <Link to="/projects">
              <Button variant="white-outline">View Portfolio</Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 border border-white/10">
          {featuredProjects.map((item, idx) => (
            <Link key={idx} to={`/project/${item.id}`}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                className="relative h-[420px] md:h-[520px] overflow-hidden group cursor-pointer border border-white/10 bg-gray-900"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-75"
                />
                {/* Solid panel — no gradient */}
                <div className="absolute inset-x-0 bottom-0 bg-primary p-8">
                  <div className="w-8 h-[2px] bg-accent mb-4" />
                  <h3 className="text-xl lg:text-2xl font-display font-bold text-white leading-tight tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.location}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;