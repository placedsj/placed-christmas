'use client';'use client';'use client';'use client';



import { Sparkles, Gift, Phone, Mail, MapPin, Star, Check, ArrowRight, Zap, Shield, Users } from 'lucide-react';

import { useState } from 'react';

import Navbar from './components/Navbar';import { Sparkles, Gift, Phone, Mail, MapPin, Star, Check, ArrowRight, Zap, Shield, Users } from 'lucide-react';



export default function Home() {import { useState } from 'react';

  const [openFaq, setOpenFaq] = useState<number | null>(null);

import Navbar from './components/Navbar';import { Sparkles, Gift, Phone, Mail, MapPin } from 'lucide-react';import { Sparkles, Gift, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

  const faqs = [

    {

      question: "How far in advance should I book Christmas light installation?",

      answer: "We recommend booking at least 4-6 weeks before the holiday season to secure your preferred installation date and ensure the best service."export default function Home() {import Navbar from './components/Navbar';import { motion } from 'framer-motion';

    },

    {  const [openFaq, setOpenFaq] = useState<number | null>(null);

      question: "Do you provide custom lighting designs for homes and businesses?",

      answer: "Absolutely! Our design team creates custom lighting displays tailored to your property, style preferences, and budget."import HandbookPage from './components/HandbookPage';import CountdownTimer from './components/CountdownTimer';

    },

    {  const faqs = [

      question: "What's included in your maintenance service?",

      answer: "Our maintenance service includes bulb replacement, troubleshooting, adjustments, and ensuring your display stays bright throughout the season."    {import AdventCalendar from './components/AdventCalendar';

    },

    {      question: "How far in advance should I book Christmas light installation?",

      question: "How much does professional Christmas light installation cost?",

      answer: "Residential installations start at $299. We provide free consultations and quotes based on your specific needs and property size."      answer: "We recommend booking at least 4-6 weeks before the holiday season to secure your preferred installation date and ensure the best service."export default function Home() {import ProductShowcase from './components/ProductShowcase';

    },

    {    },

      question: "Do you handle both installation and removal?",

      answer: "Yes! We handle the complete process: design consultation, installation, maintenance, and safe removal and storage after the holidays."    {  return (import Features from './components/Features';

    }

  ];      question: "Do you provide custom lighting designs for homes and businesses?",



  return (      answer: "Absolutely! Our design team creates custom lighting displays tailored to your property, style preferences, and budget."    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-red-950 to-green-950">import Newsletter from './components/Newsletter';

    <div className="min-h-screen bg-white">

      <Navbar />    },

      

      {/* Hero Section */}    {      <Navbar />import Navbar from './components/Navbar';

      <section className="relative bg-gradient-to-br from-slate-900 via-red-950 to-green-950 text-white">

        <div className="absolute inset-0 bg-black/20"></div>      question: "What's included in your maintenance service?",

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 pt-32">

          <div className="text-center max-w-4xl mx-auto">      answer: "Our maintenance service includes bulb replacement, troubleshooting, adjustments, and ensuring your display stays bright throughout the season."      import Testimonials from './components/Testimonials';

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">

              Make This Season Shine with Professional Christmas Light Installation    },

            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">    {      {/* Hero Section */}import StatsCounter from './components/StatsCounter';

              Transform your property into a winter wonderland with our expert Christmas light installation services across Maritime Canada

            </p>      question: "How much does professional Christmas light installation cost?",

            

            <div className="flex flex-col sm:flex-row gap-4 justify-center">      answer: "Residential installations start at $299. We provide free consultations and quotes based on your specific needs and property size."      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 pt-32">import BookingForm from './components/BookingForm';

              <a

                href="tel:(506)123-XMAS"    },

                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all flex items-center justify-center gap-2"

              >    {        <div className="relative z-10 text-center max-w-5xl mx-auto">import ServiceArea from './components/ServiceArea';

                <Phone className="w-5 h-5" />

                Get Your Free Quote      question: "Do you handle both installation and removal?",

              </a>

              <a      answer: "Yes! We handle the complete process: design consultation, installation, maintenance, and safe removal and storage after the holidays."          <div className="mb-8 inline-block">import InstallationPortfolio from './components/InstallationPortfolio';

                href="#services"

                className="bg-white/10 backdrop-blur hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg text-lg border border-white/20 transition-all flex items-center justify-center gap-2"    }

              >

                <ArrowRight className="w-5 h-5" />  ];            <Sparkles className="w-16 h-16 md:w-24 md:h-24 text-christmas-gold" />import HowItWorks from './components/HowItWorks';

                View Our Services

              </a>

            </div>

          </div>  return (          </div>import HandbookPage from './components/HandbookPage';

        </div>

      </section>    <div className="min-h-screen bg-white">



      {/* Subheader */}      <Navbar />          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">

      <section className="bg-slate-50 py-16">

        <div className="max-w-7xl mx-auto px-4 text-center">      

          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">

            Brighten Your Holidays Safely with Our Expert Christmas Light Installation Company      {/* Hero Section */}            🎄 PLACED 🎄export default function Home() {

          </h2>

          <p className="text-xl text-slate-600 max-w-4xl mx-auto">      <section className="relative bg-gradient-to-br from-slate-900 via-red-950 to-green-950 text-white">

            Our expert Christmas light installation company focuses on hassle-free, secure installations. 

            We design festive displays for your home or business that bring joy and timeless charm to both indoor and outdoor spaces.        <div className="absolute inset-0 bg-black/20"></div>          </h1>  return (

          </p>

        </div>        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 pt-32">

      </section>

          <div className="text-center max-w-4xl mx-auto">          <h2 className="text-2xl md:text-4xl font-bold text-christmas-gold mb-6">    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-red-950 to-green-950">

      {/* Three Core Services */}

      <section className="py-20 bg-white">            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">

        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">              Make This Season Shine with Professional Christmas Light Installation            YOUR CHRISTMAS, OUR HANDS      <Navbar />

            {/* Install */}

            <div className="text-center">            </h1>

              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">

                <Zap className="w-10 h-10 text-green-600" />            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">          </h2>      

              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-4">WE INSTALL LIGHTS WITH CARE</h3>              Transform your property into a winter wonderland with our expert Christmas light installation services across Maritime Canada

              <p className="text-slate-600 leading-relaxed">

                You won't have to touch a single strand of holiday lights when you work with PLACED.             </p>          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">      {/* Hero Section */}

                We manage everything from concept and design through installation and removal, leaving you the time to enjoy your holidays!

              </p>            

            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">            Professional Christmas Light Installation & Holiday Services for Maritime Canada      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 pt-32">

            {/* Sell */}

            <div className="text-center">              <a

              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">

                <Star className="w-10 h-10 text-red-600" />                href="tel:(506)123-XMAS"          </p>        <div className="absolute inset-0 bg-[url('/christmas-pattern.svg')] opacity-10"></div>

              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-4">WE SELL PREMIUM HOLIDAY LIGHTS</h3>                className="bg-christmas-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all flex items-center justify-center gap-2"

              <p className="text-slate-600 leading-relaxed">

                We offer professional-grade lights built to last and enhance your home or business.               >                  <div className="relative z-10 text-center max-w-5xl mx-auto">

                Our energy-efficient, long-lasting lights add warm seasonal ambiance to any property.

              </p>                <Phone className="w-5 h-5" />

            </div>

                Get Your Free Quote          <div className="flex flex-col sm:flex-row gap-4 justify-center">          <div className="mb-8 inline-block">

            {/* Design */}

            <div className="text-center">              </a>

              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">

                <Users className="w-10 h-10 text-yellow-600" />              <a            <a            <Sparkles className="w-16 h-16 md:w-24 md:h-24 text-christmas-gold" />

              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-4">WE DESIGN LIGHTING EXPERIENCES</h3>                href="#services"

              <p className="text-slate-600 leading-relaxed">

                Expect more than lights—we design memorable light experiences.                 className="bg-white/10 backdrop-blur hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg text-lg border border-white/20 transition-all flex items-center justify-center gap-2"              href="tel:(506)123-XMAS"          </div>

                Our creative team designs every detail to warm your space with beauty and magic.

              </p>              >

            </div>

          </div>                <ArrowRight className="w-5 h-5" />              className="bg-gradient-to-r from-christmas-red to-christmas-green text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl flex items-center justify-center gap-2"          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">

        </div>

      </section>                View Our Services



      {/* Professional Lighting Solutions */}              </a>            >            🎄 PLACED 🎄

      <section id="services" className="py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-4">            </div>

          <div className="text-center mb-16">

            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">          </div>              <Phone className="w-5 h-5" />          </h1>

              Professional Lighting Solutions for Every Occasion

            </h2>        </div>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto">

              From elegant landscapes to magical holidays, our expert lighting services deliver creativity, safety, and brilliance for every celebration and season.      </section>              📞 CALL (506) 123-XMAS          <h2 className="text-2xl md:text-4xl font-bold text-christmas-gold mb-6">

            </p>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">      {/* Subheader */}            </a>            YOUR CHRISTMAS, OUR HANDS

            {/* Christmas Lighting */}

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">      <section className="bg-slate-50 py-16">

              <div className="text-6xl mb-6 text-center">🎄</div>

              <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">Christmas Lighting</h3>        <div className="max-w-7xl mx-auto px-4 text-center">            <a          </h2>

              <p className="text-slate-600 mb-6 text-center">

                Enjoy the season with our Christmas light installation company. We provide expert, hassle-free, and safe lighting installations for stunning holiday displays.          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">

              </p>

              <div className="text-center">            Brighten Your Holidays Safely with Our Expert Christmas Light Installation Company              href="#handbook"          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">

                <div className="text-green-600 font-bold text-xl mb-4">Starting at $299</div>

                <a href="tel:(506)123-XMAS" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block">          </h2>

                  Get Quote

                </a>          <p className="text-xl text-slate-600 max-w-4xl mx-auto">              className="bg-white/10 text-white font-bold py-4 px-8 rounded-full text-lg border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-2"            Professional Christmas Light Installation & Holiday Services in Saint John, Quispamsis & Rothesay

              </div>

            </div>            Our expert Christmas light installation company focuses on hassle-free, secure installations. 



            {/* Landscape Lighting */}            We design festive displays for your home or business that bring joy and timeless charm to both indoor and outdoor spaces.            >          </p>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">

              <div className="text-6xl mb-6 text-center">🌿</div>          </p>

              <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">Landscape Lighting</h3>

              <p className="text-slate-600 mb-6 text-center">        </div>              📚 READ HANDBOOK          

                Explore our landscape lighting services to enhance your outdoor areas. We create stylish, energy-efficient lighting solutions for gardens and walkways.

              </p>      </section>

              <div className="text-center">

                <div className="text-green-600 font-bold text-xl mb-4">Custom Quote</div>            </a>          <div className="mb-12">

                <a href="tel:(506)123-XMAS" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block">

                  Learn More      {/* Three Core Services */}

                </a>

              </div>      <section className="py-20 bg-white">          </div>            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">

            </div>

        <div className="max-w-7xl mx-auto px-4">

            {/* Commercial Lighting */}

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">        </div>              ⏰ Countdown to Christmas ⏰

              <div className="text-6xl mb-6 text-center">🏢</div>

              <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">Commercial Lighting</h3>            {/* Install */}

              <p className="text-slate-600 mb-6 text-center">

                Our commercial lighting delivers customized solutions for businesses. We create professional displays that attract customers and enhance branding.            <div className="text-center">      </section>            </h2>

              </p>

              <div className="text-center">              <div className="bg-christmas-green/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">

                <div className="text-green-600 font-bold text-xl mb-4">Enterprise Pricing</div>

                <a href="tel:(506)123-XMAS" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block">                <Zap className="w-10 h-10 text-christmas-green" />            <CountdownTimer />

                  Contact Us

                </a>              </div>

              </div>

            </div>              <h3 className="text-2xl font-bold text-slate-800 mb-4">WE INSTALL LIGHTS WITH CARE</h3>      {/* Services Section */}          </div>

          </div>

        </div>              <p className="text-slate-600 leading-relaxed">

      </section>

                You won't have to touch a single strand of holiday lights when you work with PLACED.       <section className="py-20 px-4 bg-white/5">          

      {/* 4-Step Process */}

      <section className="py-20 bg-white">                We manage everything from concept and design through installation and removal, leaving you the time to enjoy your holidays!

        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">              </p>        <div className="max-w-6xl mx-auto">          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">

              Professional Christmas Light Installation Made Easy            </div>

            </h2>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto">          <div className="text-center mb-16">            <motion.button

              At PLACED, we believe holiday lights should be a source of happiness, not stress. 

              Our expert team follows a simple 4-step process to ensure flawless installation.            {/* Sell */}

            </p>

          </div>            <div className="text-center">            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">              whileHover={{ scale: 1.05 }}



          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">              <div className="bg-christmas-red/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">

            {/* Step 1 */}

            <div className="text-center">                <Star className="w-10 h-10 text-christmas-red" />              Our Services              whileTap={{ scale: 0.95 }}

              <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">

                1              </div>

              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4">Free Design Consultation</h3>              <h3 className="text-2xl font-bold text-slate-800 mb-4">WE SELL PREMIUM HOLIDAY LIGHTS</h3>            </h2>              onClick={() => {

              <p className="text-slate-600">

                Our designers work with you to create a unique Christmas lighting scheme that complements your space and budget.              <p className="text-slate-600 leading-relaxed">

              </p>

            </div>                We offer professional-grade lights built to last and enhance your home or business.             <p className="text-xl text-white/80">                import('canvas-confetti').then((confetti) => {



            {/* Step 2 */}                Our energy-efficient, long-lasting lights add warm seasonal ambiance to any property.

            <div className="text-center">

              <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">              </p>              Complete Christmas lighting solutions for your home or business                  confetti.default({

                2

              </div>            </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4">Professional Installation</h3>

              <p className="text-slate-600">            </p>                    particleCount: 150,

                Our skilled installers handle everything safely and efficiently using commercial-grade, high-quality lights.

              </p>            {/* Design */}

            </div>

            <div className="text-center">          </div>                    spread: 100,

            {/* Step 3 */}

            <div className="text-center">              <div className="bg-christmas-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">

              <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">

                3                <Users className="w-10 h-10 text-christmas-gold" />                    origin: { y: 0.6 },

              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4">Maintenance & Support</h3>              </div>

              <p className="text-slate-600">

                We offer full maintenance throughout the holiday season, keeping your display bright and beautiful all winter long.              <h3 className="text-2xl font-bold text-slate-800 mb-4">WE DESIGN LIGHTING EXPERIENCES</h3>          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">                    colors: ['#dc2626', '#16a34a', '#fbbf24', '#ffffff'],

              </p>

            </div>              <p className="text-slate-600 leading-relaxed">



            {/* Step 4 */}                Expect more than lights—we design memorable light experiences.             <div className="bg-white/10 rounded-3xl p-8 text-center">                  });

            <div className="text-center">

              <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">                Our creative team designs every detail to warm your space with beauty and magic.

                4

              </div>              </p>              <div className="text-6xl mb-4">🏠</div>                });

              <h3 className="text-xl font-bold text-slate-800 mb-4">Safe Takedown & Storage</h3>

              <p className="text-slate-600">            </div>

                When the season ends, we carefully remove and store your lights, ensuring your investment stays protected.

              </p>          </div>              <h3 className="text-2xl font-bold text-white mb-4">Residential Installation</h3>              }}

            </div>

          </div>        </div>

        </div>

      </section>      </section>              <p className="text-white/80 mb-4">Professional home lighting design and installation</p>              className="bg-gradient-to-r from-christmas-red to-christmas-green text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl"



      {/* Testimonials */}

      <section className="py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-4">      {/* Professional Lighting Solutions */}              <div className="text-christmas-gold font-bold text-xl">Starting at $299</div>            >

          <div className="text-center mb-16">

            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">      <section id="services" className="py-20 bg-slate-50">

              What Our Customers Say

            </h2>        <div className="max-w-7xl mx-auto px-4">            </div>              📞 BOOK NOW - FREE QUOTE

          </div>

          <div className="text-center mb-16">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Testimonial 1 */}            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">            </motion.button>

            <div className="bg-white rounded-xl shadow-lg p-8">

              <div className="flex items-center mb-4">              Professional Lighting Solutions for Every Occasion

                {[...Array(5)].map((_, i) => (

                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />            </h2>            <div className="bg-white/10 rounded-3xl p-8 text-center">          </div>

                ))}

              </div>            <p className="text-xl text-slate-600 max-w-3xl mx-auto">

              <p className="text-slate-600 mb-6 italic">

                "This Christmas light installation company turned our home into a holiday wonderland.               From elegant landscapes to magical holidays, our expert lighting services deliver creativity, safety, and brilliance for every celebration and season.              <div className="text-6xl mb-4">🏢</div>        </div>

                The lights were stunning, and the service was professional and stress-free!"

              </p>            </p>

              <div className="font-bold text-slate-800">SARAH M.</div>

              <div className="text-slate-500">Rothesay, NB</div>          </div>              <h3 className="text-2xl font-bold text-white mb-4">Commercial Displays</h3>      </section>

            </div>



            {/* Testimonial 2 */}

            <div className="bg-white rounded-xl shadow-lg p-8">          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">              <p className="text-white/80 mb-4">Eye-catching business and storefront lighting</p>

              <div className="flex items-center mb-4">

                {[...Array(5)].map((_, i) => (            {/* Christmas Lighting */}

                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />

                ))}            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">              <div className="text-christmas-gold font-bold text-xl">Custom Quote</div>      {/* Stats Section */}

              </div>

              <p className="text-slate-600 mb-6 italic">              <div className="text-6xl mb-6 text-center">🎄</div>

                "We've never seen our house look this magical! The team designed a beautiful display that wowed our neighbors all season."

              </p>              <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">Christmas Lighting</h3>            </div>      <section className="py-20 px-4 bg-white/5">

              <div className="font-bold text-slate-800">MIKE F.</div>

              <div className="text-slate-500">Saint John, NB</div>              <p className="text-slate-600 mb-6 text-center">

            </div>

                Enjoy the season with our Christmas light installation company. We provide expert, hassle-free, and safe lighting installations for stunning holiday displays.        <div className="max-w-7xl mx-auto">

            {/* Testimonial 3 */}

            <div className="bg-white rounded-xl shadow-lg p-8">              </p>

              <div className="flex items-center mb-4">

                {[...Array(5)].map((_, i) => (              <div className="text-center">            <div className="bg-white/10 rounded-3xl p-8 text-center">          <div className="text-center mb-12">

                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />

                ))}                <div className="text-christmas-green font-bold text-xl mb-4">Starting at $299</div>

              </div>

              <p className="text-slate-600 mb-6 italic">                <a href="tel:(506)123-XMAS" className="bg-christmas-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block">              <div className="text-6xl mb-4">🔧</div>            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">

                "From start to finish, everything was seamless. PLACED handled design, setup, and removal with such care. Truly the best service!"

              </p>                  Get Quote

              <div className="font-bold text-slate-800">JENNIFER P.</div>

              <div className="text-slate-500">Quispamsis, NB</div>                </a>              <h3 className="text-2xl font-bold text-white mb-4">Maintenance & Storage</h3>              🎯 Our Impact 🎯

            </div>

          </div>              </div>

        </div>

      </section>            </div>              <p className="text-white/80 mb-4">Year-round care, removal, and storage service</p>            </h2>



      {/* FAQ Section */}

      <section className="py-20 bg-white">

        <div className="max-w-4xl mx-auto px-4">            {/* Landscape Lighting */}              <div className="text-christmas-gold font-bold text-xl">$99/month</div>            <p className="text-xl text-white/80">

          <div className="text-center mb-16">

            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">

              Frequently Asked Questions

            </h2>              <div className="text-6xl mb-6 text-center">🌿</div>            </div>              Spreading joy around the world

          </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">Landscape Lighting</h3>

          <div className="space-y-4">

            {faqs.map((faq, index) => (              <p className="text-slate-600 mb-6 text-center">          </div>            </p>

              <div key={index} className="border border-slate-200 rounded-lg">

                <button                Explore our landscape lighting services to enhance your outdoor areas. We create stylish, energy-efficient lighting solutions for gardens and walkways.

                  className="w-full px-6 py-4 text-left font-semibold text-slate-800 hover:bg-slate-50 transition-colors flex justify-between items-center"

                  onClick={() => setOpenFaq(openFaq === index ? null : index)}              </p>        </div>          </div>

                >

                  <span>{faq.question}</span>              <div className="text-center">

                  <span className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>

                    ▼                <div className="text-christmas-green font-bold text-xl mb-4">Custom Quote</div>      </section>          <StatsCounter />

                  </span>

                </button>                <a href="tel:(506)123-XMAS" className="bg-christmas-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block">

                {openFaq === index && (

                  <div className="px-6 pb-4 text-slate-600">                  Learn More        </div>

                    {faq.answer}

                  </div>                </a>

                )}

              </div>              </div>      {/* Handbook Section */}      </section>

            ))}

          </div>            </div>

        </div>

      </section>      <section id="handbook" className="py-0">



      {/* Footer */}            {/* Commercial Lighting */}

      <footer className="bg-slate-900 text-white py-16">

        <div className="max-w-7xl mx-auto px-4">            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">        <HandbookPage />      {/* Installation Portfolio Section */}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

            {/* Logo & Contact */}              <div className="text-6xl mb-6 text-center">🏢</div>

            <div className="md:col-span-2">

              <div className="flex items-center gap-2 mb-6">              <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">Commercial Lighting</h3>      </section>      <section className="py-20 px-4">

                <Gift className="w-8 h-8 text-yellow-400" />

                <div>              <p className="text-slate-600 mb-6 text-center">

                  <div className="text-2xl font-bold">PLACED</div>

                  <div className="text-yellow-400 text-sm">Your Christmas, Our Hands</div>                Our commercial lighting delivers customized solutions for businesses. We create professional displays that attract customers and enhance branding.        <div className="max-w-7xl mx-auto">

                </div>

              </div>              </p>

              <p className="text-slate-300 mb-6">

                Professional Christmas light installation serving Maritime Canada with expert design, installation, and maintenance services.              <div className="text-center">      {/* Contact Section */}          <div className="text-center mb-12">

              </p>

              <div className="space-y-2">                <div className="text-christmas-green font-bold text-xl mb-4">Enterprise Pricing</div>

                <div className="flex items-center gap-2">

                  <Phone className="w-4 h-4 text-yellow-400" />                <a href="tel:(506)123-XMAS" className="bg-christmas-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block">      <section className="py-20 px-4 bg-white/5">            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">

                  <span>(506) 123-XMAS</span>

                </div>                  Contact Us

                <div className="flex items-center gap-2">

                  <Mail className="w-4 h-4 text-yellow-400" />                </a>        <div className="max-w-4xl mx-auto text-center">              📸 Our Work Portfolio 📸

                  <span>hello@placedchristmas.ca</span>

                </div>              </div>

                <div className="flex items-center gap-2">

                  <MapPin className="w-4 h-4 text-yellow-400" />            </div>          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">            </h2>

                  <span>Saint John, NB & Area</span>

                </div>          </div>

              </div>

            </div>        </div>            Ready to Get Started?            <p className="text-xl text-white/80">



            {/* Quick Links */}      </section>

            <div>

              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>          </h2>              See the magic we create for homes across the Maritime region

              <ul className="space-y-2 text-slate-300">

                <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>      {/* 4-Step Process */}

                <li><a href="tel:(506)123-XMAS" className="hover:text-white transition-colors">Get Quote</a></li>

                <li><a href="#handbook" className="hover:text-white transition-colors">Handbook</a></li>      <section className="py-20 bg-white">          <p className="text-xl text-white/80 mb-12">            </p>

                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>

              </ul>        <div className="max-w-7xl mx-auto px-4">

            </div>

          <div className="text-center mb-16">            Contact us today for your free consultation and quote          </div>

            {/* Services */}

            <div>            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">

              <h4 className="text-lg font-semibold mb-4">Services</h4>

              <ul className="space-y-2 text-slate-300">              Professional Christmas Light Installation Made Easy          </p>          <InstallationPortfolio />

                <li>Christmas Light Installation</li>

                <li>Landscape Lighting</li>            </h2>

                <li>Commercial Lighting</li>

                <li>Maintenance & Storage</li>            <p className="text-xl text-slate-600 max-w-3xl mx-auto">        </div>

              </ul>

            </div>              At PLACED, we believe holiday lights should be a source of happiness, not stress. 

          </div>

              Our expert team follows a simple 4-step process to ensure flawless installation.          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">      </section>

          <div className="border-t border-slate-700 pt-8 text-center text-slate-400">

            <p>© 2025 PLACED Christmas Services. All rights reserved.</p>            </p>

          </div>

        </div>          </div>            <div className="bg-white/10 rounded-2xl p-6">

      </footer>

    </div>

  );

}          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">              <Phone className="w-8 h-8 text-christmas-gold mx-auto mb-4" />      {/* How It Works Section */}

            {/* Step 1 */}

            <div className="text-center">              <h3 className="font-bold text-white mb-2">Call Us</h3>      <section className="py-20 px-4 bg-white/5">

              <div className="bg-christmas-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">

                1              <p className="text-white/80">(506) 123-XMAS</p>        <div className="max-w-6xl mx-auto">

              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4">Free Design Consultation</h3>            </div>          <div className="text-center mb-16">

              <p className="text-slate-600">

                Our designers work with you to create a unique Christmas lighting scheme that complements your space and budget.            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">

              </p>

            </div>            <div className="bg-white/10 rounded-2xl p-6">              🔧 How It Works 🔧



            {/* Step 2 */}              <Mail className="w-8 h-8 text-christmas-gold mx-auto mb-4" />            </h2>

            <div className="text-center">

              <div className="bg-christmas-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">              <h3 className="font-bold text-white mb-2">Email Us</h3>            <p className="text-xl text-white/80 max-w-3xl mx-auto">

                2

              </div>              <p className="text-white/80">hello@placedchristmas.ca</p>              Our proven 5-step process ensures a seamless experience from consultation to takedown

              <h3 className="text-xl font-bold text-slate-800 mb-4">Professional Installation</h3>

              <p className="text-slate-600">            </div>            </p>

                Our skilled installers handle everything safely and efficiently using commercial-grade, high-quality lights.

              </p>          </div>

            </div>

            <div className="bg-white/10 rounded-2xl p-6">          <HowItWorks />

            {/* Step 3 */}

            <div className="text-center">              <MapPin className="w-8 h-8 text-christmas-gold mx-auto mb-4" />        </div>

              <div className="bg-christmas-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">

                3              <h3 className="font-bold text-white mb-2">Service Area</h3>      </section>

              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4">Maintenance & Support</h3>              <p className="text-white/80">Saint John & Area</p>

              <p className="text-slate-600">

                We offer full maintenance throughout the holiday season, keeping your display bright and beautiful all winter long.            </div>      {/* Daily Tips Section */}

              </p>

            </div>          </div>      <section className="py-20 px-4 bg-white/5">



            {/* Step 4 */}        <div className="max-w-7xl mx-auto">

            <div className="text-center">

              <div className="bg-christmas-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">          <a          <div className="grid lg:grid-cols-2 gap-12 items-start">

                4

              </div>            href="tel:(506)123-XMAS"            <div>

              <h3 className="text-xl font-bold text-slate-800 mb-4">Safe Takedown & Storage</h3>

              <p className="text-slate-600">            className="bg-gradient-to-r from-christmas-red to-christmas-green text-white font-bold py-6 px-12 rounded-full text-xl shadow-2xl inline-flex items-center gap-3"              <div className="text-center lg:text-left mb-8">

                When the season ends, we carefully remove and store your lights, ensuring your investment stays protected.

              </p>          >                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">

            </div>

          </div>            <Phone className="w-6 h-6" />                  💡 Daily Holiday Tips 💡

        </div>

      </section>            Get Your Free Quote Today                </h2>



      {/* Testimonials */}          </a>                <p className="text-xl text-white/80">

      <section className="py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-4">        </div>                  Click each day for professional lighting tips and special offers!

          <div className="text-center mb-16">

            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">      </section>                </p>

              What Our Customers Say

            </h2>              </div>

          </div>

      {/* Footer */}              <AdventCalendar />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Testimonial 1 */}      <footer className="bg-slate-950 py-12 px-4 border-t border-white/10">            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">

              <div className="flex items-center mb-4">        <div className="max-w-7xl mx-auto text-center">            

                {[...Array(5)].map((_, i) => (

                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />          <div className="flex items-center justify-center gap-2 mb-4">            <div className="lg:sticky lg:top-24">

                ))}

              </div>            <Gift className="w-8 h-8 text-christmas-gold" />              <ServiceArea />

              <p className="text-slate-600 mb-6 italic">

                "This Christmas light installation company turned our home into a holiday wonderland.             <div>            </div>

                The lights were stunning, and the service was professional and stress-free!"

              </p>              <span className="text-2xl font-bold text-white">PLACED</span>          </div>

              <div className="font-bold text-slate-800">SARAH M.</div>

              <div className="text-slate-500">Rothesay, NB</div>              <div className="text-sm text-christmas-gold">Your Christmas, Our Hands</div>        </div>

            </div>

            </div>      </section>

            {/* Testimonial 2 */}

            <div className="bg-white rounded-xl shadow-lg p-8">          </div>

              <div className="flex items-center mb-4">

                {[...Array(5)].map((_, i) => (          <p className="text-white/70 mb-4">      {/* Features Section */}

                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />

                ))}            Professional Christmas light installation serving Maritime Canada      <section className="py-20 px-4 bg-white/5">

              </div>

              <p className="text-slate-600 mb-6 italic">          </p>        <div className="max-w-7xl mx-auto">

                "We've never seen our house look this magical! The team designed a beautiful display that wowed our neighbors all season."

              </p>          <p className="text-white/50 text-sm">          <div className="text-center mb-12">

              <div className="font-bold text-slate-800">MIKE F.</div>

              <div className="text-slate-500">Saint John, NB</div>            © 2025 PLACED Christmas Services. All rights reserved.            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">

            </div>

          </p>              ✨ Why Choose Us ✨

            {/* Testimonial 3 */}

            <div className="bg-white rounded-xl shadow-lg p-8">        </div>            </h2>

              <div className="flex items-center mb-4">

                {[...Array(5)].map((_, i) => (      </footer>            <p className="text-xl text-white/80">

                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />

                ))}    </div>              Making your Christmas season extra special

              </div>

              <p className="text-slate-600 mb-6 italic">  );            </p>

                "From start to finish, everything was seamless. PLACED handled design, setup, and removal with such care. Truly the best service!"

              </p>}          </div>

              <div className="font-bold text-slate-800">JENNIFER P.</div>          <Features />

              <div className="text-slate-500">Quispamsis, NB</div>        </div>

            </div>      </section>

          </div>

        </div>      {/* Product Showcase */}

      </section>      <section className="py-20 px-4">

        <div className="max-w-7xl mx-auto">

      {/* FAQ Section */}          <div className="text-center mb-12">

      <section className="py-20 bg-white">            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">

        <div className="max-w-4xl mx-auto px-4">              � Our Services �

          <div className="text-center mb-16">            </h2>

            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">            <p className="text-xl text-white/80">

              Frequently Asked Questions              Professional Christmas light installation & holiday services

            </h2>            </p>

          </div>          </div>

          <ProductShowcase />

          <div className="space-y-4">        </div>

            {faqs.map((faq, index) => (      </section>

              <div key={index} className="border border-slate-200 rounded-lg">

                <button      {/* Testimonials Section */}

                  className="w-full px-6 py-4 text-left font-semibold text-slate-800 hover:bg-slate-50 transition-colors flex justify-between items-center"      <section className="py-20 px-4 bg-white/5">

                  onClick={() => setOpenFaq(openFaq === index ? null : index)}        <div className="max-w-7xl mx-auto">

                >          <div className="grid lg:grid-cols-2 gap-12 items-start">

                  <span>{faq.question}</span>            <div>

                  <span className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>              <div className="text-center lg:text-left mb-8">

                    ▼                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">

                  </span>                  💬 What People Say 💬

                </button>                </h2>

                {openFaq === index && (                <p className="text-xl text-white/80">

                  <div className="px-6 pb-4 text-slate-600">                  Hear from our happy customers

                    {faq.answer}                </p>

                  </div>              </div>

                )}              <Testimonials />

              </div>            </div>

            ))}            

          </div>            <div className="lg:sticky lg:top-24">

        </div>              {/* Removed WishlistMaker for simpler interface */}

      </section>            </div>

          </div>

      {/* Footer */}        </div>

      <footer className="bg-slate-900 text-white py-16">      </section>

        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">      {/* Booking Form Section */}

            {/* Logo & Contact */}      <section className="py-20 px-4">

            <div className="md:col-span-2">        <div className="max-w-4xl mx-auto">

              <div className="flex items-center gap-2 mb-6">          <div className="text-center mb-12">

                <Gift className="w-8 h-8 text-christmas-gold" />            <h2 className="text-5xl font-bold text-white mb-6">

                <div>              📅 Book Your Service

                  <div className="text-2xl font-bold">PLACED</div>            </h2>

                  <div className="text-christmas-gold text-sm">Your Christmas, Our Hands</div>            <p className="text-xl text-white/80">

                </div>              Schedule your free consultation and get started today

              </div>            </p>

              <p className="text-slate-300 mb-6">          </div>

                Professional Christmas light installation serving Maritime Canada with expert design, installation, and maintenance services.          <BookingForm />

              </p>        </div>

              <div className="space-y-2">      </section>

                <div className="flex items-center gap-2">

                  <Phone className="w-4 h-4 text-christmas-gold" />      {/* Handbook Section */}

                  <span>(506) 123-XMAS</span>      <section id="handbook" className="py-0">

                </div>        <HandbookPage />

                <div className="flex items-center gap-2">      </section>

                  <Mail className="w-4 h-4 text-christmas-gold" />

                  <span>hello@placedchristmas.ca</span>      {/* Newsletter Section */}

                </div>      <section className="py-20 px-4">

                <div className="flex items-center gap-2">        <div className="max-w-4xl mx-auto">

                  <MapPin className="w-4 h-4 text-christmas-gold" />          <Newsletter />

                  <span>Saint John, NB & Area</span>        </div>

                </div>      </section>

              </div>

            </div>      {/* Footer */}

      <footer className="bg-slate-950 py-12 px-4 border-t border-white/10">

            {/* Quick Links */}        <div className="max-w-7xl mx-auto">

            <div>          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>            <div>

              <ul className="space-y-2 text-slate-300">              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">

                <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>                <Gift className="w-6 h-6 text-christmas-gold" />

                <li><a href="tel:(506)123-XMAS" className="hover:text-white transition-colors">Get Quote</a></li>                Christmas Magic

                <li><a href="#handbook" className="hover:text-white transition-colors">Handbook</a></li>              </h3>

                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>              <p className="text-white/70">

              </ul>                Bringing joy and wonder to your holiday season since 2024

            </div>              </p>

            </div>

            {/* Services */}            

            <div>            <div>

              <h4 className="text-lg font-semibold mb-4">Services</h4>              <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>

              <ul className="space-y-2 text-slate-300">              <ul className="space-y-2">

                <li>Christmas Light Installation</li>                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Shop All</a></li>

                <li>Landscape Lighting</li>                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Gift Guide</a></li>

                <li>Commercial Lighting</li>                <li><a href="#" className="text-white/70 hover:text-white transition-colors">About Us</a></li>

                <li>Maintenance & Storage</li>                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Contact</a></li>

              </ul>              </ul>

            </div>            </div>

          </div>            

            <div>

          <div className="border-t border-slate-700 pt-8 text-center text-slate-400">              <h4 className="text-lg font-bold text-white mb-4">Follow Us</h4>

            <p>© 2025 PLACED Christmas Services. All rights reserved.</p>              <div className="flex gap-4">

          </div>                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">

        </div>                  <Facebook className="w-5 h-5 text-white" />

      </footer>                </a>

    </div>                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">

  );                  <Twitter className="w-5 h-5 text-white" />

}                </a>
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
