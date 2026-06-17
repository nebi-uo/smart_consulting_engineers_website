import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Building2, HardHat, Ruler, Home, Zap, BarChart3,
  ArrowLeft, CheckCircle2, ShieldCheck, Zap as TechIcon
} from 'lucide-react';
import { services } from '../data/services';
import Button from '../components/ui/Button';

// Icon mapping to Lucide components
const iconMap = {
  Building2: <Building2 className="w-8 h-8" />,
  HardHat: <HardHat className="w-8 h-8" />,
  Ruler: <Ruler className="w-8 h-8" />,
  Home: <Home className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  BarChart3: <BarChart3 className="w-8 h-8" />,
};

const ServiceDetails = () => {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-6 tracking-tight">Service Not Found</h1>
          <p className="text-gray-500 mb-8 max-w-sm mx-auto">The engineering discipline you're looking for doesn't exist in our current catalog.</p>
          <Link to="/services">
            <Button variant="primary">Return to Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  return (
    <div className="overflow-x-hidden bg-white">

      {/* ─────────────────────────────────────────────────
          1. HERO — exact replica of Services.jsx
      ───────────────────────────────────────────────── */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-primary text-center">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/hero.jpg"
            alt="Structural engineering services"
            className="w-full h-full object-cover opacity-50 absolute inset-0 origin-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/20" />
        </div>

        <motion.div {...fadeIn} className="relative z-10 max-w-4xl mx-auto px-6">
          <Link to="/services" className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest mb-10 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-none">
            {service.title.split(' ').slice(0, -1).join(' ')} <br />
            <span className="text-accent underline decoration-white/20 underline-offset-8">{service.title.split(' ').slice(-1)}</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto font-normal tracking-wide opacity-90">
            {service.description}
          </p>
        </motion.div>
      </section>

      {/* 2. Minimal Summary Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 max-w-[1600px] mx-auto bg-white">
        <motion.div {...fadeIn}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-b border-gray-100 py-12">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-primary/40">Category</span>
              <span className="text-lg font-bold text-primary tracking-tight">{service.category}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-primary/40">Brief Summary</span>
              <span className="text-lg font-medium text-primary tracking-tight max-w-2xl">{service.description}</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. Main Service Image */}
      <section className="px-6 lg:px-12 max-w-[1600px] mx-auto mb-20">
        <motion.div {...fadeIn} className="h-[60vh] rounded-xl overflow-hidden shadow-sm">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        </motion.div>
      </section>

      {/* 4. Primary Deliverables List / Visual Grid */}
      <section className="pb-24 lg:pb-40 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <motion.div {...fadeIn} className="mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Core Execution</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary tracking-tight leading-none">Primary Deliverables</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.deliverables.map((item, i) => (
            <motion.div
              key={i}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: i * 0.1 }}
              className="p-10 border border-gray-100 rounded-xl bg-gray-50 flex items-start gap-4 hover:shadow-md transition-shadow"
            >
              <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">{item}</span>
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
              Bring your most complex engineering challenges to us. We transform ambition into infrastructure that endures.
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

export default ServiceDetails;
