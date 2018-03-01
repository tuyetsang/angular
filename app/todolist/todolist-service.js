var dependences = [
    'jquery',
    'angular',
    'commonService',
    'commonFilter'
];

define(dependences, function() {

    /**
     * Todolist service
     * @exports TodolistService
     */
    var TodolistService = angular.module('MainApp.todolist.service', [
        'MainApp.common.service',
        'MainApp.common.filter'
    ]);

    /**
     * Todolist service
     * @param  {object} $filter             Angular filter service
     * @param  {Object} $rootScope          Angular rootScope
     * @param  {Object} CommonModel         common function and variable
     * @return {Object} publicModel
     */
    TodolistService.factory('TodolistService', function($filter, $rootScope, CommonModel) {

        /**
         * PublicModel
         * @type {Object}
         */
        var publicModel = {

            updateInfo: function(param) {
                // TODO update data
            }
        };
        
        return publicModel;
    });
});