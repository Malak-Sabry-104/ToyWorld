import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
import Footer from "../Components/Footer";
import Layout from "../Components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <section className="flex flex-col items-center 
        justify-center min-h-screen bg-[#F9F5F3] p-8">
        
        {/* Big 404 */}
        <h1 className="text-9xl font-extrabold text-[#7B3C34] animate-bounce">
          404
        </h1>

        {/* Message */}
        <p className="text-2xl md:text-3xl mt-6 text-[#7B3C34] text-center">
          Oops! The page you're looking for doesn't exist.
        </p>

        {/* Icon Illustration */}
        <div className="my-8 w-48 h-48 bg-[#D98C92] 
          rounded-full flex items-center justify-center shadow-lg">
          <FaExclamationTriangle className="text-white text-6xl" />
        </div>

        {/* Back Home Button */}
        <Link
          to="/"
          className="px-6 py-3 bg-[#D98C92]
            text-white font-semibold rounded-lg shadow 
            hover:bg-[#BE5C50] transition"
        >
          Go Back Home
        </Link>
      </section>
    </Layout>
  );
};

export default NotFound;
