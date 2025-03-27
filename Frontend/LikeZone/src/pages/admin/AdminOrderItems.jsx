import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button, Modal, Form } from "react-bootstrap";
import { toast } from "react-toastify";

const AdminOrderItems = () => {
    const [orderItems, setOrderItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editItem, setEditItem] = useState(null);
    
    useEffect(() => {
        fetchOrderItems();
    }, []);

    const fetchOrderItems = async () => {
        try {
            const response = await axios.get("/api/order-items");
            setOrderItems(response.data);
        } catch (error) {
            toast.error("Error fetching order items");
        }
    };

    const handleEdit = (item) => {
        setEditItem(item);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            try {
                await axios.delete(`/api/order-items/${id}`);
                toast.success("Order item deleted successfully");
                fetchOrderItems();
            } catch (error) {
                toast.error("Error deleting order item");
            }
        }
    };

    const handleSave = async () => {
        try {
            await axios.put(`/api/order-items/${editItem.id}`, editItem);
            toast.success("Order item updated successfully");
            setShowModal(false);
            fetchOrderItems();
        } catch (error) {
            toast.error("Error updating order item");
        }
    };

    return (
        <div className="container mt-4">
            <h2>Admin Order Items</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Order ID</th>
                        <th>Product ID</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orderItems.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.order_id}</td>
                            <td>{item.product_id}</td>
                            <td>{item.quantity}</td>
                            <td>${item.price}</td>
                            <td>
                                <Button variant="warning" onClick={() => handleEdit(item)}>Edit</Button>{" "}
                                <Button variant="danger" onClick={() => handleDelete(item.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Order Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                                type="number"
                                value={editItem?.quantity || ""}
                                onChange={(e) => setEditItem({ ...editItem, quantity: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                value={editItem?.price || ""}
                                onChange={(e) => setEditItem({ ...editItem, price: e.target.value })}
                            />
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

export default AdminOrderItems;