(function() {
	function timer($interval) {
		return {
			templateUrl: '/templates/directives/timer.html',
			replace: true,
			restrict: 'E',
			scope: { },
			link: function(scope) {
				scope.workTimer = null;
				scope.onBreak = null;
				scope.breakTimer = null;
				scope.startWork = "Start Work Session";
				scope.resetWork = "Stop & Reset Work Session";
				scope.startBreak = "Start Break Session";
				scope.resetBreak = "Stop & Reset Break Session";

				scope.startWorkTimer = function() {
					scope.message = "Work Session Started!";
					endTime = 10000; // Change this to 1500000 when done testing
					scope.workTimer = $interval(updateWorkTime, delay);
				};

				scope.resetWorkTimer = function () {
					scope.message = "Work Session Reset!";
					if(angular.isDefined(scope.workTimer)) {
						$interval.cancel(scope.workTimer);
						scope.workTimer = null;
					}
				};
				
				scope.startBreakTimer = function() {
					scope.message = "Break Session Started!";
					breakTime = 5000; // change to 300000 later when done testing
					scope.breakTimer = $interval(updateBreakTime, delay);
				}
				
				scope.resetBreakTimer = function () {
					scope.message = "Break Session Reset!";
					if(angular.isDefined(scope.breakTimer)) {
						$interval.cancel(scope.breakTimer);
						scope.breakTimer = null;
					}
				}

				var endTime = null;
				var breakTime = null;
				var delay = 1000;

				function updateWorkTime() {
					endTime -= delay;
					scope.message = endTime;
					if (endTime <= 0) {
						$interval.cancel(scope.workTimer);
						scope.message="Work Session Finished!";
						scope.onBreak = true;
						scope.workTimer = null;
					} 
				}
				
				function updateBreakTime() {
					breakTime -= delay;
					scope.message = breakTime;
					if (breakTime <= 0) {
						$interval.cancel(scope.breakTimer);
						scope.message="Break Session Finished!";
						scope.onBreak = null;
						scope.breakTimer = null;
					}
					
				}
			}
		};
	}
	
	angular
		.module('pomodoro')
		.directive('timer', ['$interval', timer]);
})();