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
		
		function addTask(name) {
			tasksRef.$add({
				dateTime: Date.now(),
				taskName: name
			});
		}
	}
	
	
	angular
		.module('pomodoro')
		.factory('Tasks', ['$firebaseArray', Tasks]);
})();