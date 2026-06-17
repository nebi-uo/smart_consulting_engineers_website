import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2, HardHat, Ruler, Home, Zap, BarChart3, ArrowRight
} from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

const Services = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  /**
   * Methodology steps
   */
  const processSteps = [
    {
      num: '01',
      title: 'Consultation',
      desc: 'We begin with a deep-dive discovery session to understand your project scope, constraints, and ambitions before anything else.'
    },
    {
      num: '02',
      title: 'Analysis & Design',
      desc: 'Our engineers perform rigorous computational analysis and produce detailed design documentation to international standards.'
    },
    {
      num: '03',
      title: 'Supervision',
      desc: 'On-site expert supervision ensures that what is designed is executed with zero deviation from specification.'
    },
    {
      num: '04',
      title: 'Handover & Certification',
      desc: 'We close every project with full compliance certificates, as-built records, and structured handover documentation.'
    }
  ];

  return (
    <div className="overflow-x-hidden bg-white">

      {/* ─────────────────────────────────────────────────
          1. HERO — identical pattern to AboutUs & ProjectsPage
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
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-none">
            What We <br />
            <span className="text-accent underline decoration-white/20 underline-offset-8">Deliver.</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto font-normal tracking-wide opacity-90">
            Precision-engineered solutions across structural, civil, and digital disciplines — built to international standards, trusted by global developers.
          </p>
        </motion.div>
      </section>

      {/* ─────────────────────────────────────────────────
          2. SERVICES LIST — horizontal cards like ProjectsPage
      ───────────────────────────────────────────────── */}
      <section className="py-40 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="flex flex-col gap-16 lg:gap-24">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, delay: idx * 0.05 }}
              className={`flex flex-col lg:flex-row bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-700 group ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Service Image */}
              <div className="lg:w-3/5 h-[360px] lg:h-[520px] overflow-hidden relative">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all duration-500" />
                {/* Mobile category badge */}
                <div className="absolute top-10 left-10 lg:hidden">
                  <span className="bg-accent px-4 py-2 text-[10px] font-semibold uppercase text-white tracking-[0.15em] rounded-sm">
                    {svc.category}
                  </span>
                </div>
              </div>

              {/* Service Details */}
              <div className="lg:w-2/5 p-12 lg:p-20 flex flex-col justify-center bg-white relative">
                {/* Desktop category label */}
                <span className="hidden lg:inline-block text-accent text-[11px] font-semibold uppercase tracking-[0.2em] mb-6">
                  {svc.category}
                </span>

                <h3 className="text-4xl md:text-5xl font-bold text-primary mb-8 tracking-tight leading-none group-hover:text-accent transition-colors duration-500">
                  {svc.title}
                </h3>

                <p className="text-neutral-dark text-lg font-normal leading-relaxed opacity-80 mb-10 max-w-md">
                  {svc.description}
                </p>

                {/* Deliverables list */}
                <div className="flex flex-col gap-3 pt-10 border-t border-gray-100 mb-10">
                  {svc.deliverables.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-primary opacity-60">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span className="text-xs font-semibold uppercase tracking-wider">{item}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <Link to={`/service/${svc.id}`}>
                    <button className="cursor-pointer flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary group-hover:text-accent transition-all">
                      View Service Details <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          3. HOW WE WORK — styled 2x2 grid like AboutUs "Why Us"
      ───────────────────────────────────────────────── */}
      <section className="py-32 bg-gray-50/80 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeIn} className="text-center mb-20">
            <SectionTitle title="Our Methodology" className="flex flex-col items-center" />
            <p className="text-neutral-dark text-lg font-medium mt-6 opacity-90">
              A rigorous, four-phase engagement model built for precision and accountability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white p-12 lg:p-16 flex flex-col items-start hover:bg-gray-50 transition-all group relative overflow-hidden"
              >
                {/* Background number */}
                <div className="absolute top-8 right-12 font-mono text-gray-100 text-6xl font-bold opacity-40 group-hover:text-accent/10 transition-all duration-700 select-none">
                  {step.num}
                </div>

                {/* Accent bar */}
                <div className="w-12 h-1 bg-accent/20 mb-10 group-hover:w-24 group-hover:bg-accent transition-all duration-700 ease-in-out" />

                <h3 className="text-3xl font-bold text-primary mb-6 transition-colors group-hover:text-accent tracking-tight">
                  {step.title}
                </h3>
                <p className="text-neutral-dark leading-relaxed font-normal opacity-80 max-w-sm">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          4. ISO / CERTIFICATION STRIP — inline accent marker
      ───────────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          {...fadeIn}
          className="flex flex-col lg:flex-row items-center justify-between gap-12 border border-gray-100 px-12 lg:px-20 py-16 bg-white shadow-sm rounded-xl"
        >
          <div className="text-center lg:text-left">
            <span className="text-accent text-[11px] font-semibold uppercase tracking-[0.2em] mb-4 block">
              Quality Assurance
            </span>
            <h3 className="text-3xl lg:text-4xl font-bold text-primary tracking-tight mb-4">
              ISO 9001:2015 Certified
            </h3>
            <p className="text-neutral-dark opacity-80 font-normal leading-relaxed max-w-lg">
              Every deliverable we produce adheres to internationally recognized management system standards, ensuring consistent quality, traceability, and client confidence across all projects.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 shrink-0">
            {[
              { num: '7+', label: 'Years of Excellence' },
              { num: '100+', label: 'Projects Completed' },
              { num: '15+', label: 'Global Partners' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="text-5xl font-bold text-primary mb-2 tracking-tight group-hover:scale-110 transition-transform duration-500">
                  {stat.num}
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.4em] text-accent opacity-80">
                  {stat.label}
                </div>
                <div className="w-8 h-px bg-gray-100 mt-4 group-hover:w-16 group-hover:bg-accent transition-all duration-700" />
              </div>
            ))}
          </div>
        </motion.div>
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

export default Services;
