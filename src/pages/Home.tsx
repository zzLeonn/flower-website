import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowDown } from 'react-icons/fi';
import React from 'react';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50 z-10" />
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80"
              alt="Elegant flowers"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            <h1 className="text-6xl md:text-8xl font-serif text-white leading-tight">
              Where Beauty
              <br />
              <span className="text-primary">Blooms</span>
            </h1>
            <p className="text-xl md:text-2xl text-cream/90 font-light max-w-2xl mx-auto">
              Crafting moments of joy through exquisite floral arrangements and artisanal cakes
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="space-x-6"
            >
              <button className="btn-primary text-lg px-8 py-3">
                Explore Collections
              </button>
              <button className="px-8 py-3 text-lg text-white border border-white/30 rounded-md hover:bg-white/10 transition-colors duration-300">
                Book Consultation
              </button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/80"
        >
          <FiArrowDown className="w-6 h-6 animate-bounce" />
        </motion.div>
      </section>

      {/* Featured Collections */}
      <section ref={ref} className="py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-serif mb-6">Our Signature Collections</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our carefully curated selections of seasonal flowers and artisanal cakes,
              designed to make every moment unforgettable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Seasonal Blooms",
                image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80",
                description: "Fresh, seasonal flowers arranged with artistic flair"
              },
              {
                title: "Wedding Collection",
                image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80",
                description: "Elegant arrangements for your special day"
              },
              {
                title: "Signature Cakes",
                image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80",
                description: "Handcrafted cakes for celebrations"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg aspect-[4/5] mb-6">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 z-10" />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                    <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
                    <p className="text-white/90">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <button className="btn-primary text-lg px-8 py-3">
              View All Collections
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;