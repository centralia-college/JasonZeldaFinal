var mongoose = require('mongoose');


var locationSchema = new mongoose.Schema ({
	cords: [Number],
	name: String,
	discription: String
});

mongoose.model('Location', locationSchema, 'locations');