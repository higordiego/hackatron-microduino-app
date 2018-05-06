(function () {
    'use strict';
    app.controller('MenuCtrl', ['$scope', '$state','AuthService',  function ($scope, $state, AuthService) {

        $scope.logout = function () {
            AuthService.logout()
            $state.go('login')
        }

    }])
})();