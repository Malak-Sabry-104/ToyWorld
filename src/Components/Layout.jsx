import React, { useState } from "react";
import Aside from "./Aside";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [asideOpen, setAsideOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#DFC5C4]">
      <Aside isOpen={asideOpen} />

      <button
        type="button"
        onClick={() => setAsideOpen(!asideOpen)}
        className={`fixed top-2 z-200
   p-3 cursor-pointer text-[#c8888c] text-3xl transition-transform 
   duration-500 ease-in-out ${asideOpen ? "translate-x-50" : "translate-x-2"} `}
      >
        {" "}
        {asideOpen ? <IoMdClose /> : <GiHamburgerMenu />}{" "}
      </button>

      <main className="relative z-10">{children}</main>
  <Footer/>
    </div>
  );
};

export default Layout;
