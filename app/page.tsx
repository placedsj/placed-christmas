'use client';'use client';



import { Sparkles, Gift, Phone, Mail, MapPin } from 'lucide-react';import { Sparkles, Gift, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

import Navbar from './components/Navbar';import { motion } from 'framer-motion';

import HandbookPage from './components/HandbookPage';import CountdownTimer from './components/CountdownTimer';

import AdventCalendar from './components/AdventCalendar';

export default function Home() {import ProductShowcase from './components/ProductShowcase';

  return (import Features from './components/Features';

    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-red-950 to-green-950">import Newsletter from './components/Newsletter';

      <Navbar />import Navbar from './components/Navbar';

      import Testimonials from './components/Testimonials';

      {/* Hero Section */}import StatsCounter from './components/StatsCounter';

      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 pt-32">import BookingForm from './components/BookingForm';

        <div className="relative z-10 text-center max-w-5xl mx-auto">import ServiceArea from './components/ServiceArea';

          <div className="mb-8 inline-block">import InstallationPortfolio from './components/InstallationPortfolio';

            <Sparkles className="w-16 h-16 md:w-24 md:h-24 text-christmas-gold" />import HowItWorks from './components/HowItWorks';

          </div>import HandbookPage from './components/HandbookPage';

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">

            🎄 PLACED 🎄export default function Home() {

          </h1>  return (

          <h2 className="text-2xl md:text-4xl font-bold text-christmas-gold mb-6">    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-red-950 to-green-950">

            YOUR CHRISTMAS, OUR HANDS      <Navbar />

          </h2>      

          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">      {/* Hero Section */}

            Professional Christmas Light Installation & Holiday Services for Maritime Canada      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 pt-32">

          </p>        <div className="absolute inset-0 bg-[url('/christmas-pattern.svg')] opacity-10"></div>

                  <div className="relative z-10 text-center max-w-5xl mx-auto">

          <div className="flex flex-col sm:flex-row gap-4 justify-center">          <div className="mb-8 inline-block">

            <a            <Sparkles className="w-16 h-16 md:w-24 md:h-24 text-christmas-gold" />

              href="tel:(506)123-XMAS"          </div>

              className="bg-gradient-to-r from-christmas-red to-christmas-green text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl flex items-center justify-center gap-2"          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">

            >            🎄 PLACED 🎄

              <Phone className="w-5 h-5" />          </h1>

              📞 CALL (506) 123-XMAS          <h2 className="text-2xl md:text-4xl font-bold text-christmas-gold mb-6">

            </a>            YOUR CHRISTMAS, OUR HANDS

            <a          </h2>

              href="#handbook"          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">

              className="bg-white/10 text-white font-bold py-4 px-8 rounded-full text-lg border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-2"            Professional Christmas Light Installation & Holiday Services in Saint John, Quispamsis & Rothesay

            >          </p>

              📚 READ HANDBOOK          

            </a>          <div className="mb-12">

          </div>            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">

        </div>              ⏰ Countdown to Christmas ⏰

      </section>            </h2>

            <CountdownTimer />

      {/* Services Section */}          </div>

      <section className="py-20 px-4 bg-white/5">          

        <div className="max-w-6xl mx-auto">          <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <div className="text-center mb-16">            <motion.button

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">              whileHover={{ scale: 1.05 }}

              Our Services              whileTap={{ scale: 0.95 }}

            </h2>              onClick={() => {

            <p className="text-xl text-white/80">                import('canvas-confetti').then((confetti) => {

              Complete Christmas lighting solutions for your home or business                  confetti.default({

            </p>                    particleCount: 150,

          </div>                    spread: 100,

                    origin: { y: 0.6 },

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">                    colors: ['#dc2626', '#16a34a', '#fbbf24', '#ffffff'],

            <div className="bg-white/10 rounded-3xl p-8 text-center">                  });

              <div className="text-6xl mb-4">🏠</div>                });

              <h3 className="text-2xl font-bold text-white mb-4">Residential Installation</h3>              }}

              <p className="text-white/80 mb-4">Professional home lighting design and installation</p>              className="bg-gradient-to-r from-christmas-red to-christmas-green text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl"

              <div className="text-christmas-gold font-bold text-xl">Starting at $299</div>            >

            </div>              📞 BOOK NOW - FREE QUOTE

            </motion.button>

            <div className="bg-white/10 rounded-3xl p-8 text-center">          </div>

              <div className="text-6xl mb-4">🏢</div>        </div>

              <h3 className="text-2xl font-bold text-white mb-4">Commercial Displays</h3>      </section>

              <p className="text-white/80 mb-4">Eye-catching business and storefront lighting</p>

              <div className="text-christmas-gold font-bold text-xl">Custom Quote</div>      {/* Stats Section */}

            </div>      <section className="py-20 px-4 bg-white/5">

        <div className="max-w-7xl mx-auto">

            <div className="bg-white/10 rounded-3xl p-8 text-center">          <div className="text-center mb-12">

              <div className="text-6xl mb-4">🔧</div>            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">

              <h3 className="text-2xl font-bold text-white mb-4">Maintenance & Storage</h3>              🎯 Our Impact 🎯

              <p className="text-white/80 mb-4">Year-round care, removal, and storage service</p>            </h2>

              <div className="text-christmas-gold font-bold text-xl">$99/month</div>            <p className="text-xl text-white/80">

            </div>              Spreading joy around the world

          </div>            </p>

        </div>          </div>

      </section>          <StatsCounter />

        </div>

      {/* Handbook Section */}      </section>

      <section id="handbook" className="py-0">

        <HandbookPage />      {/* Installation Portfolio Section */}

      </section>      <section className="py-20 px-4">

        <div className="max-w-7xl mx-auto">

      {/* Contact Section */}          <div className="text-center mb-12">

      <section className="py-20 px-4 bg-white/5">            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">

        <div className="max-w-4xl mx-auto text-center">              📸 Our Work Portfolio 📸

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">            </h2>

            Ready to Get Started?            <p className="text-xl text-white/80">

          </h2>              See the magic we create for homes across the Maritime region

          <p className="text-xl text-white/80 mb-12">            </p>

            Contact us today for your free consultation and quote          </div>

          </p>          <InstallationPortfolio />

        </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">      </section>

            <div className="bg-white/10 rounded-2xl p-6">

              <Phone className="w-8 h-8 text-christmas-gold mx-auto mb-4" />      {/* How It Works Section */}

              <h3 className="font-bold text-white mb-2">Call Us</h3>      <section className="py-20 px-4 bg-white/5">

              <p className="text-white/80">(506) 123-XMAS</p>        <div className="max-w-6xl mx-auto">

            </div>          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">

            <div className="bg-white/10 rounded-2xl p-6">              🔧 How It Works 🔧

              <Mail className="w-8 h-8 text-christmas-gold mx-auto mb-4" />            </h2>

              <h3 className="font-bold text-white mb-2">Email Us</h3>            <p className="text-xl text-white/80 max-w-3xl mx-auto">

              <p className="text-white/80">hello@placedchristmas.ca</p>              Our proven 5-step process ensures a seamless experience from consultation to takedown

            </div>            </p>

          </div>

            <div className="bg-white/10 rounded-2xl p-6">          <HowItWorks />

              <MapPin className="w-8 h-8 text-christmas-gold mx-auto mb-4" />        </div>

              <h3 className="font-bold text-white mb-2">Service Area</h3>      </section>

              <p className="text-white/80">Saint John & Area</p>

            </div>      {/* Daily Tips Section */}

          </div>      <section className="py-20 px-4 bg-white/5">

        <div className="max-w-7xl mx-auto">

          <a          <div className="grid lg:grid-cols-2 gap-12 items-start">

            href="tel:(506)123-XMAS"            <div>

            className="bg-gradient-to-r from-christmas-red to-christmas-green text-white font-bold py-6 px-12 rounded-full text-xl shadow-2xl inline-flex items-center gap-3"              <div className="text-center lg:text-left mb-8">

          >                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">

            <Phone className="w-6 h-6" />                  💡 Daily Holiday Tips 💡

            Get Your Free Quote Today                </h2>

          </a>                <p className="text-xl text-white/80">

        </div>                  Click each day for professional lighting tips and special offers!

      </section>                </p>

              </div>

      {/* Footer */}              <AdventCalendar />

      <footer className="bg-slate-950 py-12 px-4 border-t border-white/10">            </div>

        <div className="max-w-7xl mx-auto text-center">            

          <div className="flex items-center justify-center gap-2 mb-4">            <div className="lg:sticky lg:top-24">

            <Gift className="w-8 h-8 text-christmas-gold" />              <ServiceArea />

            <div>            </div>

              <span className="text-2xl font-bold text-white">PLACED</span>          </div>

              <div className="text-sm text-christmas-gold">Your Christmas, Our Hands</div>        </div>

            </div>      </section>

          </div>

          <p className="text-white/70 mb-4">      {/* Features Section */}

            Professional Christmas light installation serving Maritime Canada      <section className="py-20 px-4 bg-white/5">

          </p>        <div className="max-w-7xl mx-auto">

          <p className="text-white/50 text-sm">          <div className="text-center mb-12">

            © 2025 PLACED Christmas Services. All rights reserved.            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">

          </p>              ✨ Why Choose Us ✨

        </div>            </h2>

      </footer>            <p className="text-xl text-white/80">

    </div>              Making your Christmas season extra special

  );            </p>

}          </div>
          <Features />
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              � Our Services �
            </h2>
            <p className="text-xl text-white/80">
              Professional Christmas light installation & holiday services
            </p>
          </div>
          <ProductShowcase />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-center lg:text-left mb-8">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  💬 What People Say 💬
                </h2>
                <p className="text-xl text-white/80">
                  Hear from our happy customers
                </p>
              </div>
              <Testimonials />
            </div>
            
            <div className="lg:sticky lg:top-24">
              {/* Removed WishlistMaker for simpler interface */}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-6">
              📅 Book Your Service
            </h2>
            <p className="text-xl text-white/80">
              Schedule your free consultation and get started today
            </p>
          </div>
          <BookingForm />
        </div>
      </section>

      {/* Handbook Section */}
      <section id="handbook" className="py-0">
        <HandbookPage />
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Newsletter />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Gift className="w-6 h-6 text-christmas-gold" />
                Christmas Magic
              </h3>
              <p className="text-white/70">
                Bringing joy and wonder to your holiday season since 2024
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Shop All</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Gift Guide</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Mail className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/60">
              © 2024 Christmas Magic. Made with ❤️ and holiday cheer. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
