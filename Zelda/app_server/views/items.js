angular.module('zeldaApp',[])
	.controller('CounterController', function() {
		var items = this;
		var url = 'http://localhost:3000/api/items';

		items.itemsList = this.http.get(url).then(response => response.json().data);


	});