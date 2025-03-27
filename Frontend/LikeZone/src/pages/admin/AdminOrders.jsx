import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button, Modal, Form } from "react-bootstrap";
import { toast } from "react-toastify";

const AdminOrders = () => {
    const [orders, setOrders] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editOrder, setEditOrder] = useState(null);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get("/api/orders");
            setOrders(response.data);
        } catch (error) {
            toast.error("Error fetching orders");
        }
    };

    const handleEdit = (order) => {
        setEditOrder(order);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this order?")) {
            try {
                await axios.delete(`/api/orders/${id}`);
                toast.success("Order deleted successfully");
                fetchOrders();
            } catch (error) {
                toast.error("Error deleting order");
            }
        }
    };

    const handleSave = async () => {
        try {
            await axios.put(`/api/orders/${editOrder.id}`, editOrder);
            toast.success("Order updated successfully");
            setShowModal(false);
            fetchOrders();
        } catch (error) {
            toast.error("Error updating order");
        }
    };

    return (
        <div className="container mt-4">
            <h2>Admin Orders</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User ID</th>
                        <th>Total Amount</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.user_id}</td>
                            <td>${order.total_amount}</td>
                            <td>{order.status}</td>
                            <td>
                                <Button variant="warning" onClick={() => handleEdit(order)}>Edit</Button>{" "}
                                <Button variant="danger" onClick={() => handleDelete(order.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Status</Form.Label>
                            <Form.Control
                                as="select"
                                value={editOrder?.status || ""}
                                onChange={(e) => setEditOrder({ ...editOrder, status: e.target.value })}
                            >
                                <option value="Pending">Pending</option>
                                <option value="Shipped">Shipped</option>
                                <option value="Delivered">Delivered</option>
                                <option value="Cancelled">Cancelled</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
                    <Button variant="primary" onClick={handleSave}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AdminOrders;
