const express = require('express')
const {addMessage , getAllMessage} = require('../controllers/MessageController.js')

const router = express.Router();

router.post('/addmsg/' , addMessage);
router.post('/getmsg/' , getAllMessage);
// router.get('/allusers/:id' ,getAllusers)
module.exports = router