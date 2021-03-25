var express = require('express');
var router = express.Router();
const sql = require('../db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // sql.query("select * from superheros", function(error, results, fields){
  //   if(error) throw error;
  //   res.json(results);
  // });
  // Same as above
  sql.query("select * from superheros", (error, results, fields) => {
    if(error) throw error;
    res.json(results);
  });
});

// router.post('/', (req,res) => {
  
//   const sqlString = `INSERT INTO superheros (name, age, image_url) VALUES ('${req.body.name}', '${req.body.age}', '${req.body.image_url}')`;
  
//   sql.query(sqlString, (error, results) => {
//     if(error) throw error;
//     res.json(results);
//   });
// })

router.post('/', function(req, res) {
  //var data = req.body;
  var data = req.body;
  sql.query('INSERT INTO superheros SET ?', data, function(error, results, fields) {
      if (error) throw error;
      res.json(results);
  });
});

module.exports = router;
