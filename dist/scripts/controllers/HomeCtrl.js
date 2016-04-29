(function() {
	function HomeCtrl($interval, Tasks) {
		var vm = this;
		vm.completedTask = "";
		vm.tasks = Tasks.getTasks();
		vm.addTask = function() {
			Tasks.addTask(vm.completedTask);
			vm.completedTask = "";
		} 
		
	}
	
//	function HomeCtrl($interval, Tasks) {
//		var vm = this;
//		
//		vm.addTask = addTask;
//		vm.completedTask = null;
//		vm.tasks = Tasks.getTasks();
//		
//		console.count("Activating implicitly");
//		activate();
//		
//		function activate() {
//			console.count("Activating explicitly");
//			resetNewTaskInput();
//		}
//		
//		function resetNewTaskInput() {
//			vm.completedTask = (new Date()).toISOString();
//		}
//		
//		function addTask() {
//			Tasks.addTask(vm.completedTask);
//			resetNewTaskInput();
//		}
//	}
		
	angular
		.module('pomodoro')
		.controller('HomeCtrl', ['$interval', 'Tasks', HomeCtrl]);
})();