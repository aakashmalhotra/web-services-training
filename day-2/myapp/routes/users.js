const express = require('express');
const router = express.Router();

let users = [
  {name: "superman", age: 79},
  {name: "catwoman", age: 33},
  {name: "batman", age: 40}
]
// users = []; // cannot do this
// users[0].name = "something else" // allowed

// const age =20;
// age = 25; // not allowed

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({users: users})
});

router.post('/', function(req,res){
  users.push(req.body);
  // console.log(req.body);
  res.json({users: users});
});

router.put('/', function(req,res){  
  // Way 1 - Change const to let
  users = req.body.users;
  res.json({users: users})

  // Way 2 
  // users.length = 0 ;
  // req.body.users.forEach(user => {
  //   users.push(user);
  // });
  // res.json({users: users});
})

router.delete('/', function(req, res) {
  users = [];
  res.json({users: users})
})

// users/superman or users/spiderman
router.delete('/:superHeroName', function(req, res) {

  console.log(req.params);
  // Finding the index
  const foundIndex  = users.findIndex( user => user.name === req.params.superHeroName);
  
  // Check if the element was found
  if(foundIndex >= 0){
    // Delete the element at the found index position
    users.splice(foundIndex,1);
    // return rsponse 
    res.json({users: users});
  }
  else {
    // Respond the user was not found if index is less than 0
    res.json({resp: "user not found"});
  }
  
})

// In-class assignment

// Write an api to fetch one specific user by name - get api



// Write an api to edit one specific user by name - put api
router.put('/:heroName', function(req,res){  
  const foundIndex  = users.findIndex( user => user.name === req.params.heroName);
  if(foundIndex < 0) {
    res.json({resp: "user not found"});
  }
  else {
    users[foundIndex] = req.body;
    res.json({users: users})
  }
});

router.patch('/:heroName', function(req,res){  
  const foundIndex  = users.findIndex( user => user.name === req.params.heroName);
  if(foundIndex < 0) {
    res.json({resp: "user not found"});
  }
  else {
    if(req.body.name) {
      users[foundIndex].name = req.body.name;
    }
    if(req.body.age) {
      users[foundIndex].age = req.body.age;
    }
    res.json({users: users})
  }
});

// Assignment
// Create api for orders 

module.exports = router;
