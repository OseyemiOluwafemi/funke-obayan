import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Building2, Home as HomeIcon, Paintbrush, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'Real Estate Consulting',
    description: 'Expert advisory on property acquisition, investment strategy, and market insights.',
    icon: Building2,
    link: '/services#consulting'
  },
  {
    title: 'Property Management',
    description: 'Comprehensive maintenance, tenant management, and operational efficiency.',
    icon: HomeIcon,
    link: '/services#management'
  },
  {
    title: 'Interior Decoration',
    description: 'Bespoke interior design, space transformation, and luxury styling.',
    icon: Paintbrush,
    link: '/services#interior'
  },
  {
    title: 'Lifestyle Management',
    description: 'Exclusive concierge services, personal assistance, and client support.',
    icon: Briefcase,
    link: '/services#lifestyle'
  }
];

const projects = [
  {
    id: 1,
    title: 'The Ikoyi Residence',
    category: 'Interior Decoration',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Victoria Island Plaza',
    category: 'Property Management',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Lekki Luxury Villa',
    category: 'Real Estate Consulting',
    image: 'https://images.unsplash.com/photo-1600607687931-ceeb66d1343e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Luxury Real Estate"
            className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/60 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight max-w-5xl mx-auto"
          >
            Redefining Luxury Real Estate & Lifestyle Management in Nigeria
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto font-light"
          >
            Expert consulting, bespoke interiors, and premium property solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Link
              to="/contact"
              className="inline-block bg-secondary text-primary px-10 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-white transition-colors duration-300"
            >
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-secondary text-sm uppercase tracking-widest font-semibold mb-4">About the Firm</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-primary mb-6 leading-tight">
                Excellence, Trust, and Unparalleled Expertise.
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Funke Obayan & Co. is a premier real estate consulting and lifestyle management firm based in Lagos, Nigeria. We cater to high-net-worth individuals, corporate clients, and investors seeking exceptional property solutions and bespoke lifestyle services.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-widest text-sm hover:text-secondary transition-colors group"
              >
                Discover Our Story
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px]"
            >
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Luxury Interior"
                className="w-full h-full object-cover rounded-sm shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-primary p-8 text-white max-w-xs shadow-xl">
                <p className="font-serif text-2xl mb-2 text-secondary">10+ Years</p>
                <p className="text-sm uppercase tracking-widest text-white/80">Of delivering excellence in luxury real estate.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-24 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-secondary text-sm uppercase tracking-widest font-semibold mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-primary">Core Services</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 group hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-neutral flex items-center justify-center rounded-sm mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <service.icon size={28} className="text-primary group-hover:text-white" />
                </div>
                <h4 className="font-serif text-xl text-primary mb-4">{service.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-semibold text-primary hover:text-secondary transition-colors"
                >
                  Learn More
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Corporate Building"
                className="w-full h-full object-cover rounded-sm opacity-80"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-secondary text-sm uppercase tracking-widest font-semibold mb-4">The Funke Obayan Advantage</h2>
              <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                Why Elite Clients Choose Us.
              </h3>
              <ul className="space-y-6">
                {[
                  'Multi-disciplinary expertise across real estate and lifestyle.',
                  'Tailored luxury solutions designed for your unique needs.',
                  'Trusted by elite clients, investors, and corporations.',
                  'Based in Lagos, serving a global clientele with local insight.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="text-secondary shrink-0 mt-1" size={24} />
                    <span className="text-lg text-white/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-secondary text-sm uppercase tracking-widest font-semibold mb-4">Portfolio</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-primary">Featured Projects</h3>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-widest text-sm hover:text-secondary transition-colors group"
            >
              View All Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden h-80 mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                </div>
                <p className="text-secondary text-sm uppercase tracking-widest font-semibold mb-2">{project.category}</p>
                <h4 className="font-serif text-2xl text-primary">{project.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Preview */}
      <section className="py-24 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-secondary text-sm uppercase tracking-widest font-semibold mb-4">Client Experience</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-primary mb-16">What Our Clients Say</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 shadow-sm border border-gray-100 text-left"
            >
              <p className="text-gray-700 text-lg leading-relaxed italic mb-8">
                "Funke Obayan & Co. transformed our vision into reality. Their attention to detail in interior decoration is unmatched, and their professionalism made the entire process seamless."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center rounded-full font-serif text-xl">
                  A
                </div>
                <div>
                  <h4 className="font-serif text-lg text-primary">Chief Adeyemi</h4>
                  <p className="text-secondary text-xs uppercase tracking-widest font-semibold">Private Investor</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-10 shadow-sm border border-gray-100 text-left"
            >
              <p className="text-gray-700 text-lg leading-relaxed italic mb-8">
                "Managing our commercial properties used to be a headache until we partnered with them. Their facility management team is proactive, efficient, and highly reliable."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center rounded-full font-serif text-xl">
                  O
                </div>
                <div>
                  <h4 className="font-serif text-lg text-primary">Mrs. O. Balogun</h4>
                  <p className="text-secondary text-xs uppercase tracking-widest font-semibold">CEO, Balogun Holdings</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-12">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-widest text-sm hover:text-secondary transition-colors group"
            >
              Read More Experiences
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1600607687931-ceeb66d1343e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
            Let’s manage your property and lifestyle seamlessly.
          </h2>
          <Link
            to="/contact"
            className="inline-block bg-secondary text-primary px-10 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-white transition-colors duration-300"
          >
            Schedule a Private Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
