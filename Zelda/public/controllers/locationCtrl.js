var myApp = angular.module('locations', []);
myApp.controller('locationCtrl', ['$scope', '$http', function($scope, $http) {
	console.log('Can You Hear ME?!');
	$scope.oneLocation = null;
	$scope.locationList = [];

	$http.get('/api/locations').then(function(result) {
		console.log(result.data);
		$scope.locationList = result.data;

	});

	$scope.toNum = function(num) {
		console.log(parseInt(num));
		return parseInt(num);
	};
    
    // $scope.resize = function() {
    // 	areas                 = map.getElementsByTagName('area');
    //         cachedAreaCoordsArray = Array.prototype.map.call(areas, getCoords);
    //         console.log(cachedAreaCoordsArray);
    //         image                 = document.querySelector('img[usemap="#'+map.name+'"]');
    //         map._resize           = resizeMap;
    // };

	$scope.coords= '1997,1444,2037,1484';
	//$http({
	//	method: 'GET',
	//	url: 'localhost:3000/api/locations'
	//}).then(function (result) {
	//	$scope.locationList = result;
	//});
}]);