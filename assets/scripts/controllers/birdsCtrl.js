'use strict';

tabzApp.controller('BirdsCtrl', function ($scope, $log) {

    //$log.info("BirdsCtrl init");

    $scope.myInterval = 5000;

    $scope.bird_slides = [];

    var bird_list = [
        "20140529_151421.jpg",
        "20140320_120947.jpg",
        "20140304_122940.jpg",
        "20141003_073924.jpg",
        "20140907_130835.jpg"
    ];

    _.each(bird_list, function(x) {
        $scope.bird_slides.push({
            image: 'photos/' + x,
            text: x
        });
    });

});