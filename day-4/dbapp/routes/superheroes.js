var express = require('express');
const { query } = require('../db');
var router = express.Router();
const sql = require('../db');

/* GET users listing. */
router.get('/', function(req, res) {
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
  const data = req.body;
  sql.query('INSERT INTO superheros SET ?', data, function(error, results, fields) {
      if (error) throw error;
      res.json(results);
  });
});

// Delete one superhero by id
// edit one superhero id

// delete localhost:3000/heroes/3
//Delete one  superhero
// router.delete('/:id', (req, res) =>  {
//   console.log(req.params);
//   sql.query('DELETE FROM superheros WHERE id=?', [req.params.id], function(error, results, fields) {
//       if (error) throw error;
//       res.json(results);
//   });
// });
// DELETE FROM superheros WHERE id=3 // This is what we want
// DELETE FROM superheros WHERE id='3' // Dont want this

// put localhost:3000/heroes/3 
//edit one superhero
// router.put('/:id', function(req, res) {
//   console.log(req.params);
//   const body = req.body;
//   sql.query('UPDATE superheros SET name=?, age=?, image_url=? where id=?', 
//   [body.name, body.age, body.image_url, req.params.id], 
  
//   function(error, results, fields) {
//       if (error) throw error;
//       res.json(results);
//   });
// });


// router.put('/:id', function(req, res) {
//   console.log(req.params);
//   const body = req.body;
//   const sqlStr = `UPDATE superheros SET name=${body.name}, age=${body.age}, image_url=${body.image_url} where id=${req.params.id}`; 
//   // const sqlStr = "UPDATE superheros SET name="+body.name+ "," +  age=${body.age}, image_url=${body.image_url} where id=${req.params.id}`; 


//   sql.query(sqlStr, function(error, results, fields) {
//       if (error) throw error;
//       res.json(results);
//   });
// });

// // localhost:3000/heroes/heroId
// router.put('/:heroId', function(req, res) {
//   console.log(req.params);
//   const byId= req.params.heroId;
//   const updateData=req.body;

//   var sqlString = `UPDATE superheros SET name=?, age=?, image_url=? WHERE id= ?`;
//   sql.query(sqlString, [updateData.name,updateData.age,updateData.image_url,byId], function (err, data) {
//     if (err) throw err;
//     res.json(results);
//   });
// });


// router.put('/:superHeroId', function(req, res) {
//   console.log(req.params);
//   var sqlString = `UPDATE superheros SET name = '${req.body.name}', age  = '${req.body.age}', image_url = '${req.body.image_url}' WHERE id = ${req.params.superHeroId}`;
  
//   sql.query(sqlString, function (error, result) {
//     if (error) throw error;
//    res.json(result);
//   });
// });


router.delete('/:id', function(req, res) {
    console.log(req.params);
    const heroid = req.params.id;
    console.log(heroid);

    sql.query('DELETE FROM superheros WHERE id=?',heroid, function(error, results, fields){
      if (error) throw error;
      res.json(results);
    })
});

module.exports = router;
