import axios from 'axios';

const API_BASE_URL = 'https://fakestoreapi.com';

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const productsAPI = {
  getAllProducts: () => api.get('/products'),
  getProductById: (id) => api.get(`/products/${id}`),
  getProductsByCategory: (category) => api.get(`/products/category/${category}`),
  getCategories: () => api.get('/products/categories'),
};

export const authAPI = {
  login: (email, password) => {
    // Mock auth for demo
    return Promise.resolve({ data: { token: 'mock-jwt-token', user: { email } } });
  },
  register: (userData) => {
    // Mock register
    return Promise.resolve({ data: { message: 'User registered successfully' } });
  },
};