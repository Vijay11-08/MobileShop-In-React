import React from "react";
import "../../../assets/Accessories.css"


const ContactUs = () => {
  return (
    <div className="flex flex-col items-center p-6">
      <div className="container max-w-3xl p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-3xl font-bold text-center">Contact Us</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h5 className="mb-3 text-xl font-semibold">Get in Touch</h5>
            <p className="text-gray-700"><strong>Phone:</strong> +91 9904640764</p>
            <p className="text-gray-700"><strong>Phone:</strong> +91 9714520147</p>
            <p className="text-gray-700"><strong>Email:</strong> likezonemobileshop@gmail.com</p>
            <p className="text-gray-700"><strong>Address:</strong> Like Zone Mobile Shop, Tramba, Rajkot, Gujarat, India</p>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="mb-3 text-xl font-semibold">Find Us Here</h5>
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

export default ContactUs;
