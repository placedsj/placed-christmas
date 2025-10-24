'use client';

import { motion } from 'framer-motion';
import { Gift, Sparkles, Heart, Star } from 'lucide-react';

const products = [
  {
    name: 'Holiday Magic Box',
    price: '$49.99',
    icon: Gift,
    color: 'from-red-500 to-red-700',
  },
  {
    name: 'Winter Wonderland',
    price: '$39.99',
    icon: Sparkles,
    color: 'from-blue-500 to-blue-700',
  },
  {
    name: 'Festive Delights',
    price: '$59.99',
    icon: Heart,
    color: 'from-pink-500 to-pink-700',
  },
  {
    name: 'Christmas Dreams',
    price: '$44.99',
    icon: Star,
    color: 'from-yellow-500 to-yellow-700',
  },
  {
    name: 'Santa\'s Special',
    price: '$69.99',
    icon: Gift,
    color: 'from-green-500 to-green-700',
  },
  {
    name: 'Joyful Moments',
    price: '$54.99',
    icon: Sparkles,
    color: 'from-purple-500 to-purple-700',
  },
];

export default function ProductShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {products.map((product, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="group"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
            <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <product.icon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">{product.name}</h3>
            <p className="text-3xl font-bold text-christmas-gold mb-4">{product.price}</p>
            <button className="w-full bg-gradient-to-r from-christmas-red to-christmas-green text-white font-semibold py-3 px-6 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
              Add to Cart
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
