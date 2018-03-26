app.controller("TitleController",function ($state,$scope, $ionicPopover,$ionicModal) {

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

    $scope.searchAction=function () {
        $scope.searchView.show()
    }
    $scope.addAction=function ($event) {
        $scope.popover.show($event);
    }
    
    $scope.toPage=function () {
        console.log("tabs.new");
        $state.go("new");
    }
});