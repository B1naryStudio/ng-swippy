angular.module('ngSwippyDemo', ['ngSwippy'])
	.controller('MainController', function($scope, $timeout){
		$scope.itemsCollection = [{
			thumbnail: 'images/1.jpg',
			title: 'Clara Oswin Oswald',
			subtitle: 'clara@gmail.com'
		}, {
			thumbnail: 'images/2.jpg',
			title: 'Emy Pond',
			subtitle: 'emy@gmail.com'
		},{
			thumbnail: 'images/3.jpg',
			title: 'Rose Tyler',
			subtitle: 'rose@gmail.com',
		}];
	});