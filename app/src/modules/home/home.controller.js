define(function(require, exports, module) {
    'use strict';

    require('lodash');
    var mod = require('./_module');

    //bind this controller to the module
    mod.controller('HomeController', Controller);

    function Controller($state) {
        _create.call(this, {state: $state});
        _init.call(this);
    }

    Controller.$inject = ['$state'];

    function _create(services) {
        //set up all the properties here
        this.services = services;
        this.rawMessage = 'Welcome to Lumiata Angular Seed';
    }

    function _init() {
        //this is where you put code to initialize things, for instance make call to services to get data or something of that nature
    }

    //example of exposing a method
    Controller.prototype.message = function() {
        return this.rawMessage;
    };

});
