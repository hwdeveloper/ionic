app.controller("WeiXinTabCtrl",function ($state,$scope,$http) {

    var url ="http://localhost:8088/top250";


    $http({
        method: 'GET',
        url: url
    }).then(function successCallback(response) {
       $scope.msgList=response.data.subjects;

    }, function errorCallback(response) {
        // 请求失败执行代码
    });

    $scope.toPage=function () {

        $state.go("tabs.contact");
        console.log("新页面22");
    }

});