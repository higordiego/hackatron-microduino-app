(function () {
  'use strict';

  app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: 'templates/login.html',
        controller: 'AuthCtrl'
      })

      $stateProvider
      .state('forgot', {
        url: '/forgot',
        templateUrl: 'templates/forgot.html',
        controller: 'ForgotCtrl'
      })

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'MenuCtrl'
      })

      .state('app.home', {
        url: '/home',
        cache: false,
        views: {
          'menuContent': {
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'
          }
        }
      })

      .state('app.reports', {
        url: '/reports',
        cache: false,
        views: {
          'menuContent': {
            templateUrl: 'templates/reports.html',
            controller: 'ReportsCtrl'
          }
        }
      })

      .state('app.trigger', {
        url: '/trigger',
        cache: false,
        views: {
          'menuContent': {
            templateUrl: 'templates/trigger.html',
            controller: 'TriggerCtrl'
          }
        }
      })

      .state('app.detailsTrigger', {
        url: '/detailsTrigger/:description',
        cache: false,
        views: {
          'menuContent': {
            templateUrl: 'templates/detailsTrigger.html',
            controller: 'TriggerDetailsCtrl'
          }
        }
      })



    $urlRouterProvider.otherwise('/');
  });
})();