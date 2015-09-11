angular.module(apiApp).controller('swapiCtrl', function($scope, swapiVehicleService) {
    $scope.vader = "I am your father";
    $scope.vehicles = swapiVehicleService.getVehicles().then(function(vehiclesObj){
        var vehicles = vehiclesObj.results;
        vehicles.forEach(function(vehicle){
            vehicle.cost_in_usd = vehicle.cost_in_credits * 1000;
        
        
        });
        $scope.vehicles = vehicles;
    });
});