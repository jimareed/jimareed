var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
  $scope.title = "Jim Reed";
  $scope.bioSummary = "Software development manager in Ottawa Canada, enjoys building strong teams and developing cloud products.";
  $scope.projectDescription = "Here are some personal projects that help me keep up to date with cloud technologies including: AWS, Docker, JavaScript, Node.js, AngularJS, and MongoDB.";
  $scope.project1Url = "http://www.chordsequence.com";
  $scope.project2Url = "https://github.com/jimareed/docker-deployer";
  $scope.project3Url = "https://github.com/jimareed/slack-if-site-down";
  $scope.githubUserId = "jimareed";
  $scope.linkedinUserId = "jimareed";
});
