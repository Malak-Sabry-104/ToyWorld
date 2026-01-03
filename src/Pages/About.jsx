import React from "react";
import Layout from "../Components/Layout";

const About = () => {
  return (
    <Layout>
      <section className="  h-[90vh] px-4 py-16">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-[#7B3C34] mb-8">
          About Us
        </h1>
        <div className=" flex justify-center ">
          {/* Intro paragraph */}
          <p className="text-center text-gray-700 mb-3 w-[50%] ">
            Welcome to our store! We are dedicated to providing high-quality
            products and an amazing shopping experience. Our mission is to make
            your life easier and more enjoyable with the best selection of
            items.
          </p>
        </div>

        {/* Image + Info */}
        <div className="  flex flex-col items-center gap-8">
          {/* Info points */}
          <div className="md:w-1/2 ">
            <h2 className="text-2xl my-4 font-semibold text-[#7B3C34]">
              Why Choose Us
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>High-quality products curated for you</li>
              <li>Fast and reliable shipping</li>
              <li>Excellent customer support</li>
              <li>Secure payment methods</li>
            </ul>
          </div>
        </div>

        {/* Closing paragraph */}
        <p className="text-center text-gray-600 mt-12">
          We value our customers and always strive to improve. Thank you for
          choosing us as your go-to store!
        </p>
      </section>
    </Layout>
  );
};

export default About;
