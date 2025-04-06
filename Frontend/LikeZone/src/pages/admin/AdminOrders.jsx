import React, { useEffect, useState } from "react";
import axios from "axios";
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
            console.log("API Response:", response.data); // Debugging API response

            // Ensure the response is an array
            setOrders(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            toast.error("Error fetching orders");
            setOrders([]); // Prevent map() error by setting an empty array
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
        <div className="container p-6 mx-auto">
            <h2 className="mb-4 text-2xl font-bold text-orange-600">Admin Orders</h2>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-md">
                    <thead>
                        <tr className="text-white bg-orange-500">
                            <th className="px-6 py-3 text-left">ID</th>
                            <th className="px-6 py-3 text-left">User ID</th>
                            <th className="px-6 py-3 text-left">Total Amount</th>
                            <th className="px-6 py-3 text-left">Status</th>
                            <th className="px-6 py-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length > 0 ? (
                            orders.map((order) => (
                                <tr key={order.id} className="border-b hover:bg-orange-50">
                                    <td className="px-6 py-3">{order.id}</td>
                                    <td className="px-6 py-3">{order.user_id}</td>
                                    <td className="px-6 py-3">${order.total_amount}</td>
                                    <td className="px-6 py-3">{order.status}</td>
                                    <td className="px-6 py-3 text-center">
                                        <button 
                                            className="px-4 py-1 mr-2 text-white bg-orange-400 rounded hover:bg-orange-500"
                                            onClick={() => handleEdit(order)}
                                        >
                                            Edit
                                        </button>
                                        <button 
                                            className="px-4 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                                            onClick={() => handleDelete(order.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="px-6 py-3 text-center text-gray-500">
                                    No orders found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal for Editing Order */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="w-1/3 p-6 bg-white rounded-lg shadow-lg">
                        <h2 className="mb-4 text-xl font-bold text-orange-600">Edit Order</h2>

                        <label className="block font-medium text-gray-700">Status</label>
                        <select
                            className="w-full p-2 mb-4 border rounded-md"
                            value={editOrder?.status || ""}
                            onChange={(e) => setEditOrder({ ...editOrder, status: e.target.value })}
                        >
                            <option value="Pending">Pending</option>
                            <option value="Shipped">Shipped</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Cancelled">Cancelled</option>
                        </select>

                        <div className="flex justify-end">
                            <button 
                                className="px-4 py-2 mr-2 text-white bg-gray-400 rounded hover:bg-gray-500"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                            <button 
                                className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600"
                                onClick={handleSave}
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminOrders;
