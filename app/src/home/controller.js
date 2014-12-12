define(function(require, exports, module){
    'use strict'

    require("lodash");
    var mod = require('./module');

    //bind this controller to the module
    mod.controller('HomeController', ['$scope', '$state', Controller]);

    function Controller($scope, $state){
        //mixins the controller into scope,
        //dont mess with this
        _.extend($scope, Object.getPrototypeOf(this));
        _create.call($scope, {state: $state});
        _init.call($scope)
    }

    function _create(services){
        //set up all the properties here
        this.services = services;
        this.rawMessage = 'Welcome to the Lumiata Angular-Famous Seed'
    }

    function _init(){
        //this is where you put code to initialize things, for instance make call to services to get data or something of that nature
        this.services.state.go('home');
    }

    Controller.prototype.message = function(){
        return this.rawMessage;
    };

});