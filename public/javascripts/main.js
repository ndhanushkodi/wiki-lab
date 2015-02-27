//this is what ng-app will be
var wikiParty = angular.module('wikiParty', ['ngRoute']);

wikiParty.config(function($routeProvider) {
    $routeProvider
		// route for the home page
        .when('/pages', {
            templateUrl : '../pages/pages.html',
            controller  : 'mainController'
        });
        console.log('routeProvider');
    });

//this is the controller
// function mainController($scope, $http){
// 	console.log('controller');
// 	$scope.message = 'hey im a controller';
// 	$http.get('/api/pages')
// 		.success(function(data){
// 			$scope.pages = data;
// 			console.log(data);
// 		})
// 		.error(function(data){
// 			console.log('Error: ' + data);
// 		});

// };

wikiParty.controller('mainController', function($scope){
	$scope.message = 'heyeheyeh';
});