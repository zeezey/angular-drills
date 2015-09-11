angular.module('myApp').controller('myCtrl', function($scope, employeeService) {
    $scope.employees = employeeService.getEmployees();
    $scope.$watch('daFilter', function(newValue, old){
        
        var ourFilter = {};
        if(!newValue){
            return;
        }
        var split = newValue.split(',');
        
        if(split.length > 1){
            for(var i = 0; i <split.length; i++){
                var piece = split[i];
                piece.split(':')
            var propertyName = piece[0];
                var searchVal = piece[1];
                doneFilter[propertyName] = searchVal;
            
           
        }
    });
});