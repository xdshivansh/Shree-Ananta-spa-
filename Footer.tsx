import { MapPin, Phone, Mail, MessageCircle, Instagram, Facebook, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-stone-900 text-gold-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold text-gold-400">Shree Ananta Spa</h3>
            <p className="text-stone-300 leading-relaxed">
              Experience healing, relaxation, and premium Thai wellness in the heart of Udaipur. 
              A sanctuary for your mind, body, and soul.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gold-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gold-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-serif font-semibold text-white">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-gold-400 mt-1 flex-shrink-0" size={20} />
                <span className="text-stone-300">
                  3rd Floor, New Fatehpura, Panchwati,<br />
                  Udaipur, Rajasthan 313004
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-gold-400 flex-shrink-0" size={20} />
                <a href="tel:+919588812154" className="text-stone-300 hover:text-gold-400 transition-colors">
                  +91 9588812154
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="text-gold-400 flex-shrink-0" size={20} />
                <a href="https://wa.me/919588812154" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-gold-400 transition-colors">
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-64 rounded-lg overflow-hidden border border-gold-800/30 shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.267856358356!2d73.68266237596206!3d24.59475797810237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e564070f0001%3A0x7c7d780707070707!2sPanchwati%2C%20Udaipur%2C%20Rajasthan%20313001!5e0!3m2!1sen!2sin!4v1708765432100!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Shree Ananta Spa Location"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-gold-900/50 mt-16 pt-8 text-center text-stone-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Shree Ananta Spa. All rights reserved.</p>
          <p className="mt-2 text-stone-600 flex items-center justify-center gap-1">
            Designed & Developed with <Heart size={12} className="text-red-500 fill-red-500 mx-1" /> by <a href="https://wa.me/919588812154" target="_blank" rel="noopener noreferrer" className="text-gold-600 hover:text-gold-400 transition-colors font-medium">Shivansh</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
