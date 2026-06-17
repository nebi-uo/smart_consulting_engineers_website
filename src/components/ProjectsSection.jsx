import React from 'react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const ProjectsSection = () => {
  // Use first 4 projects for the home feature
  const featuredProjects = projects.slice(0, 4);

  return (
    <section className="py-32 bg-primary overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="max-w-[1600px] mx-auto px-6 lg:px-12 text-white"
      >

        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 pb-12 border-b border-white/20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-accent"></div>
              <span className="text-accent uppercase tracking-wider text-xs font-semibold">Showcase</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight">Signature <br />Projects</h2>
          </div>
          <div className="mt-8 lg:mt-0">
            <Link to="/projects">
              <Button variant="white-outline">View Portfolio</Button>
            </Link>
          </div>
        </div>

        {/* Simple 2x2 grid of huge image blocks with deep interactions */}
        <div className="grid md:grid-cols-2 gap-0 overflow-hidden group/grid border border-white/10">
          {featuredProjects.map((item, idx) => (
            <Link key={idx} to={`/project/${item.id}`}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="relative h-[500px] md:h-[600px] w-full overflow-hidden group cursor-pointer border border-white/10 bg-gray-900 border-collapse"
              >
                <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-60 group-hover:opacity-80" />

                <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-primary/95 to-transparent transition-all duration-300">
                  <div className="w-12 h-1 bg-accent mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h3 className="text-3xl lg:text-4xl font-display font-bold text-white mb-2 leading-tight tracking-tight transition-transform duration-300 group-hover:-translate-y-1">{item.title}</h3>
                  <p className="text-gray-200 text-xs font-semibold uppercase tracking-wider transform translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {item.location}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
