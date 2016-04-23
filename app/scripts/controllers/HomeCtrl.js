(function () {
	function HomeCtrl($interval) {
		var vm = this;
//		vm.timer = null;
//		vm.start = "Start";
//		vm.reset = "Stop & Reset Timer";
//		
//		vm.startTimer = function() {
//			vm.message = "Timer Started!";
//			endTime = 10000;
//			vm.timer = $interval(updateTime, delay);
//		};
//		
//		vm.resetTimer = function () {
//			vm.message = "Timer stopped!";
//			if(angular.isDefined(vm.timer)) {
//				$interval.cancel(vm.timer);
//			}
//		};
//		
//		var endTime = null;
//		var delay = 1000;
//		
//		function updateTime() {
//			endTime -= delay;
//			var minutes = Math.floor( (endTime/1000) / 60);
//		  	var seconds = Math.floor( (endTime/1000) % 60);
//			vm.message = endTime;
//			if (endTime === 0) {
//				$interval.cancel(vm.timer);
//			} 
//		}
	}
		
	angular
		.module('pomodoro')
		.controller('HomeCtrl', ['$interval', HomeCtrl]);
})();