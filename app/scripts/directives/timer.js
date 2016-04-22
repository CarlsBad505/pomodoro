(function() {
	function timer($interval) {
		return {
			templateUrl: '/templates/directives/timer.html',
			replace: true,
			restrict: 'E',
			scope: { },
			link: function(scope) {
				scope.timer = null;
				scope.start = "Start Timer";
				scope.reset = "Stop & Reset Timer";

				scope.startTimer = function() {
					scope.message = "Timer Started!";
					endTime = 10000; // Change this to 1500000 when done testing
					scope.timer = $interval(updateTime, delay);
				};

				scope.resetTimer = function () {
					scope.message = "Timer stopped!";
					if(angular.isDefined(scope.timer)) {
						$interval.cancel(scope.timer);
					}
				};

				var endTime = null;
				var delay = 1000;

				function updateTime() {
					endTime -= delay;
					var minutes = Math.floor( (endTime/1000) / 60);
					var seconds = Math.floor( (endTime/1000) % 60);
					scope.message = endTime;
					if (endTime === 0) {
						$interval.cancel(scope.timer);
					} 
				}
			}
		};
	}
	
	angular
		.module('pomodoro')
		.directive('timer', ['$interval', timer]);
})();