import { useContext, useState } from "react";
import { ProductContext } from "../Context/ProductProvider";
import Card from "./Card";
import ClipLoader from "react-spinners/ClipLoader";

const ProductList = () => {
  const [visible, setVisible] = useState(4);
  const [activeCategory, setActiveCategory] = useState("All");

  const { products, categories, getProducts, getProductsByCategory } =
    useContext(ProductContext);

  // Show spinner while products are loading
  if (products.length === 0) {
    return (
      <div className="loading-screen flex justify-center items-center h-75">
        <ClipLoader color="#7B3C34" size={100} />
      </div>
    );
  }

  const handleViewMore = () => {
    setVisible((prev) => prev + 4);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      getProducts();
    } else {
      getProductsByCategory(category);
    }
  };

  return (
    <>
      <section className="pb-6">
        <div className="flex gap-4 flex-wrap mt-10 items-center ">
          <button
            type="button"
            onClick={() => handleCategoryClick("All")}
            className={`px-4 ms-6 py-2 cursor-pointer ring-2 
                text-[#7B3C34] ring-[#d98c92] rounded-lg
                 transition-colors duration-200
                ${
                  activeCategory === "All"
                    ? "bg-[#D98C92] "
                    : "ring-[#D98C92]  hover:bg-[#D98C92]"
                }`}
          >
            All
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => handleCategoryClick(category)}
              className={`px-4 py-2 cursor-pointer ring-2 
                text-[#7B3C34] ring-[#d98c92] rounded-lg
                 transition-colors duration-200
                ${
                  activeCategory === category
                    ? "bg-[#D98C92] "
                    : "ring-[#D98C92]  hover:bg-[#D98C92]"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap mt-4">
          {products.slice(0, visible).map((product) => (
            <Card
              key={product.id}
              image={product.image}
              price={product.price}
              title={product.title}
              id={product.id}
            />
          ))}
        </div>

        <div className="flex justify-center items-center">
          {visible < products.length && (
            <button
              className="text-sm rounded-xl px-4 py-3 cursor-pointer bg-[#D98C92] text-white my-3 hover:bg-[#BE5C50] transition"
              type="button"
              onClick={handleViewMore}
            >
              View More
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductList;
