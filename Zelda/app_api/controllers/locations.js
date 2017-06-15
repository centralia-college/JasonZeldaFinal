var mongoose = require('mongoose');

var loc = mongoose.model('Location');


var sendJsonResponce = function(res, status, content) {
	res.status(status);
	res.json(content);
};

module.exports.locationsListAll = function(req, res) {
	loc.find().exec(function(err, locations){
		if(!locations){
			sendJsonResponce(res, 404, {'message': 'nothing found'});
			return;
		}
		else if(err) {
			sendJsonResponce(res, 404, err);
			return;
		}
		sendJsonResponce(res, 200, locations);
	});
};
module.exports.locationsGetOne = function(req, res) {
	if(req.params && req.params.locationid){
		loc.findById(req.params.locationid).exec(function(err, location){
			if(!location){
				sendJsonResponce(res, 404, {'message': 'location not found'});
				return;
			}
			else if (err) {
				sendJsonResponce(res, 404, err);
				return;
			}
			sendJsonResponce(res, 200, location);
		});
	}
	else {
		sendJsonResponce(res, 404, {'message': 'No LocationId in request'});
	}
}