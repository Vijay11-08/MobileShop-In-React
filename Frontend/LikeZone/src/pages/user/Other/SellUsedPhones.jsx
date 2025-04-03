import React, { useState } from "react";
import "../../../assets/SellUsedPhones.css"


const SellUsedPhones = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const devices = [
        { name: "Sell iPhone", image: "sa52.jpg" },
        { name: "Sell Realme", image: "sa52.jpg" },
        { name: "Sell Oppo", image: "sa52.jpg" },
        { name: "Sell Samsung", image: "sa52.jpg" },
        { name: "Sell Android", image: "sa52.jpg" },
    ];

    const filteredDevices = devices.filter(device => 
        device.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container my-5">
            <h2 className="text-center">Sell Used Phones Online for Cash!</h2>
            <p className="text-center">Find the device you’d like to trade in and get instant cash offers.</p>

            <div className="mx-auto mb-4 input-group" style={{ maxWidth: "500px" }}>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search devices..." 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                />
                <button className="btn btn-primary">Search</button>
            </div>

            <div className="gap-3 row justify-content-center">
                {filteredDevices.map((device, index) => (
                    <div key={index} className="col-md-4">
                        <div className="p-3 text-center bg-white rounded shadow-sm category-card">
                            <img src={device.image} alt={device.name} className="rounded img-fluid" />
                            <h5 className="mt-2">{device.name}</h5>
                            <a href="#" className="btn btn-primary">Sell Now</a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4 text-center">
                <p>Can’t find your device? <a href="#">Click here</a></p>
            </div>
        </div>
    );
};

export default SellUsedPhones;
