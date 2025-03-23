const API_URL = "http://localhost:5000/api/orders"; // Update this if your backend runs on a different port

// Fetch all orders
export const getOrders = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch orders");
        return await response.json();
    } catch (error) {
        console.error("Error fetching orders:", error);
        return [];
    }
};

// Fetch an order by ID
export const getOrderById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) throw new Error("Order not found");
        return await response.json();
    } catch (error) {
        console.error("Error fetching order:", error);
        return null;
    }
};

// Create a new order
export const createOrder = async (orderData) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(orderData),
        });

        if (!response.ok) throw new Error("Failed to create order");
        return await response.json();
    } catch (error) {
        console.error("Error creating order:", error);
        return null;
    }
};

// Update order status
export const updateOrderStatus = async (id, status) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status }),
        });

        if (!response.ok) throw new Error("Failed to update order status");
        return await response.json();
    } catch (error) {
        console.error("Error updating order:", error);
        return null;
    }
};

// Delete an order
export const deleteOrder = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) throw new Error("Failed to delete order");
        return await response.json();
    } catch (error) {
        console.error("Error deleting order:", error);
        return null;
    }
};
