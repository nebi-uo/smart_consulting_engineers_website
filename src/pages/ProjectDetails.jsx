import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Clock, ArrowLeft, CheckCircle2, Info, X } from 'lucide-react';
import { projects } from '../data/projects';
import Button from '../components/ui/Button';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-6 tracking-tight">Project Not Found</h1>
          <p className="text-gray-500 mb-8">The project case study you're looking for doesn't exist.</p>
          <Link to="/projects">
            <Button variant="primary">Return to Portfolio</Button>
          </Link>
        </div>
      </div>
    );
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="overflow-x-hidden bg-white">
      {/* 1. Dynamic Hero Section - Bold High-Fidelity Design */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-40 absolute inset-0 origin-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-transparent to-primary/40"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <Link to="/projects" className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest mb-8 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </Link>
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-none">
              {project.title.split(' ').slice(0, -1).join(' ')} <br />
              <span className="text-accent underline decoration-white/20 underline-offset-8">
                {project.title.split(' ').slice(-1)}
              </span>
            </h1>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12">
              <div className="flex items-center gap-3 text-white/80 border-r border-white/10 pr-8 last:border-0 last:pr-0">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-sm font-semibold uppercase tracking-wider">{project.location}</span>
              </div>
              <div className="flex items-center gap-3 text-white/80 border-r border-white/10 pr-8 last:border-0 last:pr-0">
                <Calendar className="w-5 h-5 text-accent" />
                <span className="text-sm font-semibold uppercase tracking-wider">{project.year}</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Info className="w-5 h-5 text-accent" />
                <span className="text-sm font-semibold uppercase tracking-wider">{project.category}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Minimal Metadata Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 max-w-[1600px] mx-auto bg-white">
        <motion.div {...fadeIn}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 border-t border-b border-gray-100 py-12">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-primary/40">Project Type</span>
              <span className="text-lg font-bold text-primary tracking-tight">{project.category}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-primary/40">Client</span>
              <span className="text-lg font-bold text-primary tracking-tight">{project.client}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-primary/40">Consultants</span>
              <span className="text-lg font-bold text-primary tracking-tight">{project.consultants}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-primary/40">Price (USD)</span>
              <span className="text-lg font-bold text-primary tracking-tight">{project.price}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-primary/40">Location</span>
              <span className="text-lg font-bold text-primary tracking-tight">{project.location}</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. Project Gallery */}
      <section className="py-24 lg:py-40 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <motion.div {...fadeIn} className="text-center mb-24">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Visual Documentation</h2>
          <h3 className="text-4xl md:text-8xl font-bold text-primary tracking-tight leading-none mb-10">Case <span className="text-accent">Gallery</span></h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {project.gallery.map((img, idx) => (
            <motion.div
              key={idx}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: idx * 0.1 }}
              className="h-[500px] overflow-hidden rounded-xl bg-gray-100 group shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`${project.title} gallery ${idx}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Image Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-sm cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={selectedImage}
              alt="Fullscreen gallery view"
              className="max-w-full max-h-full object-contain rounded-sm shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

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
              Redefining <span className="text-accent">Structural Integrity.</span>
            </h2>
            <p className="text-gray-300 text-lg mb-12 font-normal tracking-wide opacity-90 max-w-2xl mx-auto">
              Bringing your most ambitious structural challenges to us. We turn complexity into robust infrastructure.
            </p>
            <div className="flex justify-center flex-wrap gap-6">
              <Link to="/contact">
                <Button variant="white-outline" className="px-12 py-5 font-bold uppercase tracking-widest text-xs border-white/30 hover:border-accent">
                  Start Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
