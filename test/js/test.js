console.log("In test.js file!");
var testApp = angular.module('testApp', []);
            testApp.controller('testCtrl', function($scope, $http, WebService) {
                $scope.loginCall = function() {

                    WebService.authentication();

                };
});


console.log("halfway!")
testApp.factory('WebService', function ($http) {
    console.log('in factory');
return {
    authentication : function (requestAction) {
        $http.post("http://196.34.15.10/webservice/test.aspx", { 'SystemID': "Travelyst_27465181002836251944", 'RequestAction': "GetEnquiry", 'RequestXML': "<Request><EnquiryKey>7533</EnquiryKey></Request>", 'OutputFormat': "JSON"})
            .then(function (response) { window.location.href = "http://103.19.89.152:8080/earnfit/ui/angular/dashboard.html";}, 
                  // Error Handling
                  function (response) {console.log(response)});
    }
  }
});