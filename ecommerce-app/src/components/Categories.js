import React from 'react';
import { Link } from 'react-router-dom';

const CATEGORIES = [
  'electronics',
  "men's clothing",
  "women's clothing",
  'jewelery',
];

const Categories = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {CATEGORIES.map((category) => (
          <Link
            key={category}
            to={`/products?category=${category}`}
            className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
              <svg className="w-16 h-16 text-white opacity-75 group-hover:opacity-100 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-4V7m8 10v3m-8 4l-8-4m0 0l-8 4m8-4V7" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 capitalize mb-2">{category.replace('-', ' ')}</h3>
              <p className="text-gray-600 group-hover:text-blue-600 transition">Shop Now</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Categories;