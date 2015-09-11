angular.module('arrayApp').controller('arrayController', ['$scope', 'employeeService', function($scope, employeeService) {
    $scope.employees = employeeService.getEmployees();
}]);

//first thing in array maps to first item, angular looks $scope, employeeService.