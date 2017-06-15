var myApp = angular.module('enemies', []);
myApp.controller('enemyCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.oneEnemy = null;
	$scope.enemyList = [];

	$http.get('/api/enemies').then(function(result) {
		$scope.enemyList = result.data;
	});
	
}]);