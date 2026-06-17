import SectionTitle from './ui/SectionTitle';
import Card from './ui/Card';
import { Building2, HardHat, Ruler, Home, Zap, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

// Mapping for Lucide icons
const iconMap = {
  Building2: <Building2 className="w-8 h-8" />,
  HardHat: <HardHat className="w-8 h-8" />,
  Ruler: <Ruler className="w-8 h-8" />,
  Home: <Home className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  BarChart3: <BarChart3 className="w-8 h-8" />,
};

const ServicesSection = () => {
  // Use first 4 services for the home feature
  const featuredServices = services.slice(0, 4);

  return (
    <section className="py-32 bg-gray-50 max-w-[1600px] mx-auto px-6 lg:px-12 border-b border-gray-100 overflow-hidden">
      <div className="flex flex-col xl:flex-row gap-20 items-start">
        {/* Sticky Text Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="w-full xl:w-1/3 xl:sticky xl:top-32"
        >
          <SectionTitle title="Our Services" className="!mb-6" />
          <p className="text-neutral-dark text-lg leading-relaxed mb-8 font-normal opacity-72">
            We deliver top-tier structural analysis, meticulous construction supervision, and comprehensive documentation for any scale of civil project globally.
          </p>
          <div className="flex items-center gap-3 text-accent text-xs font-semibold uppercase tracking-wider mt-12 bg-white px-6 py-4 shadow-[10px_10px_0px_#131E5E] inline-flex border border-gray-100">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            ISO 9001:2015 Certified
          </div>
        </motion.div>

        {/* 2x2 Clean Grid Right */}
        <div className="w-full xl:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredServices.map((svc, idx) => (
            <Link key={idx} to={`/service/${svc.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="h-full"
              >
                <Card
                  title={svc.title}
                  description={svc.description}
                  icon={iconMap[svc.iconName]}
                  bgImage={svc.image}
                />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
