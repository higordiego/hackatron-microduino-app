(function() {
    'use strict'
    app.controller('TriggerDetailsCtrl', ['$scope','$state', function($scope, $state) {
        
        $scope.trigger = $state.params
    }])
})();