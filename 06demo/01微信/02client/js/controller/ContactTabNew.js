app.controller("ContactTabNew",function ($scope,$ionicHistory,$http,$window) {

    $scope.title="新页面";
    $scope.back=function () {
        $ionicHistory.goBack();
    }
});