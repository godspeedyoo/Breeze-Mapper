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
    // default fall back route
    $urlRouterProvider.otherwise('/');

    // enable HTML5 Mode for SEO
    // $locationProvider.html5Mode(true);
})
.run(function($rootScope) {

    $rootScope.UTIL = {
        // returns suppressed labels due to lack of grouping
        // of data label points in chartjs library.
        // This allows for inefficient use of space in array elements 
        // that are used as spacers and can be concern in a large 
        // data set. 
        suppressLabels: function(chartLabels, div) {
            var suppressMod = parseInt(chartLabels.length / div);
            var suppressed = [];
            chartLabels.forEach(function(el, i, arr) {
                if (i % suppressMod != 0) { suppressed.push("") }
                else { suppressed.push(el) }
            });
            return suppressed;
        }
    };
});