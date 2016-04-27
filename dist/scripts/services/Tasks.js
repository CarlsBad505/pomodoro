(function() {
	function Tasks($firebaseArray) {
		var firebaseRef = new Firebase("https://pomodoro1.firebaseio.com");
		var tasksRef = $firebaseArray(firebaseRef.child('tasks'));
		
		return {
			getTasks: getTasks,
			addTask: addTask
		};
		
		function getTasks() {
			return tasksRef;
		}
		
		function addTask(taskName) {
			tasksRef.$add(taskName);
		}
	}
	
	
	angular
		.module('pomodoro')
		.factory('Tasks', ['$firebaseArray', Tasks]);
})();