var dependences = [
    'jquery',
    'angular',
    'ui-bootstrap-tpls',
    'commonService',
    'applicationService'
];

define(dependences, function() {

    /**
     * Define application operation controller
     * @exports ApplicationManager
     */
    var ApplicationManager = angular.module('MainApp.application', [
        'ui.bootstrap',
        'MainApp.common.service',
        'MainApp.application.service'
    ]);

    /**
     * * Application controller
     *  - Run/Stop Application
     *  - handle callback
     *  - show dialog when run/stop application
     *  - Init page
     * @param  {Object} $scope             [Angular scope]
     * @param  {Object} $rootScope         [Angular root scope]
     * @param  {Object} $location          [Location]
     * @param  {Object} CommonModel        [common function and variable]
     * @param  {Object} CommonDialog       [common modal instance]
     * @param  {Object} ApplicationService [MainApp.application service]
     * @return {none}                    [description]
     */
    ApplicationManager.controller('MainApp.application.controller', function($scope, $rootScope, $location, CommonModel, CommonDialog, ApplicationService) {
        var self = this;

        /**
         * Dialog
         * @type {Object}
         * @property {object} update - info update dialog
         */
        $scope.dialogTypes = {
            update: {
                type: 'update',
                okCb: 'updateCb',
                templateUrl: './app/application/dialog/edit-dialog.html'
            }
        };

        /**
         * Show confirm dialog base on kind
         * @param  {Object} dialogType [Type of dialog]
         * @param  {Object} dataModel  [data to show in dialog]
         * @param  {string} size       [size of dialog]
         * @return {none}
         */
        $scope.showDialog = function(dialogType, dataModel, size) {
            CommonDialog.createDialog({
                context: $scope,
                dialogType: dialogType,
                dataModel: dataModel,
                windowClass: dialogType.windowClass || 'trick',
                size: dialogType.size || 'md',
                templateUrl: dialogType.templateUrl,
                controller: dialogType.controller || 'applicationDialogCtrl'
            });
        };

        $scope.updateCb = function(newValue) {
            if(newValue) console.log(newValue);
            // TODO: initialize page
        };

        /**
         * Init page
         * @return {none}
         */
        $scope.init = function(newValue) {
            if(newValue) console.log(newValue);
            // TODO: initialize page
        };

        /*
         * Run init page
         */
        $scope.init();

    });

    /**
     * Application dialog controller
     *  - show dialog and execute import, export, delete, rename ... for application
     *
     * @param  {object} $scope            Angular scope
     * @param  {object} $modalInstance    Angular UI modal instance
     * @param  {object} $filter           used for formatting data
     * @param  {object} CommonModel       common function and variable
     * @param  {object} ApplicationService Application services
     * @param  {object} passingData       Passing data to dialog
     * @return {none}
     */
    ApplicationManager.controller('applicationDialogCtrl', function($scope, $rootScope, $modalInstance, CommonModel, ApplicationService, passingData, CommonDialog, $location) {
        
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
            type: 'update',
            dataUpdate: "",
            init: function() {
                $scope.newAppName = $scope.dataModel;
            },
            btnExeClick: function() {
                passingData.dataModel = $scope.newAppName;
                $modalInstance.close(passingData);
            }
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