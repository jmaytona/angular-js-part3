var test = angular.module('myApp', []);

test.config(function(){
    //Before the application run
});

test.run(function(){
    //after the application run
})

test.controller('TestController', [ '$scope', function($scope){
    $scope.message = "Hi Guys";
    $scope.forexes = [
        {
            currency: "USD",
            rate: 0.25,
            date: "11/23/2018"

        },
        {
            currency: "JPY",
            rate: 5.7,
            date: "11/25/2018"
        },
        {
            currency: "EUR",
            rate: 1.3,
            date: "11/01/2018"
        }
    ];
}])
