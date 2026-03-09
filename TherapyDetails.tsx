import { motion } from 'motion/react';
import { Star, Check, Sparkles } from 'lucide-react';

const THERAPY_DETAILS = [
  {
    title: "Traditional Thai Dry Massage",
    description: "This therapy uses stretching, pressure points, and body alignment techniques. It improves flexibility, relieves stiffness, and energizes your body without using any oil.",
    benefits: ["Opens stiff muscles & joints", "Improves posture & flexibility", "Boosts body energy flow", "Relieves lower back & leg pain"]
  },
  {
    title: "Aroma Oil Massage",
    description: "A gentle, soothing massage using essential oils. Perfect for calming the mind, reducing stress, and deeply relaxing the nervous system.",
    benefits: ["Reduces stress & anxiety", "Improves sleep quality", "Relaxes stressed muscles", "Enhances emotional balance"]
  },
  {
    title: "Aroma Cream Massage",
    description: "A moisturizing, skin-friendly massage using rich cream. Best for people with dry skin or those who want smooth, glowing skin along with relaxation.",
    benefits: ["Hydrates & softens skin", "Reduces fatigue", "Relaxes full body", "Improves skin texture"]
  },
  {
    title: "Balinese Therapy",
    description: "A combination of gentle strokes, kneading, and aromatherapy. Helps release tension, reduce mental stress, and improve blood circulation.",
    benefits: ["Deep relaxation", "Improves blood flow", "Relieves emotional stress", "Perfect for full-body rejuvenation"]
  },
  {
    title: "Thai Herbal Compress",
    description: "Warm herbal pouches dipped in steam are pressed on the body. Ideal for chronic pain, stiffness, and detoxification.",
    benefits: ["Relieves chronic muscle pain", "Reduces swelling & inflammation", "Detoxifies skin & muscles", "Soothes nerve pain"]
  },
  {
    title: "Signature Thai Massage",
    description: "A premium combination of Thai stretching + pressure + herb-based relaxation. Deeply rejuvenating & energy-balancing therapy.",
    benefits: ["Full-body pain relief", "Improves joint mobility", "Restores energy levels", "Perfect for heavy stress"]
  },
  {
    title: "Thai Head Massage (Dry / Oil)",
    description: "Targets the scalp, temples, neck & upper shoulders. Relieves mental fatigue and increases blood circulation in the head.",
    benefits: ["Reduces headaches", "Relieves eye strain", "Boosts hair/scalp blood flow", "Helps mental clarity"]
  },
  {
    title: "Back & Shoulder Massage",
    description: "A focused therapy for people with desk job pain, stiffness & shoulder knots.",
    benefits: ["Immediate pain relief", "Loosens shoulder knots", "Reduces upper back stiffness", "Helps with long sitting posture"]
  },
  {
    title: "Foot Reflexology (Oil / Cream / B&S)",
    description: "Foot pressure points connect to the whole body. Great for stress release, digestion, and sleep improvement.",
    benefits: ["Deep relaxation", "Improves sleep", "Balances internal organs", "Reduces swelling & foot fatigue"]
  },
  {
    title: "Spa Fruit Facial",
    description: "A rejuvenating facial using fruit extracts to brighten skin, improve texture, and reduce dullness.",
    benefits: ["Instant glow", "Deep cleansing", "Removes tan & dullness", "Nourishes & revitalizes skin"]
  },
  {
    title: "Facial Express Clean",
    description: "Quick facial cleanse for instant freshness and dirt removal.",
    benefits: ["Removes oil & dirt", "Clears pores", "Refreshes skin instantly"]
  },
  {
    title: "Manicure & Pedicure",
    description: "Basic grooming treatments for hand & foot relaxation, hygiene, and softness.",
    benefits: ["Soft, clean skin", "Removes dead cells", "Improves nail health"]
  }
];

export default function TherapyDetails() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Therapy Details & Benefits</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the unique benefits of our specialized treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {THERAPY_DETAILS.map((therapy, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-stone-50 rounded-xl p-6 border border-gold-100 hover:border-gold-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-serif font-bold text-gray-900">{therapy.title}</h3>
                <Sparkles className="text-gold-400 w-5 h-5 flex-shrink-0 mt-1" />
              </div>
              
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {therapy.description}
              </p>

              <div>
                <h4 className="text-sm font-bold text-gold-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Star size={14} className="fill-gold-700" /> Benefits
                </h4>
                <ul className="space-y-2">
                  {therapy.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start text-sm text-gray-700">
                      <Check className="w-4 h-4 text-gold-500 mr-2 flex-shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
