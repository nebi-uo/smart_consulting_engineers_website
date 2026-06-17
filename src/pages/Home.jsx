import React from 'react';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import AboutUsSection from '../components/AboutUsSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <>
      <Hero />
      <TrustedBy />
      <AboutUsSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default Home;
