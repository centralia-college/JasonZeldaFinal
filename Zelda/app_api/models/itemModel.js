var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema ({
	name: String,
	flavortext: String,
	damage: {type:Number, "default":0, min:0, max:100},
	counters: [String]
});

mongoose.model('Item', itemSchema, 'items');