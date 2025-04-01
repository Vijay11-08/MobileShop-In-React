import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/home.css";

function Home() {
  return (
    <>
    
     <div className="App">
      <header>
        <h1>Buying and Selling Phones Online Has Never Been So Easy</h1>
      </header>
      <section className="hero">
        <div className="buy-section">
          <h2>Buy</h2>
          <p>Certified Pre-Owned Devices</p>
          <button>Start Shopping</button>
        </div>
        <div className="sell-section">
          <h2>Sell</h2>
          <p>Trade In Your Device for Cash</p>
          <button>Start Selling</button>
        </div>
      </section>
      <section className="sell-info">
        <h2>Sell Your Phone for Cash <span>In Minutes</span></h2>
        <p>Selling electronics online with SmartphonesPLUS is easy and safe...</p>
      </section>
      <aside className="device-filter">
        <h3>Sell by Device Type:</h3>
        <ul>
          <li>Sell iPhone</li>
          <li>Sell Samsung</li>
          <li>Sell Android</li>
          <li>Sell MacBook</li>
          <li>Sell Smartwatch</li>
          <li>Sell iPad / Tablet</li>
        </ul>
      </aside>
      <section className="trade-in">
        <h2>Most Popular Trade Ins</h2>
        <div className="device-list">
          <div className="device">
            <h3>iPhone 12 Pro Max</h3>
            <p>Up to $280</p>
            <button>Start Selling</button>
          </div>
          <div className="device">
            <h3>iPhone 11</h3>
            <p>Up to $137</p>
            <button>Start Selling</button>
          </div>
          <div className="device">
            <h3>iPhone 6s</h3>
            <p>Up to $4</p>
            <button>Start Selling</button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
export default Home;