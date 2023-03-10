const express = require('express')
const {register, login, getAllusers} = require('../controllers/UserController.js');

const router = express.Router();

router.post('/register' , register);
router.post('/login' , login);
router.get('/allusers/:id' ,getAllusers)
module.exports = router