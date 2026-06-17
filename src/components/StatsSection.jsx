import React from 'react';

const StatsSection = () => (
  <section className="py-24 px-8 max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-16 items-start">
      {/* Left */}
      <div className="max-w-md">
        <h2 className="text-5xl font-display font-bold text-primary mb-8 leading-tight">About Us</h2>
        <p className="text-neutral-dark leading-relaxed text-lg opacity-72">
          We are an expert consulting engineering agency helping businesses find suitable and safe configurations for complex projects. We provide a full range of services—from preliminary analysis to full legal standards compliance.
        </p>
      </div>
      {/* Right Grid */}
      <div className="grid grid-cols-2 gap-x-12 gap-y-16">
        <div>
          <h3 className="text-6xl font-display font-bold text-primary mb-3 leading-tight">10+</h3>
          <p className="text-base text-neutral-dark opacity-72 font-normal">years of expertise</p>
        </div>
        <div>
          <h3 className="text-6xl font-display font-bold text-primary mb-3 leading-tight">1000+</h3>
          <p className="text-base text-neutral-dark opacity-72 font-normal">successful projects</p>
        </div>
        <div>
          <h3 className="text-6xl font-display font-bold text-primary mb-3 leading-tight">400+</h3>
          <p className="text-base text-neutral-dark opacity-72 font-normal">inspections passed</p>
        </div>
        <div>
          <h3 className="text-6xl font-display font-bold text-primary mb-3 leading-tight">95%</h3>
          <p className="text-base text-neutral-dark opacity-72 font-normal">satisfied clients</p>
        </div>
      </div>
    </div>
  </section>
);

export default StatsSection;
