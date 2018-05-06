(function() {
    'use strict';
    app.controller('ForgotCtrl', ['$scope','$state','AuthService','$ionicPopup', '$ionicLoading'
    , function($scope, $state, AuthService, $ionicPopup, $ionicLoading) {

        $scope.return = function() {
            $state.go('login')
        }

        $scope.forgot = function () {
            
        }

        function showAlert() {
            $ionicPopup.alert({
                title: 'Error',
                template: 'CPF inexistente!'
            })
            $scope.user.cpf= ''
        }

        $scope.forgot = function(user) {
            $ionicLoading.show()
            AuthService.forgot(user).then(function(response) {
                $ionicLoading.hide()
                $state.go('login')
            }, function(err) {
                showAlert()
                $ionicLoading.hide()
            })
        }

        $scope.GoBack = function() {
            $state.go('login')
        }
        
    }])
})();