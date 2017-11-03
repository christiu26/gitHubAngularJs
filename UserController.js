// Code goes here

(function() {
  
  var app = angular.module("githubViewer");

  var UserController = function($scope, github, $routeParams, $location) {
    $scope.message = "Hello, Angular!";

    var onUserComplete = function(data) {
      $scope.user = data;
      github.getRepos($scope.user).then(onRepos, onError);
    };
    
    var onRepos = function(data){
      $scope.repos = data;
    };

    var onError = function(reason) {
      $scope.error = "Could not fetch the data.";
    };

    $scope.search = function(username,reponame){
      $location.path("/repo/" + username+"/"+reponame);
    };

    $scope.username = $routeParams.username;
    $scope.repoSortOrder = "-stargazers_count";
    
    github.getUser($scope.username)
      .then(onUserComplete, onError)
  };
  
  app.controller("UserController", UserController);
  
}());