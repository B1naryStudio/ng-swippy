angular.module('ngSwippyDemo', ['ngSwippy', 'ngMaterial'])
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
		},{
			thumbnail: 'images/4.jpg',
			title: 'Donna Noble',
			subtitle: 'donna@gmail.com',
		},{
			thumbnail: 'images/5.jpg',
			title: 'Martha Jones',
			subtitle: 'martha@gmail.com',
		}];

		$scope.myCustomFunction = function(){
			$timeout(function(){
				$scope.clickedTimes = $scope.clickedTimes + 1;
			});
			
		};

		$scope.size = {
			width: 300,
			height: 200
		};

		$scope.showinfo = true;

		$scope.swipeend = false;

		$scope.clickedTimes = 0;

		$scope.$watch('swipeend', function(el){
			if (el){
				alert('Done!');
			}
		});
	});