import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const { id } = useParams();

  // fetch products
  const getProducts = async () => {
    const response = await axios.get("https://basbosatoystoreapi.giize.com/api/products");
    setProducts(response.data.data);
  };
  // fetch categoriees
  const getCategories = async () => {
    const response = await axios.get(
      "https://basbosatoystoreapi.giize.com/api/categories"
    );
    console.log(response.data.data)
    setCategories(response.data.data);
  };
  // fetch products by category
  const getProductsByCategory = async (category) => {
    const response = await axios.get(
      `https://basbosatoystoreapi.giize.com/api/products/category/${category.id}`
    );
    setProducts(response.data.data);
  };
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <ProductContext.Provider
        value={{ products, categories, getProducts, getProductsByCategory }}
      >
        {children}
      </ProductContext.Provider>
    </>
  );
};

export default ProductProvider;
