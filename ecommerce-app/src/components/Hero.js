import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Welcome to E-Shop
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
        Discover amazing products at unbeatable prices. Shop now and enjoy fast delivery!
      </p>
      <Link
        to="/products"
        className="bg-white text-blue-600 px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition transform hover:scale-105 shadow-xl"
      >
        Shop Now
      </Link>
    </div>
  </section>
);

export default Hero;