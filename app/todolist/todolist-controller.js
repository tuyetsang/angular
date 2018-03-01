var dependences = [
    'jquery',
    'angular',
    'ui-bootstrap-tpls',
    'commonService',
    'todolistService'
];

define(dependences, function() {

    /**
     * Define application operation controller
     * @exports TodolistManager
     */
    var TodolistManager = angular.module('MainApp.todolist', [
        'ui.bootstrap',
        'MainApp.common.service',
        'MainApp.todolist.service'
    ]);

    /**
     * * Todolist controller
     *  - Run/Stop Todolist
     *  - handle callback
     *  - show dialog when run/stop application
     *  - Init page
     * @param  {Object} $scope             [Angular scope]
     * @param  {Object} $rootScope         [Angular root scope]
     * @param  {Object} $location          [Location]
     * @param  {Object} CommonModel        [common function and variable]
     * @param  {Object} CommonDialog       [common modal instance]
     * @param  {Object} TodolistService [MainApp.application service]
     * @return {none}                    [description]
     */
    TodolistManager.controller('MainApp.todolist.controller', function($scope, TodolistService) {

        $scope.tasks = [];
        $scope.editKey = false;

        $scope.addTask = function() {
            if ($scope.editKey === false) {
                $scope.tasks.push({ task: $scope.task, date: $scope.createDateTime, done: false })
            } else {
                $scope.tasks[$scope.editKey].task = $scope.task;
            }
            $scope.editKey = false;
            $scope.task = '';
            $scope.date = '';

        }
        $scope.createDateTime = function() {
            var now = new Date();
            var then = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
            return then;
        }

        $scope.editTask = function(key) {
            $scope.task = $scope.tasks[key].task;
            $scope.editKey = key;
        }
        $scope.doneTask = function(key) {
            $scope.tasks[key].done = true;
        }
        $scope.unDoneTask = function(key) {
            $scope.tasks[key].done = false;
        }
        $scope.deleteTask = function(key) {
            $scope.tasks.splice(key, 1);
        }

    });

    /**
     * Todolist dialog controller
     *  - show dialog and execute import, export, delete, rename ... for application
     *
     * @param  {object} $scope            Angular scope
     * @param  {object} $modalInstance    Angular UI modal instance
     * @param  {object} $filter           used for formatting data
     * @param  {object} CommonModel       common function and variable
     * @param  {object} TodolistService Todolist services
     * @param  {object} passingData       Passing data to dialog
     * @return {none}
     */
    TodolistManager.controller('todoListDialogCtrl', function($scope, $rootScope, $modalInstance, CommonModel, TodolistService, passingData, CommonDialog, $location) {

        /**
         * Dialogs
         * @type {Object}
         */
        var Dialogs = {};

        /**
         * Dialog of update button
         * @type {Object}
         */
        Dialogs.update = {
            dataUpdate: "",
            init: function() {

            },
            btnExeClick: function() {
                successCb();
            }
        };


        var successCb = function() {
            $modalInstance.close(passingData);
        };

        // Clone object for prevent databinding of Angular
        $scope.dataModel = angular.copy(passingData.dataModel);

        /**
         * Execute pass data to callback function when execute
         * @return {none}
         */
        $scope.btnCancelClick = function() {
            $modalInstance.dismiss('cancel');
        };

        /**
         * Execute close dialog when click button cancel
         * @return {none}
         */
        $scope.cancel = $scope.btnCancelClick;

        // Init variable of $scope
        for (var key in Dialogs[passingData.type]) {
            $scope[key] = Dialogs[passingData.type][key];
        }

        if ($scope.init) $scope.init();
    });
});