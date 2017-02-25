var app = angular.module('angApp', [
    'jcs-autoValidate',
    'angular-ladda'
]);

app.controller('angAppCtrl', function($scope, $http){
    $scope.formModel = {};
    $scope.submitting = false;
    $scope.registerClicked = function() {
        $scope.submitting = true;
        $http.post('https://reqres.in/api/users', $scope.formModel)
            .success(function(data) {
                $scope.submitting = false;
                $scope.formModel = {};
                console.log("data:", data);
            }).error(function (err) {
                $scope.submitting = false;
                console.error('error:', err);
            });
    };
});
