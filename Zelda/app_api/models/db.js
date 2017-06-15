var mongoose =require('mongoose');

var dbURI = 'mongodb://app:pizza@ec2-34-209-39-9.us-west-2.compute.amazonaws.com/zeldaData';
//var dbURI = 'mongodb://localhost/zeldaData';
mongoose.connect(dbURI);



//logging
mongoose.connection.on('connected', function() {
	console.log('Mongoose connected to '+dbURI);
});
mongoose.connection.on('error', function(err) {
	console.log('Mongoose connection error');
	console.log(err);
});
mongoose.connection.on('disconnected', function() {
	console.log('Mongoose disconnected');
});

var gracefulShutdown = function(msg,callback) {
	mongoose.connection.close(function() {
		console.log('mongoose disconnected through '+msg);
		callback();
	});
};
process.on('SIGINT', function() {
	gracefulShutdown('app termination', function() {
		process.exit(0);
	});
});
//IF USING NODEMON
process.once('SIGUSR2', function() {
	gracefulShutdown('nodemon restart', function() {
		process.kill(process.pid, 'SIGUSR2');
	});
});
require('./itemModel');
require('./locationModel');
require('./enemyModel');