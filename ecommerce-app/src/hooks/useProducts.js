import { useState, useEffect } from 'react';
import { productsAPI } from '../services/api';  // ✅ FIXED: productsAPI (plural)

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {  // ✅ Function defined here
    try {
      setLoading(true);
      const response = await productsAPI.getAllProducts();
      setProducts(response.data);
    } catch (err) {
      setError('Failed to fetch products');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await productsAPI.getCategories();
      setCategories(response.data);
    } catch (err) {
      console.error('Failed to fetch categories');
    }
  };

  const fetchProductsByCategory = async (category) => {
    try {
      setLoading(true);
      const response = await productsAPI.getProductsByCategory(category);
      setProducts(response.data);
    } catch (err) {
      setError('Failed to fetch products');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    products,
    categories,
    loading,
    error,
    refetch: fetchProducts,
    fetchByCategory: fetchProductsByCategory,
  };
};