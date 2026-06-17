import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectsPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="overflow-x-hidden bg-white">
      {/* 1. Hero Section - Exact Design of About Us Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-primary text-center">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="../heroimage.png"
            alt="Engineering structural project"
            className="w-full h-full object-cover opacity-50 absolute inset-0 origin-center"
          />
          {/* Subtle gradient for navbar legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/20"></div>
        </div>

        <motion.div {...fadeIn} className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-none">
            Portfolio of <br />
            <span className="text-accent underline decoration-white/20 underline-offset-8">Engineering.</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto font-normal tracking-wide opacity-90">
            Showcase of our signature projects that define international skylines and urban resilience through precision engineering.
          </p>
        </motion.div>
      </section>

      {/* 2. Projects List - Modern 3-Column Grid */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.7, delay: idx * 0.05 }}
              className="flex flex-col bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group h-full"
            >
              {/* Project Image */}
              <div className="h-56 overflow-hidden relative bg-gray-100 shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all duration-500"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-accent px-3 py-1 text-[9px] font-semibold uppercase text-white tracking-[0.15em] rounded-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 flex flex-col flex-grow justify-between bg-white">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3 tracking-tight leading-snug group-hover:text-accent transition-colors duration-500 line-clamp-2 min-h-[3.5rem] flex items-center">
                    {project.title}
                  </h3>

                  <p className="text-neutral-dark text-xs font-normal leading-relaxed opacity-80 mb-6 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-3 py-4 border-t border-gray-100 text-primary/70 mb-4">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span className="text-[10px] font-semibold uppercase tracking-wider truncate" title={project.location}>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Calendar className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span className="text-[10px] font-semibold uppercase tracking-wider truncate">{project.year}</span>
                    </div>
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-3.5 h-3.5 flex items-center justify-center font-bold text-accent text-xs shrink-0">$</div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider truncate" title={project.price}>Price: {project.price}</span>
                    </div>
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-3.5 h-3.5 flex items-center justify-center relative shrink-0">
                        <span className="absolute w-1.5 h-1.5 rounded-full bg-accent animate-ping opacity-75"></span>
                        <span className="absolute w-1.5 h-1.5 rounded-full bg-accent"></span>
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider truncate" title={project.status}>Status: {project.status}</span>
                    </div>
                  </div>

                  <div className="mt-2 border-t border-gray-50 pt-4">
                    <Link to={`/project/${project.id}`} className="inline-block">
                      <button className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary group-hover:text-accent transition-all cursor-pointer">
                        View Case Study <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.jpg"
            alt="Construction blueprint"
            className="w-full h-full object-cover opacity-20 grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-primary/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 leading-tight tracking-tight">
              Ready to Build the <span className="text-accent">Unstoppable?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-12 font-normal tracking-wide opacity-90 max-w-2xl mx-auto">
              Bring your most ambitious structural challenges to us. We turn complexity into robust infrastructure.
            </p>
            <div className="flex justify-center flex-wrap gap-6">
              <Link to="/contact">
                <Button variant="white-outline" className="px-12 py-5 font-bold uppercase tracking-widest text-xs border-white/30 hover:border-accent">
                  Partner With SEC PLC
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
