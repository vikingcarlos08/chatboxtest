
const express = require("express");
const router = express.Router();
const controllers = require('../controllers/appcontrollers.js');
//Routes
router.route('/getAllChats')
.get((req, res) => {
	controllers.getAllChats(req, res);
});

router.route('/SaveChats')
.post((req, res) => {
 controllers.saveMessage(req,res);
});


module.exports = router;