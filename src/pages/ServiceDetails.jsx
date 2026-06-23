import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, HardHat, Ruler, Home, Zap, BarChart3, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { services } from '../data/services';
import Button from '../components/ui/Button';

const iconMap = {
  Building2: <Building2 className="w-7 h-7" />,
  HardHat:   <HardHat   className="w-7 h-7" />,
  Ruler:     <Ruler     className="w-7 h-7" />,
  Home:      <Home      className="w-7 h-7" />,
  Zap:       <Zap       className="w-7 h-7" />,
  BarChart3: <BarChart3 className="w-7 h-7" />,
};

const ServiceDetails = () => {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!service) return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary mb-4 tracking-tight">Service Not Found</h1>
        <p className="text-gray-500 mb-8 text-sm max-w-xs mx-auto">This service doesn't exist in our current catalog.</p>
        <Link to="/services"><Button variant="primary">Return to Services</Button></Link>
      </div>
    </div>
  );

  const fadeIn = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease: 'easeOut' }
  };

  return (
    <div className="overflow-x-hidden bg-white">

      {/* Hero */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-primary text-center">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            src={service.image}
            alt="Structural engineering"
            className="w-full h-full object-cover opacity-40 absolute inset-0"
          />
          <div className="absolute inset-0 bg-primary/50" />
        </div>
        <motion.div {...fadeIn} className="relative z-10 max-w-3xl mx-auto px-6">
          <Link to="/services" className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest mb-8 hover:text-white transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Services
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 tracking-tight leading-tight">
            {service.title}
          </h1>
          <p className="text-lg text-gray-200 max-w-xl mx-auto font-normal opacity-90">
            {service.description}
          </p>
        </motion.div>
      </section>

      {/* Summary */}
      <section className="py-16 px-6 lg:px-16 max-w-[1600px] mx-auto">
        <motion.div {...fadeIn}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-b border-gray-100 py-10">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-primary/40">Category</span>
              <p className="text-sm font-bold text-primary mt-1">{service.category}</p>
            </div>
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-primary/40">Overview</span>
              <p className="text-sm font-medium text-primary mt-1 leading-relaxed max-w-2xl">{service.description}</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Image */}
      <section className="px-6 lg:px-16 max-w-[1600px] mx-auto mb-16">
        <motion.div {...fadeIn} className="h-[50vh] overflow-hidden">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        </motion.div>
      </section>

      {/* Deliverables */}
      <section className="pb-24 px-6 lg:px-16 max-w-[1600px] mx-auto">
        <motion.div {...fadeIn} className="mb-10">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Core Execution</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Primary Deliverables</h3>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.deliverables.map((item, i) => (
            <motion.div
              key={i}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: i * 0.06 }}
              className="p-7 border border-gray-100 bg-gray-50 flex items-start gap-4"
            >
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span className="text-xs font-semibold uppercase tracking-wider text-primary leading-relaxed">{item}</span>
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
              Bring your most complex engineering challenges to our team.
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

export default ServiceDetails;