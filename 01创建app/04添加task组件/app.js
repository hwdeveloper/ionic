/**
 * Created by boy on 2018/1/12.
 */
var app=angular.module('app', ['ionic']);

app.controller("controller",function ($scope,$ionicSideMenuDelegate,$ionicModal) {

    $scope.courses=[ { title: 'bootstrap' },
        { title: 'nodejs' },
        { title: 'express' },
        { title: '微信小程序' },
        { title: 'angular' },
        { title: 'ionic' }];

    // Create our modal
    $ionicModal.fromTemplateUrl('new-task.html', function(modal) {
        $scope.taskModal = modal;
    }, {
        scope: $scope
    });
    $scope.newTask = function() {
        $scope.taskModal.show();
    };

    $scope.closeNewTask = function() {
        $scope.taskModal.hide();
    }
    
    $scope.createTask=function (task) {
        console.log(task);
    }
});