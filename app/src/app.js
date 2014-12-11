define(function (require, exports, module) {
    var angular = require('angular');
    var Dijkstras = require('./Dijkstras');

    var app = angular.module('app', []);
    app.controller('dynamicDataController', function ($scope) {

        $scope.foo = 'bar';

        var graph = {
            0: {edges: {1: 4, 7: 8}},
            1: {edges: {2: 8, 7: 11}},
            2: {edges: {8: 2, 3: 7}},
            3: {edges: {4: 9, 5: 14}},
            4: {edges: {}},
            5: {edges: {2: 4}},
            6: {edges: {5: 2, 8: 6}},
            7: {edges: {6: 1}},
            8: {edges: {7: 7}}
        };
        var algo = new Dijkstras(graph);
        $scope.result = algo.calc(0,4);

    });
    app.directive('interviewDirective', function () {
        return {
            template: '<input value="{{foo}}">'
        }
    });



    module.exports = app;

});


