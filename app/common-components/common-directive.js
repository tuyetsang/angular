var dependences = [
    'jquery',
    'angular',
    'commonService',
    'bootstrap',
    'ui-bootstrap-tpls',
    'angularAnimate',
    'angularToast'
];

define(dependences, function() {

    /**
     * Common directive handling
     * @exports CommonDirective
     */
    var CommonDirective = angular.module('MainApp.common.directive', ['ngAnimate', 'ui.bootstrap', 'MainApp.common.service']);

    /**
     * Directive commonTask
     * @return {object} content object return
     */
    CommonDirective.directive('commonTask', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                // TODO: logic for common task
            }
        };
    });

});
