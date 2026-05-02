import React from 'react';
import { Link } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Profile = () => {
  const { user } = useAuth();
  const { getTotalItems } = useCart();

  return (
    <ProtectedRoute>
      <div className="min-h-screen py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-8">My Profile</h1>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Info */}
                <div className="lg:col-span-2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
                    <div className="flex items-center space-x-6 mb-6">
                      <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">{user?.email}</h2>
                        <p className="opacity-90">Premium Member</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 text-sm">
                      <div>
                        <div className="text-3xl font-bold">0</div>
                        <div>Orders</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold">{getTotalItems()}</div>
                        <div>Cart Items</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-4">
                  <Link
                    to="/cart"
                    className="block bg-blue-500 text-white p-6 rounded-xl text-center font-bold hover:bg-blue-600 transition shadow-lg"
                  >
                    <div className="text-2xl mb-2">🛒</div>
                    <div>My Cart</div>
                  </Link>
                  <Link
                    to="/products"
                    className="block bg-green-500 text-white p-6 rounded-xl text-center font-bold hover:bg-green-600 transition shadow-lg"
                  >
                    <div className="text-2xl mb-2">🛍️</div>
                    <div>Continue Shopping</div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Account Settings</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Email Verified</li>
                  <li>✓ Phone Verified</li>
                  <li>✓ Two-Factor Disabled</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Payment Methods</h3>
                <div className="text-gray-600">
                  <p>No cards added yet</p>
                  <button className="mt-2 text-blue-600 hover:underline font-medium">
                    Add Card
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 md:col-span-2 lg:col-span-1">
                <h3 className="text-xl font-bold mb-4">Support</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Need help? Contact us</p>
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition font-medium">
                    Contact Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Profile;