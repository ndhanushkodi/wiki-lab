//this is what ng-app will be
var wikiParty = angular.module('wikiParty', ['ngRoute']);

wikiParty.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : '../pages/home.html',
            controller  : 'mainController'
        })
        .when('/pages', {
        	templateUrl : '../pages/pages.html',
        	controller : 'pagesController'
        })
        .when('/add', {
        	templateUrl : '../pages/add.html',
        	controller : 'addController'
        });

});

wikiParty.controller('mainController', function($scope, $http){
	$scope.message = 'main controller';
	$http.get('/api/')
		.success(function(data){
			$scope.pages = data;
			console.log(data);
		})
		.error(function(data){
			console.log('Error: ' + data);
		});
});

wikiParty.controller('pagesController', function($scope, $http) {
	$scope.msg = "pages controller";
	$http.get('/api/pages')
		.success(function(data){
			$scope.pages = data;
			$scope.name = data[0].name;
			console.log("The name is " + data[0].name);
		})
		.error(function(data){
			console.log('Error: ' + data);
		});
	
});

wikiParty.controller('addController', function($scope, $http) {
	$scope.formData = {};

	$scope.msg = "add controller";

	$scope.addPage = function () {
			$http.post('/api/addTopic', $scope.formData)
		.success(function(data){
			$scope.formData = {};
			console.log("Successfully posted new page!");
		})
		.error(function(data) {
			console.log("Error: " + data);
		});

	};

});




