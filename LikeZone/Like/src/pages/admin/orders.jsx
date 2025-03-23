import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components/UiComponents";
import { getOrders, deleteOrder } from "../../services/orderService";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const data = await getOrders();
    setOrders(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      await deleteOrder(id);
      fetchOrders();
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <h3 className="fw-bold mb-3">Order Management</h3>
        </div>
        <div className="col-md-3 d-flex justify-content-end">
          <Link to="/admin/orders/create" className="btn btn-primary">
            Add Order
          </Link>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <Card title="Orders">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>User ID</th>
                    <th>Total Price</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.user_id}</td>
                      <td>${order.total_price}</td>
                      <td>{order.status}</td>
                      <td>
                        <Link to={`/admin/orders/${order.id}`} className="btn btn-info btn-sm">
                          View
                        </Link>
                        <button
                          className="btn btn-danger btn-sm ms-2"
                          onClick={() => handleDelete(order.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Orders;
