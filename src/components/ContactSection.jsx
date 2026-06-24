import React, { useState } from 'react';
import SectionTitle from './ui/SectionTitle';
import Button from './ui/Button';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    const data = new FormData(e.target);
    try {
      const res = await fetch('https://formspree.io/f/mjgqkglo', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
          <SectionTitle title="Connect With Us" subtitle="Reach our team of engineering professionals." />
        </motion.div>

        <div className="flex flex-col lg:flex-row mt-12 border border-gray-200">

          <div className="w-full lg:w-[45%] p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-gray-200">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-10">Submit Inquiry</p>

            {status === 'success' ? (
              <div className="py-12 text-center">
                <div className="w-10 h-[2px] bg-accent mx-auto mb-6" />
                <p className="text-primary font-semibold text-base mb-2">Message received.</p>
                <p className="text-gray-400 text-sm">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <input name="name" type="text" placeholder="Full Name" required className="w-full bg-transparent border-b border-gray-200 py-3 text-primary text-sm font-medium focus:outline-none focus:border-primary transition-colors placeholder:text-gray-300" />
                <input name="email" type="email" placeholder="Email Address" required className="w-full bg-transparent border-b border-gray-200 py-3 text-primary text-sm font-medium focus:outline-none focus:border-primary transition-colors placeholder:text-gray-300" />
                <input name="phone" type="tel" placeholder="Phone Number" className="w-full bg-transparent border-b border-gray-200 py-3 text-primary text-sm font-medium focus:outline-none focus:border-primary transition-colors placeholder:text-gray-300" />
                <textarea name="message" placeholder="Message" rows="3" required className="w-full bg-transparent border-b border-gray-200 py-3 text-primary text-sm font-medium focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-gray-300" />

                {status === 'error' && (
                  <p className="text-red-500 text-xs font-semibold uppercase tracking-wider">Something went wrong. Please try again.</p>
                )}

                <button type="submit" disabled={status === 'loading'} className="self-start mt-2 px-8 py-4 bg-primary text-white text-xs font-semibold uppercase tracking-widest hover:bg-accent transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
                  {status === 'loading' ? 'Sending...' : 'Submit'}
                </button>
              </form>
            )}
          </div>

          <div className="w-full lg:w-[55%] relative min-h-[560px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d815.8009484119707!2d38.77441569048629!3d8.99242596169191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8548723ec3e5%3A0xaa0824f9e28dff18!2sSMART%20Consulting%20Eng&#39;g%20HO!5e0!3m2!1sen!2set!4v1782191208769!5m2!1sen!2set" className="absolute inset-0 w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Office Location" />
            <div className="absolute bottom-0 right-0 z-10 bg-primary p-8 text-white max-w-xs">
              <h4 className="font-display font-bold text-xl mb-3 tracking-tight">Our Office</h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-5">Addis Ababa, Ethiopia</p>
              <div className="w-full h-px bg-white/20 mb-4" />
              <a href="mailto:smartconsultinget@gmail.com" className="block text-accent hover:text-white transition-colors text-xs font-semibold uppercase tracking-wider mb-2">smartconsultinget@gmail.com</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;