import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Funke Obayan & Co. transformed our vision into reality. Their attention to detail in interior decoration is unmatched, and their professionalism made the entire process seamless.",
    author: "Chief Adeyemi",
    role: "Private Investor, Ikoyi",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    quote: "Managing our commercial properties used to be a headache until we partnered with them. Their facility management team is proactive, efficient, and highly reliable.",
    author: "Mrs. O. Balogun",
    role: "CEO, Balogun Holdings",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    quote: "Their real estate consulting services provided us with the exact market insights we needed. We secured a prime property in Lekki thanks to their strategic advisory.",
    author: "Dr. K. Nwachukwu",
    role: "Medical Director",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 4,
    quote: "The lifestyle management service is a game-changer. From exclusive event access to personal concierge services, they handle everything with utmost discretion and elegance.",
    author: "Anonymous Client",
    role: "High-Net-Worth Individual",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

export function Testimonials() {
  return (
    <div className="w-full pt-24">
      {/* Page Header */}
      <section className="bg-primary py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Client Experience</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto font-light">
            Hear from our esteemed clients about their experiences with our luxury services.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-10 shadow-sm border border-gray-100 relative"
              >
                <Quote size={48} className="text-secondary/20 absolute top-8 right-8" />
                <p className="text-gray-700 text-lg leading-relaxed italic mb-8 relative z-10">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover border-2 border-secondary"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-serif text-xl text-primary">{testimonial.author}</h4>
                    <p className="text-secondary text-sm uppercase tracking-widest font-semibold">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
