const express = require('express');
const Joi = require('joi');
const router = express.Router();
const sql = require('../db');
const validator = require('express-joi-validation').createValidator({})

const createUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  age: Joi.number().optional(),
  password: Joi.string().min(3),
  image_url: Joi.string().optional()
})

// POST /heroes
router.post('/', validator.body(createUserSchema), (req, res, next) => {
  sql.query('INSERT into users SET ?', req.body, (error, result) => {
    if (error) {
      next(error);
      return;
    }
    res.json(result);
  });
})

module.exports = router;