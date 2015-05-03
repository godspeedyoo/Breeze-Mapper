angular
    .module('myApp', [
        'ngAnimate',
        'ui.router',
        'templates',
        'chart.js',
        'ui.bootstrap',
        'angularSlideables'
    ])
.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    /**
     * Routes and States
     */
    $stateProvider
        .state('home', {
            url: '/',
            views: {
                '': { 
                    templateUrl: 'home.html',
                    controller: 'HomeCtrl'
                },

                'chart@home': { 
                    templateUrl: 'charts.html',
                    controller: 'ChartCtrl'
                }
            }
        })
        .state('about', {
            url: '/about',
            templateUrl: 'about.html'
        });


            // views: {
            //     'filters': {
            //         templateUrl: 'templates/filters.html',
            //         controller: 'FilterCtrl'
            //     },
            //     'charts': {
            //         templateUrl: 'home.html',
            //         controller: 'HomeCtrl'
            //     }
            // }

    // default fall back route
    $urlRouterProvider.otherwise('/');

    // enable HTML5 Mode for SEO
    // $locationProvider.html5Mode(true);
});