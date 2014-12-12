define(function(require, exports, module) {
    'use strict';
    var libraryModule = require('./module');
    module.exports = libraryModule.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',function($stateProvider, $urlRouterProvider, $locationProvider) {


        // Now set up the states
        $stateProvider.state('home', {
            url: '/',
            views: {
                'main': {
                    templateUrl: '../src/home/template.html',
                    controller: 'HomeController'
                }
            }
        });


        $locationProvider.html5Mode(true);

        // For any unmatched url, redirect to /
        $urlRouterProvider.otherwise('/');
    }]);
});
