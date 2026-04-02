import { motion } from 'motion/react';

export function About() {
  return (
    <div className="w-full pt-24">
      {/* Page Header */}
      <section className="bg-primary py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1600607687931-ceeb66d1343e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">About Us</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto font-light">
            Discover the story, vision, and values behind Funke Obayan & Co.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-secondary text-sm uppercase tracking-widest font-semibold mb-4">Company Overview</h2>
              <h3 className="text-3xl md:text-4xl font-serif text-primary mb-6 leading-tight">
                A Legacy of Luxury and Trust.
              </h3>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Funke Obayan & Co. is a distinguished real estate consulting and lifestyle management firm headquartered in Lagos, Nigeria. We specialize in delivering bespoke solutions to high-net-worth individuals, corporate entities, and discerning investors.
                </p>
                <p>
                  Our multi-disciplinary approach seamlessly integrates property acquisition, facility management, interior decoration, and exclusive lifestyle services. We understand that true luxury lies in the details, and our commitment to excellence ensures that every client experiences unparalleled service and discretion.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Luxury Home"
                className="w-full h-64 object-cover rounded-sm"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Interior Design"
                className="w-full h-64 object-cover rounded-sm mt-8"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-12 shadow-sm border border-gray-100"
            >
              <h3 className="text-3xl font-serif text-primary mb-6">Our Mission</h3>
              <p className="text-xl text-gray-700 leading-relaxed font-serif italic border-l-4 border-secondary pl-6">
                "To provide exceptional real estate consulting, property management, interior decoration, and lifestyle services with excellence and integrity."
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-primary text-white p-12 shadow-sm"
            >
              <h3 className="text-3xl font-serif mb-6 text-secondary">Our Vision</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                To be the undisputed leader in luxury real estate and lifestyle management in Africa, recognized globally for our unwavering commitment to quality, innovation, and client satisfaction. We aim to shape the future of premium living and property investment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Personality */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-secondary text-sm uppercase tracking-widest font-semibold mb-4">Our Values</h2>
          <h3 className="text-3xl md:text-4xl font-serif text-primary mb-16">The Pillars of Our Brand</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {['Professional', 'Sophisticated', 'Discreet', 'Elite', 'Trustworthy'].map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 border border-gray-100 hover:border-secondary transition-colors duration-300"
              >
                <p className="font-serif text-xl text-primary">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
