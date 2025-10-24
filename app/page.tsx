'use client';

import { Phone, Mail, MapPin, Star, ArrowRight, Zap, Users, Gift } from 'lucide-react';
import { useState } from 'react';
import Navbar from './components/Navbar';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How far in advance should I book Christmas light installation?",
      answer: "We recommend booking at least 4-6 weeks before the holiday season to secure your preferred installation date and ensure the best service."
    },
    {
      question: "Do you provide custom lighting designs for homes and businesses?",
      answer: "Absolutely! Our design team creates custom lighting displays tailored to your property, style preferences, and budget."
    },
    {
      question: "What's included in your maintenance service?",
      answer: "Our maintenance service includes bulb replacement, troubleshooting, adjustments, and ensuring your display stays bright throughout the season."
    },
    {
      question: "How much does professional Christmas light installation cost?",
      answer: "Residential installations start at $299. We provide free consultations and quotes based on your specific needs and property size."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-red-950 to-green-950 text-white min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12 leading-tight">
              🎄 Make This Season Shine 🎄
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-yellow-400">
              Professional Christmas Light Installation
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your property into a winter wonderland with our expert Christmas light installation services across Maritime Canada
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16">
              <a
                href="tel:(506)123-XMAS"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-6 px-12 rounded-xl text-xl transition-all flex items-center justify-center gap-3 shadow-2xl"
              >
                <Phone className="w-6 h-6" />
                📞 Call (506) 123-XMAS
              </a>
              <a
                href="#services"
                className="bg-white/10 backdrop-blur hover:bg-white/20 text-white font-bold py-6 px-12 rounded-xl text-xl border border-white/20 transition-all flex items-center justify-center gap-3"
              >
                <ArrowRight className="w-6 h-6" />
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Subheader */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-12">
            ✨ Brighten Your Holidays Safely ✨
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-8">
            Expert Christmas Light Installation Company
          </h3>
          <p className="text-xl md:text-2xl text-slate-600 max-w-5xl mx-auto leading-relaxed">
            Our expert Christmas light installation company focuses on hassle-free, secure installations. 
            We design festive displays for your home or business that bring joy and timeless charm to both indoor and outdoor spaces.
          </p>
        </div>
      </section>

      {/* Three Core Services */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-8">🎯 Our Christmas Services 🎯</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Three pillars of excellence that make your holidays magical
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Install */}
            <div className="text-center">
              <div className="bg-green-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8">
                <Zap className="w-16 h-16 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6">🔧 WE INSTALL LIGHTS WITH CARE</h3>
              <p className="text-lg text-slate-600 leading-relaxed max-w-md mx-auto">
                You won't have to touch a single strand of holiday lights when you work with PLACED. 
                We manage everything from concept and design through installation and removal, leaving you the time to enjoy your holidays!
              </p>
            </div>

            {/* Sell */}
            <div className="text-center">
              <div className="bg-red-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8">
                <Star className="w-16 h-16 text-red-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6">💡 WE SELL PREMIUM HOLIDAY LIGHTS</h3>
              <p className="text-lg text-slate-600 leading-relaxed max-w-md mx-auto">
                We offer professional-grade lights built to last and enhance your home or business. 
                Our energy-efficient, long-lasting lights add warm seasonal ambiance to any property.
              </p>
            </div>

            {/* Design */}
            <div className="text-center">
              <div className="bg-yellow-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8">
                <Users className="w-16 h-16 text-yellow-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6">🎨 WE DESIGN LIGHTING EXPERIENCES</h3>
              <p className="text-lg text-slate-600 leading-relaxed max-w-md mx-auto">
                Expect more than lights—we design memorable light experiences. 
                Our creative team designs every detail to warm your space with beauty and magic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Lighting Solutions */}
      <section id="services" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-8">
              🏆 Professional Lighting Solutions 🏆
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-8">
              For Every Occasion
            </h3>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              From elegant landscapes to magical holidays, our expert lighting services deliver creativity, safety, and brilliance for every celebration and season.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Christmas Lighting */}
            <div className="bg-white rounded-2xl shadow-xl p-12 hover:shadow-2xl transition-shadow duration-300">
              <div className="text-8xl mb-8 text-center">🎄</div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6 text-center">Christmas Lighting</h3>
              <p className="text-lg text-slate-600 mb-8 text-center leading-relaxed">
                Enjoy the season with our Christmas light installation company. We provide expert, hassle-free, and safe lighting installations for stunning holiday displays.
              </p>
              <div className="text-center">
                <div className="text-green-600 font-bold text-2xl mb-6">💰 Starting at $299</div>
                <a href="tel:(506)123-XMAS" className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors inline-block text-lg">
                  Get Quote
                </a>
              </div>
            </div>

            {/* Landscape Lighting */}
            <div className="bg-white rounded-2xl shadow-xl p-12 hover:shadow-2xl transition-shadow duration-300">
              <div className="text-8xl mb-8 text-center">🌿</div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6 text-center">Landscape Lighting</h3>
              <p className="text-lg text-slate-600 mb-8 text-center leading-relaxed">
                Explore our landscape lighting services to enhance your outdoor areas. We create stylish, energy-efficient lighting solutions for gardens and walkways.
              </p>
              <div className="text-center">
                <div className="text-green-600 font-bold text-2xl mb-6">💰 Custom Quote</div>
                <a href="tel:(506)123-XMAS" className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors inline-block text-lg">
                  Learn More
                </a>
              </div>
            </div>

            {/* Commercial Lighting */}
            <div className="bg-white rounded-2xl shadow-xl p-12 hover:shadow-2xl transition-shadow duration-300">
              <div className="text-8xl mb-8 text-center">🏢</div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6 text-center">Commercial Lighting</h3>
              <p className="text-lg text-slate-600 mb-8 text-center leading-relaxed">
                Our commercial lighting delivers customized solutions for businesses. We create professional displays that attract customers and enhance branding.
              </p>
              <div className="text-center">
                <div className="text-green-600 font-bold text-2xl mb-6">💰 Enterprise Pricing</div>
                <a href="tel:(506)123-XMAS" className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors inline-block text-lg">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-12">
              🚀 Professional Christmas Light Installation Made Easy 🚀
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              At PLACED, we believe holiday lights should be a source of happiness, not stress. 
              Our expert team follows a simple 4-step process to ensure flawless installation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-red-600 text-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-12 text-3xl font-bold shadow-xl">
                1️⃣
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-8">📋 Free Design Consultation</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our designers work with you to create a unique Christmas lighting scheme that complements your space and budget.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-red-600 text-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-12 text-3xl font-bold shadow-xl">
                2️⃣
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-8">🔨 Professional Installation</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our skilled installers handle everything safely and efficiently using commercial-grade, high-quality lights.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-red-600 text-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-12 text-3xl font-bold shadow-xl">
                3️⃣
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-8">🛠️ Maintenance & Support</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                We offer full maintenance throughout the holiday season, keeping your display bright and beautiful all winter long.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="bg-red-600 text-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-12 text-3xl font-bold shadow-xl">
                4️⃣
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-8">📦 Safe Takedown & Storage</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                When the season ends, we carefully remove and store your lights, ensuring your investment stays protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-40 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-12">
              ⭐ What Our Customers Say ⭐
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real reviews from happy customers across Maritime Canada
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl shadow-xl p-12">
              <div className="flex items-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current mr-1" />
                ))}
              </div>
              <p className="text-lg text-slate-600 mb-8 italic leading-relaxed">
                "This Christmas light installation company turned our home into a holiday wonderland. 
                The lights were stunning, and the service was professional and stress-free! 🎄✨"
              </p>
              <div className="font-bold text-slate-800 text-lg">SARAH M.</div>
              <div className="text-slate-500 mt-2">Rothesay, NB 🏠</div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl shadow-xl p-12">
              <div className="flex items-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current mr-1" />
                ))}
              </div>
              <p className="text-lg text-slate-600 mb-8 italic leading-relaxed">
                "We've never seen our house look this magical! The team designed a beautiful display that wowed our neighbors all season. 🌟"
              </p>
              <div className="font-bold text-slate-800 text-lg">MIKE F.</div>
              <div className="text-slate-500 mt-2">Saint John, NB 🏘️</div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl shadow-xl p-12">
              <div className="flex items-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current mr-1" />
                ))}
              </div>
              <p className="text-lg text-slate-600 mb-8 italic leading-relaxed">
                "From start to finish, everything was seamless. PLACED handled design, setup, and removal with such care. Truly the best service! 🙌"
              </p>
              <div className="font-bold text-slate-800 text-lg">JENNIFER P.</div>
              <div className="text-slate-500 mt-2">Quispamsis, NB 🌲</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-40 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-12">
              ❓ Frequently Asked Questions ❓
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to know about our Christmas light installation services
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-2xl shadow-lg">
                <button
                  className="w-full px-8 py-8 text-left font-semibold text-slate-800 hover:bg-slate-50 transition-colors flex justify-between items-center text-xl"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <span className={`transform transition-transform text-2xl ${openFaq === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-8 text-slate-600 text-lg leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Logo & Contact */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <Gift className="w-12 h-12 text-yellow-400" />
                <div>
                  <div className="text-3xl font-bold">🎄 PLACED 🎄</div>
                  <div className="text-yellow-400 text-lg">Your Christmas, Our Hands ✋</div>
                </div>
              </div>
              <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                Professional Christmas light installation serving Maritime Canada with expert design, installation, and maintenance services. 🇨🇦
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-yellow-400" />
                  <span className="text-lg">📞 (506) 123-XMAS</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-yellow-400" />
                  <span className="text-lg">📧 hello@placedchristmas.ca</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                  <span className="text-lg">📍 Saint John, NB & Area</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-2xl font-semibold mb-8">🔗 Quick Links</h4>
              <ul className="space-y-4 text-slate-300">
                <li><a href="#services" className="hover:text-white transition-colors text-lg">Our Services</a></li>
                <li><a href="tel:(506)123-XMAS" className="hover:text-white transition-colors text-lg">Get Quote</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors text-lg">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-2xl font-semibold mb-8">🎯 Services</h4>
              <ul className="space-y-4 text-slate-300">
                <li className="text-lg">🎄 Christmas Light Installation</li>
                <li className="text-lg">🌿 Landscape Lighting</li>
                <li className="text-lg">🏢 Commercial Lighting</li>
                <li className="text-lg">🛠️ Maintenance & Storage</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-12 text-center text-slate-400">
            <p className="text-lg">© 2025 PLACED Christmas Services. All rights reserved. Made with ❤️ in Maritime Canada 🇨🇦</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
