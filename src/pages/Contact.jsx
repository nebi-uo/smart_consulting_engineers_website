import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import Button from '../components/ui/Button';

const Contact = () => {
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

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const contactInfo = [
    { icon: <Phone className="w-5 h-5 text-accent" />, title: "Phone",    details: "+251 98 634 8686 / +251 90 000 000",          subDetails: "Mon–Fri, 8am–6pm" },
    { icon: <Mail  className="w-5 h-5 text-accent" />, title: "Email",    details: "smartconsultinget@gmail.com",   subDetails: "We reply within 24h" },
    { icon: <MapPin className="w-5 h-5 text-accent" />, title: "Location", details: "Addis Ababa, Ethiopia",     subDetails: "Head Office" },
    { icon: <Clock className="w-5 h-5 text-accent" />, title: "Hours",    details: "Monday – Friday",           subDetails: "9:00 AM – 6:00 PM EAT" },
  ];

  return (
    <div className="overflow-x-hidden bg-white">

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary text-center">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            src="../hero.png"
            alt="Engineering office"
            className="w-full h-full object-cover opacity-40 absolute inset-0"
          />
          <div className="absolute inset-0 bg-primary/20" />
        </div>
        <motion.div {...fadeIn} className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 tracking-tight leading-tight">
            Get In Touch.
          </h1>
          <p className="text-lg text-gray-200 max-w-xl mx-auto font-normal opacity-90">
            Reach our team of structural engineering experts for your next project.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 lg:px-16 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Form */}
          <motion.div {...fadeIn} className="border border-gray-100 p-10 lg:p-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Send a message</p>
            <h2 className="text-3xl font-bold text-primary mb-10 tracking-tight">Project Inquiry</h2>

            {status === 'success' ? (
              <div className="py-16 text-center">
                <div className="w-10 h-[2px] bg-accent mx-auto mb-6" />
                <p className="text-primary font-semibold text-base mb-2">Message received.</p>
                <p className="text-gray-400 text-sm">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-[10px] uppercase font-semibold tracking-widest text-gray-400 mb-2 block">Full Name</label>
                    <input name="name" type="text" placeholder="John Doe" required className="w-full bg-transparent border-b border-gray-200 py-2.5 text-primary text-sm font-medium focus:outline-none focus:border-accent transition-colors placeholder:text-gray-300" />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase font-semibold tracking-widest text-gray-400 mb-2 block">Email</label>
                    <input name="email" type="email" placeholder="john@company.com" required className="w-full bg-transparent border-b border-gray-200 py-2.5 text-primary text-sm font-medium focus:outline-none focus:border-accent transition-colors placeholder:text-gray-300" />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] uppercase font-semibold tracking-widest text-gray-400 mb-2 block">Subject</label>
                  <input name="subject" type="text" placeholder="Structural Assessment" className="w-full bg-transparent border-b border-gray-200 py-2.5 text-primary text-sm font-medium focus:outline-none focus:border-accent transition-colors placeholder:text-gray-300" />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-semibold tracking-widest text-gray-400 mb-2 block">Message</label>
                  <textarea name="message" rows="4" placeholder="Tell us about your project..." required className="w-full bg-transparent border-b border-gray-200 py-2.5 text-primary text-sm font-medium focus:outline-none focus:border-accent transition-colors resize-none placeholder:text-gray-300" />
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-xs font-semibold uppercase tracking-wider">Something went wrong. Please try again.</p>
                )}

                <button type="submit" disabled={status === 'loading'} className="flex items-center gap-2 px-8 py-4 bg-primary text-white text-xs font-semibold uppercase tracking-widest hover:bg-accent transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
                  <Send className="w-3.5 h-3.5" />
                  {status === 'loading' ? 'Sending...' : 'Submit Enquiry'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Info + Map */}
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {contactInfo.map((info, idx) => (
                <motion.div key={idx} {...fadeIn} transition={{ ...fadeIn.transition, delay: idx * 0.08 }} className="p-6 border border-gray-100">
                  <div className="mb-4">{info.icon}</div>
                  <p className="text-[10px] uppercase font-semibold tracking-widest text-accent mb-2">{info.title}</p>
                  <p className="text-sm font-bold text-primary mb-1">{info.details}</p>
                  <p className="text-xs text-gray-400">{info.subDetails}</p>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.3 }} className="flex-grow min-h-[380px] relative border border-gray-200 overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d815.8009484119707!2d38.77441569048629!3d8.99242596169191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8548723ec3e5%3A0xaa0824f9e28dff18!2sSMART%20Consulting%20Eng&#39;g%20HO!5e0!3m2!1sen!2set!4v1782191208769!5m2!1sen!2set" className="absolute inset-0 w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Office Location" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-primary">
        <div className="max-w-3xl mx-auto text-center px-6">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Need immediate support?</h2>
            <p className="text-gray-300 text-base mb-10 opacity-90">Our team is available for urgent structural consultations.</p>
            <a href="tel:+251986348686">
              <Button variant="white-outline">Call Us Now</Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;