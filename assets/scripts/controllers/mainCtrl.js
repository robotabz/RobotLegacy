'use strict';

tabzApp.controller('MainCtrl', function ($scope, $log, $state, $rootScope) {

    //$log.info("MainCtrl init");

    $scope.state = $state;

    $rootScope.$on("$routeChangeStart", function(){
        $scope.loading = true;
    });

    $rootScope.$on("$routeChangeSuccess", function(){
        $scope.loading = false;
    });

});