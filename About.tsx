import { motion } from 'motion/react';
import { Leaf, Droplet, Heart, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function About() {
  const specialFeatures = [
    "Authentic Thai-trained & certified therapists",
    "Premium aromatic oils, herbal compresses & organic creams",
    "Peaceful, candle-lit environment for deep relaxation",
    "Customized therapy recommendations based on body pain",
    "Exceptional hygiene, comfort & privacy standards",
    "Reflexology zone, head–neck therapy zone & facial room"
  ];

  const generalBenefits = [
    "Reduces stress & anxiety",
    "Improves blood circulation",
    "Relieves back, neck & shoulder pain",
    "Enhances flexibility & posture",
    "Releases muscle stiffness & knots",
    "Helps with migraines & tension headaches",
    "Boosts immunity & lymphatic drainage",
    "Detoxifies the body & increases energy",
    "Improves sleep quality",
    "Enhances skin glow & reduces fatigue"
  ];

  return (
    <section id="about" className="py-20 bg-gold-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-300/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Why Choose Us Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Why Choose Us?</h2>
              <div className="w-20 h-1 bg-gold-400 mx-auto mb-8"></div>
              
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  <span className="font-semibold text-gold-700">Shree Ananta Spa</span> brings the authentic Thai wellness experience to Udaipur.
                </p>
                <p>
                  Our therapies blend traditional Eastern healing with modern relaxation techniques. We work with highly trained therapists, premium quality oils, and a peaceful ambience created to balance your body, mind, and energy.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gold-100 mt-10">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center justify-center gap-2">
                <Sparkles className="text-gold-500" size={24} />
                What Makes Us Special
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {specialFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-gold-500 mr-3 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gold-100"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">Benefits of Massage & Spa Therapies</h3>
            <p className="text-gray-500">Holistic healing for your body and soul</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {generalBenefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center p-3 bg-gold-50/50 rounded-lg border border-gold-100/50">
                <ShieldCheck className="w-6 h-6 text-gold-500 mr-3 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
