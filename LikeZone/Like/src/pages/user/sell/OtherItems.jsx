import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SellElectronics = () => {
  const electronics = [
    "Sell iPod",
    "Sell AirPods",
    "Sell Apple Pencil",
    "Sell Apple HomePod",
    "Sell Apple TV",
    "Sell GoPro",
    "Insta360",
    "Sell Game Console",
    "Meta VR",
    "Apple Magic Keyboard",
    "Sell Smart Ring"
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center">Sell Other Electronics Online for Cash</h1>
      <p className="text-center">Select your Other Item to sell</p>
      <p className="text-center">
        <a href="#">Can’t find your device? Click here</a>
      </p>
      
      <div className="row text-center">
        {electronics.map((item, index) => (
          <div className="col-md-3 mt-3" key={index}>
            <button className="btn btn-primary w-100">{item}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellElectronics;