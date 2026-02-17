const express = require("express");
const router= express.Router();
const paymentController= require("../controllers/paymentController");
// console.log(paymentController);
console.log("Payment Controller:", paymentController);
router.post("/", paymentController.createPayment);
router.get("/", paymentController.getPayments);
module.exports= router;