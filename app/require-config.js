var require = {
    baseUrl: '',
    paths: {
        /** Jquery/ bootstrap lib */
        'jquery'                              : ['../assets/libs/jquery/jquery-2.1.3.min'],
        'bootstrap'                           : '../assets/libs/bootstrap-3.3.5-dist/js/bootstrap.min',
        'ui-bootstrap-tpls'                   : '../assets/libs/ui-bootstrap-tpls-0.13.3.min',
        /** Angular */
        "angular"                             : "../assets/libs/angularjs/angular.min",
        "angularFilter"                       : "../assets/libs/angularjs/angular-filter.min",
        "angularAnimate"                      : "../assets/libs/angularjs/angular-animate",
        "angularMaterial"                     : "../assets/libs/angularjs/angular-material.min",
        "angularAria"                         : "../assets/libs/angularjs/angular-aria.min",
        "angularRoute"                        : "../assets/libs/angular-route/angular-route.min",
        "angularSanitize"                     : "../assets/libs/angular-sanitize/angular-sanitize.min",
        "angularToast"                        : "../assets/libs/angular-toastr/dist/angular-toastr.tpls.min",
        'angularCookie'                       : "../assets/libs/angularjs/angular-cookies.min",

        /** Common */
        'commonDirective'                     : './common-components/common-directive',
        'commonService'                       : './common-components/common-service',
        'commonFilter'                        : './common-components/common-filter',

        'config'                              : './config',

        /** Application */
        'applicationController'               : './application/application-controller',
        'applicationService'                  : './application/application-service',
        
        'todolistController'               : './todolist/todolist-controller',
        'todolistService'                  : './todolist/todolist-service'
    },
    map: {
        
    },
    shim: {
        /**
         * angular dependency, exports
         * @type {object}
         * @property {Array} deps       - These script dependencies should be loaded before loading angular.js
         * @property {String} exports   - Once loaded, use the global 'angular' as the module value.
         */
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        },
        'angularAnimate': {
            deps: ['angular']
        },
        'angularFilter': {
            deps: ['angular']
        },
        'angularAria': {
            deps: ['angular']
        },
        'angularMaterial': {
            deps: ['angular','angularAria','angularAnimate']
        },
        'angularRoute': {
            deps: ['angular']
        },
        'angularSanitize': {
            deps: ['angular']
        },
        "angularToast": {
            deps: ["angular", "jquery", "bootstrap"],
            exports: "toastr"
        },
        "angular-color-picker": {
            deps: ["angular"]
        },
        "angularCookie": {
            deps: ["angular"]
        },

        /**
         * jquery-ui dependency
         * @type {object}
         * @property {Array} deps       - These script dependencies should be loaded before loading jquery-ui
         */
        "jquery-ui": {
            deps: ["jquery"]
        },

        /**
         * bootstrap dependency
         * @type {object}
         * @property {Array} deps       - These script dependencies should be loaded before loading bootstrap
         */
        "bootstrap": {
            deps: ["jquery"]
        },

        /**
         * ui-bootstrap-tpls dependency
         * @type {object}
         * @property {Array} deps       - These script dependencies should be loaded before loading ui-bootstrap-tpls
         */
        'ui-bootstrap-tpls': {
            deps: ['angular']
        }
    }
};
