app.controller("TitleController",function ($state,$scope,$cacheFactory,$ionicPopover,$ionicModal) {

    $ionicPopover.fromTemplateUrl('templates/addActionView.html', {
        scope: $scope
    }).then(function(popover) {
        $scope.popover = popover;
    });

    $ionicModal.fromTemplateUrl('templates/SearchView.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.searchView = modal;
    });

    $scope.hideSearchView=function () {

        $scope.searchView.hide();
    }


    $scope.searchAction=function () {
        $scope.infor="哈哈w4y6ertjfyj";
        $scope.searchView.show()
    }
    $scope.addAction=function ($event) {
        $scope.popover.show($event);
    }
    
    $scope.loginAction=function () {
        //获得名字
      var name=  $scope.name;
      console.log(name);
        $scope.hideSearchView();
    }
    
    $scope.toPage=function () {
        $state.go("new");
    }
});