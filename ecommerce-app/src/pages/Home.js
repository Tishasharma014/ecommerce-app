import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import { useProducts } from '../hooks/useProducts';

const Home = () => {
  const { products, loading } = useProducts();

  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts products={products} loading={loading} />
    </>
  );
};

export default Home;