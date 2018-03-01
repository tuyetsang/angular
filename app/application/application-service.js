var dependences = [
    'jquery',
    'angular',
    'commonService',
    'commonFilter'
];

define(dependences, function() {

    /**
     * Application service
     * @exports ApplicationService
     */
    var ApplicationService = angular.module('MainApp.application.service', [
        'MainApp.common.service',
        'MainApp.common.filter'
    ]);

    /**
     * Application service
     * @param  {object} $filter             Angular filter service
     * @param  {Object} $rootScope          Angular rootScope
     * @param  {Object} CommonModel         common function and variable
     * @return {Object} publicModel
     */
    ApplicationService.factory('ApplicationService', function($filter, $rootScope, CommonModel) {

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