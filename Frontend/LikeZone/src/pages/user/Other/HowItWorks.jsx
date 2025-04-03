import React from 'react';
import "../../../assets/Accessories.css"


const HowItWorks = () => {
  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">How It Works</h1>

      {/* Selling Section */}
      <section className="mb-5">
        <h2 className="text-primary">How to Sell Devices</h2>
        <div className="p-4 shadow-sm card">
          <h4>1. Select Your Device</h4>
          <p>Sell phones, tablets, smartwatches, laptops, game consoles, and more.</p>
          <h4>2. Get an Instant Offer</h4>
          <p>Tell us some info about your device, and we'll show your trade-in value instantly.</p>
          <h4>3. Ship It For Free</h4>
          <p>We provide a free prepaid shipping label. Need materials? Select the option at checkout.</p>
          <h4>4. Get Paid!</h4>
          <p>Once we receive and inspect your device, get paid via PayPal, check, Venmo, bank transfer, gift card, or prepaid card.</p>
          <a href="/Sell" className="btn btn-primary">Start Selling</a>
        </div>
      </section>

      {/* Repair Section */}
      <section className="mb-5">
        <h2 className="text-warning">How to Repair Devices</h2>
        <div className="p-4 shadow-sm card">
          <h4>1. Select Your Device</h4>
          <p>Start a repair by selecting the device (iPhone, Samsung, Android, iPad) that needs fixing.</p>
          <h4>2. Select Repair Options</h4>
          <p>Choose the repair services needed. You can select multiple options.</p>
          <h4>3. Book an Appointment</h4>
          <p>Pick a convenient time, enter important details, and confirm your appointment.</p>
          <h4>4. We'll Get It Fixed!</h4>
          <p>Visit us at your appointment, and we’ll notify you once the repair is complete—most repairs take under an hour.</p>
          <a href="/Repair" className="text-white btn btn-warning">Start A Repair</a>
        </div>
      </section>

      {/* Buying Section */}
      <section className="mb-5">
        <h2 className="text-success">How to Buy Certified Devices</h2>
        <div className="p-4 shadow-sm card">
          <h4>1. Shop Thousands of Certified Refurbished Devices</h4>
          <p>Browse a range of iPhones, Samsung Galaxy, Google Pixel, iPads, MacBooks, and accessories.</p>
          <h4>2. Quality Assurance</h4>
          <p>Every device undergoes a 30+ point inspection to ensure functionality and cosmetic quality.</p>
          <h4>3. Receive Your Device With Free Shipping!</h4>
          <p>Enjoy free shipping on every order. We’ll provide updates throughout the process.</p>
          <a href="/Buy" className="btn btn-success">Start Shopping</a>
        </div>
      </section>

      {/* Expectations Section */}
      <section className="mb-5">
        <h2 className="text-center">What to Expect from SmartphonesPLUS</h2>
        <div className="text-center row">
          <div className="col-md-4">
            <h4>⭐ 5-Star Experience</h4>
          </div>
          <div className="col-md-4">
            <h4>💰 High Payouts for Your Tech</h4>
          </div>
          <div className="col-md-4">
            <h4>🌍 Eco-Friendly – 100% of Devices are Reused or Recycled</h4>
          </div>
          <div className="col-md-4">
            <h4>🔒 Risk-Free Selling</h4>
          </div>
          <div className="col-md-4">
            <h4>📞 Great Customer Service</h4>
          </div>
          <div className="col-md-4">
            <h4>🛡 Device Data Is Fully Erased</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
