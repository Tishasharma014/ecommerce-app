import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { productsAPI } from '../services/api';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await productsAPI.getProductById(id);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-pulse">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="h-96 bg-gray-300 rounded-xl"></div>
              <div className="space-y-6">
                <div className="h-10 bg-gray-300 rounded-lg w-3/4"></div>
                <div className="h-8 bg-gray-300 rounded w-1/2"></div>
                <div className="h-12 bg-gray-300 rounded-lg"></div>
                <div className="h-12 bg-gray-300 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Product not found</h1>
          <Link to="/products" className="bg-blue-500 text-white px-6 py-2 rounded-lg">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <Link
          to="/products"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium"
        >
          ← Back to Products
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="group">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-96 object-cover rounded-xl shadow-xl group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.title}</h1>
              <p className="text-3xl font-bold text-green-600 mb-2">${product.price}</p>
              <div className="flex items-center">
                <span className="text-yellow-400 text-2xl">★ {product.rating?.rate || 4.5}</span>
                <span className="ml-2 text-gray-600">({product.rating?.count || 120} reviews)</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Description</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            <div className="flex items-center space-x-4">
              <label className="text-lg font-medium">Quantity:</label>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition"
                >
                  -
                </button>
                <span className="w-12 text-center text-xl font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition"
                >
                  +
                </button>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <button
                onClick={handleAddToCart}
                className="w-full bg-blue-500 text-white py-4 px-8 rounded-xl text-xl font-bold hover:bg-blue-600 transition transform hover:scale-105 shadow-xl"
              >
                Add to Cart
              </button>
              <button
                onClick={() => navigate('/cart')}
                className="w-full bg-green-500 text-white py-4 px-8 rounded-xl text-xl font-bold hover:bg-green-600 transition transform hover:scale-105 shadow-xl"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;