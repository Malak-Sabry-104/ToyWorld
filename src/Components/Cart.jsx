import { useEffect, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  if (cartItems.length === 0) {
    return <h1 className="text-xl text-center pt-11 mb-3">Cart is empty.</h1>;
  }

  return (
    <div className="max-w-5xl mx-auto pt-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex gap-6 mb-6 p-4 border rounded-lg items-center"
        >
          <img
            src={item.image_url}
            alt={item.name}
            className="w-24 h-24 object-contain"
          />

          <div className="flex-1">
            <h2 className="font-semibold">{item.name}</h2>
            <p className="text-[#7B3C34] font-bold">${item.price}</p>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="px-4 py-2 text-sm bg-red-400 text-white
             rounded-lg cursor-pointer hover:bg-red-400 transition"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
