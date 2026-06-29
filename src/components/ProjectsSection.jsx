import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectsSection = () => {
  const featured = projects.slice(0, 5);

  return (
    <section className="py-24 bg-primary overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 pb-10 border-b border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="w-10 h-[2px] bg-accent mb-5" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight tracking-tight">
              Signature<br />Projects
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 lg:mt-0"
          >
            <Link to="/projects" className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-white/50 hover:text-accent transition-colors group">
              View Full Portfolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Featured large project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-4"
        >
          <Link to={"/project/" + featured[0].id} className="group block relative h-[480px] lg:h-[560px] overflow-hidden bg-gray-900">
            <img
              src={featured[0].image.replace('../', '/')}
              alt={featured[0].title}
              className="absolute inset-0 w-full h-full object-cover opacity-55 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-10 lg:p-14">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent border border-accent/40 px-3 py-1">{featured[0].category}</span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-white/30">{featured[0].year}</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-display font-bold text-white tracking-tight leading-tight mb-3 max-w-2xl">
                {featured[0].title}
              </h3>
              <div className="flex items-center gap-2 text-white/40">
                <MapPin className="w-3 h-3 text-accent shrink-0" />
                <span className="text-xs font-semibold uppercase tracking-wider">{featured[0].location}</span>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/0 group-hover:text-accent transition-all duration-300">
                View Case Study <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* 2 medium projects */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {featured.slice(1, 3).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link to={"/project/" + item.id} className="group block relative h-[320px] lg:h-[380px] overflow-hidden bg-gray-900">
                <img
                  src={item.image.replace('../', '/')}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent border border-accent/40 px-3 py-1">{item.category}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-white/30">{item.year}</span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-display font-bold text-white tracking-tight leading-snug mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <MapPin className="w-3 h-3 text-accent shrink-0" />
                    <span className="text-xs font-semibold uppercase tracking-wider">{item.location}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* 2 smaller projects */}
        <div className="grid md:grid-cols-2 gap-4">
          {featured.slice(3).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link to={"/project/" + item.id} className="group block relative h-[260px] lg:h-[300px] overflow-hidden bg-gray-900">
                <img
                  src={item.image.replace('../', '/')}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent mb-3 block">{item.category}</span>
                  <h3 className="text-lg font-display font-bold text-white tracking-tight leading-snug mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <MapPin className="w-3 h-3 text-accent shrink-0" />
                    <span className="text-[10px] font-semibold uppercase tracking-wider">{item.location}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;