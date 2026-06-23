import React from 'react';
import SectionTitle from './ui/SectionTitle';
import Button from './ui/Button';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle title="Connect With Us" subtitle="Reach our team of engineering professionals." />
        </motion.div>

        <div className="flex flex-col lg:flex-row mt-12 border border-gray-200">

          {/* Form */}
          <div className="w-full lg:w-[45%] p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-gray-200">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-10">Submit Inquiry</p>
            <form className="flex flex-col gap-8">
              <input type="text" placeholder="Full Name"
                className="w-full bg-transparent border-b border-gray-200 py-3 text-primary text-sm font-medium focus:outline-none focus:border-primary transition-colors placeholder:text-gray-300" />
              <input type="email" placeholder="Email Address"
                className="w-full bg-transparent border-b border-gray-200 py-3 text-primary text-sm font-medium focus:outline-none focus:border-primary transition-colors placeholder:text-gray-300" />
              <input type="tel" placeholder="Phone Number"
                className="w-full bg-transparent border-b border-gray-200 py-3 text-primary text-sm font-medium focus:outline-none focus:border-primary transition-colors placeholder:text-gray-300" />
              <textarea placeholder="Message" rows="3"
                className="w-full bg-transparent border-b border-gray-200 py-3 text-primary text-sm font-medium focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-gray-300" />
              <Button variant="primary" className="self-start mt-2">
                Submit
              </Button>
            </form>
          </div>

          {/* Map + Address */}
          <div className="w-full lg:w-[55%] relative min-h-[560px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.7636!3d9.0107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
            <div className="absolute bottom-0 right-0 z-10 bg-primary p-8 text-white max-w-xs">
              <h4 className="font-display font-bold text-xl mb-3 tracking-tight">Our Office</h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                Addis Ababa, Ethiopia
              </p>
              <div className="w-full h-px bg-white/20 mb-4" />
              <a href="mailto:info@smartconsulting.com" className="block text-accent hover:text-white transition-colors text-xs font-semibold uppercase tracking-wider mb-2">
                info@smartconsulting.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;