import { motion } from 'motion/react';
import { Building2, Home, Paintbrush, Briefcase, CheckCircle2 } from 'lucide-react';

const services = [
  {
    id: 'consulting',
    title: 'Real Estate Consulting',
    icon: Building2,
    description: 'Navigate the complex real estate market with confidence. Our expert advisory services provide you with the insights and strategies needed to make informed decisions.',
    features: [
      'Property acquisition advisory',
      'Investment strategy and portfolio management',
      'In-depth market insights and analysis',
      'Due diligence and risk assessment'
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'management',
    title: 'Property & Facility Management',
    icon: Home,
    description: 'Protect and enhance the value of your assets. We offer comprehensive management solutions that ensure operational efficiency and tenant satisfaction.',
    features: [
      'Proactive and reactive maintenance',
      'Tenant management and relations',
      'Operational efficiency optimization',
      'Financial reporting and compliance'
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'interior',
    title: 'Interior Decoration',
    icon: Paintbrush,
    description: 'Transform spaces into luxurious sanctuaries. Our bespoke interior design services blend aesthetics with functionality to create environments that reflect your unique style.',
    features: [
      'Bespoke interior design concepts',
      'Complete space transformation',
      'Luxury styling and curation',
      'Custom furniture and art sourcing'
    ],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle Management',
    icon: Briefcase,
    description: 'Experience the ultimate in convenience and exclusivity. Our lifestyle management services cater to your personal and professional needs, allowing you to focus on what matters most.',
    features: [
      'Exclusive concierge services',
      'Personal assistance and lifestyle curation',
      'Exclusive client support and event access',
      'Travel and itinerary planning'
    ],
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export function Services() {
  return (
    <div className="w-full pt-24">
      {/* Page Header */}
      <section className="bg-primary py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Our Services</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto font-light">
            Comprehensive solutions tailored for luxury real estate and elite lifestyle management.
          </p>
        </div>
      </section>

      {/* Services Detailed Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={index % 2 !== 0 ? 'lg:order-2' : ''}
                >
                  <div className="w-16 h-16 bg-neutral flex items-center justify-center rounded-sm mb-8">
                    <service.icon size={32} className="text-secondary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`relative h-[500px] ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-sm shadow-xl"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
