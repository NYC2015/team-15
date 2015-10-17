var app = angular.module('app', []);
var controllers = {};
var factories = {};
app.controller(controllers);
app.factory(factories);


controllers.MainController = function ($scope, MainFact, $http){

	$scope.balls = "taufiq";
	
	function getPosts () {
		$http.get('api/getPosts', function (data){
			alert(data);
			$scope.allPosts = data;
			$scope.$apply();
		});
	} getPosts();

	$scope.addNewPost = function () {
		$http.post('api/newPost', $scope.newPost).success(getPosts);
		$scope.newPost = {};
	}

}







factories.MainFact = function ($http){
	var services = {};
	
	return services;
}