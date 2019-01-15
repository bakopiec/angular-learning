angular
.module('contactsMgr', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        controller: 'indexCtrl',
        templateUrl: 'assets/partials/index.html'
    })
    .when('/add-contact', {
        controller: 'addCtrl',
        templateUrl: 'assets/partials/add.html'
    })
    .when('/contact/:id', {
        controller: 'contactCtrl',
        templateUrl: 'assets/partials/contact.html'
    })
    .otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
})
// .controller('AppCtrl', function($scope, $filter, jsonFilter) {
//     $scope.isHidden = false;
//     $scope.clickHandler = function() {
//         $scope.isHidden = !$scope.isHidden;
//     }
//     $scope.contacts = [
//         {
//             name: 'Janko Walski',
//             phone: '01234567890', 
//             email: 'Janko@walski.com'
//         },
//         {
//             name: 'Karen Nerka',
//             phone: '0987654321',
//             email: 'karenn@email.com'
//         }
//     ];
//     $scope.center = false;
//     $scope.error = true;
//     $scope.styleDemo = function() {
//         if (!$scope.styler) {
//             return;
//         }
//         return {
//             background: 'red',
//             fontWeight: 'bold'
//         };
//     };
//     var result = $filter('truncate')('lasdkflasflsddf', 10);
//     console.log(result);
// })
.controller('indexCtrl', function($scope, $rootScope) {
    $rootScope.contacts = [
        {
            name:'Stefan Autorski',
            phone:'01234543210',
            address:'al.Inna 12\nKrzyżówkowo\n11-111',
            email:'steve228uk@gmail.com',
            website:'stefanautorski.to'
        },
        {
            name:'Janko Walski',
            phone:'0123456789',
            address:'Zagadkowa 123\nSzaradaDuża\n10-010 Polska',
            email:'janko@walski.com',
            website:'http://janko-walski.info',
            notes:'Kilka słów na temat Janko'
        }
    ];
    $scope.contacts = $rootScope.contacts;
})
.controller('addCtrl', function($scope) {

})
.controller('contactCtrl', function($scope, $routeParams) {
    console.log($routeParams);
})
.filter('truncate', function() {
    return function(input, limit) {
        return (input.length > limit) ? input.substr(0, limit) + '...' : input;
    };
});
