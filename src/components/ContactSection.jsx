import React from 'react';
import SectionTitle from './ui/SectionTitle';
import Button from './ui/Button';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section className="py-32 bg-neutral-white lg:mb-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle title="Connect With Us" subtitle="Access our global network of engineering professionals." />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row mt-16 bg-white border border-gray-200 shadow-sm"
        >
          {/* Advanced Contact Form Left */}
          <div className="w-full lg:w-[45%] p-10 lg:p-16 xl:p-24 border-r border-gray-200 flex flex-col justify-center">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-12 flex items-center gap-3">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              Submit Requisition
            </h3>
            <form className="flex flex-col gap-10">
              <div className="relative">
                <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-gray-300 py-3 text-primary font-medium focus:outline-none focus:border-primary transition-colors" />
              </div>

              <div className="relative">
                <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-gray-300 py-3 text-primary font-medium focus:outline-none focus:border-primary transition-colors" />
              </div>

              <div className="relative">
                <input type="tel" placeholder="Phone Number" className="w-full bg-transparent border-b border-gray-300 py-3 text-primary font-medium focus:outline-none focus:border-primary transition-colors" />
              </div>

              <div className="relative">
                <textarea placeholder="Message Details" rows="2" className="w-full bg-transparent border-b border-gray-300 py-3 mt-2 text-primary font-medium focus:outline-none focus:border-primary transition-colors resize-none overflow-hidden"></textarea>
              </div>

              <Button variant="primary" className="mt-8 self-start group">
                Submit Query
              </Button>
            </form>
          </div>

          {/* Premium Map Right */}
          <div className="w-full lg:w-[55%] relative flex flex-col group/map overflow-hidden min-h-[600px] border-l border-gray-200">
            {/* Map Frame Overlay to make it feel premium */}
            <div className="absolute inset-0 pointer-events-none border-[12px] border-white z-10 mix-blend-screen"></div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1689230559902!5m2!1sen!2s"
              className="absolute inset-0 w-full h-full border-0 opacity-80 mix-blend-multiply flex-1 filter hover:opacity-100 transition-all duration-1000"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>

            <div className="absolute -bottom-1 -right-1 z-20 bg-primary p-12 text-white max-w-sm box-border transform lg:translate-y-4 group-hover/map:translate-y-0 transition-transform duration-500 shadow-[-20px_-20px_0px_#F5F5F5_inset]">
              <h4 className="font-display font-bold text-2xl md:text-3xl mb-6 leading-tight tracking-tight">Global Headquarters</h4>
              <p className="text-gray-200 text-base leading-relaxed mb-8 opacity-90">
                123 Engineering Blv, Suite 400<br />Business District, New York, USA
              </p>
              <div className="w-full h-px bg-white/20 mb-6"></div>
              <a href="mailto:info@smart.com" className="block text-accent hover:text-white transition-colors uppercase text-xs font-semibold tracking-wider mb-3">info@smart.com</a>
              <a href="tel:+15551234567" className="block text-accent hover:text-white transition-colors uppercase text-xs font-semibold tracking-wider">+1 (555) 123-4567</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
