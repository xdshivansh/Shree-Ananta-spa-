import { motion } from 'motion/react';
import { Check, Star } from 'lucide-react';
import { MEMBERSHIPS } from '../constants';

export default function Membership() {
  return (
    <section id="membership" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-medium tracking-widest uppercase text-sm">Exclusive Offers</span>
          <h2 className="text-4xl font-serif font-bold text-gray-900 mt-2 mb-4">Membership Packages</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MEMBERSHIPS.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gold-100 hover:border-gold-300 transition-all duration-300 flex flex-col"
            >
              <div className="bg-gold-50 p-6 text-center border-b border-gold-100">
                <h3 className="text-2xl font-serif font-bold text-gold-800">{plan.title}</h3>
                {idx === 1 && (
                  <span className="inline-block mt-2 px-3 py-1 bg-gold-400 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
              </div>
              
              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  {plan.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start justify-between border-b border-gray-50 pb-2 last:border-0">
                      <div className="flex items-center">
                        <Check className="text-gold-500 w-5 h-5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{item.name}</span>
                      </div>
                      <div className="text-right">
                        <span className="block text-gold-700 font-bold">{item.price}</span>
                        {item.duration && (
                          <span className="text-xs text-gray-400">{item.duration}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-gray-50 border-t border-gray-100">
                <a
                  href={`https://wa.me/919588812154?text=I am interested in the ${plan.title} membership`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-6 bg-white border border-gold-400 text-gold-600 font-medium rounded-lg text-center hover:bg-gold-500 hover:text-white transition-all shadow-sm hover:shadow-md"
                >
                  Inquire Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
