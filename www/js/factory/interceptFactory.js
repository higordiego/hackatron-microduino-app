(function () {
  'use strict'
  app.factory('AuthInterceptor', ['$q', '$location', '$localStorage', function ($q, $location, $localStorage) {

    return {
      request: function (config) {
        config.headers = config.headers || {};
        config.headers['token'] = $localStorage.token;
        return config;
      },
      responseError: function (response) {
        if (response.status === 401 || response.status === 403 || response.status === 500) {
          $location.path('#/');
        }
        return $q.reject(response);
      }
    };
  }])

  app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
  });
})();
