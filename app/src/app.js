define(function (require, exports, module) {
    var angular = require('angular');

    //application module files
    require('./library/index');


    //angular dependencies
    require('angular-ui-router');





    module.exports = angular.module('app', [
        //angular modules
        'ui.router',

        //application modules
        'app.library'
    ]);

});


