import React, { useState } from "react";
import "../../../assets/Accessories.css"


const FAQs = () => {
    const [openSection, setOpenSection] = useState("sell");

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? "" : section);
    };

    return (
        <div className="container py-5">
            <h1 className="mb-4 text-center">Frequently Asked Questions</h1>

            <div className="space-y-4">
                {/* Sell FAQs */}
                <div className="overflow-hidden border rounded-lg">
                    <button 
                        className="w-full p-4 font-semibold text-left text-white bg-blue-500"
                        onClick={() => toggleSection("sell")}
                    >
                        Sell FAQs
                    </button>
                    {openSection === "sell" && (
                        <div className="p-4 bg-gray-100">
                            <ul className="pl-5 list-disc">
                                <li><strong>How does the selling process work?</strong> <br />Select your device, get a quote, ship it for free, and receive payment.</li>
                                <li><strong>How do I prepare and ship my device?</strong> <br />Follow our shipping guide to securely package your device.</li>
                                <li><strong>How long does it take to get paid?</strong> <br />Payment is sent after we receive and inspect your device.</li>
                                <li><strong>Can I sell broken or water-damaged devices?</strong> <br />Yes, we accept broken and water-damaged devices.</li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Repair FAQs */}
                <div className="overflow-hidden border rounded-lg">
                    <button 
                        className="w-full p-4 font-semibold text-left text-white bg-blue-500"
                        onClick={() => toggleSection("repair")}
                    >
                        Repair FAQs
                    </button>
                    {openSection === "repair" && (
                        <div className="p-4 bg-gray-100">
                            <ul className="pl-5 list-disc">
                                <li><strong>How do I get my device repaired?</strong> <br />Visit our Repair page, select your device, choose repair options, and book an appointment.</li>
                                <li><strong>How much will it cost?</strong> <br />Pricing depends on the repair service selected.</li>
                                <li><strong>How long does a repair take?</strong> <br />Most repairs are completed within an hour.</li>
                                <li><strong>Can water-damaged devices be repaired?</strong> <br />We do our best, but success depends on the damage extent.</li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Buy FAQs */}
                <div className="overflow-hidden border rounded-lg">
                    <button 
                        className="w-full p-4 font-semibold text-left text-white bg-blue-500"
                        onClick={() => toggleSection("buy")}
                    >
                        Buy FAQs
                    </button>
                    {openSection === "buy" && (
                        <div className="p-4 bg-gray-100">
                            <ul className="pl-5 list-disc">
                                <li><strong>Why should I trust SmartphonesPLUS?</strong> <br />We provide fully tested, certified refurbished devices with a warranty.</li>
                                <li><strong>Are the devices refurbished?</strong> <br />Yes, every device is professionally inspected.</li>
                                <li><strong>Is shipping free?</strong> <br />Yes! Standard shipping is always free.</li>
                                <li><strong>Do you offer warranties?</strong> <br />Yes, all purchases come with a worry-free warranty.</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-5 text-center">
                <h3>Still have questions?</h3>
                <p>Contact us via email or phone, and we’ll be happy to assist you.</p>
                <h4>Get in Touch</h4>
                <p><strong>Phone 1:</strong> +91 9904640764</p>
                <p><strong>Phone 2:</strong> +91 9714520147</p>
                <p><strong>Email:</strong> likezonemobileshop@gmail.com</p>
                <p><strong>Address:</strong> Like Zone Mobile Shop, Tramba, Rajkot, Gujarat, India</p>
            </div>
        </div>
    );
};

export default FAQs;
