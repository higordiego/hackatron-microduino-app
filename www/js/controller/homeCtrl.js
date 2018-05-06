(function () {
    'use strict';
    app.controller('HomeCtrl', ['$scope', 'StudentFactory','$ionicLoading','$state'
    , function ($scope, StudentFactory, $ionicLoading, $state) {

        $scope.students = []


        $scope.listStudents = function() {
            $ionicLoading.show()
            StudentFactory.list().then(function (response) {
                $ionicLoading.hide()
                $scope.students = response.data
            }, function (err) {
                $state.go('login')
            })
        }

        $scope.doRefresh = function () {
            $scope.listStudents()
            $scope.$broadcast('scroll.refreshComplete');
        }
    }])
})();