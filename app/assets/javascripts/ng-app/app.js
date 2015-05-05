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

    $stateProvider
        .state('home', {
            url: '/',
            views: {
                '@': { templateUrl: 'home.html'},
                'test@home': { templateUrl: 'test.html' },
                'charts@home': { templateUrl: 'charts.html' }
                
            }
        })
        //     templateUrl: 'charts.html',
        //     views: {
        //         'transactions@chart': {
        //             templateUrl: 'charts.transactions.html',
        //             controller: 'TransactionCtrl'
        //         }
        //     }
        // })
        // .state('home.locations', {
        //     templateUrl: 'charts.locations.html',
        //     controller: 'LocationCtrl'
        // })
        // .state('home.users', {
        //     templateUrl: 'charts.users.html',
        //     controller: 'UserCtrl'
        // })
        .state('about', {
            url: '/about',
            templateUrl: 'about.html'
        });
    // default fall back route
    $urlRouterProvider.otherwise('/');

    // enable HTML5 Mode for SEO
    // $locationProvider.html5Mode(true);
})
.run(function($state) {
    $state.go('home');
});