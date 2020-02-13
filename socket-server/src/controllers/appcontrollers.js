
const model = require('../models/appmodels.js');

exports.getAllChats = (req, res) => {
	model.getAllMessages((err, result) => {
		if(err)
			res.status(404).send(err);
		else
			res.status(200).send(result);
	});
};

exports.saveMessage = (req, res) => {
	var task = req.body;
	model.saveMessage(task,(err, result) => {
		if(err)
			res.status(404).send(err);
		else
			res.status(200).send(result);		
	});
};