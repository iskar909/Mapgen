'use strict';

mapgenApp.controller('MapController', function ($scope, resolvedMap, Map, resolvedMapVersion) {

        $scope.maps = resolvedMap;
        $scope.mapVersions = resolvedMapVersion;

        $scope.create = function () {
            Map.save($scope.map,
                function () {
                    $scope.maps = Map.query();
                    $('#saveMapModal').modal('hide');
                    $scope.clear();
                });
        };

        $scope.update = function (id) {
            $scope.map = Map.get({id: id});
            $('#saveMapModal').modal('show');
        };

        $scope.delete = function (id) {
            Map.delete({id: id},
                function () {
                    $scope.maps = Map.query();
                });
        };

        $scope.clear = function () {
            $scope.map = {id: null};
        };
    });
