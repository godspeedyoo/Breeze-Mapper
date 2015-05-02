angular
    .module('myApp', [
        'ngAnimate',
        'ui.router',
        'templates',
        'chart.js',
        'ui.bootstrap'
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
                    templateUrl: 'home.html' 
                },

                'chart@home': { 
                    templateUrl: 'charts.html'
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