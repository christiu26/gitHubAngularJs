// Code goes here

(function() {
  
  var module = angular.module("githubViewer");

  var MainController = function($scope, $location) {
    
    $scope.search = function(username){
      //$log.info("Searching for " + username);
      //github.getUser(username).then(onUserComplete, onError);
      
      $location.path("/user/" + username);
    };

    $scope.username = "angular";
    //$scope.message = "GitHub Viewer";
    $scope.repoSortOrder = "-stargazers_count";
  };
  
  module.controller("MainController", MainController);
  
}());