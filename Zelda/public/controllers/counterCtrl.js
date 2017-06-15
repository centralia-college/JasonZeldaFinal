var myApp = angular.module('counter', []);
myApp.controller('counterCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.oneItem = null;
	$scope.itemList = [];
	$scope.oneEnemy = null;
	$scope.enemyList = [];

	getItems = function() {
		$http.get('/api/items').then(function(result) {
			$scope.itemList = result.data;
		});
	};
	getItems();
	getEnemies = function() {
		$http.get('/api/enemies').then(function(result) {
			$scope.enemyList = result.data;
		});
	};
	getEnemies();
	

	// $scope.itemList = items.getItems();
	// console.log($scope.itemList.name);
}]);