import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Local Resident",
    content: "Absolutely the best massage I've had in Udaipur! The therapists are highly skilled, and the ambiance is so relaxing. I left feeling completely rejuvenated.",
    rating: 5,
  },
  {
    id: 2,
    name: "James Anderson",
    role: "Tourist from UK",
    content: "After a long day of exploring the City Palace, this spa was exactly what I needed. The Deep Tissue massage was incredible. Highly recommend to any travelers!",
    rating: 5,
  },
  {
    id: 3,
    name: "Neha & Rahul",
    role: "Couple on Anniversary",
    content: "We booked the couple's package for our anniversary, and it was a magical experience. The staff made us feel so special. Thank you, Shree Ananta Spa!",
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif text-gray-900 mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gold-500 mx-auto mb-6"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Read about the experiences of our wonderful guests who found their peace and relaxation with us.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-spa-bg p-8 rounded-2xl shadow-sm relative"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-gold-200 opacity-50" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
