var mongoose = require('mongoose');

var enemySchema = new mongoose.Schema ({
	name: String,
	flavortext: String,
	damage: {type:Number, "default":0, min:0, max:100},
	weakTo: [String]
});

mongoose.model('Enemy', enemySchema, 'enemy');