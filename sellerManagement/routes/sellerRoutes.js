var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const router = require("express").Router();
const SellerController = require("../controllers/sellerController");
const Seller = require("../models/seller");


router.post('/add',
  jsonParser,
  SellerController.createSellerController
)
//route for get one seller details
router.post('/get_seller',
  jsonParser,
  SellerController.getOneSellerController
)

module.exports = router;