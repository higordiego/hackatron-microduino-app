(function () {
    'use strict';
    app.controller('ReportsCtrl', ['$scope', '$state', function ($scope, $state) {
        $scope.myChartObject = {};
        $scope.myChartObject.type = "PieChart";

        $scope.reports = function () {
            $scope.myChartObject.data = {
                "cols": [
                    { id: "t", label: "Topping", type: "string" },
                    { id: "s", label: "Slices", type: "number" }
                ], "rows": [
                    {
                        c: [
                            { v: "Entenderam" },
                            { v: Math.random(10) },
                        ]
                    },
                    {
                        c: [
                            { v: "Não Entenderam" },
                            { v: Math.random(10) },
                        ]
                    },
                    {
                        c: [
                            { v: "Exemplo!" },
                            { v: Math.random(10) }
                        ]
                    },
                ]
            };
            $scope.myChartObject.options = { 'title': 'Relatório de Desempenho' };
        }
    

        $scope.trigger = function() {
            $state.go('trigger')
        }

        $scope.doRefresh = function () {
            $scope.reports()
            $scope.$broadcast('scroll.refreshComplete');
        }
    }])
}) ();