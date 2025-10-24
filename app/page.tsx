'use client';

import { Sparkles, Gift, Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Snowfall from './components/Snowfall';
import CountdownTimer from './components/CountdownTimer';
import AdventCalendar from './components/AdventCalendar';
import ProductShowcase from './components/ProductShowcase';
import Features from './components/Features';
import Newsletter from './components/Newsletter';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import StatsCounter from './components/StatsCounter';
import LoadingScreen from './components/LoadingScreen';
import FloatingButtons from './components/FloatingButtons';
import GiftFinder from './components/GiftFinder';
import SantaTracker from './components/SantaTracker';
import WishlistMaker from './components/WishlistMaker';
import LiveNotifications from './components/LiveNotifications';
import ChristmasLights from './components/ChristmasLights';
import BudgetCalculator from './components/BudgetCalculator';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-red-950 to-green-950">
      <LoadingScreen />
      <ChristmasLights />
      <Navbar />
      <Snowfall />
      <FloatingButtons />
      <LiveNotifications />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 pt-32">
        <div className="absolute inset-0 bg-[url('/christmas-pattern.svg')] opacity-10"></div>
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="mb-8 inline-block">
            <Sparkles className="w-16 h-16 md:w-24 md:h-24 text-christmas-gold animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 glowing-text">
            🎄 Christmas Magic 🎄
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Experience the most wonderful time of the year with our festive collection
          </p>
          
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              ⏰ Countdown to Christmas ⏰
            </h2>
            <CountdownTimer />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GiftFinder />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                import('canvas-confetti').then((confetti) => {
                  confetti.default({
                    particleCount: 150,
                    spread: 100,
                    origin: { y: 0.6 },
                    colors: ['#dc2626', '#16a34a', '#fbbf24', '#ffffff'],
                  });
                });
              }}
              className="bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold py-4 px-8 rounded-full text-lg hover:scale-105 transition-transform"
            >
              Explore Gifts ✨
            </motion.button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              🎯 Our Impact 🎯
            </h2>
            <p className="text-xl text-white/80">
              Spreading joy around the world
            </p>
          </div>
          <StatsCounter />
        </div>
      </section>

      {/* Advent Calendar Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <div className="text-center lg:text-left mb-8">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  🎅 Advent Calendar 🎅
                </h2>
                <p className="text-xl text-white/80">
                  Click each day to reveal a special surprise!
                </p>
              </div>
              <AdventCalendar />
            </div>
            
            <div className="lg:sticky lg:top-24">
              <SantaTracker />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              ✨ Why Choose Us ✨
            </h2>
            <p className="text-xl text-white/80">
              Making your Christmas season extra special
            </p>
          </div>
          <Features />
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              🎁 Featured Gifts 🎁
            </h2>
            <p className="text-xl text-white/80">
              Handpicked treasures for your loved ones
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
              <WishlistMaker />
            </div>
          </div>
        </div>
      </section>

      {/* Budget Calculator Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <BudgetCalculator />
        </div>
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
