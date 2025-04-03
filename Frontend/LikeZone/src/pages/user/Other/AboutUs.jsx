import React from "react";
import "../../../assets/Accessories.css"


const AboutUs = () => {
  return (
    <div className="flex flex-col items-center p-6">
      <div className="container max-w-3xl p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-3xl font-bold text-center">About Us</h2>
        <p className="mb-4 text-lg text-gray-700">
          Welcome to Like Zone Mobile Shop! We are dedicated to bringing you the
          latest mobile technology and accessories at competitive prices. With
          a focus on quality, reliability, and excellent customer service, we
          aim to make your shopping experience enjoyable and hassle-free.
        </p>
        <p className="mb-6 text-lg text-gray-700">
          Located in the heart of the city, Like Zone Mobile Shop is your
          one-stop destination for all your mobile needs. From smartphones to
          accessories, our wide range of products caters to diverse preferences
          and budgets. Visit us today to explore our collection and experience
          unparalleled service.
        </p>
        <div className="mt-6">
          <h5 className="mb-3 text-xl font-semibold text-center">Our Location</h5>
          <div className="flex justify-center">
            <iframe
              className="w-full h-64 rounded-lg shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1497.9133076861314!2d70.9084468!3d22.2273058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b3551aaaaaa3%3A0xdb55ec52f4a4c4f4!2sLike%20Zone%20Mobile%20Shop!5e0!3m2!1sen!2sin!4v1674857150042!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
   