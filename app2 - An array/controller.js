angular.module('arrayApp').controller('arrayController', function($scope, employeeService) {
    $scope.employees = employeeService.getEmployees();
});