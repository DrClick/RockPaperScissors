define(function(require, exports, module) {
    'use strict';
    var angular = require('angular');

    //application module files
    require('./modules/home/_index');
    require('./services/_index');


    //angular dependencies
    require('angular-ui-router');
    require('angular-bootstrap');
    require('famous-angular');
    require('angular-ui-router');
    require('angular-ui-utils');
    require('angular-animate');
    require('angular-scroll');


    module.exports = angular.module('app', [
        //angular modules
        'duScroll',
        'ngAnimate',
        'ui.bootstrap',
        'ui.router',
        'ui.keypress',
        'famous.angular',

        //application modules
        'app.services',
        'app.home'
    ]);

});
