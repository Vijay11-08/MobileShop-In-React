import { useState } from 'react';

const dasebord = () => {
 

  return (
    <>
      <div className="sidebar">
        <h3>kaiadmin</h3>
        <a href="#">Dashboard</a>
        <a href="#">Categories</a>
        <a href="#">Products</a>
        <a href="#">Users</a>
        <a href="#">Offers</a>
        <a href="#">Orders</a>
      </div>
      <div className="main-content">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Category Management</h2>
          <button className="btn btn-primary">Add Category</button>
        </div>
        <table className="table mt-3">
          <thead>
            <tr>
              <th>Category Id</th>
              <th>Category Name</th>
              <th>Parent Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Electronics</td>
              <td>-</td>
              <td className="table-actions">
                <i className="fas fa-edit text-primary"></i>
                <i className="fas fa-times text-danger"></i>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Laptops</td>
              <td>Electronics</td>
              <td className="table-actions">
                <i className="fas fa-edit text-primary"></i>
                <i className="fas fa-times text-danger"></i>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Smartphones</td>
              <td>Electronics</td>
              <td className="table-actions">
                <i className="fas fa-edit text-primary"></i>
                <i className="fas fa-times text-danger"></i>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>Home Appliances</td>
              <td>-</td>
              <td className="table-actions">
                <i className="fas fa-edit text-primary"></i>
                <i className="fas fa-times text-danger"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default dasebord;
