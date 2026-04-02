import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <Logo className="w-10 h-10 transition-transform group-hover:scale-105" />
              <span className="text-white font-serif text-xl tracking-wider uppercase">
                Funke Obayan <span className="text-secondary">& Co.</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Redefining luxury real estate and lifestyle management in Nigeria. Expert consulting, bespoke interiors, and premium property solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/funke_Obayan%26Co" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:text-primary hover:border-secondary transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com/company/funke_Obayan%26Co" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:text-primary hover:border-secondary transition-all">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com/funke_Obayan%26Co" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:text-primary hover:border-secondary transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-white/60 hover:text-secondary transition-colors text-sm uppercase tracking-wider">About Us</Link></li>
              <li><Link to="/services" className="text-white/60 hover:text-secondary transition-colors text-sm uppercase tracking-wider">Services</Link></li>
              <li><Link to="/portfolio" className="text-white/60 hover:text-secondary transition-colors text-sm uppercase tracking-wider">Portfolio</Link></li>
              <li><Link to="/testimonials" className="text-white/60 hover:text-secondary transition-colors text-sm uppercase tracking-wider">Client Experience</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-secondary transition-colors text-sm uppercase tracking-wider">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-secondary">Our Services</h4>
            <ul className="space-y-4">
              <li className="text-white/60 text-sm uppercase tracking-wider">Real Estate Consulting</li>
              <li className="text-white/60 text-sm uppercase tracking-wider">Property Management</li>
              <li className="text-white/60 text-sm uppercase tracking-wider">Interior Decoration</li>
              <li className="text-white/60 text-sm uppercase tracking-wider">Lifestyle Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-secondary">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={18} className="text-secondary shrink-0 mt-0.5" />
                <span>7 Unity Road, Off Toyin Street,<br />Ikeja, Lagos State, Nigeria</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone size={18} className="text-secondary shrink-0" />
                <span>+234 703 091 9191</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail size={18} className="text-secondary shrink-0" />
                <span>contact@funkeobayan.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Funke Obayan & Co. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-white/40">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
