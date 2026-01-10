import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" mt-4 bg-white/40 rounded-2xl text-white py-4">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Text */}
        <p className="text-center text-[#7B3C34] md:text-left">
          &copy; {new Date().getFullYear()} ToyWorld. All rights reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          <Link
            to="#"
            className="p-3 rounded-lg bg-[#D98C92]/60 hover:bg-[#BE5C50]/50 transition-colors"
          >
            <FaFacebookF />
          </Link>
          <Link
            to="#"
            className="p-3 rounded-lg bg-[#D98C92]/60 hover:bg-[#BE5C50]/50 transition-colors"
          >
            <FaTwitter />
          </Link>
          <Link
            to="#"
            className="p-3 rounded-lg bg-[#D98C92]/60 hover:bg-[#BE5C50]/50 transition-colors"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
