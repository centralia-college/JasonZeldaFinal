// var myApp = angular.module('items', []);
// myApp.controller('itemCtrl', ['$scope', '$http', function($scope, $http) {
// 	$scope.oneItem = null;
// 	$scope.itemList = [];

// 	$http.get('/api/items').then(function(result) {
// 		$scope.itemList = result.data;
// 	});
	
// }]);
var myApp = angular.module('items', []);
myApp.service('items' , function($http) {
	//$http.get('/api/items').then(function(result) {
 	//	return result
 	//});

 	$scope.getItems = function(){
 		$http.get('/api/items').then(function(result) {
 		console.log("is it working");
 		return result.data;
 	    });
 	    
 	}; 
});