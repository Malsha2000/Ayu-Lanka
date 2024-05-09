// const { response } = require("express");
// const PaymentService = require("../services/paymentService");

// //controller for add Order
// module.exports.createPaymentController = async (req, res) => {
//     try {
//         let serviceResponse = await PaymentService.createPaymentService(req);
//         if ((serviceResponse.msg = "success")) {
//             // return serviceResponse
//             return res.status(200).send({ message: "New Order is added" });

//         } else {
//             return res.status(300).send({ message: "Cannot add new order !" });
//         }
//     } catch (err) {
//         return res
//             .status(300)
//             .send({ message: "Cannot add new order !", err: err.message });
//     }
// }


const PaymentService = require("../services/paymentService");
const { ResponseStatusCodes } = require('../util/constants/responseStatusCodes');
const { ResponseCommonMessages } = require('../util/constants/responseCommonMessages');
const Logger = require('../util/logging/logger');

//controller for add Product
module.exports.createPaymentController = async (req, res) => {
    try {
		const paymentResponse = await PaymentService.createPaymentService(req.body);
		return res.status(200).json({ success: true, data: paymentResponse.data, showMessage: false });
	} catch (err) {
		Logger.log('createPaymentService', null, null,err);
		return res.status(err.status || ResponseStatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, msg: err.msg || ResponseCommonMessages.INTERNAL_SERVER_ERROR });
	}
   
};