import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Info, ArrowLeft, X } from 'lucide-react';
import { projects } from '../data/projects';
import Button from '../components/ui/Button';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!project) return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary mb-4 tracking-tight">Project Not Found</h1>
        <p className="text-gray-500 mb-8 text-sm">The project case study you're looking for doesn't exist.</p>
        <Link to="/projects"><Button variant="primary">Return to Portfolio</Button></Link>
      </div>
    </div>
  );

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="overflow-x-hidden bg-white">

      {/* Hero */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-40 absolute inset-0"
          />
          <div className="absolute inset-0 bg-primary/50" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <Link to="/projects" className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest mb-8 hover:text-white transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Portfolio
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              {project.title}
            </h1>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="flex items-center gap-2 text-white/70">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-xs font-semibold uppercase tracking-wider">{project.location}</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Calendar className="w-4 h-4 text-accent" />
                <span className="text-xs font-semibold uppercase tracking-wider">{project.year}</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Info className="w-4 h-4 text-accent" />
                <span className="text-xs font-semibold uppercase tracking-wider">{project.category}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metadata */}
      <section className="py-16 px-6 lg:px-16 max-w-[1600px] mx-auto">
        <motion.div {...fadeIn}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 border-t border-b border-gray-100 py-10">
            {[
              { label: "Project Type", value: project.category },
              { label: "Client",       value: project.client },
              { label: "Consultants",  value: project.consultants },
              { label: "Price (USD)",  value: project.price },
              { label: "Location",     value: project.location },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-primary/40">{item.label}</span>
                <span className="text-sm font-bold text-primary tracking-tight">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6 lg:px-16 max-w-[1600px] mx-auto">
        <motion.div {...fadeIn} className="mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Visual Documentation</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary tracking-tight">Project Gallery</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {project.gallery.map((img, idx) => (
            <motion.div
              key={idx}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: idx * 0.08 }}
              className="h-[360px] overflow-hidden bg-gray-100 cursor-pointer group"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`${project.title} ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              src={selectedImage}
              alt="Gallery fullscreen"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-32 bg-primary">
        <div className="max-w-3xl mx-auto text-center px-6">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Start your next project with us.
            </h2>
            <p className="text-gray-300 text-base mb-10 opacity-90 max-w-xl mx-auto">
              We turn the most complex structural challenges into infrastructure that endures.
            </p>
            <Link to="/contact">
              <Button variant="white-outline">Start Consultation</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;