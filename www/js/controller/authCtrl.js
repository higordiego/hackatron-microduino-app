(function () {
    'use strict';
    app.controller('AuthCtrl', ['$scope', 'AuthService', '$state' , '$ionicPopup', '$ionicLoading', '$location'
        , function ($scope, AuthService, $state, $ionicPopup, $ionicLoading, $location) {


            $scope.user = {
                cpf: '03506838326',
                password: '123456'
            }

            function showAlert() {
                $ionicPopup.alert({
                    title: 'Falha na Autenticação',
                    template: 'Login ou Senha incorretos!'
                })
                $scope.user.password = ''
            }

            function isUser() {
                if (AuthService.getToken()) $state.go('app.home')
            }

            isUser()

            $scope.authenticate = function (user) {
                $ionicLoading.show();
                AuthService.signin(user).then(function (response) {
                    if (response.data) {
                        $ionicLoading.hide();
                        AuthService.setToken(response.data.token)
                        delete $scope.user
                        $state.go('app.home')
                    } else {
                        $scope.user.password = ''
                    }
                }, function (err) {
                    $ionicLoading.hide();
                    showAlert()
                    $scope.user.password = ''

                })
            }
        }])
})();