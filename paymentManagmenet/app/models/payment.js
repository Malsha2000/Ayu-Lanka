const { number } = require("joi");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const payment = new Schema({

    cartId: {
        type: Schema.Types.ObjectId,
    },
    amount: {
        type: Number
    },
    userId: {
        type: Schema.Types.ObjectId,
    },
    date: {
        type: Date
    },
    status: {
        type: Number // 0 -> pending , 10 -> completed, 20 -> payment issue
    }

})

const Payment = mongoose.model("Payment", payment);
module.exports = Payment;