const { response } = require("express");
const mongoose = require("mongoose");
let Payment = require('../models/payment')

module.exports.createPaymentService = async (requestBody) => {
    try {
        const userId = requestBody.userId;
        const cartId = requestBody.cartId;
        const amount = requestBody.amount;

        // Get current date
        const date = new Date();

        const newPayment = new Payment({
            userId,
            cartId,
            amount,
            date,
            status: 10,

        });
        let reponse = await newPayment.save();

        return {
            msg: "success",
            data: reponse,
        };

    } catch (err) {
        throw err;
    }
};