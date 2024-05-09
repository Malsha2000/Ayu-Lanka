const { number } = require("joi");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const order = new Schema({

    userId: {
        type: Schema.Types.ObjectId
    },
    cartId: {
        type: Schema.Types.ObjectId
    },
    paymentID: {
        type: Schema.Types.ObjectId
    },
    isOnlinePayment: {
        type: Boolean,
        default: false
    },
    orderDate: {
        type: Date
    },
    total: {
        type: Number,
        min: 0
    },
})

const Order = mongoose.model("CheckoutOrder", order);
module.exports = Order;