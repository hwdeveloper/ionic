app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('tabs', {
            url: "/tab",
            abstract: true,
            templateUrl: "templates/tabs.html"
        })
        .state('tabs.home', {
            url: "/home",
            views: {
                'home-tab': {
                    templateUrl: "templates/home.html",
                    controller: 'WeiXinTabCtrl'
                }
            }
        })
        .state('tabs.cosplay', {
            url: "/cosplay",
            views: {
                'cosplay-tab': {
                    templateUrl: "templates/cosplay.html",
                    controller: 'CosplayController'
                }
            }
        })
        .state('tabs.find', {
            url: "/find",
            views: {
                'find-tab': {
                    templateUrl: "templates/find.html",
                    controller: 'FindTabCtrl'
                }
            }
        })
        .state('tabs.contact', {
            url: "/contact",
            views: {
                'contact-tab': {
                    templateUrl: "templates/contact.html",
                    controller: 'ContactTabCtrl'
                }
            }
        })
        .state("new", {
            templateUrl: "templates/newPage.html",
            url: "new",
            controller: "ContactTabNew"
        })
        .state('tabs.mine', {
        url: "/mine",
        views: {
            'mine-tab': {
                templateUrl: "templates/home.html"
            }
        }
    });


    $urlRouterProvider.otherwise("/tab/home");

})
