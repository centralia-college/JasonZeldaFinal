var mongoose = require('mongoose');

var enemy = mongoose.model('Enemy');

var sendJsonResponce = function(res, status, content) {
	res.status(status);
	res.json(content);
};

module.exports.enemiesListAll = function(req, res) {
	enemy.find().exec(function(err, enemies){
		if(!enemy){
			sendJsonResponce(res, 404, {'message': 'nothing found'});
			return;
		}
		else if(err) {
			sendJsonResponce(res, 404, err);
			return;
		}
		sendJsonResponce(res, 200, enemies);
	});
};
module.exports.enemiesGetOne = function(req, res) {
	if(req.params && req.params.enemyid){
		enemy.findById(req.params.enemyid).exec(function(err, enemy){
			if(!enemy){
				sendJsonResponce(res, 404, {'message': 'enemy not found'});
				return;
			}
			else if (err) {
				sendJsonResponce(res, 404, err);
				return;
			}
			sendJsonResponce(res, 200, enemy);
		});
	}
	else {
		sendJsonResponce(res, 404, {'message': 'No EnemyId in request'});
	}
}