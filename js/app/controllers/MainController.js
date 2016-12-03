function MainController($scope) {
  $scope.name = 'Jaclyn';
  $scope.email = 'jbok4@aol.com';

}


angular
  .module('app')
  .controller('MainController', MainController);