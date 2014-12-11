define(function (require, exports, module) {
    'use strict';
    var libraryModule = require('./module');
    module.exports = libraryModule.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {


        // Now set up the states
        $stateProvider.state('library', {
            url: '/library',
            views: {
                'main': {
                    templateUrl: '../src/library/template.html',
                    controller: 'LibraryController'
                }
            }
        });


        $locationProvider.html5Mode(true);

        // For any unmatched url, redirect to /
        $urlRouterProvider.otherwise('/');
        //
    });


});