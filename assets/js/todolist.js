{/* <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0rc1/angular-route.min.js"></script>

var app=angular.module('ToDo',['ngRoute']);
app.controller('TodoController',['$scope',function($scope){
$scope.tasks = [];
$scope.editKey = false;
$scope.addTask = function () {
    if( $scope.editKey === false){
        $scope.tasks.push({task: $scope.task, done: false})
    } else {
        $scope.tasks[$scope.editKey].task = $scope.task;
    }
    $scope.editKey = false;
    $scope.task = '';
}
    
$scope.editTask = function (key) {
  $scope.task = $scope.tasks[key].task;
  $scope.editKey = key;
}
$scope.doneTask = function (key) {
  $scope.tasks[key].done = true;
}
$scope.unDoneTask = function (key) {
  $scope.tasks[key].done = false;
}
$scope.deleteTask = function (key) {
  $scope.tasks.splice(key, 1);
}
}]) */}