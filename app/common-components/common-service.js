var dependences = ['jquery', 'angular', 'ui-bootstrap-tpls', 'angularSanitize', 'angularToast', 'config'];
define(dependences, function($, angular) {

    /* Common service
     * @exports CommonService
     */
    var CommonService = angular.module('MainApp.common.service', ['ui.bootstrap']);

    /**
     * Creating Model
     *
     * @param  {Object} $rootScope      Angular rootScope
     * @param  {Object} $modal          Angular Bootstrap Modal
     * @param  {Object} $filter         Angular filter service
     * @return {Object} serviceCommon
     */
    CommonService.factory('CommonModel', function($rootScope, $modal, $filter) {

        var serviceCommon = {};

        serviceCommon.arraysIdentical = function(a, b) {
            var i = a.length;
            if (i != b.length) return false;
            while (i--) {
                if (a[i] !== b[i]) return false;
            }
            return true;
        };

        return serviceCommon;
    });

    /**
     * Creating Dialog
     * @param  {Object} $modal          Angular Bootstrap Modal
     * @param  {Object} $rootScope      Angular rootScope
     * @param  {Object} CommonModel     common function and variable
     * @return {Object} publicObject
     */
    CommonService.factory('CommonDialog', function($modal, $rootScope, CommonModel) {

        var publicObject = {

            createDialog: function(param) {

                $('.hideOverflow').css('overflow', 'hidden');

                var dialog = {
                    type: param.dialogType.type,
                    okCb: (param.dialogType.okCb) ? param.dialogType.okCb : undefined,
                    dataModel: param.dataModel
                };

                createDialog(dialog);

                function createDialog(dialog) {
                    var modalInstance = $modal.open({
                        animation: true,
                        windowClass: (param.windowClass) ? param.windowClass : null,
                        openedClass: param.openedClass,
                        templateUrl: param.templateUrl,
                        backdrop: 'static',
                        controller: param.controller,
                        size: (param.size) ? param.size : 'lg',
                        resolve: {
                            passingData: function() {
                                return dialog;
                            }
                        }
                    });

                    modalInstance.result.then(function(dataResponse) {
                        $('body').removeClass('hideScroll');
                        $('.hideOverflow').css({ "overflow-y": "auto", "overflow-x": "hidden" });

                        // call method into scope with same name of dialog.okCb forEx: dialog.okCb.methodName(dataModal)
                        if (dataResponse && dataResponse.okCb && param.context[dataResponse.okCb]) param.context[dataResponse.okCb](dataResponse.dataModel);
                    }, function() {
                        $('body').removeClass('hideScroll');
                        $('.hideOverflow').css({ "overflow-y": "auto", "overflow-x": "hidden" });
                    });
                }
            }
        };

        return publicObject;
    });

});
