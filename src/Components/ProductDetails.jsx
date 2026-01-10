import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch product
  const getProduct = async () => {
    try {
      const response = await axios.get(
        `https://basbosatoystoreapi.giize.com/api/products/${id}`
      );
      setProduct(response.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  // Show spinner while product is loading
  if (loading || !product) {
    return (
      <div className="flex justify-center items-center h-75">
        <ClipLoader color="#7B3C34" size={100} />
      </div>
    );
  }

  return (
    <>
      <title>{product.name}</title>
      <div className="max-w-5xl mx-auto px-4">
        {/* Card */}
        <div className="pt-20 rounded-xl p-6 flex flex-col md:flex-row gap-8">
          {/* Image */}
          <div className="bg-black/10 py-4 rounded-2xl flex justify-center items-center md:w-1/2">
            <img
              src={product.image_url}
              alt={product.name}
              className="w-80 h-80 object-contain"
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>

            {/* Category badge */}
            <span
              className="w-fit px-4 py-1 rounded-lg text-sm font-medium
    bg-[#D98C92] text-white capitalize"
            >
              {product.category_name}
            </span>

            <p className="text-2xl font-semibold text-[#7B3C34]">
              ${product.price}
            </p>

            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            <button
              onClick={() => {
                // 1. Get the existing cart or create a new one
                const cart = JSON.parse(localStorage.getItem("cart")) || [];

                // 2. Add the product to the cart
                cart.push(product);

                // 3. Save the updated cart back to localStorage
                localStorage.setItem("cart", JSON.stringify(cart));

                // 4. Show success message and navigate to cart page
                Swal.fire({
                  title: "Added To Cart Successfully",
                  icon: "success",
                  timer: 1100,
                  showConfirmButton: false,
                }).then(() => {
                  navigate("/cart");
                });
              }}
              className="mt-4 cursor-pointer w-fit px-6 py-3 
  bg-[#D98C92] text-white
  rounded-lg font-medium 
  hover:bg-[#BE5C50] transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
