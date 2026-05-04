import React from 'react';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12 mt-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">E-Shop</h3>
          <p>Your one-stop shop for quality products.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-400">Home</a></li>
            <li><a href="/products" className="hover:text-blue-400">Products</a></li>
            <li><a href="/cart" className="hover:text-blue-400">Cart</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Customer Service</h4>
          <ul className="space-y-2">
            <li><a href="/help" className="hover:text-blue-400">Help</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
            <li><a href="/returns" className="hover:text-blue-400">Returns</a></li>
            
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-blue-400">Facebook</a>
            <a href="https://twitter.com" className="hover:text-blue-400">Twitter</a>
            <a href="https://instagram.com" className="hover:text-blue-400">Instagram</a>
            
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center">
        <p>&copy; 2024 E-Shop. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;