var express = require("express");
var router = express.Router();

var userRoutes = require("./routes/userMain");

router.use("/user",userRoutes)

module.exports = router;