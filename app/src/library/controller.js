define(function(require, exports, module) {
    'use strict';

    require('lodash');
    var mod = require('./module');

    //bind this controller to the module
    mod.controller('LibraryController', ['$scope', Controller]);

    function Controller($scope) {
        //mixins the controller into scope,
        //dont mess with this
        _.extend($scope, Object.getPrototypeOf(this));
        _create.call($scope);
        _init.call($scope);
    }

    function _create() {
        //set up all the properties here
        this.fooBar = 'world';
    }

    function _init() {
        //this is where you put code to initialize things, for instance make call to services to get data or something of that nature
    }

    Controller.prototype.foo = function() {
        return this.fooBar;
    };

});
