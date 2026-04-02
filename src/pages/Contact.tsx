import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <div className="w-full pt-24">
      {/* Page Header */}
      <section className="bg-primary py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Contact Us</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto font-light">
            Schedule a private consultation to discuss your real estate and lifestyle needs.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-secondary text-sm uppercase tracking-widest font-semibold mb-4">Get in Touch</h2>
              <h3 className="text-3xl md:text-4xl font-serif text-primary mb-8 leading-tight">
                We look forward to assisting you.
              </h3>
              <p className="text-gray-600 mb-12 leading-relaxed text-lg">
                Whether you are looking to acquire a luxury property, redesign your space, or require elite lifestyle management, our team is ready to provide bespoke solutions.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-neutral flex items-center justify-center rounded-sm shrink-0">
                    <MapPin size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-primary mb-2">Office Location</h4>
                    <p className="text-gray-600">7 Unity Road, Off Toyin Street,<br />Ikeja, Lagos State, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-neutral flex items-center justify-center rounded-sm shrink-0">
                    <Phone size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-primary mb-2">Phone</h4>
                    <p className="text-gray-600">+234 703 091 9191</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-neutral flex items-center justify-center rounded-sm shrink-0">
                    <Mail size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-primary mb-2">Email</h4>
                    <p className="text-gray-600">contact@funkeobayan.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-neutral flex items-center justify-center rounded-sm shrink-0">
                    <Clock size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-primary mb-2">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: By Appointment Only</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-neutral p-10 shadow-sm border border-gray-100"
            >
              <h3 className="text-2xl font-serif text-primary mb-8">Schedule a Private Consultation</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors bg-white"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors bg-white"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-primary mb-2">Service Needed</label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="consulting">Real Estate Consulting</option>
                    <option value="management">Property Management</option>
                    <option value="interior">Interior Decoration</option>
                    <option value="lifestyle">Lifestyle Management</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors bg-white resize-none"
                    placeholder="How can we assist you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-secondary hover:text-primary transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
