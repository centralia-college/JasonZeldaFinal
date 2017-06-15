var myApp = angular.module('zapp', ['counter', 'enemies', 'locations']);
myApp.controller('mainCtrl', ['$scope', function($scope) {
	console.log($scope.itemList);
}]);