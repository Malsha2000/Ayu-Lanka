var express = require("express");
var router = express.Router();

var paymentRoutes = require("./routes/paymentMain");

router.use("/payment",paymentRoutes)

module.exports = router;