const { number } = require("joi");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const delivery = new Schema({

    orderID: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    deliveryAddress: {
        street: {
            type: String,
            maxlength: 100
        },
        city: {
            type: String,
            maxlength: 100
        },
        province: {
            type: String,
            maxlength: 100
        },
        postalCode: {
            type: String,
            maxlength: 100
        },
        country: {
            type: String,
            maxlength: 100
        },
        phone: {
            type: String,
            maxlength: 20
        },
        email: {
            type: String,
            maxlength: 100
        }
    },
    dispatchedDate: {
        type: Date
    },
    status: {
        type: Number,
        default: 0 // pending => 0, completed => 10
    }
})

const Delivery = mongoose.model("Delivery", delivery);
module.exports = Delivery;