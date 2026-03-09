import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Clock } from 'lucide-react';
import { THERAPIES } from '../constants';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...THERAPIES.map(t => t.category)];

  const displayedTherapies = activeCategory === "All"
    ? THERAPIES.flatMap(t => t.items)
    : THERAPIES.find(t => t.category === activeCategory)?.items || [];

  return (
    <section id="therapies" className="py-20 bg-spa-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Our Therapies</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of authentic treatments designed to rejuvenate your body and mind.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold-500 text-white shadow-lg shadow-gold-200 scale-105'
                  : 'bg-white text-gray-600 border border-gold-100 hover:border-gold-300 hover:text-gold-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedTherapies.map((item, idx) => (
              <motion.div
                layout
                key={`${item.name}-${item.duration}-${idx}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-xl border border-gold-100 p-6 shadow-sm hover:shadow-xl hover:border-gold-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2 group-hover:text-gold-600 transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-between text-sm mb-6">
                    <div className="flex items-center text-gray-500">
                      <Clock size={16} className="mr-2 text-gold-400" />
                      {item.duration}
                    </div>
                    <div className="font-semibold text-gold-700">
                      {item.price}
                    </div>
                  </div>
                </div>
                
                <a
                  href={`https://wa.me/919588812154?text=Hi, I am interested in booking ${item.name} (${item.duration})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-4 py-2 px-4 border border-gold-400 text-gold-600 rounded-lg hover:bg-gold-500 hover:text-white transition-colors flex items-center justify-center gap-2 text-sm font-medium"
                >
                  <MessageCircle size={16} />
                  Book on WhatsApp
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
