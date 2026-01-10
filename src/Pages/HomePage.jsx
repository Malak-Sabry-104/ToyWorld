import { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import Hero from "../Components/Hero";
import ProductList from "../Components/ProductList";
import ClipLoader from "react-spinners/ClipLoader";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  // loading 
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  // Loader
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[75vh]">
        <ClipLoader color="#7B3C34" size={100} />
      </div>
    );
  }

  return (
    <Layout>
      <Hero />
      <ProductList />
    </Layout>
  );
};

export default HomePage;
