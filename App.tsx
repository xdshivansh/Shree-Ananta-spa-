/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingForm from './components/BookingForm';
import Services from './components/Services';
import TherapyDetails from './components/TherapyDetails';
import Membership from './components/Membership';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-spa-bg font-sans text-gray-900 selection:bg-gold-200 selection:text-gold-900">
      <Navbar />
      <main>
        <Hero />
        <BookingForm />
        <Services />
        <TherapyDetails />
        <Membership />
        <Gallery />
        <Testimonials />
        <About />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
