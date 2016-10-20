weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {

  $scope.city = cityService.city;

  $scope.$watch('city', function() {
    cityService.city = $scope.city;
  })

}]);

weatherApp.controller('forecastController',
  ['$scope',
  '$resource',
  '$routeParams',
  'cityService',
  'weatherService',
  function($scope, $resource, $routeParams, cityService, weatherService) {
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '2';
    $scope.weatherResults = weatherService.getWeather($scope.city, $scope.days)

    //for testing; in case we want to display additional data
    console.log($scope.weatherResults)

    $scope.convertToFahrenheit = function(degK) {
      return Math.round((1.8 * (degK - 273)) + 32);
    }

    $scope.convertToDate = function(dt) {
      return new Date(dt * 1000);
    };
  }]
);
