var dependences = [
    /** Jquery, Bootstrap, Angular */
    'jquery',
    'bootstrap',
    'angular',
    'angularFilter',
    'angularAria',
    'angularRoute',
    'angularMaterial',

    /** Common */
    'commonDirective',

    /** Application */
    'applicationController',
    'todolistController'
];

define(dependences, function() {


    /**
     * MainApp GUI handling
     * @exports MainApp
     */
    var MainApp = angular.module('MainApp', [
        'ngMaterial',
        'ngRoute',
        'MainApp.common.directive',
        'MainApp.application',
        'MainApp.todolist',
        'angular.filter'
    ]);

    /**
     * config route
     * @return {Object} object template and controller for template
     */
    MainApp.config(function($routeProvider) {

        $routeProvider.
        when('/', {
            templateUrl: "./app/application/application.html",
            controller: 'MainApp.application.controller'
        }).
        when('/application', {
            templateUrl: "./app/application/application.html",
            controller: 'MainApp.application.controller'
        }).
        when('/todolist', {
            templateUrl: "./app/todolist/todolist.html",
            controller: 'MainApp.todolist.controller'
        }).
        otherwise({
            redirectTo: function() {
                location.href = 'index.html';
            }
        });
    });

    /** Start up angular application */
    angular.bootstrap(document, ['MainApp']);

    SVGElement.prototype.getTransformToElement = SVGElement.prototype.getTransformToElement || function(toElement) {
        return toElement.getScreenCTM().inverse().multiply(this.getScreenCTM());
    };
});