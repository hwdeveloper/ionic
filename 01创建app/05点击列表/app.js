/**
 * Created by boy on 2018/1/12.
 */
var app=angular.module('app', ['ionic']);

app.controller("controller",function ($scope,$ionicSideMenuDelegate,$ionicModal) {


    $scope.courses=[ { title: 'bootstrap' },
        { id:1,title: 'nodejs' },

        { id:8,title: 'angular' },

        {id:6, title: 'ionic' }];
    $scope.content=$scope.courses[0].title;
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



    $scope.selectProject = function(course, index) {

        var id=course.id;
        //1 ，请求网络数据
        //2,把网络数据给当前的页面
        $scope.content=course.title;
        $ionicSideMenuDelegate.toggleLeft(false);
    };
});