import React from 'react';
import { MessageSquare, Search, Eye, FileText, CheckCircle } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const HowWeWork = () => {
  const steps = [
    {
      icon: <MessageSquare size={20} />,
      title: 'Consultation & Needs Analysis',
      desc: 'At this stage we determine what type of property you need.'
    },
    {
      icon: <Search size={20} />,
      title: 'Search & Selection of Objects',
      desc: 'We offer only verified properties matching your budget and goals.'
    },
    {
      icon: <Eye size={20} />,
      title: 'Viewing & Evaluation',
      desc: 'We organize viewings, providing full information about the property.'
    },
    {
      icon: <FileText size={20} />,
      title: 'Verification & Documentation',
      desc: 'We conduct a comprehensive check of all documents and ownership rights.'
    },
    {
      icon: <CheckCircle size={20} />,
      title: 'Transaction Support',
      desc: 'We provide support in concluding the contract at all stages.'
    }
  ];

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <SectionTitle
        title="How We Work"
        subtitle="We made the process of working with us as simple and transparent as possible."
      />
      <div className="grid md:grid-cols-2 gap-16 mt-16 items-start">
        {/* Left Side Image */}
        <div className="relative">
          <div className="w-full h-[600px] rounded-lg overflow-hidden bg-gray-300">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
              alt="Building facade"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating Circle matching Wireframe */}
          <div className="absolute top-1/4 -right-8 md:-right-12 bg-primary/80 backdrop-blur-sm text-white w-40 h-40 rounded-full flex flex-col justify-center items-center text-center p-4 shadow-xl z-20">
            <span className="font-semibold text-lg leading-tight">Free<br />Consultation</span>
          </div>
        </div>

        {/* Right Side Steps */}
        <div className="space-y-10 pl-8 md:pl-20 relative pt-8">
          {/* Vertical joining line matching wireframe */}
          <div className="absolute left-11 md:left-[5.75rem] top-12 bottom-12 w-0.5 bg-gray-200 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 group">
              <div className="w-14 h-14 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-white shadow-md z-10 group-hover:bg-accent transition-colors">
                {step.icon}
              </div>
              <div>
                <h3 className="text-xl font-sans font-semibold text-primary mb-2 line-clamp-1">{step.title}</h3>
                <p className="text-neutral-dark text-base leading-relaxed opacity-72">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
