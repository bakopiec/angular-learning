angular
.module('App', [])
.controller('AppCtrl', function($scope) {
    $scope.isHidden = false;
    $scope.clickHandler = function() {
        $scope.isHidden = !$scope.isHidden;
    }
    $scope.contacts = [
        {
            name: 'Janko Walski',
            phone: '01234567890', 
            email: 'Janko@walski.com'
        },
        {
            name: 'Karen Nerka',
            phone: '0987654321',
            email: 'karenn@email.com'
        }
    ];
    $scope.center = false;
    $scope.error = true;
    $scope.styleDemo = function() {
        if (!$scope.styler) {
            return;
        }
        return {
            background: 'red',
            fontWeight: 'bold'
        };
    };
    
});         