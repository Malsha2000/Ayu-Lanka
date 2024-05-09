var express = require('express');
var router = express.Router();

require('./paymentRoutes')(router);

module.exports = router;