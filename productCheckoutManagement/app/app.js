var express = require("express");
var router = express.Router();

var orderRoutes = require("./routes/orderMain");

router.use("/order",orderRoutes)

module.exports = router;