var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const orders = [
    {productName: "superman toy", price: 777},
    {productName: "catwoman toy", price: 35},
    {productName: "batman toy", price: 40}
  ]
  res.json({orders: orders})
});

module.exports = router;