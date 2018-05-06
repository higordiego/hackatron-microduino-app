(function () {
    'use strict'
    app.factory('AuthService', ['$http', '$localStorage', '$q', '$window', 'Config',
      function ($http, $localStorage, $q, $window, Config) {
        return {
          getToken: function () {
            return $localStorage.token;
          },
          setToken: function (token) {
            $localStorage.token = token;
          },
          forgot: function (data) {
            return $http.post(Config.api + 'users/forgot', data)
          },
          signin: function (data) {
            return $http.post(Config.api + 'authenticate', data);
          },
          logout: function () {
            $http.get(Config.api + 'logout').then(function(response ){ delete $localStorage.token })
            
          },
          me: function () {
            return $http.get(Config.api + 'me')
          }
        };
      }]);
  })();
  