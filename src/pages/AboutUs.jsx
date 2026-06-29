import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Trophy, Zap } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const featureCards = [
    { value: "6+",   label: "Years of Experience" },
    { value: "30+", label: "Projects Completed" },
    { value: "3+",  label: "Global Partners" },
    { value: "ISO",  label: "Certified Standards" },
    { value: "43+",  label: "Professionals on Duty" }
  ];

  const whyUsCards = [
    { num: "01", title: "Our Mission",     desc: "To deliver high-quality, reliable, and multidisciplinary engineering consultancy services for infrastructure development, driven by professionalism, strong work ethics, and trusted partnerships, while creating lasting value for clients, employees, and communities.", icon: <Target className="w-8 h-8 text-accent" /> },
    { num: "02", title: "Our Vision",      desc: "To be a leading national and internationally recognized engineering consultancy, distinguished by strong governance, professional integrity, technical excellence, and a sustained contribution to sustainable development.", icon: <Eye    className="w-8 h-8 text-accent" /> },
    { num: "03", title: "Core Values",     desc: "We are committed to integrity, technical excellence, innovation, and collaboration, delivering practical, high-quality engineering solutions that meet local needs while creating lasting value for our clients and communities.", icon: <Trophy className="w-8 h-8 text-accent" /> },
    { num: "04", title: "Quality Policy",  desc: "SMART Consulting Engineers PLC is committed to exceeding client expectations through quality management, skilled professionals, continuous improvement, and a strong focus on safety, sustainability, and long-term value.", icon: <Zap    className="w-8 h-8 text-accent" /> },
  ];

  const leaders = [
    { name: "Mr. Behailu Tsegaye", role: "General Manager / Partner and Senior Hydrologist", image: "/leader2.png" },
    { name: "Mr. Merawi T/Mariam", role: "Partner and Senior Highway Engineer", image: "/mer.png"  },
    { name: "Mr. Sofonias Loulseged", role: "Partner and Senior Contract Engineer", image: "/leader3.png" },
    { name: "Mr. Misleneh", role: "Head of HR Department", image: "../staff-1.png" },
    { name: "Mr. Kirubel Estifanos", role: "Head of Building Department / Senior Architect", image: "../kirubel.png" },
    { name: "Mr. Endalkachew Kassaye", role: "Head of Bridge and Highway Design Department / Senior Highway Engineer", image: "../endalkachew.png" },
    { name: "Ms. Frehiwot Teshome", role: "Head of Finance Department", image: "../frehiwot.png" }
  ];

  return (
    <div className="overflow-x-hidden bg-white">

      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            src="../aboutpageimage.png"
            alt="Engineering office"
            className="w-full h-full object-cover opacity-40 absolute inset-0"
          />
          <div className="absolute inset-0 bg-primary/20" />
        </div>
        <motion.div {...fadeIn} className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 tracking-tight leading-tight">
            Our Legacy.<br />
            <span className="text-accent">Your Foundation.</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-xl mx-auto font-normal opacity-90">
            Years of experience combined with technical precision to build infrastructure that endures.
          </p>
        </motion.div>
      </section>

      {/* Who We Are */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <motion.div {...fadeIn} className="text-center mb-16">
          <SectionTitle title="Who We Are" className="flex flex-col items-center !mb-6" />
          <p className="text-neutral-dark text-base leading-relaxed max-w-3xl mx-auto opacity-80">
            SMART Consulting and Engineering is a multidisciplinary engineering consultancy firm established in 2020 to provide professional consulting services in the fields of Highway and Bridge Engineering, Architectural and Infrastructure, Water Resources and Irrigation Engineering, And Related Infrastructure development projects. SMART Consulting and Engineering is staffed by a team of more than 43 qualified professionals and support personnel, comprising engineers, architects, surveyors and administrative staff. The firm's multidisciplinary expertise enables it to undertake projects of varying size and complexity while ensuring compliance with national and international engineering standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {featureCards.map((card, idx) => (
            <motion.div key={idx} {...fadeIn} transition={{ ...fadeIn.transition, delay: idx * 0.08 }} className="flex flex-col items-center text-center">
              <div className="text-5xl font-bold text-primary mb-2 tracking-tight">{card.value}</div>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-accent">{card.label}</div>
              <div className="w-6 h-px bg-gray-200 mt-4" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Smart Advantage */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <motion.div {...fadeIn} className="text-center mb-16">
            <SectionTitle title="The SMART Advantage" className="flex flex-col items-center !mb-4" />
            <p className="text-neutral-dark text-base opacity-80">Four pillars that define how we work.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
            {whyUsCards.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white p-10 lg:p-14 flex flex-col items-start group relative overflow-hidden hover:bg-gray-50 transition-colors"
              >
                <span className="absolute top-6 right-8 font-mono text-gray-100 text-5xl font-bold select-none">
                  {item.num}
                </span>
                <div className="w-10 h-[2px] bg-accent mb-8 group-hover:w-20 transition-all duration-500" />
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-4 tracking-tight">{item.title}</h3>
                <p className="text-neutral-dark leading-relaxed text-sm opacity-80 max-w-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-12">
          <motion.div {...fadeIn}>
            <SectionTitle title="Our Leadership" className="!mb-4" />
            <p className="text-neutral-dark text-base opacity-80 leading-relaxed max-w-xl">
              Guided by seasoned engineers and project managers committed to technical excellence.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {leaders.map((leader, idx) => (
            <motion.div key={idx} {...fadeIn} transition={{ ...fadeIn.transition, delay: idx * 0.1 }} className="group">
              <div className="h-[400px] w-full bg-gray-100 overflow-hidden mb-6">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="pl-4 border-l-2 border-accent">
                <h4 className="text-lg font-bold text-primary mb-1 tracking-tight">{leader.name}</h4>
                <p className="text-accent text-xs font-semibold uppercase tracking-widest">{leader.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA — solid, no image, no gradient */}
      <section className="py-32 bg-primary">
        <div className="max-w-3xl mx-auto text-center px-6">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
              Ready to start your next project?
            </h2>
            <p className="text-gray-300 text-base mb-10 opacity-90 max-w-xl mx-auto">
              Bring your most complex engineering challenges to us. We transform ambition into infrastructure that endures.
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

export default AboutUs;