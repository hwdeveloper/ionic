/**
 * Created by boy on 2018/1/12.
 */
var app=angular.module('app', ['ionic']);

app.controller("controller",function ($scope) {

    $scope.courses=[ { title: 'bootstrap' },
        { title: 'nodejs' },
        { title: 'express' },
        { title: '微信小程序' },
        { title: 'angular' },
        { title: 'ionic' }];
});