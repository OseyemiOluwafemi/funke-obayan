import { motion } from 'motion/react';

const projects = [
  {
    id: 1,
    title: 'The Ikoyi Residence',
    category: 'Interior Decoration',
    description: 'A complete bespoke interior transformation of a luxury 5-bedroom villa in Ikoyi, blending modern minimalism with classic elegance.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Victoria Island Plaza',
    category: 'Property Management',
    description: 'Comprehensive facility management for a premium commercial high-rise, ensuring operational excellence and tenant satisfaction.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Lekki Luxury Villa',
    category: 'Real Estate Consulting',
    description: 'Strategic advisory and acquisition support for a high-net-worth investor securing a prime waterfront property in Lekki.',
    image: 'https://images.unsplash.com/photo-1600607687931-ceeb66d1343e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Banana Island Penthouse',
    category: 'Interior Decoration',
    description: 'Exclusive styling and custom furniture sourcing for a breathtaking penthouse overlooking the Lagos lagoon.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'Abuja Corporate HQ',
    category: 'Property Management',
    description: 'End-to-end maintenance and operational management for a multinational corporate headquarters.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'Eko Atlantic Estate',
    category: 'Real Estate Consulting',
    description: 'Market analysis and investment strategy for a portfolio of luxury apartments in the prestigious Eko Atlantic City.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export function Portfolio() {
  return (
    <div className="w-full pt-24">
      {/* Page Header */}
      <section className="bg-primary py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Portfolio</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto font-light">
            A curated selection of our finest projects across luxury real estate, interior design, and property management.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer bg-neutral/30 pb-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden h-64 mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
                </div>
                <div className="px-6">
                  <p className="text-secondary text-xs uppercase tracking-widest font-semibold mb-2">{project.category}</p>
                  <h4 className="font-serif text-2xl text-primary mb-3">{project.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
