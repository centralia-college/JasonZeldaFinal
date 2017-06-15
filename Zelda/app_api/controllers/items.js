var mongoose = require('mongoose');

var item = mongoose.model('Item');

var sendJsonResponce = function(res, status, content) {
	res.status(status);
	res.json(content);
};

module.exports.itemsGetAll = function(req, res) {
	item.find().exec(function(err, items){
		if(!items){
			sendJsonResponce(res, 404, {'message': 'nothing found'});
			return;
		}
		else if(err) {
			sendJsonResponce(res, 404, err);
			return;
		}
		sendJsonResponce(res, 200, items);
	});
};
module.exports.itemsGetOne = function(req, res) {
	if(req.params && req.params.itemid){
		item.findById(req.params.itemid).exec(function(err, item){
			if(!item){
				sendJsonResponce(res, 404, {'message': 'item not found'});
				return;
			}
			else if (err) {
				sendJsonResponce(res, 404, err);
				return;
			}
			sendJsonResponce(res, 200, item);
		});
	}
	else {
		sendJsonResponce(res, 404, {'message': 'No ItemId in request'});
	}
}