﻿'use strict';
reachApp.controller('mainController', function ($rootScope, $scope, $location,$timeout) {
    //http://stackoverflow.com/questions/21715256/angularjs-event-to-call-after-content-is-loaded
    $scope.$on('$viewContentLoaded', function (args,item) {       
        console.log("$location.path() = [" + $location.path() + "]");
        $rootScope.$broadcast('view-changed', { "view": $location.path() });          
    });  

});