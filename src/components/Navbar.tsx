import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="Repunzel" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`${isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'} transition-colors duration-300`}>Home</Link>
            <Link to="/shop" className={`${isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'} transition-colors duration-300`}>Shop</Link>
            <Link to="/about" className={`${isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'} transition-colors duration-300`}>About</Link>
            <Link to="/contact" className={`${isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'} transition-colors duration-300`}>Contact</Link>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg"
          >
            <div className="px-4 py-2 space-y-2">
              <Link to="/" className="block text-gray-700 hover:text-primary py-2">Home</Link>
              <Link to="/shop" className="block text-gray-700 hover:text-primary py-2">Shop</Link>
              <Link to="/about" className="block text-gray-700 hover:text-primary py-2">About</Link>
              <Link to="/contact" className="block text-gray-700 hover:text-primary py-2">Contact</Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;