import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectsPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  return (
    <div className="overflow-x-hidden bg-white">

      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-primary text-center">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            src="/heroimage.png"
            alt="Engineering structural project"
            className="w-full h-full object-cover opacity-40 absolute inset-0"
          />
          <div className="absolute inset-0 bg-primary/50" />
        </div>
        <motion.div {...fadeIn} className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 tracking-tight leading-tight">
            Portfolio of<br />
            <span className="text-accent">Engineering.</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-xl mx-auto font-normal opacity-90">
            Signature projects built on precision, expertise, and a commitment to lasting infrastructure.
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-6 lg:px-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: idx * 0.04 }}
              className="flex flex-col bg-white border border-gray-100 group h-full"
            >
              <div className="h-52 overflow-hidden relative bg-gray-100 shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-accent px-2.5 py-1 text-[9px] font-bold uppercase text-white tracking-widest">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-base font-bold text-primary mb-2 tracking-tight leading-snug group-hover:text-accent transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-neutral-dark text-xs leading-relaxed opacity-70 mb-5 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-x-4 gap-y-2 py-4 border-t border-gray-100 mb-4">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-accent shrink-0" />
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-primary/60 truncate">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-accent shrink-0" />
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-primary/60">{project.year}</span>
                    </div>
                  </div>
                  <Link to={`/project/${project.id}`}>
                    <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors cursor-pointer">
                      View Case Study <ArrowRight className="w-3 h-3" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-primary">
        <div className="max-w-3xl mx-auto text-center px-6">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Ready to start your next project?
            </h2>
            <p className="text-gray-300 text-base mb-10 opacity-90 max-w-xl mx-auto">
              Bring your most ambitious structural challenges to us.
            </p>
            <Link to="/contact">
              <Button variant="white-outline">Partner With Us</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;