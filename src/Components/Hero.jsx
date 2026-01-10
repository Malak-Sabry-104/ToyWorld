import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <section
        className="ps-7 md:ps-20 md:pt-10   section-bg flex items-start gap-10 overflow-hidden"
        style={{ height: "100vh" }}
      >
        <div className="">
          <h1
            className="magic-font text-[#443C34] 
          leading-[1.2] font-bold md:w-125 md:text-7xl text-5xl w-[70%]   mt-30"
          >
            Cute
            <span className="text-[#BE5C50]">Toys</span> for Cute Kids
          </h1>
          <p className="italic  font-bold text-[#9C7275] mt-4 w-87.5">
            but all kinds of intellecual games.toys.puzzles in our online store
            and give your child the pleasure of love & entertainment.
          </p>
          <button
            onClick={() => navigate("/cart")}
            className="bg-[#D37673]  text-white px-6 py-2  mt-7  rounded-full font-semibold shadow-lg
    cursor-pointer transition duration-300 ease-in-out
    hover:bg-[#c46764] hover:shadow-xl active:scale-95 focus:outline-none  focus:ring-2
    focus:ring-[#D37673]/60"
          >
            Order Now
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
