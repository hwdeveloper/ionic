app.controller("WeiXinTabCtrl",function ($scope,$http) {

    var url ="http://192.168.5.101:8088/index";


    $http({
        method: 'GET',
        url: url
    }).then(function successCallback(response) {
       $scope.msgList=response.data.subjects;

    }, function errorCallback(response) {
        // 请求失败执行代码
    });

});