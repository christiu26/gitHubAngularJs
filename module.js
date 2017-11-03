(function() {

  var app = angular.module("githubViewer", ["ngRoute"]);

  app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when("/main", {
          templateUrl: "main.html",
          controller: "MainController"
        })
        .when("/user/:username", {
          templateUrl: "user.html",
          controller: "UserController"
        })
        .when("/repo/:username/:reponame", {
          templateUrl: "repo.html",
          controller: "RepoController"
        })
        .otherwise({
          redirectTo: "/main"
        });

      //if(window.history && window.history.pushState){
      //$locationProvider.html5Mode({
             //enabled: true,
             //requireBase: false
      //});
      //}
    }
  ]);

}());