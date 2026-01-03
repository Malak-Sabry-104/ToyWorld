import { Link } from "react-router-dom";

const Aside = ({ isOpen }) => {
  return (
    <aside
      className={`
        fixed top-0 left-0 h-screen w-64 bg-white/40 backdrop-blur-md rounded-3xl pt-6 pb-6 
        transform transition-transform duration-300 z-100
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <Link
        to="/"
        className="px-6 mt-12 magic-font text-[#9C7275] uppercase text-4xl font-bold mb-9 block"
      >
        ToyWorld
      </Link>
      <ul className="flex flex-col gap-6 text-2xl text-[#9C7275]">
        <li className="p-2 rounded px-6 hover:bg-[#9C7275] hover:text-white transition-colors duration-200">
          <Link to="/">Home</Link>
        </li>
        <li className="p-2 rounded px-6 hover:bg-[#9C7275] hover:text-white transition-colors duration-200">
          <Link to="/cart">Cart</Link>
        </li>
        <li className="p-2 rounded px-6 hover:bg-[#9C7275] hover:text-white transition-colors duration-200">
          <Link to="/about">About</Link>
        </li>
        <li className="p-2 rounded px-6 hover:bg-[#9C7275] hover:text-white transition-colors duration-200">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
