import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img src="https://via.placeholder.com/150" className="card-img-top" alt="Profile" />
                        <div className="card-body">
                            <h5 className="card-title">John Doe</h5>
                            <p className="card-text">Email: john.doe@example.com</p>
                            <p className="card-text">Phone: (123) 456-7890</p>
                            <a href="#" className="btn btn-primary">Edit Profile</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h5>Profile Details</h5>
                        </div>
                        <div className="card-body">
                            <p><strong>Full Name:</strong> John Doe</p>
                            <p><strong>Email:</strong> john.doe@example.com</p>
                            <p><strong>Phone:</strong> (123) 456-7890</p>
                            <p><strong>Address:</strong> 123 Main St, Anytown, USA</p>
                            <p><strong>Bio:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;