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
        .state('tabs.mine', {
        url: "/mine",
        views: {
            'mine-tab': {
                templateUrl: "templates/mine.html"
            }
        }
    });


    $urlRouterProvider.otherwise("/tab/contact");

})
