angular
.module('App', [])
.controller('AppCtrl', function($scope) {
    $scope.isHidden = false;
    $scope.clickHandler = function() {
        $scope.isHidden = !$scope.isHidden;
    }
});