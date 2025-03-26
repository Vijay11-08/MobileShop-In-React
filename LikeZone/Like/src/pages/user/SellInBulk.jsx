import React from "react";
// import "./repair.css";

const RepairHeader = () => (
  <header className="repair-header">
    <h1>Repair Your Device</h1>
    <p>Quick & Affordable Repair Services for Phones, Laptops, & More</p>
  </header>
);

const RepairInfo = () => (
  <div className="repair-info">
    <h2>Why Choose Us?</h2>
    <p>We offer fast, reliable, and affordable repairs for a wide range of electronic devices.</p>
    <ul>
      <li>✔ Certified Technicians</li>
      <li>✔ Fast Turnaround Time</li>
      <li>✔ High-Quality Parts</li>
      <li>✔ Warranty on Repairs</li>
    </ul>
    <button className="btn-repair">Get a Repair Quote</button>
  </div>
);

const RepairImage = () => (
  <div className="repair-image">
    <img src="repair-image.jpg" alt="Device Repair" />
  </div>
);

const RepairProcess = () => {
  const steps = [
    { img: "step1.png", title: "1. Contact Us", desc: "Describe the issue & get an estimate for repair." },
    { img: "step2.png", title: "2. Send Your Device", desc: "Ship or drop off your device at our repair center." },
    { img: "step3.png", title: "3. Quick Fix", desc: "Our experts repair your device with quality parts." },
    { img: "step4.png", title: "4. Get It Back", desc: "Receive your fully repaired device in no time." },
  ];

  return (
    <section className="repair-process">
      <h2>How It Works</h2>
      <div className="steps">
        {steps.map((step, index) => (
          <div className="step" key={index}>
            <img src={step.img} alt={step.title} />
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const RepairContainer = () => (
  <section className="repair-container">
    <RepairInfo />
    <RepairImage />
  </section>
);

const SellInBulk = () => (
  <div>
    <RepairHeader />
    <RepairContainer />
    <RepairProcess />
  </div>
);

export default SellInBulk;