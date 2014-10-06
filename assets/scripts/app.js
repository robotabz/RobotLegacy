'use strict';

var tabzApp = angular.module('RobotLegacyApp',
    [
        'ui.router',
        //'ngAnimate',
        'ui.bootstrap'
    ]);

tabzApp.config(function($stateProvider, $urlRouterProvider, $injector, $provide, $httpProvider) {

    $stateProvider

    // top-level state: robot
        .state('robot', {
            url: "/",
            abstract: true,
            //templateUrl: "views/robot.html"
            template: '<ui-view>'
            //controller: robotCtrl,
            //resolve: $injector.get('RobotCtrlResolveMap')
        })

        .state('robot.home', {
            url: "^/home",
            templateUrl: "views/home.html"
            //controller: 'HomeCtrl',
            //resolve: $injector.get('RobotCtrlResolveMap')
        })

        .state('robot.birds', {
            url: "^/birds",
            templateUrl: "views/birds.html",
            controller: 'BirdsCtrl'
            //resolve: $injector.get('RobotCtrlResolveMap')
        })

        .state('robot.projects', {
            url: "^/projects",
            templateUrl: "views/projects.html"
            //controller: 'BirdsCtrl'
            //resolve: $injector.get('RobotCtrlResolveMap')
        })

        .state('robot.about', {
            url: "^/about",
            templateUrl: "views/about.html"
            //controller: 'HomeCtrl',
            //resolve: $injector.get('RobotCtrlResolveMap')
        })

        .state('404', {
            url: "/404",
            templateUrl: "views/404.html"
            //controller: robotCtrl,
            //resolve: $injector.get('RobotCtrlResolveMap')
        })

    $urlRouterProvider.otherwise("/home");
});