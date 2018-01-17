app.controller("ContactTabCtrl",function ($scope,$http,$window) {
    $scope.length=9;

    $scope.wHeight=$window.innerHeight;
    $scope.wWidth=$window.innerWidth;
    $scope.imgH=$scope.wWidth/4;

    $scope.array=[
        {img:'res/img/kkk.jpg',country:'Norway'},
        {img:'res/img/kkk.jpg',country:'Sweden'},
        {img:'res/img/kkk.jpg',country:'Sweden'},
        {img:'res/img/kkk.jpg',country:'Sweden'},
        {img:'res/img/kkk.jpg',country:'Sweden'},
        {img:'res/img/kkk.jpg',country:'Sweden'},
        {img:'res/img/kkk.jpg',country:'Sweden'}];
    $scope.title="通讯录哈哈";
});