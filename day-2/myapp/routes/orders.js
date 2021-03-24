const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const orders = [
    {productName: "superman toy", price: 777},
    {productName: "catwoman toy", price: 35},
    {productName: "batman toy", price: 40}
  ]
  res.json({orders: orders})
});


// Assignment
// Create api for orders 

const orders = [
    {
      id: 1,
      productName: "Reebok shoes",
      price: 200,
      color: "black",
      quantity: 200
    },
    {
      id: 2,
      productName: "sports t shirt",
      price: 100,
      color: "blue",
      quantity: 100
    }
  ];
  // single resource
  // - get api to get one order by id
  // - put api to edit one order by id
  // - delete apit to delete one order by id
  // - post api to create a new order
  
  // All resources
  // - get api to fetch all the orders
  // - put api to edit all the orders
  // - delete api to delete all orders 
  
module.exports = router;