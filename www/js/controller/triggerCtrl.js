(function () {
    'use strict';
    app.controller('TriggerCtrl', ['$scope', '$state', 'TriggerFactory',  function ($scope, $state, TriggerFactory) {

        $scope.triggers = []
        $scope.triggersFn = function() {
            TriggerFactory.list().then(function(response) {
                $scope.triggers = response.data
            }, function (err) {
                $state.go('login')
            })
        }

        $scope.triggerAdd = function(trigger) {
            $state.go('app.detailsTrigger', {description: trigger.description})
        }

        

        $scope.doRefresh = function () {
            $scope.triggersFn()
            $scope.$broadcast('scroll.refreshComplete');
        }

    }])
})();   