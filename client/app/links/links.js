angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, link) {
  // Your code here
  $scope.data = {};


  $scope.data.links = link;

});
// after controller is loaded