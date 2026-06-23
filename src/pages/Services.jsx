import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

const Services = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, ease: 'easeOut' }
  };

  const processSteps = [
    { num: '01', title: 'Consultation',         desc: 'A deep-dive session to understand your project scope, constraints, and goals before anything else.' },
    { num: '02', title: 'Analysis & Design',    desc: 'Rigorous computational analysis and detailed design documentation to international standards.' },
    { num: '03', title: 'Supervision',           desc: 'On-site expert supervision ensures execution with zero deviation from specification.' },
    { num: '04', title: 'Handover',              desc: 'Full compliance certificates, as-built records, and structured handover documentation.' },
  ];

  return (
    <div className="overflow-x-hidden bg-white">

      {/* Hero */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden bg-primary text-center">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            src="/hero.jpg"
            alt="Structural engineering"
            className="w-full h-full object-cover opacity-40 absolute inset-0"
          />
          <div className="absolute inset-0 bg-primary/50" />
        </div>
        <motion.div {...fadeIn} className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 tracking-tight leading-tight">
            What We<br />
            <span className="text-accent">Deliver.</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-xl mx-auto font-normal opacity-90">
            Precision-engineered solutions across structural and civil disciplines, built to international standards.
          </p>
        </motion.div>
      </section>

      {/* Services List */}
      <section className="py-24 px-6 lg:px-16 max-w-[1600px] mx-auto">
        <div className="flex flex-col gap-16">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: idx * 0.04 }}
              className={`flex flex-col lg:flex-row overflow-hidden border border-gray-100 group ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-3/5 h-[300px] lg:h-[460px] overflow-hidden relative">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="lg:w-2/5 p-10 lg:p-16 flex flex-col justify-center bg-white">
                <span className="text-accent text-[11px] font-semibold uppercase tracking-widest mb-4 block">
                  {svc.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-5 tracking-tight leading-tight">
                  {svc.title}
                </h3>
                <p className="text-neutral-dark text-sm leading-relaxed opacity-80 mb-8 max-w-md">
                  {svc.description}
                </p>
                <div className="flex flex-col gap-2 pt-6 border-t border-gray-100 mb-8">
                  {svc.deliverables.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-primary/60">
                      <div className="w-1 h-1 bg-accent rounded-full shrink-0" />
                      <span className="text-xs font-semibold uppercase tracking-wider">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to={`/service/${svc.id}`}>
                  <button className="cursor-pointer flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors">
                    View Details <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <motion.div {...fadeIn} className="text-center mb-16">
            <SectionTitle title="Our Methodology" className="flex flex-col items-center !mb-4" />
            <p className="text-neutral-dark text-sm opacity-80">A four-phase engagement model built for precision.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white p-10 lg:p-14 flex flex-col group relative overflow-hidden hover:bg-gray-50 transition-colors"
              >
                <span className="absolute top-6 right-8 font-mono text-gray-100 text-5xl font-bold select-none">{step.num}</span>
                <div className="w-10 h-[2px] bg-accent mb-8 group-hover:w-20 transition-all duration-500" />
                <h3 className="text-2xl font-bold text-primary mb-4 tracking-tight">{step.title}</h3>
                <p className="text-neutral-dark text-sm leading-relaxed opacity-80 max-w-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
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
              Bring your most complex engineering challenges to us.
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

export default Services;