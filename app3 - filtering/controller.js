angular.module('myApp').controller('myCtrl', function($scope, employeeService) {
    $scope.employees = employeeService.getEmployees();
});