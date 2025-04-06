import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AdminOrderItems = () => {
    const [orderItems, setOrderItems] = useState([]); // Ensure it's initialized as an array
    const [showModal, setShowModal] = useState(false);
    const [editItem, setEditItem] = useState(null);
    
    useEffect(() => {
        fetchOrderItems();
    }, []);

    const fetchOrderItems = async () => {
        try {
            const response = await axios.get("/api/order-items");
            console.log("API Response:", response.data); // Debugging API response
            if (Array.isArray(response.data)) {
                setOrderItems(response.data); // Ensure it's an array
            } else {
                setOrderItems([]); // Set as empty array if response is incorrect
                toast.error("Invalid response format for order items");
            }
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
        <div className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
            <h2 className="mb-4 text-2xl font-bold text-orange-600">Admin Order Items</h2>
            <div className="overflow-x-auto">
                <table className="w-full border border-collapse border-gray-300 shadow-lg">
                    <thead>
                        <tr className="text-white bg-orange-500">
                            <th className="px-4 py-2 border border-gray-300">ID</th>
                            <th className="px-4 py-2 border border-gray-300">Order ID</th>
                            <th className="px-4 py-2 border border-gray-300">Product ID</th>
                            <th className="px-4 py-2 border border-gray-300">Quantity</th>
                            <th className="px-4 py-2 border border-gray-300">Price</th>
                            <th className="px-4 py-2 border border-gray-300">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(orderItems) && orderItems.length > 0 ? (
                            orderItems.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-100">
                                    <td className="px-4 py-2 border border-gray-300">{item.id}</td>
                                    <td className="px-4 py-2 border border-gray-300">{item.order_id}</td>
                                    <td className="px-4 py-2 border border-gray-300">{item.product_id}</td>
                                    <td className="px-4 py-2 border border-gray-300">{item.quantity}</td>
                                    <td className="px-4 py-2 border border-gray-300">${item.price}</td>
                                    <td className="px-4 py-2 border border-gray-300">
                                        <button className="px-3 py-1 mr-2 text-white bg-yellow-500 rounded hover:bg-yellow-600" onClick={() => handleEdit(item)}>Edit</button>
                                        <button className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600" onClick={() => handleDelete(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="px-4 py-2 text-center border border-gray-300">
                                    No order items found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="p-6 bg-white rounded-lg shadow-lg w-96">
                        <div className="flex items-center justify-between pb-2 border-b">
                            <h3 className="text-lg font-bold">Edit Order Item</h3>
                            <button className="text-gray-600 hover:text-gray-800" onClick={() => setShowModal(false)}>✖</button>
                        </div>
                        <div className="mt-4">
                            <label className="block font-semibold text-gray-700">Quantity</label>
                            <input 
                                type="number" 
                                className="w-full p-2 mt-1 border border-gray-300 rounded" 
                                value={editItem?.quantity || ""}
                                onChange={(e) => setEditItem({ ...editItem, quantity: e.target.value })}
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block font-semibold text-gray-700">Price</label>
                            <input 
                                type="number" 
                                className="w-full p-2 mt-1 border border-gray-300 rounded" 
                                value={editItem?.price || ""}
                                onChange={(e) => setEditItem({ ...editItem, price: e.target.value })}
                            />
                        </div>
                        <div className="flex justify-end mt-4">
                            <button className="px-3 py-1 mr-2 text-white bg-gray-500 rounded hover:bg-gray-600" onClick={() => setShowModal(false)}>Cancel</button>
                            <button className="px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600" onClick={handleSave}>Save Changes</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminOrderItems;
