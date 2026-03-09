import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Sparkles, MessageCircle } from 'lucide-react';
import { THERAPIES } from '../constants';

export default function BookingForm() {
  const [therapyName, setTherapyName] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [price, setPrice] = useState('');

  // Flatten therapies for the dropdown
  const allTherapies = THERAPIES.flatMap(cat => cat.items);
  
  // Get unique therapy names
  const uniqueTherapyNames = Array.from(new Set(allTherapies.map(t => t.name)));

  // Get available durations for selected therapy
  const availableDurations = therapyName 
    ? allTherapies.filter(t => t.name === therapyName)
    : [];

  // Update price when therapy and duration are selected
  useEffect(() => {
    const selected = allTherapies.find(t => t.name === therapyName && t.duration === duration);
    if (selected) {
      setPrice(selected.price);
    } else {
      setPrice('');
    }
  }, [therapyName, duration]);

  const handleTherapyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTherapyName(e.target.value);
    setDuration(''); // Reset duration when therapy changes
  };

  const handleBooking = () => {
    if (!therapyName || !duration || !date || !time) {
      alert('Please fill in all fields to proceed with booking.');
      return;
    }

    const message = `Hello, I want to book: ${therapyName}\nDuration: ${duration}\nPrice: ${price}\nDate: ${date}\nTime: ${time}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919588812154?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 px-4 relative -mt-20 z-20">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-2xl border border-gold-100 p-8 md:p-10"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">Book Your Ritual</h2>
            <p className="text-gray-500">Select your preferences and book instantly via WhatsApp</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Therapy Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Select Therapy</label>
              <div className="relative">
                <select
                  value={therapyName}
                  onChange={handleTherapyChange}
                  className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none appearance-none cursor-pointer"
                >
                  <option value="">Choose a therapy...</option>
                  {uniqueTherapyNames.map((name, idx) => (
                    <option key={idx} value={name}>{name}</option>
                  ))}
                </select>
                <Sparkles className="absolute left-3 top-3.5 text-gold-500 w-5 h-5" />
              </div>
            </div>

            {/* Duration Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Duration (e.g. 60 Min, 90 Min)</label>
              <div className="relative">
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  disabled={!therapyName}
                  className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option value="">
                    {therapyName ? "Select duration..." : "Select therapy first..."}
                  </option>
                  {availableDurations.map((t, idx) => (
                    <option key={idx} value={t.duration}>{t.duration} - {t.price}</option>
                  ))}
                </select>
                <Clock className="absolute left-3 top-3.5 text-gold-500 w-5 h-5" />
              </div>
            </div>

            {/* Date Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
              <div className="relative">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none"
                />
                <Calendar className="absolute left-3 top-3.5 text-gold-500 w-5 h-5" />
              </div>
            </div>

            {/* Time Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Preferred Time</label>
              <div className="relative">
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent outline-none"
                />
                <Clock className="absolute left-3 top-3.5 text-gold-500 w-5 h-5" />
              </div>
            </div>
          </div>

          {price && (
            <div className="mt-6 text-center">
              <span className="text-sm text-gray-500">Estimated Price:</span>
              <span className="text-2xl font-serif font-bold text-gold-600 ml-2">{price}</span>
            </div>
          )}

          <div className="mt-8">
            <button
              onClick={handleBooking}
              className="w-full bg-gold-500 hover:bg-gold-600 text-white font-medium py-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Send Booking to WhatsApp
            </button>
            <p className="text-center text-xs text-gray-400 mt-3">
              *No payment required now. Confirm details on WhatsApp.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
