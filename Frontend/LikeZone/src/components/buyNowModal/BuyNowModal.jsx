/* eslint-disable react/prop-types */
import {
    Button,
    Dialog,
    DialogBody,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction, totalPrice }) => { // Accept price as a prop
    const [open, setOpen] = useState(false);
    const [paymentLoading, setPaymentLoading] = useState(false);

    const handleOpen = () => setOpen(!open);

    // Razorpay script loader
    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    const handleRazorpayPayment = async () => {
        setPaymentLoading(true);

        const res = await loadRazorpayScript();

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        const amountInPaise = totalPrice * 100; // Convert total price to paise

        const options = {
            key: "rzp_test_x8tV5oSUixLmbV", // Replace with your Razorpay test key
            amount: amountInPaise, // amount in paise
            currency: "INR",
            name: "LikeZone",
            description: "Test Transaction",
            handler: function (response) {
                alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
                buyNowFunction();
                handleOpen();
            },
            prefill: {
                name: addressInfo.name,
                email: "test@example.com", // Optional
                contact: addressInfo.mobileNumber,
            },
            notes: {
                address: addressInfo.address,
            },
            theme: {
                color: "#f472b6", // Tailwind pink-400
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
        setPaymentLoading(false);
    };

    return (
        <>
            <Button
                type="button"
                onClick={handleOpen}
                className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 hover:border-pink-500 hover:text-pink-700 hover:bg-pink-100 rounded-xl"
            >
                Buy now
            </Button>

            <Dialog open={open} handler={handleOpen} className="bg-pink-50">
                <DialogBody>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="name"
                            value={addressInfo.name}
                            onChange={(e) =>
                                setAddressInfo({ ...addressInfo, name: e.target.value })
                            }
                            placeholder="Enter your name"
                            className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300"
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            name="address"
                            value={addressInfo.address}
                            onChange={(e) =>
                                setAddressInfo({ ...addressInfo, address: e.target.value })
                            }
                            placeholder="Enter your address"
                            className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300"
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="number"
                            name="pincode"
                            value={addressInfo.pincode}
                            onChange={(e) =>
                                setAddressInfo({ ...addressInfo, pincode: e.target.value })
                            }
                            placeholder="Enter your pincode"
                            className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300"
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            name="mobileNumber"
                            value={addressInfo.mobileNumber}
                            onChange={(e) =>
                                setAddressInfo({ ...addressInfo, mobileNumber: e.target.value })
                            }
                            placeholder="Enter your mobile number"
                            className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300"
                        />
                    </div>

                    <div>
                        <Button
                            type="button"
                            onClick={handleRazorpayPayment}
                            disabled={paymentLoading}
                            className="w-full px-4 py-3 text-center text-white bg-pink-600 hover:bg-pink-700 rounded-lg"
                        >
                            {paymentLoading ? "Processing..." : `Pay ₹${totalPrice}`}
                        </Button>
                    </div>
                </DialogBody>
            </Dialog>
        </>
    );
};

export default BuyNowModal;
