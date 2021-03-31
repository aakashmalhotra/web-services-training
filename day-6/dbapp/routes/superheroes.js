const express = require('express');
const router = express.Router();
const sql = require('../db');
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});


/* GET heroes. */
router.get('/', function (req, res, next) {
  let sqlString = "select * from superheros";
  if (req.query && req.query.age) {
    sqlString += ` where age = ${req.query.age}`
  }

  sql.query(sqlString, (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

const validationSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  age: Joi.number().required(),
  image_url: Joi.required()
});

router.post('/', validator.body(validationSchema), function (req, res) {
  console.log(" I amm here in POST request!!!!")
  const data = req.body;
  sql.query('INSERT INTO superheros SET ?', data, function (error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});


router.delete('/:id', function (req, res) {
  console.log(req.params);
  const heroid = req.params.id;
  console.log(heroid);

  sql.query('DELETE FROM superheros WHERE id=?', heroid, function (error, results, fields) {
    if (error) throw error;
    res.json(results);
  })
});

module.exports = router;
