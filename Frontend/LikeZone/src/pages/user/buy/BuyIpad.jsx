import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BuyIpad = () => {
  const [ipads, setIpads] = useState([]);
  
  useEffect(() => {
    axios.get('/api/products?category=ipad')
      .then(response => setIpads(response.data))
      .catch(error => console.error('Error fetching iPads:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Buy iPad</h2>
      <div className="row">
        {ipads.map(ipad => (
          <div key={ipad.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={ipad.image_url} className="card-img-top" alt={ipad.name} />
              <div className="card-body">
                <h5 className="card-title">{ipad.name}</h5>
                <p className="card-text">{ipad.description}</p>
                <p className="card-text"><strong>Price:</strong> ${ipad.price}</p>
                <Link to={`/product/${ipad.id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyIpad;
