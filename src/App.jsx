import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductDetails from "./Components/ProductDetails";
import NotFound from "./Pages/NotFound";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import { Online, Offline } from "react-detect-offline";
import Cart from "./Components/Cart";
import CartPage from "./Pages/CartPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";

const App = () => {
  return (
    <>
      <Online>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartPage />} />

          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
      </Online>
      <Offline>
        <div
          className="flex justify-center items-center h-24 mt-10 mx-12.5
   bg-red-100 rounded-lg border border-red-400 "
        >
          <p className="text-red-400 font-semibold text-lg text-center">
            You are offline! Please check your internet connection.
          </p>
        </div>
      </Offline>
    </>
  );
};

export default App;
