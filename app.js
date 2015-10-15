angular.module('ngSwippyDemo', ['ngSwippy', 'ngMaterial'])
	.controller('MainController', function($scope, $timeout){
		$scope.itemsCollection = [{
			thumbnail: 'images/2.jpg',
			title: 'Matt Smith',
			subtitle: 'matt@gmail.com'
		},{
			thumbnail: 'images/3.jpg',
			title: 'Peter Capaldi',
			subtitle: 'peter@gmail.com',
		},{
			thumbnail: 'images/4.jpg',
			title: 'Christopher Eccleston',
			subtitle: 'christopher@gmail.com',
		},{
			thumbnail: 'images/5.jpg',
			title: 'Arthur Darvill',
			subtitle: 'arthur.darvill@gmail.com',
		},{
			thumbnail: 'images/6.jpg',
			title: 'Master',
			subtitle: 'master@gmail.com',
		}, {
			thumbnail: 'images/1.jpg',
			title: 'David Tennant',
			subtitle: 'david@gmail.com'
		}, ];

		$scope.myCustomFunction = function(){
			$timeout(function(){
				$scope.clickedTimes = $scope.clickedTimes + 1;
				$scope.actions.unshift({name: 'Click on item'});
			});
			
		};

		$scope.size = {
			width: 300,
			height: 400
		};

		$scope.showinfo = true;

		$scope.swipeend = function(){
			$scope.actions.unshift({name: 'Collection Empty'});
		};

		$scope.clickedTimes = 0;

		$scope.actions = [];

		$scope.swipeLeft = function(person){
			$scope.actions.unshift({name: 'Left swipe'});
		};

		$scope.swipeRight = function(person){
			$scope.actions.unshift({name: 'Right swipe'});
		};

	});