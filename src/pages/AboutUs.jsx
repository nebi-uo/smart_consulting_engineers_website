import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Zap, Trophy, Globe, Briefcase } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.3 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: false }
  };

  const featureCards = [
    { value: "6+", label: "Years of Experience" },
    { value: "100+", label: "Projects Completed" },
    { value: "15+", label: "Global Partners" },
    { value: "ISO", label: "Certified Standards" },
  ];

  const whyUsCards = [
    { num: "01", title: "Our Mission", desc: "To deliver innovative, sustainable solutions in highway and bridge engineering that create lasting value for clients and communities.", icon: <Target className="w-10 h-10 mb-6 text-accent" /> },
    { num: "02", title: "Our Vision", desc: "To deliver innovative, sustainable engineering solutions that create lasting value for clients and communities.", icon: <Eye className="w-10 h-10 mb-6 text-accent" /> },
    { num: "03", title: "Core Values", desc: "We are responsible and ethical, progressive in continuous improvement, contextual in tailoring solutions, and collaborative innovators driving practical and effective outcomes.", icon: <Trophy className="w-10 h-10 mb-6 text-accent" /> },
    { num: "04", title: "Quality Policy", desc: "We deliver high-quality, safe, and sustainable highway and bridge services that maximize value for all stakeholders.", icon: <Zap className="w-10 h-10 mb-6 text-accent" /> },
  ];

  const leaders = [
    { name: "Dr. Samuel Kebede", role: "Chief Executive Officer", image: "../leader2.png" },
    { name: "Ing. Martha Tadesse", role: "Head of Structural Design", image: "../merawi.png" },
    { name: "Dawit Abraham", role: "Director of Global Operations", image: "../leader3.png" },
  ];

  return (
    <div className="overflow-x-hidden bg-white">
      {/* 1. Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="../aboutpageimage.png"
            alt="Engineering office"
            className="w-full h-full object-cover opacity-50 absolute inset-0 origin-center"
          />
          {/* Subtle gradient for navbar legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/20"></div>
        </div>
        <motion.div
          {...fadeIn}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Our Legacy. <br /><span className="text-accent underline decoration-white/20 underline-offset-8">Your Foundation.</span></h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto font-normal tracking-wide opacity-90">Combining years of experience with cutting-edge technology to build a safer world.</p>
        </motion.div>
      </section>

      {/* 2. Who We Are Section - Text-Centric Stats */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto bg-white">
        <motion.div {...fadeIn} className="text-center mb-24">
          <SectionTitle title="Who We Are" className="flex flex-col items-center mb-8" />
          <p className="text-neutral-dark text-lg leading-relaxed max-w-4xl mx-auto font-normal opacity-90">
            SMART Consulting Engineers PLC, established in February 2020 and headquartered in Addis Ababa, Ethiopia, provides multidisciplinary consultancy services in civil engineering and infrastructure development. Founded by experienced professionals with strong backgrounds in planning, design, construction, and supervision of roads, bridges, and related projects, the firm brings deep technical and industry expertise. With a commitment to quality and efficiency, SMART Consulting Engineers mobilizes skilled teams to deliver reliable solutions across projects of all sizes in both urban and rural environments.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {featureCards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn}
              className="flex flex-col items-center text-center group"
            >
              <div className="text-6xl md:text-7xl font-bold text-primary mb-3 tracking-tight group-hover:scale-110 transition-transform duration-500">{card.value}</div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent opacity-80 group-hover:opacity-100 transition-opacity">{card.label}</div>
              <div className="w-8 h-px bg-gray-100 mt-6 group-hover:w-16 group-hover:bg-accent transition-all duration-700"></div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. Why Us Section - Styled Colored Background */}
      <section className="py-32 bg-gray-50/80 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeIn} className="text-center mb-20">
            <SectionTitle title="The Smart Advantage" className="flex flex-col items-center" />
            <p className="text-neutral-dark text-lg font-medium mt-6 opacity-90">Defining the future of stability through four core pillars.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
            {whyUsCards.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white p-12 lg:p-16 flex flex-col items-start hover:bg-gray-50 transition-all group relative overflow-hidden"
              >
                {/* Subtle technical numbering */}
                <div className="absolute top-8 right-12 font-mono text-gray-100 text-6xl font-bold opacity-40 group-hover:text-accent/10 transition-all duration-700 select-none">
                  {item.num}
                </div>

                {/* Accent marker */}
                <div className="w-12 h-1 bg-accent/20 mb-10 group-hover:w-24 group-hover:bg-accent transition-all duration-700 ease-in-out"></div>

                <div className="opacity-80 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 mb-2">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold text-primary mb-6 transition-colors group-hover:text-accent tracking-tight">{item.title}</h3>
                <p className="text-neutral-dark leading-relaxed font-normal opacity-80 max-w-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Leaders Section - Seamless Stack */}
      <section className="py-40 px-6 lg:px-12 max-w-7xl mx-auto bg-white">
        <div className="flex flex-col lg:flex-row gap-20 items-end mb-24 justify-between border-b border-gray-100 pb-16">
          <motion.div {...fadeIn} className="max-w-2xl text-left">
            <SectionTitle title="Our Leadership" />
            <p className="text-neutral-dark text-lg font-medium mt-6 opacity-90 leading-relaxed">
              Guided by a team of world-class engineers and visionary project managers, Smart Consulting Engineers PLC maintains a standard of excellence that is unmatched in the industry.
            </p>
          </motion.div>
          <div className="hidden lg:block h-px w-24 bg-accent/30 mb-8"></div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false }}
          className="grid md:grid-cols-3 gap-16"
        >
          {leaders.map((leader, idx) => (
            <motion.div key={idx} variants={fadeIn} className="group cursor-pointer">
              <div className="h-[480px] w-full bg-gray-50 overflow-hidden mb-10 shadow-lg rounded-lg transition-all duration-700 group-hover:shadow-lg group-hover:-translate-y-2">
                <img src={leader.image} alt={leader.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale-[0.2]" />
              </div>
              <div className="pl-6 border-l-2 border-accent transition-all duration-500 group-hover:border-primary group-hover:pl-8">
                <h4 className="text-2xl font-bold text-primary mb-1 transition-colors group-hover:text-accent">{leader.name}</h4>
                <p className="text-accent text-[11px] font-semibold uppercase tracking-[0.2em] opacity-80">{leader.role}</p>
              </div>
            </motion.div>
          ))}
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

export default AboutUs;
