const express = require('express');
const Joi = require('joi');
const router = express.Router();
const sql = require('../db');
const validator = require('express-joi-validation').createValidator({ passError: true });

const createUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  age: Joi.number().optional(),
  password: Joi.string().min(3),
  image_url: Joi.string().optional()
})

// POST /users
router.post('/', validator.body(createUserSchema), (req, res, next) => {
  sql.query('INSERT into users SET ?', req.body, (error, result) => {
    if (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        res.status(400).send({
          message: "User already exists. Please sign in or use another email."
        });
        return;
      }
      next(error);
    }
    res.json(result);
  });
})

// GET /users/1
router.get('/:id', (req, res, next) => {
  sql.query('select * from users where id=?', id, (error, result) => {
    if (error) {
      res.status(404).send({ message: "User not found" });
    }
    res.blahblah();
    res.json(result);
  });
})

module.exports = router;