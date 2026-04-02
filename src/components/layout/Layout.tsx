import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Layout() {
  const { pathname } = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              onClick={scrollToTop}
              className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-secondary transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/2347030919191"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </div>
  );
}
