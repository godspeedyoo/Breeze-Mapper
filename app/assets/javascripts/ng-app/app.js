angular
.module('myApp', [
    'ngAnimate',
    'ui.router',
    'templates',
    'chart.js',
    'ui.bootstrap'
])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 
    function ($stateProvider, $urlRouterProvider, $locationProvider) {

$stateProvider
    .state('home', {
        url: '',
        views: {
            // target root 
            '@': { templateUrl: 'home.html'},
            // target test section of home page
            'maps@home': { 
                templateUrl: 'maps.html',
                controller: 'MapCtrl'
            },
            'control@home': { 
                templateUrl: 'control-panel.html',
                controller: 'CtrlPanelCtrl'
            },
            // target chart section of home page
            'charts@home': { templateUrl: 'charts.html' 
            },
            'transactions@home': {
                templateUrl: 'charts.transactions.html',
                controller: 'TransactionCtrl'
            },
            'users@home': {
                templateUrl: 'charts.users.html',
                controller: 'UserTabCtrl'
            }

        }
    })
    .state('about', {
        url: '/about',
        templateUrl: 'about.html'
    });
// default fall back route
$urlRouterProvider.otherwise('');

// enable HTML5 Mode for SEO
// $locationProvider.html5Mode(true);
}])
.run(['$rootScope', '$state', '$stateParams', 'dataService',
  function ($rootScope, $state, $stateParams, dataService) {
    // used for debugging and checking on $state throughout app
    // $rootScope.$state = $state;
    // $rootScope.$stateParams = $stateParams;

    $state.go('home');

    // Initialize app by eager loading relevant data
    dataService.getData();
  }]);