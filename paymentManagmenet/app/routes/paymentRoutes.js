// const router = require("express").Router();
// const PaymentController = require("../controllers/paymentController");


// //route for add payment
// router.route("/add").post((req, res) => {
//     const response = PaymentController.createPaymentController(req.body, res);
// });



// module.exports = router;
module.exports = function (router) {
    var bodyParser = require('body-parser');
    var jsonParser = bodyParser.json();
  
    const paymentController = require("../controllers/paymentController");
  
    //route for add Product
    router.post('/add',
      jsonParser,
      paymentController.createPaymentController
    );
  
    // //route for get Product details
    // router.post('/get_one_product_details',
    //   jsonParser,
    //   productController.getOneProductDetailsController
    // );
  
    // //route for get Product details
    // router.get('/get_all_product_details',
    //   jsonParser,
    //   productController.getAllProductDetailsController
    // );
  
  }