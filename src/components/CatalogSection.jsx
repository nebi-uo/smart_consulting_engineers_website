import React from 'react';
import SectionTitle from './ui/SectionTitle';

const CatalogSection = () => {
  const catalogItems = [
    {
      title: 'Office Real Estate',
      count: '4000+ objects',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Warehouse Premises',
      count: '1000+ objects',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c663e0?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Land Plots',
      count: '2000+ objects',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <SectionTitle 
        title="Object Catalog" 
        subtitle="Wide selection of real estate for your business" 
        className="mb-16"
      />
      <div className="grid md:grid-cols-3 gap-8">
        {catalogItems.map((item, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="h-80 w-full overflow-hidden rounded-xl bg-gray-300 mb-6 relative">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-3 transition-colors group-hover:text-accent">{item.title}</h3>
            <p className="text-gray-500 text-base font-normal opacity-72">{item.count}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-8 gap-4">
        {/* Mock pagination arrows per wireframe */}
        <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-primary hover:bg-neutral-light transition-colors font-semibold">
          &lt;
        </button>
        <button className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors font-semibold">
          &gt;
        </button>
      </div>
    </section>
  );
};

export default CatalogSection;
