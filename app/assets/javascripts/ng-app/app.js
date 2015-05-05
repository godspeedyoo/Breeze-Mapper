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
            url: '',
            views: {
                // target root 
                '@': { templateUrl: 'home.html'},
                // target test section of home page
                'test@home': { templateUrl: 'test.html' },
                'control@home': { templateUrl: 'control-panel.html'},
                // target chart section of home page
                'charts@home': { templateUrl: 'charts.html' }
            }
        })
        .state('home.transactions', {
            url: '/transactions',
            templateUrl: 'charts.transactions.html',
            controller: 'TransactionCtrl'
        })
        .state('home.users', {
            url: '/users',
            templateUrl: 'charts.users.html',
            controller: 'UserCtrl'
        })
        .state('home.locations', {
            url: '/locations',
            templateUrl: 'charts.locations.html',
            controller: 'LocationCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'about.html'
        });
    // default fall back route
    $urlRouterProvider.otherwise('');

    // enable HTML5 Mode for SEO
    // $locationProvider.html5Mode(true);
})
.run(['$rootScope', '$state', '$stateParams',
      function ($rootScope, $state, $stateParams) {
      // It's very handy to add references to $state and $stateParams to the $rootScope
      // so that you can access them from any scope within your applications.For example,
      // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
      // to active whenever 'contacts.list' or one of its decendents is active.
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $state.go('home');
      }]);