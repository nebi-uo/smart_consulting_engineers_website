import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

const Contact = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.3 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-accent" />,
      title: "Phone Number",
      details: "+1 (555) 123-4567",
      subDetails: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: <Mail className="w-6 h-6 text-accent" />,
      title: "Email Address",
      details: "info@smart-engineering.com",
      subDetails: "Support: help@smart-eng.com"
    },
    {
      icon: <MapPin className="w-6 h-6 text-accent" />,
      title: "Our Location",
      details: "123 Engineering Blvd, Suite 400",
      subDetails: "New York, NY 10001, USA"
    },
    {
      icon: <Clock className="w-6 h-6 text-accent" />,
      title: "Business Hours",
      details: "Monday - Friday",
      subDetails: "9:00 AM - 6:00 PM EST"
    }
  ];

  return (
    <div className="overflow-x-hidden bg-white">
      {/* 1. Hero Section (Replicated from About Us) */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/hero-contact.jpg"
            alt="Engineering office"
            className="w-full h-full object-cover opacity-50 absolute inset-0 origin-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/20"></div>
        </div>
        <motion.div
          {...fadeIn}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Get In Touch.<br />
            <span className="text-accent underline decoration-white/20 underline-offset-8">Let's Connect.</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto font-normal tracking-wide opacity-90">
            Reach out to our global team of structural experts for your next project.
          </p>
        </motion.div>
      </section>

      {/* 2. Main Contact Layout Section (Based on Wireframe) */}
      <section className="py-32 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">

          {/* Left Column: Contact Form (Large Box) */}
          <motion.div
            {...fadeIn}
            className="bg-gray-50 p-10 lg:p-16 xl:p-20 border border-gray-100 shadow-sm relative overflow-hidden group"
          >
            {/* Subtle Design Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 -mr-16 -mt-16 rounded-full group-hover:scale-110 transition-transform duration-700"></div>

            <div className="mb-12">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Send us a message</h3>
              <h2 className="text-4xl font-bold text-primary tracking-tight">Project Inquiry</h2>
            </div>

            <form className="space-y-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="relative">
                  <label className="text-[10px] uppercase font-semibold tracking-[0.15em] text-gray-400 mb-2 block">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b-2 border-gray-200 py-3 text-primary font-medium focus:outline-none focus:border-accent transition-all placeholder:text-gray-300"
                  />
                </div>
                <div className="relative">
                  <label className="text-[10px] uppercase font-semibold tracking-[0.15em] text-gray-400 mb-2 block">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full bg-transparent border-b-2 border-gray-200 py-3 text-primary font-medium focus:outline-none focus:border-accent transition-all placeholder:text-gray-300"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="text-[10px] uppercase font-semibold tracking-[0.15em] text-gray-400 mb-2 block">Subject</label>
                <input
                  type="text"
                  placeholder="Structural Assessment"
                  className="w-full bg-transparent border-b-2 border-gray-200 py-3 text-primary font-medium focus:outline-none focus:border-accent transition-all placeholder:text-gray-300"
                />
              </div>

              <div className="relative">
                <label className="text-[10px] uppercase font-semibold tracking-[0.15em] text-gray-400 mb-2 block">Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your project requirements..."
                  className="w-full bg-transparent border-b-2 border-gray-200 py-3 text-primary font-medium focus:outline-none focus:border-accent transition-all resize-none placeholder:text-gray-300"
                ></textarea>
              </div>

              <Button variant="primary" className="w-full md:w-auto px-12 py-5 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3">
                <Send className="w-4 h-4" />
                Submit Enquiry
              </Button>
            </form>
          </motion.div>

          {/* Right Column: Info Grid & Map Section */}
          <div className="flex flex-col gap-12">

            {/* 2x2 Grid of Small Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={idx}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: idx * 0.1 }}
                  className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="mb-6 bg-gray-50 w-12 h-12 flex items-center justify-center rounded-sm group-hover:bg-accent/10 transition-colors">
                    {info.icon}
                  </div>
                  <h4 className="text-[10px] uppercase font-semibold tracking-widest text-accent mb-3">{info.title}</h4>
                  <p className="text-xl font-bold text-primary mb-2 tracking-tight">{info.details}</p>
                  <p className="text-sm text-gray-500 font-medium">{info.subDetails}</p>
                </motion.div>
              ))}
            </div>

            {/* Map Section (Large Rectangle) */}
            <motion.div
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.4 }}
              className="flex-grow min-h-[450px] relative bg-gray-100 border border-gray-200 overflow-hidden group shadow-sm"
            >
              {/* Premium Map Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1689230559902!5m2!1sen!2s"
                className="absolute inset-0 w-full h-full border-0 grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>

              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 w-0 h-0 border-t-[60px] border-t-transparent border-r-[60px] border-r-accent/20 z-10"></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. CTA Section (Copy from About Us for consistency) */}
      <section className="relative py-32 overflow-hidden bg-primary">
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">Need Immediate Engineering Support?</h2>
            <p className="text-gray-300 text-lg mb-10 font-normal opacity-90">Our emergency consultation line is open 24/7 for critical structural issues.</p>
            <a href="tel:+15551234567">
              <Button variant="white-outline" className="px-10 py-4 font-bold uppercase tracking-widest text-xs">Call Hotline Now</Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
