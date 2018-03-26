app.controller("FindTabCtrl",function ($scope,$http) {
    var url ="http://192.168.5.101:8080/top250";
    $http({
        method: 'GET',
        url: url
    }).then(function successCallback(response) {

        $scope.topList=response.data.data.subjects;
        console.log($scope.topList);
    }, function errorCallback(response) {
        // 请求失败执行代码
    });
});