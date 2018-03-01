var dependences = ["jquery", "angular", 'commonService'];
define(dependences, function() {

    /**
     * Common filter handling
     * @exports CommonFilter
     */
    var CommonFilter = angular.module("MainApp.common.filter", ['MainApp.common.service']);

    /**
     * Show date time with yyyy/MM/dd hh:mm format
     * @param  {String} input: date time
     * @return {String} The formatted date
     */
    CommonFilter.filter("showLastUpdate", function(CommonModel) {
        return function(input) {

            input = input || "";

            // 2017-01-01 00:00:01
            var a = input.trim().split(":");
            if (a.length === 1) {
                return input;
            }
            
            return a[0] + ':' + a[1];
        };
    });

});