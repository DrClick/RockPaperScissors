define(function (require, exports, module) {
    'use strict';
    var mod = require('./module');
    module.exports = mod.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {


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
    });
});