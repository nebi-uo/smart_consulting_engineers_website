import { Building2, HardHat, Ruler, Home, Zap, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from './ui/SectionTitle';
import Card from './ui/Card';
import { services } from '../data/services';

const iconMap = {
  Building2: <Building2 className="w-6 h-6" />,
  HardHat:   <HardHat   className="w-6 h-6" />,
  Ruler:     <Ruler     className="w-6 h-6" />,
  Home:      <Home      className="w-6 h-6" />,
  Zap:       <Zap       className="w-6 h-6" />,
  BarChart3: <BarChart3 className="w-6 h-6" />,
};

const ServicesSection = () => {
  const featuredServices = services.slice(0, 4);

  return (
    <section className="py-24 px-6 lg:px-16 border-b border-gray-100 max-w-[1600px] mx-auto overflow-hidden">
      <div className="flex flex-col xl:flex-row gap-16 items-start">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="w-full xl:w-1/3 xl:sticky xl:top-28"
        >
          <SectionTitle title="Our Services" className="!mb-6" />
          <p className="text-neutral-dark text-base leading-relaxed mb-8 opacity-80">
            Providing expert engineering consultancy services that support informed decisions, innovative designs, and successful project delivery. 
          </p>
        </motion.div>

        <div className="w-full xl:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredServices.map((svc, idx) => (
            <Link key={idx} to={`/service/${svc.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
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