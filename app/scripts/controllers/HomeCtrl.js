(function() {
	function HomeCtrl($interval, Tasks) {
		var vm = this;
		vm.tasks = Tasks.getTasks();
		vm.addTask = function() {
			Tasks.addTask(vm.completedTask);
		} 
		
	}
		
	angular
		.module('pomodoro')
		.controller('HomeCtrl', ['$interval', 'Tasks', HomeCtrl]);
})();