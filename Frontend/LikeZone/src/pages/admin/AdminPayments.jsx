import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminPayments = () => {
    const [payments, setPayments] = useState([]);
    const [editPayment, setEditPayment] = useState(null);

    // Fetch all payments
    const fetchPayments = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/payments");
            setPayments(res.data);
        } catch (err) {
            toast.error("Failed to load payments");
        }
    };

    useEffect(() => {
        fetchPayments();
    }, []);

    // Handle edit input change
    const handleEditChange = (e) => {
        setEditPayment({ ...editPayment, [e.target.name]: e.target.value });
    };

    // Update payment
    const handleUpdatePayment = async () => {
        try {
            const res = await axios.put(`http://localhost:5000/api/payments/${editPayment.id}`, editPayment);
            setPayments(payments.map((p) => (p.id === editPayment.id ? res.data : p)));
            setEditPayment(null);
            toast.success("Payment updated successfully");
        } catch (err) {
            toast.error("Failed to update payment");
        }
    };

    // Delete payment
    const handleDeletePayment = async (id) => {
        if (!window.confirm("Are you sure you want to delete this payment?")) return;

        try {
            await axios.delete(`http://localhost:5000/api/payments/${id}`);
            setPayments(payments.filter((p) => p.id !== id));
            toast.success("Payment deleted successfully");
        } catch (err) {
            toast.error("Failed to delete payment");
        }
    };

    return (
        <div className="container">
            <h2>Admin - Manage Payments</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User ID</th>
                        <th>Order ID</th>
                        <th>Amount</th>
                        <th>Method</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment) => (
                        <tr key={payment.id}>
                            {editPayment?.id === payment.id ? (
                                <>
                                    <td>{payment.id}</td>
                                    <td>{payment.user_id}</td>
                                    <td>{payment.order_id}</td>
                                    <td><input type="text" name="amount" value={editPayment.amount} onChange={handleEditChange} /></td>
                                    <td><input type="text" name="payment_method" value={editPayment.payment_method} onChange={handleEditChange} /></td>
                                    <td><input type="text" name="payment_status" value={editPayment.payment_status} onChange={handleEditChange} /></td>
                                    <td>
                                        <button onClick={handleUpdatePayment}>Save</button>
                                        <button onClick={() => setEditPayment(null)}>Cancel</button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td>{payment.id}</td>
                                    <td>{payment.user_id}</td>
                                    <td>{payment.order_id}</td>
                                    <td>{payment.amount}</td>
                                    <td>{payment.payment_method}</td>
                                    <td>{payment.payment_status}</td>
                                    <td>
                                        <button onClick={() => setEditPayment(payment)}>Edit</button>
                                        <button onClick={() => handleDeletePayment(payment.id)}>Delete</button>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPayments;
