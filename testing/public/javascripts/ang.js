var app = angular.module('app', []);
var controllers = {};
var factories = {};
app.controller(controllers);
app.factory(factories);


controllers.MainController = function ($scope, MainFact, $http){

	$scope.mode = 0;
	
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
	};

	function getClinics () {
		$http.get('api/getClinics', function(data){
			alert(data);
			$scope.allClinics = data;
			$scope.$apply();
		});
	} getClinics();

	$scope.addNewClinic = function () {
		$http.post('api/newClinic', $scope.newClinic).success(getClinics);
		$scope.newClinic = {};
	};

	function getDoctors () {
		$http.get('api/getDoctors', function(data){
			alert(data);
			$scope.allDoctors = data;
			$scope.$apply();
		});
	} getDoctors();

	$scope.addNewDoctor = function () {
		$http.post('api/newDoctor', $scope.newClinic).success(getClinics);
		$scope.newDoctor = {};
	};

	function getUsers () {
		$http.get('api/getUsers', function(data){
			alert(data);
			$scope.allUsers = data;
			$scope.$apply();
		});
	} getUsers();

	$scope.addNewUser = function () {
		$http.post('api/newUser', $scope.newUser).success(getUsers);
		$scope.newUser = {};
	};

}


factories.MainFact = function ($http){
	var services = {};
	
	return services;
}