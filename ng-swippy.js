angular.module('ngSwippy', ['ngTouch']).
	directive('ngSwippy', ['swipe', function(swipe){
		return {
			restrict: 'E',
			replace: true,
			template: 	'<div class="ng-swippy">'+
							'<div person="person" style="width: {{width}}; height: {{height}}" swipe-directive="swipe-directive" ng-repeat="person in peopleToShow" class="content-wrapper swipable-card">' +
  								'<div class="card">' +
    								'<div style="background: url({{person.thumbnail}}) no-repeat 50% 15%" class="photo-item"></div>' +
    								'<div class="know-label">Know</div>' +
    								'<div class="dontknow-label">Don\'t know</div>' +
  								'</div>' +
								'<div class="progress-stats" ng-if="data">' +
									'<div class="card-shown">' +
								    	'<div class="card-shown-text">{{person.title}}</div>' +
								    	'<div class="card-shown-number">{{person.subtitle}}</div>' +
								  		'</div>' +
								  		'<div class="card-number">{{collection.length - (collection.indexOf(person))}}/{{collection.length}}&nbsp;<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAF3klEQVRoQ91a0VHcSBCd1hb8movgIIKDCA4iODsCL1VIxd/hCAwRGP6oEVW3jsAQgSEClggOIjD+lUB99aamt5rZGUmrNdTW8WN2kWbmdb9+3dNtyvP8loi2zWr8XFprPww5ChVFwUNefK13rLU0ZO0ZkKELDNk09o4YdOg5/r9A3jhmZjHxyz3y1jEjVHo1IEO52jdmwoPL5yzLts7Pz+/7riPPzcVIX8uMx+ONtbW1j8aY90S06xe8bJrm7OLi4rrrICkg8h4zY417IrrH73Vd300mk8fUuoOAeBDfU/kHG49Go/02y6aAMPMDEf0eOzAzPxLRdVVV+yGoQUCKopgYY+CNO2Yel2U5Bbj19fUxMx/hIABTluVeyoIpIELpg4OD3SzLtpl50xiz7Y32Dusx8w721GsPApLn+Q8i2ojx2QMCx9+18T0FpKqq31IUaqP9wkAODw83m6b5F96w1kZLmzzPr4noz6Zp9lLx0hYjoJAxBhaHQc5gfe+h76l9BwNh5mlZljsx6iwJ5Ce8qdY9sdYe53k+JqJ/mPmqLMv34b4LA8ECXcrW9ffYGvodLyaX8Kox5pO19rQoimNjzGdjjAP2S4BIjMSCTigAetR1vdWX7yH40Kvy2Qe7Uy8v0WDGzcIeUVy9t9ZuJQpAxNBmDKg836Va8ncJ/qIo3JrGmJB6ULHpwkA8LRCM4LFzuwajKPDTWrsxRH6VoMzW0MDx9+fn512fiD+63NNlmYTFj4wxX2IBryz3wVp7OQSIoudNWZa76vO0rus9oasIgDHm6yAggVdmBy6KQgA+lGUJGiR/2gwoXmVmSO+ROjBo9DgajXZQNajE/GkZIJDAb8zsrIYTS0Ay835Zlsj+Q4FI5eCom+f5KRH9LYtJopUrB2JxMJDQ/RpIWyLsE+wdiuW87SuIH1gPZc0gIABBRF98/fPVWjv2QMRyyMjHVVVdDZHfiBS7ksgbwe1XFMULRvQG4i3wFw7oZRB8fajrelsOGyQyx2ciOq2q6iwE1FL97hDRLdYOLe+BRBNkLyB5nqP6/KYBENGkqqrTmMURnMYYlBTIzAJoX6tYS62FdtAs9lTecjgkN4X06wTiNRu9L7j2Dh5pk1Ud3f5d0A2efFF+twA50aWIKKFfdy6vSMLsBKIkbhYLbWqUyDtOhXTB10KtKwAX5dOKJQoZq4Q7gbTdPfoCUpnaKYzPQ64xGH525QbRtiifrrGkYFT5yuUZrJME0veQyz4XApH15HsxJL5X4FAZz7wWBRJYYNlztr4fo5p/wV3atCfxvcRDjCUr12n0ouAuT4FivQAn8iyWWkkgKhbkMgXFe1F3hTfFVQXiClGlmADi6jddKOorxEoCCZMe6BMrFHVLaCWBRCQ5WihqJVm5QY+0e7RiSTzEKu5ZsL+l3PbUcldBBIrV2UmZG3NJ6YAM65tk7t+uJnLPQ/Z+TN39dSJ0jT9jzNw1OgYEB/8jtqN0AIloysy4c7wawDzPXfaOlTGxtmp08Ah+Pj09bRIRRga4Ys61YAKgaP1jBOBGAfgdvabe5o88qK6x7irtrxK3yZZp22bhLUwAZlmGOzr6VgDr7hyJnxnApmlQDEJ9XnTRUy+qyZnrLKpyPlqFt46CVTdjMhqNTlLzDq8waGhjDIBLGDooUXr6EgSgHDVjAJX18biLB6FaqrHRCkTz1FvObe5blXB5q3X9gdx8oydAR01XzRK5PkDYaUyNKlqBeEtjeAMrg066S+6wAZT0YfsqWwDQ0TQ2pZL6KtZ5DCm50P8ywAH89GiXmdFJmRuR+YsRLDvNsuxmkcGm784AFOIPex3D610jBefBZZTFd1ZgUVAHwGKBvxAdY+dR1925XvMssy8DJPaumv1JkzlJRwT609PTTdu0FnuIFLc1/pbySB8jBJ1z0GVOzaSKQKyFdAw7iqk9Xx1IuHEfOsoY2qsjFOxU95hjYN4cSCIGnCoizryYxObs0ZHbq8VIH7p1PSN0FIUEHbsa4/8BXIdObeVTersAAAAASUVORK5CYII=" width="50" height="50"/>' +
								  	'</div>' +
								'</div>' +
							'</div>' +
						'</div>',
			
			scope: {
				collection: '=',
				width: '@',
				height: '@',
				callback: '&',
				data: '=',
				swipeend: '='
			},

			link: function(scope){

				scope.init = function(){
					scope.people = scope.collection.slice(0);
					scope.peopleBuf = scope.people.slice(0);
					scope.peopleToShow = scope.peopleBuf.splice(-4);	
				};

				scope.removeElementFromCollection = function(person){
					scope.people.splice(scope.people.indexOf(person), 1);
					if (scope.people.length === 0){
						scope.swipeend = true;
					} else {
						scope.peopleToShow.splice(scope.peopleToShow.indexOf(person), 1);
					}
					if (scope.peopleBuf.length > 0){
						scope.peopleToShow.unshift(scope.peopleBuf.pop());
					}
				};

				scope.init();
			}
		}
	}])
	.directive('swipeDirective', ['swipe', '$window', '$timeout', function(swipe, $window, $timeout){
		return {
			restrict: 'A',
			scope: {
				person: '='
			},
			link: function(scope, element, attrs){
				var screenWidth = $window.screen.availWidth;
				var screenHeight = $window.screen.availHeight;
				var moving = false;
				var timeoutStart = 0;

				scope.swipeObject = {
					swiping: 0,
					startX: 0,
					startY: 0,
					offsetX: 0,
					offsetY: 0
				};

				var expressionHandler = scope.$parent.callback();

				swipe.bind(element, {
					start: function(coordinates) {
						if (!scope.isSwiping) {
							scope.isSwiping = true;
							scope.swipeObject.startX = coordinates.x;
							scope.swipeObject.startY = coordinates.y;
						} else {
							return;
						}

						timeoutStart = Date.now();
					},
					move: function(coordinates) {
						if (!scope.isSwiping) {
							return;
						} else {
							if (!moving){

								element.css({
									'-o-transition': 'none',
									'-moz-transition': 'none',
									'-ms-transition': 'none',
									'-webkit-transition': 'none',
									'transition': 'none'
								});

								moving= true;
							}
							if ((Date.now() - timeoutStart) < 50) {
								return;
							} else {
 
								scope.swipeObject.offsetX = coordinates.x - scope.swipeObject.startX;
								scope.swipeObject.offsetY = coordinates.y - scope.swipeObject.startY;

								var rotateX = scope.swipeObject.offsetX;

								if (scope.swipeObject.offsetY < 0){
									rotateX = -scope.swipeObject.offsetX;
								}

								element.css({
									'-webkit-transform': 'translate3d(' + scope.swipeObject.offsetX + 'px,'+ scope.swipeObject.offsetY + 'px,0)  rotateZ('+  (rotateX /10) * Math.abs(scope.swipeObject.offsetY/80) +'deg)',
									'transform': 'translate3d(' + scope.swipeObject.offsetX + 'px,'+ scope.swipeObject.offsetY + 'px,0)  rotateZ('+  (rotateX /10) * Math.abs(scope.swipeObject.offsetY/80) +'deg)'
								});
							}
						}
					},
					end: function(coordinates) {
						scope.isSwiping = false;
						if (scope.swipeObject.offsetX === 0 && scope.swipeObject.offsetY === 0){
							expressionHandler();
							return;
						}

						moving = false;

						element.css({
							'-webkit-transition': 'transform 0.5s',
							'transition': 'transform 0.5s',
						});

						if (Math.abs(scope.swipeObject.offsetX / screenWidth) > 0.200 || Math.abs(scope.swipeObject.offsetY / screenHeight) > 0.100) {
							var style;
							var y = 100;
							var x = window.innerWidth / element[0].offsetWidth * 100;

								if (scope.swipeObject.offsetX < 0 && scope.swipeObject.offsetY < 0){
									style = {
										'-webkit-transform': 'translate3d(-' + x + '%,-' + y + '%,0)',
										'transform': 'translate3d(-' + x + '%,-' + y + '%,0)',
									};
								} else if (scope.swipeObject.offsetX < 0 && scope.swipeObject.offsetY >= 0){
									style = {
										'-webkit-transform': 'translate3d(-' + x + '%,' + y + '%,0)',
										'transform': 'translate3d(-' + x + '%,' + y + '%,0)',
									};
								} else if (scope.swipeObject.offsetX > 0 && scope.swipeObject.offsetY <= 0){
									style = {
										'-webkit-transform': 'translate3d(' + x + '%,-' + y + '%,0)',
										'transform': 'translate3d(' + x + '%,-' + y + '%,0)',
									};
								} else {
									style = {
										'-webkit-transform': 'translate3d(' + x + '%,' + y + '%,0)',
										'transform': 'translate3d(' + x + '%, ' + y + '%,0)',
									};
								}

							element.css(style);

							scope.swipeObject.offsetX = 0;
							scope.swipeObject.offsetY = 0;

							$timeout(function(){
								scope.$parent.removeElementFromCollection(scope.person);
							},500);
						} else {
							element.css({
								'-webkit-transform': 'translate3d(' + 0 + 'px,0,0)',
								'transform': 'translate3d(' + 0 + 'px,0,0)'
							});

							scope.swipeObject.offsetX = 0;
							scope.swipeObject.offsetY = 0;
						}
						
					}
				});
			}
		}
	}]);