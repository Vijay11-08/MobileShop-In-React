const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

router.get("/payments", paymentController.getAllPayments);
router.get("/payments/:id", paymentController.getPaymentById);
router.post("/payments", paymentController.createPayment);
router.put("/payments/:id", paymentController.updatePayment);
router.delete("/payments/:id", paymentController.deletePayment);

module.exports = router;
